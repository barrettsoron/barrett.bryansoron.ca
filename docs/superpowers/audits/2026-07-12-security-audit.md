# Security audit — barrett.bryansoron.ca

**Date:** 2026-07-12
**Auditor:** Adversarial pass by Claude (Fable 5), reviewed by Barrett
**Baseline:** origin/main @ c6ee693; live site at https://barrett.bryansoron.ca
**Scope:** Repository, GitHub Actions workflows, repo settings, deployed
response headers, client-side code, git history. Content excluded.

## Summary

No high- or medium-severity issues. Five low-severity findings (all
fixable in-repo or in settings) and four informational items, two of which
are inherent GitHub Pages limitations and are accepted. Remediation design:
`docs/superpowers/specs/2026-07-12-site-hardening-design.md`.

## Findings

### 1. JSON-LD script-context breakout (Low)

**Evidence:** `src/components/JsonLd.astro:8` — `set:html={JSON.stringify(data)}`.
`JSON.stringify` does not escape `</script>`. A frontmatter title or
description containing `</script><script>…` would close the JSON-LD data
block and open an executable script context.
**Exploitability:** Requires attacker-controlled frontmatter — i.e. a
malicious or compromised content PR. Author is the only committer today.
**Disposition:** Fixed — escape every `<` as the JSON unicode escape `\u003c` before injection.

### 2. Unprotected main branch, deploy on push (Low)

**Evidence:** `gh api repos/…/branches/main/protection` → 404 "Branch not
protected"; rulesets list empty; `deploy.yml` triggers on any push to main.
**Exploitability:** A leaked PAT or compromised device publishes to the
live site in one push, no review, no build gate.
**Disposition:** Fixed — ruleset requiring PR + green `build` check.

### 3. Dependabot disabled (Low)

**Evidence:** `gh api repos/…/vulnerability-alerts` → 404 (alerts off);
no `.github/dependabot.yml`.
**Exploitability:** Known-vulnerable dependency versions persist silently.
**Disposition:** Fixed — alerts + security updates enabled; monthly
grouped update PRs configured.

### 4. Actions pinned to mutable tags (Low)

**Evidence:** All `uses:` entries referenced tags (`@v6`, `@v3`, `@v7`),
including third-party `dorny/paths-filter`.
**Exploitability:** Tag rewrite in a compromised upstream repo executes
arbitrary code in this repo's CI (with `pull-requests: write` in one
workflow).
**Disposition:** Fixed — all actions pinned to full commit SHAs;
Dependabot keeps pins current.

### 5. Dual lockfiles (Low)

**Evidence:** Both `package-lock.json` and `pnpm-lock.yaml` tracked;
`packageManager` declares pnpm.
**Exploitability:** Indirect — ambiguity about the dependency tree that CI
actually resolves defeats lockfile review.
**Disposition:** Fixed — npm lockfile removed.

### 6. No security response headers (Info — partially accepted)

**Evidence:** `curl -I https://barrett.bryansoron.ca/` → no CSP,
X-Frame-Options, Referrer-Policy, or HSTS.
**Exploitability:** Low for a static no-auth site; primary residual risks
are clickjacking (no frame-ancestors) and first-visit TLS stripping (no
HSTS/preload).
**Disposition:** Partial — meta-tag CSP added (script/style/connect/img
restricted to self + GoatCounter endpoint). frame-ancestors and HSTS are
not expressible without response-header control; accepted while hosting
stays on GitHub Pages.

### 7. Third-party analytics script without integrity control (Info)

**Evidence:** `src/layouts/Base.astro:50` loaded
`//gc.zgo.at/count.js` (protocol-relative, third-party, no SRI).
**Exploitability:** Compromise of GoatCounter's CDN executes arbitrary JS
on every page view.
**Disposition:** Fixed — count.js vendored and served same-origin;
CSP restricts script execution to 'self'.

### 8. /styleguide crawler-signal contradiction (Info)

**Evidence:** `https://barrett.bryansoron.ca/sitemap-0.xml` lists
`/styleguide/` while `robots.txt` disallows it.
**Exploitability:** None — SEO hygiene only.
**Disposition:** Fixed in sitemap (filtered out); page intentionally
stays live and robots-disallowed.

### 9. No PR build gate (Info)

**Evidence:** No CI workflow ran builds on PRs; only the post-merge
deploy build existed.
**Exploitability:** None directly; broken merges deploy a broken site.
**Disposition:** Fixed — `ci.yml` build check, required by ruleset.

## Clean checks

- HTTPS enforced on GitHub Pages (`https_enforced: true`)
- No secret-shaped files anywhere in git history (full-history scan)
- `.env` untracked and gitignored
- Static essay HTML (`public/essays/*.html`) loads zero external resources
- Workflow permissions already least-privilege; no `pull_request_target`
- Local main in sync with origin at audit time
