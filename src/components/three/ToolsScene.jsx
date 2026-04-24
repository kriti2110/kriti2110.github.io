import { useRef, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { tools } from '../../data/resumeData';

// ── Config: tight cluster positions ──────────────────────────────────────────
const CLUSTER = [
  { pos: [-1.5,  0.4, 0], scatterDir: [-1, 1, 0.5]  },
  { pos: [ 0,    0.4, 0], scatterDir: [ 0, 1.2, 0.3] },
  { pos: [ 1.5,  0.4, 0], scatterDir: [ 1, 1, 0.5]  },
  { pos: [-0.9, -0.6, 0], scatterDir: [-1, -1, 0.4]  },
  { pos: [ 0.3, -0.6, 0], scatterDir: [ 0.3, -1.2, 0.5] },
  { pos: [ 1.2, -0.6, 0], scatterDir: [ 1, -1, 0.4]  },
];

const SPRING_K   = 10;
const SPRING_D   = 2.5;

function ToolShape({ tool, cfg, scattered }) {
  const meshRef = useRef();
  const posRef  = useRef([...cfg.pos]);
  const velRef  = useRef([0, 0, 0]);
  const scatterFired = useRef(false);

  useFrame((_, delta) => {
    const target = scattered
      ? cfg.pos.map((v, i) => v + cfg.scatterDir[i] * 3.2)
      : [...cfg.pos];

    const p = posRef.current;
    const v = velRef.current;
    for (let i = 0; i < 3; i++) {
      const f = (target[i] - p[i]) * SPRING_K - v[i] * SPRING_D;
      v[i] += f * delta;
      p[i] += v[i] * delta;
    }
    if (meshRef.current) {
      meshRef.current.position.set(...p);
      meshRef.current.rotation.x += delta * 0.6;
      meshRef.current.rotation.y += delta * 0.9;
    }
  });

  const geom =
    tool.kind === 'sphere' ? <sphereGeometry args={[0.38, 16, 16]} /> :
    tool.kind === 'torus'  ? <torusGeometry  args={[0.3, 0.12, 12, 36]} /> :
                             <boxGeometry    args={[0.55, 0.55, 0.55]} />;

  return (
    <mesh ref={meshRef} position={cfg.pos}>
      {geom}
      <meshStandardMaterial
        color={tool.color}
        emissive={tool.accent}
        emissiveIntensity={0.4}
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  );
}

function Scene({ scattered }) {
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[3, 3, 3]}   intensity={1.4} color="#839958" />
      <pointLight position={[-3, -2, 2]} intensity={0.8} color="#D3968C" />
      {tools.map((tool, i) => (
        <ToolShape key={tool.name} tool={tool} cfg={CLUSTER[i]} scattered={scattered} />
      ))}
    </>
  );
}

// ── Exported canvas embedded inside the Tools window ─────────────────────────
export function ToolsScene({ scattered }) {
  return (
    <div style={{ width: '100%', height: 160, background: 'rgba(10,51,35,0.06)', borderRadius: 4 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Scene scattered={scattered} />
      </Canvas>
    </div>
  );
}
