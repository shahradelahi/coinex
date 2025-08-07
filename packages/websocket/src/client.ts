import EventEmitter from 'eventemitter3';

import { AuthenticatedWebSocket } from '@/lib/websocket';

import { Futures, Spot } from './modules';
import type {
  CoinExWebSocketOptions,
  PingResponse,
  ServerTimeResponse,
  WebSocketRequest,
  WebSocketResponse,
} from './types';

interface CoinExWebSocketEvents {
  open: (type: 'spot' | 'futures') => void;
  close: (type: 'spot' | 'futures') => void;
  error: (error: Error, type: 'spot' | 'futures') => void;
  message: (message: WebSocketResponse<unknown>, type: 'spot' | 'futures') => void;
}

export class CoinExWebSocket extends EventEmitter<CoinExWebSocketEvents> {
  public readonly spot: Spot;
  public readonly futures: Futures;

  readonly #options: CoinExWebSocketOptions;

  constructor(options: CoinExWebSocketOptions) {
    super();
    this.#options = { autoConnect: true, autoReconnect: true, ...options };

    this.spot = new Spot(this.#options);
    this.futures = new Futures(this.#options);

    this.#forwardEvents();

    if (this.#options.autoConnect) {
      this.connect().finally(() => {});
    }
  }

  #forwardEvents() {
    const forward = (ws: AuthenticatedWebSocket, type: 'spot' | 'futures') => {
      ws.on('open', () => this.emit('open', type));
      ws.on('close', () => this.emit('close', type));
      ws.on('error', (error) => this.emit('error', error, type));
      ws.on('message', (message) => this.emit('message', message, type));
    };

    forward(this.spot.ws, 'spot');
    forward(this.futures.ws, 'futures');
  }

  /**
   * Initiates the WebSocket connections.
   */
  public async connect() {
    this.spot.ws.connect();
    this.futures.ws.connect();
    await this.#waitForConnection();
  }

  /**
   * Closes the WebSocket connections.
   */
  public close() {
    this.spot.ws.close();
    this.futures.ws.close();
  }

  /**
   * Sends a message to the specified WebSocket connection.
   * @param payload - The message payload.
   * @param type - The type of WebSocket connection to use.
   * @returns The message ID.
   */
  public send<T>(payload: Omit<WebSocketRequest<T>, 'id'>, type: 'spot' | 'futures'): number {
    if (type === 'spot') {
      return this.spot.ws.send(payload);
    }
    return this.futures.ws.send(payload);
  }

  /**
   * Pings the server to keep the connection alive.
   * @returns A promise that resolves with the ping response.
   * @see https://docs.coinex.com/api/v2/common/ws/ping
   */
  public async ping(): Promise<WebSocketResponse<PingResponse>> {
    return this.spot.ws.sendAndCapture({ method: 'server.ping', params: {} });
  }

  /**
   * Gets the server time.
   * @returns A promise that resolves with the server time response.
   * @see https://docs.coinex.com/api/v2/common/ws/time
   */
  public async getServerTime(): Promise<WebSocketResponse<ServerTimeResponse>> {
    return this.spot.ws.sendAndCapture({ method: 'server.time', params: {} });
  }

  /**
   * Waits for the WebSocket connections to be established.
   * @returns A promise that resolves when both connections are open.
   */
  async #waitForConnection(): Promise<void> {
    const promises: Promise<void>[] = [];

    if (!this.spot.ws.isConnected()) {
      promises.push(new Promise<void>((resolve) => this.spot.ws.once('open', resolve)));
    }

    if (!this.futures.ws.isConnected()) {
      promises.push(new Promise<void>((resolve) => this.futures.ws.once('open', resolve)));
    }

    await Promise.all(promises);
  }
}
