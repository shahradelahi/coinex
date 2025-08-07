import { OrderSide } from '@coinex-org/internal-shared';

/**
 * @interface FuturesDealsSubscriptionParams
 * @description Parameters for subscribing to market deals updates.
 */
export interface FuturesDealsSubscriptionParams {
  /**
   * @property {string[]} market_list - List of market names.
   * @description An empty array subscribes to all markets.
   */
  market_list: string[];
}

/**
 * @interface FuturesDealsUnsubscribeParams
 * @description Parameters for unsubscribing from market deals updates.
 */
export interface FuturesDealsUnsubscribeParams {
  /**
   * @property {string[]} market_list - List of market names to unsubscribe from. An empty array unsubscribes from all.
   */
  market_list: string[];
}

/**
 * @interface FuturesDeal
 * @description Represents a single market transaction.
 */
export interface FuturesDeal {
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
 * @interface FuturesDealsUpdate
 * @description Represents a market deals update push from the server.
 */
export interface FuturesDealsUpdate {
  /**
   * @property {string} market - Market name.
   */
  market: string;
  /**
   * @property {FuturesDeal[]} deal_list - List of latest transactions.
   */
  deal_list: FuturesDeal[];
}
