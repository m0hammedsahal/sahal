import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { random } from 'maath';

function ParticleField({ count = 5000 }) {
  const points = useRef<THREE.Points>(null!);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    random.inSphere(positions, { radius: 20 });
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x -= delta * 0.1;
      points.current.rotation.y -= delta * 0.05;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ff4d6d"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingRings() {
  const ringsGroup = useRef<THREE.Group>(null!);
  const rings = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      position: [0, i * 2 - 4, 0],
      rotation: [Math.random() * Math.PI, 0, 0],
      scale: 3 + i * 0.5,
      speed: 0.2 + i * 0.1,
    }));
  }, []);

  useFrame((state, delta) => {
    if (ringsGroup.current) {
      ringsGroup.current.rotation.y += delta * 0.1;
      ringsGroup.current.children.forEach((ring, i) => {
        ring.rotation.x += delta * rings[i].speed;
        ring.rotation.z += delta * rings[i].speed * 0.5;
      });
    }
  });

  return (
    <group ref={ringsGroup}>
      {rings.map((ring, i) => (
        <mesh key={i} position={ring.position as [number, number, number]}>
          <torusGeometry args={[ring.scale, 0.02, 16, 100]} />
          <meshBasicMaterial color="#ff4d6d" transparent opacity={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function MovingGradient() {
  const plane = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (plane.current) {
      plane.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={plane} position={[0, 0, -5]} scale={[30, 30, 1]}>
      <planeGeometry />
      <meshBasicMaterial
        color="#ff4d6d"
        transparent
        opacity={0.1}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

const Background3D2: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ background: 'linear-gradient(to bottom, #0f172a, #1e293b)' }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <FloatingRings />
        <MovingGradient />
      </Canvas>
    </div>
  );
};

export default Background3D2;