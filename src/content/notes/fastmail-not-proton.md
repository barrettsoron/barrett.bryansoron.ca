---
title: Fastmail, not Proton
date: 2026-04-21
draft: false
---

I switched to [Fastmail](https://www.fastmail.com/company/values/). The honest accounting is worth writing down.

Proton's guarantee is stronger: [end-to-end encryption at rest](https://proton.me/learn/encryption), open-source clients, Swiss jurisdiction. They genuinely cannot read your mail. Fastmail's position is "we won't" — backed by a decent transparency record and a subscription model that doesn't depend on your attention. But [Australia is Five Eyes](https://en.wikipedia.org/wiki/Five_Eyes). That gap is real, and I'm not going to pretend otherwise.

What tipped it: [JMAP](https://datatracker.ietf.org/doc/html/rfc8620) — the modern replacement for IMAP, designed for programmatic use from the start. Proton doesn't support it. Their path to programmatic access runs through a [local bridge app](https://proton.me/mail/bridge) — a daemon you have to keep running. That's not a technical detail; it's a constraint on how I work. I want email I can reach via clean API, chainable queries, CLI-native from anywhere. That version of digital sovereignty actually serves me — not the version that makes my threat model look impressive on paper.

Both things are true: Proton's model is more private, and Fastmail's is more workable. I picked one. The threat model matters: I'm doing cooperative organizing and movement politics, not covering sources or crossing state actors. For that threat model, the JMAP tradeoff holds.

If the threat model changes, I'll revisit.
