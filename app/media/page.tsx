"use client";

import Link from "next/link";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

export default function Media() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <AnimatedSection className="max-w-5xl mx-auto px-6">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-6">
            Media &amp; Speaking
          </p>
          <h1 className="text-4xl md:text-6xl font-heading text-ivory leading-tight mb-8">
            In the <span className="text-gold">Press</span>
          </h1>
          <p className="text-silver text-lg max-w-3xl">
            Featured coverage, speaking engagements, and media appearances.
            Building in public means the work speaks for itself.
          </p>
        </AnimatedSection>
      </section>

      {/* Speaking Topics */}
      <section className="py-16 bg-obsidian-light">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="text-2xl font-heading text-ivory">
              Available Speaking Topics
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Systems Design for Social Impact",
                desc: "How to architect interconnected organizations that compound community investment instead of fragmenting it.",
              },
              {
                title: "From 53206 to $60M",
                desc: "The real story of building liberation infrastructure without a degree, without a blueprint, from America's most incarcerated zip code.",
              },
              {
                title: "AI Architecture for Operations",
                desc: "Building cognitive intelligence systems (REIGN) for workforce development — council logic, multi-agent design, decision frameworks.",
              },
              {
                title: "Reversing Urban Poverty",
                desc: "Why programs fail and infrastructure succeeds. The economic architecture behind removing barriers at the system level.",
              },
              {
                title: "The Stellar Engine Model",
                desc: "A self-reinforcing economic framework where training, employment, childcare, transport, and technology entities feed each other.",
              },
              {
                title: "Bank-Free Wealth Building",
                desc: "Alternative pathways to homeownership and asset building for communities excluded from traditional banking systems.",
              },
            ].map((topic) => (
              <StaggerItem key={topic.title}>
                <div className="border border-gold/10 hover:border-gold/30 p-6 transition-all duration-300 group h-full">
                  <h3 className="text-ivory font-heading text-lg mb-3 group-hover:text-gold transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-silver text-sm leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Media placeholder */}
      <section className="py-24">
        <AnimatedSection className="max-w-4xl mx-auto px-6 text-center">
          <div className="border border-gold/10 p-12">
            <p className="text-gold font-heading text-xl mb-4">
              Media Features Coming Soon
            </p>
            <p className="text-silver text-sm mb-8">
              Press coverage and media appearances will be added here as
              they&apos;re published. The Media &amp; Speaking CMS collection is
              ready to power this section dynamically.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-gold text-obsidian font-semibold text-sm uppercase tracking-wider hover:bg-gold-light transition-colors"
            >
              Book a Speaking Engagement
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
