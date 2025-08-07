import { createHmac } from 'node:crypto';

/**
 * Generates an HMAC-SHA256 signature for a CoinEx API request.
 * @param method - The uppercase HTTP method (e.g., 'GET', 'POST').
 * @param path - The request path, including any query parameters.
 * @param body - The request body (for POST requests).
 * @param timestamp - The millisecond-level timestamp.
 * @param secretKey - The user's secret key.
 * @returns The lowercase hexadecimal signature.
 */
export function signRequest(
  method: string,
  path: string,
  body: string | undefined,
  timestamp: number,
  secretKey: string
): string {
  const preparedStr = `${method.toUpperCase()}${path}${body || ''}${timestamp}`;
  const hmac = createHmac('sha256', secretKey);
  hmac.update(preparedStr);
  return hmac.digest('hex').toLowerCase();
}
