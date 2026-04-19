import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://estructura.org',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
