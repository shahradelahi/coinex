import { type Pagination } from '../../account/subaccount/types';

/**
 * @interface CancelWithdrawalParams
 * @description Parameters for cancelling a withdrawal
 * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/cancel-withdrawal
 */
export interface CancelWithdrawalParams {
  /**
   * @property {number} withdrawal_id - Withdrawal ID
   * @example 12345
   */
  withdrawal_id: number;
}

/**
 * @interface GetDepositAddressParams
 * @description Parameters for getting a deposit address
 * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/get-deposit-address
 */
export interface GetDepositAddressParams {
  /**
   * @property {string} ccy - Currency name
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} network - Public chain name
   * @example "TRC20"
   */
  network: string;
}

/**
 * @interface DepositAddress
 * @description Deposit address
 */
export interface DepositAddress {
  /**
   * @property {string} address - Deposit address
   * @example "0x1234567890123456789012345678901234567890"
   */
  address: string;
  /**
   * @property {string} [memo] - Memo/Tag
   * @example "12345"
   */
  memo?: string;
}

/**
 * @interface GetDepositAddressResponse
 * @description Response for getting a deposit address
 */
export type GetDepositAddressResponse = DepositAddress;

/**
 * @interface GetDepositWithdrawalConfigParams
 * @description Parameters for getting deposit and withdrawal configuration
 * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/get-deposit-withdrawal-config
 */
export interface GetDepositWithdrawalConfigParams {
  /**
   * @property {string} ccy - Currency name
   * @example "USDT"
   */
  ccy: string;
}

/**
 * @interface DepositWithdrawalConfig
 * @description Deposit and withdrawal configuration
 */
export interface DepositWithdrawalConfig {
  /**
   * @property {string} ccy - Currency name
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} min_deposit_amount - Minimum deposit amount
   * @example "10"
   */
  min_deposit_amount: string;
  /**
   * @property {string} min_withdrawal_amount - Minimum withdrawal amount
   * @example "10"
   */
  min_withdrawal_amount: string;
  /**
   * @property {boolean} is_deposit_available - Whether deposit is available
   * @example true
   */
  is_deposit_available: boolean;
  /**
   * @property {boolean} is_withdrawal_available - Whether withdrawal is available
   * @example true
   */
  is_withdrawal_available: boolean;
}

/**
 * @interface GetDepositWithdrawalConfigResponse
 * @description Response for getting deposit and withdrawal configuration
 */
export type GetDepositWithdrawalConfigResponse = DepositWithdrawalConfig[];

/**
 * @interface GetAllDepositWithdrawalConfigResponse
 * @description Response for getting all deposit and withdrawal configuration
 * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/list-all-deposit-withdrawal-config
 */
export type GetAllDepositWithdrawalConfigResponse = DepositWithdrawalConfig[];

/**
 * @interface GetAssetInfoParams
 * @description Parameters for getting asset information
 * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/list-assets-info
 */
export interface GetAssetInfoParams {
  /**
   * @property {string} [ccy] - Currency name
   * @description If not passed, all currencies will be returned.
   * @example "USDT"
   */
  ccy?: string;
}

/**
 * @interface AssetInfo
 * @description Asset information
 */
export interface AssetInfo {
  /**
   * @property {string} ccy - Currency name
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} asset_name - Asset name
   * @example "TetherUS"
   */
  asset_name: string;
  /**
   * @property {string} description - Asset description
   * @example "A stablecoin pegged to the US dollar."
   */
  description: string;
  /**
   * @property {string} logo - Asset logo URL
   * @example "https://s.coinex.com/static/dist/images/coins/USDT.png"
   */
  logo: string;
}

/**
 * @interface GetAssetInfoResponse
 * @description Response for getting asset information
 */
export type GetAssetInfoResponse = AssetInfo[];

/**
 * @interface GetDepositHistoryParams
 * @description Parameters for getting deposit history
 * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/list-deposit-history
 */
