import { type MarketType, type TriggerPriceType as PriceType } from '@coinex-org/internal-shared';

export type KlinePeriod =
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
 * @interface MarketBasisHistory
 * @description Represents a single entry in the basis history of a futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-basis-history
 */
export interface MarketBasisHistory {
  /**
   * @property {string} market - The market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} basis - The basis rate.
   * @example "0.0001"
   */
  basis: string;
  /**
   * @property {string} price - The futures price.
   * @example "45000.00"
   */
  price: string;
  /**
   * @property {string} index_price - The index price.
   * @example "45001.00"
   */
  index_price: string;
  /**
   * @property {number} timestamp - The timestamp of the data.
   * @example 1622548800000
   */
  timestamp: number;
}

/**
 * @interface ListMarketBasisHistoryParams
 * @description Parameters for getting the basis rate history of a futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-basis-history
 */
export interface ListMarketBasisHistoryParams {
  /**
   * @property {string} market - The market to query.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {number} [start_time] - The start time of the query range in milliseconds.
   * @example 1622548800000
   */
  start_time?: number;
  /**
   * @property {number} [end_time] - The end time of the query range in milliseconds.
   * @example 1622635200000
   */
  end_time?: number;
  /**
   * @property {number} [limit] - The number of records to retrieve.
   * @example 100
   */
  limit?: number;
}

/**
 * @interface ListMarketBasisHistoryResponse
 * @description The response for the listMarketBasisHistory method.
 */
export type ListMarketBasisHistoryResponse = MarketBasisHistory[];

/**
 * @interface MarketDeal
 * @description Represents a single market transaction in the futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-deals
 */
export interface MarketDeal {
  /**
   * @property {number} deal_id - The ID of the deal.
   * @example 123456789
   */
  deal_id: number;
  /**
   * @property {number} created_at - The time the deal was created in milliseconds.
   * @example 1622548800000
   */
  created_at: number;
  /**
   * @property {'buy' | 'sell'} type - The type of the deal.
   * @example "buy"
   */
  type: 'buy' | 'sell';
  /**
   * @property {string} price - The price at which the deal was executed.
   * @example "45000.00"
   */
  price: string;
  /**
   * @property {string} amount - The amount of the deal.
   * @example "0.5"
   */
  amount: string;
}

/**
 * @interface ListMarketDealsParams
 * @description Parameters for getting market transactions in the futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-deals
 */
export interface ListMarketDealsParams {
  /**
   * @property {string} market - The market to query.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {number} [limit] - The number of deals to retrieve.
   * @example 100
   */
  limit?: number;
  /**
   * @property {number} [last_id] - The ID of the last deal to start from.
   * @example 123456789
   */
  last_id?: number;
}

/**
 * @interface ListMarketDealsResponse
 * @description The response for the listMarketDeals method.
 */
export type ListMarketDealsResponse = MarketDeal[];

/**
 * @interface MarketDepth
 * @description Represents the market depth for a single futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-depth
 */
export interface MarketDepth {
  /**
   * @property {string} last - The last traded price.
   * @example "45000.00"
   */
  last: string;
  /**
   * @property {number} updated_at - The time of the last update in milliseconds.
   * @example 1622548800000
   */
  updated_at: number;
  /**
   * @property {[string, string][]} asks - The asks side of the order book.
   * @example [["45001.00", "0.1"], ["45002.00", "0.2"]]
   */
  asks: [string, string][];
  /**
   * @property {[string, string][]} bids - The bids side of the order book.
   * @example [["45000.00", "0.3"], ["44999.00", "0.4"]]
   */
  bids: [string, string][];
}

/**
 * @interface ListMarketDepthParams
 * @description Parameters for getting market depth in the futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-depth
 */
export interface ListMarketDepthParams {
  /**
   * @property {string} market - The market to query.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {number} limit - The number of depth levels to retrieve.
   * @example 10
   */
  limit: number;
  /**
   * @property {string} merge_level - The level at which to merge the order book.
   * @example "0.01"
   */
  merge_level: string;
}

/**
 * @interface ListMarketDepthResponse
 * @description The response for the listMarketDepth method.
 */
export type ListMarketDepthResponse = MarketDepth;

/**
 * @interface MarketFundingRateHistory
 * @description Represents a single entry in the funding rate history of a futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-funding-rate-history
 */
export interface MarketFundingRateHistory {
  /**
   * @property {string} market - The market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} funding_rate - The funding rate.
   * @example "0.0001"
   */
  funding_rate: string;
  /**
   * @property {number} timestamp - The timestamp of the data in milliseconds.
   * @example 1622548800000
   */
  timestamp: number;
}

/**
 * @interface ListMarketFundingRateHistoryParams
 * @description Parameters for getting the funding rate history of a futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-funding-rate-history
 */
