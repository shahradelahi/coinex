import type { AuthenticatedWebSocket } from '@/lib/websocket';

import type {
  FuturesBboSubscriptionParams,
  FuturesBboUnsubscribeParams,
  FuturesBboUpdate,
} from './types';

export class FuturesBbo {
  #ws: AuthenticatedWebSocket;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
  }

  /**
   * Subscribes to BBO updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/futures/market/ws/market-bbo
   */
  subscribe(
    params: FuturesBboSubscriptionParams,
    onUpdate: (update: FuturesBboUpdate) => void
  ): number {
    const id = this.#ws.send({ method: 'bbo.subscribe', params });
    this.#ws.on('message', (message: { method: string; data: FuturesBboUpdate }) => {
      if (message.method === 'bbo.update') {
        onUpdate(message.data);
      }
    });
    return id;
  }

  /**
   * Unsubscribes from BBO updates.
   * @param params - The unsubscription parameters.
   * @see https://docs.coinex.com/api/v2/futures/market/ws/market-bbo
   */
  unsubscribe(params: FuturesBboUnsubscribeParams): number {
    return this.#ws.send({ method: 'bbo.unsubscribe', params });
  }
}
