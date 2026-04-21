---
title: Drafts without branches
date: 2026-04-18
draft: true
---

A pattern I keep reaching for on personal projects: a single boolean in frontmatter that keeps half-finished posts out of production without the ceremony of long-lived feature branches.

In `content.config.ts`:

```ts
schema: z.object({
  title: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().default(false),
}),
```

Then filter at the page level:

```ts
const isProd = import.meta.env.PROD;
const notes = (await getCollection('notes'))
  .filter(({ data }) => !isProd || !data.draft)
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
```

`npm run dev` shows everything — unfinished thoughts, scaffolding, broken drafts. `npm run build` drops anything marked `draft: true`. Right now my dev build renders seventeen routes; prod renders six.

The appeal is that unfinished writing stays in `main`, visible when I open the repo, instead of stashed behind a branch I'll forget about. The git log stays honest: every commit ships on the next deploy, and "shipping" means removing one line of frontmatter.

A separate worktree or design branch solves a bigger problem than I have. This is the ninety-percent answer.
