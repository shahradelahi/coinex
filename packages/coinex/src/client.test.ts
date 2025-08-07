import { describe, expect, it } from 'vitest';

import { CoinExClient } from '@/client';

describe('CoinExClient', () => {
  const client = new CoinExClient({
    apiKey: 'placeholder_api_key',
    secretKey: 'placeholder_secret_key',
  });

  it('should ping the server successfully', async () => {
    const response = await client.ping();
    expect(response).toEqual({ result: 'pong' });
  });

  it('should get system time successfully', async () => {
    const response = await client.getSystemTime();
    expect(typeof response.timestamp).toBe('number');
    expect(response.timestamp).toBeGreaterThan(0);
  });
});
