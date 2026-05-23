"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useWebGLSupport } from "@/lib/useWebGLSupport";

// three.js + the whole Experience tree load ONLY on the client, in a separate
// chunk — never in the server/SSR bundle.
const Experience = dynamic(() => import("./Experience"), { ssr: false });

export default function CanvasRoot() {
  const reduced = useReducedMotion();
  const webgl = useWebGLSupport();
  const pathname = usePathname();

  // The homepage is the solar hub and owns the whole screen with its own
  // canvas — don't run a second (redundant) WebGL context behind it.
  if (pathname === "/" || pathname?.startsWith("/hub")) return null;

  // While probing (null) or unsupported/too-small, render nothing so the
  // existing CSS grid + radial glow remain as the static fallback.
  if (webgl !== true) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <Experience reduced={reduced} />
    </div>
  );
}
