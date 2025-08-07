import {
  OrderSide,
  OrderType,
  StopOrderEvent,
  StopOrderStatus,
  TriggerDirection,
} from '@coinex-org/internal-shared';

/**
 * @interface SpotStopOrderSubscriptionParams
 * @description Parameters for subscribing to user stop order updates.
 */
export interface SpotStopOrderSubscriptionParams {
  /**
   * @property {string[]} market_list - List of market names.
   * @description An empty array subscribes to all markets.
   */
  market_list: string[];
}

/**
 * @interface SpotStopOrderUnsubscribeParams
 * @description Parameters for unsubscribing from user stop order updates.
 */
export interface SpotStopOrderUnsubscribeParams {
  /**
   * @property {string[]} market_list - List of market names to unsubscribe from. An empty array unsubscribes from all.
   */
  market_list: string[];
}

/**
 * @interface SpotStopOrder
 * @description Represents a single stop order.
 */
export interface SpotStopOrder {
  /**
   * @property {number} stop_id - Order id.
   */
  stop_id: number;
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
   * @property {OrderSide} side - Sell or buy.
   */
  side: OrderSide;
  /**
   * @property {string} amount - Order quantity after triggering.
   */
  amount: string;
  /**
   * @property {string} price - Order price after triggering, market order as "0".
   */
  price: string;
  /**
   * @property {string} trigger_price - Stop price.
   */
  trigger_price: string;
  /**
   * @property {TriggerDirection} trigger_direction - Stop order trigger direction.
   */
  trigger_direction: TriggerDirection;
  /**
   * @property {string} taker_fee_rate - Taker rate.
   */
  taker_fee_rate: string;
  /**
   * @property {string} maker_fee_rate - Maker rate.
   */
  maker_fee_rate: string;
  /**
   * @property {string} client_id - User-defined id.
   */
  client_id: string;
  /**
   * @property {StopOrderStatus} status - Stop order status.
   */
  status: StopOrderStatus;
  /**
   * @property {number} created_at - Order time, milliseconds.
   */
  created_at: number;
  /**
   * @property {number} updated_at - Order time, milliseconds.
   */
  updated_at: number;
}

/**
 * @interface SpotStopOrderUpdate
 * @description Represents a user stop order update push from the server.
 */
export interface SpotStopOrderUpdate {
  /**
   * @property {StopOrderEvent} event - Stop order update event type.
   */
  event: StopOrderEvent;
  /**
   * @property {SpotStopOrder} stop - Stop order info.
   */
  stop: SpotStopOrder;
}
