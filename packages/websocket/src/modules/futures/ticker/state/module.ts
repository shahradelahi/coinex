import type { AuthenticatedWebSocket } from '@/lib/websocket';

import type { FuturesStateSubscriptionParams, FuturesStateUpdate } from './types';

export class FuturesState {
  #ws: AuthenticatedWebSocket;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
  }

  /**
   * Subscribes to market status updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/futures/market/ws/market-state
   */
  subscribe(
    params: FuturesStateSubscriptionParams,
    onUpdate: (update: FuturesStateUpdate) => void
  ): number {
    const id = this.#ws.send({ method: 'state.subscribe', params });
    this.#ws.on(
      'message',
      (message: { method: string; data: { state_list: FuturesStateUpdate[] } }) => {
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
   * @see https://docs.coinex.com/api/v2/futures/market/ws/market-state
   */
  unsubscribe(params: FuturesStateSubscriptionParams): number {
    return this.#ws.send({ method: 'state.unsubscribe', params });
  }
}
