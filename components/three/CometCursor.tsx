"use client";

import { useEffect, useRef } from "react";

const TRAIL = 14;

/**
 * A "shooting star" cursor: a bright precise head that follows the pointer,
 * with a glowing gold tail that streams behind it. DOM overlay, updated via
 * refs in a rAF loop (no React re-renders). pointer-events:none so it never
 * blocks clicks.
 */
export default function CometCursor({ visible }: { visible: boolean }) {
  const headRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const target = useRef({ x: -100, y: -100 });
  const head = useRef({ x: -100, y: -100 });
  const pts = useRef(Array.from({ length: TRAIL }, () => ({ x: -100, y: -100 })));

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener("pointermove", onMove);

    let raf = 0;
    const loop = () => {
      head.current.x += (target.current.x - head.current.x) * 0.55;
      head.current.y += (target.current.y - head.current.y) * 0.55;
      if (headRef.current) {
        headRef.current.style.transform = `translate(${head.current.x}px, ${head.current.y}px)`;
      }
      let px = head.current.x;
      let py = head.current.y;
      for (let i = 0; i < TRAIL; i++) {
        const p = pts.current[i];
        p.x += (px - p.x) * 0.42;
        p.y += (py - p.y) * 0.42;
        const el = trailRefs.current[i];
        if (el) el.style.transform = `translate(${p.x}px, ${p.y}px)`;
        px = p.x;
        py = p.y;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[55]"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
    >
      {Array.from({ length: TRAIL }).map((_, i) => {
        const size = Math.max(2, 9 - i * 0.55);
        return (
          <div
            key={i}
            ref={(el) => {
              trailRefs.current[i] = el;
            }}
            className="absolute top-0 left-0 rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              marginLeft: `${-size / 2}px`,
              marginTop: `${-size / 2}px`,
              background: i < TRAIL / 2 ? "#D4B577" : "#C8A35F",
              opacity: (1 - i / TRAIL) * 0.5,
              filter: "blur(0.5px)",
            }}
          />
        );
      })}
      <div
        ref={headRef}
        className="absolute top-0 left-0 rounded-full"
        style={{
          width: "10px",
          height: "10px",
          marginLeft: "-5px",
          marginTop: "-5px",
          background: "#F5F0E8",
          boxShadow:
            "0 0 8px 2px rgba(212,181,119,0.9), 0 0 18px 6px rgba(200,163,95,0.45)",
        }}
      />
    </div>
  );
}
