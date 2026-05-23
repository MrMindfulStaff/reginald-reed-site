"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import StarField from "./StarField";

export interface HubPage {
  name: string;
  href: string;
}

/** index 0 = the star (Reginald himself); 1..6 = orbiting planets. */
export const PAGES: HubPage[] = [
  { name: "Reginald Reed", href: "" }, // the star — identity card, not a page
  { name: "Overview", href: "__overview" }, // former home content
  { name: "About", href: "/about" },
  { name: "Ecosystem", href: "/ecosystem" },
  { name: "Research", href: "/research" },
  { name: "Media", href: "/media" },
  { name: "Insights", href: "/blog" },
];

interface PlanetDef {
  idx: number;
  radius: number;
  size: number;
  speed: number;
  tilt: number; // orbit-plane inclination
  phase: number;
  texture: string;
  axial: number; // axial tilt of the planet
  clouds?: boolean;
  ring?: boolean;
}

const PLANETS: PlanetDef[] = [
  { idx: 1, radius: 3.8, size: 0.42, speed: 0.24, tilt: 0.06, phase: 0.0, texture: "/textures/2k_earth_daymap.jpg", clouds: true, axial: 0.41 },
  { idx: 2, radius: 5.2, size: 0.34, speed: 0.18, tilt: 0.12, phase: 1.0, texture: "/textures/2k_mars.jpg", axial: 0.44 },
  { idx: 3, radius: 6.8, size: 0.64, speed: 0.13, tilt: -0.08, phase: 2.1, texture: "/textures/2k_jupiter.jpg", axial: 0.05 },
  { idx: 4, radius: 8.4, size: 0.46, speed: 0.1, tilt: 0.15, phase: 3.2, texture: "/textures/2k_neptune.jpg", axial: 0.49 },
  { idx: 5, radius: 10.0, size: 0.52, speed: 0.085, tilt: -0.13, phase: 4.3, texture: "/textures/2k_saturn.jpg", ring: true, axial: 0.47 },
  { idx: 6, radius: 11.6, size: 0.44, speed: 0.07, tilt: 0.1, phase: 5.4, texture: "/textures/2k_uranus.jpg", axial: 1.71 },
];

const STAR_RADIUS = 1.6;

/** Nominal world position of a node (for keyboard-triggered focus). */
export function nodePosition(idx: number): THREE.Vector3 {
  if (idx === 0) return new THREE.Vector3(0, 0, 0);
  const p = PLANETS.find((x) => x.idx === idx);
  if (!p) return new THREE.Vector3(0, 0, 0);
  const v = new THREE.Vector3(
    Math.cos(p.phase) * p.radius,
    0,
    Math.sin(p.phase) * p.radius
  );
  v.applyAxisAngle(new THREE.Vector3(1, 0, 0), p.tilt);
  return v;
}

/* ---------------- Milky Way background ---------------- */

function Background() {
  const tex = useTexture("/textures/2k_stars_milky_way.jpg");
  const { scene } = useThree();
  useEffect(() => {
    tex.mapping = THREE.EquirectangularReflectionMapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    const prev = scene.background;
    scene.background = tex;
    scene.backgroundIntensity = 0.35;
    return () => {
      scene.background = prev;
    };
  }, [tex, scene]);
  return null;
}

/* ---------------- Star ---------------- */

const coronaVert = /* glsl */ `
  varying vec3 vN; varying vec3 vV;
  void main(){
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vN = normalize(normalMatrix * normal);
    vV = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;
const coronaFrag = /* glsl */ `
  varying vec3 vN; varying vec3 vV;
  uniform vec3 uColor;
  void main(){
    float f = pow(1.0 - abs(dot(vN, vV)), 2.3);
    gl_FragColor = vec4(uColor, f);
  }
