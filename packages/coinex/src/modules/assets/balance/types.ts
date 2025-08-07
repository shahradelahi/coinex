import { type Pagination } from '../../account/subaccount/types';

/**
 * @interface AMMLiquidityInfo
 * @description AMM liquidity information.
 * @see https://docs.coinex.com/api/v2/assets/balance/http/get-amm-liquidity
 */
export interface AMMLiquidityInfo {
  /**
   * @property {string} market - Market name.
   * @example "CETUSDT"
   */
  market: string;
  /**
   * @property {string} asset_amount - The amount of assets in the AMM account.
   * @example "1000"
   */
  asset_amount: string;
  /**
   * @property {string} share_amount - The amount of shares in the AMM account.
   * @example "1000"
   */
  share_amount: string;
}

/**
 * @interface GetAMMLiquidityParams
 * @description Parameters for getting AMM liquidity.
 * @see https://docs.coinex.com/api/v2/assets/balance/http/get-amm-liquidity
 */
export interface GetAMMLiquidityParams {
  /**
   * @property {number} [account_id] - Account ID.
   * @description The default is the main account.
   */
  account_id?: number;
}

/**
 * @interface GetAMMLiquidityResponse
 * @description Response for getting AMM liquidity.
 */
export type GetAMMLiquidityResponse = AMMLiquidityInfo[];

/**
 * @interface CreditBalance
 * @description Credit account balance.
 * @see https://docs.coinex.com/api/v2/assets/balance/http/get-credit-balance
 */
export interface CreditBalance {
  /**
   * @property {string} ccy - Currency name.
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} available - Available balance.
   * @example "1000"
   */
  available: string;
  /**
   * @property {string} frozen - Frozen balance.
   * @example "0"
   */
  frozen: string;
  /**
   * @property {number} updated_at - Update time.
   * @example 1614837902000
   */
  updated_at: number;
}

/**
 * @interface GetCreditBalanceParams
 * @description Parameters for getting credit balance.
 * @see https://docs.coinex.com/api/v2/assets/balance/http/get-credit-balance
 */
export interface GetCreditBalanceParams {
  /**
   * @property {string} [ccy] - Currency name.
   * @description If not passed, all currencies will be returned.
   */
  ccy?: string;
}

/**
 * @interface GetCreditBalanceResponse
 * @description Response for getting credit balance.
 */
export type GetCreditBalanceResponse = CreditBalance[];

/**
 * @interface CreditInfo
 * @description Credit account information.
 * @see https://docs.coinex.com/api/v2/assets/balance/http/get-credit-info
 */
export interface CreditInfo {
  /**
   * @property {string} ccy - Currency name.
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} total_balance - Total balance.
   * @example "1000"
   */
  total_balance: string;
  /**
   * @property {string} available_balance - Available balance.
   * @example "1000"
   */
  available_balance: string;
  /**
   * @property {string} frozen_balance - Frozen balance.
   * @example "0"
   */
  frozen_balance: string;
  /**
   * @property {string} loan_balance - Loan balance.
   * @example "0"
   */
  loan_balance: string;
  /**
   * @property {string} interest - Interest.
   * @example "0"
   */
  interest: string;
  /**
   * @property {number} updated_at - Update time.
   * @example 1614837902000
   */
  updated_at: number;
}

/**
 * @interface GetCreditInfoParams
 * @description Parameters for getting credit info.
 * @see https://docs.coinex.com/api/v2/assets/balance/http/get-credit-info
 */
export interface GetCreditInfoParams {
  /**
   * @property {string} [ccy] - Currency name.
   * @description If not passed, all currencies will be returned.
   */
  ccy?: string;
}

/**
 * @interface GetCreditInfoResponse
 * @description Response for getting credit info.
 */
export type GetCreditInfoResponse = CreditInfo[];

/**
 * @interface FinancialBalance
 * @description Financial account balance.
 * @see https://docs.coinex.com/api/v2/assets/balance/http/get-financial-balance
 */
export interface FinancialBalance {
  /**
   * @property {string} ccy - Currency name.
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} available - Available balance.
   * @example "1000"
   */
  available: string;
  /**
   * @property {string} frozen - Frozen balance.
   * @example "0"
   */
  frozen: string;
  /**
   * @property {number} updated_at - Update time.
   * @example 1614837902000
   */
  updated_at: number;
}

/**
 * @interface GetFinancialBalanceParams
 * @description Parameters for getting financial balance.
 * @see https://docs.coinex.com/api/v2/assets/balance/http/get-financial-balance
 */
export interface GetFinancialBalanceParams {
  /**
   * @property {string} [ccy] - Currency name.
   * @description If not passed, all currencies will be returned.
   */
  ccy?: string;
}

/**
 * @interface GetFinancialBalanceResponse
 * @description Response for getting financial balance.
 */
export type GetFinancialBalanceResponse = FinancialBalance[];

/**
 * @interface FuturesBalance
 * @description Futures account balance.
 * @see https://docs.coinex.com/api/v2/assets/balance/http/get-futures-balance
 */
