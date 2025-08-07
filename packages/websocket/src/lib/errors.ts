/**
 * @class CoinExWebSocketError
 * @extends Error
 * @description Custom error class for CoinEx WebSocket API errors.
 */
export class CoinExWebSocketError extends Error {
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
    this.name = 'CoinExWebSocketError';
    this.code = code;
  }
}
