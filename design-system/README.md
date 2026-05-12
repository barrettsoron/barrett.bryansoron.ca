# Barrett Soron Design System

> Notes, essays, and working documents on durable political infrastructure and technology held to human terms.

This is the design system for **barrett.bryansoron.ca** — Barrett Bryan-Soron's personal site. The site is a static Astro build, dark-mode native, deliberately editorial and text-first. This system codifies that visual identity so it can be carried out of the website into MARP slide decks, PDFs, DOCX templates, talk slides, and other one-off artifacts without the brand drifting.

The site author's words for the project: durable political infrastructure, eco-socialist movement and party work in Canada, *craft, technology, and the harder work the left has to do now.* Voice and values come first; this system is the visual extension of those.

---

## Sources used to build this

| Source | Path / URL | What I read |
| --- | --- | --- |
| Personal site repo | [github.com/barrettsoron/barrett.bryansoron.ca](https://github.com/barrettsoron/barrett.bryansoron.ca) | `README.md`, `AGENTS.md`, `src/styles/global.css`, `src/content/essays/*.md`, `src/content/notes/*.md`, `src/pages/rss.xml.js`, `package.json`, `astro.config.mjs` |
| Live site (production) | [barrett.bryansoron.ca](https://barrett.bryansoron.ca) | Reference only — not screenshot-scraped. |
| Frondline icon | `public/frondline-icon.svg` in the repo | Brand mark — fiddlehead/fern. |

The full upstream stylesheet is preserved at `reference/global.css` for cross-checking.

---

## At a glance

- **Surface:** dark-mode native. Near-black page (`#0b0b0d`), a slightly lifted surface (`#121216`) for code and form chrome. No light-mode variant.
- **Accent:** Viridian green (`#10b981`) — a single, committed accent (decision logged 2026-04-21). Used for the site mark, focus rings, link hovers, the `§` folio glyph, and on-essay selection highlights. Sparingly.
- **Type:** Three typefaces, each chosen on principle.
  - **BC Sans** for chrome, navigation, and headings — the Government of British Columbia's open-licensed sans, deliberately picked for full Canadian Indigenous-language Unicode support.
  - **Noto Serif** for essay running text — Google's Noto project, SIL OFL, "no tofu", script-complete.
  - **Noto Sans Mono** for code, datestamps, post-meta, and the colophon labels — same Noto family, tabular numerals on.
- **Column:** A single 36rem editorial measure. The site never goes "wide."
- **Motifs:** hanging dates on wide viewports; `§` as a section break; muted uppercase eyebrows with letter-spaced tracking; a horizontal-rule "callout" framed top-and-bottom in accent-dim; admonitions as a coloured top-rule with a mono uppercase label — *chapter opener*, not "warning box."
- **What it isn't:** no gradients, no rounded "card" surfaces, no drop-shadows, no large illustrations on the home page, no emoji as iconography, no animation beyond a 150ms color transition.

---

## Index — what's in this folder

| File / folder | What it is |
| --- | --- |
| `README.md` | This document. Brand foundations + manifest. |
| `colors_and_type.css` | The CSS variables + semantic element styles. Drop-in. |
| `SKILL.md` | Agent-Skill front matter so this system can run as a Claude Code skill. |
| `fonts/` | Self-hosted webfonts (BC Sans, Noto Serif, Noto Sans Mono) — `.woff2`. |
| `assets/` | Logos, favicons, OG card, essay header art. |
| `assets/essay-art/` | The three monochrome essay illustrations (`drift`, `ladder`, `stack`). |
| `reference/global.css` | The unmodified upstream stylesheet, kept for cross-checking. |
| `preview/` | HTML cards rendered into the Design System tab. |
| `formats/` | Format stylesheets: `story-format.css` (9:16 vertical), `slide-deck.css` (16:9), `light-variant.css` (light-token override for docs). |
| `examples/` | Sample documents: `story-sample.html` (vertical story), `slide-deck-sample.html` (16:9 deck). |
| `_lib/deck-stage.js` | Slide-deck shell web component, used by both formats. |
| `ui_kits/site/` | UI kit recreating the marketing site — homepage, essay, note, list. |

---

## Content fundamentals

The voice carries the brand more than the visuals do. Get the voice wrong and the site stops being itself.

### Tone

- **Plainspoken, declarative, deliberately unhurried.** Sentences land. The narrator is comfortable saying *I don't know yet* and showing reasoning out loud. Both sides of a tradeoff get a fair hearing before the call.
  - *"Both things are true: Proton's model is more private, and Fastmail's is more workable. I picked one."*
- **First-person singular** for personal pieces, **first-person plural** ("we", "us") for collective political work. Never breezy startup-"we". The "you" of instructional pieces is direct but never patronising.
- **Opinionated, but earns it.** A take is allowed if the post does the work — surveys the alternatives, names what they're giving up, and commits.
- **Anti-spectacle.** The writing is suspicious of urgency, of the spear-shape, of definitive takes, of *winning*. From the Le Guin note: *"Most writing worth doing is bag-shaped. You gather things. You carry them home."*
- **Place-grounded.** Vancouver, BC, Canada. Land acknowledgement in the footer is structural, not decorative.

### Casing & punctuation

- **Sentence case** for headings and titles. *"A quieter internet"*, not *"A Quieter Internet"*.
- **Em-dash** used freely as the workhorse pause — surrounded by spaces is *not* the house style; tight em-dashes (no spaces) are.
- **Commit-message style:** `<type>: <subject>`, lowercase, no period. Types in the log: `seo`, `fix`, `feat`, `style`, `chore`.
- **Numbers:** spelled out under ten in prose; numerals in tables, datestamps, version numbers.
- **Datestamps:** ISO-style `2026-04-21` is the canonical form in front-matter and changelogs. Long-form *"April 2026"* is fine in body copy.

### What's never on the page

- 🚫 **Emoji** — none. Anywhere. Not in headings, not in lists, not as iconography. The frondline mark and the `§` glyph are what we have.
- 🚫 **Marketing exclamation marks.** Periods end sentences.
- 🚫 **Bluish-purple gradients, "AI-magic" sparkles, glassmorphism.** Belongs to a different internet.
- 🚫 **"Drop a comment", "Stay tuned", "Game-changer", "Unlock", "Empower".** No.
- 🚫 **"Click here."** Link the verb.

### Example specimens (verbatim, from the live site)

> *"Notes, essays, and working documents on durable political infrastructure and technology held to human terms."*
> — site description

> *"Self-hosting is the less glamorous answer and almost always the right one."*
> — `self-hosting-fonts`

> *"Using it is a small, place-based commitment to legible Indigenous-language typography as a default, not an afterthought."*
> — on the choice of BC Sans

> *"A book holds words. Words hold things. They bear meanings."*
> — quoting Le Guin

---

## Visual foundations

The aesthetic is a working colophon: a notebook printed at low ink, with one warm signal colour reserved for the things that actually matter.

### Surface & colour

- **Dark, not black.** Page is `#0b0b0d` — a near-black with a faint warm tilt, so it doesn't read as a terminal. Surface (`#121216`) is one notch lifted; the gap is small and deliberate.
- **Three foreground steps:** `--text` (`#ededed`) for body, `--muted` (`#8a8a92`) for meta and rest-state nav, `--accent` (`#10b981`) for the one warm thing on the page.
- **The accent is a budget, not a palette.** Site mark in header, focus ring, link-on-hover, `§` glyph, ordered-list markers, `mark` highlight, selection background, the TOC top rule, the form submit button. That's the list.
- **No semantic colour expansion.** There is no `--success`, `--danger`, `--warning`. The admonition pattern uses three muted hues (`#5a8bd6` note, `#6aab6a` tip, `--accent` caveat) but only as a 2px top rule and a small label — the body of an admonition is not tinted.
- **Imagery vibe:** the essay illustrations (`drift`, `ladder`, `stack`) are monochrome line drawings in a single muted teal-green on transparent ground. No photography on the site. If real photography ever lands, it should be cool, slightly desaturated, and never full-bleed across the column.

### Type

- **BC Sans** is the chrome. Used for h1–h4, navigation, footer, post lists, admonition body, the subscribe form. Tightened tracking (`-0.025em` on h1) keeps headings looking *set*, not *typed*.
- **Noto Serif** is the essay body — and only the essay body. It's switched in by `.essay-body` on the article wrapper; headings inside an essay still run BC Sans. Italic Noto Serif carries blockquotes and the centred callout.
- **Noto Sans Mono** is for code, `kbd`, the `time` element, post-meta line, admonition labels, TOC label, and the footer copyright line. Tabular numerals are enabled (`font-feature-settings: "tnum" 1`) so dates and version numbers don't shift.
- **Eyebrow pattern:** uppercase, mono, `0.18em` tracking, ~12px. Used on admonition labels and the colophon TOC label. Never used as a *headline* — only as a quiet "you are here."

### Spacing & layout

- One column, `--measure: 36rem` (~576px). The body has no max width above that — *the site never goes wide.*
- Generous vertical rhythm: 3rem top padding, 6rem bottom; headings get 2.75rem above and 1rem below. The whitespace is the design.
- On viewports ≥ 1000px, the **post list dates hang in the left margin** instead of sitting inline. Same trick at ≥ 1100px for the editorial TOC label. This is the only "responsive" idea — wide screens earn one quiet flourish, nothing else changes.

### Backgrounds, textures, gradients

- **No gradients.** Not on backgrounds, not on buttons, not on accents.
- **No textures or noise overlays.**
- **No hero imagery.** Essays carry a single small illustration only when the writing earns it.
- **Full-bleed:** never. The column is the container.

### Borders, rules, radii

- **Hairline borders** (1px, `--border #24242a`) on tables, footer divider, code blocks, subscribe form.
- **Accent-dim rule** for the TOC, the callout (top & bottom), and the blockquote left-rule (2px).
- **Radii are tiny:** `2px` for skip-link / focus highlight, `3px` for inline code, `4px` for `pre` and the subscribe form. Nothing in the system is "pill-shaped" or "soft."

### Shadows, transparency, blur

- **No shadows.** Anywhere. Surfaces are distinguished by colour offset alone.
- **No `backdrop-filter`, no glass, no translucency on chrome.**
- The only translucent thing is the natural opacity of a focus ring against the page.

### Hover, focus, press

- **Hover:** muted nav → text colour, link underline goes from `accent-dim` → `accent` + text goes accent. 150ms `ease` transitions on `color` and `text-decoration-color`, nothing else.
- **Focus:** `2px solid accent` outline at `3px` offset, `2px` radius. Browser defaults are explicitly overridden so the focus ring is *more* visible than usual, not less.
- **Press / active:** the design doesn't have a custom press state. Native browser opacity flash is fine. The "submit" button on the subscribe form swaps to `accent-dim` on hover — that's the closest thing to a press affordance.
- **Skip link** translates in from off-screen on focus — the one keyframed motion in the system.

### Cards (or rather, the absence of them)

- There are no cards. Surfaces are flat, separated by space and a hairline.
- The **callout** is the closest thing to a "card" and it's just two horizontal rules (top + bottom, accent-dim) wrapped around an italic serif line. No background fill, no border.
- The **admonition** is similarly chassis-less: a 2px coloured top rule, a tiny mono uppercase label, then prose. *Chapter opener*, not container.

### Folio marks & editorial details

- The `§` glyph (Noto Serif, accent colour, 0.5em letter-spacing) is the section-break `<hr>`. This is the single most recognisable detail of the visual system.
- The colophon TOC at the top of essays uses a mono uppercase label, a thin accent-dim rule, and indented sub-items with a 0.75rem horizontal tick on the left margin.

### Motion

- One transition: `color` + `text-decoration-color`, 150ms `ease`, on links and nav.
- Skip-link `transform: translateY(-200%) → 0` on focus.
- Everything else is static. `prefers-reduced-motion` clamps to `0.01ms`.

### Print

- The site has real print styles. White paper, 12pt black-on-white, header nav / footer / skip link / TOC all `display: none`, links underlined, the `§` glyph stays — just in black. Anything we make for this brand should print to that aesthetic.

---

## Iconography

Iconography is *barely a category* on this brand. That is the position, and any agent working in this system should honour it.

- **No icon font.** No Heroicons. No Lucide. No Material Symbols.
- **No inline SVG iconography for UI.** Buttons say their verb in words. Nav says its destination in words.
- **No emoji** anywhere on the surface. (Emoji *are* sometimes acceptable in social copy off the site — see Bluesky — but they never appear on barrett.bryansoron.ca itself.)
- **Unicode as glyph, used twice:**
  - **`§`** — the section-break folio. Set in Noto Serif, accent colour, generous letter-spacing.
  - **·** — the middle-dot separator in the footer contact line. Set in BC Sans, muted.

### Brand mark — `frondline-icon.svg` *(provisional)*

The current brand mark is the **frondline** — a stylised fiddlehead/fern spiral. **Treat it as a placeholder, not a settled identity.** It does the job of a favicon today, but the real mark is unresolved and likely to change. Don't anchor any new design to it, don't carve out a generous frame for it, don't introduce a "frondline + wordmark" lockup as a permanent pattern. Use it for:

- favicon / browser tab
- a small mark in the header of a printed PDF
- the cover of a slide deck (top-left, ~32px, accent colour)

It is **not** a logotype, and it should not be treated as one until a final mark is committed. The site mark in the header is plain text — `barrett` set in BC Sans bold, accent green — and that wordmark is the more stable half of the identity right now. Treat the wordmark and the frondline as alternatives, not a pair.

### Essay illustrations

Three custom monochrome SVGs live in `assets/essay-art/`:

- `drift.svg`
- `ladder.svg`
- `stack.svg`

These are essay-specific header art — line drawings in a single muted teal-green, no fill. If you make a new essay-themed slide or PDF and need an opener illustration, **reach for one of these** before drawing a new one. Their visual language (line-only, single-hue, transparent ground, ~600px wide square-ish canvas) is the template; don't introduce a new style.

### If you genuinely need a UI icon

You almost certainly don't — but if a slide deck or PDF template requires one (e.g. a phone glyph next to a contact line), use **Lucide** at `1.5px` stroke, `currentColor`, sized to match the surrounding cap-height. Flag the substitution to the user. The upstream site has no precedent for this, so any introduction is an extension, not a continuation.

---

## License

- Code (this design system, the `.css`, the JSX): MIT.
- Writing samples reproduced for tone reference: CC BY-SA 4.0, original author.
- BC Sans: OGL-BC 2.0.
- Noto Serif / Noto Sans Mono: SIL OFL 1.1.
