---
title: Self-hosted fonts, in three lines
date: 2026-04-16
draft: true
---

Google Fonts will get you going. It will also cost you a third-party request on every page load, a privacy footprint you didn't ask for, and one more thing that can fail silently when someone else's CDN hiccups.

Self-hosting is the less glamorous answer and almost always the right one:

1. Drop the `.woff2` files into `public/fonts/`.
2. Declare `@font-face` once in `global.css` with `font-display: swap`.
3. Reference by name.

```css
@font-face {
  font-family: "BC Sans";
  src: url("/fonts/BCSans-Regular.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}
```

Same-origin, browser-cached, and you own the dependency. The only tax is a bit of disk — which, on a text-forward site, is nothing.

BC Sans here is a small deliberate choice. It's the province of British Columbia's public typeface, open-licensed and built for high legibility on government forms. A reasonable thing to put on a Canadian personal site.
