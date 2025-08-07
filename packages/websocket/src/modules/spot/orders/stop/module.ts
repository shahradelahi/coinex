import type { AuthenticatedWebSocket } from '@/lib/websocket';

import type {
  SpotStopOrderSubscriptionParams,
  SpotStopOrderUnsubscribeParams,
  SpotStopOrderUpdate,
} from './types';

export class SpotStopOrders {
  #ws: AuthenticatedWebSocket;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
  }

  /**
   * Subscribes to user stop order updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/spot/order/ws/user-stop-order
   */
  subscribe(
    params: SpotStopOrderSubscriptionParams,
    onUpdate: (update: SpotStopOrderUpdate) => void
  ): number {
    const id = this.#ws.send({ method: 'stop.subscribe', params });
    this.#ws.on('message', (message: { method: string; data: SpotStopOrderUpdate }) => {
      if (message.method === 'stop.update') {
        onUpdate(message.data);
      }
    });
    return id;
  }

  /**
   * Unsubscribes from user stop order updates.
   * @param params - The unsubscription parameters.
   * @see https://docs.coinex.com/api/v2/spot/order/ws/user-stop-order
   */
  unsubscribe(params: SpotStopOrderUnsubscribeParams): number {
    return this.#ws.send({ method: 'stop.unsubscribe', params });
  }
}
