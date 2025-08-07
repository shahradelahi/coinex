import deepmerge from 'deepmerge';

import { type CoinExClient } from '@/client';
import { noUndefined } from '@/lib/object';
import type { RequestOptions } from '@/types';

import type {
  CancelAllOrderParams,
  CancelBatchOrderParams,
  CancelBatchStopOrderParams,
  CancelOrderByClientIdParams,
  CancelOrderParams,
  CancelStopOrderByClientIdParams,
  CancelStopOrderParams,
  EditOrderParams,
  EditOrderResponse,
  EditStopOrderParams,
  EditStopOrderResponse,
  GetMultiOrderStatusParams,
  GetMultiOrderStatusResponse,
  GetOrderStatusParams,
  GetOrderStatusResponse,
  ListFinishedOrderParams,
  ListFinishedOrderResponse,
  ListFinishedStopOrderParams,
  ListFinishedStopOrderResponse,
  ListPendingOrderParams,
  ListPendingOrderResponse,
  ListPendingStopOrderParams,
  ListPendingStopOrderResponse,
  PutMultiOrderParams,
  PutMultiStopOrderParams,
  PutOrderParams,
  PutOrderResponse,
  PutStopOrderParams,
  PutStopOrderResponse,
} from './types';

export class FuturesOrder {
  #client: CoinExClient;

  constructor(client: CoinExClient) {
    this.#client = client;
  }

