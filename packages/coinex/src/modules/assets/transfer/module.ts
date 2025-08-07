import deepmerge from 'deepmerge';

import { type CoinExClient } from '@/client';
import { noUndefined } from '@/lib/object';
import type { RequestOptions } from '@/types';

import type {
  GetAssetTransferHistoryParams,
  GetAssetTransferHistoryResponse,
  TransferParams,
} from './types';

export class Transfer {
  #client: CoinExClient;

  constructor(client: CoinExClient) {
    this.#client = client;
  }

  /**
   * Get Asset Transfer Record
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<GetAssetTransferHistoryResponse>} The asset transfer history.
   * @see https://docs.coinex.com/api/v2/assets/transfer/http/list-transfer-history
   */
  getAssetTransferHistory(
    params: GetAssetTransferHistoryParams,
    options: RequestOptions = {}
  ): Promise<GetAssetTransferHistoryResponse> {
    return this.#client.request<GetAssetTransferHistoryResponse>(
      'assets/transfer-history',
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
   * Transfer
   *
   * @param params - The parameters for the request.
   * @param options - The options for the request.
   * @returns {Promise<{}>} An empty object on success.
   * @see https://docs.coinex.com/api/v2/assets/transfer/http/transfer
   */
  transfer(params: TransferParams, options: RequestOptions = {}): Promise<{}> {
    return this.#client.request(
      'assets/transfer',
      deepmerge({ method: 'POST', json: noUndefined(params) }, options)
    );
  }
}
