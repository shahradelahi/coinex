import {
  type MarketType,
  type OrderSide,
  type TriggerPriceType as PriceType,
} from '@coinex-org/internal-shared';

export type SpotKlinePeriod =
  | '1min'
  | '5min'
  | '15min'
  | '30min'
  | '1hour'
  | '2hour'
  | '4hour'
  | '6hour'
  | '12hour'
  | '1day'
  | '3day'
  | '1week';

/**
 * @interface SpotMarketStatus
 * @description Represents the status of a single spot market.
 * @see https://docs.coinex.com/api/v2/spot/market/http/list-market
 */
export interface SpotMarketStatus {
  /**
   * @property {string} market - The name of the market, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {MarketType} market_type - The type of the market, e.g., "spot".
   */
  market_type: MarketType;
  /**
   * @property {string} base_ccy - The base currency, e.g., "BTC".
   */
  base_ccy: string;
  /**
   * @property {string} quote_ccy - The quote currency, e.g., "USDT".
   */
  quote_ccy: string;
  /**
   * @property {number} base_ccy_precision - The precision of the base currency.
   */
  base_ccy_precision: number;
  /**
   * @property {number} quote_ccy_precision - The precision of the quote currency.
   */
  quote_ccy_precision: number;
  /**
   * @property {string} min_amount - The minimum order amount.
   */
  min_amount: string;
  /**
   * @property {boolean} is_amm_available - Whether AMM is available for this market.
   */
  is_amm_available: boolean;
  /**
   * @property {boolean} is_margin_available - Whether margin trading is available for this market.
   */
  is_margin_available: boolean;
  /**
   * @property {boolean} is_emitted - Whether the market is currently active.
   */
  is_emitted: boolean;
}

/**
 * @interface SpotListMarketParams
 * @description Parameters for listing spot markets.
 * @see https://docs.coinex.com/api/v2/spot/market/http/list-market
 */
export interface SpotListMarketParams {
  /**
   * @property {string} [market] - A specific market to query, e.g., "BTCUSDT".
   */
  market?: string;
}

/**
 * @interface SpotListMarketResponse
 * @description The response for the listMarket method.
 */
export type SpotListMarketResponse = SpotMarketStatus[];

/**
 * @interface SpotMarketTicker
 * @description Represents the ticker information for a single spot market.
 * @see https://docs.coinex.com/api/v2/spot/market/http/list-market-ticker
 */
export interface SpotMarketTicker {
  /**
   * @property {string} market - The name of the market, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {string} last - The last traded price.
   */
  last: string;
  /**
   * @property {string} open - The opening price.
   */
  open: string;
  /**
   * @property {string} close - The closing price.
   */
  close: string;
  /**
   * @property {string} high - The highest price.
   */
  high: string;
  /**
   * @property {string} low - The lowest price.
   */
  low: string;
  /**
   * @property {string} volume - The trading volume.
   */
  volume: string;
  /**
   * @property {string} value - The trading value.
   */
  value: string;
  /**
   * @property {number} period - The time period in seconds for the ticker data.
   */
  period: number;
}

/**
 * @interface SpotListMarketTickerParams
 * @description Parameters for listing spot market tickers.
 * @see https://docs.coinex.com/api/v2/spot/market/http/list-market-ticker
 */
export interface SpotListMarketTickerParams {
  /**
   * @property {string} [market] - A specific market to query, e.g., "BTCUSDT".
   */
  market?: string;
}

/**
 * @interface SpotListMarketTickerResponse
 * @description The response for the listMarketTicker method.
 */
export type SpotListMarketTickerResponse = SpotMarketTicker[];

/**
 * @interface SpotMarketDepth
 * @description Represents the market depth for a single spot market.
 * @see https://docs.coinex.com/api/v2/spot/market/http/list-market-depth
 */
export interface SpotMarketDepth {
  /**
   * @property {string} last - The last traded price.
   */
  last: string;
  /**
   * @property {number} updated_at - The time of the last update.
   */
  updated_at: number;
  /**
   * @property {[string, string][]} asks - The asks side of the order book.
   */
  asks: [string, string][];
  /**
   * @property {[string, string][]} bids - The bids side of the order book.
   */
  bids: [string, string][];
}

