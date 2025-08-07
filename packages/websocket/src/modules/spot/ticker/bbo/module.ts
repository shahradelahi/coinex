import type { AuthenticatedWebSocket } from '@/lib/websocket';

import type { SpotBboSubscriptionParams, SpotBboUnsubscribeParams, SpotBboUpdate } from './types';

export class SpotBbo {
  #ws: AuthenticatedWebSocket;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
  }

  /**
   * Subscribes to BBO updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/spot/market/ws/market-bbo
   */
  subscribe(params: SpotBboSubscriptionParams, onUpdate: (update: SpotBboUpdate) => void): number {
    const id = this.#ws.send({ method: 'bbo.subscribe', params });
    this.#ws.on('message', (message: { method: string; data: SpotBboUpdate }) => {
      if (message.method === 'bbo.update') {
        onUpdate(message.data);
      }
    });
    return id;
  }

  /**
   * Unsubscribes from BBO updates.
   * @param params - The unsubscription parameters.
   * @see https://docs.coinex.com/api/v2/spot/market/ws/market-bbo
   */
  unsubscribe(params: SpotBboUnsubscribeParams): number {
    return this.#ws.send({ method: 'bbo.unsubscribe', params });
  }
}
