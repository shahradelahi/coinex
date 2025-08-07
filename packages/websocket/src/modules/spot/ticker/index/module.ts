import type { AuthenticatedWebSocket } from '@/lib/websocket';

import type {
  SpotIndexSubscriptionParams,
  SpotIndexUnsubscribeParams,
  SpotIndexUpdate,
} from './types';

export class SpotIndex {
  #ws: AuthenticatedWebSocket;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
  }

  /**
   * Subscribes to market index updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/spot/market/ws/market-index
   */
  subscribe(
    params: SpotIndexSubscriptionParams,
    onUpdate: (update: SpotIndexUpdate) => void
  ): number {
    const id = this.#ws.send({ method: 'index.subscribe', params });
    this.#ws.on('message', (message: { method: string; data: SpotIndexUpdate }) => {
      if (message.method === 'index.update') {
        onUpdate(message.data);
      }
    });
    return id;
  }

  /**
   * Unsubscribes from market index updates.
   * @param params - The unsubscription parameters.
   * @see https://docs.coinex.com/api/v2/spot/market/ws/market-index
   */
  unsubscribe(params: SpotIndexUnsubscribeParams): number {
    return this.#ws.send({ method: 'index.unsubscribe', params });
  }
}
