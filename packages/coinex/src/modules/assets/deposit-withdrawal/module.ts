import deepmerge from 'deepmerge';

import { type CoinExClient } from '@/client';
import { noUndefined } from '@/lib/object';
import type { RequestOptions } from '@/types';

import type {
  CancelWithdrawalParams,
  GetAssetInfoParams,
  GetAssetInfoResponse,
  GetDepositAddressParams,
  GetDepositAddressResponse,
  GetDepositHistoryParams,
  GetDepositHistoryResponse,
  GetDepositWithdrawalConfigParams,
  GetDepositWithdrawalConfigResponse,
  GetWithdrawalHistoryParams,
  GetWithdrawalHistoryResponse,
  UpdateDepositAddressParams,
  WithdrawalParams,
} from './types';

export class DepositWithdrawal {
  #client: CoinExClient;

  constructor(client: CoinExClient) {
    this.#client = client;
  }

  /**
   * Cancel Withdrawal Request
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/cancel-withdrawal
   */
  cancelWithdrawal(params: CancelWithdrawalParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'assets/withdrawal/cancel',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Get Deposit Address
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetDepositAddressResponse>} The deposit address.
   * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/get-deposit-address
   */
  getDepositAddress(
    params: GetDepositAddressParams,
    options: RequestOptions = {}
  ): Promise<GetDepositAddressResponse> {
    return this.#client.request<GetDepositAddressResponse>(
      'assets/deposit-address',
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
   * Get Deposit and Withdrawal Configuration
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetDepositWithdrawalConfigResponse>} The deposit and withdrawal configuration.
   * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/get-deposit-withdrawal-config
   */
  getDepositWithdrawalConfig(
    params: GetDepositWithdrawalConfigParams,
    options: RequestOptions = {}
  ): Promise<GetDepositWithdrawalConfigResponse> {
    return this.#client.request<GetDepositWithdrawalConfigResponse>(
      'assets/deposit-withdraw-config',
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
   * Get All Deposit and Withdrawal Configuration
   *
   * @param options - The options for the request.
   * @returns {Promise<GetDepositWithdrawalConfigResponse>} The deposit and withdrawal configuration.
   * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/list-all-deposit-withdrawal-config
   */
  getAllDepositWithdrawalConfig(
    options: RequestOptions = {}
  ): Promise<GetDepositWithdrawalConfigResponse> {
    return this.#client.request<GetDepositWithdrawalConfigResponse>(
      'assets/all-deposit-withdraw-config',
      deepmerge(
        {
          method: 'GET',
        },
        options
      )
    );
  }

  /**
   * Get Coin Info
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetAssetInfoResponse>} The asset information.
   * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/list-assets-info
   */
  getAssetInfo(
    params: GetAssetInfoParams,
    options: RequestOptions = {}
  ): Promise<GetAssetInfoResponse> {
    return this.#client.request<GetAssetInfoResponse>(
      'assets/info',
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
   * Get Deposit Record
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetDepositHistoryResponse>} The deposit history.
   * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/list-deposit-history
   */
  getDepositHistory(
    params: GetDepositHistoryParams,
    options: RequestOptions = {}
  ): Promise<GetDepositHistoryResponse> {
    return this.#client.request<GetDepositHistoryResponse>(
      'assets/deposit-history',
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
   * Get Withdrawal Record
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetWithdrawalHistoryResponse>} The withdrawal history.
   * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/list-withdrawal-history
   */
  getWithdrawalHistory(
    params: GetWithdrawalHistoryParams,
    options: RequestOptions = {}
  ): Promise<GetWithdrawalHistoryResponse> {
    return this.#client.request<GetWithdrawalHistoryResponse>(
      'assets/withdrawal-history',
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
   * Update Deposit Address
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/update-deposit-address
   */
  updateDepositAddress(
    params: UpdateDepositAddressParams,
    options: RequestOptions = {}
  ): Promise<{}> {
    return this.#client.request(
      'assets/deposit-address',
      deepmerge({ method: 'PUT', json: noUndefined(params) }, options)
    );
  }

  /**
   * Submit Withdrawal Request
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/withdrawal
   */
  withdrawal(params: WithdrawalParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'assets/withdrawal',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }
}
