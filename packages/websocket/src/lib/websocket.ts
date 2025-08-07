import EventEmitter from 'node:events';
import { gunzipSync } from 'node:zlib';
import WebSocket from 'ws';

import { signWebSocketRequest } from '@/lib/crypto';
import { CoinExWebSocketError } from '@/lib/errors';
import type { CoinExWebSocketOptions, WebSocketRequest, WebSocketResponse } from '@/types';

interface AuthenticatedWebSocketOptions
  extends Pick<CoinExWebSocketOptions, 'apiKey' | 'secretKey' | 'autoReconnect'> {
  baseUrl: string;
}

export class AuthenticatedWebSocket extends EventEmitter {
  #ws: WebSocket | undefined;

  readonly #apiKey: string;
  readonly #secretKey: string;
  readonly #baseUrl: string;
  readonly #autoReconnect: boolean;

  #pingInterval: NodeJS.Timeout | undefined;
  #authRequestId: number | null = null;
  #isAuthenticated: boolean = false;
  #serverTime: number | undefined;
  #timeRequestId: number | null = null;
  #messageId = 0;
  #explicitlyClosed = false;

  constructor(options: AuthenticatedWebSocketOptions) {
    super();
    this.#apiKey = options.apiKey;
    this.#secretKey = options.secretKey;
    this.#baseUrl = options.baseUrl;
    this.#autoReconnect = options.autoReconnect ?? true;
  }

  public connect() {
    if (this.#ws) {
      return;
    }
    this.#explicitlyClosed = false;
    this.#connect();
  }

  public close() {
    this.#explicitlyClosed = true;
    if (this.#ws) {
      this.#ws.close();
      this.#ws = undefined;
    }
    this.#stopPing();
  }

  #connect() {
    this.#ws = new WebSocket(this.#baseUrl);
    this.#ws.binaryType = 'nodebuffer';

    this.#ws.on('open', () => {
      this.#timeRequestId = this.#send({ method: 'server.time', params: {} });
    });

    this.#ws.on('message', (data: Buffer) => {
      const decompressed = gunzipSync(data);
      const message: WebSocketResponse<any> = JSON.parse(decompressed.toString());

      if (message.id === this.#timeRequestId && 'timestamp' in message.data) {
        this.#timeRequestId = null;
        this.#serverTime = Date.now() - parseInt(message.data.timestamp, 10);
        this.#authenticate();
        return;
      }

      if (this.#authRequestId && message.id === this.#authRequestId) {
        this.#authRequestId = null;
        if (message.code === 0) {
          this.#isAuthenticated = true;
          this.emit('open');
          this.#startPing();
        } else {
          this.emit('error', new CoinExWebSocketError(message.code, message.message));
          this.#ws?.close();
        }
        return;
      }

      this.emit('message', message);

      if (message.method) {
        this.emit(message.method, message.data);
      }
    });

    this.#ws.on('close', () => {
      this.emit('close');
      this.#reset();
      this.#stopPing();
      if (!this.#explicitlyClosed && this.#autoReconnect) {
        setTimeout(() => this.#connect(), 1000);
      }
    });

    this.#ws.on('error', (error) => {
      this.emit('error', error);
    });
  }

  #reset() {
    this.#authRequestId = null;
    this.#isAuthenticated = false;
    this.#messageId = 0;
  }

  #startPing() {
    this.#pingInterval = setInterval(async () => {
      this.send({ method: 'server.ping', params: {} });
    }, 10000);
  }

  #stopPing() {
    if (this.#pingInterval) {
      clearInterval(this.#pingInterval);
      this.#pingInterval = undefined;
    }
  }

  #authenticate() {
    const timestamp = Math.floor((Date.now() - this.#serverTime!) / 1000) * 1000;
    const signature = signWebSocketRequest(timestamp, this.#secretKey);

    this.#authRequestId = this.#send({
      method: 'server.sign',
      params: {
        access_id: this.#apiKey,
        signed_str: signature,
        timestamp,
      },
    });
  }

  #send<T>(payload: Omit<WebSocketRequest<T>, 'id'>): number {
    if (this.#ws?.readyState === WebSocket.OPEN) {
      const id = ++this.#messageId;
      const message = { ...payload, id };
      this.#ws.send(JSON.stringify(message));
      return id;
    }
    return -1;
  }

  send<T>(payload: Omit<WebSocketRequest<T>, 'id'>): number {
    if (!this.isConnected()) {
      this.once('open', () => this.#send(payload));
      return -1;
    }
    return this.#send(payload);
  }

  public async sendAndCapture<T, R>(
    payload: Omit<WebSocketRequest<T>, 'id'>,
    timeout = 10000
  ): Promise<WebSocketResponse<R>> {
    const id = this.send(payload);

    return new Promise((resolve, reject) => {
      let timeoutId: NodeJS.Timeout | undefined = undefined;

      const onMessage = (message: WebSocketResponse<any>) => {
        if (message.id === id) {
          clearTimeout(timeoutId);
          this.removeListener('message', onMessage);
          if (message.code === 0) {
            resolve(message as WebSocketResponse<R>);
          } else {
            reject(new CoinExWebSocketError(message.code, message.message));
          }
        }
      };

      this.on('message', onMessage);

      timeoutId = setTimeout(() => {
        this.removeListener('message', onMessage);
        reject(new Error(`Request with id ${id} timed out after ${timeout}ms`));
      }, timeout);
    });
  }

  public sendAndListen<T, U>(
    payload: Omit<WebSocketRequest<T>, 'id'>,
    listenMethod: string,
    onUpdate: (update: U) => void
  ): number {
    const id = this.send(payload);
    this.on('message', (message: WebSocketResponse<any>) => {
      if (message.method === listenMethod) {
        onUpdate(message.data as U);
      }
    });
    return id;
  }

  public isConnected(): boolean {
    return this.#ws?.readyState === WebSocket.OPEN && this.#isAuthenticated;
  }
}
