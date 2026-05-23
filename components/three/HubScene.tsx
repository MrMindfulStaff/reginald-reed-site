"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Canvas, useFrame } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import * as THREE from "three";
import SolarHub, { PAGES, nodePosition } from "./SolarHub";

// Real page components, embedded directly (no iframe → no extra WebGL context,
// no full-app reload, no navigation escape). Code-split per node.
const EMBEDDED: Record<string, React.ComponentType> = {
  __overview: dynamic(() => import("@/components/HomeOverview")),
  "/about": dynamic(() => import("@/app/about/page")),
  "/ecosystem": dynamic(() => import("@/app/ecosystem/page")),
  "/research": dynamic(() => import("@/app/research/page")),
  "/media": dynamic(() => import("@/app/media/page")),
  "/blog": dynamic(() => import("@/app/blog/page")),
};

/** Gentle auto-orbit of the camera while nothing is focused. */
function AutoOrbit({
  controls,
  active,
}: {
  controls: React.RefObject<CameraControls | null>;
  active: boolean;
}) {
  useFrame((_, delta) => {
    if (controls.current && !active) {
      controls.current.rotate(delta * 0.05, 0, false);
    }
  });
  return null;
}

export default function HubScene() {
  const controls = useRef<CameraControls>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const [showPage, setShowPage] = useState(false);
  const [frameloop, setFrameloop] = useState<"always" | "never">("always");

  // Pause rendering when the tab is hidden (perf / battery).
  useEffect(() => {
    const onVis = () => setFrameloop(document.hidden ? "never" : "always");
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Move focus into the panel when it opens (keyboard / screen-reader users).
  useEffect(() => {
    if (showPage) {
      (document.querySelector("[data-hub-back]") as HTMLElement | null)?.focus();
    }
  }, [showPage]);

  const focus = useCallback((i: number, pos: THREE.Vector3) => {
    setFocused(i);
    if (i === 0) {
      // The star (Home) — frame it off-centre rather than fly inside it.
      controls.current?.setLookAt(3.6, 1.7, 4.6, 0, 0, 0, true);
    } else {
      const dir = pos.clone().normalize();
      const cam = pos.clone().add(dir.multiplyScalar(2.4)).add(new THREE.Vector3(0, 0.7, 0));
      controls.current?.setLookAt(cam.x, cam.y, cam.z, pos.x, pos.y, pos.z, true);
    }
    window.setTimeout(() => setShowPage(true), 800);
  }, []);

  const back = useCallback(() => {
    setShowPage(false);
    setFocused(null);
    controls.current?.setLookAt(0, 6, 20, 0, 0, 0, true);
  }, []);

  return (
    <div className="fixed inset-0 z-30 bg-obsidian">
      {/* Accessible heading + section navigation for keyboard / screen readers.
          Visually hidden; activates the same zoom-into-page flow. */}
      <h1 className="sr-only">
        Reginald Reed Jr. — interactive solar-system navigation
      </h1>
      <nav aria-label="Site sections" className="sr-only">
        {PAGES.map((p, i) => (
          <button key={p.name} onClick={() => focus(i, nodePosition(i))}>
            {i === 0 ? `${p.name} (introduction)` : p.name}
          </button>
        ))}
      </nav>

      {/* Decorative 3D canvas — hidden from assistive tech (content lives in the
          panels + the standard nav + the SSR fallback page). */}
      <div aria-hidden="true" className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 6, 20], fov: 50 }}
          gl={{ antialias: true, powerPreference: "high-performance" }}
          dpr={[1, 1.5]}
          frameloop={frameloop}
        >
          <ambientLight intensity={0.18} />
          <Suspense fallback={null}>
            <SolarHub focused={focused} paused={focused !== null} onFocus={focus} />
          </Suspense>
          <CameraControls ref={controls} minDistance={1.2} maxDistance={42} />
          <AutoOrbit controls={controls} active={focused !== null} />
        </Canvas>
      </div>

      {/* Idle hint */}
      {focused === null && (
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-silver/70 text-xs uppercase tracking-[0.3em] pointer-events-none">
          Drag to rotate · Click the star or a planet
        </div>
      )}

      {/* Texture attribution (CC BY 4.0) */}
      {focused === null && (
        <div className="absolute bottom-2 right-3 text-silver/30 text-[10px] tracking-wide pointer-events-none">
          Planet textures: Solar System Scope · CC BY 4.0
        </div>
      )}

      {/* Star identity card */}
      {focused === 0 && (
        <div
          className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-500 ${
            showPage ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="holo-glass holo-corners relative max-w-xl w-full p-10 md:p-14 text-center rounded-sm">
            <button
              onClick={back}
              data-hub-back
              className="absolute top-3 right-3 z-10 px-4 py-2 bg-obsidian/80 border border-gold/50 text-gold text-xs uppercase tracking-wider hover:bg-gold hover:text-obsidian transition-colors cursor-pointer"
            >
              ✕ Back to orbit
            </button>
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-5">
              Milwaukee · 53206
            </p>
            <h1 className="holo-text font-heading text-4xl md:text-5xl leading-tight mb-5">
              Reginald Reed Jr.
            </h1>
            <p className="text-silver text-lg mb-8">
              Systems Designer. Liberation Architect. I build integrated
              enterprise ecosystems that reverse urban poverty — where every
              entity feeds the next and liberation compounds.
            </p>
            <button
              onClick={back}
              className="px-8 py-3 border border-holo/50 text-holo text-sm uppercase tracking-wider hover:bg-holo/10 transition-colors cursor-pointer"
            >
              Explore the orbit →
            </button>
          </div>
        </div>
      )}

      {/* Embedded page panel (planets) */}
      {focused !== null && focused !== 0 && (
        <div
          className={`absolute inset-0 flex items-center justify-center p-4 md:p-8 transition-opacity duration-500 ${
            showPage ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="holo-glass holo-corners relative w-full max-w-5xl h-[86vh] overflow-hidden rounded-sm">
            <button
              onClick={back}
              data-hub-back
              className="absolute top-3 right-3 z-10 px-4 py-2 bg-obsidian/80 border border-gold/50 text-gold text-xs uppercase tracking-wider hover:bg-gold hover:text-obsidian transition-colors cursor-pointer"
            >
              ✕ Back to orbit
            </button>
            <div className="absolute top-3 left-4 z-10 text-holo text-xs uppercase tracking-[0.25em] pointer-events-none">
              {PAGES[focused].name}
            </div>
            <div className="hub-embed w-full h-full overflow-y-auto bg-obsidian/90">
              {(() => {
                const Embedded = EMBEDDED[PAGES[focused].href];
                return Embedded ? <Embedded /> : null;
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
