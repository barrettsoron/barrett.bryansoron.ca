"""Rasterize favicon.svg → favicon.ico (16/32/48) + apple-touch-icon.png (180).

Run after build_favicon.py. Requires `rsvg-convert` on PATH and Pillow.

Repo-root invocation:

    uvx --from pillow python scripts/brand-assets/build_raster_icons.py
"""
import subprocess
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "public/favicon.svg"
ICO_OUT = ROOT / "public/favicon.ico"
APPLE_OUT = ROOT / "public/apple-touch-icon.png"
BUILD_DIR = ROOT / "build"

ICO_SIZES = [16, 32, 48]
APPLE_SIZE = 180


def rasterize(size: int, dest: Path) -> None:
    subprocess.run(
        ["rsvg-convert", "-w", str(size), "-h", str(size), str(SRC), "-o", str(dest)],
        check=True,
    )


def build():
    BUILD_DIR.mkdir(exist_ok=True)

    ico_pngs = []
    for size in ICO_SIZES:
        png = BUILD_DIR / f"favicon-{size}.png"
        rasterize(size, png)
        ico_pngs.append(png)

    # ICO embeds each size as its own image. Open all sizes, sort largest-first,
    # save the largest as base with the rest as append_images. Skip `sizes=`
    # because that triggers Pillow to *resize* from a single source rather
    # than embed pre-rendered frames at each size.
    images = sorted(
        (Image.open(p) for p in ico_pngs),
        key=lambda im: -im.width,
    )
    images[0].save(ICO_OUT, format="ICO", append_images=images[1:])
    print(f"Wrote {ICO_OUT} ({', '.join(f'{s}x{s}' for s in ICO_SIZES)})")

    rasterize(APPLE_SIZE, APPLE_OUT)
    print(f"Wrote {APPLE_OUT} ({APPLE_SIZE}x{APPLE_SIZE})")


if __name__ == "__main__":
    build()
