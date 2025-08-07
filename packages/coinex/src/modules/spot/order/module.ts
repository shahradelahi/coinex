import deepmerge from 'deepmerge';

import { type CoinExClient } from '@/client';
import { noUndefined } from '@/lib/object';
import type { RequestOptions } from '@/types';

import type {
  SpotCancelAllOrderParams,
  SpotCancelBatchOrderParams,
  SpotCancelBatchStopOrderParams,
  SpotCancelOrderByClientIdParams,
  SpotCancelOrderParams,
  SpotCancelStopOrderByClientIdParams,
  SpotCancelStopOrderParams,
  SpotEditOrderParams,
  SpotEditOrderResponse,
  SpotEditStopOrderParams,
  SpotEditStopOrderResponse,
  SpotGetMultiOrderStatusParams,
  SpotGetMultiOrderStatusResponse,
  SpotGetOrderStatusParams,
  SpotGetOrderStatusResponse,
  SpotListFinishedOrderParams,
  SpotListFinishedOrderResponse,
  SpotListFinishedStopOrderParams,
  SpotListFinishedStopOrderResponse,
  SpotListPendingOrderParams,
  SpotListPendingOrderResponse,
  SpotListPendingStopOrderParams,
  SpotListPendingStopOrderResponse,
  SpotPutMultiOrderParams,
  SpotPutMultiStopOrderParams,
  SpotPutOrderParams,
  SpotPutOrderResponse,
  SpotPutStopOrderParams,
  SpotPutStopOrderResponse,
} from './types';

export class SpotOrder {
  #client: CoinExClient;

  constructor(client: CoinExClient) {
    this.#client = client;
  }

  /**
   * Place Order
   *
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/spot/order/http/put-order
   */
  putOrder(
    params: SpotPutOrderParams,
    options: RequestOptions = {}
  ): Promise<SpotPutOrderResponse> {
    return this.#client.request<SpotPutOrderResponse>(
      'spot/order',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Place Stop Order
   *
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/spot/order/http/put-stop-order
   */
  putStopOrder(
    params: SpotPutStopOrderParams,
    options: RequestOptions = {}
  ): Promise<SpotPutStopOrderResponse> {
    return this.#client.request<SpotPutStopOrderResponse>(
      'spot/stop-order',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Query Order Status
   *
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/spot/order/http/get-order-status
   */
  getOrderStatus(
    params: SpotGetOrderStatusParams,
    options: RequestOptions = {}
  ): Promise<SpotGetOrderStatusResponse> {
    return this.#client.request<SpotGetOrderStatusResponse>(
      'spot/order-status',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Batch Query Order Status
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<SpotGetMultiOrderStatusResponse>} The order status.
   * @see https://docs.coinex.com/api/v2/spot/order/http/get-multi-order-status
   */
  getMultiOrderStatus(
    params: SpotGetMultiOrderStatusParams,
    options: RequestOptions = {}
  ): Promise<SpotGetMultiOrderStatusResponse> {
    return this.#client.request<SpotGetMultiOrderStatusResponse>(
      'spot/multi-order-status',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Get Unfilled Order
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<SpotListPendingOrderResponse>} The unfilled orders.
   * @see https://docs.coinex.com/api/v2/spot/order/http/list-pending-order
   */
  listPendingOrder(
    params: SpotListPendingOrderParams,
    options: RequestOptions = {}
  ): Promise<SpotListPendingOrderResponse> {
    return this.#client.request<SpotListPendingOrderResponse>(
      'spot/pending-order',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Get Filled Order
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<SpotListFinishedOrderResponse>} The filled orders.
   * @see https://docs.coinex.com/api/v2/spot/order/http/list-finished-order
   */
  listFinishedOrder(
    params: SpotListFinishedOrderParams,
    options: RequestOptions = {}
  ): Promise<SpotListFinishedOrderResponse> {
    return this.#client.request<SpotListFinishedOrderResponse>(
      'spot/finished-order',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Get Unfilled Stop Order
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<SpotListPendingStopOrderResponse>} The unfilled stop orders.
   * @see https://docs.coinex.com/api/v2/spot/order/http/list-pending-stop-order
   */
  listPendingStopOrder(
    params: SpotListPendingStopOrderParams,
    options: RequestOptions = {}
  ): Promise<SpotListPendingStopOrderResponse> {
    return this.#client.request<SpotListPendingStopOrderResponse>(
      'spot/pending-stop-order',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Get Filled Stop Order
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<SpotListFinishedStopOrderResponse>} The filled stop orders.
   * @see https://docs.coinex.com/api/v2/spot/order/http/list-finished-stop-order
   */
  listFinishedStopOrder(
    params: SpotListFinishedStopOrderParams,
    options: RequestOptions = {}
  ): Promise<SpotListFinishedStopOrderResponse> {
    return this.#client.request<SpotListFinishedStopOrderResponse>(
      'spot/finished-stop-order',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Modify Order
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<SpotEditOrderResponse>} The modified order.
   * @see https://docs.coinex.com/api/v2/spot/order/http/edit-order
   */
  editOrder(
    params: SpotEditOrderParams,
    options: RequestOptions = {}
  ): Promise<SpotEditOrderResponse> {
    return this.#client.request<SpotEditOrderResponse>(
      'spot/order',
      deepmerge({ method: 'PUT', json: noUndefined(params) }, options)
    );
  }

  /**
   * Modify Stop Order
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<SpotEditStopOrderResponse>} The modified stop order.
   * @see https://docs.coinex.com/api/v2/spot/order/http/edit-stop-order
   */
  editStopOrder(
    params: SpotEditStopOrderParams,
    options: RequestOptions = {}
  ): Promise<SpotEditStopOrderResponse> {
    return this.#client.request<SpotEditStopOrderResponse>(
      'spot/stop-order',
      deepmerge({ method: 'PUT', json: noUndefined(params) }, options)
    );
  }

