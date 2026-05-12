# Site UI kit · barrett.bryansoron.ca

A click-through React recreation of the live site, built with babel-standalone so it opens straight from the filesystem.

## Components

| File | What's in it |
| --- | --- |
| `Components.jsx` | `SiteMark`, `Nav`, `Header`, `PostList`, `PostMeta`, `Folio`, `Admonition`, `Callout`, `TOC`, `SubscribeForm`, `Footer` |
| `Pages.jsx` | `HomePage`, `NotesIndex`, `EssaysIndex`, `AboutPage`, `NotePage`, `EssayPage` |
| `Content.jsx` | `NOTES`, `ESSAYS` — sample content (verbatim excerpts from the upstream repo for fidelity reference) |
| `index.html` | Hash-routed demo. Wires the components together and pulls in `colors_and_type.css`. |

## Routes

The demo uses `location.hash`:

- `#home` — landing page, latest notes + essays index
- `#notes` — notes index
- `#essays` — essays index
- `#about` — about + colophon
- `#note/<slug>` — single note (BC Sans body)
- `#essay/<slug>` — single essay (Noto Serif `.essay-body`, with TOC)

Try `#essay/field-notes-on-building-slowly` for the full editorial layout — TOC, admonitions, table, code block, callout, and the `§` folio mark.

## What's faithful, what's stubbed

- ✅ All chrome (header, nav with dev tag, footer with land acknowledgement, subscribe form)
- ✅ Post list with hanging dates above 1000px
- ✅ TOC colophon with hanging label above 1100px
- ✅ Admonition `note`/`tip`/`caveat` patterns
- ✅ Folio `§`, callout, blockquote, table, code, kbd
- ⚠️ No real search, no real RSS, no real subscribe (form is a no-op)
- ⚠️ Sample content is a curated sampler — see the upstream repo for the full set
