import { type Options } from 'ky';

export type * from './modules/account/types';
export type * from './modules/assets/types';
export type * from './modules/futures/types';
export type * from './modules/maintain/types';
export type * from './modules/spot/types';

/**
 * @interface CoinExOptions
 * @description Options for the CoinEx client.
 */
export interface CoinExOptions {
  /**
   * @property {string} apiKey - The API key (access ID).
   */
  apiKey: string;
  /**
   * @property {string} secretKey - The secret key for signing requests.
   */
  secretKey: string;
  /**
   * @property {Options} [kyOptions] - Custom options for the ky instance.
   */
  kyOptions?: Options;
}

/**
 * @interface CoinExResponse
 * @description Represents the unified response structure from the CoinEx API v2.
 */
export interface CoinExResponse<T> {
  /**
   * @property {number} code - The response code. Should be 0 for success.
   * @example 0
   */
  code: number;
  /**
   * @property {T} data - The response data.
   */
  data: T;
  /**
   * @property {string} message - The response message.
   * @example "OK"
   */
  message: string;
}

export interface RequestOptions extends Options {
  responseType?: 'json' | 'text';
  context?: {
    public?: boolean;
  };
}

/**
 * @interface PingResponse
 * @description Response for the ping method.
 * @see https://docs.coinex.com/api/v2/common/http/ping
 */
export interface PingResponse {
  /**
   * @property {string} result - Should be "pong".
   */
  result: 'pong';
}

/**
 * @interface GetSystemTimeResponse
 * @description Response for the getSystemTime method.
 * @see https://docs.coinex.com/api/v2/common/http/time
 */
export interface GetSystemTimeResponse {
  /**
   * @property {number} timestamp - Server timestamp, unit: millisecond.
   */
  timestamp: number;
}
