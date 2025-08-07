import type { AuthenticatedWebSocket } from '@/lib/websocket';

import type {
  FuturesDealsSubscriptionParams,
  FuturesDealsUnsubscribeParams,
  FuturesDealsUpdate,
} from './types';

export class FuturesDeals {
  #ws: AuthenticatedWebSocket;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
  }

  /**
   * Subscribes to market deals updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/futures/market/ws/market-deals
   */
  subscribe(
    params: FuturesDealsSubscriptionParams,
    onUpdate: (update: FuturesDealsUpdate) => void
  ): number {
    const id = this.#ws.send({ method: 'deals.subscribe', params });
    this.#ws.on('message', (message: { method: string; data: FuturesDealsUpdate }) => {
      if (message.method === 'deals.update') {
        onUpdate(message.data);
      }
    });
    return id;
  }

  /**
   * Unsubscribes from market deals updates.
   * @param params - The unsubscription parameters.
   * @see https://docs.coinex.com/api/v2/futures/market/ws/market-deals
   */
  unsubscribe(params: FuturesDealsUnsubscribeParams): number {
    return this.#ws.send({ method: 'deals.unsubscribe', params });
  }
}
