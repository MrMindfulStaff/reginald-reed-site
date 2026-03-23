"use client";

import Link from "next/link";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const closedLoopSteps = [
  { num: "01", label: "Recruit", text: "Participants recruited from underserved communities, priority given to individuals facing employment barriers." },
  { num: "02", label: "Train", text: "Accelerated, industry-recognized certification programs — CNA/CBRF, Construction Pre-Apprenticeship, Phlebotomy." },
  { num: "03", label: "Certify", text: "Graduates earn credentials that meet employer standards — not participation certificates, but industry-required qualifications." },
  { num: "04", label: "Place", text: "The staffing arm places graduates with employer partners. This placement event generates workforce revenue." },
  { num: "05", label: "Generate Surplus", text: "Revenue from placement and training exceeds operating costs. This is not profit for extraction — it is fuel for the next cycle." },
  { num: "06", label: "Reinvest", text: "Surplus allocated across supportive services, non-subsidized access, program expansion, and operational reserves." },
  { num: "07", label: "Scale", text: "As enrollment grows, costs per participant decrease and surplus increases — the system becomes more efficient at scale, not less." },
];

const surplusAllocation = [
  { label: "Supportive Services", pct: "30%", desc: "Housing, transportation, childcare, and mental health support. Removes the non-training barriers that cause dropout." },
  { label: "Non-WIOA Access", pct: "20%", desc: "Funds training slots for participants not eligible for government subsidies — extending zero-tuition beyond the WIOA-eligible population." },
  { label: "Program Expansion", pct: "30%", desc: "Capital for new cohorts, new training tracks, and new geographies. Surplus funds the growth rather than external grants." },
  { label: "Operational Reserves", pct: "20%", desc: "Financial stability buffer. Ensures the system absorbs enrollment fluctuations without collapsing or cutting services." },
];

const metrics = [
  { value: "525+", label: "Individuals Trained" },
  { value: "~90%", label: "Graduation Rate" },
  { value: "~85%", label: "Job Placement Rate" },
  { value: "$60M+", label: "Cumulative Wages Generated" },
  { value: "9", label: "Years Operating" },
];

const differentiators = [
  { title: "Self-funding by design", text: "The revenue model is baked into the architecture from the start. Sustainability is not a goal — it is the mechanism." },
  { title: "Outcomes are the revenue driver", text: "Traditional programs maximize enrollment. The Stellar Engine maximizes graduation and placement — because that is where the revenue comes from." },
  { title: "Scale creates efficiency", text: "As more participants move through the system, fixed costs distribute across a larger base. Unit economics improve with growth — the opposite of most nonprofit programs." },
  { title: "Grants are leverage, not dependency", text: "External funding accelerates scale, not sustains operations. The system can run without grants; grants make it run faster." },
  { title: "Designed for replication", text: "A blueprint, not a boutique. Every component is designed to be duplicated in new cities, new sectors, and new populations without rebuilding from scratch." },
];

