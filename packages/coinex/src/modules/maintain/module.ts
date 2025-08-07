import { type CoinExClient } from '@/client';
import type { RequestOptions } from '@/types';

import type { GetMaintenanceInfoResponse } from './types';

export class Maintain {
  #client: CoinExClient;

  constructor(client: CoinExClient) {
    this.#client = client;
  }

  /**
   * Get Maintenance Information
   * @description
   * The protection period refers to a continuous period following the system maintenance (It's an optional configuration, and may or may not be set). During the protection period, you can cancel orders, place orders (limited to Maker Only Limit Orders), and adjust (add or reduce) margins.
   * @param options - The options for the request.
   * @returns {Promise<GetMaintenanceInfoResponse>} Maintenance information.
   * @see https://docs.coinex.com/api/v2/common/http/maintain
   */
  getMaintenanceInfo(options: RequestOptions = {}): Promise<GetMaintenanceInfoResponse> {
    return this.#client.request<GetMaintenanceInfoResponse>('maintain/info', {
      method: 'GET',
      ...options,
      context: {
        public: true,
      },
    });
  }
}
