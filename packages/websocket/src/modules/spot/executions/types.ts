import { type OrderSide } from '@coinex-org/internal-shared';

/**
 * @interface SpotUserDealsSubscriptionParams
 * @description Parameters for subscribing to user transaction updates.
 */
export interface SpotUserDealsSubscriptionParams {
  /**
   * @property {string[]} market_list - List of market names.
   * @description An empty array subscribes to all markets.
   */
  market_list: string[];
}

/**
 * @interface SpotUserDealsUnsubscribeParams
 * @description Parameters for unsubscribing from user transaction updates.
 */
export interface SpotUserDealsUnsubscribeParams {
  /**
   * @property {string[]} market_list - List of market names to unsubscribe from. An empty array unsubscribes from all.
   */
  market_list: string[];
}

/**
 * @interface SpotUserDeal
 * @description Represents a single user transaction.
 */
export interface SpotUserDeal {
  /**
   * @property {number} deal_id - Transaction ID.
   */
  deal_id: number;
  /**
   * @property {number} created_at - Transaction timestamp (millisecond).
   */
  created_at: number;
  /**
   * @property {string} market - Market name.
   */
  market: string;
  /**
   * @property {OrderSide} side - "buy" or "sell".
   */
  side: OrderSide;
  /**
   * @property {number} order_id - Order ID.
   */
  order_id: number;
  /**
   * @property {string} client_id - Client ID.
   */
  client_id: string;
  /**
   * @property {string | null} margin_market - Margin market, null for non-margin markets.
   */
  margin_market: string | null;
  /**
   * @property {string} price - Filled price.
   */
  price: string;
  /**
   * @property {string} amount - Filled volume.
   */
  amount: string;
  /**
   * @property {'taker' | 'maker'} role - "taker" or "maker".
   */
  role: 'taker' | 'maker';
  /**
   * @property {string} fee - Trading fee charged.
   */
  fee: string;
  /**
   * @property {string} fee_ccy - Trading fee currency.
   */
  fee_ccy: string;
}

/**
 * @interface SpotUserDealsUpdate
 * @description Represents a user transaction update push from the server.
 */
export type SpotUserDealsUpdate = SpotUserDeal;
