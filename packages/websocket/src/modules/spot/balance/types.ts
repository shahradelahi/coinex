/**
 * @interface SpotBalanceSubscriptionParams
 * @description Parameters for subscribing to asset balance updates.
 */
export interface SpotBalanceSubscriptionParams {
  /**
   * @property {string[]} ccy_list - List of asset names.
   * @description An empty array subscribes to all asset balances.
   */
  ccy_list: string[];
}

/**
 * @interface SpotBalance
 * @description Represents the balance of a single asset.
 */
export interface SpotBalance {
  /**
   * @property {string | null} margin_market - Margin account name, null for non-margin markets.
   */
  margin_market: string | null;
  /**
   * @property {string} ccy - Asset name.
   */
  ccy: string;
  /**
   * @property {string} available - Balance available.
   */
  available: string;
  /**
   * @property {string} frozen - Frozen balance.
   */
  frozen: string;
  /**
   * @property {number} updated_at - Latest update timestamp (millisecond).
   */
  updated_at: number;
}

/**
 * @interface SpotBalanceUpdate
 * @description Represents a balance update push from the server.
 */
export interface SpotBalanceUpdate {
  /**
   * @property {SpotBalance[]} balance_list - List of updated balances.
   */
  balance_list: SpotBalance[];
}
