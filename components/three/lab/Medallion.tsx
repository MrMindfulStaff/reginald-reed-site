"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "/models/hr-medallion.glb";

/**
 * The real forged-gold House Reed medallion — a Higgsfield-generated PBR GLB.
 * Continuously auto-spins; PresentationControls (in the stage) layers user
 * drag on top. We nudge envMapIntensity so the polished gold really catches
 * the studio reflections.
 */
export default function Medallion({ spin = true }: { spin?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_URL);

  // One-time material polish: make sure every surface reflects the environment.
  scene.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (mesh.isMesh) {
      const mat = mesh.material as THREE.MeshStandardMaterial;
      if (mat && "envMapIntensity" in mat) {
        mat.envMapIntensity = 1.6;
        mat.needsUpdate = true;
      }
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    }
  });

  useFrame((_, delta) => {
    if (spin && group.current) {
      group.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={group}>
      <Center>
        <primitive object={scene} scale={1.15} />
      </Center>
    </group>
  );
}

useGLTF.preload(MODEL_URL);
