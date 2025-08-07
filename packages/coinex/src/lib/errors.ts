/**
 * @class CoinExAPIError
 * @extends Error
 * @description Custom error class for CoinEx API errors.
 */
export class CoinExAPIError extends Error {
  /**
   * @property {number} code - The error code from the CoinEx API.
   */
  public readonly code: number;

  /**
   * @constructor
   * @param {number} code - The error code.
   * @param {string} message - The error message.
   */
  constructor(code: number, message: string) {
    super(message);
    this.name = 'CoinExAPIError';
    this.code = code;
  }
}
