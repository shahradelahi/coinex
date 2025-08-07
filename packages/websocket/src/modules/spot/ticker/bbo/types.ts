/**
 * @interface SpotBboSubscriptionParams
 * @description Parameters for subscribing to BBO updates.
 */
export interface SpotBboSubscriptionParams {
  /**
   * @property {string[]} market_list - List of market names.
   */
  market_list: string[];
}

/**
 * @interface SpotBboUnsubscribeParams
 * @description Parameters for unsubscribing from BBO updates.
 */
export interface SpotBboUnsubscribeParams {
  /**
   * @property {string[]} market_list - List of market names to unsubscribe from. An empty array unsubscribes from all.
   */
  market_list: string[];
}

/**
 * @interface SpotBboUpdate
 * @description Represents a BBO update push from the server.
 */
export interface SpotBboUpdate {
  /**
   * @property {string} market - Market name.
   */
  market: string;
  /**
   * @property {number} updated_at - Timestamp (millisecond).
   */
  updated_at: number;
  /**
   * @property {string} best_bid_price - Best bid price.
   */
  best_bid_price: string;
  /**
   * @property {string} best_bid_size - Best bid size.
   */
  best_bid_size: string;
  /**
   * @property {string} best_ask_price - Best ask price.
   */
  best_ask_price: string;
  /**
   * @property {string} best_ask_size - Best ask size.
   */
  best_ask_size: string;
}
