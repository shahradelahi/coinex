import deepmerge from 'deepmerge';

import { type CoinExClient } from '@/client';
import { noUndefined } from '@/lib/object';
import type { RequestOptions } from '@/types';

import type { GetAccountTradeFeesParams, GetAccountTradeFeesResponse } from './types';

export class Fees {
  #client: CoinExClient;

  constructor(client: CoinExClient) {
    this.#client = client;
  }

  /**
   * Get Account Trading Fee Rate
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetAccountTradeFeesResponse>} The account trading fee rate.
   * @see https://docs.coinex.com/api/v2/account/fees/http/get-account-trade-fees
   */
  getAccountTradeFees(
    params: GetAccountTradeFeesParams,
    options: RequestOptions = {}
  ): Promise<GetAccountTradeFeesResponse> {
    return this.#client.request<GetAccountTradeFeesResponse>(
      'account/trade-fees',
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
