import {
  type OrderSide,
  type OrderStatus,
  type OrderType,
  type StopLossType,
  type TakeProfitType,
  type TriggerPriceType,
} from '@coinex-org/internal-shared';

import { type Pagination } from '@/modules';

export enum SpotOrderOption {
  POST_ONLY = 'post_only',
  IOC = 'ioc',
  FOK = 'fok',
}

/**
 * @interface SpotOrder
 * @description Represents a single spot order.
 */
export interface SpotOrder {
  /**
   * @property {number} order_id - The ID of the order.
   */
  order_id: number;
  /**
   * @property {string} market - The market in which the order was placed.
   */
  market: string;
  /**
   * @property {OrderSide} side - The side of the order, "buy" or "sell".
   */
  side: OrderSide;
  /**
   * @property {OrderType} type - The type of the order, e.g., "limit".
   */
  type: OrderType;
  /**
   * @property {string} price - The price of the order.
   */
  price: string;
  /**
   * @property {string} amount - The amount of the order.
   */
  amount: string;
  /**
   * @property {string} value - The total value of the order.
   */
  value: string;
  /**
   * @property {string} filled_amount - The amount that has been filled.
   */
  filled_amount: string;
  /**
   * @property {string} filled_value - The value that has been filled.
   */
  filled_value: string;
  /**
   * @property {string} fee - The transaction fee.
   */
  fee: string;
  /**
   * @property {string} fee_ccy - The currency of the transaction fee.
   */
  fee_ccy: string;
  /**
   * @property {OrderStatus} status - The status of the order.
   */
  status: OrderStatus;
  /**
   * @property {number} created_at - The time the order was created.
   */
  created_at: number;
  /**
   * @property {number} updated_at - The time the order was last updated.
   */
  updated_at: number;
  /**
   * @property {string} client_id - The client-defined ID of the order.
   */
  client_id: string;
}

/**
 * @interface SpotStopOrder
 * @description Represents a single stop order in the spot market.
 */
export interface SpotStopOrder {
  /**
   * @property {number} stop_id - The ID of the stop order.
   */
  stop_id: number;
  /**
   * @property {string} market - The market in which the stop order was placed.
   */
  market: string;
  /**
   * @property {OrderSide} side - The side of the order, "buy" or "sell".
   */
  side: OrderSide;
  /**
   * @property {OrderType} type - The type of the order, e.g., "limit".
   */
  type: OrderType;
  /**
   * @property {string} price - The price of the order.
   */
  price: string;
  /**
   * @property {string} amount - The amount of the order.
   */
  amount: string;
  /**
   * @property {string} trigger_price - The trigger price for the stop order.
   */
  trigger_price: string;
  /**
   * @property {TriggerPriceType} trigger_price_type - The type of trigger price.
   */
  trigger_price_type: TriggerPriceType;
  /**
   * @property {OrderStatus} status - The status of the stop order.
   */
  status: OrderStatus;
  /**
   * @property {number} created_at - The time the stop order was created.
   */
  created_at: number;
  /**
   * @property {number} updated_at - The time the stop order was last updated.
   */
  updated_at: number;
  /**
   * @property {string} client_id - The client-defined ID of the stop order.
   */
  client_id: string;
}

/**
 * @interface SpotPutOrderParams
 * @description Parameters for placing a spot order.
 * @see https://docs.coinex.com/api/v2/spot/order/http/put-order
 */
export interface SpotPutOrderParams {
  /**
   * @property {string} market - The market to place the order in, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {OrderSide} side - The side of the order, "buy" or "sell".
   */
  side: OrderSide;
  /**
   * @property {OrderType} type - The type of the order, e.g., "limit".
   */
  type: OrderType;
  /**
   * @property {string} price - The price of the order.
   */
  price: string;
  /**
   * @property {string} amount - The amount of the order.
   */
  amount: string;
  /**
   * @property {string} [value] - The total value of the order.
   */
  value?: string;
  /**
   * @property {string} [client_id] - A client-defined ID for the order.
   */
  client_id?: string;
  /**
   * @property {boolean} [hide] - Whether the order should be hidden.
   */
  hide?: boolean;
  /**
   * @property {SpotOrderOption} [order_option] - Additional order options.
   */
  order_option?: SpotOrderOption;
}

/**
 * @interface SpotPutOrderResponse
 * @description The response for the putOrder method.
 */
export type SpotPutOrderResponse = SpotOrder;

