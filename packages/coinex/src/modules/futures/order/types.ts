import {
  type OrderSide,
  type OrderStatus,
  type OrderType,
  type StopLossType,
  type TakeProfitType,
  type TriggerPriceType,
} from '@coinex-org/internal-shared';

import { type Pagination } from '../../account/subaccount/types';

export enum OrderOption {
  POST_ONLY = 'post_only',
  IOC = 'ioc',
  FOK = 'fok',
}

/**
 * @interface Order
 * @description Represents a futures order.
 */
export interface Order {
  /**
   * @property {number} order_id - The ID of the order.
   * @example 123456789
   */
  order_id: number;
  /**
   * @property {string} market - The market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {OrderSide} side - The side of the order.
   * @example "buy"
   */
  side: OrderSide;
  /**
   * @property {OrderType} type - The type of the order.
   * @example "limit"
   */
  type: OrderType;
  /**
   * @property {string} price - The price of the order.
   * @example "45000.00"
   */
  price: string;
  /**
   * @property {string} amount - The amount of the order.
   * @example "0.5"
   */
  amount: string;
  /**
   * @property {string} value - The value of the order.
   * @example "22500.00"
   */
  value: string;
  /**
   * @property {string} filled_amount - The filled amount of the order.
   * @example "0.1"
   */
  filled_amount: string;
  /**
   * @property {string} filled_value - The filled value of the order.
   * @example "4500.00"
   */
  filled_value: string;
  /**
   * @property {string} fee - The transaction fee.
   * @example "0.02"
   */
  fee: string;
  /**
   * @property {string} fee_ccy - The currency of the transaction fee.
   * @example "USDT"
   */
  fee_ccy: string;
  /**
   * @property {OrderStatus} status - The status of the order.
   * @example "partially_filled"
   */
  status: OrderStatus;
  /**
   * @property {number} created_at - The time the order was created in milliseconds.
   * @example 1622548800000
   */
  created_at: number;
  /**
   * @property {number} updated_at - The time the order was last updated in milliseconds.
   * @example 1622548800000
   */
  updated_at: number;
  /**
   * @property {string} client_id - The client-provided ID.
   * @example "my-custom-id"
   */
  client_id: string;
}

/**
 * @interface StopOrder
 * @description Represents a futures stop order.
 */
export interface StopOrder {
  /**
   * @property {number} stop_id - The ID of the stop order.
   * @example 123456789
   */
  stop_id: number;
  /**
   * @property {string} market - The market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {OrderSide} side - The side of the order.
   * @example "buy"
   */
  side: OrderSide;
  /**
   * @property {OrderType} type - The type of the order.
   * @example "limit"
   */
  type: OrderType;
  /**
   * @property {string} price - The price of the order.
   * @example "45000.00"
   */
  price: string;
  /**
   * @property {string} amount - The amount of the order.
   * @example "0.5"
   */
  amount: string;
  /**
   * @property {string} trigger_price - The trigger price of the stop order.
   * @example "46000.00"
   */
  trigger_price: string;
  /**
   * @property {TriggerPriceType} trigger_price_type - The type of trigger price.
   * @example "latest_price"
   */
  trigger_price_type: TriggerPriceType;
  /**
   * @property {OrderStatus} status - The status of the order.
   * @example "pending"
   */
  status: OrderStatus;
  /**
   * @property {number} created_at - The time the order was created in milliseconds.
   * @example 1622548800000
   */
  created_at: number;
  /**
   * @property {number} updated_at - The time the order was last updated in milliseconds.
   * @example 1622548800000
   */
  updated_at: number;
  /**
   * @property {string} client_id - The client-provided ID.
   * @example "my-custom-stop-id"
   */
  client_id: string;
}

/**
 * @interface PutOrderParams
 * @description Parameters for placing a new futures order.
 * @see https://docs.coinex.com/api/v2/futures/order/http/put-order
 */
