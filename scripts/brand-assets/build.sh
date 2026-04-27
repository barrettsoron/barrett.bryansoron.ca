#!/usr/bin/env bash
# Rebuild favicon.svg and og-default.png from BC Sans + Noto Sans Mono.
# Run from anywhere; resolves repo root from the script's location.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

cd "$ROOT"

echo "→ favicon.svg"
uvx --from 'fonttools[woff]' python "$SCRIPT_DIR/build_favicon.py"

echo "→ og-default.svg"
uvx --from 'fonttools[woff]' python "$SCRIPT_DIR/build_og_default.py"

echo "→ rasterizing og-default.png"
rsvg-convert -w 1200 -h 630 "$ROOT/build/og-default.svg" -o "$ROOT/public/og-default.png"
echo "✓ wrote public/og-default.png"
