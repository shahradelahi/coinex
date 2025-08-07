import deepmerge from 'deepmerge';

import { type CoinExClient } from '@/client';
import { noUndefined } from '@/lib/object';
import type { RequestOptions } from '@/types';

import type {
  SpotListUserDealsParams,
  SpotListUserDealsResponse,
  SpotListUserOrderDealsParams,
  SpotListUserOrderDealsResponse,
} from './types';

export class Deal {
  #client: CoinExClient;

  constructor(client: CoinExClient) {
    this.#client = client;
  }

  /**
   * Get User Transaction
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<SpotListUserDealsResponse>} The user deals.
   * @see https://docs.coinex.com/api/v2/spot/deal/http/list-user-deals
   */
  listUserDeals(
    params: SpotListUserDealsParams,
    options: RequestOptions = {}
  ): Promise<SpotListUserDealsResponse> {
    return this.#client.request<SpotListUserDealsResponse>(
      'spot/user-deals',
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
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<SpotListUserOrderDealsResponse>} The user order deals.
   * @see https://docs.coinex.com/api/v2/spot/deal/http/list-user-order-deals
   */
  listUserOrderDeals(
    params: SpotListUserOrderDealsParams,
    options: RequestOptions = {}
  ): Promise<SpotListUserOrderDealsResponse> {
    return this.#client.request<SpotListUserOrderDealsResponse>(
      'spot/order-deals',
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