export interface PutOrderParams {
  /**
   * @property {string} market - The market to place the order in.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {OrderSide} side - The side of the order.
   * @example "buy"
   */
  side: OrderSide;
  /**
   * @property {OrderType} type - The type of the order.
   * @example "limit"
   */
  type: OrderType;
  /**
   * @property {string} price - The price of the order.
   * @example "45000.00"
   */
  price: string;
  /**
   * @property {string} amount - The amount of the order.
   * @example "0.5"
   */
  amount: string;
  /**
   * @property {string} [value] - The value of the order.
   * @example "22500.00"
   */
  value?: string;
  /**
   * @property {string} [client_id] - A unique identifier for the order.
   * @example "my-custom-id"
   */
  client_id?: string;
  /**
   * @property {boolean} [hide] - Whether the order should be hidden.
   * @example false
   */
  hide?: boolean;
  /**
   * @property {OrderOption} [order_option] - Additional order options.
   * @example "ioc"
   */
  order_option?: OrderOption;
  /**
   * @property {string} [take_profit_price] - The take profit price.
   * @example "50000.00"
   */
  take_profit_price?: string;
  /**
   * @property {string} [stop_loss_price] - The stop loss price.
   * @example "40000.00"
   */
  stop_loss_price?: string;
}

/**
 * @interface PutOrderResponse
 * @description The response for the putOrder method.
 */
export type PutOrderResponse = Order;

/**
 * @interface PutStopOrderParams
 * @description Parameters for placing a new futures stop order.
 * @see https://docs.coinex.com/api/v2/futures/order/http/put-stop-order
 */
export interface PutStopOrderParams {
  /**
   * @property {string} market - The market to place the order in.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {OrderSide} side - The side of the order.
   * @example "buy"
   */
  side: OrderSide;
  /**
   * @property {OrderType} type - The type of the order.
   * @example "limit"
   */
  type: OrderType;
  /**
   * @property {string} price - The price of the order.
   * @example "45000.00"
   */
  price: string;
  /**
   * @property {string} amount - The amount of the order.
   * @example "0.5"
   */
  amount: string;
  /**
   * @property {string} trigger_price - The trigger price for the stop order.
   * @example "46000.00"
   */
  trigger_price: string;
  /**
   * @property {TriggerPriceType} trigger_price_type - The type of trigger price.
   * @example "latest_price"
   */
  trigger_price_type: TriggerPriceType;
  /**
   * @property {string} [client_id] - A unique identifier for the order.
   * @example "my-custom-stop-id"
   */
  client_id?: string;
  /**
   * @property {TakeProfitType} [take_profit_type] - The take profit type.
   * @example "latest_price"
   */
  take_profit_type?: TakeProfitType;
  /**
   * @property {StopLossType} [stop_loss_type] - The stop loss type.
   * @example "latest_price"
   */
  stop_loss_type?: StopLossType;
  /**
   * @property {string} [take_profit_price] - The take profit price.
   * @example "50000.00"
   */
  take_profit_price?: string;
  /**
   * @property {string} [stop_loss_price] - The stop loss price.
   * @example "40000.00"
   */
  stop_loss_price?: string;
}

/**
 * @interface PutStopOrderResponse
 * @description The response for the putStopOrder method.
 */
export type PutStopOrderResponse = StopOrder;

/**
 * @interface GetOrderStatusParams
 * @description Parameters for getting the status of a single futures order.
 * @see https://docs.coinex.com/api/v2/futures/order/http/get-order-status
 */
export interface GetOrderStatusParams {
  /**
   * @property {string} market - The market of the order.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {number} order_id - The ID of the order to query.
   * @example 123456789
   */
  order_id: number;
}

/**
 * @interface GetOrderStatusResponse
 * @description The response for the getOrderStatus method.
 */
export type GetOrderStatusResponse = Order;

/**
 * @interface GetMultiOrderStatusParams
 * @description Parameters for getting the status of multiple futures orders.
 * @see https://docs.coinex.com/api/v2/futures/order/http/get-multi-order-status
 */
