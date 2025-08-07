import { configDotenv } from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

configDotenv({ path: '../../.env' });

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {},
  test: {
    environment: 'node',
    testTimeout: 120_000,
    hookTimeout: 240_000,
    globals: true,
  },
});
