/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import * as fs from "fs";

const content = fs.readdirSync('./src/content/evenements');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [analog({
    prerender: {
      routes: [
        '/evenements',
        '/a-propos',
        '/code-de-conduite',
        ...content.map((file) => `/evenements/${file.replace('.md', '')}`)
      ],
      sitemap: {
        host: 'https://angulardevs.fr/',
      },
    },
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
