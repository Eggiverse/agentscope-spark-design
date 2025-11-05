import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src/',
      '@dumi': '/.dumi',
      '@demos': '/src/demos',
      '@agentscope-ai/design': '/src/index.ts',
      rrweb: '/node_modules/rrweb/es/rrweb/packages/rrweb/src/entries/all.js',
    },
  },
  test: {
    environment: 'jsdom',
    // include: ['*/__tests__/**/*.test.tsx'],
    reporters: ['default', 'html', 'json'],
    outputFile: {
      html: '.unit_test_reporter/index.html',
      json: '.unit_test_reporter/index.json',
    },
    coverage: {
      include: ['src/**'],
      exclude: [
        '**/demos/**',
        '**/demo/**',
        '**/__tests__/**',
        '**/__test__/**',
        '**/commonComponents/**',
        '**/BLVideoPlayer/**',
        '**/rrwebRecord/**',
        '**/BLSlateEditor/**',
      ],
      provider: 'istanbul',
      reportsDirectory: './.ci',
      reporter: ['text', 'json', 'json-summary'],
    },
    pool: 'vmThreads',
    setupFiles: ['./scripts/mockMatchMedia.ts'],
  },
});
