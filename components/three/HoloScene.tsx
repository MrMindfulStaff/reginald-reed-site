"use client";

import { Grid } from "@react-three/drei";
import StarField from "./StarField";
import HoloCore from "./HoloCore";

/**
 * Composes the holographic hub: cosmic gold haze + the JARVIS core +
 * an infinite holographic floor grid receding into the obsidian fog.
 */
export default function HoloScene({ reduced = false }: { reduced?: boolean }) {
  return (
    <>
      <StarField reduced={reduced} />
      <HoloCore reduced={reduced} />
      <Grid
        position={[0, -4.5, 0]}
        args={[80, 80]}
        infiniteGrid
        cellSize={1.4}
        cellThickness={0.5}
        cellColor="#C8A35F"
        sectionSize={7}
        sectionThickness={1}
        sectionColor="#4FD8E8"
        fadeDistance={52}
        fadeStrength={3}
      />
    </>
  );
}
