---
title: Field notes on building slowly
date: 2026-04-18
draft: true
description: An inventory of the habits, tools, and small decisions behind a year of building one thing well.
---

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. This is an attempt to write down, without flinching, how I actually build things when I have the luxury of going slowly.

## The premise

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. *Slowly* is doing a lot of work in that sentence. I don't mean lazy. I mean **one decision at a time, with reasons**, and a refusal to optimize for a pace I can't sustain.

<aside class="admonition note">
<span class="admonition-label">Scope</span>

This applies to side projects, personal writing, and the one or two things at work I have real ownership over. It does not apply to the rest of my calendar.

</aside>

## The weekly shape

Most weeks look like this:

1. One long block (two to three hours) on Sunday for the thing that needs uninterrupted thinking
2. Two or three short blocks (30 minutes each) during the week to keep the state warm
3. A single "publish or trim" pass on Friday

Ut enim ad minim veniam. Nothing magical. Just enough repetition that the work doesn't go cold.

### What counts as a block

A block is:

- Phone in another room
- One tab, one document, one question
- A visible timer

A block is *not*:

- "Let me just check Slack first"
- A call that says it might only be fifteen minutes
- Any session that begins with setting up tools

## Tools, briefly

A short, opinionated list:

| Tool | For | Why |
| --- | --- | --- |
| Plain text files | Almost everything | Portable, greppable, outlives any app |
| A single notebook | Reading, planning | Friction where I want friction |
| `rg` and `fd` | Finding things | Faster than any GUI search |
| A kitchen timer | Focus blocks | Analog, loud, cannot be snoozed silently |

The one rule: **the tool you keep beats the tool you'd optimally choose**. A notebook on the desk beats an app you open twice a month.

## An example: writing this piece

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.

1. Sunday morning, two hours: dumped the outline and first draft, messy
2. Tuesday, twenty minutes: cut the two sections that were embarrassing
3. Wednesday, fifteen minutes: added the table, which turned out to be the clearest part
4. Friday, ten minutes: final pass, a single sentence rewritten four times

Four sessions. Maybe three hours total. A piece I'm willing to put my name on.

## A small diversion on code

Excepteur sint occaecat cupidatat non proident. Below is the shape of the build script for this site — not because it's clever, but because *boring* is a feature:

```bash
#!/usr/bin/env bash
set -euo pipefail

npm run build
touch dist/.nojekyll
```

Two commands. No frameworks wrapped around frameworks. If I come back to this in three years, I will understand it in under a minute. That's the whole goal.

Inline, a single variable like `const slow = true;` is plenty. The moment I reach for <kbd>Option</kbd> <kbd>⌘</kbd> <kbd>V</kbd> to paste a regex someone else wrote, I pause and ask why.

<aside class="admonition warn">
<span class="admonition-label">Caveat</span>

None of this scales to a team. These are habits for solo work. A team needs documented shared tools, not one person's preferences in a shoebox.

</aside>

## Reading rhythm

I read a little every day. Not a lot. A chapter most mornings, an essay some evenings. The rule is:

> If the book is boring, close it. Libraries are full.

Sometimes I <mark>highlight a line</mark> and type it into a plain file with the date and source. That file is, increasingly, the most valuable thing I own.

### A closing thought

The reason I write any of this down is that slow work feels, in the moment, like *no work*. An hour with no shippable output, a week with a single small edit, a month without a visible step forward. It takes a long time to trust that the graph is still bending in the right direction.

It is.

Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

---

<aside class="admonition quote">
<span class="admonition-label">Pulled quote</span>

"Consistency is the long game's only cheat code." — a friend, over coffee, 2023

</aside>
