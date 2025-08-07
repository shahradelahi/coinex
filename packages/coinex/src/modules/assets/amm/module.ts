import deepmerge from 'deepmerge';

import { type CoinExClient } from '@/client';
import { noUndefined } from '@/lib/object';
import type { RequestOptions } from '@/types';

import type {
  AddAMMLiquidityParams,
  GetAMMIncomeHistoryParams,
  GetAMMIncomeHistoryResponse,
  GetAMMLiquidityPoolParams,
  GetAMMLiquidityPoolResponse,
  RemoveAMMLiquidityParams,
} from './types';

export class Amm {
  #client: CoinExClient;

  constructor(client: CoinExClient) {
    this.#client = client;
  }

  /**
   * Add AMM Account Liquidity
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/assets/amm/http/add-liquidtiy
   */
  addAMMLiquidity(params: AddAMMLiquidityParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'assets/amm/liquidity',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Get AMM Income History
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetAMMIncomeHistoryResponse>} The AMM income history.
   * @see https://docs.coinex.com/api/v2/assets/amm/http/list-income-history
   */
  getAMMIncomeHistory(
    params: GetAMMIncomeHistoryParams,
    options: RequestOptions = {}
  ): Promise<GetAMMIncomeHistoryResponse> {
    return this.#client.request<GetAMMIncomeHistoryResponse>(
      'assets/amm/income-history',
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
   * Get AMM Liquidity Pool
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetAMMLiquidityPoolResponse>} The AMM liquidity pool.
   * @see https://docs.coinex.com/api/v2/assets/amm/http/list-liquidity-pool
   */
  getAMMLiquidityPool(
    params: GetAMMLiquidityPoolParams,
    options: RequestOptions = {}
  ): Promise<GetAMMLiquidityPoolResponse> {
    return this.#client.request<GetAMMLiquidityPoolResponse>(
      'assets/amm/liquidity-pool',
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
   * Reduce AMM Account Liquidity
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/assets/amm/http/remove-liquidtiy
   */
  removeAMMLiquidity(params: RemoveAMMLiquidityParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'assets/amm/liquidity',
      deepmerge({ method: 'DELETE', json: noUndefined(params) }, options)
    );
  }
}
