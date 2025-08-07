import type { AuthenticatedWebSocket } from '@/lib/websocket';

import type {
  FuturesIndexSubscriptionParams,
  FuturesIndexUnsubscribeParams,
  FuturesIndexUpdate,
} from './types';

export class FuturesIndex {
  #ws: AuthenticatedWebSocket;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
  }

  /**
   * Subscribes to market index updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/futures/market/ws/market-index
   */
  subscribe(
    params: FuturesIndexSubscriptionParams,
    onUpdate: (update: FuturesIndexUpdate) => void
  ): number {
    const id = this.#ws.send({ method: 'index.subscribe', params });
    this.#ws.on('message', (message: { method: string; data: FuturesIndexUpdate }) => {
      if (message.method === 'index.update') {
        onUpdate(message.data);
      }
    });
    return id;
  }

  /**
   * Unsubscribes from market index updates.
   * @param params - The unsubscription parameters.
   * @see https://docs.coinex.com/api/v2/futures/market/ws/market-index
   */
  unsubscribe(params: FuturesIndexUnsubscribeParams): number {
    return this.#ws.send({ method: 'index.unsubscribe', params });
  }
}
