import type { AuthenticatedWebSocket } from '@/lib/websocket';

import type {
  SpotUserDealsSubscriptionParams,
  SpotUserDealsUnsubscribeParams,
  SpotUserDealsUpdate,
} from './types';

export class SpotExecutions {
  #ws: AuthenticatedWebSocket;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
  }

  /**
   * Subscribes to user transaction updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/spot/deal/ws/user-deals
   */
  subscribe(
    params: SpotUserDealsSubscriptionParams,
    onUpdate: (update: SpotUserDealsUpdate) => void
  ): number {
    const id = this.#ws.send({ method: 'user_deals.subscribe', params });
    this.#ws.on('message', (message: { method: string; data: SpotUserDealsUpdate }) => {
      if (message.method === 'user_deals.update') {
        onUpdate(message.data);
      }
    });
    return id;
  }

  /**
   * Unsubscribes from user transaction updates.
   * @param params - The unsubscription parameters.
   * @see https://docs.coinex.com/api/v2/spot/deal/ws/user-deals
   */
  unsubscribe(params: SpotUserDealsUnsubscribeParams): number {
    return this.#ws.send({ method: 'user_deals.unsubscribe', params });
  }
}
