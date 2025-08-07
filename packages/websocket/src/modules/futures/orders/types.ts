import { OrderEvent, OrderSide, OrderType } from '@coinex-org/internal-shared';

export * from './stop/types';

/**
 * @interface FuturesOrderSubscriptionParams
 * @description Parameters for subscribing to user order updates.
 */
export interface FuturesOrderSubscriptionParams {
  /**
   * @property {string[]} market_list - List of market names.
   * @description An empty array subscribes to all markets.
   */
  market_list: string[];
}

/**
 * @interface FuturesOrderUnsubscribeParams
 * @description Parameters for unsubscribing from user order updates.
 */
export interface FuturesOrderUnsubscribeParams {
  /**
   * @property {string[]} market_list - List of market names to unsubscribe from. An empty array unsubscribes from all.
   */
  market_list: string[];
}

/**
 * @interface FuturesOrder
 * @description Represents a single order.
 */
export interface FuturesOrder {
  /**
   * @property {number} order_id - Order id.
   */
  order_id: number;
  /**
   * @property {number} stop_id - Related stop order id.
   */
  stop_id: number;
  /**
   * @property {string} market - Market name.
   */
  market: string;
  /**
   * @property {OrderSide} side - Order side, buy or sell.
   */
  side: OrderSide;
  /**
   * @property {OrderType} type - Order type, limit, market, GTC, IOC or FOK.
   */
  type: OrderType;
  /**
   * @property {string} amount - Order amount.
   */
  amount: string;
  /**
   * @property {string} price - Price.
   */
  price: string;
  /**
   * @property {string} unfilled_amount - The remaining unfilled amount.
   */
  unfilled_amount: string;
  /**
   * @property {string} filled_amount - Filled volume.
   */
  filled_amount: string;
  /**
   * @property {string} filled_value - Filled value.
   */
  filled_value: string;
  /**
   * @property {string} client_id - User-defined id.
   */
  client_id: string;
  /**
   * @property {string} fee - Trading fee charged.
   */
  fee: string;
  /**
   * @property {string} fee_ccy - Trading fee currency.
   */
  fee_ccy: string;
  /**
   * @property {string} taker_fee_rate - Taker rate.
   */
  taker_fee_rate: string;
  /**
   * @property {string} maker_fee_rate - Maker rate.
   */
  maker_fee_rate: string;
  /**
   * @property {string} last_filled_amount - Filled amount of the last transaction.
   */
  last_filled_amount: string;
  /**
   * @property {string} last_filled_price - Filled price of the last transaction.
   */
  last_filled_price: string;
  /**
   * @property {number} created_at - Order timestamp (millisecond).
   */
  created_at: number;
  /**
   * @property {number} updated_at - Latest update timestamp (milliseconds).
   */
  updated_at: number;
}

/**
 * @interface FuturesOrderUpdate
 * @description Represents a user order update push from the server.
 */
export interface FuturesOrderUpdate {
  /**
   * @property {OrderEvent} event - Order update event type.
   */
  event: OrderEvent;
  /**
   * @property {FuturesOrder} order - Order data.
   */
  order: FuturesOrder;
}