`;

function Star({
  active,
  paused,
  onFocus,
}: {
  active: boolean;
  paused: boolean;
  onFocus: (i: number, pos: THREE.Vector3) => void;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const [hover, setHover] = useState(false);

  const sunMap = useTexture("/textures/2k_sun.jpg");
  sunMap.colorSpace = THREE.SRGBColorSpace;

  const coronaUniforms = useMemo(
    () => ({ uColor: { value: new THREE.Color("#ff9b3d") } }),
    []
  );

  const glowTex = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 256;
    const ctx = c.getContext("2d")!;
    const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, "rgba(255,210,140,0.9)");
    g.addColorStop(0.25, "rgba(255,140,50,0.5)");
    g.addColorStop(0.5, "rgba(255,90,25,0.2)");
    g.addColorStop(1, "rgba(255,70,20,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }, []);

  useFrame((_, delta) => {
    if (mesh.current && !paused) mesh.current.rotation.y += delta * 0.025;
  });

  return (
    <group>
      <pointLight position={[0, 0, 0]} intensity={3} decay={0} color="#fff1d6" />

      {/* glow halo */}
      <sprite scale={[9, 9, 1]}>
        <spriteMaterial
          map={glowTex}
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          opacity={0.85}
        />
      </sprite>

      <mesh
        ref={mesh}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHover(false);
          document.body.style.cursor = "auto";
        }}
        onClick={(e) => {
          e.stopPropagation();
          onFocus(0, new THREE.Vector3(0, 0, 0));
        }}
      >
        <sphereGeometry args={[STAR_RADIUS, 64, 64]} />
        <meshBasicMaterial map={sunMap} toneMapped={false} />
      </mesh>

      {/* corona */}
      <mesh scale={1.4}>
        <sphereGeometry args={[STAR_RADIUS, 32, 32]} />
        <shaderMaterial
          vertexShader={coronaVert}
          fragmentShader={coronaFrag}
          uniforms={coronaUniforms}
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <Html center distanceFactor={14} position={[0, STAR_RADIUS + 0.9, 0]}>
        <div
          style={{
            whiteSpace: "nowrap",
            color: hover || active ? "#4FD8E8" : "#F5F0E8",
            fontFamily: "Georgia, serif",
            fontSize: "16px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textShadow: "0 0 14px rgba(0,0,0,0.9)",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          Reginald Reed
        </div>
      </Html>
    </group>
  );
}

/* ---------------- Orbit ring ---------------- */

function OrbitRing({ radius, tilt }: { radius: number; tilt: number }) {
  const obj = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 160; i++) {
      const a = (i / 160) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineBasicMaterial({
      color: "#C8A35F",
      transparent: true,
      opacity: 0.1,
    });
    return new THREE.Line(geo, mat);
  }, [radius]);

  return (
    <group rotation={[tilt, 0, 0]}>
      <primitive object={obj} />
    </group>
  );
}

/* ---------------- Cloud + ring layers ---------------- */

function CloudLayer({ size }: { size: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const clouds = useTexture("/textures/2k_earth_clouds.jpg");
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04;
  });
  return (
    <mesh ref={ref} scale={1.02}>
      <sphereGeometry args={[size, 48, 48]} />
      <meshStandardMaterial
        alphaMap={clouds}
        color="#ffffff"
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </mesh>
  );
}

function SaturnRing({ size }: { size: number }) {
  const ringTex = useTexture("/textures/2k_saturn_ring_alpha.png");
  const geo = useMemo(() => {
    const inner = size * 1.35;
    const outer = size * 2.3;
    const g = new THREE.RingGeometry(inner, outer, 96);
    // Remap UVs so the texture maps radially (u = normalized radius).
    const pos = g.attributes.position;
    const uv = g.attributes.uv;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const r = v.length();
      uv.setXY(i, (r - inner) / (outer - inner), 1);
    }
    return g;
  }, [size]);

  useEffect(() => {
    ringTex.colorSpace = THREE.SRGBColorSpace;
  }, [ringTex]);

  return (
    <mesh geometry={geo} rotation={[-Math.PI / 2, 0, 0]}>
      <meshStandardMaterial
        map={ringTex}
        transparent
        side={THREE.DoubleSide}
        roughness={1}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ---------------- Planet ---------------- */

function Planet({
  p,
  page,
  active,
  paused,
  onFocus,
}: {
  p: PlanetDef;
  page: HubPage;
  active: boolean;
  paused: boolean;
  onFocus: (i: number, pos: THREE.Vector3) => void;
}) {
  const orbit = useRef<THREE.Group>(null);
  const body = useRef<THREE.Mesh>(null);
  const locator = useRef<THREE.Group>(null);
  const angle = useRef(p.phase);
  const [hover, setHover] = useState(false);

  const map = useTexture(p.texture);
  map.colorSpace = THREE.SRGBColorSpace;

  useFrame((_, delta) => {
    if (!paused) angle.current += delta * p.speed;
    if (orbit.current) orbit.current.rotation.y = angle.current;
    if (body.current && !paused) body.current.rotation.y += delta * 0.25;
  });

  return (
    <group rotation={[p.tilt, 0, 0]}>
      <group ref={orbit}>
        <group ref={locator} position={[p.radius, 0, 0]}>
          {/* large invisible hit target */}
          <mesh
            onPointerOver={(e) => {
              e.stopPropagation();
              setHover(true);
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
              setHover(false);
              document.body.style.cursor = "auto";
            }}
            onClick={(e) => {
              e.stopPropagation();
              const wp = new THREE.Vector3();
              locator.current?.getWorldPosition(wp);
              onFocus(p.idx, wp);
            }}
          >
            <sphereGeometry args={[p.size + 0.55, 16, 16]} />
            <meshBasicMaterial transparent opacity={0} depthWrite={false} />
          </mesh>

          {/* axial-tilted planet */}
          <group rotation={[0, 0, p.axial]}>
            <mesh ref={body}>
              <sphereGeometry args={[p.size, 48, 48]} />
              <meshStandardMaterial
                map={map}
                roughness={1}
                metalness={0}
                emissive="#ffffff"
                emissiveMap={map}
                emissiveIntensity={hover || active ? 0.18 : 0.05}
              />
            </mesh>
            {p.clouds && <CloudLayer size={p.size} />}
            {p.ring && <SaturnRing size={p.size} />}
          </group>

          {/* selection halo */}
          {(hover || active) && (
            <mesh>
              <sphereGeometry args={[p.size * 1.25, 24, 24]} />
              <meshBasicMaterial
                color="#4FD8E8"
                transparent
                opacity={0.16}
                blending={THREE.AdditiveBlending}
                side={THREE.BackSide}
                depthWrite={false}
              />
            </mesh>
          )}

          <Html center distanceFactor={13} position={[0, p.size + 0.55, 0]}>
            <div
              style={{
                whiteSpace: "nowrap",
                color: hover || active ? "#4FD8E8" : "#F5F0E8",
                fontFamily: "Georgia, serif",
                fontSize: "14px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textShadow: "0 0 12px rgba(0,0,0,0.95)",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {page.name}
            </div>
          </Html>
        </group>
      </group>
    </group>
  );
}

/* ---------------- Solar hub ---------------- */

export default function SolarHub({
  focused,
  paused,
  onFocus,
}: {
  focused: number | null;
  paused: boolean;
  onFocus: (i: number, pos: THREE.Vector3) => void;
}) {
  return (
    <group>
      <Background />
      <StarField />
      <Star active={focused === 0} paused={paused} onFocus={onFocus} />
      {PLANETS.map((p) => (
        <group key={p.idx}>
          <OrbitRing radius={p.radius} tilt={p.tilt} />
          <Planet
            p={p}
            page={PAGES[p.idx]}
            active={focused === p.idx}
            paused={paused}
            onFocus={onFocus}
          />
        </group>
      ))}
    </group>
  );
}
