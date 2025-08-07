/**
 * @interface FuturesIndexSubscriptionParams
 * @description Parameters for subscribing to market index updates.
 */
export interface FuturesIndexSubscriptionParams {
  /**
   * @property {string[]} market_list - List of market names.
   * @description An empty array subscribes to all markets.
   */
  market_list: string[];
}

/**
 * @interface FuturesIndexUnsubscribeParams
 * @description Parameters for unsubscribing from market index updates.
 */
export interface FuturesIndexUnsubscribeParams {
  /**
   * @property {string[]} market_list - List of market names to unsubscribe from. An empty array unsubscribes from all.
   */
  market_list: string[];
}

/**
 * @interface FuturesIndexUpdate
 * @description Represents a market index update push from the server.
 */
export interface FuturesIndexUpdate {
  /**
   * @property {string} market - Market name.
   */
  market: string;
  /**
   * @property {string} index_price - Index price.
   */
  index_price: string;
  /**
   * @property {string} mark_price - Mark price.
   */
  mark_price: string;
}