export interface GetMultiOrderStatusParams {
  /**
   * @property {string} market - The market of the orders.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} order_ids - A comma-separated list of order IDs.
   * @example "123456789,987654321"
   */
  order_ids: string;
}

/**
 * @interface GetMultiOrderStatusResponse
 * @description The response for the getMultiOrderStatus method.
 */
export type GetMultiOrderStatusResponse = Order[];

/**
 * @interface ListPendingOrderParams
 * @description Parameters for listing pending futures orders.
 * @see https://docs.coinex.com/api/v2/futures/order/http/list-pending-order
 */
export interface ListPendingOrderParams {
  /**
   * @property {string} market - The market to query.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {OrderSide} [side] - The side of the orders to retrieve.
   * @example "buy"
   */
  side?: OrderSide;
  /**
   * @property {number} [page] - The page number of the results.
   * @example 1
   */
  page?: number;
  /**
   * @property {number} [limit] - The number of orders per page.
   * @example 10
   */
  limit?: number;
}

/**
 * @interface ListPendingOrderResponse
 * @description The response for the listPendingOrder method.
 */
export interface ListPendingOrderResponse {
  data: Order[];
  pagination: Pagination;
}

/**
 * @interface ListFinishedOrderParams
 * @description Parameters for listing finished futures orders.
 * @see https://docs.coinex.com/api/v2/futures/order/http/list-finished-order
 */
export interface ListFinishedOrderParams {
  /**
   * @property {string} market - The market to query.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {OrderSide} [side] - The side of the orders to retrieve.
   * @example "buy"
   */
  side?: OrderSide;
  /**
   * @property {number} [start_time] - The start time of the query range in milliseconds.
   * @example 1622548800000
   */
  start_time?: number;
  /**
   * @property {number} [end_time] - The end time of the query range in milliseconds.
   * @example 1622635200000
   */
  end_time?: number;
  /**
   * @property {number} [page] - The page number of the results.
   * @example 1
   */
  page?: number;
  /**
   * @property {number} [limit] - The number of orders per page.
   * @example 10
   */
  limit?: number;
}

/**
 * @interface ListFinishedOrderResponse
 * @description The response for the listFinishedOrder method.
 */
export interface ListFinishedOrderResponse {
  data: Order[];
  pagination: Pagination;
}

/**
 * @interface ListPendingStopOrderParams
 * @description Parameters for listing pending futures stop orders.
 * @see https://docs.coinex.com/api/v2/futures/order/http/list-pending-stop-order
 */
export interface ListPendingStopOrderParams {
  /**
   * @property {string} market - The market to query.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {OrderSide} [side] - The side of the orders to retrieve.
   * @example "buy"
   */
  side?: OrderSide;
  /**
   * @property {number} [page] - The page number of the results.
   * @example 1
   */
  page?: number;
  /**
   * @property {number} [limit] - The number of orders per page.
   * @example 10
   */
  limit?: number;
}

/**
 * @interface ListPendingStopOrderResponse
 * @description The response for the listPendingStopOrder method.
 */
export interface ListPendingStopOrderResponse {
  data: StopOrder[];
  pagination: Pagination;
}

/**
 * @interface ListFinishedStopOrderParams
 * @description Parameters for listing finished futures stop orders.
 * @see https://docs.coinex.com/api/v2/futures/order/http/list-finished-stop-order
 */
export interface ListFinishedStopOrderParams {
  /**
   * @property {string} market - The market to query.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {OrderSide} [side] - The side of the orders to retrieve.
   * @example "buy"
   */
  side?: OrderSide;
  /**
   * @property {number} [start_time] - The start time of the query range in milliseconds.
   * @example 1622548800000
   */
  start_time?: number;
  /**
   * @property {number} [end_time] - The end time of the query range in milliseconds.
   * @example 1622635200000
   */
  end_time?: number;
  /**
   * @property {number} [page] - The page number of the results.
   * @example 1
   */
  page?: number;
  /**
   * @property {number} [limit] - The number of orders per page.
   * @example 10
   */
  limit?: number;
}

