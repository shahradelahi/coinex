import { OrderEvent, OrderSide, OrderType } from '@coinex-org/internal-shared';

export * from './stop/types';

/**
 * @interface SpotOrderSubscriptionParams
 * @description Parameters for subscribing to user order updates.
 */
export interface SpotOrderSubscriptionParams {
  /**
   * @property {string[]} market_list - List of market names.
   * @description An empty array subscribes to all markets.
   */
  market_list: string[];
}

/**
 * @interface SpotOrderUnsubscribeParams
 * @description Parameters for unsubscribing from user order updates.
 */
export interface SpotOrderUnsubscribeParams {
  /**
   * @property {string[]} market_list - List of market names to unsubscribe from. An empty array unsubscribes from all.
   */
  market_list: string[];
}

/**
 * @interface SpotOrder
 * @description Represents a single order.
 */
export interface SpotOrder {
  /**
   * @property {number} order_id - Order id.
   */
  order_id: number;
  /**
   * @property {string} market - Market name.
   */
  market: string;
  /**
   * @property {string | null} margin_market - Margin market name, null for non-margin markets.
   */
  margin_market: string | null;
  /**
   * @property {OrderType} type - Order type, limit, market, maker_only, IOC or FOK.
   */
  type: OrderType;
  /**
   * @property {OrderSide} side - Order side, buy or sell.
   */
  side: OrderSide;
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
   * @property {string} filled_value - Filled value.
   */
  filled_value: string;
  /**
   * @property {string} taker_fee_rate - Taker rate.
   */
  taker_fee_rate: string;
  /**
   * @property {string} maker_fee_rate - Maker rate.
   */
  maker_fee_rate: string;
  /**
   * @property {string} base_ccy_fee - Trading fee paid in base currency.
   */
  base_ccy_fee: string;
  /**
   * @property {string} quote_ccy_fee - Trading fee paid in quote currency.
   */
  quote_ccy_fee: string;
  /**
   * @property {string} discount_ccy_fee - Trading fee paid mainly in CET.
   */
  discount_ccy_fee: string;
  /**
   * @property {string} last_filled_amount - Filled amount of the last transaction.
   */
  last_filled_amount: string;
  /**
   * @property {string} last_filled_price - Filled price of the last transaction.
   */
  last_filled_price: string;
  /**
   * @property {string} client_id - User-defined id.
   */
  client_id: string;
  /**
   * @property {number} created_at - Order timestamp, unit: millisecond.
   */
  created_at: number;
  /**
   * @property {number} updated_at - Latest update timestamp, unit: millisecond.
   */
  updated_at: number;
}

/**
 * @interface SpotOrderUpdate
 * @description Represents a user order update push from the server.
 */
export interface SpotOrderUpdate {
  /**
   * @property {OrderEvent} event - Order update event type.
   */
  event: OrderEvent;
  /**
   * @property {SpotOrder} order - Order data.
   */
  order: SpotOrder;
}