  /**
   * Place Order
   * @description
   * **Info:**
   * - This endpoint requires signature.
   * - This endpoint will trigger rate limit.
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/futures/order/http/put-order
   */
  putOrder(params: PutOrderParams, options: RequestOptions = {}): Promise<PutOrderResponse> {
    return this.#client.request<PutOrderResponse>(
      'futures/order',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Place Stop Order
   * @description
   * **Info:**
   * - This endpoint requires signature.
   * - This endpoint will trigger rate limit.
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/futures/order/http/put-stop-order
   */
  putStopOrder(
    params: PutStopOrderParams,
    options: RequestOptions = {}
  ): Promise<PutStopOrderResponse> {
    return this.#client.request<PutStopOrderResponse>(
      'futures/stop-order',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Query Order Status
   * @description
   * **Info:**
   * - This endpoint requires signature.
   * - This endpoint will trigger rate limit.
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/futures/order/http/get-order-status
   */
  getOrderStatus(
    params: GetOrderStatusParams,
    options: RequestOptions = {}
  ): Promise<GetOrderStatusResponse> {
    return this.#client.request<GetOrderStatusResponse>(
      'futures/order-status',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Batch Query Order Status
   * @description
   * **Info:**
   * - This endpoint requires signature.
   * - This endpoint will trigger rate limit.
   *
   * **Reminder:**
   * - The maximum limit is 100 order_id.
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetMultiOrderStatusResponse>} The order status.
   * @see https://docs.coinex.com/api/v2/futures/order/http/get-multi-order-status
   */
  getMultiOrderStatus(
    params: GetMultiOrderStatusParams,
    options: RequestOptions = {}
  ): Promise<GetMultiOrderStatusResponse> {
    return this.#client.request<GetMultiOrderStatusResponse>(
      'futures/multi-order-status',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Get Unfilled Order
   * @description
   * **Info:**
   * - This endpoint requires signature. For specific signature rules, please refer to [Authentication](https://docs.coinex.com/api/v2/authorization).
   * - This endpoint will trigger rate limit. For specific rules, please refer to [Rate Limit](https://docs.coinex.com/api/v2/rate-limit).
   *
   * **Reminder:**
   * - The maximum limit is 100.
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<ListPendingOrderResponse>} The unfilled orders.
   * @see https://docs.coinex.com/api/v2/futures/order/http/list-pending-order
   */
  listPendingOrder(
    params: ListPendingOrderParams,
    options: RequestOptions = {}
  ): Promise<ListPendingOrderResponse> {
    return this.#client.request<ListPendingOrderResponse>(
      'futures/pending-order',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Get Filled Order
   * @description
   * **Info:**
   * - This endpoint requires signature. For specific signature rules, please refer to [Authentication](https://docs.coinex.com/api/v2/authorization).
   * - This endpoint will trigger rate limit. For specific rules, please refer to [Rate Limit](https://docs.coinex.com/api/v2/rate-limit).
   *
   * **Reminder:**
   * - The maximum limit is 100.
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<ListFinishedOrderResponse>} The filled orders.
   * @see https://docs.coinex.com/api/v2/futures/order/http/list-finished-order
   */
  listFinishedOrder(
    params: ListFinishedOrderParams,
    options: RequestOptions = {}
  ): Promise<ListFinishedOrderResponse> {
    return this.#client.request<ListFinishedOrderResponse>(
      'futures/finished-order',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Get Unfilled Stop Order
   * @description
   * **Info:**
   * - This endpoint requires signature. For specific signature rules, please refer to [Authentication](https://docs.coinex.com/api/v2/authorization).
   * - This endpoint will trigger rate limit. For specific rules, please refer to [Rate Limit](https://docs.coinex.com/api/v2/rate-limit).
   *
   * **Reminder:**
   * - The maximum limit is 100.
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<ListPendingStopOrderResponse>} The unfilled stop orders.
   * @see https://docs.coinex.com/api/v2/futures/order/http/list-pending-stop-order
   */
  listPendingStopOrder(
    params: ListPendingStopOrderParams,
    options: RequestOptions = {}
  ): Promise<ListPendingStopOrderResponse> {
    return this.#client.request<ListPendingStopOrderResponse>(
      'futures/pending-stop-order',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Get Filled Stop Order
   * @description
   * **Info:**
   * - This endpoint requires signature. For specific signature rules, please refer to [Authentication](https://docs.coinex.com/api/v2/authorization).
   * - This endpoint will trigger rate limit. For specific rules, please refer to [Rate Limit](https://docs.coinex.com/api/v2/rate-limit).
   *
   * **Reminder:**
   * - The maximum limit is 100.
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<ListFinishedStopOrderResponse>} The filled stop orders.
   * @see https://docs.coinex.com/api/v2/futures/order/http/list-finished-stop-order
   */
  listFinishedStopOrder(
    params: ListFinishedStopOrderParams,
    options: RequestOptions = {}
  ): Promise<ListFinishedStopOrderResponse> {
    return this.#client.request<ListFinishedStopOrderResponse>(
      'futures/finished-stop-order',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Modify Order
   * @description
   * **Info:**
   * - This endpoint requires signature. For specific signature rules, please refer to [Authentication](https://docs.coinex.com/api/v2/authorization).
   * - This endpoint will trigger rate limit. For specific rules, please refer to [Rate Limit](https://docs.coinex.com/api/v2/rate-limit).
   *
   * **Reminder:**
   * - The order can only be modified when it is in the pending state.
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<EditOrderResponse>} The modified order.
   * @see https://docs.coinex.com/api/v2/futures/order/http/edit-order
   */
  editOrder(params: EditOrderParams, options: RequestOptions = {}): Promise<EditOrderResponse> {
    return this.#client.request<EditOrderResponse>(
      'futures/order',
      deepmerge({ method: 'PUT', json: noUndefined(params) }, options)
    );
  }

  /**
   * Modify Stop Order
   * @description
   * **Info:**
   * - This endpoint requires signature. For specific signature rules, please refer to [Authentication](https://docs.coinex.com/api/v2/authorization).
   * - This endpoint will trigger rate limit. For specific rules, please refer to [Rate Limit](https://docs.coinex.com/api/v2/rate-limit).
   *
   * **Reminder:**
   * - The stop order can only be modified when it is in the pending state.
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<EditStopOrderResponse>} The modified stop order.
   * @see https://docs.coinex.com/api/v2/futures/order/http/edit-stop-order
   */
  editStopOrder(
    params: EditStopOrderParams,
    options: RequestOptions = {}
  ): Promise<EditStopOrderResponse> {
    return this.#client.request<EditStopOrderResponse>(
      'futures/stop-order',
      deepmerge({ method: 'PUT', json: noUndefined(params) }, options)
    );
  }

  /**
   * Cancel Order
   * @description
   * **Info:**
   * - This endpoint requires signature. For specific signature rules, please refer to [Authentication](https://docs.coinex.com/api/v2/authorization).
   * - This endpoint will trigger rate limit. For specific rules, please refer to [Rate Limit](https://docs.coinex.com/api/v2/rate-limit).
   *
   * **Reminder:**
   * - The order can only be canceled when it is in the pending state.
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/futures/order/http/cancel-order
   */
  cancelOrder(params: CancelOrderParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'futures/order',
      deepmerge({ method: 'DELETE', json: noUndefined(params) }, options)
    );
  }

  /**
   * Cancel Order by client_id
   * @description
   * **Info:**
   * - This endpoint requires signature.
   * - This endpoint will trigger rate limit.
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/futures/order/http/cancel-order-by-client-id
   */
  cancelOrderByClientId(
    params: CancelOrderByClientIdParams,
    options: RequestOptions = {}
  ): Promise<{}> {
    return this.#client.request(
      'futures/order/by-client-id',
      deepmerge({ method: 'DELETE', json: noUndefined(params) }, options)
    );
  }

  /**
   * Cancel Stop Order
   * @description
   * **Info:**
   * - This endpoint requires signature.
   * - This endpoint will trigger rate limit.
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/futures/order/http/cancel-stop-order
   */
  cancelStopOrder(params: CancelStopOrderParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'futures/stop-order',
      deepmerge({ method: 'DELETE', json: noUndefined(params) }, options)
    );
  }

  /**
   * Cancel Stop Order by client_id
   * @description
   * **Info:**
   * - This endpoint requires signature.
   * - This endpoint will trigger rate limit.
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/futures/order/http/cancel-stop-order-by-client-id
   */
  cancelStopOrderByClientId(
    params: CancelStopOrderByClientIdParams,
    options: RequestOptions = {}
  ): Promise<{}> {
    return this.#client.request(
      'futures/stop-order/by-client-id',
      deepmerge({ method: 'DELETE', json: noUndefined(params) }, options)
    );
  }

  /**
   * Cancel All Orders
   * @description
   * **Info:**
   * - This endpoint requires signature.
   * - This endpoint will trigger rate limit.
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/futures/order/http/cancel-all-order
   */
  cancelAllOrder(params: CancelAllOrderParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'futures/all-order',
      deepmerge({ method: 'DELETE', json: noUndefined(params) }, options)
    );
  }

  /**
   * Batch Cancel Orders
   * @description
   * **Info:**
   * - This endpoint requires signature.
   * - This endpoint will trigger rate limit.
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/futures/order/http/cancel-batch-order
   */
  cancelBatchOrder(params: CancelBatchOrderParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'futures/batch-order',
      deepmerge({ method: 'DELETE', json: noUndefined(params) }, options)
    );
  }

  /**
   * Batch Cancel Stop Orders
   * @description
   * **Info:**
   * - This endpoint requires signature.
   * - This endpoint will trigger rate limit.
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/futures/order/http/cancel-batch-stop-order
   */
  cancelBatchStopOrder(
    params: CancelBatchStopOrderParams,
    options: RequestOptions = {}
  ): Promise<{}> {
    return this.#client.request(
      'futures/batch-stop-order',
      deepmerge({ method: 'DELETE', json: noUndefined(params) }, options)
    );
  }

  /**
   * Batch Place Orders
   * @description
   * **Info:**
   * - This endpoint requires signature. For specific signature rules, please refer to [Authentication](https://docs.coinex.com/api/v2/authorization).
   * - This endpoint will trigger rate limit. For specific rules, please refer to [Rate Limit](https://docs.coinex.com/api/v2/rate-limit).
   *
   * **Reminder:**
   * - The request endpoint of this batch allows up to 100 sub-requests at a time.
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/futures/order/http/put-multi-order
   */
  putMultiOrder(params: PutMultiOrderParams[], options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'futures/multi-order',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Batch Place Stop Orders
   * @description
   * **Info:**
   * - This endpoint requires signature.
   * - This endpoint will trigger rate limit.
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/futures/order/http/put-multi-stop-order
   */
  putMultiStopOrder(params: PutMultiStopOrderParams[], options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'futures/multi-stop-order',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }
}
