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

  const colors = new Float32Array(positions.count * 3);
  const forest = new THREE.Color("#33473c");
  const meadow = new THREE.Color("#697353");
  const stone = new THREE.Color("#827e73");
  const granite = new THREE.Color("#a1a09a");
  const snow = new THREE.Color("#e7eef0");
  const color = new THREE.Color();
  const smooth = THREE.MathUtils.smoothstep;

  for (let i = 0; i < positions.count; i += 1) {
    const x = positions.getX(i);
    const z = positions.getZ(i);
    const meters = positions.getY(i) / (METERS_TO_WORLD * VERTICAL_EXAGGERATION) + BASE_ALTITUDE;
    const upward = geometry.attributes.normal.getY(i);
    const variation = noise.noise(x * 2.4, z * 2.4, 3.7);
    const rockExposure = 1 - smooth(upward, 0.54, 0.87);
    const treeLine = smooth(meters + variation * 180, 2800, 3600);
    color.copy(forest).lerp(meadow, treeLine);
    color.lerp(stone, Math.max(rockExposure * 0.84, smooth(meters, 3400, 4100)));
    color.lerp(granite, smooth(meters, 3650, 4500) * 0.35);
    // Snow gathers on higher, upward-facing shelves. Exposed cliffs stay rock.
    const snowLine = 3860 + variation * 240 + (1 - upward) * 750;
    const snowCover = smooth(meters, snowLine, snowLine + 330) * smooth(upward, 0.48, 0.8);
    color.multiplyScalar(0.91 + (variation + 0.5) * 0.2);
    color.lerp(snow, snowCover);
    colors.set([color.r, color.g, color.b], i * 3);
  }
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return geometry;
}

export function destinationPosition(region, elevations) {
  const [latitude, longitude] = region.destination;
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

export function createRockTexture() {
  const size = 256;
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
  texture.repeat.set(22, 22);
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return texture;
}
