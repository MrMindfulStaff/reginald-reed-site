"use client";

import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";
import HoloScene from "./HoloScene";

export default function Experience({ reduced = false }: { reduced?: boolean }) {
  return (
    <Canvas
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.5, 16], fov: 46 }}
      frameloop={reduced ? "demand" : "always"}
      onCreated={({ scene }) => {
        // Depth fade into obsidian so the grid + haze dissolve into the dark.
        scene.fog = new THREE.Fog("#0A0A0A", 16, 46);
      }}
    >
      <HoloScene reduced={reduced} />
      <AdaptiveDpr pixelated />
    </Canvas>
  );
}