/**
 * @interface ListFinishedStopOrderResponse
 * @description The response for the listFinishedStopOrder method.
 */
export interface ListFinishedStopOrderResponse {
  data: StopOrder[];
  pagination: Pagination;
}

/**
 * @interface EditOrderParams
 * @description Parameters for editing an existing futures order.
 * @see https://docs.coinex.com/api/v2/futures/order/http/edit-order
 */
export interface EditOrderParams {
  /**
   * @property {string} market - The market of the order.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {number} order_id - The ID of the order to edit.
   * @example 123456789
   */
  order_id: number;
  /**
   * @property {string} price - The new price for the order.
   * @example "45500.00"
   */
  price: string;
  /**
   * @property {string} amount - The new amount for the order.
   * @example "0.6"
   */
  amount: string;
}

/**
 * @interface EditOrderResponse
 * @description The response for the editOrder method.
 */
export type EditOrderResponse = Order;

/**
 * @interface EditStopOrderParams
 * @description Parameters for editing an existing futures stop order.
 * @see https://docs.coinex.com/api/v2/futures/order/http/edit-stop-order
 */
export interface EditStopOrderParams {
  /**
   * @property {string} market - The market of the order.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {number} stop_id - The ID of the stop order to edit.
   * @example 123456789
   */
  stop_id: number;
  /**
   * @property {string} price - The new price for the order.
   * @example "45500.00"
   */
  price: string;
  /**
   * @property {string} amount - The new amount for the order.
   * @example "0.6"
   */
  amount: string;
  /**
   * @property {string} trigger_price - The new trigger price for the stop order.
   * @example "46500.00"
   */
  trigger_price: string;
}

/**
 * @interface EditStopOrderResponse
 * @description The response for the editStopOrder method.
 */
export type EditStopOrderResponse = StopOrder;

/**
 * @interface CancelOrderParams
 * @description Parameters for canceling a single futures order.
 * @see https://docs.coinex.com/api/v2/futures/order/http/cancel-order
 */
export interface CancelOrderParams {
  /**
   * @property {string} market - The market of the order.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {number} order_id - The ID of the order to cancel.
   * @example 123456789
   */
  order_id: number;
}

/**
 * @interface CancelOrderByClientIdParams
 * @description Parameters for canceling a single futures order by its client ID.
 * @see https://docs.coinex.com/api/v2/futures/order/http/cancel-order-by-client-id
 */
export interface CancelOrderByClientIdParams {
  /**
   * @property {string} market - The market of the order.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} client_id - The client ID of the order to cancel.
   * @example "my-custom-id"
   */
  client_id: string;
}

/**
 * @interface CancelStopOrderParams
 * @description Parameters for canceling a single futures stop order.
 * @see https://docs.coinex.com/api/v2/futures/order/http/cancel-stop-order
 */
export interface CancelStopOrderParams {
  /**
   * @property {string} market - The market of the order.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {number} stop_id - The ID of the stop order to cancel.
   * @example 123456789
   */
  stop_id: number;
}

/**
 * @interface CancelStopOrderByClientIdParams
 * @description Parameters for canceling a single futures stop order by its client ID.
 * @see https://docs.coinex.com/api/v2/futures/order/http/cancel-stop-order-by-client-id
 */
export interface CancelStopOrderByClientIdParams {
  /**
   * @property {string} market - The market of the order.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} client_id - The client ID of the stop order to cancel.
   * @example "my-custom-stop-id"
   */
  client_id: string;
}

/**
 * @interface CancelAllOrderParams
 * @description Parameters for canceling all futures orders in a specific market.
 * @see https://docs.coinex.com/api/v2/futures/order/http/cancel-all-order
 */
export interface CancelAllOrderParams {
  /**
   * @property {string} market - The market to cancel all orders in.
   * @example "BTCUSDT"
   */
  market: string;
}