export interface FuturesBalance {
  /**
   * @property {string} ccy - Currency name.
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} available - Available balance.
   * @example "1000"
   */
  available: string;
  /**
   * @property {string} frozen - Frozen balance.
   * @example "0"
   */
  frozen: string;
  /**
   * @property {string} margin - Position margin.
   * @example "0"
   */
  margin: string;
  /**
   * @property {string} transferable - Transferable balance.
   * @example "1000"
   */
  transferable: string;
  /**
   * @property {string} unrealized_pnl - Unrealized PNL.
   * @example "0"
   */
  unrealized_pnl: string;
  /**
   * @property {string} equity - Equity.
   * @example "1000"
   */
  equity: string;
  /**
   * @property {number} updated_at - Update time.
   * @example 1614837902000
   */
  updated_at: number;
}

/**
 * @interface GetFuturesBalanceParams
 * @description Parameters for getting futures balance.
 * @see https://docs.coinex.com/api/v2/assets/balance/http/get-futures-balance
 */
export interface GetFuturesBalanceParams {
  /**
   * @property {string} [ccy] - Currency name.
   * @description If not passed, all currencies will be returned.
   */
  ccy?: string;
}

/**
 * @interface GetFuturesBalanceResponse
 * @description Response for getting futures balance.
 */
export type GetFuturesBalanceResponse = FuturesBalance[];

/**
 * @interface MarginBalanceDetail
 * @description Margin balance detail.
 */
export interface MarginBalanceDetail {
  /**
   * @property {string} ccy - Currency name.
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} available - Available balance.
   * @example "1000"
   */
  available: string;
  /**
   * @property {string} frozen - Frozen balance.
   * @example "0"
   */
  frozen: string;
  /**
   * @property {number} updated_at - Update time.
   * @example 1614837902000
   */
  updated_at: number;
}

/**
 * @interface MarginBalance
 * @description Margin account balance.
 * @see https://docs.coinex.com/api/v2/assets/balance/http/get-marigin-balance
 */
export interface MarginBalance {
  /**
   * @property {string} market - Market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {MarginBalanceDetail[]} margin_balance - Margin balance details.
   */
  margin_balance: MarginBalanceDetail[];
}

/**
 * @interface GetMarginBalanceParams
 * @description Parameters for getting margin balance.
 * @see https://docs.coinex.com/api/v2/assets/balance/http/get-marigin-balance
 */
export interface GetMarginBalanceParams {
  /**
   * @property {string} market - Market name.
   * @example "BTCUSDT"
   */
  market: string;
  /**
   * @property {string} [ccy] - Currency name.
   * @description If not passed, all currencies will be returned.
   */
  ccy?: string;
}

/**
 * @interface GetMarginBalanceResponse
 * @description Response for getting margin balance.
 */
export type GetMarginBalanceResponse = MarginBalance[];

/**
 * @interface SpotBalance
 * @description Spot account balance.
 * @see https://docs.coinex.com/api/v2/assets/balance/http/get-spot-balance
 */
export interface SpotBalance {
  /**
   * @property {string} ccy - Currency name.
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} available - Available balance.
   * @example "1000"
   */
  available: string;
  /**
   * @property {string} frozen - Frozen balance.
   * @example "0"
   */
  frozen: string;
  /**
   * @property {number} updated_at - Update time.
   * @example 1614837902000
   */
  updated_at: number;
}

/**
 * @interface GetSpotBalanceParams
 * @description Parameters for getting spot balance.
 * @see https://docs.coinex.com/api/v2/assets/balance/http/get-spot-balance
 */
export interface GetSpotBalanceParams {
  /**
   * @property {string} [ccy] - Currency name.
   * @description If not passed, all currencies will be returned.
   */
  ccy?: string;
}

/**
 * @interface GetSpotBalanceResponse
 * @description Response for getting spot balance.
 */
export type GetSpotBalanceResponse = SpotBalance[];

/**
 * @interface SpotTransaction
 * @description Spot transaction details.
 * @see https://docs.coinex.com/api/v2/assets/balance/http/get-spot-transcation-history
 */
export interface SpotTransaction {
  /**
   * @property {number} transaction_id - Transaction ID.
   * @example 123456789
   */
  transaction_id: number;
  /**
   * @property {string} ccy - Currency name.
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} amount - Transaction amount.
   * @example "100"
   */
  amount: string;
  /**
   * @property {string} balance - Balance after transaction.
   * @example "1100"
   */
  balance: string;
  /**
   * @property {string} transaction_type - Transaction type.
   * @example "deposit"
   */
  transaction_type: string;
  /**
   * @property {number} created_at - Creation time.
   * @example 1614837902000
   */
  created_at: number;
}

/**
 * @interface GetSpotTransactionHistoryParams
 * @description Parameters for getting spot transaction history.
 * @see https://docs.coinex.com/api/v2/assets/balance/http/get-spot-transcation-history
 */
export interface GetSpotTransactionHistoryParams {
  /**
   * @property {string} [ccy] - Currency name.
   * @description If not passed, all currencies will be returned.
   */
  ccy?: string;
  /**
   * @property {string} [transaction_type] - Transaction type.
   */
  transaction_type?: string;
  /**
   * @property {number} [start_time] - Start time.
   */
  start_time?: number;
  /**
   * @property {number} [end_time] - End time.
   */
  end_time?: number;
  /**
   * @property {number} [page] - Page number.
   */
  page?: number;
  /**
   * @property {number} [limit] - Number of records per page.
   */
  limit?: number;
}

/**
 * @interface GetSpotTransactionHistoryResponse
 * @description Response for getting spot transaction history.
 */
export interface GetSpotTransactionHistoryResponse {
  data: SpotTransaction[];
  pagination: Pagination;
}
