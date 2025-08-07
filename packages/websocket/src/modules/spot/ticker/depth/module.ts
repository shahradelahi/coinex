import type { AuthenticatedWebSocket } from '@/lib/websocket';

import type {
  SpotDepthSubscriptionParams,
  SpotDepthUnsubscribeParams,
  SpotDepthUpdate,
} from './types';

export class SpotDepth {
  #ws: AuthenticatedWebSocket;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
  }

  /**
   * Subscribes to market depth updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/spot/market/ws/market-depth
   */
  subscribe(
    params: SpotDepthSubscriptionParams,
    onUpdate: (update: SpotDepthUpdate) => void
  ): number {
    const id = this.#ws.send({ method: 'depth.subscribe', params });
    this.#ws.on('message', (message: { method: string; data: SpotDepthUpdate }) => {
      if (message.method === 'depth.update') {
        onUpdate(message.data);
      }
    });
    return id;
  }

  /**
   * Unsubscribes from market depth updates.
   * @param params - The unsubscription parameters.
   * @see https://docs.coinex.com/api/v2/spot/market/ws/market-depth
   */
  unsubscribe(params: SpotDepthUnsubscribeParams): number {
    return this.#ws.send({ method: 'depth.unsubscribe', params });
  }
}
