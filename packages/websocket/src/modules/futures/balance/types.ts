/**
 * @interface FuturesBalanceSubscriptionParams
 * @description Parameters for subscribing to asset balance updates.
 */
export interface FuturesBalanceSubscriptionParams {
  /**
   * @property {string[]} ccy_list - List of asset names.
   * @description An empty array subscribes to all asset balances.
   */
  ccy_list: string[];
}

/**
 * @interface FuturesBalance
 * @description Represents the balance of a single asset in a futures account.
 */
export interface FuturesBalance {
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
   * @property {string} margin - Position margin.
   */
  margin: string;
  /**
   * @property {string} transferrable - Balance available for transfers.
   */
  transferrable: string;
  /**
   * @property {string} unrealized_pnl - Unrealized profit.
   */
  unrealized_pnl: string;
  /**
   * @property {string} equity - Equity.
   */
  equity: string;
}

/**
 * @interface FuturesBalanceUpdate
 * @description Represents a futures balance update push from the server.
 */
export interface FuturesBalanceUpdate {
  /**
   * @property {FuturesBalance[]} balance_list - List of updated balances.
   */
  balance_list: FuturesBalance[];
}
