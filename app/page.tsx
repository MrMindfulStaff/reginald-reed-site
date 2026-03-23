"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const metrics = [
  { value: 525, suffix: "+", label: "People Trained" },
  { value: 60, prefix: "$", suffix: "M+", label: "Wages Generated" },
  { value: 0, suffix: "", label: "Tuition Charged" },
  { value: 5, suffix: "", label: "Integrated Entities" },
];

const ecosystemPreview = [
  { name: "The Mindful Group", role: "Workforce Training", type: "501(c)(3)" },
  { name: "Mindful Staffing", role: "Employment Pipeline", type: "For-Profit" },
  { name: "Mindful Measures", role: "REIGN AI Platform", type: "Technology" },
  {
    name: "Nana's Cozy Corner",
    role: "Childcare Infrastructure",
    type: "Childcare",
  },
  { name: "Cozy Cruisers", role: "Transportation Access", type: "Transport" },
];

const testimonials = [
  {
    quote:
      "Reginald doesn't just talk about systems change — he's built the infrastructure that proves it works. His ecosystem model is what workforce development should look like nationwide.",
    name: "Community Partner",
    role: "Workforce Development Director",
    org: "Milwaukee County",
  },
  {
    quote:
      "The Mindful Group trained me when no one else would take a chance. Zero tuition, real support, and a job waiting on the other side. That's not a program — that's a pipeline.",
    name: "Program Graduate",
    role: "CNA, Class of 2024",
    org: "The Mindful Group",
  },
  {
    quote:
      "What Reginald has built with House Reed is a masterclass in integrated systems design. Every entity feeds the next. It's the most elegant anti-poverty architecture I've seen.",
    name: "Strategic Advisor",
    role: "Systems Design Consultant",
    org: "National Partner",
  },
];

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (value === 0) {
      setCount(0);
      return;
    }
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(200,163,95,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,163,95,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Gradient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 pt-24">
          <motion.p
            className="text-gold text-sm uppercase tracking-[0.3em] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Milwaukee &middot; 53206
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-heading leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-ivory">Systems Designer.</span>
            <br />
            <span className="text-gold">Liberation Architect.</span>
          </motion.h1>

          <motion.p
            className="text-silver text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            I build integrated enterprise ecosystems that reverse urban poverty.
            Not programs. Not nonprofits. Infrastructure — where every entity
            feeds the next and liberation compounds.
          </motion.p>

          {/* Metrics */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            {metrics.map((m) => (
              <div key={m.label} className="group">
                <p className="text-4xl md:text-5xl font-heading text-gold group-hover:scale-105 transition-transform">
                  <AnimatedCounter
                    value={m.value}
                    prefix={m.prefix}
                    suffix={m.suffix}
                  />
                </p>
                <p className="text-silver text-sm mt-2 uppercase tracking-wider">
                  {m.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <Link
              href="/about"
              className="px-8 py-4 bg-gold text-obsidian font-semibold text-sm uppercase tracking-wider hover:bg-gold-light transition-colors"
            >
              The Origin Story
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-gold/40 text-gold text-sm uppercase tracking-wider hover:bg-gold/10 transition-colors"
            >
              Connect
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Preview */}
      <section className="py-24 bg-obsidian-light">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              The Architecture
            </p>
            <h2 className="text-3xl md:text-5xl font-heading text-ivory mb-6">
              One Ecosystem. Five Entities.
            </h2>
            <p className="text-silver max-w-2xl mx-auto">
              These aren&apos;t separate businesses. They&apos;re an
              interconnected system where the output of one becomes the input for
              another.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-5 gap-4">
            {ecosystemPreview.map((e, i) => (
              <StaggerItem key={e.name}>
                <div className="group p-6 border border-gold/10 hover:border-gold/40 transition-all duration-300 relative h-full">
                  <div className="text-gold/40 text-xs uppercase tracking-wider mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="text-ivory font-heading text-lg mb-2 group-hover:text-gold transition-colors">
                    {e.name}
                  </h3>
                  <p className="text-silver text-sm mb-3">{e.role}</p>
                  <span className="text-gold/60 text-xs uppercase tracking-wider">
                    {e.type}
                  </span>
                  {i < ecosystemPreview.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 text-gold/30">
                      →
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-12" delay={0.3}>
            <Link
              href="/ecosystem"
              className="text-gold text-sm uppercase tracking-wider hover:text-gold-light transition-colors gold-underline"
            >
              Explore the full ecosystem →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Voices
            </p>
            <h2 className="text-3xl md:text-5xl font-heading text-ivory mb-6">
              What They Say
            </h2>
          </AnimatedSection>

          <StaggerContainer
            className="grid md:grid-cols-3 gap-8"
            staggerDelay={0.15}
          >
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="border border-gold/10 hover:border-gold/30 p-8 transition-all duration-300 h-full flex flex-col">
                  <div className="text-gold/30 text-4xl font-heading mb-4">
                    &ldquo;
                  </div>
                  <p className="text-silver text-sm leading-relaxed flex-1 mb-6">
                    {t.quote}
                  </p>
                  <div className="border-t border-gold/10 pt-4">
                    <p className="text-ivory text-sm font-semibold">
                      {t.name}
                    </p>
                    <p className="text-gold/60 text-xs uppercase tracking-wider">
                      {t.role}
                    </p>
                    <p className="text-silver/40 text-xs mt-1">{t.org}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-obsidian-light">
        <AnimatedSection className="max-w-4xl mx-auto px-6">
          <div className="border-l-2 border-gold pl-8 md:pl-12">
            <p className="text-2xl md:text-3xl font-heading text-ivory leading-relaxed mb-6">
              &ldquo;Poverty is a system. You can&apos;t defeat a system with a
              program. You defeat it with a better system.&rdquo;
            </p>
            <p className="text-gold text-sm uppercase tracking-wider">
              — Reginald Reed Jr.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="py-24">
        <AnimatedSection className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-ivory mb-6">
            Speaking. Partnerships. Consulting.
          </h2>
          <p className="text-silver max-w-xl mx-auto mb-10">
            I speak on systems design, workforce architecture, AI integration,
            and building liberation infrastructure from the ground up.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gold text-obsidian font-semibold text-sm uppercase tracking-wider hover:bg-gold-light transition-colors"
          >
            Let&apos;s Build
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
