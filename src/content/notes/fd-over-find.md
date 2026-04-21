---
title: fd over find
date: 2026-03-28
draft: true
---

Small tool change, outsized payoff: I replaced `find` with [`fd`](https://github.com/sharkdp/fd) two years ago and have never looked back.

```bash
# find
find . -name "*.md" -not -path "*/node_modules/*" -type f

# fd
fd -e md
```

`fd` reads `.gitignore` by default, so `node_modules`, `.venv`, and `dist` are excluded without you saying so. It assumes the thing you're looking for is a file, not a directory, because that's the common case. It runs in parallel. The help output fits on one screen.

The larger point is that most Unix tools carry forty years of sedimented defaults that made sense on a VAX in 1984 and don't anymore. Replacing them one at a time — `fd` for `find`, `rg` for `grep`, `bat` for `cat`, `eza` for `ls` — is one of the cheapest productivity upgrades available.

You can keep the old ones around for scripts. The new ones are for humans.
