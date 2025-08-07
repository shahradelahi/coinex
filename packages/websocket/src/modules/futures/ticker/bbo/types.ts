/**
 * @interface FuturesBboSubscriptionParams
 * @description Parameters for subscribing to BBO updates.
 */
export interface FuturesBboSubscriptionParams {
  /**
   * @property {string[]} market_list - List of market names.
   */
  market_list: string[];
}

/**
 * @interface FuturesBboUnsubscribeParams
 * @description Parameters for unsubscribing from BBO updates.
 */
export interface FuturesBboUnsubscribeParams {
  /**
   * @property {string[]} market_list - List of market names to unsubscribe from. An empty array unsubscribes from all.
   */
  market_list: string[];
}

/**
 * @interface FuturesBboUpdate
 * @description Represents a BBO update push from the server.
 */
export interface FuturesBboUpdate {
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
