"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { ECOSYSTEM_ENTITIES as entities } from "@/lib/ecosystem";

export default function Ecosystem() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <AnimatedSection className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-6">
            House Reed
          </p>
          <h1 className="text-4xl md:text-6xl font-heading text-ivory leading-tight mb-8">
            The Ecosystem
          </h1>
          <p className="text-silver text-lg max-w-2xl mx-auto">
            Seven entities. One interconnected system. Every output becomes an
            input. Every entity feeds the next. This is how you reverse poverty
            at the infrastructure level.
          </p>
        </AnimatedSection>
      </section>

      {/* System Diagram */}
      <section className="py-12">
        <AnimatedSection className="max-w-5xl mx-auto px-6" delay={0.2}>
          <div className="border border-gold/20 p-8 md:p-12 text-center">
            <p className="text-gold/60 text-xs uppercase tracking-[0.4em] mb-6">
              The Self-Reinforcing Loop
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
              <span className="text-ivory">Training</span>
              <span className="text-gold/40">→</span>
              <span className="text-ivory">Employment</span>
              <span className="text-gold/40">→</span>
              <span className="text-ivory">Revenue</span>
              <span className="text-gold/40">→</span>
              <span className="text-ivory">Investment</span>
              <span className="text-gold/40">→</span>
              <span className="text-ivory">More Training</span>
            </div>
            <p className="text-silver text-xs mt-6">
              Supported by: Childcare + Transportation + AI Intelligence + Business Education
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Entity Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {entities.map((e, i) => (
            <AnimatedSection key={e.num} delay={i * 0.1}>
              <div className="border border-gold/10 hover:border-gold/30 transition-all duration-300 p-8 md:p-12 group">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="shrink-0">
                    <span className="text-gold/30 text-6xl font-heading group-hover:text-gold/60 transition-colors">
                      {e.num}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                      <h2 className="text-2xl font-heading text-ivory group-hover:text-gold transition-colors">
                        {e.name}
                      </h2>
                      <span className="text-gold/60 text-xs uppercase tracking-wider border border-gold/20 px-3 py-1 w-fit">
                        {e.type}
                      </span>
                    </div>
                    <p className="text-gold text-sm mb-4 italic">
                      {e.tagline}
                    </p>
                    <p className="text-silver leading-relaxed mb-6">
                      {e.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <p className="text-gold/60 uppercase tracking-wider text-xs mb-2">
                          Feeds Into
                        </p>
                        {e.feeds.map((f) => (
                          <p key={f} className="text-silver">
                            → {f}
                          </p>
                        ))}
                      </div>
                      <div>
                        <p className="text-gold/60 uppercase tracking-wider text-xs mb-2">
                          Receives From
                        </p>
                        {e.receives.map((r) => (
                          <p key={r} className="text-silver">
                            ← {r}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gold/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <p className="text-ivory text-sm">
                        <span className="text-gold">Impact:</span> {e.metric}
                      </p>
                      {e.url && (
                        <a
                          href={e.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold text-sm uppercase tracking-wider hover:text-gold-light transition-colors gold-underline"
                        >
                          Visit →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
