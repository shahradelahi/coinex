import deepmerge from 'deepmerge';

import { type CoinExClient } from '@/client';
import { noUndefined } from '@/lib/object';
import type { RequestOptions } from '@/types';

import type {
  ListMarketBasisHistoryParams,
  ListMarketBasisHistoryResponse,
  ListMarketDealsParams,
  ListMarketDealsResponse,
  ListMarketDepthParams,
  ListMarketDepthResponse,
  ListMarketFundingRateHistoryParams,
  ListMarketFundingRateHistoryResponse,
  ListMarketFundingRateParams,
  ListMarketFundingRateResponse,
  ListMarketIndexParams,
  ListMarketIndexResponse,
  ListMarketKlineParams,
  ListMarketKlineResponse,
  ListMarketLiquidationHistoryParams,
  ListMarketLiquidationHistoryResponse,
  ListMarketParams,
  ListMarketPositionLevelParams,
  ListMarketPositionLevelResponse,
  ListMarketPremiumHistoryParams,
  ListMarketPremiumHistoryResponse,
  ListMarketResponse,
  ListMarketTickerParams,
  ListMarketTickerResponse,
} from './types';

export class Market {
  #client: CoinExClient;

  constructor(client: CoinExClient) {
    this.#client = client;
  }

  /**
   * Get Market Basis Rate History
   * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-basis-history
   */
  listMarketBasisHistory(
    params: ListMarketBasisHistoryParams,
    options: RequestOptions = {}
  ): Promise<ListMarketBasisHistoryResponse> {
    return this.#client.request<ListMarketBasisHistoryResponse>(
      'futures/basis-history',
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
   * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-deals
   */
  listMarketDeals(
    params: ListMarketDealsParams,
    options: RequestOptions = {}
  ): Promise<ListMarketDealsResponse> {
    return this.#client.request<ListMarketDealsResponse>(
      'futures/deals',
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
   * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-depth
   */
  listMarketDepth(
    params: ListMarketDepthParams,
    options: RequestOptions = {}
  ): Promise<ListMarketDepthResponse> {
    return this.#client.request<ListMarketDepthResponse>(
      'futures/depth',
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
   * Get Market Funding Rate History
   * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-funding-rate-history
   */
  listMarketFundingRateHistory(
    params: ListMarketFundingRateHistoryParams,
    options: RequestOptions = {}
  ): Promise<ListMarketFundingRateHistoryResponse> {
    return this.#client.request<ListMarketFundingRateHistoryResponse>(
      'futures/funding-rate-history',
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
   * Get Market Funding Rate
   * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-funding-rate
   */
  listMarketFundingRate(
    params: ListMarketFundingRateParams,
    options: RequestOptions = {}
  ): Promise<ListMarketFundingRateResponse> {
    return this.#client.request<ListMarketFundingRateResponse>(
      'futures/funding-rate',
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
   * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-index
   */
  listMarketIndex(
    params: ListMarketIndexParams,
    options: RequestOptions = {}
  ): Promise<ListMarketIndexResponse> {
    return this.#client.request<ListMarketIndexResponse>(
      'futures/index',
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
   * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-kline
   */
  listMarketKline(
    params: ListMarketKlineParams,
    options: RequestOptions = {}
  ): Promise<ListMarketKlineResponse> {
    return this.#client.request<ListMarketKlineResponse>(
      'futures/kline',
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
   * Get Market Liquidation History
   * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-liquidation-history
   */
  listMarketLiquidationHistory(
    params: ListMarketLiquidationHistoryParams,
    options: RequestOptions = {}
  ): Promise<ListMarketLiquidationHistoryResponse> {
    return this.#client.request<ListMarketLiquidationHistoryResponse>(
      'futures/liquidation-history',
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
   * Get Market Position Level
   * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-position-level
   */
  listMarketPositionLevel(
    params: ListMarketPositionLevelParams,
    options: RequestOptions = {}
  ): Promise<ListMarketPositionLevelResponse> {
    return this.#client.request<ListMarketPositionLevelResponse>(
      'futures/position-level',
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
   * Get Market Premium Index Price History
   * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-premium-history
   */
  listMarketPremiumHistory(
    params: ListMarketPremiumHistoryParams,
    options: RequestOptions = {}
  ): Promise<ListMarketPremiumHistoryResponse> {
    return this.#client.request<ListMarketPremiumHistoryResponse>(
      'futures/premium-index-history',
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
   * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-ticker
   */
  listMarketTicker(
    params: ListMarketTickerParams,
    options: RequestOptions = {}
  ): Promise<ListMarketTickerResponse> {
    return this.#client.request<ListMarketTickerResponse>(
      'futures/ticker',
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
   * Get Market Status
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<ListMarketResponse>} The market status.
   * @see https://docs.coinex.com/api/v2/futures/market/http/list-market
   */
  listMarket(params: ListMarketParams, options: RequestOptions = {}): Promise<ListMarketResponse> {
    return this.#client.request<ListMarketResponse>(
      'futures/market',
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
