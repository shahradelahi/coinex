/**
 * @description Represents a single market subscription for depth updates.
 * [market_name, limit, interval, if_full]
 */
export type SpotDepthMarketSubscription = [
  string,
  5 | 10 | 20 | 50,
  (
    | '0'
    | '0.00000000001'
    | '0.000000000001'
    | '0.0000000001'
    | '0.000000001'
    | '0.00000001'
    | '0.0000001'
    | '0.000001'
    | '0.00001'
    | '0.0001'
    | '0.001'
    | '0.01'
    | '0.1'
    | '1'
    | '10'
    | '100'
    | '1000'
  ),
  boolean,
];

/**
 * @interface SpotDepthSubscriptionParams
 * @description Parameters for subscribing to market depth updates.
 */
export interface SpotDepthSubscriptionParams {
  /**
   * @property {SpotDepthMarketSubscription[]} market_list - List of market subscriptions.
   */
  market_list: SpotDepthMarketSubscription[];
}

/**
 * @interface SpotDepthUnsubscribeParams
 * @description Parameters for unsubscribing from market depth updates.
 */
export interface SpotDepthUnsubscribeParams {
  /**
   * @property {string[]} market_list - List of market names to unsubscribe from. An empty array unsubscribes from all.
   */
  market_list: string[];
}

/**
 * @interface SpotDepthData
 * @description Represents the depth data for a market.
 */
export interface SpotDepthData {
  /**
   * @property {[string, string][]} asks - Seller data.
   */
  asks: [string, string][];
  /**
   * @property {[string, string][]} bids - Buyer data.
   */
  bids: [string, string][];
  /**
   * @property {string} last - Latest price.
   */
  last: string;
  /**
   * @property {number} updated_at - Timestamp (millisecond).
   */
  updated_at: number;
  /**
   * @property {number} checksum - Data checksum.
   */
  checksum: number;
}

/**
 * @interface SpotDepthUpdate
 * @description Represents a market depth update push from the server.
 */
export interface SpotDepthUpdate {
  /**
   * @property {string} market - Market name.
   */
  market: string;
  /**
   * @property {boolean} is_full - True means full push, and false means incremental push.
   */
  is_full: boolean;
  /**
   * @property {SpotDepthData} depth - Depth data.
   */
  depth: SpotDepthData;
}
