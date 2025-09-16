// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	adapter: netlify(),
	integrations: [mdx(), sitemap()],
	devToolbar: {
		enabled: false
	},
});
