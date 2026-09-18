import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { Component, useMemo, useRef } from "react";
import * as THREE from "three";

function StaticSignalForm() {
  return (
    <div className="hero-canvas-fallback" role="img" aria-label="Abstract digital signal form">
      <span className="fallback-orbit fallback-orbit-wide" />
      <span className="fallback-orbit fallback-orbit-tall" />
      <span className="fallback-core" />
    </div>
  );
}

class HeroCanvasBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? <StaticSignalForm /> : this.props.children;
  }
}

function SignalForm() {
  const group = useRef();
  const points = useRef();

  const positions = useMemo(() => {
    const data = [];
    for (let index = 0; index < 180; index += 1) {
      const phi = Math.acos(-1 + (2 * index) / 180);
      const theta = Math.sqrt(180 * Math.PI) * phi;
      const radius = 2.45 + Math.sin(index * 1.7) * 0.08;
      data.push(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      );
    }
    return new Float32Array(data);
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.16, 0.03);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -state.pointer.x * 0.12, 0.03);
    if (points.current) points.current.rotation.y -= delta * 0.04;
  });

  return (
    <group ref={group} rotation={[0.15, -0.35, 0.1]}>
      <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.35}>
        <mesh>
          <icosahedronGeometry args={[1.76, 3]} />
          <meshStandardMaterial color="#b8f24b" roughness={0.2} metalness={0.12} flatShading />
        </mesh>
        <mesh scale={1.09}>
          <icosahedronGeometry args={[1.76, 2]} />
          <meshBasicMaterial color="#e9e5d8" wireframe transparent opacity={0.24} />
        </mesh>
      </Float>
      <mesh rotation={[Math.PI / 2.25, 0.1, 0]}>
        <torusGeometry args={[2.58, 0.018, 12, 180]} />
        <meshBasicMaterial color="#e9e5d8" transparent opacity={0.72} />
      </mesh>
      <mesh rotation={[Math.PI / 3.2, Math.PI / 2.3, 0.4]}>
        <torusGeometry args={[2.9, 0.01, 10, 180]} />
        <meshBasicMaterial color="#b8f24b" transparent opacity={0.5} />
      </mesh>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#f5f2e9" size={0.035} transparent opacity={0.72} sizeAttenuation />
      </points>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <HeroCanvasBoundary>
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 8], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        fallback={<StaticSignalForm />}
      >
        <ambientLight intensity={1.7} />
        <directionalLight position={[4, 5, 6]} intensity={3.2} color="#f5f2e9" />
        <pointLight position={[-3, -2, 3]} intensity={14} color="#87d8ca" />
        <SignalForm />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.35} />
      </Canvas>
    </HeroCanvasBoundary>
  );
}
