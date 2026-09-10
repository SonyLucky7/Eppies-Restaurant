"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function Plate() {
  const meshRef = useRef<THREE.Group>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    const targetX = mousePos.current.y * 0.15;
    const targetY = mousePos.current.x * 0.2;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetX + Math.sin(t * 0.5) * 0.03,
      0.05
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetY + t * 0.1,
      0.05
    );
  });

  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mousePos.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    });
  }

  const plateMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#F5F0E8",
        roughness: 0.3,
        metalness: 0.05,
      }),
    []
  );

  const terracottaMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#C4704B",
        roughness: 0.6,
        metalness: 0.05,
      }),
    []
  );

  const sageMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#8B9A7E",
        roughness: 0.7,
        metalness: 0,
      }),
    []
  );

  const creamMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#E8DFD1",
        roughness: 0.5,
        metalness: 0.02,
      }),
    []
  );

  const brownMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#4A3728",
        roughness: 0.8,
        metalness: 0,
      }),
    []
  );

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Main plate */}
      <mesh material={plateMaterial} castShadow receiveShadow>
        <cylinderGeometry args={[2.2, 2.4, 0.15, 64]} />
      </mesh>
      {/* Plate rim */}
      <mesh position={[0, 0.08, 0]} material={plateMaterial}>
        <torusGeometry args={[2.3, 0.08, 16, 64]} />
      </mesh>

      {/* Food elements — stylized geometric composition */}
      {/* Central "egg" — smooth sphere */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
        <mesh position={[0, 0.5, 0]} material={creamMaterial} castShadow>
          <sphereGeometry args={[0.45, 32, 32]} />
        </mesh>
        {/* Yolk */}
        <mesh position={[0, 0.7, 0.05]} material={terracottaMaterial} castShadow>
          <sphereGeometry args={[0.2, 32, 32]} />
        </mesh>
      </Float>

      {/* "Toast" — rounded box */}
      <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.2}>
        <mesh
          position={[-1, 0.35, 0.5]}
          rotation={[0, 0.3, 0.05]}
          material={brownMaterial}
          castShadow
        >
          <boxGeometry args={[0.9, 0.12, 0.7]} />
        </mesh>
        <mesh
          position={[-1, 0.45, 0.5]}
          rotation={[0, 0.3, 0.05]}
          material={brownMaterial}
          castShadow
        >
          <boxGeometry args={[0.85, 0.08, 0.65]} />
        </mesh>
      </Float>

      {/* "Sausage links" — capsules */}
      <Float speed={1.8} rotationIntensity={0.08} floatIntensity={0.25}>
        <mesh
          position={[0.9, 0.3, -0.6]}
          rotation={[0, -0.5, Math.PI / 2]}
          material={terracottaMaterial}
          castShadow
        >
          <capsuleGeometry args={[0.1, 0.5, 8, 16]} />
        </mesh>
        <mesh
          position={[1.1, 0.3, -0.3]}
          rotation={[0, -0.3, Math.PI / 2]}
          material={terracottaMaterial}
          castShadow
        >
          <capsuleGeometry args={[0.1, 0.45, 8, 16]} />
        </mesh>
      </Float>

      {/* "Greens" — flat torus shapes */}
      <Float speed={2.2} rotationIntensity={0.12} floatIntensity={0.35}>
        <mesh
          position={[-0.5, 0.25, -0.8]}
          rotation={[0.2, 0, 0.1]}
          material={sageMaterial}
          castShadow
        >
          <torusGeometry args={[0.3, 0.06, 8, 24]} />
        </mesh>
        <mesh
          position={[-0.2, 0.3, -0.6]}
          rotation={[-0.1, 0.5, 0]}
          material={sageMaterial}
          castShadow
        >
          <torusGeometry args={[0.2, 0.05, 8, 24]} />
        </mesh>
      </Float>

      {/* "Coffee cup" — cylinder + handle */}
      <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.15}>
        <group position={[1.8, 0.4, 0.8]} rotation={[0, -0.8, 0]}>
          <mesh material={plateMaterial} castShadow>
            <cylinderGeometry args={[0.25, 0.22, 0.45, 32]} />
          </mesh>
          {/* Cup handle */}
          <mesh
            position={[0.28, 0, 0]}
            rotation={[0, 0, Math.PI / 2]}
            material={plateMaterial}
          >
            <torusGeometry args={[0.12, 0.03, 8, 16, Math.PI]} />
          </mesh>
          {/* Coffee surface */}
          <mesh position={[0, 0.2, 0]} material={brownMaterial}>
            <circleGeometry args={[0.23, 32]} />
            <meshStandardMaterial color="#4A3728" roughness={0.1} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

function Scene() {
  const { viewport } = useThree();
  const scale = Math.min(viewport.width / 8, 1);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
        color="#FFF5E6"
      />
      <directionalLight position={[-3, 4, -2]} intensity={0.3} color="#E8DFD1" />
      <pointLight position={[0, 3, 0]} intensity={0.5} color="#FFE4CC" />

      <group scale={scale}>
        <Plate />
      </group>

      <Environment preset="apartment" environmentIntensity={0.3} />
    </>
  );
}

export function Hero3D() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-brown-200 border-t-terracotta animate-spin" />
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 4, 6], fov: 35 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
