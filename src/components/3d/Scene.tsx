'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function GlowingOrb({ position, color, size, speed }: { position: [number, number, number], color: string, size: number, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * speed) * 1.5;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.getElapsedTime() * speed * 0.8) * 1.5;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2} position={position}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[size, 1]} />
        <meshStandardMaterial 
          color={color} 
          wireframe 
          transparent 
          opacity={0.15} 
          emissive={color}
          emissiveIntensity={0.8}
        />
      </mesh>
    </Float>
  );
}

export function Scene() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
        
        <GlowingOrb position={[-6, 3, -5]} color="#3b82f6" size={2} speed={0.2} />
        <GlowingOrb position={[6, -4, -8]} color="#06b6d4" size={2.5} speed={0.15} />
        <GlowingOrb position={[4, 5, -10]} color="#8b5cf6" size={1.5} speed={0.3} />
        <GlowingOrb position={[-4, -5, -6]} color="#3b82f6" size={1} speed={0.25} />
      </Canvas>
    </div>
  );
}
