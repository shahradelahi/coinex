import deepmerge from 'deepmerge';

import { type CoinExClient } from '@/client';
import { noUndefined } from '@/lib/object';
import type { RequestOptions } from '@/types';

import type {
  GetAMMLiquidityParams,
  GetAMMLiquidityResponse,
  GetCreditBalanceParams,
  GetCreditBalanceResponse,
  GetCreditInfoParams,
  GetCreditInfoResponse,
  GetFinancialBalanceParams,
  GetFinancialBalanceResponse,
  GetFuturesBalanceParams,
  GetFuturesBalanceResponse,
  GetMarginBalanceParams,
  GetMarginBalanceResponse,
  GetSpotBalanceParams,
  GetSpotBalanceResponse,
  GetSpotTransactionHistoryParams,
  GetSpotTransactionHistoryResponse,
} from './types';

export class Balance {
  #client: CoinExClient;

  constructor(client: CoinExClient) {
    this.#client = client;
  }

  /**
   * Get AMM Account Liquidity
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetAMMLiquidityResponse>} The AMM account liquidity.
   * @see https://docs.coinex.com/api/v2/assets/balance/http/get-amm-liquidity
   */
  getAMMLiquidity(
    params: GetAMMLiquidityParams = {},
    options: RequestOptions = {}
  ): Promise<GetAMMLiquidityResponse> {
    return this.#client.request<GetAMMLiquidityResponse>(
      'assets/amm-liquidity',
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
   * Get Balance in Credit Account
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetCreditBalanceResponse>} The credit account balance.
   * @see https://docs.coinex.com/api/v2/assets/balance/http/get-credit-balance
   */
  getCreditBalance(
    params: GetCreditBalanceParams = {},
    options: RequestOptions = {}
  ): Promise<GetCreditBalanceResponse> {
    return this.#client.request<GetCreditBalanceResponse>(
      'assets/credit-balance',
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
   * Get Info in Credit Account
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetCreditInfoResponse>} The credit account info.
   * @see https://docs.coinex.com/api/v2/assets/balance/http/get-credit-info
   */
  getCreditInfo(
    params: GetCreditInfoParams = {},
    options: RequestOptions = {}
  ): Promise<GetCreditInfoResponse> {
    return this.#client.request<GetCreditInfoResponse>(
      'assets/credit-info',
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
   * Get Balance in Financial Account
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetFinancialBalanceResponse>} The financial account balance.
   * @see https://docs.coinex.com/api/v2/assets/balance/http/get-financial-balance
   */
  getFinancialBalance(
    params: GetFinancialBalanceParams = {},
    options: RequestOptions = {}
  ): Promise<GetFinancialBalanceResponse> {
    return this.#client.request<GetFinancialBalanceResponse>(
      'assets/financial-balance',
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
   * Get Balance in Futures Account
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetFuturesBalanceResponse>} The futures account balance.
   * @see https://docs.coinex.com/api/v2/assets/balance/http/get-futures-balance
   */
  getFuturesBalance(
    params: GetFuturesBalanceParams = {},
    options: RequestOptions = {}
  ): Promise<GetFuturesBalanceResponse> {
    return this.#client.request<GetFuturesBalanceResponse>(
      'assets/futures-balance',
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
   * Get Balance in Margin Account
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetMarginBalanceResponse>} The margin account balance.
   * @see https://docs.coinex.com/api/v2/assets/balance/http/get-marigin-balance
   */
  getMarginBalance(
    params: GetMarginBalanceParams,
    options: RequestOptions = {}
  ): Promise<GetMarginBalanceResponse> {
    return this.#client.request<GetMarginBalanceResponse>(
      'assets/margin-balance',
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
   * Get Balance in Spot Account
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetSpotBalanceResponse>} The spot account balance.
   * @see https://docs.coinex.com/api/v2/assets/balance/http/get-spot-balance
   */
  getSpotBalance(
    params: GetSpotBalanceParams = {},
    options: RequestOptions = {}
  ): Promise<GetSpotBalanceResponse> {
    return this.#client.request<GetSpotBalanceResponse>(
      'assets/spot-balance',
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
   * Get Spot Transaction History
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetSpotTransactionHistoryResponse>} The spot transaction history.
   * @see https://docs.coinex.com/api/v2/assets/balance/http/get-spot-transcation-history
   */
  getSpotTransactionHistory(
    params: GetSpotTransactionHistoryParams = {},
    options: RequestOptions = {}
  ): Promise<GetSpotTransactionHistoryResponse> {
    return this.#client.request<GetSpotTransactionHistoryResponse>(
      'assets/spot-transaction-history',
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
