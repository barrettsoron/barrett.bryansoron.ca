# Agent notes

Project conventions for AI assistants (and useful for any contributor).

## No PR preview environment

This project deploys to GitHub Pages on push to `main` (see `.github/workflows/deploy.yml`). There is no per-PR preview deployment. The local dev server (`pnpm dev`) is the only way to see rendered changes before they ship, and it is loopback-only.

That means changes whose effect can only be judged by *seeing the rendered page* should be committed on a branch and previewed locally before merging. They should not be merged without a desktop preview pass.

**Before editing any of the visual-sensitive paths below, say in chat first:**

> This is a visual change. I'll commit it on the branch — preview locally before merging.

Then proceed with the edit.

### Visual-sensitive paths (need local preview before merging)

- `src/styles/**` — CSS
- `src/layouts/**` — page structure
- `src/components/**` — any rendered component
- `src/pages/**/*.astro` — page templates and structural pages
- `astro.config.mjs` — image config, integrations, redirects, `site`/`trailingSlash`
- `public/**` — fonts, images, OG cards, favicons, `robots.txt`

### Low-risk paths (the diff is sufficient review)

- `src/content/essays/**/*.md` — essay prose
- `src/content/notes/**/*.md` — note prose
- `README.md`, `LICENSE`
- Dependency bumps in `package.json` and lockfiles
- `.github/workflows/**` — review via the Actions tab after merge

### Automation

`.github/workflows/visual-review-flag.yml` runs on every PR. When the diff touches visual-sensitive paths, it auto-applies the `needs-visual-review` label and posts a sticky checklist comment. It is **non-blocking** — it surfaces the question at merge time but does not gate the merge. The label is auto-removed if all visual changes get reverted on the PR.

## Other conventions

- **Commit message style:** `<type>: <subject>` lowercase, no period. Existing types in the log include `seo`, `fix`, `feat`, `style`, `chore`.
- **Package manager:** pnpm 10.29.3 (pinned in `package.json`). Node ≥ 22.12. Do not use npm.
- **Drafts:** `import.meta.env.PROD` filters drafts out of production builds — see `src/pages/index.astro`. Drafts are visible in `pnpm dev` only.
- **Site config:** `site: 'https://barrett.bryansoron.ca'` is set in `astro.config.mjs` and is required for `@astrojs/sitemap` and canonical URLs.
