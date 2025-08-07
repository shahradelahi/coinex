import { OrderSide } from '@coinex-org/internal-shared';

/**
 * @interface FuturesUserDealsSubscriptionParams
 * @description Parameters for subscribing to user transaction updates.
 */
export interface FuturesUserDealsSubscriptionParams {
  /**
   * @property {string[]} market_list - List of market names.
   * @description An empty array subscribes to all markets.
   */
  market_list: string[];
}

/**
 * @interface FuturesUserDealsUnsubscribeParams
 * @description Parameters for unsubscribing from user transaction updates.
 */
export interface FuturesUserDealsUnsubscribeParams {
  /**
   * @property {string[]} market_list - List of market names to unsubscribe from. An empty array unsubscribes from all.
   */
  market_list: string[];
}

/**
 * @interface FuturesUserDeal
 * @description Represents a single user transaction.
 */
export interface FuturesUserDeal {
  /**
   * @property {number} deal_id - Txid.
   */
  deal_id: number;
  /**
   * @property {number} created_at - Transaction timestamp (millisecond).
   */
  created_at: number;
  /**
   * @property {number} order_id - Related order id.
   */
  order_id: number;
  /**
   * @property {string} client_id - Client ID.
   */
  client_id: string;
  /**
   * @property {number} position_id - Position ID.
   */
  position_id: number;
  /**
   * @property {string} market - Market name.
   */
  market: string;
  /**
   * @property {OrderSide} side - Buy or sell.
   */
  side: OrderSide;
  /**
   * @property {string} price - Filled price.
   */
  price: string;
  /**
   * @property {string} amount - Filled volume.
   */
  amount: string;
  /**
   * @property {'taker' | 'maker'} role - Taker or maker.
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
 * @interface FuturesUserDealsUpdate
 * @description Represents a user transaction update push from the server.
 */
export type FuturesUserDealsUpdate = FuturesUserDeal;
