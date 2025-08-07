import type { AuthenticatedWebSocket } from '@/lib/websocket';

import type { FuturesBalanceSubscriptionParams, FuturesBalanceUpdate } from './types';

export class FuturesBalance {
  #ws: AuthenticatedWebSocket;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
  }

  /**
   * Subscribes to futures asset balance updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/assets/balance/ws/futures_balance
   */
  subscribe(
    params: FuturesBalanceSubscriptionParams,
    onUpdate: (update: FuturesBalanceUpdate) => void
  ): number {
    const id = this.#ws.send({ method: 'balance.subscribe', params });
    this.#ws.on('message', (message: { method: string; data: FuturesBalanceUpdate }) => {
      if (message.method === 'balance.update') {
        onUpdate(message.data);
      }
    });
    return id;
  }

  /**
   * Unsubscribes from futures asset balance updates.
   * @param params - The unsubscription parameters.
   * @see https://docs.coinex.com/api/v2/assets/balance/ws/futures_balance
   */
  unsubscribe(params: FuturesBalanceSubscriptionParams): number {
    return this.#ws.send({ method: 'balance.unsubscribe', params });
  }
}