  /**
   * Cancel Order
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/spot/order/http/cancel-order
   */
  cancelOrder(params: SpotCancelOrderParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'spot/order',
      deepmerge({ method: 'DELETE', json: noUndefined(params) }, options)
    );
  }

  /**
   * Cancel Order by client_id
   *
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/spot/order/http/cancel-order-by-client-id
   */
  cancelOrderByClientId(
    params: SpotCancelOrderByClientIdParams,
    options: RequestOptions = {}
  ): Promise<{}> {
    return this.#client.request(
      'spot/order/by-client-id',
      deepmerge({ method: 'DELETE', json: noUndefined(params) }, options)
    );
  }

  /**
   * Cancel Stop Order
   *
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/spot/order/http/cancel-stop-order
   */
  cancelStopOrder(params: SpotCancelStopOrderParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'spot/stop-order',
      deepmerge({ method: 'DELETE', json: noUndefined(params) }, options)
    );
  }

  /**
   * Cancel Stop Order by client_id
   *
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/spot/order/http/cancel-stop-order-by-client-id
   */
  cancelStopOrderByClientId(
    params: SpotCancelStopOrderByClientIdParams,
    options: RequestOptions = {}
  ): Promise<{}> {
    return this.#client.request(
      'spot/stop-order/by-client-id',
      deepmerge({ method: 'DELETE', json: noUndefined(params) }, options)
    );
  }

  /**
   * Cancel All Orders
   *
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/spot/order/http/cancel-all-order
   */
  cancelAllOrder(params: SpotCancelAllOrderParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'spot/all-order',
      deepmerge({ method: 'DELETE', json: noUndefined(params) }, options)
    );
  }

  /**
   * Batch Cancel Orders
   *
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/spot/order/http/cancel-batch-order
   */
  cancelBatchOrder(params: SpotCancelBatchOrderParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'spot/batch-order',
      deepmerge({ method: 'DELETE', json: noUndefined(params) }, options)
    );
  }

  /**
   * Batch Cancel Stop Orders
   *
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/spot/order/http/cancel-batch-stop-order
   */
  cancelBatchStopOrder(
    params: SpotCancelBatchStopOrderParams,
    options: RequestOptions = {}
  ): Promise<{}> {
    return this.#client.request(
      'spot/batch-stop-order',
      deepmerge({ method: 'DELETE', json: noUndefined(params) }, options)
    );
  }

  /**
   * Batch Place Orders
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/spot/order/http/put-multi-order
   */
  putMultiOrder(params: SpotPutMultiOrderParams[], options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'spot/multi-order',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Batch Place Stop Orders
   *
   * @param params
   * @param options
   * @see https://docs.coinex.com/api/v2/spot/order/http/put-multi-stop-order
   */
  putMultiStopOrder(
    params: SpotPutMultiStopOrderParams[],
    options: RequestOptions = {}
  ): Promise<{}> {
    return this.#client.request(
      'spot/multi-stop-order',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }
}
