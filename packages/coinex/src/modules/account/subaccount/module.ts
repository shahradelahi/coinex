import deepmerge from 'deepmerge';

import { type CoinExClient } from '@/client';
import { noUndefined } from '@/lib/object';
import type { RequestOptions } from '@/types';

import type {
  CreateSubAccountApiKeyParams,
  CreateSubAccountParams,
  DeleteSubAccountApiKeyParams,
  DisableSubAccountParams,
  EditSubAccountApiKeyParams,
  EnableSubAccountParams,
  GetSubAccountApiKeyDetailParams,
  GetSubAccountApiKeyListParams,
  GetSubAccountApiKeyListResponse,
  GetSubAccountInfoResponse,
  GetSubAccountListParams,
  GetSubAccountListResponse,
  GetSubAccountSpotBalanceParams,
  GetSubAccountSpotBalanceResponse,
  GetSubAccountTransferHistoryParams,
  GetSubAccountTransferHistoryResponse,
  SubAccountApiKey,
  SubAccountTransferParams,
} from './types';

export class SubAccount {
  #client: CoinExClient;

  constructor(client: CoinExClient) {
    this.#client = client;
  }

  /**
   * Create a new sub-account.
   * @description
   * **Info:** For specific signature rules, please refer to [Authentication](https://docs.coinex.com/api/v2/authorization).
   * - This endpoint will trigger rate limit. For specific rules, please refer to [Rate Limit](https://docs.coinex.com/api/v2/rate-limit).
   *
   * **Reminder:**
   * - This endpoint can only be accessed using the ACCESS ID of the main account.
   * - You can create up to 20 sub-accounts.
   *
   * @param params - The parameters for creating a sub-account.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/account/subs/http/create-sub
   */
  createSubAccount(params: CreateSubAccountParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'account/subs',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Get the list of sub-accounts.
   * @description
   * **Info:** For specific signature rules, please refer to [Authentication](https://docs.coinex.com/api/v2/authorization).
   * - This endpoint will trigger rate limit. For specific rules, please refer to [Rate Limit](https://docs.coinex.com/api/v2/rate-limit).
   *
   * **Reminder:**
   * - This endpoint can only be accessed using the ACCESS ID of the main account.
   *
   * @param params - The parameters for listing sub-accounts.
   * @param options - The options for the request.
   * @returns {Promise<GetSubAccountListResponse>} A list of sub-accounts and pagination info.
   * @see https://docs.coinex.com/api/v2/account/subs/http/list-sub
   */
  getSubAccountList(
    params: GetSubAccountListParams = {},
    options: RequestOptions = {}
  ): Promise<GetSubAccountListResponse> {
    return this.#client.request<GetSubAccountListResponse>(
      'account/subs',
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
   * Disable a sub-account.
   * @description
   * **Info:** For specific signature rules, please refer to [Authentication](https://docs.coinex.com/api/v2/authorization).
   * - This endpoint will trigger rate limit. For specific rules, please refer to [Rate Limit](https://docs.coinex.com/api/v2/rate-limit).
   *
   * **Reminder:**
   * - This endpoint can only be accessed using the ACCESS ID of the main account.
   *
   * @param params - The parameters for disabling a sub-account.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/account/subs/http/frozen-sub
   */
  disableSubAccount(params: DisableSubAccountParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'account/subs/frozen',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Enable a sub-account.
   * @description
   * **Info:** For specific signature rules, please refer to [Authentication](https://docs.coinex.com/api/v2/authorization).
   * - This endpoint will trigger rate limit. For specific rules, please refer to [Rate Limit](https://docs.coinex.com/api/v2/rate-limit).
   *
   * **Reminder:**
   * - This endpoint can only be accessed using the ACCESS ID of the main account.
   *
   * @param params - The parameters for enabling a sub-account.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/account/subs/http/cancel-frozen-sub
   */
  enableSubAccount(params: EnableSubAccountParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'account/subs/unfrozen',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Create a new API key for a sub-account.
   * @description
   * **Info:** For specific signature rules, please refer to [Authentication](https://docs.coinex.com/api/v2/authorization).
   * - This endpoint will trigger rate limit. For specific rules, please refer to [Rate Limit](https://docs.coinex.com/api/v2/rate-limit).
   *
   * **Reminder:**
   * - This endpoint can only be accessed using the ACCESS ID of the main account.
   * - API Administrative Permission is required for the sub-account before it can create API KEY.
   * - Each sub-account can create up to 50 API KEY.
   *
   * @param params - The parameters for creating a sub-account API key.
   * @param options - The options for the request.
   * @returns {Promise<SubAccountApiKey>} The created API key details.
   * @see https://docs.coinex.com/api/v2/account/subs/http/create-sub-api
   */
  createSubAccountApiKey(
    params: CreateSubAccountApiKeyParams,
    options: RequestOptions = {}
  ): Promise<SubAccountApiKey> {
    return this.#client.request<SubAccountApiKey>(
      'account/subs/api',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Get Sub-Account API KEY Detail
   * @description
   * **Info:** For specific signature rules, please refer to [Authentication](https://docs.coinex.com/api/v2/authorization).
   * - This endpoint will trigger rate limit. For specific rules, please refer to [Rate Limit](https://docs.coinex.com/api/v2/rate-limit).
   *
   * **Reminder:**
   * - This endpoint can only be accessed using the ACCESS ID of the main account
   *
   * @param params - The parameters for getting sub-account API key detail.
   * @param options - The options for the request.
   * @returns {Promise<SubAccountApiKey>} The API key details.
   * @see https://docs.coinex.com/api/v2/account/subs/http/get-sub-api
   */
  getSubAccountApiKeyDetail(
    params: GetSubAccountApiKeyDetailParams,
    options: RequestOptions = {}
  ): Promise<SubAccountApiKey> {
    return this.#client.request<SubAccountApiKey>(
      'account/subs/api-detail',
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
   * Get Sub-Account Info
   * @description
   * **Info:**
   * - This endpoint will trigger rate limit.
   *
   * @param options - The options for the request.
   * @returns {Promise<GetSubAccountInfoResponse>} The sub-account info.
   * @see https://docs.coinex.com/api/v2/account/subs/http/get-sub-info
   */
  getSubAccountInfo(options: RequestOptions = {}): Promise<GetSubAccountInfoResponse> {
    return this.#client.request<GetSubAccountInfoResponse>(
      'account/subs/info',
      deepmerge({ method: 'GET' }, options)
    );
  }

  /**
   * Asset Transfer between Sub-Accounts
   * @description
   * **Info:**
   * - This endpoint will trigger rate limit.
   *
   * **Reminder:**
   * - This endpoint can only be accessed using the ACCESS ID of the main account.
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/account/subs/http/sub-transfer
   */
  subAccountTransfer(params: SubAccountTransferParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'account/subs/transfer',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Get Transfer Records between Sub-Accounts
   * @description
   * **Info:**
   * - This endpoint will trigger rate limit.
   *
   * **Reminder:**
   * - This endpoint can only be accessed using the ACCESS ID of the main account.
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetSubAccountTransferHistoryResponse>} The transfer history.
   * @see https://docs.coinex.com/api/v2/account/subs/http/list-sub-transfer-history
   */
  getSubAccountTransferHistory(
    params: GetSubAccountTransferHistoryParams,
    options: RequestOptions = {}
  ): Promise<GetSubAccountTransferHistoryResponse> {
    return this.#client.request<GetSubAccountTransferHistoryResponse>(
      'account/subs/transfer-history',
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
   * Get Sub-Account API KEY List
   * @description
   * **Info:**
   * - This endpoint will trigger rate limit.
   *
   * **Reminder:**
   * - This endpoint can only be accessed using the ACCESS ID of the main account.
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetSubAccountApiKeyListResponse>} The API key list.
   * @see https://docs.coinex.com/api/v2/account/subs/http/list-sub-api
   */
  getSubAccountApiKeyList(
    params: GetSubAccountApiKeyListParams,
    options: RequestOptions = {}
  ): Promise<GetSubAccountApiKeyListResponse> {
    return this.#client.request<GetSubAccountApiKeyListResponse>(
      'account/subs/api',
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
   * Get Spot Balance in Sub-Account
   * @description
   * **Info:**
   * - This endpoint will trigger rate limit.
   *
   * **Reminder:**
   * - This endpoint can only be accessed using the ACCESS ID of the main account.
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetSubAccountSpotBalanceResponse>} The spot balance.
   * @see https://docs.coinex.com/api/v2/account/subs/http/get-sub-spot-balance
   */
  getSubAccountSpotBalance(
    params: GetSubAccountSpotBalanceParams,
    options: RequestOptions = {}
  ): Promise<GetSubAccountSpotBalanceResponse> {
    return this.#client.request<GetSubAccountSpotBalanceResponse>(
      'account/subs/spot-balance',
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
   * Edit Sub-Account API KEY
   * @description
   * **Info:**
   * - This endpoint will trigger rate limit.
   *
   * **Reminder:**
   * - This endpoint can only be accessed using the ACCESS ID of the main account.
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/account/subs/http/edit-sub-api
   */
  editSubAccountApiKey(
    params: EditSubAccountApiKeyParams,
    options: RequestOptions = {}
  ): Promise<{}> {
    return this.#client.request(
      'account/subs/api',
      deepmerge({ method: 'PUT', json: noUndefined(params) }, options)
    );
  }

  /**
   * Delete Sub-Account API KEY
   * @description
   * **Info:**
   * - This endpoint will trigger rate limit.
   *
   * **Reminder:**
   * - This endpoint can only be accessed using the ACCESS ID of the main account.
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/account/subs/http/delete-sub-api
   */
  deleteSubAccountApiKey(
    params: DeleteSubAccountApiKeyParams,
    options: RequestOptions = {}
  ): Promise<{}> {
    return this.#client.request(
      'account/subs/api',
      deepmerge({ method: 'DELETE', json: noUndefined(params) }, options)
    );
  }
}
