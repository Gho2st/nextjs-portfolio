"use client";
import React, { useMemo, useRef, useEffect, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Trail, Float, Line, Sphere } from "@react-three/drei";
import classes from "./Animations.module.css";

export default function Animation() {
  return (
    <div className={classes.animation}>
      {/* Suspense to lazy load for performance */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
            <Atom />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}

function Atom(props) {
  // Reduced number of points for performance
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        50 // Reduced from 100 to 50 points
      ),
    []
  );
  return (
    <group {...props}>
      {/* 3 orbiting lines with optimized performance */}
      <Line worldUnits points={points} color="turquoise" lineWidth={0.3} />
      <Line
        worldUnits
        points={points}
        color="turquoise"
        lineWidth={0.3}
        rotation={[0, 0, 1]}
      />
      <Line
        worldUnits
        points={points}
        color="turquoise"
        lineWidth={0.3}
        rotation={[0, 0, -1]}
      />
      {/* Three electrons with different speeds and optimized animation */}
      <Electron position={[0, 0, 0.5]} speed={3} />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, Math.PI / 3]}
        speed={6.5}
      />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, -Math.PI / 3]}
        speed={7}
      />
      {/* Optimized Sphere with fewer segments */}
      <Sphere args={[0.55, 32, 32]}>
        {" "}
        {/* Reduced from 64 to 32 segments */}
        <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
      </Sphere>
    </group>
  );
}

function Electron({ radius = 2.75, speed = 6, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });
  return (
    <group {...props}>
      <Trail
        local
        width={3}
        length={6}
        color={new THREE.Color(2, 1, 10)}
        attenuation={(t) => t * t}
      >
        <mesh ref={ref}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  );
}
