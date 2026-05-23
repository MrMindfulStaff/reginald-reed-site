"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * The JARVIS-style holographic core: a gold wireframe icosahedron with a
 * counter-rotating cyan inner shell and a glowing ivory center.
 * Outer `tilt` group does mouse parallax; inner `spin` group auto-rotates.
 */
export default function HoloCore({ reduced = false }: { reduced?: boolean }) {
  const tilt = useRef<THREE.Group>(null);
  const spin = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);
  const pointer = useThree((s) => s.pointer);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (spin.current && !reduced) {
      spin.current.rotation.y += delta * 0.12;
      spin.current.rotation.x += delta * 0.04;
    }
    if (tilt.current) {
      const tx = reduced ? 0 : -pointer.y * 0.25;
      const ty = reduced ? 0 : pointer.x * 0.25;
      tilt.current.rotation.x += (tx - tilt.current.rotation.x) * 0.05;
      tilt.current.rotation.y += (ty - tilt.current.rotation.y) * 0.05;
    }
    if (inner.current && !reduced) {
      inner.current.rotation.y -= delta * 0.2;
      const s = 1 + Math.sin(t * (Math.PI / 4)) * 0.05;
      inner.current.scale.setScalar(s);
    }
  });

  return (
    <group ref={tilt}>
      <group ref={spin}>
        {/* Outer gold shell */}
        <mesh>
          <icosahedronGeometry args={[3, 1]} />
          <meshBasicMaterial
            color="#C8A35F"
            wireframe
            transparent
            opacity={0.5}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
        {/* Inner cyan shell */}
        <mesh ref={inner}>
          <icosahedronGeometry args={[1.8, 0]} />
          <meshBasicMaterial
            color="#4FD8E8"
            wireframe
            transparent
            opacity={0.4}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
        {/* Glowing center */}
        <mesh>
          <sphereGeometry args={[0.45, 24, 24]} />
          <meshBasicMaterial
            color="#F5F0E8"
            transparent
            opacity={0.55}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>
    </group>
  );
}
