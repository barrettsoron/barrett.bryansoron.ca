# Using MARP with this design system

MARP — the **Marp**it Markdown Presentation framework — compiles Markdown
to HTML/PDF/PPTX slide decks. This design system ships a MARP theme that
matches the hand-rolled HTML deck format, so you can author decks the same
way you author essays (Markdown with front-matter), and the output looks
the same as the HTML-native version.

## What lives where

| File | What it is |
| --- | --- |
| `formats/slide-deck.css` | The CSS for HTML-native decks (deck-stage.js). |
| `formats/slide-deck.marp.css` | The MARP theme. Mirrors `slide-deck.css` rule-for-rule. |
| `examples/humane-technology.md` | Sample MARP source. Five slides, three layouts. |
| `examples/slide-deck-sample.html` | The same deck, hand-rolled as HTML. |

Pick the path that fits the moment.

## Choosing between MARP and HTML-native

**Use MARP when:**
- The deck lives next to your essays in `src/content/` and you want Astro
  to build it as part of the site.
- You're writing in Markdown anyway and don't need component-level layout
  control.
- You want a one-shot PDF or PPTX export from the CLI.

**Use HTML-native (deck-stage.js) when:**
- You want to embed a deck inline in an essay (see `examples/essay-with-embeds.html`).
- You need behaviour beyond what MARP exposes — custom transitions,
  interactive elements, deep-link slide URLs.
- The deck *is* the page — a published URL, not a downloaded artifact.

The CSS class names (`.is-title` / `.is-prose` / `.is-compare`) are the
contract between the two systems. Author once mentally; render twice.

## Authoring a MARP deck

```bash
# install once
npm install -g @marp-team/marp-cli

# preview
marp --watch --theme formats/slide-deck.marp.css examples/humane-technology.md

# export PDF
marp --pdf --theme formats/slide-deck.marp.css examples/humane-technology.md

# export PPTX
marp --pptx --theme formats/slide-deck.marp.css examples/humane-technology.md

# export HTML (for inline embed)
marp --html --theme formats/slide-deck.marp.css examples/humane-technology.md
```

## MARP authoring conventions

The theme uses three layouts, switched per-slide with a class directive:

```markdown
<!-- _class: title -->
<!-- _class: prose -->     ← default; can be omitted
<!-- _class: compare -->
```

### The eyebrow pattern

MARP doesn't let you put arbitrary classes on Markdown-rendered elements,
so the small uppercase mono "eyebrow" line is written as inline HTML:

```markdown
<p class="eyebrow">The argument</p>

## The default shape of software is extractive.
```

This is the only "give" the Markdown source has to make. Everything else
is just Markdown — `##` for slide titles, `-` for bullets, `|` for tables,
`>` for pull-quotes.

### Comparison layout

For the two-column comparison, write inline HTML:

```markdown
<!-- _class: compare -->

<p class="eyebrow">Two models</p>

## Same feature. Different incentive.

<div class="cols">
<div class="col">
<p class="col-label">Ad-supported</p>

### Social feed

- Optimises time-on-app.
- Algorithmic feed.

</div>
<div class="col">
<p class="col-label">Paid</p>

### RSS reader

- Optimises read-then-leave.
- Chronological by default.

</div>
</div>
```

A blank line between the opening `<div>` and the Markdown content is
mandatory — without it, MARP treats the whole block as raw HTML and
won't parse the Markdown inside.

For tabular comparisons, just use a Markdown table; the theme styles
those automatically.

## Embedding the MARP HTML inline

`marp --html` produces a single self-contained HTML file. Drop it into
the iframe of an inline embed:

```html
<figure class="embed embed-deck">
  <div class="embed-frame">
    <iframe src="humane-technology.html"
            title="Deck — Humane technology"
            loading="lazy"></iframe>
    <a class="embed-action" href="humane-technology.html" target="_blank">
      open ↗
    </a>
  </div>
  <figcaption>
    <strong>Fig. 1</strong>
    Five slides. Built with MARP from <code>humane-technology.md</code>.
  </figcaption>
</figure>
```

The inline-embed CSS doesn't care which renderer made the HTML. Same
frame, same caption, same desktop bleed.

## Astro integration sketch

In `src/content.config.ts`, add a `decks` collection:

```ts
const decks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/decks" }),
  schema: z.object({ title: z.string(), date: z.date() }),
});
```

Run `marp` against each `.md` at build time, output to `public/decks/`,
then reference the resulting HTML from a regular Astro page.

Or — if you want pure Astro and no MARP CLI — use the hand-rolled HTML
format. Both are real choices.
