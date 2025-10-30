"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { Mesh } from "three";
import { animate } from "animejs";

function AnimatedCube() {
  const meshRef = useRef<Mesh>(null);

  useEffect(() => {
    if (meshRef.current) {
      animate(meshRef.current.rotation, {
        y: Math.PI * 2,
        duration: 10000,
        loop: true,
        ease: "linear",
      });

      animate(meshRef.current.position, {
        y: [0.5, -0.5],
        duration: 2000,
        direction: "alternate",
        loop: true,
        ease: "inOut(2)",
      });
    }
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#6366f1"
        metalness={0.7}
        roughness={0.2}
        wireframe={false}
      />
    </mesh>
  );
}

function AnimatedSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null);

  useEffect(() => {
    if (meshRef.current) {
      animate(meshRef.current.scale, {
        x: [1, 1.2, 1],
        y: [1, 1.2, 1],
        z: [1, 1.2, 1],
        duration: 3000,
        loop: true,
        ease: "inOut(2)",
      });
    }
  }, []);

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="#a855f7"
        metalness={0.5}
        roughness={0.3}
        wireframe={false}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#60a5fa" />
        <AnimatedCube />
        <AnimatedSphere position={[-3, 2, 0]} />
        <AnimatedSphere position={[3, -1, 0]} />
      </Canvas>
    </div>
  );
}
