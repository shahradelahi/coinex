import type { AuthenticatedWebSocket } from '@/lib/websocket';

import type {
  SpotDealsSubscriptionParams,
  SpotDealsUnsubscribeParams,
  SpotDealsUpdate,
} from './types';

export class SpotDeals {
  #ws: AuthenticatedWebSocket;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
  }

  /**
   * Subscribes to market deals updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/spot/market/ws/market-deals
   */
  subscribe(
    params: SpotDealsSubscriptionParams,
    onUpdate: (update: SpotDealsUpdate) => void
  ): number {
    const id = this.#ws.send({ method: 'deals.subscribe', params });
    this.#ws.on('message', (message: { method: string; data: SpotDealsUpdate }) => {
      if (message.method === 'deals.update') {
        onUpdate(message.data);
      }
    });
    return id;
  }

  /**
   * Unsubscribes from market deals updates.
   * @param params - The unsubscription parameters.
   * @see https://docs.coinex.com/api/v2/spot/market/ws/market-deals
   */
  unsubscribe(params: SpotDealsUnsubscribeParams): number {
    return this.#ws.send({ method: 'deals.unsubscribe', params });
  }
}
