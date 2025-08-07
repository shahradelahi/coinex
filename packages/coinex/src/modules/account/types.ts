export type * from './fees/types';
export type * from './settings/types';
export type * from './subaccount/types';

/**
 * @interface GetAccountInfoResponse
 * @description Contains the response data for a user account information request.
 * @see https://docs.coinex.com/api/v2/account/info/http/get-account-info
 */
export interface GetAccountInfoResponse {
  /**
   * @property {string} user_id - User ID.
   */
  user_id: string;
}
