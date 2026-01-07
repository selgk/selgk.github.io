import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating particles
function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const particlesCount = 2000;

  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.03;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Floating geometric shapes
function FloatingGeometry({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[0.4, 0]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
}

// Glowing orbs
function GlowingOrb({ position, color, size }: { position: [number, number, number]; color: string; size: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

// Connecting lines network
function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null);

  const { positions, colors } = useMemo(() => {
    const nodeCount = 30;
    const nodes: THREE.Vector3[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ));
    }

    const linePositions: number[] = [];
    const lineColors: number[] = [];
    const maxDistance = 5;

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const distance = nodes[i].distanceTo(nodes[j]);
        if (distance < maxDistance) {
          linePositions.push(
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z
          );
          const intensity = 1 - distance / maxDistance;
          lineColors.push(
            0.4, 0.6, 0.9, intensity * 0.3,
            0.2, 0.8, 0.8, intensity * 0.3
          );
        }
      }
    }

    return {
      positions: new Float32Array(linePositions),
      colors: new Float32Array(lineColors)
    };
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      linesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#60a5fa"
        transparent
        opacity={0.2}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

// Torus knot
function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[3, 0, -5]}>
      <torusKnotGeometry args={[1.5, 0.4, 100, 16]} />
      <meshBasicMaterial
        color="#8b5cf6"
        transparent
        opacity={0.15}
        wireframe
      />
    </mesh>
  );
}

// Main scene component
function Scene() {
  return (
    <>
      <ParticleField />
      <ConnectionLines />
      <FloatingTorus />

      {/* Floating geometric shapes */}
      <FloatingGeometry position={[-4, 2, -3]} color="#22d3ee" speed={0.8} />
      <FloatingGeometry position={[4, -1, -4]} color="#8b5cf6" speed={0.6} />
      <FloatingGeometry position={[-2, -2, -2]} color="#ec4899" speed={1} />
      <FloatingGeometry position={[2, 3, -5]} color="#60a5fa" speed={0.7} />

      {/* Glowing orbs */}
      <GlowingOrb position={[-5, 3, -6]} color="#06b6d4" size={1.5} />
      <GlowingOrb position={[5, -2, -4]} color="#8b5cf6" size={1.2} />
      <GlowingOrb position={[0, 2, -8]} color="#ec4899" size={2} />
    </>
  );
}

// Export the background component
export default function ThreeBackground() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0e7490 100%)',
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