/**
 * @interface SpotPutStopOrderParams
 * @description Parameters for placing a stop order.
 * @see https://docs.coinex.com/api/v2/spot/order/http/put-stop-order
 */
export interface SpotPutStopOrderParams {
  /**
   * @property {string} market - The market to place the order in, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {OrderSide} side - The side of the order, "buy" or "sell".
   */
  side: OrderSide;
  /**
   * @property {OrderType} type - The type of the order, e.g., "limit".
   */
  type: OrderType;
  /**
   * @property {string} price - The price of the order.
   */
  price: string;
  /**
   * @property {string} amount - The amount of the order.
   */
  amount: string;
  /**
   * @property {string} trigger_price - The trigger price for the stop order.
   */
  trigger_price: string;
  /**
   * @property {TriggerPriceType} trigger_price_type - The type of trigger price.
   */
  trigger_price_type: TriggerPriceType;
  /**
   * @property {string} [client_id] - A client-defined ID for the order.
   */
  client_id?: string;
  /**
   * @property {TakeProfitType} [take_profit_type] - The type of take-profit.
   */
  take_profit_type?: TakeProfitType;
  /**
   * @property {StopLossType} [stop_loss_type] - The type of stop-loss.
   */
  stop_loss_type?: StopLossType;
  /**
   * @property {string} [take_profit_price] - The take-profit price.
   */
  take_profit_price?: string;
  /**
   * @property {string} [stop_loss_price] - The stop-loss price.
   */
  stop_loss_price?: string;
}

/**
 * @interface SpotPutStopOrderResponse
 * @description The response for the putStopOrder method.
 */
export type SpotPutStopOrderResponse = SpotStopOrder;

/**
 * @interface SpotGetOrderStatusParams
 * @description Parameters for getting the status of a spot order.
 * @see https://docs.coinex.com/api/v2/spot/order/http/get-order-status
 */
export interface SpotGetOrderStatusParams {
  /**
   * @property {string} market - The market of the order, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {number} order_id - The ID of the order.
   */
  order_id: number;
}

/**
 * @interface SpotGetOrderStatusResponse
 * @description The response for the getOrderStatus method.
 */
export type SpotGetOrderStatusResponse = SpotOrder;

/**
 * @interface SpotGetMultiOrderStatusParams
 * @description Parameters for getting the status of multiple spot orders.
 * @see https://docs.coinex.com/api/v2/spot/order/http/get-multi-order-status
 */
export interface SpotGetMultiOrderStatusParams {
  /**
   * @property {string} market - The market of the orders, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {string} order_ids - A comma-separated list of order IDs.
   */
  order_ids: string;
}

/**
 * @interface SpotGetMultiOrderStatusResponse
 * @description The response for the getMultiOrderStatus method.
 */
export type SpotGetMultiOrderStatusResponse = SpotOrder[];

/**
 * @interface SpotListPendingOrderParams
 * @description Parameters for listing pending spot orders.
 * @see https://docs.coinex.com/api/v2/spot/order/http/list-pending-order
 */
export interface SpotListPendingOrderParams {
  /**
   * @property {string} market - The market to query, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {OrderSide} [side] - The side of the orders, "buy" or "sell".
   */
  side?: OrderSide;
  /**
   * @property {number} [page] - The page number to retrieve.
   */
  page?: number;
  /**
   * @property {number} [limit] - The number of orders to retrieve per page.
   */
  limit?: number;
}

/**
 * @interface SpotListPendingOrderResponse
 * @description The response for the listPendingOrder method.
 */
export interface SpotListPendingOrderResponse {
  data: SpotOrder[];
  pagination: Pagination;
}

/**
 * @interface SpotListFinishedOrderParams
 * @description Parameters for listing finished spot orders.
 * @see https://docs.coinex.com/api/v2/spot/order/http/list-finished-order
 */
export interface SpotListFinishedOrderParams {
  /**
   * @property {string} market - The market to query, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {OrderSide} [side] - The side of the orders, "buy" or "sell".
   */
  side?: OrderSide;
  /**
   * @property {number} [start_time] - The start time of the query range.
   */
  start_time?: number;
  /**
   * @property {number} [end_time] - The end time of the query range.
   */
  end_time?: number;
  /**
   * @property {number} [page] - The page number to retrieve.
   */
  page?: number;
  /**
   * @property {number} [limit] - The number of orders to retrieve per page.
   */
  limit?: number;
}

/**
 * @interface SpotListFinishedOrderResponse
 * @description The response for the listFinishedOrder method.
 */
export interface SpotListFinishedOrderResponse {
  data: SpotOrder[];
  pagination: Pagination;
}

