import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  dts: true,
  clean: !options.watch,
  splitting: true,
  sourcemap: true,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  target: 'esnext',
  outDir: 'dist',
}));
