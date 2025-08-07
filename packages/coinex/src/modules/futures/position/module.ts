import deepmerge from 'deepmerge';

import { type CoinExClient } from '@/client';
import { noUndefined } from '@/lib/object';
import type { RequestOptions } from '@/types';

import type {
  AdjustPositionLeverageParams,
  AdjustPositionMarginParams,
  ClosePositionParams,
  ListFinishedPositionParams,
  ListFinishedPositionResponse,
  ListPendingPositionParams,
  ListPendingPositionResponse,
  ListPositionAdlHistoryParams,
  ListPositionAdlHistoryResponse,
  ListPositionFundingHistoryParams,
  ListPositionFundingHistoryResponse,
  ListPositionMarginHistoryParams,
  ListPositionMarginHistoryResponse,
  ListPositionSettleHistoryParams,
  ListPositionSettleHistoryResponse,
  SetPositionStopLossParams,
  SetPositionTakeProfitParams,
} from './types';

export class Position {
  #client: CoinExClient;

  constructor(client: CoinExClient) {
    this.#client = client;
  }

  /**
   * Adjust Position Leverage
   * @see https://docs.coinex.com/api/v2/futures/position/http/adjust-position-leverage
   */
  adjustPositionLeverage(
    params: AdjustPositionLeverageParams,
    options: RequestOptions = {}
  ): Promise<{}> {
    return this.#client.request(
      'futures/adjust-position-leverage',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Adjust Position Margin
   * @see https://docs.coinex.com/api/v2/futures/position/http/adjust-position-margin
   */
  adjustPositionMargin(
    params: AdjustPositionMarginParams,
    options: RequestOptions = {}
  ): Promise<{}> {
    return this.#client.request(
      'futures/adjust-position-margin',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Close Position
   * @see https://docs.coinex.com/api/v2/futures/position/http/close-position
   */
  closePosition(params: ClosePositionParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'futures/close-position',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Get Historical Position
   * @see https://docs.coinex.com/api/v2/futures/position/http/list-finished-position
   */
  listFinishedPosition(
    params: ListFinishedPositionParams,
    options: RequestOptions = {}
  ): Promise<ListFinishedPositionResponse> {
    return this.#client.request<ListFinishedPositionResponse>(
      'futures/finished-position',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Get Current Position
   * @see https://docs.coinex.com/api/v2/futures/position/http/list-pending-position
   */
  listPendingPosition(
    params: ListPendingPositionParams,
    options: RequestOptions = {}
  ): Promise<ListPendingPositionResponse> {
    return this.#client.request<ListPendingPositionResponse>(
      'futures/pending-position',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Get Position Auto Deleverage History
   * @see https://docs.coinex.com/api/v2/futures/position/http/list-positiing-adl-history
   */
  listPositionAdlHistory(
    params: ListPositionAdlHistoryParams,
    options: RequestOptions = {}
  ): Promise<ListPositionAdlHistoryResponse> {
    return this.#client.request<ListPositionAdlHistoryResponse>(
      'futures/adl-history',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Get Position Funding Rate History
   * @see https://docs.coinex.com/api/v2/futures/position/http/list-position-funding-history
   */
  listPositionFundingHistory(
    params: ListPositionFundingHistoryParams,
    options: RequestOptions = {}
  ): Promise<ListPositionFundingHistoryResponse> {
    return this.#client.request<ListPositionFundingHistoryResponse>(
      'futures/position-funding-history',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Get Position Margin Change History
   * @see https://docs.coinex.com/api/v2/futures/position/http/list-position-margin-history
   */
  listPositionMarginHistory(
    params: ListPositionMarginHistoryParams,
    options: RequestOptions = {}
  ): Promise<ListPositionMarginHistoryResponse> {
    return this.#client.request<ListPositionMarginHistoryResponse>(
      'futures/position-margin-history',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Get Position Auto Settlement History
   * @see https://docs.coinex.com/api/v2/futures/position/http/list-position-settle-history
   */
  listPositionSettleHistory(
    params: ListPositionSettleHistoryParams,
    options: RequestOptions = {}
  ): Promise<ListPositionSettleHistoryResponse> {
    return this.#client.request<ListPositionSettleHistoryResponse>(
      'futures/position-settle-history',
      deepmerge({ method: 'GET', searchParams: noUndefined(params) }, options)
    );
  }

  /**
   * Set Position Stop Loss
   * @see https://docs.coinex.com/api/v2/futures/position/http/set-position-stop-loss
   */
  setPositionStopLoss(
    params: SetPositionStopLossParams,
    options: RequestOptions = {}
  ): Promise<{}> {
    return this.#client.request(
      'futures/position-stop-loss',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Set Position Take Profit
   * @description
   * **Info:**
   * - This endpoint will trigger rate limit.
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/futures/position/http/set-position-take-profit
   */
  setPositionTakeProfit(
    params: SetPositionTakeProfitParams,
    options: RequestOptions = {}
  ): Promise<{}> {
    return this.#client.request(
      'futures/position-take-profit',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }
}