/**
 * @interface SpotListPendingStopOrderParams
 * @description Parameters for listing pending stop orders.
 * @see https://docs.coinex.com/api/v2/spot/order/http/list-pending-stop-order
 */
export interface SpotListPendingStopOrderParams {
  /**
   * @property {string} market - The market to query, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {OrderSide} [side] - The side of the orders, "buy" or "sell".
   */
  side?: OrderSide;
  /**
   * @property {number} [page] - The page number to retrieve.
   */
  page?: number;
  /**
   * @property {number} [limit] - The number of orders to retrieve per page.
   */
  limit?: number;
}

/**
 * @interface SpotListPendingStopOrderResponse
 * @description The response for the listPendingStopOrder method.
 */
export interface SpotListPendingStopOrderResponse {
  data: SpotStopOrder[];
  pagination: Pagination;
}

/**
 * @interface SpotListFinishedStopOrderParams
 * @description Parameters for listing finished stop orders.
 * @see https://docs.coinex.com/api/v2/spot/order/http/list-finished-stop-order
 */
export interface SpotListFinishedStopOrderParams {
  /**
   * @property {string} market - The market to query, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {OrderSide} [side] - The side of the orders, "buy" or "sell".
   */
  side?: OrderSide;
  /**
   * @property {number} [start_time] - The start time of the query range.
   */
  start_time?: number;
  /**
   * @property {number} [end_time] - The end time of the query range.
   */
  end_time?: number;
  /**
   * @property {number} [page] - The page number to retrieve.
   */
  page?: number;
  /**
   * @property {number} [limit] - The number of orders to retrieve per page.
   */
  limit?: number;
}

/**
 * @interface SpotListFinishedStopOrderResponse
 * @description The response for the listFinishedStopOrder method.
 */
export interface SpotListFinishedStopOrderResponse {
  data: SpotStopOrder[];
  pagination: Pagination;
}

/**
 * @interface SpotEditOrderParams
 * @description Parameters for editing a spot order.
 * @see https://docs.coinex.com/api/v2/spot/order/http/edit-order
 */
export interface SpotEditOrderParams {
  /**
   * @property {string} market - The market of the order, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {number} order_id - The ID of the order to edit.
   */
  order_id: number;
  /**
   * @property {string} price - The new price for the order.
   */
  price: string;
  /**
   * @property {string} amount - The new amount for the order.
   */
  amount: string;
}

/**
 * @interface SpotEditOrderResponse
 * @description The response for the editOrder method.
 */
export type SpotEditOrderResponse = SpotOrder;

/**
 * @interface SpotEditStopOrderParams
 * @description Parameters for editing a stop order.
 * @see https://docs.coinex.com/api/v2/spot/order/http/edit-stop-order
 */
export interface SpotEditStopOrderParams {
  /**
   * @property {string} market - The market of the order, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {number} stop_id - The ID of the stop order to edit.
   */
  stop_id: number;
  /**
   * @property {string} price - The new price for the order.
   */
  price: string;
  /**
   * @property {string} amount - The new amount for the order.
   */
  amount: string;
  /**
   * @property {string} trigger_price - The new trigger price for the stop order.
   */
  trigger_price: string;
}

/**
 * @interface SpotEditStopOrderResponse
 * @description The response for the editStopOrder method.
 */
export type SpotEditStopOrderResponse = SpotStopOrder;

/**
 * @interface SpotCancelOrderParams
 * @description Parameters for canceling a spot order.
 * @see https://docs.coinex.com/api/v2/spot/order/http/cancel-order
 */
export interface SpotCancelOrderParams {
  /**
   * @property {string} market - The market of the order, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {number} order_id - The ID of the order to cancel.
   */
  order_id: number;
}

/**
 * @interface SpotCancelOrderByClientIdParams
 * @description Parameters for canceling a spot order by client ID.
 * @see https://docs.coinex.com/api/v2/spot/order/http/cancel-order-by-client-id
 */
export interface SpotCancelOrderByClientIdParams {
  /**
   * @property {string} market - The market of the order, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {string} client_id - The client-defined ID of the order to cancel.
   */
  client_id: string;
}

/**
 * @interface SpotCancelStopOrderParams
 * @description Parameters for canceling a stop order.
 * @see https://docs.coinex.com/api/v2/spot/order/http/cancel-stop-order
 */
export interface SpotCancelStopOrderParams {
  /**
   * @property {string} market - The market of the order, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {number} stop_id - The ID of the stop order to cancel.
   */
  stop_id: number;
}

