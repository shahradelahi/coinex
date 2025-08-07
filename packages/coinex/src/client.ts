import deepmerge from 'deepmerge';
import ky, { type BeforeRequestHook, type KyInstance } from 'ky';

import { signRequest } from './lib/crypto';
import { CoinExAPIError } from './lib/errors';
import { Account, Assets, Futures, Maintain, Spot } from './modules';
import {
  CoinExOptions,
  CoinExResponse,
  GetSystemTimeResponse,
  PingResponse,
  RequestOptions,
} from './types';

export class CoinExClient {
  readonly #apiKey: string;
  readonly #secretKey: string;
  readonly #api: KyInstance;

  public readonly account: Account;
  public readonly assets: Assets;
  public readonly maintain: Maintain;
  public readonly spot: Spot;
  public readonly futures: Futures;

  constructor(options: CoinExOptions) {
    this.#apiKey = options.apiKey;
    this.#secretKey = options.secretKey;

    const beforeRequest: BeforeRequestHook = (request, options: RequestOptions) => {
      if (options.context?.public) {
        return;
      }

      const timestamp = Date.now();
      const body = (options as any).json ? JSON.stringify((options as any).json) : undefined;
      const url = new URL(request.url);
      const path = url.pathname + url.search;

      const signature = signRequest(request.method, path, body, timestamp, this.#secretKey);

      request.headers.set('X-COINEX-KEY', this.#apiKey);
      request.headers.set('X-COINEX-SIGN', signature);
      request.headers.set('X-COINEX-TIMESTAMP', String(timestamp));
      if (body) {
        request.headers.set('Content-Type', 'application/json; charset=utf-8');
      }
    };

    this.#api = ky.create(
      deepmerge(
        {
          prefixUrl: 'https://api.coinex.com/v2',
          timeout: 10000,
          hooks: {
            beforeRequest: [beforeRequest],
            afterResponse: [
              async (_request, _options, response) => {
                const contentType = response.headers.get('content-type');
                if (contentType?.includes('application/json')) {
                  const clonedResponse = response.clone();
                  const json = (await clonedResponse.json()) as CoinExResponse<unknown>;
                  if (json.code !== 0) {
                    throw new CoinExAPIError(json.code, json.message);
                  }
                  // Return a new response with just the data part of the body
                  return new Response(JSON.stringify(json.data), response);
                }
                return response;
              },
            ],
          },
        },
        options.kyOptions || {}
      )
    );

    this.account = new Account(this);
    this.assets = new Assets(this);
    this.maintain = new Maintain(this);
    this.spot = new Spot(this);
    this.futures = new Futures(this);
  }

  public request<T>(path: string, options?: RequestOptions): Promise<T> {
    const { responseType = 'json', ...restOptions } = options || {};

    const kyPromise = this.#api(path, restOptions);

    if (responseType === 'text') {
      return kyPromise.text() as Promise<any>;
    }

    return kyPromise.json<T>();
  }

  /**
   * Ping the server.
   * @param options - The options for the request.
   * @returns {Promise<PingResponse>} A promise that resolves with the ping response.
   * @see https://docs.coinex.com/api/v2/common/http/ping
   */
  public ping(options: RequestOptions = {}): Promise<PingResponse> {
    return this.request<PingResponse>(
      'ping',
      deepmerge(
        {
          method: 'GET',
          context: {
            public: true,
          },
        },
        options
      )
    );
  }

  /**
   * Get the system time.
   * @param options - The options for the request.
   * @returns {Promise<GetSystemTimeResponse>} A promise that resolves with the system time.
   * @see https://docs.coinex.com/api/v2/common/http/time
   */
  public getSystemTime(options: RequestOptions = {}): Promise<GetSystemTimeResponse> {
    return this.request<GetSystemTimeResponse>(
      'time',
      deepmerge(
        {
          method: 'GET',
          context: {
            public: true,
          },
        },
        options
      )
    );
  }
}
