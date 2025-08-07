/**
 * @interface SpotStateSubscriptionParams
 * @description Parameters for subscribing to market status updates.
 */
export interface SpotStateSubscriptionParams {
  /**
   * @property {string[]} market_list - List of market names.
   * @description An empty array subscribes to all markets.
   */
  market_list: string[];
}

/**
 * @interface SpotStateUpdate
 * @description Represents a market status update push from the server.
 */
export interface SpotStateUpdate {
  /**
   * @property {string} market - Market name.
   */
  market: string;
  /**
   * @property {string} last - Latest price.
   */
  last: string;
  /**
   * @property {string} open - Opening price.
   */
  open: string;
  /**
   * @property {string} close - Closing price.
   */
  close: string;
  /**
   * @property {string} high - Highest price.
   */
  high: string;
  /**
   * @property {string} low - Lowest price.
   */
  low: string;
  /**
   * @property {string} volume - Filled volume.
   */
  volume: string;
  /**
   * @property {string} value - Filled value.
   */
  value: string;
  /**
   * @property {string} volume_sell - Best ask size.
   */
  volume_sell: string;
  /**
   * @property {string} volume_buy - Best bid size.
   */
  volume_buy: string;
  /**
   * @property {number} period - Period, fixed at 86400, indicates that the data is a one-day value.
   */
  period: number;
}
