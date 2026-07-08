"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  PresentationControls,
  ContactShadows,
  Float,
  AdaptiveDpr,
  Html,
  useProgress,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import Medallion from "./Medallion";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: "#C8A35F", fontFamily: "Georgia, serif", letterSpacing: "0.15em", fontSize: 13 }}>
        FORGING · {Math.round(progress)}%
      </div>
    </Html>
  );
}

/**
 * Self-contained studio for the House Reed medallion. No external HDRI fetch —
 * the environment is built from Lightformers tinted with the brand palette
 * (warm key, holo-cyan rim, gold fill) so the polished gold reflects OUR colors.
 */
export default function MedallionStage() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.05,
      }}
      camera={{ position: [0, 0, 6], fov: 34 }}
    >
      <color attach="background" args={["#0A0A0A"]} />

      <ambientLight intensity={0.15} />
      <spotLight
        position={[5, 8, 6]}
        angle={0.35}
        penumbra={1}
        intensity={120}
        color="#fff2d6"
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <pointLight position={[-6, -2, -4]} intensity={40} color="#4FD8E8" />

      <Suspense fallback={<Loader />}>
        <PresentationControls
          global
          snap
          rotation={[0, 0, 0]}
          polar={[-0.35, 0.35]}
          azimuth={[-0.7, 0.7]}
        >
          <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.5}>
            <Medallion spin />
          </Float>
        </PresentationControls>

        <ContactShadows
          position={[0, -1.9, 0]}
          opacity={0.55}
          scale={12}
          blur={2.6}
          far={4}
          color="#000000"
        />

        {/* Studio environment built from brand-tinted lightformers */}
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={2.2} color="#fff6e6" position={[0, 3, 4]} scale={[8, 6, 1]} />
          <Lightformer form="rect" intensity={3} color="#4FD8E8" position={[-5, 1, -2]} scale={[3, 8, 1]} />
          <Lightformer form="rect" intensity={1.4} color="#C8A35F" position={[5, -1, 2]} scale={[8, 5, 1]} />
          <Lightformer form="ring" intensity={2} color="#ffffff" position={[0, 4, -3]} scale={4} />
        </Environment>
      </Suspense>

      <EffectComposer>
        <Bloom mipmapBlur intensity={0.5} luminanceThreshold={0.8} luminanceSmoothing={0.3} />
      </EffectComposer>

      <AdaptiveDpr pixelated />
    </Canvas>
  );
}
