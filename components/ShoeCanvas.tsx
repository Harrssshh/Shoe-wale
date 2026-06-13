"use client";

import { Component, Suspense, useRef, useState, type ReactNode, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useScroll, useTransform } from "framer-motion";
import * as THREE from "three";
import type { Group } from "three";
import { useMediaQuery } from "@/lib/useMediaQuery";

class ModelErrorBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function ShoePlaceholder() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    meshRef.current.rotation.y += 0.015;
  });

  return (
    <mesh ref={meshRef} scale={1.2}>
      <boxGeometry args={[1.8, 0.6, 0.9]} />
      <meshStandardMaterial color="#222222" metalness={0.5} roughness={0.35} />
    </mesh>
  );
}

function ShoeGLTFModel({
  groupRef,
  isDragging,
}: {
  groupRef: RefObject<Group>;
  isDragging: boolean;
}) {
  const { scene } = useGLTF("/shoe.glb");
  const { scrollYProgress } = useScroll();
  const scrollRotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4]);

  useFrame((state) => {
    if (!groupRef.current || isDragging) return;
    const autoRotation = state.clock.elapsedTime * 0.4;
    groupRef.current.rotation.y = scrollRotation.get() + autoRotation;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={groupRef} scale={1.8}>
      <primitive object={scene} />
    </group>
  );
}

function ShoeModel({ isDragging }: { isDragging: boolean }) {
  const groupRef = useRef<Group>(null);

  return (
    <ModelErrorBoundary fallback={<ShoePlaceholder />}>
      <Suspense fallback={<ShoePlaceholder />}>
        <ShoeGLTFModel groupRef={groupRef} isDragging={isDragging} />
      </Suspense>
    </ModelErrorBoundary>
  );
}

function Scene() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-3, 2, 3]} intensity={0.8} color="#FF4500" />
      <ShoeModel isDragging={isDragging} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
        enableDamping
        dampingFactor={0.05}
        onStart={() => setIsDragging(true)}
        onEnd={() => setIsDragging(false)}
      />
      <Environment preset="night" />
    </>
  );
}

export default function ShoeCanvas() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) return null;

  return (
    <div
      className="hidden h-[360px] w-full md:block"
      style={{ WebkitBackfaceVisibility: "hidden" }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/shoe.glb");
