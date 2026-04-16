import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import type { Group, Mesh } from 'three';

function HeroModel() {
  const groupRef = useRef<Group>(null);
  const orbRef = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.2;
      groupRef.current.rotation.x = Math.sin(t * 0.15) * 0.1;
    }
    if (orbRef.current) {
      orbRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.2}>
        <mesh position={[-0.4, 0.2, 0]}>
          <torusKnotGeometry args={[0.95, 0.22, 160, 20]} />
          <meshStandardMaterial color="#e6d4c5" metalness={0.25} roughness={0.22} />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={1.5} floatIntensity={0.8}>
        <mesh ref={orbRef} position={[1.4, -0.5, -0.6]}>
          <icosahedronGeometry args={[0.7, 3]} />
          <MeshDistortMaterial
            color="#f8f5ef"
            roughness={0.15}
            metalness={0.1}
            distort={0.28}
            speed={1.8}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function ThreeHeroScene() {
  return (
    <Canvas
      dpr={[1, 1.4]}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 4], fov: 45 }}
      className="h-full w-full"
    >
      <color attach="background" args={['#f8f6f2']} />
      <fog attach="fog" args={['#f8f6f2', 4, 10]} />

      <ambientLight intensity={0.95} />
      <directionalLight position={[3, 4, 2]} intensity={1.05} color="#f3dcc8" />
      <pointLight position={[-4, -2, 2]} intensity={0.5} color="#ffffff" />

      <Suspense fallback={null}>
        <HeroModel />
      </Suspense>
    </Canvas>
  );
}