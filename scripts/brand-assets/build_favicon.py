"""Rebuild public/favicon.svg with a geometrically centred 'B' from BC Sans Bold.

Run from the repo root:

    uvx --from 'fonttools[woff]' python scripts/brand-assets/build_favicon.py

The 'B' is extracted as a vector path and centred on its ink bounding box —
not its advance-width centre — so the glyph sits visually centred in the
rounded square at any size.
"""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen

ROOT = Path(__file__).resolve().parents[2]
FONT_PATH = ROOT / "public/fonts/bc-sans/BCSans-Bold.woff2"
OUT_PATH = ROOT / "public/favicon.svg"

TARGET = 128
MARGIN = 30  # padding inside the rounded square; preserves breathing room
ACCENT = "#10b981"
GLYPH_FILL = "#ffffff"
CORNER_RX = 24


def build():
    font = TTFont(str(FONT_PATH))
    glyph_set = font.getGlyphSet()
    cmap = font.getBestCmap()
    glyph = glyph_set[cmap[ord("B")]]

    bounds = BoundsPen(glyph_set)
    glyph.draw(bounds)
    xMin, yMin, xMax, yMax = bounds.bounds
    inner = TARGET - 2 * MARGIN
    scale = inner / max(xMax - xMin, yMax - yMin)

    tx = TARGET / 2 - scale * (xMin + xMax) / 2
    ty = TARGET / 2 + scale * (yMax + yMin) / 2  # SVG y is flipped vs. font y

    pen = SVGPathPen(glyph_set)
    glyph.draw(pen)
    path_d = pen.getCommands()

    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {TARGET} {TARGET}">\n'
        f'    <rect width="{TARGET}" height="{TARGET}" rx="{CORNER_RX}" fill="{ACCENT}"/>\n'
        f'    <g transform="translate({tx:.3f} {ty:.3f}) scale({scale:.5f} -{scale:.5f})">\n'
        f'        <path d="{path_d}" fill="{GLYPH_FILL}"/>\n'
        f'    </g>\n'
        f'</svg>\n'
    )

    OUT_PATH.write_text(svg)
    print(f"Wrote {OUT_PATH}")
    print(f"  glyph scale: {scale:.4f}")
    print(f"  ink bbox in 128: {scale * (xMax - xMin):.2f} × {scale * (yMax - yMin):.2f}")


if __name__ == "__main__":
    build()
