// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://barrett.bryansoron.ca',
	output: 'static',
	integrations: [
		sitemap({
			filter: (page) => !page.includes('/styleguide'),
		}),
	],
	build: {
		inlineStylesheets: 'never',
	},
	// Dev-only: allow previewing the dev server over Tailscale (`tailscale serve` -> *.ts.net).
	// Ignored by the static production build.
	vite: {
		server: {
			allowedHosts: ['.taile3e3d4.ts.net'],
		},
	},
	redirects: {
		'/notes/accelerators-not-planners': '/notes/vibe-governing-comes-for-your-sidewalk',
		'/essays/the-word-for-survival': '/essays/survival-is-affordable',
	},
});
