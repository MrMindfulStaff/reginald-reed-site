"use client";

import { useEffect, useState } from "react";

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

/**
 * Probes for WebGL + a viewport wide enough to be worth rendering 3D.
 * Returns `null` while detecting (server + first client render), then a boolean.
 * Callers should treat anything other than `true` as "show the CSS fallback".
 */
export function useWebGLSupport(minWidth = 480): boolean | null {
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    const ok = detectWebGL() && window.innerWidth >= minWidth;
    setSupported(ok);
  }, [minWidth]);

  return supported;
}
