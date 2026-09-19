# Himalayan elevation data

The two bundled grids describe 18 km squares around Triund and Kheerganga in
Himachal Pradesh. Each file contains 769 × 769 unsigned 16-bit little-endian
elevations in metres, ordered north to south and west to east.

Source: [Mapzen Terrain Tiles, AWS Open Data](https://registry.opendata.aws/terrain-tiles/),
accessed 18 September 2026. Zoom 13 Terrarium tiles were decoded, bilinearly
resampled in Web Mercator, and rounded to the nearest metre. The renderer applies
1.15× vertical exaggeration. Rock, vegetation, snow and lighting are artistic
materials, not satellite imagery or a live representation of seasonal conditions.

SRTM and GMTED2010 terrain data courtesy of the U.S. Geological Survey.
See [source attribution and licences](https://github.com/tilezen/joerd/blob/master/docs/attribution.md).
The source elevations are public data; the USGS has not endorsed this rendering.

Coordinates are in `src/data/mountains.json`. The Triund campsite position is
from [Indiahikes](https://indiahikes.com/documented-trek/triund-trek); the Kheerganga
hot spring position is from [OpenStreetMap](https://www.openstreetmap.org/node/2380563860)
(© OpenStreetMap contributors, ODbL). Surrounding landmark positions were resolved
from OpenStreetMap on 19 September 2026. The rendered route joins these key waypoints
and is an orientation aid, not a recorded GPS track. The scene is not a navigation map.

Rebuild with `python3 scripts/prepare-mountain-data.py` (requires Pillow).
