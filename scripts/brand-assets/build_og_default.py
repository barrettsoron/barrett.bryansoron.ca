"""Rebuild public/og-default.png from path-rendered text — no font deps at render time.

Run from the repo root (requires `rsvg-convert` on PATH):

    uvx --from 'fonttools[woff]' python scripts/brand-assets/build_og_default.py
    rsvg-convert -w 1200 -h 630 build/og-default.svg -o public/og-default.png

Or use the wrapper:

    scripts/brand-assets/build.sh

Every glyph in the title/tagline/URL is converted to an SVG path via fonttools,
so rsvg-convert (or any rasterizer) renders identically without BC Sans being
installed system-wide. Edit the LAYOUT block below if you change the copy.
"""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen

ROOT = Path(__file__).resolve().parents[2]
FONTS = ROOT / "public/fonts"
BUILD_DIR = ROOT / "build"
OUT_SVG = BUILD_DIR / "og-default.svg"

W, H = 1200, 630
BG = "#0e0e10"
ACCENT = "#10b981"
TITLE_FILL = "#ededed"
SUB_FILL = "#8a8a92"

# --- Layout ---------------------------------------------------------------
LOGO_SIZE = 130
LOGO_CX = 90 + LOGO_SIZE / 2
LOGO_CY = 90 + LOGO_SIZE / 2

TITLE_TEXT = "Barrett Bryan-Soron"
TITLE_SIZE = 88
TITLE_X = 90
TITLE_BASELINE = 350

SUB_LINES = [
    "Political operator in Vancouver. Building durable infrastructure",
    "for eco-socialist movement and party work in Canada.",
]
SUB_SIZE = 32
SUB_X = 90
SUB_BASELINES = [420, 462]

URL_TEXT = "barrett.bryansoron.ca"
URL_SIZE = 26
URL_X = 90
URL_BASELINE = 565

ACCENT_RULE_Y = 528
ACCENT_RULE_W = 90
# --------------------------------------------------------------------------


def render_text(text: str, font: TTFont, size_px: float, x: float, y: float, fill: str, letter_spacing: float = 0) -> str:
    upm = font["head"].unitsPerEm
    scale = size_px / upm
    cmap = font.getBestCmap()
    glyph_set = font.getGlyphSet()
    hmtx = font["hmtx"]
    out = []
    cursor = 0.0
    for ch in text:
        if ord(ch) not in cmap:
            cursor += size_px * 0.3
            continue
        gname = cmap[ord(ch)]
        glyph = glyph_set[gname]
        advance, _ = hmtx[gname]
        if ch != " ":
            pen = SVGPathPen(glyph_set)
            glyph.draw(pen)
            d = pen.getCommands()
            if d:
                out.append(
                    f'<g transform="translate({x + cursor:.3f} {y:.3f}) scale({scale:.6f} -{scale:.6f})">'
                    f'<path d="{d}" fill="{fill}"/></g>'
                )
        cursor += advance * scale + letter_spacing
    return "\n    ".join(out)


def render_centred_b(cx: float, cy: float, box: float, font: TTFont) -> str:
    cmap = font.getBestCmap()
    glyph_set = font.getGlyphSet()
    glyph = glyph_set[cmap[ord("B")]]
    bp = BoundsPen(glyph_set)
    glyph.draw(bp)
    xMin, yMin, xMax, yMax = bp.bounds
    margin = box * (30 / 128)
    inner = box - 2 * margin
    scale = inner / max(xMax - xMin, yMax - yMin)
    tx = cx - scale * (xMin + xMax) / 2
    ty = cy + scale * (yMax + yMin) / 2
    pen = SVGPathPen(glyph_set)
    glyph.draw(pen)
    d = pen.getCommands()
    rx = box * (24 / 128)
    return (
        f'<rect x="{cx - box / 2:.2f}" y="{cy - box / 2:.2f}" '
        f'width="{box}" height="{box}" rx="{rx:.2f}" fill="{ACCENT}"/>\n    '
        f'<g transform="translate({tx:.3f} {ty:.3f}) scale({scale:.6f} -{scale:.6f})">'
        f'<path d="{d}" fill="#ffffff"/></g>'
    )


def build():
    BUILD_DIR.mkdir(exist_ok=True)
    bc_bold = TTFont(str(FONTS / "bc-sans/BCSans-Bold.woff2"))
    bc_reg = TTFont(str(FONTS / "bc-sans/BCSans-Regular.woff2"))
    mono = TTFont(str(FONTS / "noto-mono/noto-sans-mono-v37-latin-regular.woff2"))

    logo = render_centred_b(LOGO_CX, LOGO_CY, LOGO_SIZE, bc_bold)
    title = render_text(TITLE_TEXT, bc_bold, TITLE_SIZE, TITLE_X, TITLE_BASELINE, TITLE_FILL)
    sub_lines = [
        render_text(line, bc_reg, SUB_SIZE, SUB_X, baseline, SUB_FILL)
        for line, baseline in zip(SUB_LINES, SUB_BASELINES)
    ]
    url = render_text(URL_TEXT, mono, URL_SIZE, URL_X, URL_BASELINE, ACCENT, letter_spacing=0.5)

    rule = (
        f'<line x1="{URL_X}" y1="{ACCENT_RULE_Y}" '
        f'x2="{URL_X + ACCENT_RULE_W}" y2="{ACCENT_RULE_Y}" '
        f'stroke="{ACCENT}" stroke-width="2"/>'
    )

    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">\n'
        f'    <rect width="{W}" height="{H}" fill="{BG}"/>\n    '
        f'{logo}\n    '
        f'{title}\n    '
        + "\n    ".join(sub_lines)
        + f'\n    {rule}\n    {url}\n</svg>\n'
    )

    OUT_SVG.write_text(svg)
    print(f"Wrote {OUT_SVG} ({len(svg)} bytes)")
    print("Now rasterize: rsvg-convert -w 1200 -h 630 build/og-default.svg -o public/og-default.png")


if __name__ == "__main__":
    build()
