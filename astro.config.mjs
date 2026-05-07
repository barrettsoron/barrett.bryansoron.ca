// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://barrett.bryansoron.ca',
	output: 'static',
	integrations: [sitemap()],
	redirects: {
		'/notes/accelerators-not-planners': '/notes/vibe-governing-comes-for-your-sidewalk',
	},
});
