---
name: barrett-soron-design
description: Use this skill to generate well-branded interfaces and assets for barrett.bryansoron.ca (Barrett Bryan-Soron's personal site), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and a UI kit recreating the live site for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Tone before visuals.** The voice is plainspoken, declarative, anti-spectacle, place-grounded in Vancouver/BC. Sentence case headings. Em-dashes. No emoji. Read the "Content fundamentals" section of `README.md` before writing copy.
- **Dark-mode native.** `#0b0b0d` page, `#121216` surface, single Viridian accent `#10b981`. There is no light mode.
- **Three typefaces, all self-hosted in `fonts/`:** BC Sans (chrome + headings), Noto Serif (essay body only, via `.essay-body`), Noto Sans Mono (code, dates, post-meta, eyebrow labels).
- **Drop-in CSS:** link `colors_and_type.css` — it ships both the token layer (`--bg`, `--accent`, `--font-serif`, etc.) and the semantic element styles.
- **One column, 36rem measure, no gradients, no shadows, no rounded soft cards.**
- **The two recurring marks:** `§` (Noto Serif, accent, letter-spaced 0.5em) as the section break; the **frondline** SVG (`assets/frondline-icon.svg`) as the brand icon.
- **No iconography system.** If a deliverable genuinely needs UI icons, use Lucide at 1.5px stroke, `currentColor`, and flag the substitution.

## What's in this folder

- `README.md` — full brand book: content fundamentals, visual foundations, iconography, source attributions.
- `colors_and_type.css` — token + semantic styles. Drop into any artifact.
- `fonts/` — self-hosted `.woff2` files.
- `assets/` — brand mark, favicons, OG card, essay header art.
- `reference/global.css` — unmodified upstream stylesheet, for cross-checking.
- `preview/` — small HTML specimen cards (colors, type scale, components).
- `ui_kits/site/` — React UI kit recreating the live site. Read `ui_kits/site/README.md` for the routes.

## Compatibility

This design system is dual-purpose: it lives as a Claude project, and the same folder works as an [Agent Skill](https://github.com/anthropics/skills) — drop it into `.claude/skills/barrett-soron-design/` of a Claude Code workspace and it can be invoked there too.
