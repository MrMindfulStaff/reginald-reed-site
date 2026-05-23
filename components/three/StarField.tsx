"use client";

import { Sparkles } from "@react-three/drei";

/**
 * Cosmic gold haze — two twinkling particle layers for parallax depth.
 * Uses drei <Sparkles> (battle-tested) rather than a custom point shader.
 */
export default function StarField({ reduced = false }: { reduced?: boolean }) {
  return (
    <group>
      {/* Far, dense gold haze */}
      <Sparkles
        count={reduced ? 140 : 420}
        scale={[44, 26, 34]}
        size={3}
        speed={reduced ? 0 : 0.25}
        opacity={0.55}
        color="#C8A35F"
        noise={1.4}
      />
      {/* Near, brighter motes */}
      <Sparkles
        count={reduced ? 70 : 200}
        scale={[28, 18, 24]}
        size={6}
        speed={reduced ? 0 : 0.18}
        opacity={0.85}
        color="#D4B577"
      />
    </group>
  );
}
