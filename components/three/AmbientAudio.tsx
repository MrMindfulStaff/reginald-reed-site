"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Built = { master: GainNode; stop: () => void };

function makeImpulse(ctx: AudioContext, duration = 3.5, decay = 2.4) {
  const rate = ctx.sampleRate;
  const len = Math.floor(rate * duration);
  const buf = ctx.createBuffer(2, len, rate);
  for (let ch = 0; ch < 2; ch++) {
    const data = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
  }
  return buf;
}

function build(ctx: AudioContext): Built {
  const master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);

  // Space reverb
  const convolver = ctx.createConvolver();
  convolver.buffer = makeImpulse(ctx);
  const wet = ctx.createGain();
  wet.gain.value = 0.55;
  convolver.connect(wet).connect(master);
  const dry = ctx.createGain();
  dry.gain.value = 0.65;
  dry.connect(master);

  // Lowpass with a very slow sweep
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 650;
  filter.Q.value = 0.6;
  filter.connect(dry);
  filter.connect(convolver);

  const oscs: OscillatorNode[] = [];

  // Low drone chord (A minor-ish): A1, E2, A2, E3
  const freqs = [55, 82.41, 110, 164.81];
  freqs.forEach((f, i) => {
    const o = ctx.createOscillator();
    o.type = i % 2 ? "sine" : "triangle";
    o.frequency.value = f;
    o.detune.value = (i - 1.5) * 5;
    const g = ctx.createGain();
    g.gain.value = (i === 0 ? 0.085 : 0.05);
    o.connect(g).connect(filter);
    o.start();
    oscs.push(o);
  });

  // Slow LFO sweeping the filter cutoff for movement
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.045;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 260;
  lfo.connect(lfoGain).connect(filter.frequency);
  lfo.start();
  oscs.push(lfo);

  // Faint high shimmer with slow tremolo
  const shimmer = ctx.createOscillator();
  shimmer.type = "sine";
  shimmer.frequency.value = 880;
  const shGain = ctx.createGain();
  shGain.gain.value = 0.006;
  const trem = ctx.createOscillator();
  trem.frequency.value = 0.12;
  const tremGain = ctx.createGain();
  tremGain.gain.value = 0.006;
  trem.connect(tremGain).connect(shGain.gain);
  shimmer.connect(shGain).connect(convolver);
  shimmer.start();
  trem.start();
  oscs.push(shimmer, trem);

  return {
    master,
    stop: () => oscs.forEach((o) => { try { o.stop(); } catch {} }),
  };
}

export default function AmbientAudio() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const builtRef = useRef<Built | null>(null);

  const enable = useCallback(async () => {
    if (!ctxRef.current) {
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      const ctx = new Ctx();
      const built = build(ctx);
      ctxRef.current = ctx;
      masterRef.current = built.master;
      builtRef.current = built;
    }
    const ctx = ctxRef.current;
    if (ctx.state === "suspended") await ctx.resume();
    const m = masterRef.current!;
    m.gain.cancelScheduledValues(ctx.currentTime);
    m.gain.setValueAtTime(m.gain.value, ctx.currentTime);
    m.gain.linearRampToValueAtTime(0.16, ctx.currentTime + 2.5);
    setOn(true);
  }, []);

  const disable = useCallback(() => {
    const ctx = ctxRef.current;
    const m = masterRef.current;
    if (ctx && m) {
      m.gain.cancelScheduledValues(ctx.currentTime);
      m.gain.setValueAtTime(m.gain.value, ctx.currentTime);
      m.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.2);
    }
    setOn(false);
  }, []);

  // Pause audio when the tab is hidden.
  useEffect(() => {
    const onVis = () => {
      const ctx = ctxRef.current;
      if (!ctx) return;
      if (document.hidden) ctx.suspend();
      else if (on) ctx.resume();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [on]);

  useEffect(
    () => () => {
      try {
        builtRef.current?.stop();
        ctxRef.current?.close();
      } catch {}
    },
    []
  );

  return (
    <button
      onClick={() => (on ? disable() : enable())}
      aria-label={on ? "Mute ambient sound" : "Play ambient sound"}
      className="fixed bottom-6 left-6 z-[56] flex items-center gap-2 px-3 py-2 bg-obsidian/70 border border-gold/40 text-gold hover:bg-gold hover:text-obsidian transition-colors cursor-pointer rounded-sm"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 5 6 9H2v6h4l5 4V5z" />
        {on ? (
          <>
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M18.5 5.5a9 9 0 0 1 0 13" />
          </>
        ) : (
          <path d="M22 9l-6 6M16 9l6 6" />
        )}
      </svg>
      <span className="text-[10px] uppercase tracking-[0.25em]">
        {on ? "Sound on" : "Sound"}
      </span>
    </button>
  );
}
