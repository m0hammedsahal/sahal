// src/components/3DCard.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';

const ThreeDCard = ({ position, color }) => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.01; // Rotate the card
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[3, 4, 0.2]} />
      <MeshWobbleMaterial factor={0.6} speed={1} color={color} />
    </mesh>
  );
};

export default ThreeDCard;