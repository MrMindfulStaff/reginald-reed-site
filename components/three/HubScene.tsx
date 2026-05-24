"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Canvas, useFrame } from "@react-three/fiber";
import { CameraControls, useProgress } from "@react-three/drei";
import * as THREE from "three";
import SolarHub, { PAGES, nodePosition } from "./SolarHub";
import { PLANET_MOONS, hasMoons } from "@/lib/hubMoons";

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

const ORBIT_CAM: [number, number, number] = [0, 6, 20];
const INTRO_CAM: [number, number, number] = [0, 22, 95]; // far start for the fly-in

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
  const focusPos = useRef(new THREE.Vector3());
  const [focused, setFocused] = useState<number | null>(null);
  const [moon, setMoon] = useState<number | null>(null);
  const [pageEmbed, setPageEmbed] = useState(false); // full page (a11y / no-moon planets)
  const [showPage, setShowPage] = useState(false);
  const [frameloop, setFrameloop] = useState<"always" | "never">("always");

  // Preloader + cinematic intro
  const { progress, active } = useProgress();
  const sawActive = useRef(false);
  const introStarted = useRef(false);
  const [phase, setPhase] = useState<"loading" | "intro" | "ready">("loading");

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

  // Slower, more cinematic camera transitions once the controls exist.
  useEffect(() => {
    const id = window.setInterval(() => {
      if (controls.current) {
        controls.current.smoothTime = 0.55;
        controls.current.draggingSmoothTime = 0.18;
        window.clearInterval(id);
      }
    }, 60);
    return () => window.clearInterval(id);
  }, []);

  // Cinematic fly-in from deep space, fired once assets are loaded.
  const startIntro = useCallback(() => {
    if (introStarted.current) return;
    introStarted.current = true;
    setPhase("intro");
    const c = controls.current;
    if (c) {
      c.enabled = false;
      c.smoothTime = 1.8;
      c.setLookAt(...ORBIT_CAM, 0, 0, 0, true);
      window.setTimeout(() => {
        const cc = controls.current;
        if (cc) {
          cc.smoothTime = 0.55;
          cc.maxDistance = 42;
          cc.enabled = true;
        }
        setPhase("ready");
      }, 3000);
    } else {
      setPhase("ready");
    }
  }, []);

  useEffect(() => {
    if (active) sawActive.current = true;
  }, [active]);

  useEffect(() => {
    if (phase === "loading" && sawActive.current && progress >= 100) startIntro();
  }, [progress, active, phase, startIntro]);

  // Failsafe so the preloader never gets stuck.
  useEffect(() => {
    const t = window.setTimeout(() => startIntro(), 8000);
    return () => window.clearTimeout(t);
  }, [startIntro]);

  const framePlanet = useCallback((pos: THREE.Vector3, dist: number, up: number) => {
    const dir = pos.clone().normalize();
    const cam = pos
      .clone()
      .add(dir.multiplyScalar(dist))
      .add(new THREE.Vector3(0, up, 0));
    controls.current?.setLookAt(cam.x, cam.y, cam.z, pos.x, pos.y, pos.z, true);
  }, []);

  const frameMoons = useCallback(
    (pos: THREE.Vector3) => framePlanet(pos, 4.8, 1.2),
    [framePlanet]
  );

  const focus = useCallback(
    (i: number, pos: THREE.Vector3) => {
      setFocused(i);
      setMoon(null);
      setPageEmbed(false);
      if (i === 0) {
        controls.current?.setLookAt(3.6, 1.7, 4.6, 0, 0, 0, true);
        window.setTimeout(() => setShowPage(true), 800);
      } else if (hasMoons(i)) {
        focusPos.current.copy(pos);
        frameMoons(pos); // reveal moons, no panel
      } else {
        framePlanet(pos, 2.4, 0.7);
        window.setTimeout(() => setShowPage(true), 800);
      }
    },
    [frameMoons, framePlanet]
  );

  // Keyboard / screen-reader entry: open the full page (accessible content).
  const openSection = useCallback(
    (i: number) => {
      if (hasMoons(i)) {
        setFocused(i);
        setMoon(null);
        setPageEmbed(true);
        framePlanet(nodePosition(i), 2.6, 0.7);
        window.setTimeout(() => setShowPage(true), 800);
      } else {
        focus(i, nodePosition(i));
      }
    },
    [focus, framePlanet]
  );

  const focusMoon = useCallback(
    (mi: number, moonWorld: THREE.Vector3, planetWorld: THREE.Vector3) => {
      setMoon(mi);
      const dir = moonWorld.clone().sub(planetWorld).normalize();
      const cam = moonWorld
        .clone()
        .add(dir.multiplyScalar(0.95))
        .add(new THREE.Vector3(0, 0.25, 0));
      controls.current?.setLookAt(
        cam.x, cam.y, cam.z,
        moonWorld.x, moonWorld.y, moonWorld.z,
        true
      );
      window.setTimeout(() => setShowPage(true), 700);
    },
    []
  );

  const back = useCallback(() => {
    const wasMoon = moon !== null;
    const animating = showPage; // a panel is currently visible
    setShowPage(false);

    // Camera moves immediately so the panel scales out as the camera pulls back.
    if (wasMoon) frameMoons(focusPos.current);
    else controls.current?.setLookAt(...ORBIT_CAM, 0, 0, 0, true);

    const clear = () => {
      if (wasMoon) setMoon(null);
      else {
        setFocused(null);
        setPageEmbed(false);
      }
    };
    if (animating) window.setTimeout(clear, 450);
    else clear();
  }, [moon, showPage, frameMoons]);

  const moonsMode = focused !== null && hasMoons(focused) && !pageEmbed;
  const showEmbed =
    focused !== null && focused !== 0 && (pageEmbed || !hasMoons(focused));
  const moonData =
    focused !== null && moon !== null ? PLANET_MOONS[focused]?.[moon] : null;

  return (
    <>
      {/* Branded preloader (sibling of the hub so it sits above the nav) */}
      {phase !== "ready" && (
        <div
          className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-obsidian transition-opacity duration-700 ${
            phase === "loading" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <p className="text-gold text-xs uppercase tracking-[0.4em] mb-6">
            Milwaukee · 53206
          </p>
          <h1 className="holo-text font-heading text-4xl md:text-5xl mb-10">
            Reginald Reed Jr.
          </h1>
          <div className="w-52 h-px bg-gold/20 overflow-hidden">
            <div
              className="h-full bg-gold"
              style={{
                width: `${Math.min(100, Math.round(progress))}%`,
                transition: "width 0.2s",
              }}
            />
          </div>
          <p className="text-silver/50 text-[10px] uppercase tracking-[0.3em] mt-4">
            Entering orbit · {Math.min(100, Math.round(progress))}%
          </p>
        </div>
      )}

      <div className="fixed inset-0 z-30 bg-obsidian">
        {/* Accessible heading + section navigation for keyboard / screen readers. */}
      <h1 className="sr-only">
        Reginald Reed Jr. — interactive solar-system navigation
      </h1>
      <nav aria-label="Site sections" className="sr-only">
        {PAGES.map((p, i) => (
          <button key={p.name} onClick={() => openSection(i)}>
            {i === 0 ? `${p.name} (introduction)` : p.name}
          </button>
        ))}
      </nav>

      {/* Decorative 3D canvas — hidden from assistive tech. */}
      <div aria-hidden="true" className="absolute inset-0">
        <Canvas
          camera={{ position: INTRO_CAM, fov: 50 }}
          gl={{ antialias: true, powerPreference: "high-performance" }}
          dpr={[1, 1.5]}
          frameloop={frameloop}
        >
          <ambientLight intensity={0.18} />
          <Suspense fallback={null}>
            <SolarHub
              focused={focused}
              paused={focused !== null}
              onFocus={focus}
              moonsRevealed={moonsMode}
              moon={moon}
              onFocusMoon={focusMoon}
            />
          </Suspense>
          <CameraControls ref={controls} minDistance={0.6} maxDistance={120} />
          <AutoOrbit
            controls={controls}
            active={focused !== null || phase !== "ready"}
          />
        </Canvas>
      </div>

      {/* Cinematic vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, transparent 48%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Idle hint + attribution */}
      {focused === null && (
        <>
          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-silver/70 text-xs uppercase tracking-[0.3em] pointer-events-none">
            Drag to rotate · Click the star or a planet
          </div>
          <div className="absolute bottom-2 right-3 text-silver/30 text-[10px] tracking-wide pointer-events-none text-right">
            Milky Way: ESO/S. Brunier · Planet textures: Solar System Scope · CC BY 4.0
          </div>
        </>
      )}

      {/* Moons mode — explore sub-sections */}
      {moonsMode && moon === null && focused !== null && (
        <>
          <button
            data-hub-back
            onClick={back}
            className="absolute top-20 right-6 z-10 px-5 py-2.5 bg-obsidian/85 border border-gold/60 text-gold text-xs uppercase tracking-wider hover:bg-gold hover:text-obsidian transition-colors cursor-pointer shadow-lg"
          >
            ✕ Back to orbit
          </button>
          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-center pointer-events-none">
            <p className="text-holo text-sm uppercase tracking-[0.3em]">
              {PAGES[focused].name}
            </p>
            <p className="text-silver/70 text-xs uppercase tracking-[0.25em] mt-2">
              Click a moon to explore
            </p>
          </div>
        </>
      )}

      {/* Star identity card */}
      {focused === 0 && (
        <div
          className={`absolute inset-0 flex items-center justify-center p-6 ${
            showPage ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div
            className={`absolute inset-0 bg-obsidian/50 transition-opacity duration-500 ${
              showPage ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`holo-glass holo-corners relative max-w-xl w-full p-10 md:p-14 text-center rounded-sm hub-panel ${
              showPage ? "hub-panel-shown" : "hub-panel-hidden"
            }`}
          >
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

      {/* Moon (sub-section) detail panel */}
      {moonsMode && moonData && focused !== null && (
        <div
          className={`absolute inset-0 flex items-center justify-center p-4 md:p-8 ${
            showPage ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div
            className={`absolute inset-0 bg-obsidian/50 transition-opacity duration-500 ${
              showPage ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`holo-glass holo-corners relative w-full max-w-3xl max-h-[86vh] overflow-y-auto p-8 md:p-12 rounded-sm hub-panel ${
              showPage ? "hub-panel-shown" : "hub-panel-hidden"
            }`}
          >
            <button
              onClick={back}
              data-hub-back
              className="absolute top-3 right-3 z-10 px-4 py-2 bg-obsidian/80 border border-gold/50 text-gold text-xs uppercase tracking-wider hover:bg-gold hover:text-obsidian transition-colors cursor-pointer"
            >
              ✕ Back to moons
            </button>
            <p className="text-holo text-xs uppercase tracking-[0.25em] mb-3">
              {moonData.kicker || PAGES[focused].name}
              {moonData.num ? ` · ${moonData.num}` : ""}
            </p>
            <h2 className="holo-text font-heading text-3xl md:text-4xl mb-3">
              {moonData.title}
            </h2>
            {moonData.type && (
              <span className="inline-block text-gold/70 text-xs uppercase tracking-wider border border-gold/20 px-3 py-1 mb-4">
                {moonData.type}
              </span>
            )}
            {moonData.meta && (
              <p className="text-silver/60 text-xs mb-4">{moonData.meta}</p>
            )}
            {moonData.tagline && (
              <p className="text-gold italic mb-5">{moonData.tagline}</p>
            )}
            <p className="text-silver leading-relaxed mb-6">
              {moonData.description}
            </p>
            {moonData.bullets && (
              <ul className="space-y-2 mb-6">
                {moonData.bullets.map((b) => (
                  <li key={b} className="text-silver text-sm flex gap-2">
                    <span className="text-gold shrink-0">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {moonData.pairs && (
              <div className="grid md:grid-cols-2 gap-6 text-sm mb-6">
                {moonData.pairs.map((pair) => (
                  <div key={pair.label}>
                    <p className="text-gold/60 uppercase tracking-wider text-xs mb-2">
                      {pair.label}
                    </p>
                    {pair.items.map((it) => (
                      <p key={it} className="text-silver">
                        › {it}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )}
            {(moonData.metric || moonData.url) && (
              <div className="pt-5 border-t border-gold/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                {moonData.metric ? (
                  <p className="text-ivory text-sm">
                    <span className="text-gold">Impact:</span> {moonData.metric}
                  </p>
                ) : (
                  <span />
                )}
                {moonData.url && (
                  <a
                    href={moonData.url}
                    target={moonData.url.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-gold text-sm uppercase tracking-wider hover:text-gold-light transition-colors gold-underline shrink-0"
                  >
                    {moonData.urlLabel || "Open →"}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Embedded full page (planets without moons + a11y page view) */}
      {showEmbed && focused !== null && (
        <div
          className={`absolute inset-0 flex items-center justify-center p-4 md:p-8 ${
            showPage ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div
            className={`absolute inset-0 bg-obsidian/50 transition-opacity duration-500 ${
              showPage ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`holo-glass holo-corners relative w-full max-w-5xl h-[86vh] overflow-hidden rounded-sm hub-panel ${
              showPage ? "hub-panel-shown" : "hub-panel-hidden"
            }`}
          >
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
    </>
  );
}