export default function Research() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <AnimatedSection className="max-w-5xl mx-auto px-6">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-6">
            Research &amp; Architecture
          </p>
          <h1 className="text-4xl md:text-6xl font-heading text-ivory leading-tight mb-8">
            Building the <span className="text-gold">Theory</span> Behind the
            Practice
          </h1>
          <p className="text-silver text-lg max-w-3xl">
            The House Reed ecosystem isn&apos;t just operational — it&apos;s
            research. Every entity generates data about what works in reversing
            poverty. These are the models, the findings, and the frameworks.
          </p>
        </AnimatedSection>
      </section>

      {/* Stellar Engine — Hero */}
      <section className="py-20 bg-obsidian-light">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Featured Research
            </p>
            <h2 className="text-3xl md:text-5xl font-heading text-ivory mb-6">
              The Stellar Engine
            </h2>
            <p className="text-gold/80 text-lg md:text-xl italic max-w-3xl mx-auto mb-8">
              A mathematically designed, self-sustaining workforce development
              model engineered to reverse poverty through earned revenue — not
              perpetual grant dependency.
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span className="text-emerald-400/80 text-xs uppercase tracking-wider">
                Active Research · 9 Years of Operation
              </span>
            </div>
          </AnimatedSection>

          {/* Core Thesis */}
          <AnimatedSection delay={0.2}>
            <div className="border border-gold/20 p-8 md:p-12 max-w-4xl mx-auto">
              <p className="text-gold/60 text-xs uppercase tracking-[0.3em] mb-6 text-center">
                Core Thesis
              </p>
              <p className="text-ivory text-lg md:text-xl font-heading leading-relaxed text-center">
                When training programs are designed around placement outcomes —
                and placement outcomes generate revenue — the system pays for
                itself. Grants become leverage, not lifelines.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="mb-12">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              The Problem
            </p>
            <h2 className="text-2xl md:text-3xl font-heading text-ivory">
              Why Traditional Models Fail
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Grant-dependent by design",
                text: "When funding ends, the program ends. There is no mechanism for self-renewal. Communities are left with a gap rather than infrastructure.",
              },
              {
                title: "Training without placement is waste",
                text: "Programs that measure success by enrollment rather than employment outcomes produce graduates without economic mobility. The Stellar Engine measures what matters: wages earned.",
              },
              {
                title: "Poverty is structural, not behavioral",
                text: "The dominant approach treats poverty as an individual failure requiring charity. The Stellar Engine treats it as a system design problem requiring a better system.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="border-l-2 border-gold/30 pl-6 h-full">
                  <h3 className="text-ivory font-heading text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-silver text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Two Sub-Models */}
      <section className="py-20 bg-obsidian-light">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="mb-12 text-center">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              System Architecture
            </p>
            <h2 className="text-2xl md:text-3xl font-heading text-ivory">
              Two Interlocking Revenue Engines
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="border border-gold/10 hover:border-gold/30 p-8 transition-all duration-300 h-full">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
                  Sub-Model
                </p>
                <h3 className="text-ivory font-heading text-2xl mb-4">
                  Little Dipper
                </h3>
                <p className="text-gold/70 text-sm italic mb-4">
                  Workforce Revenue Only
                </p>
                <p className="text-silver text-sm leading-relaxed mb-4">
                  Revenue generated from placing trained graduates with employers
                  through the staffing arm.
                </p>
                <div className="border-t border-gold/10 pt-4">
                  <p className="text-ivory text-sm">
                    <span className="text-gold">Role:</span> Proves the model
                    works on placement revenue alone. Establishes the floor of
                    sustainability.
                  </p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-gold/20 hover:border-gold/40 p-8 transition-all duration-300 h-full">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
                  Sub-Model
                </p>
                <h3 className="text-ivory font-heading text-2xl mb-4">
                  Big Dipper
                </h3>
                <p className="text-gold/70 text-sm italic mb-4">
                  Training + Workforce Revenue
                </p>
                <p className="text-silver text-sm leading-relaxed mb-4">
                  Training program tuition or WIOA reimbursement revenue, plus
                  workforce placement revenue from the staffing arm.
                </p>
                <div className="border-t border-gold/10 pt-4">
                  <p className="text-ivory text-sm">
                    <span className="text-gold">Role:</span> The full-power
                    configuration. Combines both revenue streams to achieve
                    sustainability at lower enrollment thresholds and generate
                    larger surplus for reinvestment.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Closed Loop */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              The Closed-Loop Logic
            </p>
            <h2 className="text-2xl md:text-3xl font-heading text-ivory mb-4">
              Each Step Feeds the Next
            </h2>
            <p className="text-silver max-w-2xl mx-auto">
              The system is designed as a closed loop, not a linear program.
              Participant outcomes generate the revenue that funds the next
              cohort.
            </p>
          </AnimatedSection>

          <div className="space-y-0 max-w-3xl mx-auto">
            {closedLoopSteps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.08}>
                <div className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-gold/40 group-hover:border-gold flex items-center justify-center text-gold text-xs font-semibold transition-colors shrink-0">
                      {step.num}
                    </div>
                    {i < closedLoopSteps.length - 1 && (
                      <div className="w-px flex-1 bg-gold/10 group-hover:bg-gold/30 transition-colors" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-ivory font-heading text-lg mb-1 group-hover:text-gold transition-colors">
                      {step.label}
                    </h3>
                    <p className="text-silver text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Surplus Distribution */}
      <section className="py-20 bg-obsidian-light">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="mb-12 text-center">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Reinvestment Architecture
            </p>
            <h2 className="text-2xl md:text-3xl font-heading text-ivory">
              Surplus Distribution
            </h2>
          </AnimatedSection>

          <StaggerContainer
            className="grid md:grid-cols-2 gap-6"
            staggerDelay={0.1}
          >
            {surplusAllocation.map((item) => (
              <StaggerItem key={item.label}>
                <div className="border border-gold/10 hover:border-gold/30 p-6 transition-all duration-300 h-full group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-ivory font-heading text-lg group-hover:text-gold transition-colors">
                      {item.label}
                    </h3>
                    <span className="text-gold text-2xl font-heading">
                      {item.pct}
                    </span>
                  </div>
                  <p className="text-silver text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Proven Outcomes */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Proven Outcomes
            </p>
            <h2 className="text-2xl md:text-3xl font-heading text-ivory">
              9 Years of Operation
            </h2>
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
            staggerDelay={0.1}
          >
            {metrics.map((m) => (
              <StaggerItem key={m.label}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-heading text-gold mb-2">
                    {m.value}
                  </p>
                  <p className="text-silver text-xs uppercase tracking-wider">
                    {m.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="py-20 bg-obsidian-light">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="mb-12">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Architecture
            </p>
            <h2 className="text-2xl md:text-3xl font-heading text-ivory">
              What Makes It Different from Every Other Model
            </h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-6" staggerDelay={0.08}>
            {differentiators.map((d) => (
              <StaggerItem key={d.title}>
                <div className="border-l-2 border-gold/30 pl-6 py-2">
                  <h3 className="text-ivory font-heading text-lg mb-2">
                    {d.title}
                  </h3>
                  <p className="text-silver text-sm leading-relaxed">
                    {d.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Replication Vision */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Replication Vision
            </p>
            <h2 className="text-2xl md:text-3xl font-heading text-ivory">
              From Anchor Site to National Blueprint
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="border border-gold/10 hover:border-gold/30 p-8 transition-all duration-300 h-full">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
                  Phase 1
                </p>
                <h3 className="text-ivory font-heading text-xl mb-4">
                  Anchor Site
                </h3>
                <p className="text-silver text-sm leading-relaxed">
                  The Milwaukee operation reaches full financial
                  self-sufficiency, generating surplus beyond what is needed for
                  local operations. This surplus becomes the seed capital for
                  Phase 2.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-gold/10 hover:border-gold/30 p-8 transition-all duration-300 h-full">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
                  Phase 2
                </p>
                <h3 className="text-ivory font-heading text-xl mb-4">
                  Replication
                </h3>
                <p className="text-silver text-sm leading-relaxed">
                  Each new site is seeded by the surplus of the previous site.
                  The anchor funds the first satellite. The first satellite, once
                  self-sustaining, funds the next. The network is self-financing
                  — no external capital required to maintain the chain once it
                  begins.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Home Buyers Reversal Process */}
      <section className="py-20 bg-obsidian-light">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="border border-gold/10 hover:border-gold/30 transition-all duration-300 p-8 md:p-12 group">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <span className="text-gold/60 text-xs uppercase tracking-wider border border-gold/20 px-3 py-1 w-fit">
                  Wealth Building &amp; Housing
                </span>
                <span className="text-emerald-400/80 text-xs uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block" />
                  Active Research
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-heading text-ivory group-hover:text-gold transition-colors mb-4">
                Home Buyers Reversal Process
              </h2>
              <p className="text-gold/80 text-lg mb-6 italic">
                Enabling bank-free homeownership — alternative pathways that
                bypass traditional banking systems for communities historically
                excluded from mortgage access.
              </p>
              <p className="text-silver leading-relaxed">
                The Home Buyers Reversal Process reimagines the homeownership
                pipeline by inverting the traditional sequence of bank
                qualification, mortgage approval, and purchase. This research
                examines models where community members can access homeownership
                through alternative financing structures, cooperative ownership
                models, and asset-building mechanisms that don&apos;t require
                traditional bank relationships — directly addressing the wealth
                gap in communities like 53206.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Link */}
      <section className="py-24">
        <AnimatedSection className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading text-ivory mb-6">
            Ongoing Insights
          </h2>
          <p className="text-silver max-w-xl mx-auto mb-10">
            Beyond the major research initiatives, I publish ongoing analysis,
            findings, and frameworks on the Insights page.
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
