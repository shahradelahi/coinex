import { createHmac } from 'node:crypto';

/**
 * Generates an HMAC-SHA256 signature for a CoinEx WebSocket authentication request.
 * @param timestamp - The millisecond-level timestamp.
 * @param secretKey - The user's secret key.
 * @returns The lowercase hexadecimal signature.
 * @see https://docs.coinex.com/api/v2/authorization
 */
export function signWebSocketRequest(timestamp: number, secretKey: string): string {
  // prepared_str = "1700490703564"
  // signed_str = hmac.new(bytes(secret_key, 'latin-1'), msg=bytes(prepared_str, 'latin-1'), digestmod=hashlib.sha256).hexdigest().lower()
  const preparedStr = String(timestamp);
  const hmac = createHmac('sha256', secretKey);
  hmac.update(preparedStr);
  return hmac.digest('hex').toLowerCase();
}
