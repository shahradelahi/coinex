import type { AuthenticatedWebSocket } from '@/lib/websocket';

import type {
  FuturesPositionSubscriptionParams,
  FuturesPositionUnsubscribeParams,
  FuturesPositionUpdate,
} from './types';

export class Position {
  #ws: AuthenticatedWebSocket;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
  }

  /**
   * Subscribes to user position updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/futures/position/ws/user-position
   */
  subscribe(
    params: FuturesPositionSubscriptionParams,
    onUpdate: (update: FuturesPositionUpdate) => void
  ): number {
    const id = this.#ws.send({ method: 'position.subscribe', params });
    this.#ws.on('message', (message: { method: string; data: FuturesPositionUpdate }) => {
      if (message.method === 'position.update') {
        onUpdate(message.data);
      }
    });
    return id;
  }

  /**
   * Unsubscribes from user position updates.
   * @param params - The unsubscription parameters.
   * @see https://docs.coinex.com/api/v2/futures/position/ws/user-position
   */
  unsubscribe(params: FuturesPositionUnsubscribeParams): number {
    return this.#ws.send({ method: 'position.unsubscribe', params });
  }
}