/**
 * @interface SpotListMarketDepthParams
 * @description Parameters for listing spot market depth.
 * @see https://docs.coinex.com/api/v2/spot/market/http/list-market-depth
 */
export interface SpotListMarketDepthParams {
  /**
   * @property {string} market - The market to query, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {number} limit - The number of depth levels to retrieve.
   */
  limit: number;
  /**
   * @property {string} merge_level - The level at which to merge the order book.
   */
  merge_level: string;
}

/**
 * @interface SpotListMarketDepthResponse
 * @description The response for the listMarketDepth method.
 */
export type SpotListMarketDepthResponse = SpotMarketDepth;

/**
 * @typedef SpotMarketKline
 * @description Represents a single k-line (candlestick) data point.
 * @see https://docs.coinex.com/api/v2/spot/market/http/list-market-kline
 */
export type SpotMarketKline = [
  timestamp: number,
  open: string,
  close: string,
  high: string,
  low: string,
  volume: string,
  value: string,
];

/**
 * @interface SpotListMarketKlineParams
 * @description Parameters for listing spot market k-lines.
 * @see https://docs.coinex.com/api/v2/spot/market/http/list-market-kline
 */
export interface SpotListMarketKlineParams {
  /**
   * @property {string} market - The market to query, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {PriceType} [price_type] - The type of price to use for the k-line.
   */
  price_type?: PriceType;
  /**
   * @property {SpotKlinePeriod} period - The k-line period.
   */
  period: SpotKlinePeriod;
  /**
   * @property {number} limit - The number of k-lines to retrieve.
   */
  limit: number;
}

/**
 * @interface SpotListMarketKlineResponse
 * @description The response for the listMarketKline method.
 */
export type SpotListMarketKlineResponse = SpotMarketKline[];

/**
 * @interface SpotMarketDeal
 * @description Represents a single market deal.
 * @see https://docs.coinex.com/api/v2/spot/market/http/list-market-deals
 */
export interface SpotMarketDeal {
  /**
   * @property {number} deal_id - The ID of the deal.
   */
  deal_id: number;
  /**
   * @property {number} created_at - The time the deal was created.
   */
  created_at: number;
  /**
   * @property {OrderSide} type - The type of the order, "buy" or "sell".
   */
  type: OrderSide;
  /**
   * @property {string} price - The price at which the deal was executed.
   */
  price: string;
  /**
   * @property {string} amount - The amount of the deal.
   */
  amount: string;
}

/**
 * @interface SpotListMarketDealsParams
 * @description Parameters for listing spot market deals.
 * @see https://docs.coinex.com/api/v2/spot/market/http/list-market-deals
 */
export interface SpotListMarketDealsParams {
  /**
   * @property {string} market - The market to query, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {number} [limit] - The number of deals to retrieve.
   */
  limit?: number;
  /**
   * @property {number} [last_id] - The ID of the last deal to start from.
   */
  last_id?: number;
}

/**
 * @interface SpotListMarketDealsResponse
 * @description The response for the listMarketDeals method.
 */
export type SpotListMarketDealsResponse = SpotMarketDeal[];

/**
 * @interface SpotMarketIndex
 * @description Represents the index price for a single market.
 * @see https://docs.coinex.com/api/v2/spot/market/http/list-market-index
 */
export interface SpotMarketIndex {
  /**
   * @property {string} market - The name of the market, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {string} index_name - The name of the index.
   */
  index_name: string;
  /**
   * @property {string} index_price - The current index price.
   */
  index_price: string;
}

/**
 * @interface SpotListMarketIndexParams
 * @description Parameters for listing spot market index prices.
 * @see https://docs.coinex.com/api/v2/spot/market/http/list-market-index
 */
export interface SpotListMarketIndexParams {
  /**
   * @property {string} [market] - A specific market to query, e.g., "BTCUSDT".
   */
  market?: string;
}

/**
 * @interface SpotListMarketIndexResponse
 * @description The response for the listMarketIndex method.
 */
export type SpotListMarketIndexResponse = SpotMarketIndex[];
