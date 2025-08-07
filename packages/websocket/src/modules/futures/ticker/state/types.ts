/**
 * @interface FuturesStateSubscriptionParams
 * @description Parameters for subscribing to market status updates.
 */
export interface FuturesStateSubscriptionParams {
  /**
   * @property {string[]} market_list - List of market names.
   * @description An empty array subscribes to all markets.
   */
  market_list: string[];
}

/**
 * @interface FuturesStateUpdate
 * @description Represents a futures market status update push from the server.
 */
export interface FuturesStateUpdate {
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
   * @property {string} volume - 24H volume.
   */
  volume: string;
  /**
   * @property {string} value - 24h value.
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
   * @property {string} insurance_fund_size - Insurance fund amount.
   */
  insurance_fund_size: string;
  /**
   * @property {string} mark_price - Mark price.
   */
  mark_price: string;
  /**
   * @property {string} index_price - Index price.
   */
  index_price: string;
  /**
   * @property {string} open_interest_size - Current position.
   */
  open_interest_size: string;
  /**
   * @property {string} latest_funding_rate - Current funding rate.
   */
  latest_funding_rate: string;
  /**
   * @property {string} next_funding_rate - Next funding rate.
   */
  next_funding_rate: string;
  /**
   * @property {number} latest_funding_time - The time when the current funding rate is collected.
   */
  latest_funding_time: number;
  /**
   * @property {number} next_funding_time - The time when the next funding rate will be collected.
   */
  next_funding_time: number;
  /**
   * @property {number} period - Period, fixed at 86400, indicates that the data is a one-day value.
   */
  period: number;
}
