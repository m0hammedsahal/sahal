import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, useGLTF, Float } from '@react-three/drei';
import * as THREE from 'three';
import { random } from 'maath';

function ParticleField({ count = 5000, mouse }) {
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
      points.current.rotation.x += (mouse.current[1] * 0.5 - points.current.rotation.x) * 0.1;
      points.current.rotation.y += (mouse.current[0] * 0.5 - points.current.rotation.y) * 0.1;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#DAA520"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingShapes({ mouse }) {
  const shapesGroup = useRef<THREE.Group>(null!);
  const shapes = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      position: [
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: 0.5 + Math.random() * 0.5,
      speed: 0.1 + Math.random() * 0.2,
      type: Math.floor(Math.random() * 3),
      color: i % 2 === 0 ? "#DAA520" : "#FF4500"
    }));
  }, []);

  useFrame((state, delta) => {
    if (shapesGroup.current) {
      shapesGroup.current.rotation.y += delta * 0.05;
      shapesGroup.current.rotation.x += delta * 0.03;
      
      shapesGroup.current.rotation.x += (mouse.current[1] * 0.2 - shapesGroup.current.rotation.x) * 0.1;
      shapesGroup.current.rotation.y += (mouse.current[0] * 0.2 - shapesGroup.current.rotation.y) * 0.1;
      
      shapesGroup.current.children.forEach((shape, i) => {
        shape.rotation.x += delta * shapes[i].speed;
        shape.rotation.z += delta * shapes[i].speed * 0.5;
        
        const scale = shapes[i].scale + Math.sin(state.clock.elapsedTime * shapes[i].speed) * 0.1;
        shape.scale.set(scale, scale, scale);
      });
    }
  });

  return (
    <group ref={shapesGroup}>
      {shapes.map((shape, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh position={shape.position as [number, number, number]}>
            {shape.type === 0 ? (
              <boxGeometry args={[1, 1, 1]} />
            ) : shape.type === 1 ? (
              <sphereGeometry args={[0.5, 32, 32]} />
            ) : (
              <torusGeometry args={[0.5, 0.2, 16, 32]} />
            )}
            <meshPhongMaterial
              color={shape.color}
              transparent
              opacity={0.6}
              shininess={100}
              specular={new THREE.Color(shape.color === "#DAA520" ? "#FFD700" : "#FF6347")}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function GlowingOrbs({ count = 20, mouse }) {
  const orbs = useRef<THREE.Group>(null!);
  const positions = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        Math.random() * 30 - 15,
        Math.random() * 30 - 15,
        Math.random() * 30 - 15
      ],
      scale: 0.2 + Math.random() * 0.3,
      speed: 0.2 + Math.random() * 0.3,
      color: i % 2 === 0 ? "#DAA520" : "#FF4500"
    }));
  }, [count]);

  useFrame((state, delta) => {
    if (orbs.current) {
      orbs.current.children.forEach((orb, i) => {
        orb.position.y += Math.sin(state.clock.elapsedTime * positions[i].speed) * 0.01;
        
        const material = orb.material as THREE.MeshPhongMaterial;
        material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * positions[i].speed) * 0.2;
      });
    }
  });

  return (
    <group ref={orbs}>
      {positions.map((config, i) => (
        <mesh key={i} position={config.position as [number, number, number]}>
          <sphereGeometry args={[config.scale, 32, 32]} />
          <meshPhongMaterial
            color={config.color}
            emissive={config.color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene({ mouse }) {
  const { camera } = useThree();
  
  useFrame((state) => {
    camera.position.x += (mouse.current[0] * 2 - camera.position.x) * 0.02;
    camera.position.y += (-mouse.current[1] * 2 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#DAA520" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF4500" />
      <ParticleField mouse={mouse} />
      <FloatingShapes mouse={mouse} />
      <GlowingOrbs mouse={mouse} />
    </>
  );
}

const Background3D: React.FC = () => {
  const mouse = useRef<[number, number]>([0, 0]);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current = [
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      ];
    };

    const handleReduceMotion = (event: MediaQueryListEvent) => {
      setReduceMotion(event.matches);
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleReduceMotion);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      mediaQuery.removeEventListener('change', handleReduceMotion);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 25], fov: 60 }}
        style={{ background: 'linear-gradient(to bottom, #0f172a, #1e293b)' }}
        gl={{ antialias: true }}
        dpr={[1, 2]}
      >
        <Scene mouse={mouse} />
        <fog attach="fog" args={['#1e293b', 20, 40]} />
      </Canvas>
    </div>
  );
};

export default Background3D;