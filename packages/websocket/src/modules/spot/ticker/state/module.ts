import type { AuthenticatedWebSocket } from '@/lib/websocket';

import type { SpotStateSubscriptionParams, SpotStateUpdate } from './types';

export class SpotState {
  #ws: AuthenticatedWebSocket;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
  }

  /**
   * Subscribes to market status updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/spot/market/ws/market
   */
  subscribe(
    params: SpotStateSubscriptionParams,
    onUpdate: (update: SpotStateUpdate) => void
  ): number {
    const id = this.#ws.send({ method: 'state.subscribe', params });
    this.#ws.on(
      'message',
      (message: { method: string; data: { state_list: SpotStateUpdate[] } }) => {
        if (message.method === 'state.update') {
          message.data.state_list.forEach(onUpdate);
        }
      }
    );
    return id;
  }

  /**
   * Unsubscribes from market status updates.
   * @param params - The unsubscription parameters.
   * @see https://docs.coinex.com/api/v2/spot/market/ws/market
   */
  unsubscribe(params: SpotStateSubscriptionParams): number {
    return this.#ws.send({ method: 'state.unsubscribe', params });
  }
}
