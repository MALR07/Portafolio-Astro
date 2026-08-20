// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
	adapter: netlify({}),
	site: 'https://portafoliomalr.netlify.app', // <- tu dominio de Netlify o temporal
	integrations: [mdx(), sitemap()],
	devToolbar: {
		enabled: false
	},
});
