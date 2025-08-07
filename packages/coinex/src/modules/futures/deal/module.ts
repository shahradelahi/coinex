import deepmerge from 'deepmerge';

import { type CoinExClient } from '@/client';
import { noUndefined } from '@/lib/object';
import type { RequestOptions } from '@/types';

import type {
  ListUserDealsParams,
  ListUserDealsResponse,
  ListUserOrderDealsParams,
  ListUserOrderDealsResponse,
} from './types';

export class Deal {
  #client: CoinExClient;

  constructor(client: CoinExClient) {
    this.#client = client;
  }

  /**
   * Get User Transaction
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
   * @returns {Promise<ListUserDealsResponse>} The user deals.
   * @see https://docs.coinex.com/api/v2/futures/deal/http/list-user-deals
   */
  listUserDeals(
    params: ListUserDealsParams,
    options: RequestOptions = {}
  ): Promise<ListUserDealsResponse> {
    return this.#client.request<ListUserDealsResponse>(
      'futures/user-deals',
      deepmerge(
        {
          method: 'GET',
          searchParams: noUndefined(params),
        },
        options
      )
    );
  }

  /**
   * Get User Order Transaction
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
   * @returns {Promise<ListUserOrderDealsResponse>} The user order deals.
   * @see https://docs.coinex.com/api/v2/futures/deal/http/list-user-order-deals
   */
  listUserOrderDeals(
    params: ListUserOrderDealsParams,
    options: RequestOptions = {}
  ): Promise<ListUserOrderDealsResponse> {
    return this.#client.request<ListUserOrderDealsResponse>(
      'futures/order-deals',
      deepmerge(
        {
          method: 'GET',
          searchParams: noUndefined(params),
        },
        options
      )
    );
  }
}
