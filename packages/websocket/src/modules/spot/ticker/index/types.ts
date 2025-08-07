/**
 * @interface SpotIndexSubscriptionParams
 * @description Parameters for subscribing to market index updates.
 */
export interface SpotIndexSubscriptionParams {
  /**
   * @property {string[]} market_list - List of market names.
   */
  market_list: string[];
}

/**
 * @interface SpotIndexUnsubscribeParams
 * @description Parameters for unsubscribing from market index updates.
 */
export interface SpotIndexUnsubscribeParams {
  /**
   * @property {string[]} market_list - List of market names to unsubscribe from. An empty array unsubscribes from all.
   */
  market_list: string[];
}

/**
 * @interface SpotIndexUpdate
 * @description Represents a market index update push from the server.
 */
export interface SpotIndexUpdate {
  /**
   * @property {string} market - Market name.
   */
  market: string;
  /**
   * @property {string} index_price - Index price.
   */
  index_price: string;
}
