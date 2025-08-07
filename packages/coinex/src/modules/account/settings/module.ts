import deepmerge from 'deepmerge';

import { type CoinExClient } from '@/client';
import { noUndefined } from '@/lib/object';
import type { RequestOptions } from '@/types';

import type {
  GetFuturesMarketSettingsResponse,
  ModifyAccountSettingsParams,
  ModifyFuturesMarketSettingsParams,
} from './types';

export class Settings {
  #client: CoinExClient;

  constructor(client: CoinExClient) {
    this.#client = client;
  }

  /**
   * Query User Futures Market Settings
   *
   * @param options - The options for the request.
   * @returns {Promise<GetFuturesMarketSettingsResponse>} The futures market settings.
   * @see https://docs.coinex.com/api/v2/account/settings/http/accquire-futures-market-settings
   */
  getFuturesMarketSettings(
    options: RequestOptions = {}
  ): Promise<GetFuturesMarketSettingsResponse> {
    return this.#client.request<GetFuturesMarketSettingsResponse>(
      'account/futures/settings',
      deepmerge(
        {
          method: 'GET',
        },
        options
      )
    );
  }

  /**
   * Modify Account Settings
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/account/settings/http/modify-account-settings
   */
  modifyAccountSettings(
    params: ModifyAccountSettingsParams,
    options: RequestOptions = {}
  ): Promise<{}> {
    return this.#client.request(
      'account/settings',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }

  /**
   * Change User Futures Market Settings
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/account/settings/http/modify-futures-market-settings
   */
  modifyFuturesMarketSettings(
    params: ModifyFuturesMarketSettingsParams,
    options: RequestOptions = {}
  ): Promise<{}> {
    return this.#client.request(
      'account/futures/settings',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }
}
