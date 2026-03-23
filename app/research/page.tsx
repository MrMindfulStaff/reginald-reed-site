"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const projects = [
  {
    title: "The Stellar Engine",
    category: "Economic Systems Design",
    status: "Active Research",
    summary:
      "A systems architecture for converting urban poverty into economic liberation through interconnected enterprise infrastructure.",
    description:
      "The Stellar Engine is the conceptual and operational framework behind House Reed — a self-reinforcing economic system where training, employment, childcare, transportation, housing, and technology entities feed into each other. Unlike traditional nonprofit models that treat poverty symptoms in isolation, the Stellar Engine designs integrated infrastructure where the output of one entity becomes the input for another, creating compounding returns on community investment.",
    featured: true,
  },
  {
    title: "Home Buyers Reversal Process",
    category: "Wealth Building & Housing",
    status: "Active Research",
    summary:
      "Enabling bank-free homeownership — alternative pathways that bypass traditional banking systems for communities historically excluded from mortgage access.",
    description:
      "The Home Buyers Reversal Process reimagines the homeownership pipeline by inverting the traditional sequence of bank qualification, mortgage approval, and purchase. This research examines models where community members can access homeownership through alternative financing structures, cooperative ownership models, and asset-building mechanisms that don't require traditional bank relationships — directly addressing the wealth gap in communities like 53206.",
    featured: true,
  },
];

export default function Research() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <AnimatedSection className="max-w-5xl mx-auto px-6">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-6">
            Research &amp; Findings
          </p>
          <h1 className="text-4xl md:text-6xl font-heading text-ivory leading-tight mb-8">
            Building the <span className="text-gold">Theory</span> Behind the
            Practice
          </h1>
          <p className="text-silver text-lg max-w-3xl">
            The House Reed ecosystem isn&apos;t just operational — it&apos;s
            research. Every entity generates data about what works in reversing
            poverty. This is where I share the models, the findings, and the
            frameworks.
          </p>
        </AnimatedSection>
      </section>

      {/* Featured Research */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.15}>
              <div className="border border-gold/10 hover:border-gold/30 transition-all duration-300 p-8 md:p-12 group">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <span className="text-gold/60 text-xs uppercase tracking-wider border border-gold/20 px-3 py-1 w-fit">
                    {p.category}
                  </span>
                  <span className="text-emerald-400/80 text-xs uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block" />
                    {p.status}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-heading text-ivory group-hover:text-gold transition-colors mb-4">
                  {p.title}
                </h2>
                <p className="text-gold/80 text-lg mb-6 italic">{p.summary}</p>
                <p className="text-silver leading-relaxed">{p.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Blog Link */}
      <section className="py-24 bg-obsidian-light">
        <AnimatedSection className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading text-ivory mb-6">
            Ongoing Insights
          </h2>
          <p className="text-silver max-w-xl mx-auto mb-10">
            Beyond the major research initiatives, I publish ongoing analysis,
            findings, and frameworks on the Insights blog.
          </p>
          <Link
            href="/blog"
            className="inline-block px-10 py-4 bg-gold text-obsidian font-semibold text-sm uppercase tracking-wider hover:bg-gold-light transition-colors"
          >
            Read Insights →
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