/**
 * @interface SpotCancelStopOrderByClientIdParams
 * @description Parameters for canceling a stop order by client ID.
 * @see https://docs.coinex.com/api/v2/spot/order/http/cancel-stop-order-by-client-id
 */
export interface SpotCancelStopOrderByClientIdParams {
  /**
   * @property {string} market - The market of the order, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {string} client_id - The client-defined ID of the stop order to cancel.
   */
  client_id: string;
}

/**
 * @interface SpotCancelAllOrderParams
 * @description Parameters for canceling all spot orders in a market.
 * @see https://docs.coinex.com/api/v2/spot/order/http/cancel-all-order
 */
export interface SpotCancelAllOrderParams {
  /**
   * @property {string} market - The market in which to cancel all orders, e.g., "BTCUSDT".
   */
  market: string;
}

/**
 * @interface SpotCancelBatchOrderParams
 * @description Parameters for canceling a batch of spot orders.
 * @see https://docs.coinex.com/api/v2/spot/order/http/cancel-batch-order
 */
export interface SpotCancelBatchOrderParams {
  /**
   * @property {string} market - The market of the orders, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {string} order_ids - A comma-separated list of order IDs to cancel.
   */
  order_ids: string;
}

/**
 * @interface SpotCancelBatchStopOrderParams
 * @description Parameters for canceling a batch of stop orders.
 * @see https://docs.coinex.com/api/v2/spot/order/http/cancel-batch-stop-order
 */
export interface SpotCancelBatchStopOrderParams {
  /**
   * @property {string} market - The market of the orders, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {string} stop_ids - A comma-separated list of stop order IDs to cancel.
   */
  stop_ids: string;
}

/**
 * @interface SpotPutMultiOrderParams
 * @description Parameters for placing multiple spot orders.
 * @see https://docs.coinex.com/api/v2/spot/order/http/put-multi-order
 */
export interface SpotPutMultiOrderParams {
  /**
   * @property {string} market - The market to place the order in, e.g., "BTCUSDT".
   */
  market: string;
  /**
   * @property {OrderSide} side - The side of the order, "buy" or "sell".
   */
  side: OrderSide;
  /**
   * @property {OrderType} type - The type of the order, e.g., "limit".
   */
  type: OrderType;
  /**
   * @property {string} price - The price of the order.
   */
  price: string;
  /**
   * @property {string} amount - The amount of the order.
   */
  amount: string;
  /**
   * @property {string} [value] - The total value of the order.
   */
  value?: string;
  /**
   * @property {string} [client_id] - A client-defined ID for the order.
   */
  client_id?: string;
  /**
   * @property {boolean} [hide] - Whether the order should be hidden.
   */
  hide?: boolean;
  /**
   * @property {SpotOrderOption} [order_option] - Additional order options.
   */
  order_option?: SpotOrderOption;
  /**
   * @property {TakeProfitType} [take_profit_type] - The type of take-profit.
   */
  take_profit_type?: TakeProfitType;
  /**
   * @property {StopLossType} [stop_loss_type] - The type of stop-loss.
   */
  stop_loss_type?: StopLossType;
  /**
   * @property {string} [take_profit_price] - The take-profit price.
   */
  take_profit_price?: string;
  /**
   * @property {string} [stop_loss_price] - The stop-loss price.
   */
  stop_loss_price?: string;
}

/**
 * @interface SpotPutMultiStopOrderParams
 * @description Parameters for placing multiple stop orders.
 * @see https://docs.coinex.com/api/v2/spot/order/http/put-multi-stop-order
 */
export interface SpotPutMultiStopOrderParams {
  /**
   * @property {string} market - The market name, e.g., BTCUSDT.
   */
  market: string;
  /**
   * @property {OrderSide} side - The order side, 'buy' or 'sell'.
   */
  side: OrderSide;
  /**
   * @property {OrderType} type - The order type, 'limit' or 'market'.
   */
  type: OrderType;
  /**
   * @property {string} price - The price of the order.
   */
  price: string;
  /**
   * @property {string} amount - The amount of the order.
   */
  amount: string;
  /**
   * @property {string} trigger_price - The trigger price for the stop order.
   */
  trigger_price: string;
  /**
   * @property {TriggerPriceType} trigger_price_type - The type of trigger price.
   */
  trigger_price_type: TriggerPriceType;
  /**
   * @property {string} [client_id] - A client-defined ID for the order.
   */
  client_id?: string;
}
