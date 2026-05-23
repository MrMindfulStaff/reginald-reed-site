"use client";

import dynamic from "next/dynamic";
import HomeOverview from "@/components/HomeOverview";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useWebGLSupport } from "@/lib/useWebGLSupport";

// The homepage IS the solar hub on capable devices. three.js / R3F are client-only.
const HubScene = dynamic(() => import("@/components/three/HubScene"), {
  ssr: false,
});

export default function Home() {
  const reduced = useReducedMotion();
  // Hub needs WebGL and a real-sized viewport; phones get the standard page.
  const webgl = useWebGLSupport(768);
  const useHub = !reduced && webgl === true;

  // SSR + first client render → useHub is false, so the real HomeOverview
  // content is server-rendered (good for SEO) and is the fallback for
  // mobile / reduced-motion / no-WebGL visitors. Capable desktops swap to the hub.
  return useHub ? <HubScene /> : <HomeOverview />;
}
