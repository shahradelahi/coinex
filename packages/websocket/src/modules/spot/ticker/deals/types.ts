import { OrderSide } from '@coinex-org/internal-shared';

/**
 * @interface SpotDealsSubscriptionParams
 * @description Parameters for subscribing to market deals updates.
 */
export interface SpotDealsSubscriptionParams {
  /**
   * @property {string[]} market_list - List of market names.
   * @description An empty array subscribes to all markets.
   */
  market_list: string[];
}

/**
 * @interface SpotDealsUnsubscribeParams
 * @description Parameters for unsubscribing from market deals updates.
 */
export interface SpotDealsUnsubscribeParams {
  /**
   * @property {string[]} market_list - List of market names to unsubscribe from. An empty array unsubscribes from all.
   */
  market_list: string[];
}

/**
 * @interface SpotDeal
 * @description Represents a single market transaction.
 */
export interface SpotDeal {
  /**
   * @property {number} deal_id - Transaction ID.
   */
  deal_id: number;
  /**
   * @property {number} created_at - Transaction timestamp (milliseconds).
   */
  created_at: number;
  /**
   * @property {OrderSide} side - Taker side, "buy" or "sell".
   */
  side: OrderSide;
  /**
   * @property {string} price - Filled price.
   */
  price: string;
  /**
   * @property {string} amount - Executed amount.
   */
  amount: string;
}

/**
 * @interface SpotDealsUpdate
 * @description Represents a market deals update push from the server.
 */
export interface SpotDealsUpdate {
  /**
   * @property {string} market - Market name.
   */
  market: string;
  /**
   * @property {SpotDeal[]} deal_list - List of latest transactions.
   */
  deal_list: SpotDeal[];
}
