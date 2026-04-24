import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// ── Pearlescent 3D cursor star that follows the mouse ─────────────────────────
function CursorStar({ mouseRef }) {
  const meshRef = useRef();
  const { viewport } = useThree();

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const { x, y } = mouseRef.current;
    // Convert screen px → world coords
    const wx =  (x / window.innerWidth  - 0.5) * viewport.width;
    const wy = -(y / window.innerHeight - 0.5) * viewport.height;

    // Elastic lag — loose spring lerp
    meshRef.current.position.x += (wx - meshRef.current.position.x) * 7 * delta;
    meshRef.current.position.y += (wy - meshRef.current.position.y) * 7 * delta;

    // Gentle continuous spin
    meshRef.current.rotation.x += delta * 0.9;
    meshRef.current.rotation.y += delta * 1.2;
    meshRef.current.rotation.z += delta * 0.4;
  });

  return (
    <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.2}>
      <mesh ref={meshRef} scale={0.28}>
        {/* Icosahedron ≈ star/gem shape */}
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color="#F0E6FF"
          emissive="#C9B8FF"
          emissiveIntensity={0.35}
          metalness={0.75}
          roughness={0.05}
          iridescence={1}
          iridescenceIOR={1.45}
          sheen={0.9}
          sheenColor={new THREE.Color('#FFB6C1')}
          sheenRoughness={0.08}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>
    </Float>
  );
}

// ── Ambient particles that drift in the canvas ────────────────────────────────
function AmbientParticles() {
  const pointsRef = useRef();
  const positions = new Float32Array(60 * 3);
  for (let i = 0; i < 60; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
  }
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={60} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#D3968C" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

// ── Canvas wrapper (fixed fullscreen, pointer-events none) ────────────────────
export function CursorScene({ mouseRef }) {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 99990 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 3]}   intensity={1.8} color="#C9B8FF" />
        <pointLight position={[-3, -2, 2]} intensity={0.9} color="#D3968C" />
        <CursorStar mouseRef={mouseRef} />
        <AmbientParticles />
      </Canvas>
    </div>
  );
}
