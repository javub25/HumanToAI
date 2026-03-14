import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,            // allows describe/it/expect without imports
    environment: 'jsdom',     // needed for Angular component DOM testing
    coverage: {
      provider: 'v8',         // use the V8 coverage engine
      reporter: ['text', 'html'], // console summary + HTML report
      include: ['src/**/*.spec.ts'], // include these files in coverage
    },
  },
});