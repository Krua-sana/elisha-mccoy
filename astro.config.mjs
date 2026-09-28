// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // site: 'https://www.elishamccoy.com',
  site: 'https://krua-sana.github.io',
  //base: import.meta.env.PROD ? '/elisha-mccoy/' : '/',
  base: '/elisha-mccoy/',
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
});