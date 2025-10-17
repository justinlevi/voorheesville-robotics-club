// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://justinlevi.github.io',
  base: '/voorheesville-robotics-club',
  vite: {
    plugins: [tailwindcss()]
  }
});