/**
 * @interface CancelBatchOrderParams
 * @description Parameters for canceling a batch of futures orders.
 * @see https://docs.coinex.com/api/v2/futures/order/http/cancel-batch-order
 */
export interface CancelBatchOrderParams {
  /**
   * @property {string} market - The market of the orders.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} order_ids - A comma-separated list of order IDs to cancel.
   * @example "123456789,987654321"
   */
  order_ids: string;
}

/**
 * @interface CancelBatchStopOrderParams
 * @description Parameters for canceling a batch of futures stop orders.
 * @see https://docs.coinex.com/api/v2/futures/order/http/cancel-batch-stop-order
 */
export interface CancelBatchStopOrderParams {
  /**
   * @property {string} market - The market of the orders.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} stop_ids - A comma-separated list of stop order IDs to cancel.
   * @example "123456789,987654321"
   */
  stop_ids: string;
}

/**
 * @interface PutMultiOrderParams
 * @description Parameters for placing multiple futures orders in a single request.
 * @see https://docs.coinex.com/api/v2/futures/order/http/put-multi-order
 */
export interface PutMultiOrderParams {
  /**
   * @property {string} market - The market to place the order in.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {OrderSide} side - The side of the order.
   * @example "buy"
   */
  side: OrderSide;
  /**
   * @property {OrderType} type - The type of the order.
   * @example "limit"
   */
  type: OrderType;
  /**
   * @property {string} price - The price of the order.
   * @example "45000.00"
   */
  price: string;
  /**
   * @property {string} amount - The amount of the order.
   * @example "0.5"
   */
  amount: string;
  /**
   * @property {string} [value] - The value of the order.
   * @example "22500.00"
   */
  value?: string;
  /**
   * @property {string} [client_id] - A unique identifier for the order.
   * @example "my-custom-id"
   */
  client_id?: string;
  /**
   * @property {boolean} [hide] - Whether the order should be hidden.
   * @example false
   */
  hide?: boolean;
  /**
   * @property {OrderOption} [order_option] - Additional order options.
   * @example "ioc"
   */
  order_option?: OrderOption;
  /**
   * @property {TakeProfitType} [take_profit_type] - The take profit type.
   * @example "latest_price"
   */
  take_profit_type?: TakeProfitType;
  /**
   * @property {StopLossType} [stop_loss_type] - The stop loss type.
   * @example "latest_price"
   */
  stop_loss_type?: StopLossType;
  /**
   * @property {string} [take_profit_price] - The take profit price.
   * @example "50000.00"
   */
  take_profit_price?: string;
  /**
   * @property {string} [stop_loss_price] - The stop loss price.
   * @example "40000.00"
   */
  stop_loss_price?: string;
}

/**
 * @interface PutMultiStopOrderParams
 * @description Parameters for placing multiple futures stop orders in a single request.
 * @see https://docs.coinex.com/api/v2/futures/order/http/put-multi-stop-order
 */
export interface PutMultiStopOrderParams {
  /**
   * @property {string} market - The market to place the order in.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {OrderSide} side - The side of the order.
   * @example "buy"
   */
  side: OrderSide;
  /**
   * @property {OrderType} type - The type of the order.
   * @example "limit"
   */
  type: OrderType;
  /**
   * @property {string} price - The price of the order.
   * @example "45000.00"
   */
  price: string;
  /**
   * @property {string} amount - The amount of the order.
   * @example "0.5"
   */
  amount: string;
  /**
   * @property {string} trigger_price - The trigger price for the stop order.
   * @example "46000.00"
   */
  trigger_price: string;
  /**
   * @property {TriggerPriceType} trigger_price_type - The type of trigger price.
   * @example "latest_price"
   */
  trigger_price_type: TriggerPriceType;
  /**
   * @property {string} [client_id] - A unique identifier for the order.
   * @example "my-custom-stop-id"
   */
  client_id?: string;
}
