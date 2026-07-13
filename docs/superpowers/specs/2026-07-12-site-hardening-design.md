# Site hardening — security audit, CI/CD, and site improvements

**Date:** 2026-07-12
**Status:** Draft — pending review
**Scope:** Functionality, security, and SEO only. No content changes.

## Context

barrett.bryansoron.ca is a static Astro site deployed to GitHub Pages on every
push to main. An adversarial security pass (2026-07-12, against origin/main at
`c6ee693`) found no high-severity issues but a cluster of low/informational
gaps. This design covers fixing them plus CI/CD and SEO improvements.

## Decisions already made

- **Hosting:** GitHub Pages stays. Consequence: no custom response headers —
  no HSTS, no `X-Frame-Options`, and CSP only via `<meta http-equiv>` (which
  cannot express `frame-ancestors` or reporting). These are accepted risks.
- **Main branch:** ruleset requiring a PR and a green build check; admin
  bypass remains possible but deliberate.
- **Dependencies:** Dependabot alerts + security updates on; routine updates
  as one grouped PR per ecosystem, monthly.
- **Analytics:** keep GoatCounter, self-host `count.js`.
- **Approach:** lean hardening plus a monthly link checker. No CodeQL,
  gitleaks, or Lighthouse CI.

## Deliverable 1 — Security audit report

A standalone report at `docs/superpowers/audits/2026-07-12-security-audit.md`
recording each finding with severity, evidence, exploitability, and
disposition (fixed by this design / accepted). Findings:

| # | Severity | Finding | Disposition |
|---|----------|---------|-------------|
| 1 | Low | `src/components/JsonLd.astro:8` — `JSON.stringify` output injected via `set:html`; `</script>` in frontmatter would escape the script context | Fix (§2.1) |
| 2 | Low | No branch protection/ruleset on main; deploy runs on any push, so a compromised token publishes instantly | Fix (§3.2) |
| 3 | Low | Dependabot vulnerability alerts disabled; no automated updates for npm or Actions | Fix (§3.4) |
| 4 | Low | All workflow actions pinned by mutable tag, including third-party `dorny/paths-filter` — tag rewrite = arbitrary code in CI | Fix (§3.3) |
| 5 | Low | Both `package-lock.json` and `pnpm-lock.yaml` tracked; ambiguous which lockfile CI resolves against | Fix (§3.3) |
| 6 | Info | No CSP, X-Frame-Options, Referrer-Policy, or HSTS response headers (GitHub Pages limitation) | Partial fix via meta CSP (§2.3); rest accepted |
| 7 | Info | GoatCounter `count.js` loaded from `gc.zgo.at` with no integrity control, via protocol-relative URL | Fix (§2.2) |
| 8 | Info | `/styleguide/` ships to prod and appears in the sitemap while robots.txt disallows it — contradictory crawler signals | Fix (§4.1); page itself stays live (accepted) |
| 9 | Info | No PR build gate; a broken merge deploys directly | Fix (§3.1) |

Clean checks to record: HTTPS enforced on Pages; no secret-shaped files in
full git history; `.env` untracked and ignored; static essay HTML in
`public/essays/` loads zero external resources; workflow permissions already
least-privilege; no `pull_request_target` use; local main in sync with
origin.

## Deliverable 2 — Implementation

### 2. Site changes

**2.1 JSON-LD escaping.** In `JsonLd.astro`, replace the raw
`JSON.stringify(data)` with `JSON.stringify(data).replace(/</g, '\\u003c')`
(standard JSON-LD hardening; the JSON stays valid, `</script>` becomes
inert). Closes finding 1.

**2.2 Self-hosted GoatCounter.** Vendor the current `gc.zgo.at/count.js`
into `public/js/count.js`. Update `Base.astro` to load it from `/js/count.js`
(same `data-goatcounter` endpoint, HTTPS URL, still prod-only). Counting
still reports to `barrettbryansoron.goatcounter.com`. The vendored file is
stable upstream; refresh it opportunistically. Closes finding 7.

**2.3 Meta-tag CSP.** Add to `Base.astro` `<head>`:

```
default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:;
connect-src 'self' https://barrettbryansoron.goatcounter.com;
font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self' https://buttondown.com
```

