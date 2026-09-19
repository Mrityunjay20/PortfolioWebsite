import * as THREE from "three";
import { ImprovedNoise } from "three/examples/jsm/math/ImprovedNoise.js";
import mountainData from "../data/mountains.json";

const WORLD_SIZE = 24;
const METERS_TO_WORLD = WORLD_SIZE / mountainData.spanMeters;
const BASE_ALTITUDE = 1000;
const VERTICAL_EXAGGERATION = 1.15;
const noise = new ImprovedNoise();

export function decodeElevations(buffer) {
  const count = mountainData.resolution ** 2;
  if (buffer.byteLength !== count * 2) throw new Error("Incomplete terrain data");
  const view = new DataView(buffer);
  const elevations = new Float32Array(count);
  for (let i = 0; i < count; i += 1) {
    elevations[i] = view.getUint16(i * 2, true);
    if (elevations[i] <= 0 || elevations[i] > 9000) throw new Error("Invalid terrain data");
  }
  return elevations;
}

const toWorldHeight = (meters) => (meters - BASE_ALTITUDE) * METERS_TO_WORLD * VERTICAL_EXAGGERATION;

export function createMountainGeometry(elevations, stride = 1) {
  const sourceSize = mountainData.resolution;
  const segments = (sourceSize - 1) / stride;
  const geometry = new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, segments, segments);
  geometry.rotateX(-Math.PI / 2);
  const positions = geometry.attributes.position;
  for (let row = 0; row <= segments; row += 1) {
    for (let col = 0; col <= segments; col += 1) {
      positions.setY(row * (segments + 1) + col, toWorldHeight(elevations[row * stride * sourceSize + col * stride]));
    }
  }
  positions.needsUpdate = true;
  geometry.computeVertexNormals();

  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return geometry;
}

export function coordinatePosition(coordinates, region, elevations) {
  const [latitude, longitude] = coordinates;
  const [centerLat, centerLon] = region.center;
  const mercator = (degrees) => Math.asinh(Math.tan(THREE.MathUtils.degToRad(degrees)));
  const localRadius = 6378137 * Math.cos(THREE.MathUtils.degToRad(centerLat));
  const x = THREE.MathUtils.degToRad(longitude - centerLon) * localRadius * METERS_TO_WORLD;
  const z = (mercator(centerLat) - mercator(latitude)) * localRadius * METERS_TO_WORLD;
  const segments = mountainData.resolution - 1;
  const gx = THREE.MathUtils.clamp((x / WORLD_SIZE + 0.5) * segments, 0, segments - 1);
  const gz = THREE.MathUtils.clamp((z / WORLD_SIZE + 0.5) * segments, 0, segments - 1);
  const col = Math.floor(gx);
  const row = Math.floor(gz);
  const size = mountainData.resolution;
  const north = THREE.MathUtils.lerp(elevations[row * size + col], elevations[row * size + col + 1], gx - col);
  const south = THREE.MathUtils.lerp(elevations[(row + 1) * size + col], elevations[(row + 1) * size + col + 1], gx - col);
  return [x, toWorldHeight(THREE.MathUtils.lerp(north, south, gz - row)) + 0.08, z];
}

export function destinationPosition(region, elevations) {
  return coordinatePosition(region.destination, region, elevations);
}

export function createRockTexture(maxAnisotropy = 1) {
  const size = 1024;
  const pixels = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      let detail = 0;
      // Periodic noise keeps the rock detail seamless across UV repeats.
      const a = x / size * Math.PI * 2;
      const b = y / size * Math.PI * 2;
      for (let octave = 0; octave < 4; octave += 1) {
        const frequency = 2 ** octave;
        detail += noise.noise(
          (Math.cos(a) + Math.sin(b)) * frequency * 3,
          (Math.sin(a) + Math.cos(b)) * frequency * 3,
          frequency * 1.7,
        ) / frequency;
      }
      const value = THREE.MathUtils.clamp(128 + detail * 75, 0, 255);
      const index = (y * size + x) * 4;
      pixels.set([value, value, value, 255], index);
    }
  }
  const texture = new THREE.DataTexture(pixels, size, size, THREE.RGBAFormat);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(16, 16);
  texture.anisotropy = Math.min(8, maxAnisotropy);
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return texture;
}

// Evaluate land cover per fragment rather than painting the vertices. This
// keeps snow borders and rock detail crisp even on the lighter mobile mesh.
export function shadeMountainMaterial(shader) {
  Object.assign(shader.uniforms, {
    terrainForest: { value: new THREE.Color("#33473c") },
    terrainMeadow: { value: new THREE.Color("#697353") },
    terrainStone: { value: new THREE.Color("#827e73") },
    terrainGranite: { value: new THREE.Color("#a1a09a") },
    terrainSnow: { value: new THREE.Color("#e7eef0") },
    terrainHeightScale: { value: METERS_TO_WORLD * VERTICAL_EXAGGERATION },
    terrainBaseAltitude: { value: BASE_ALTITUDE },
  });
  const varyings = "varying vec3 vTerrainPosition;\nvarying vec3 vTerrainNormal;\n";
  shader.vertexShader = varyings + shader.vertexShader.replace(
    "#include <begin_vertex>",
    "#include <begin_vertex>\nvTerrainPosition = position;\nvTerrainNormal = normal;",
  );
  shader.fragmentShader = varyings + `
    uniform vec3 terrainForest;
    uniform vec3 terrainMeadow;
    uniform vec3 terrainStone;
    uniform vec3 terrainGranite;
    uniform vec3 terrainSnow;
    uniform float terrainHeightScale;
    uniform float terrainBaseAltitude;
  ` + shader.fragmentShader.replace("#include <color_fragment>", `
    #include <color_fragment>
    vec3 terrainNormal = normalize(vTerrainNormal);
    float upward = max(0.0, terrainNormal.y);
    float meters = vTerrainPosition.y / terrainHeightScale + terrainBaseAltitude;
    float variation = texture2D(bumpMap, vTerrainPosition.xz * 0.18).r - 0.5;
    // Three projections keep texture detail from stretching down steep cliffs.
    vec3 weights = pow(abs(terrainNormal), vec3(4.0));
    weights /= max(dot(weights, vec3(1.0)), 0.0001);
    float grain =
      texture2D(bumpMap, vTerrainPosition.yz * 1.7).r * weights.x +
      texture2D(bumpMap, vTerrainPosition.xz * 1.7).r * weights.y +
      texture2D(bumpMap, vTerrainPosition.xy * 1.7).r * weights.z;
    float exposedRock = 1.0 - smoothstep(0.54, 0.87, upward);
    float treeLine = smoothstep(2800.0, 3600.0, meters + variation * 180.0);
    vec3 land = mix(terrainForest, terrainMeadow, treeLine);
    land = mix(land, terrainStone, max(exposedRock * 0.84, smoothstep(3400.0, 4100.0, meters)));
    land = mix(land, terrainGranite, smoothstep(3650.0, 4500.0, meters) * 0.35);
    land *= 0.88 + grain * 0.24;
    float snowLine = 3860.0 + variation * 320.0 + (1.0 - upward) * 750.0;
    float snowCover = smoothstep(snowLine, snowLine + 160.0, meters) * smoothstep(0.48, 0.8, upward);
    diffuseColor.rgb *= mix(land, terrainSnow * (0.96 + grain * 0.08), snowCover);
  `);
}