export interface GetDepositHistoryParams {
  /**
   * @property {string} [ccy] - Currency name
   * @description If not passed, all currencies will be returned.
   * @example "USDT"
   */
  ccy?: string;
  /**
   * @property {string} [tx_id] - Transaction ID
   * @example "0x1234567890123456789012345678901234567890"
   */
  tx_id?: string;
  /**
   * @property {string} [status] - Deposit status
   * @example "success"
   */
  status?: string;
  /**
   * @property {number} [start_time] - Start time
   */
  start_time?: number;
  /**
   * @property {number} [end_time] - End time
   */
  end_time?: number;
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
 * @interface DepositHistory
 * @description Deposit history
 */
export interface DepositHistory {
  /**
   * @property {number} deposit_id - Deposit ID
   * @example 12345
   */
  deposit_id: number;
  /**
   * @property {string} ccy - Currency name
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} network - Public chain name
   * @example "TRC20"
   */
  network: string;
  /**
   * @property {string} amount - Deposit amount
   * @example "100"
   */
  amount: string;
  /**
   * @property {string} address - Deposit address
   * @example "0x1234567890123456789012345678901234567890"
   */
  address: string;
  /**
   * @property {string} memo - Memo/Tag
   * @example "12345"
   */
  memo: string;
  /**
   * @property {string} tx_id - Transaction ID
   * @example "0x1234567890123456789012345678901234567890"
   */
  tx_id: string;
  /**
   * @property {string} status - Deposit status
   * @example "success"
   */
  status: string;
  /**
   * @property {number} created_at - Creation time
   * @example 1614837902000
   */
  created_at: number;
}

/**
 * @interface GetDepositHistoryResponse
 * @description Response for getting deposit history
 */
export interface GetDepositHistoryResponse {
  data: DepositHistory[];
  pagination: Pagination;
}

/**
 * @interface GetWithdrawalHistoryParams
 * @description Parameters for getting withdrawal history
 * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/list-withdrawal-history
 */
export interface GetWithdrawalHistoryParams {
  /**
   * @property {string} [ccy] - Currency name
   * @description If not passed, all currencies will be returned.
   * @example "USDT"
   */
  ccy?: string;
  /**
   * @property {string} [status] - Withdrawal status
   * @example "success"
   */
  status?: string;
  /**
   * @property {number} [start_time] - Start time
   */
  start_time?: number;
  /**
   * @property {number} [end_time] - End time
   */
  end_time?: number;
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
 * @interface WithdrawalHistory
 * @description Withdrawal history
 */
export interface WithdrawalHistory {
  /**
   * @property {number} withdrawal_id - Withdrawal ID
   * @example 12345
   */
  withdrawal_id: number;
  /**
   * @property {string} ccy - Currency name
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} network - Public chain name
   * @example "TRC20"
   */
  network: string;
  /**
   * @property {string} amount - Withdrawal amount
   * @example "100"
   */
  amount: string;
  /**
   * @property {string} fee - Withdrawal fee
   * @example "1"
   */
  fee: string;
  /**
   * @property {string} address - Withdrawal address
   * @example "0x1234567890123456789012345678901234567890"
   */
  address: string;
  /**
   * @property {string} memo - Memo/Tag
   * @example "12345"
   */
  memo: string;
  /**
   * @property {string} tx_id - Transaction ID
   * @example "0x1234567890123456789012345678901234567890"
   */
  tx_id: string;
  /**
   * @property {string} status - Withdrawal status
   * @example "success"
   */
  status: string;
  /**
   * @property {number} created_at - Creation time
   * @example 1614837902000
   */
  created_at: number;
}

/**
 * @interface GetWithdrawalHistoryResponse
 * @description Response for getting withdrawal history
 */
export interface GetWithdrawalHistoryResponse {
  data: WithdrawalHistory[];
  pagination: Pagination;
}

/**
 * @interface UpdateDepositAddressParams
 * @description Parameters for updating a deposit address
 * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/update-deposit-address
 */
export interface UpdateDepositAddressParams {
  /**
   * @property {string} ccy - Currency name
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} network - Public chain name
   * @example "TRC20"
   */
  network: string;
}

/**
 * @interface WithdrawalParams
 * @description Parameters for making a withdrawal
 * @see https://docs.coinex.com/api/v2/assets/deposit-withdrawal/http/withdrawal
 */
export interface WithdrawalParams {
  /**
   * @property {string} ccy - Currency name
   * @example "USDT"
   */
  ccy: string;
  /**
   * @property {string} network - Public chain name
   * @example "TRC20"
   */
  network: string;
  /**
   * @property {string} address - Withdrawal address
   * @example "0x1234567890123456789012345678901234567890"
   */
  address: string;
  /**
   * @property {string} amount - Withdrawal amount
   * @example "100"
   */
  amount: string;
  /**
   * @property {string} [memo] - Memo/Tag
   * @example "12345"
   */
  memo?: string;
}
