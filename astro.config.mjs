// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/remark-reading-time.mjs';
import icon from "astro-icon";

import solidJs from '@astrojs/solid-js';

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs({ devtools: true }), purgecss(
    { 
      keyframes: false, 
      safelist: { greedy: [ /*astro*/ ] }
  }), icon()],
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true
    }
  },
  redirects: {
      "/en/estate/*":"/en/estate/"
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});