Notes: JSON-LD blocks are non-executable, so `script-src 'self'` does not
block them. GoatCounter submits counts via request to its endpoint — covered
by `connect-src`/`img-src` (verify which path count.js uses and allow only
that). `frame-ancestors` is not expressible in meta CSP — accepted. Astro's
default `build.inlineStylesheets: 'auto'` inlines small stylesheets, which
`style-src 'self'` would block — set `inlineStylesheets: 'never'` in
`astro.config.mjs` (one extra small CSS request; irrelevant at this size).
The CSP must be verified against every page type (essay, note, styleguide,
404) before merge, in dev tools with no violations. Runtime verification found the newsletter form posts to buttondown.com, so form-action additionally allows that origin.

**2.4 404 page.** Add `src/pages/404.astro` using the Base layout — short
message plus links home/essays/notes. Astro emits `404.html`, which GitHub
Pages serves automatically.

**2.5 security.txt.** Add `public/.well-known/security.txt` (RFC 9116):
contact `mailto:barrett@bryansoron.ca`, expiry ~1 year out, canonical URL.
A vulnerability reporter's front door; near-zero cost.

**2.6 Bluesky domain handle.** Add `public/.well-known/atproto-did`
containing Barrett's Bluesky DID (plain text, single line, e.g.
`did:plc:…`), making `@barrett.bryansoron.ca` usable as the Bluesky handle.
Input needed at implementation time: the DID from Bluesky Settings → Handle →
"I have my own domain". After deploy, the handle change is confirmed from
within the Bluesky app; the old `.bsky.social` handle keeps working as an
alias.

### 3. CI/CD changes

**3.1 PR build check.** New `.github/workflows/ci.yml` on `pull_request`:
checkout → pnpm setup → `pnpm install --frozen-lockfile` → `astro check` →
`astro build`. Single job named `build`. Adds `@astrojs/check` and
`typescript` as devDependencies. Closes finding 9.

**3.2 Ruleset on main.** GitHub ruleset: require pull request before merging,
require the `build` status check, block force pushes and branch deletion.
Add the Repository admin role as a bypass actor so an urgent fix can be
pushed deliberately (rulesets allow no bypass at all unless the actor is
listed). Closes finding 2.

**3.3 Supply-chain hygiene.** SHA-pin every action in all workflows
(`deploy.yml`, `visual-review-flag.yml`, new `ci.yml`, `link-check.yml`) with
the version tag as a trailing comment. Delete `package-lock.json`. Closes
findings 4 and 5.

**3.4 Dependabot.** `.github/dependabot.yml`: ecosystems `npm` and
`github-actions`, monthly schedule, one grouped PR each. Enable repository
vulnerability alerts and Dependabot security updates (security PRs arrive
immediately, independent of the monthly cadence). Dependabot maintains the
SHA pins from 3.3. Closes finding 3.

**3.5 Link checker.** `.github/workflows/link-check.yml`: monthly cron +
`workflow_dispatch`. Builds the site, runs lychee against the built HTML
(internal + external links), and opens or updates a single tracking issue on
failure. Never blocks PRs or deploys.

### 4. SEO changes

**4.1 Sitemap filter.** Configure `sitemap({ filter })` in `astro.config.mjs`
to exclude `/styleguide/`. robots.txt disallow stays. Closes finding 8.

**4.2 og:locale.** Add `<meta property="og:locale" content="en_CA" />` to
`Base.astro`.

**4.3 404 page** (2.4) also removes soft-404 noise for crawlers hitting
dead URLs.

Already in good shape (no action): canonical URLs, structured data, RSS,
robots.txt sitemap pointer, redirects for renamed posts, OG/Twitter cards.

## Error handling & verification

- `astro check` + `astro build` green locally before the PR; CI repeats both.
- CSP verified manually on `pnpm preview` across page types — zero console
  violations; GoatCounter count confirmed received in its dashboard after
  deploy.
- Ruleset verified by attempting a direct push to main (should be rejected)
  and merging a test-passing PR.
- Link checker run once via `workflow_dispatch` to confirm it passes on the
  current site.
- Rollback: every change is a normal PR; revert the PR to roll back. The
  ruleset can be disabled in settings if it ever wedges an urgent fix.

## Sequencing

1. Repo hygiene PR: lockfile removal, Dependabot config, SHA pins, ci.yml.
2. Enable alerts/security updates + create ruleset (settings, not code).
3. Site PR: JsonLd fix, self-hosted count.js, CSP, 404, security.txt,
   atproto-did (Bluesky handle), sitemap filter, og:locale.
4. Link-checker PR.
5. Audit report PR (can ride with #1).

## Out of scope

- Content changes of any kind.
- Moving hosts or fronting with a CDN (HSTS/frame-ancestors stay unfixable).
- CodeQL, gitleaks, Lighthouse CI, signed commits.
- Analytics changes beyond self-hosting the existing GoatCounter script.
