import { type Pagination } from '../../account/subaccount/types';

/**
 * @interface AddAMMLiquidityParams
 * @description Parameters for adding AMM liquidity
 * @see https://docs.coinex.com/api/v2/assets/amm/http/add-liquidtiy
 */
export interface AddAMMLiquidityParams {
  /**
   * @property {string} market - Market name
   * @example "CETUSDT"
   */
  market: string;
  /**
   * @property {string} amount - The amount of asset to add
   * @example "100"
   */
  amount: string;
}

/**
 * @interface GetAMMIncomeHistoryParams
 * @description Parameters for getting AMM income history
 * @see https://docs.coinex.com/api/v2/assets/amm/http/list-income-history
 */
export interface GetAMMIncomeHistoryParams {
  /**
   * @property {string} [market] - Market name
   * @description If not passed, all markets will be returned.
   * @example "CETUSDT"
   */
  market?: string;
  /**
   * @property {number} [page] - Page number
   * @default 1
   */
  page?: number;
  /**
   * @property {number} [limit] - Number of records per page
   * @default 100
   */
  limit?: number;
}

/**
 * @interface AMMIncomeHistory
 * @description AMM income history
 */
export interface AMMIncomeHistory {
  /**
   * @property {string} market - Market name
   * @example "CETUSDT"
   */
  market: string;
  /**
   * @property {string} income - Income
   * @example "0.1"
   */
  income: string;
  /**
   * @property {number} created_at - Creation time
   * @example 1614837902000
   */
  created_at: number;
}

/**
 * @interface GetAMMIncomeHistoryResponse
 * @description Response for getting AMM income history
 */
export interface GetAMMIncomeHistoryResponse {
  data: AMMIncomeHistory[];
  pagination: Pagination;
}

/**
 * @interface GetAMMLiquidityPoolParams
 * @description Parameters for getting AMM liquidity pool
 * @see https://docs.coinex.com/api/v2/assets/amm/http/list-liquidity-pool
 */
export interface GetAMMLiquidityPoolParams {
  /**
   * @property {string} market - Market name list, separating multiple market names with "," and the maximum limit is 10 markets.
   * @example "CETUSDT,BTCUSDT"
   */
  market: string;
}

/**
 * @interface AMMLiquidityPool
 * @description AMM liquidity pool
 */
export interface AMMLiquidityPool {
  /**
   * @property {string} market - Market name
   * @example "CETUSDT"
   */
  market: string;
  /**
   * @property {string} total_liquidity - Total liquidity
   * @example "1000000"
   */
  total_liquidity: string;
  /**
   * @property {string} apy - APY
   * @example "0.05"
   */
  apy: string;
}

/**
 * @interface GetAMMLiquidityPoolResponse
 * @description Response for getting AMM liquidity pool
 */
export type GetAMMLiquidityPoolResponse = AMMLiquidityPool[];

/**
 * @interface RemoveAMMLiquidityParams
 * @description Parameters for removing AMM liquidity
 * @see https://docs.coinex.com/api/v2/assets/amm/http/remove-liquidtiy
 */
export interface RemoveAMMLiquidityParams {
  /**
   * @property {string} market - Market name
   * @example "CETUSDT"
   */
  market: string;
  /**
   * @property {string} amount - The amount of asset to remove
   * @example "100"
   */
  amount: string;
}
