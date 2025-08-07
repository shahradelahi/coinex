import deepmerge from 'deepmerge';

import { type CoinExClient } from '@/client';
import { type RequestOptions } from '@/types';

import { Fees } from './fees';
import { Settings } from './settings';
import { SubAccount } from './subaccount';
import { type GetAccountInfoResponse } from './types';

export class Account {
  #client: CoinExClient;
  public readonly subaccount: SubAccount;
  public readonly fees: Fees;
  public readonly settings: Settings;

  constructor(client: CoinExClient) {
    this.#client = client;
    this.subaccount = new SubAccount(client);
    this.fees = new Fees(client);
    this.settings = new Settings(client);
  }

  /**
   * Get User Account Info
   * @param options - The options for the request.
   * @returns {Promise<GetAccountInfoResponse>} The user account info.
   * @see https://docs.coinex.com/api/v2/account/info/http/get-account-info
   */
  getAccountInfo(options: RequestOptions = {}): Promise<GetAccountInfoResponse> {
    return this.#client.request<GetAccountInfoResponse>(
      'account/info',
      deepmerge(
        {
          method: 'GET',
        },
        options
      )
    );
  }
}
