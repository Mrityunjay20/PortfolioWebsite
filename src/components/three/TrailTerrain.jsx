import { Canvas, useFrame } from "@react-three/fiber";
import { Line, OrbitControls } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";

const elevation = (x, y) => (
  Math.sin(x * 0.9) * 0.28 +
  Math.cos(y * 1.18) * 0.22 +
  Math.sin((x + y) * 1.55) * 0.13 +
  Math.exp(-((x - 1.9) ** 2 + (y + 0.4) ** 2) / 3.8) * 1.05 +
  Math.exp(-((x + 2.2) ** 2 + (y - 0.9) ** 2) / 2.7) * 0.85
);

function Terrain() {
  const geometry = useRef();
  const wireGeometry = useRef();
  const group = useRef();

  useLayoutEffect(() => {
    [geometry.current, wireGeometry.current].forEach((surface) => {
      const positions = surface.attributes.position;
      for (let index = 0; index < positions.count; index += 1) {
        const x = positions.getX(index);
        const y = positions.getY(index);
        positions.setZ(index, elevation(x, y));
      }
      positions.needsUpdate = true;
      surface.computeVertexNormals();
    });
  }, []);

  useFrame((state, delta) => {
    if (group.current) group.current.rotation.z += delta * 0.015;
  });

  const triund = [[-3.5, -2.1], [-2.9, -1.5], [-2.4, -0.8], [-2.15, 0], [-2.05, .9]];
  const kheerganga = [[.7, -2.4], [1.1, -1.6], [1.5, -.7], [1.75, .2], [1.9, 1.05]];
  const route = (points) => points.map(([x, y]) => [x, y, elevation(x, y) + .1]);

  return (
    <group ref={group} rotation={[-0.03, 0, -0.05]}>
      <mesh rotation={[0, 0, 0]}>
        <planeGeometry ref={geometry} args={[10, 7.2, 55, 42]} />
        <meshStandardMaterial color="#243028" roughness={.92} metalness={.08} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, .018]}>
        <planeGeometry ref={wireGeometry} args={[10, 7.2, 55, 42]} />
        <meshBasicMaterial color="#8ca696" wireframe transparent opacity={.2} />
      </mesh>
      <Line points={route(triund)} color="#b8f24b" lineWidth={2.1} />
      <Line points={route(kheerganga)} color="#87d8ca" lineWidth={2.1} />
      <mesh position={[-2.05, .9, elevation(-2.05, .9) + .16]}>
        <sphereGeometry args={[.1, 20, 20]} /><meshBasicMaterial color="#b8f24b" />
      </mesh>
      <mesh position={[1.9, 1.05, elevation(1.9, 1.05) + .16]}>
        <sphereGeometry args={[.1, 20, 20]} /><meshBasicMaterial color="#87d8ca" />
      </mesh>
    </group>
  );
}

export default function TrailTerrain() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, -8.7, 6.7], fov: 42 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={1.8} />
      <directionalLight position={[-3, -4, 8]} intensity={3.2} color="#ece9df" />
      <pointLight position={[4, 2, 5]} intensity={12} color="#87d8ca" />
      <Terrain />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={.7} maxPolarAngle={1.25} />
    </Canvas>
  );
}
