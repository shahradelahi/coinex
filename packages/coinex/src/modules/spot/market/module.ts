import deepmerge from 'deepmerge';

import { type CoinExClient } from '@/client';
import { noUndefined } from '@/lib/object';
import type { RequestOptions } from '@/types';

import type {
  SpotListMarketDealsParams,
  SpotListMarketDealsResponse,
  SpotListMarketDepthParams,
  SpotListMarketDepthResponse,
  SpotListMarketIndexParams,
  SpotListMarketIndexResponse,
  SpotListMarketKlineParams,
  SpotListMarketKlineResponse,
  SpotListMarketParams,
  SpotListMarketResponse,
  SpotListMarketTickerParams,
  SpotListMarketTickerResponse,
} from './types';

export class Market {
  #client: CoinExClient;

  constructor(client: CoinExClient) {
    this.#client = client;
  }

  /**
   * Get Market Status
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<SpotListMarketResponse>} The market status.
   * @see https://docs.coinex.com/api/v2/spot/market/http/list-market
   */
  listMarket(
    params: SpotListMarketParams = {},
    options: RequestOptions = {}
  ): Promise<SpotListMarketResponse> {
    return this.#client.request<SpotListMarketResponse>(
      'spot/market',
      deepmerge(
        {
          method: 'GET',
          searchParams: noUndefined(params),
          context: {
            public: true,
          },
        },
        options
      )
    );
  }

  /**
   * Get Market Information
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<SpotListMarketTickerResponse>} The market ticker information.
   * @see https://docs.coinex.com/api/v2/spot/market/http/list-market-ticker
   */
  listMarketTicker(
    params: SpotListMarketTickerParams = {},
    options: RequestOptions = {}
  ): Promise<SpotListMarketTickerResponse> {
    return this.#client.request<SpotListMarketTickerResponse>(
      'spot/ticker',
      deepmerge(
        {
          method: 'GET',
          searchParams: noUndefined(params),
          context: {
            public: true,
          },
        },
        options
      )
    );
  }

  /**
   * Get Market Depth
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<SpotListMarketDepthResponse>} The market depth information.
   * @see https://docs.coinex.com/api/v2/spot/market/http/list-market-depth
   */
  listMarketDepth(
    params: SpotListMarketDepthParams,
    options: RequestOptions = {}
  ): Promise<SpotListMarketDepthResponse> {
    return this.#client.request<SpotListMarketDepthResponse>(
      'spot/depth',
      deepmerge(
        {
          method: 'GET',
          searchParams: noUndefined(params),
          context: {
            public: true,
          },
        },
        options
      )
    );
  }

  /**
   * Get Market Candlestick
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<SpotListMarketKlineResponse>} The market candlestick data.
   * @see https://docs.coinex.com/api/v2/spot/market/http/list-market-kline
   */
  listMarketKline(
    params: SpotListMarketKlineParams,
    options: RequestOptions = {}
  ): Promise<SpotListMarketKlineResponse> {
    return this.#client.request<SpotListMarketKlineResponse>(
      'spot/kline',
      deepmerge(
        {
          method: 'GET',
          searchParams: noUndefined(params),
          context: {
            public: true,
          },
        },
        options
      )
    );
  }

  /**
   * Get Market Transactions
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<SpotListMarketDealsResponse>} The market transactions.
   * @see https://docs.coinex.com/api/v2/spot/market/http/list-market-deals
   */
  listMarketDeals(
    params: SpotListMarketDealsParams,
    options: RequestOptions = {}
  ): Promise<SpotListMarketDealsResponse> {
    return this.#client.request<SpotListMarketDealsResponse>(
      'spot/deals',
      deepmerge(
        {
          method: 'GET',
          searchParams: noUndefined(params),
          context: {
            public: true,
          },
        },
        options
      )
    );
  }

  /**
   * Get Market Index
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<SpotListMarketIndexResponse>} The market index information.
   * @see https://docs.coinex.com/api/v2/spot/market/http/list-market-index
   */
  listMarketIndex(
    params: SpotListMarketIndexParams = {},
    options: RequestOptions = {}
  ): Promise<SpotListMarketIndexResponse> {
    return this.#client.request<SpotListMarketIndexResponse>(
      'spot/index',
      deepmerge(
        {
          method: 'GET',
          searchParams: noUndefined(params),
          context: {
            public: true,
          },
        },
        options
      )
    );
  }
}