export interface ListMarketFundingRateHistoryParams {
  /**
   * @property {string} market - The market to query.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {number} [start_time] - The start time of the query range in milliseconds.
   * @example 1622548800000
   */
  start_time?: number;
  /**
   * @property {number} [end_time] - The end time of the query range in milliseconds.
   * @example 1622635200000
   */
  end_time?: number;
  /**
   * @property {number} [limit] - The number of records to retrieve.
   * @example 100
   */
  limit?: number;
}

/**
 * @interface ListMarketFundingRateHistoryResponse
 * @description The response for the listMarketFundingRateHistory method.
 */
export type ListMarketFundingRateHistoryResponse = MarketFundingRateHistory[];

/**
 * @interface MarketFundingRate
 * @description Represents the current funding rate of a futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-funding-rate
 */
export interface MarketFundingRate {
  /**
   * @property {string} market - The market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} funding_rate - The current funding rate.
   * @example "0.0001"
   */
  funding_rate: string;
  /**
   * @property {number} next_funding_time - The timestamp of the next funding event in milliseconds.
   * @example 1622552400000
   */
  next_funding_time: number;
}

/**
 * @interface ListMarketFundingRateParams
 * @description Parameters for getting the funding rate of a futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-funding-rate
 */
export interface ListMarketFundingRateParams {
  /**
   * @property {string} [market] - The market to query.
   * @example "BTCUSDT"
   */
  market?: string;
}

/**
 * @interface ListMarketFundingRateResponse
 * @description The response for the listMarketFundingRate method.
 */
export type ListMarketFundingRateResponse = MarketFundingRate[];

/**
 * @interface MarketIndex
 * @description Represents the index price of a futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-index
 */
export interface MarketIndex {
  /**
   * @property {string} market - The market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} index_name - The name of the index.
   * @example "BTCUSDT"
   */
  index_name: string;
  /**
   * @property {string} index_price - The current index price.
   * @example "45001.00"
   */
  index_price: string;
}

/**
 * @interface ListMarketIndexParams
 * @description Parameters for getting the index price of a futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-index
 */
export interface ListMarketIndexParams {
  /**
   * @property {string} [market] - The market to query.
   * @example "BTCUSDT"
   */
  market?: string;
}

/**
 * @interface ListMarketIndexResponse
 * @description The response for the listMarketIndex method.
 */
export type ListMarketIndexResponse = MarketIndex[];

/**
 * @typedef MarketKline
 * @description Represents a single candlestick data point for the futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-kline
 */
export type MarketKline = [
  timestamp: number,
  open: string,
  close: string,
  high: string,
  low: string,
  volume: string,
  value: string,
];

/**
 * @interface ListMarketKlineParams
 * @description Parameters for getting market candlesticks in the futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-kline
 */
export interface ListMarketKlineParams {
  /**
   * @property {string} market - The market to query.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {PriceType} [price_type] - The type of price to use for the k-line.
   * @example "latest_price"
   */
  price_type?: PriceType;
  /**
   * @property {KlinePeriod} period - The k-line period.
   * @example "1hour"
   */
  period: KlinePeriod;
  /**
   * @property {number} limit - The number of k-lines to retrieve.
   * @example 100
   */
  limit: number;
}

/**
 * @interface ListMarketKlineResponse
 * @description The response for the listMarketKline method.
 */
export type ListMarketKlineResponse = MarketKline[];

/**
 * @interface MarketLiquidationHistory
 * @description Represents a single entry in the liquidation history of a futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-liquidation-history
 */
export interface MarketLiquidationHistory {
  /**
   * @property {string} market - The market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {'buy' | 'sell'} side - The side of the liquidated position.
   * @example "buy"
   */
  side: 'buy' | 'sell';
  /**
   * @property {string} price - The price at which the liquidation occurred.
   * @example "44000.00"
   */
  price: string;
  /**
   * @property {string} amount - The amount of the liquidated position.
   * @example "1.5"
   */
  amount: string;
  /**
   * @property {number} timestamp - The timestamp of the liquidation in milliseconds.
   * @example 1622548800000
   */
  timestamp: number;
}

/**
 * @interface ListMarketLiquidationHistoryParams
 * @description Parameters for getting the liquidation history of a futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-liquidation-history
 */
export interface ListMarketLiquidationHistoryParams {
  /**
   * @property {string} market - The market to query.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {number} [start_time] - The start time of the query range in milliseconds.
   * @example 1622548800000
   */
  start_time?: number;
  /**
   * @property {number} [end_time] - The end time of the query range in milliseconds.
   * @example 1622635200000
   */
  end_time?: number;
  /**
   * @property {number} [limit] - The number of records to retrieve.
   * @example 100
   */
  limit?: number;
}

/**
 * @interface ListMarketLiquidationHistoryResponse
 * @description The response for the listMarketLiquidationHistory method.
 */
export type ListMarketLiquidationHistoryResponse = MarketLiquidationHistory[];

/**
 * @interface MarketPositionLevel
 * @description Represents the position level of a futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-position-level
 */
export interface MarketPositionLevel {
  /**
   * @property {string} market - The market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {{ amount: string; leverage: number; maintenance_margin_rate: string; min_initial_margin_rate: string; }[]} position_level - The position levels.
   */
  position_level: {
    amount: string;
    leverage: number;
    maintenance_margin_rate: string;
    min_initial_margin_rate: string;
  }[];
}

