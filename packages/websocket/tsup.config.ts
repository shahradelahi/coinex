import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  dts: true,
  clean: !options.watch,
  splitting: true,
  minify: true,
  keepNames: true,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  target: 'esnext',
  outDir: 'dist',
}));
