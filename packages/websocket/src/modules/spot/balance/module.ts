import type { AuthenticatedWebSocket } from '@/lib/websocket';

import type { SpotBalanceSubscriptionParams, SpotBalanceUpdate } from './types';

export class SpotBalance {
  #ws: AuthenticatedWebSocket;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
  }

  /**
   * Subscribes to asset balance updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/assets/balance/ws/spot_balance
   */
  subscribe(
    params: SpotBalanceSubscriptionParams,
    onUpdate: (update: SpotBalanceUpdate) => void
  ): number {
    const id = this.#ws.send({ method: 'balance.subscribe', params });
    this.#ws.on('message', (message: { method: string; data: SpotBalanceUpdate }) => {
      if (message.method === 'balance.update') {
        onUpdate(message.data);
      }
    });
    return id;
  }

  /**
   * Unsubscribes from asset balance updates.
   * @param params - The unsubscription parameters.
   * @see https://docs.coinex.com/api/v2/assets/balance/ws/spot_balance
   */
  unsubscribe(params: SpotBalanceSubscriptionParams): number {
    return this.#ws.send({ method: 'balance.unsubscribe', params });
  }
}