/**
 * @interface ListMarketPositionLevelParams
 * @description Parameters for getting the position level of a futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-position-level
 */
export interface ListMarketPositionLevelParams {
  /**
   * @property {string} [market] - The market to query.
   * @example "BTCUSDT"
   */
  market?: string;
}

/**
 * @interface ListMarketPositionLevelResponse
 * @description The response for the listMarketPositionLevel method.
 */
export type ListMarketPositionLevelResponse = MarketPositionLevel[];

/**
 * @interface MarketPremiumHistory
 * @description Represents a single entry in the premium index history of a futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-premium-history
 */
export interface MarketPremiumHistory {
  /**
   * @property {string} market - The market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} premium_index - The premium index.
   * @example "0.0001"
   */
  premium_index: string;
  /**
   * @property {string} price - The futures price.
   * @example "45000.00"
   */
  price: string;
  /**
   * @property {string} index_price - The index price.
   * @example "45001.00"
   */
  index_price: string;
  /**
   * @property {number} timestamp - The timestamp of the data in milliseconds.
   * @example 1622548800000
   */
  timestamp: number;
}

/**
 * @interface ListMarketPremiumHistoryParams
 * @description Parameters for getting the premium index history of a futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-premium-history
 */
export interface ListMarketPremiumHistoryParams {
  /**
   * @property {string} market - The market to query.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {number} [start_time] - The start time of the query range in milliseconds.
   * @example 1622548800000
   */
  start_time?: number;
  /**
   * @property {number} [end_time] - The end time of the query range in milliseconds.
   * @example 1622635200000
   */
  end_time?: number;
  /**
   * @property {number} [limit] - The number of records to retrieve.
   * @example 100
   */
  limit?: number;
}

/**
 * @interface ListMarketPremiumHistoryResponse
 * @description The response for the listMarketPremiumHistory method.
 */
export type ListMarketPremiumHistoryResponse = MarketPremiumHistory[];

/**
 * @interface MarketTicker
 * @description Represents the ticker information for a single futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-ticker
 */
export interface MarketTicker {
  /**
   * @property {string} market - The market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} last - The last traded price.
   * @example "45000.00"
   */
  last: string;
  /**
   * @property {string} open - The opening price.
   * @example "44000.00"
   */
  open: string;
  /**
   * @property {string} close - The closing price.
   * @example "45000.00"
   */
  close: string;
  /**
   * @property {string} high - The highest price.
   * @example "46000.00"
   */
  high: string;
  /**
   * @property {string} low - The lowest price.
   * @example "43000.00"
   */
  low: string;
  /**
   * @property {string} volume - The trading volume.
   * @example "1000.5"
   */
  volume: string;
  /**
   * @property {string} value - The trading value.
   * @example "45000000.00"
   */
  value: string;
  /**
   * @property {number} period - The time period in seconds for the ticker data.
   * @example 86400
   */
  period: number;
}

/**
 * @interface ListMarketTickerParams
 * @description Parameters for getting the ticker information of a futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market-ticker
 */
export interface ListMarketTickerParams {
  /**
   * @property {string} [market] - The market to query.
   * @example "BTCUSDT"
   */
  market?: string;
}

/**
 * @interface ListMarketTickerResponse
 * @description The response for the listMarketTicker method.
 */
export type ListMarketTickerResponse = MarketTicker[];

/**
 * @interface FuturesMarketStatus
 * @description Represents the status of a single futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market
 */
export interface FuturesMarketStatus {
  /**
   * @property {string} market - The market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {MarketType} market_type - The type of the market.
   * @example "FUTURES"
   */
  market_type: MarketType;
  /**
   * @property {string} base_ccy - The base currency.
   * @example "BTC"
   */
  base_ccy: string;
  /**
   * @property {string} quote_ccy - The quote currency.
   * @example "USDT"
   */
  quote_ccy: string;
  /**
   * @property {number} base_ccy_precision - The precision of the base currency.
   * @example 8
   */
  base_ccy_precision: number;
  /**
   * @property {number} quote_ccy_precision - The precision of the quote currency.
   * @example 2
   */
  quote_ccy_precision: number;
  /**
   * @property {string} min_amount - The minimum order amount.
   * @example "0.001"
   */
  min_amount: string;
  /**
   * @property {boolean} is_perpetual - Whether the market is a perpetual contract.
   * @example true
   */
  is_perpetual: boolean;
}

/**
 * @interface ListMarketParams
 * @description Parameters for getting the status of a futures market.
 * @see https://docs.coinex.com/api/v2/futures/market/http/list-market
 */
export interface ListMarketParams {
  /**
   * @property {string} [market] - The market to query.
   * @example "BTCUSDT"
   */
  market?: string;
}

/**
 * @interface ListMarketResponse
 * @description The response for the listMarket method.
 */
export type ListMarketResponse = FuturesMarketStatus[];
