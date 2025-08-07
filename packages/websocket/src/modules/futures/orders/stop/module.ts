import type { AuthenticatedWebSocket } from '@/lib/websocket';

import type {
  FuturesStopOrderSubscriptionParams,
  FuturesStopOrderUnsubscribeParams,
  FuturesStopOrderUpdate,
} from './types';

export class FuturesStopOrders {
  #ws: AuthenticatedWebSocket;

  constructor(ws: AuthenticatedWebSocket) {
    this.#ws = ws;
  }

  /**
   * Subscribes to user stop order updates.
   * @param params - The subscription parameters.
   * @param onUpdate - The callback function to handle updates.
   * @see https://docs.coinex.com/api/v2/futures/order/ws/user-stop-order
   */
  subscribe(
    params: FuturesStopOrderSubscriptionParams,
    onUpdate: (update: FuturesStopOrderUpdate) => void
  ): number {
    const id = this.#ws.send({ method: 'stop.subscribe', params });
    this.#ws.on('message', (message: { method: string; data: FuturesStopOrderUpdate }) => {
      if (message.method === 'stop.update') {
        onUpdate(message.data);
      }
    });
    return id;
  }

  /**
   * Unsubscribes from user stop order updates.
   * @param params - The unsubscription parameters.
   * @see https://docs.coinex.com/api/v2/futures/order/ws/user-stop-order
   */
  unsubscribe(params: FuturesStopOrderUnsubscribeParams): number {
    return this.#ws.send({ method: 'stop.unsubscribe', params });
  }
}
