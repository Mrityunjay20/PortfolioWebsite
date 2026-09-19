/* eslint-disable react/prop-types -- Internal components consume the checked-in mountain data schema. */
import { Canvas, useThree } from "@react-three/fiber";
import { Html, Line, OrbitControls, Sky } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import mountainData from "../../data/mountains.json";
import {
  createMountainGeometry,
  createRockTexture,
  coordinatePosition,
  decodeElevations,
  destinationPosition,
  shadeMountainMaterial,
} from "../../utils/mountainGeometry";

const elevationCache = new Map();

function Landscape({ region, elevations, resetKey, view }) {
  const controls = useRef();
  const { camera, invalidate, size, gl } = useThree();
  const coarsePointer = useMemo(() => window.matchMedia("(pointer: coarse)").matches, []);
  const geometry = useMemo(() => createMountainGeometry(elevations, coarsePointer ? 2 : 1), [elevations, coarsePointer]);
  const rock = useMemo(() => createRockTexture(gl.capabilities.getMaxAnisotropy()), [gl]);
  const marker = useMemo(() => destinationPosition(region, elevations), [region, elevations]);
  const landmarks = useMemo(() => region.landmarks.map((landmark) => ({
    ...landmark,
    position: coordinatePosition(landmark.coordinates, region, elevations),
  })), [region, elevations]);
  const routePoints = useMemo(() => {
    const stops = [...region.landmarks.map((landmark) => landmark.coordinates), region.destination];
    const points = [];
    stops.slice(0, -1).forEach((start, segment) => {
      const end = stops[segment + 1];
      for (let step = 0; step < 18; step += 1) {
        if (segment > 0 && step === 0) continue;
        const progress = step / 17;
        const coordinate = [
          THREE.MathUtils.lerp(start[0], end[0], progress),
          THREE.MathUtils.lerp(start[1], end[1], progress),
        ];
        const point = coordinatePosition(coordinate, region, elevations);
        points.push([point[0], point[1] + 0.07, point[2]]);
      }
    });
    return points;
  }, [region, elevations]);
  const activeTarget = view === "overlook" ? region.routeTarget : region.target;

  useEffect(() => {
    const position = view === "overlook" ? [...region.overlookCamera] : [...region.camera];
    // Face the range more directly on portrait screens so the destination
    // remains in frame without widening the lens or moving outside the DEM.
    if (size.width / size.height < 0.8) position[0] = 0;
    camera.position.fromArray(position);
    camera.lookAt(...activeTarget);
    if (controls.current) {
      controls.current.target.fromArray(activeTarget);
      controls.current.update();
    }
    invalidate();
  }, [activeTarget, camera, invalidate, region, resetKey, view, size.width, size.height]);

  useEffect(() => () => geometry.dispose(), [geometry]);
  useEffect(() => () => rock.dispose(), [rock]);

  return (
    <>
      <Sky distance={450000} sunPosition={[-40, 15, 20]} turbidity={5} rayleigh={1.1} mieCoefficient={0.006} mieDirectionalG={0.82} />
      <fog attach="fog" args={["#9cacb3", 15, 42]} />
      <hemisphereLight args={["#bfd7ea", "#41452d", 1.25]} />
      <directionalLight
        position={[-12, 11, 8]}
        color="#ffe5bd"
        intensity={3.1}
        castShadow
        shadow-mapSize={coarsePointer ? [2048, 2048] : [4096, 4096]}
        shadow-camera-left={-17}
        shadow-camera-right={17}
        shadow-camera-top={17}
        shadow-camera-bottom={-17}
        shadow-camera-near={0.5}
        shadow-camera-far={60}
        shadow-normalBias={0.035}
        shadow-bias={-0.00012}
      />
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          roughness={0.96}
          metalness={0}
          bumpMap={rock}
          bumpScale={0.018}
          onBeforeCompile={shadeMountainMaterial}
          customProgramCacheKey={() => "himalayan-surface-v2"}
        />
      </mesh>
      <Line
        points={routePoints}
        color={region.color}
        lineWidth={1.5}
        transparent
        opacity={0.82}
        dashed
        dashScale={8}
        dashSize={0.42}
        gapSize={0.24}
      />
      {landmarks.map((landmark) => (
        <group position={landmark.position} key={landmark.name}>
          <mesh position={[0, 0.1, 0]}>
            <sphereGeometry args={[0.045, 12, 8]} />
            <meshBasicMaterial color="#f4efe4" />
          </mesh>
          <Html center position={[0, 0.47, 0]} zIndexRange={[8, 0]} style={{ pointerEvents: "none" }}>
            <span className="terrain-landmark"><em>{landmark.kind}</em><strong>{landmark.name}</strong></span>
          </Html>
        </group>
      ))}
      <group position={marker}>
        <mesh position={[0, 0.32, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 0.64, 8]} />
          <meshStandardMaterial color="#f4efe4" roughness={0.65} />
        </mesh>
        <mesh position={[0, 0.68, 0]}>
          <sphereGeometry args={[0.058, 16, 12]} />
          <meshBasicMaterial color={region.color} />
        </mesh>
        <Html center position={[0, 1, 0]} zIndexRange={[10, 0]} style={{ pointerEvents: "none" }}>
          <span className="mountain-marker">
            <i style={{ background: region.color }} />
            <strong>{region.name}</strong>
            <em>{region.altitude}</em>
          </span>
        </Html>
      </group>
      <OrbitControls
        ref={controls}
        target={activeTarget}
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        minPolarAngle={0.78}
        maxPolarAngle={1.3}
        minAzimuthAngle={-0.62}
        maxAzimuthAngle={0.62}
      />
    </>
  );
}

export default function TrailTerrain({ region, resetKey, view }) {
  const [terrain, setTerrain] = useState(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const terrainKey = `${mountainData.version}:${region.id}`;

  useEffect(() => {
    const controller = new AbortController();
    setError(false);
    if (elevationCache.has(terrainKey)) {
      setTerrain({ id: terrainKey, elevations: elevationCache.get(terrainKey) });
      return () => controller.abort();
    }
    fetch(`/terrain/${region.id}.bin?v=${mountainData.version}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Terrain unavailable");
        return response.arrayBuffer();
      })
      .then(decodeElevations)
      .then((elevations) => {
        if (controller.signal.aborted) return;
        elevationCache.set(terrainKey, elevations);
        setTerrain({ id: terrainKey, elevations });
      })
      .catch((failure) => { if (failure.name !== "AbortError") setError(true); });
    return () => controller.abort();
  }, [region.id, terrainKey, attempt]);

  const ready = terrain?.id === terrainKey;
  return (
    <>
      <Canvas
        className="mountain-canvas"
        shadows={THREE.PCFSoftShadowMap}
        frameloop="demand"
        dpr={[1.5, 2]}
        camera={{ position: region.camera, fov: 48, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance", toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 0.88 }}
        fallback={<div className="terrain-state">Enable WebGL in your browser to explore the 3D mountains.</div>}
        aria-label={`Interactive 3D mountains around ${region.name}. Drag to orbit, or use the view buttons.`}
      >
        <color attach="background" args={["#9cacb3"]} />
        {ready && <Landscape region={region} elevations={terrain.elevations} resetKey={resetKey} view={view} />}
      </Canvas>
      {(!ready || error) && <div className="terrain-state" role="status">
        {error ? <><span>The mountain view couldn’t load.</span><button onClick={() => setAttempt((value) => value + 1)}>Try again</button></> : "Preparing the mountain view…"}
      </div>}
    </>
  );
}
