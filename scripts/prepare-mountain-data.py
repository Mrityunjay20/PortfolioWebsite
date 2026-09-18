"""Rebuild the bundled Himalayan elevation grids from Mapzen Terrain Tiles.

Run with Python 3 and Pillow. The deployed site uses the bundled files and
does not need an API key or fetch terrain from a third party at runtime.
"""

import io
import json
import math
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import struct
from urllib.request import urlopen

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
CONFIG = json.loads((ROOT / "src/data/mountains.json").read_text())
ZOOM = 13
WORLD_PIXELS = 256 * 2 ** ZOOM
EARTH_CIRCUMFERENCE = 40075016.686


def projected_pixel(latitude, longitude):
    latitude = math.radians(latitude)
    return (
        (longitude + 180) / 360 * WORLD_PIXELS,
        (1 - math.asinh(math.tan(latitude)) / math.pi) / 2 * WORLD_PIXELS,
    )


def load_tile(tile):
    x, y = tile
    url = f"https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{ZOOM}/{x}/{y}.png"
    with urlopen(url, timeout=30) as response:
        image = Image.open(io.BytesIO(response.read())).convert("RGB")
        image.load()
    return tile, image


def build_region(region):
    latitude, longitude = region["center"]
    cx, cy = projected_pixel(latitude, longitude)
    meters_per_pixel = EARTH_CIRCUMFERENCE * math.cos(math.radians(latitude)) / WORLD_PIXELS
    width = CONFIG["spanMeters"] / meters_per_pixel
    left, top = cx - width / 2, cy - width / 2
    xmin, ymin = math.floor(left / 256), math.floor(top / 256)
    xmax, ymax = math.floor((left + width) / 256), math.floor((top + width) / 256)
    tiles = [(x, y) for y in range(ymin, ymax + 1) for x in range(xmin, xmax + 1)]
    atlas = Image.new("RGB", ((xmax - xmin + 1) * 256, (ymax - ymin + 1) * 256))
    with ThreadPoolExecutor(max_workers=4) as executor:
        for (x, y), tile in executor.map(load_tile, tiles):
            atlas.paste(tile, ((x - xmin) * 256, (y - ymin) * 256))
    pixels = atlas.load()

    def elevation(x, y):
        red, green, blue = pixels[x, y]
        return red * 256 + green + blue / 256 - 32768

    values = []
    size = CONFIG["resolution"]
    for row in range(size):
        for col in range(size):
            # Terrarium samples are located at pixel centres. Decode channels
            # before bilinear interpolation to avoid 256-metre colour seams.
            px = left + width * col / (size - 1) - xmin * 256 - 0.5
            py = top + width * row / (size - 1) - ymin * 256 - 0.5
            ix, iy = math.floor(px), math.floor(py)
            fx, fy = px - ix, py - iy
            north = elevation(ix, iy) * (1 - fx) + elevation(ix + 1, iy) * fx
            south = elevation(ix, iy + 1) * (1 - fx) + elevation(ix + 1, iy + 1) * fx
            value = round(north * (1 - fy) + south * fy)
            if not 0 < value < 9000:
                raise ValueError(f"Invalid Himalayan elevation: {value}")
            values.append(value)

    output = ROOT / "public/terrain"
    output.mkdir(parents=True, exist_ok=True)
    (output / f'{region["id"]}.bin').write_bytes(struct.pack(f"<{len(values)}H", *values))
    print(f'{region["name"]}: {size} × {size} samples, {min(values)}–{max(values)} m, {len(values) * 2:,} bytes')


if __name__ == "__main__":
    for region in CONFIG["regions"]:
        build_region(region)
