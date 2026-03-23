"use client";

import Image from "next/image";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const timeline = [
  {
    year: "53206",
    title: "The Foundation",
    text: "Born and raised in the most incarcerated zip code in America. No degree. No connections. No blueprint. But a mind that saw systems where others saw chaos.",
  },
  {
    year: "Vision",
    title: "Seeing the System",
    text: "Recognized that poverty isn't a personal failing — it's a system. And you can't beat a system with a program. You beat it with better infrastructure.",
  },
  {
    year: "Build",
    title: "The Mindful Group",
    text: "Launched zero-tuition workforce training — CNA, CBRF, and construction programs — proving that community investment compounds when you remove barriers.",
  },
  {
    year: "Scale",
    title: "The Ecosystem Emerges",
    text: "Built Mindful Staffing, Nana's Cozy Corner, Cozy Cruisers, and Mindful Measures — each entity solving a barrier that breaks the pipeline for the others.",
  },
  {
    year: "525+",
    title: "Impact at Scale",
    text: "Trained over 525 people, generated $60M+ in wages, and proved that integrated systems design is the architecture for reversing poverty.",
  },
  {
    year: "REIGN",
    title: "Intelligence Layer",
    text: "Designed the REIGN AI platform through Mindful Measures — bringing cognitive architecture and decision intelligence to workforce operations.",
  },
  {
    year: "Now",
    title: "Expanding the Architecture",
    text: "Researching Stellar Engine economics, bank-free homeownership, and scaling liberation infrastructure beyond Milwaukee. The model is the message.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
          {/* Text — 3 cols */}
          <AnimatedSection className="md:col-span-3">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-6">
              Origin Story
            </p>
            <h1 className="text-4xl md:text-6xl font-heading text-ivory leading-tight mb-8">
              No Degree. No Blueprint.
              <br />
              <span className="text-gold">No Excuses.</span>
            </h1>
            <p className="text-silver text-lg md:text-xl leading-relaxed">
              I didn&apos;t study systems design in a university. I learned it
              by surviving inside a broken system and deciding to build a better
              one. Every entity in the House Reed ecosystem exists because I
              watched someone fail — not from lack of effort, but from lack of
              infrastructure.
            </p>
          </AnimatedSection>

          {/* Photo — 2 cols */}
          <AnimatedSection delay={0.3} className="md:col-span-2 hidden md:block">
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-gold/20" />
              <div className="relative overflow-hidden">
                <Image
                  src="/images/reginald-standing.jpg"
                  alt="Reginald Reed Jr."
                  width={500}
                  height={700}
                  className="w-full h-auto object-cover grayscale-[20%]"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-obsidian to-transparent" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Identity */}
      <section className="py-24 bg-obsidian-light">
        <StaggerContainer className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Systems Designer",
              text: "I think in ecosystems, not silos. I design organizational architectures, economic models, workforce pipelines, and governance frameworks where outputs from one component become inputs for another.",
            },
            {
              title: "AI Architect",
              text: "I design and build custom AI intelligence systems — council logic architectures, multi-agent decision frameworks, and the REIGN platform. I don't use AI. I build AI infrastructure.",
            },
            {
              title: "Community Builder",
              text: "I design workforce development models, navigate municipal policy, build coalition networks, and architect funding mechanisms that convert compliance obligations into community investment.",
            },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <div className="border border-gold/10 p-8 hover:border-gold/30 transition-colors h-full">
                <h3 className="text-gold font-heading text-xl mb-4">
                  {item.title}
                </h3>
                <p className="text-silver text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-ivory">
              The Arc
            </h2>
          </AnimatedSection>
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-gold/40 group-hover:border-gold flex items-center justify-center text-gold text-xs font-semibold transition-colors shrink-0">
                      {t.year}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-gold/10 group-hover:bg-gold/30 transition-colors" />
                    )}
                  </div>
                  <div className="pb-12">
                    <h3 className="text-ivory font-heading text-lg mb-2 group-hover:text-gold transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-silver text-sm leading-relaxed">
                      {t.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-obsidian-light">
        <AnimatedSection className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-heading text-ivory leading-relaxed mb-6">
            &ldquo;The question isn&apos;t how do we help more people. It&apos;s
            how do we build infrastructure that makes help
            unnecessary.&rdquo;
          </p>
          <p className="text-gold text-sm uppercase tracking-wider">
            — Reginald Reed Jr.
          </p>
        </AnimatedSection>
      </section>
    </>
  );
}
