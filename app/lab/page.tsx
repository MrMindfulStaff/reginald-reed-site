"use client";

import dynamic from "next/dynamic";

// three.js / R3F are client-only — load the whole stage in its own chunk.
const MedallionStage = dynamic(() => import("@/components/three/lab/MedallionStage"), {
  ssr: false,
});

/**
 * /lab — isolated proof-of-concept hero. A real Higgsfield-generated, PBR-lit
 * gold House Reed medallion you can grab and rotate. Does NOT touch the live
 * homepage; this route exists to prove the "generate → mesh → stage" pipeline.
 */
export default function LabPage() {
  return (
    <main style={{ position: "fixed", inset: 0, background: "#0A0A0A", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <MedallionStage />
      </div>

      {/* Hero overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "clamp(24px, 5vw, 64px)",
          pointerEvents: "none",
        }}
      >
        <header style={{ pointerEvents: "auto" }}>
          <p
            style={{
              fontFamily: "Georgia, serif",
              color: "#C8A35F",
              letterSpacing: "0.35em",
              fontSize: "clamp(11px, 1.4vw, 14px)",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            House Reed
          </p>
        </header>

        <div style={{ pointerEvents: "auto", maxWidth: 640 }}>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              color: "#F5F0E8",
              fontSize: "clamp(34px, 6vw, 76px)",
              lineHeight: 1.02,
              margin: "0 0 14px",
              fontWeight: 400,
            }}
          >
            Forged, not
            <br />
            rendered.
          </h1>
          <p
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              color: "#B0B0B0",
              fontSize: "clamp(14px, 1.6vw, 18px)",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: 460,
            }}
          >
            A real, physically-lit gold crest. Grab it — drag to turn it in the light.
          </p>
        </div>
      </div>
    </main>
  );
}
