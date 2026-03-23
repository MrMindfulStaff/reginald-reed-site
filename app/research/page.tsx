"use client";

import Link from "next/link";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import Accordion from "@/components/Accordion";

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

      {/* Accordion Research Sections */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 space-y-4">

          {/* ── THE STELLAR ENGINE ── */}
          <AnimatedSection>
            <Accordion
              title="The Stellar Engine"
              subtitle="A self-sustaining workforce development model engineered to reverse poverty through earned revenue."
              badge="Featured Research"
              defaultOpen={false}
            >
              {/* Core Thesis */}
              <div className="border border-gold/20 p-6 md:p-10 mb-10">
                <p className="text-gold/60 text-xs uppercase tracking-[0.3em] mb-4 text-center">
                  Core Thesis
                </p>
                <p className="text-ivory text-lg md:text-xl font-heading leading-relaxed text-center">
                  When training programs are designed around placement outcomes —
                  and placement outcomes generate revenue — the system pays for
                  itself. Grants become leverage, not lifelines.
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 mb-10">
                <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span className="text-emerald-400/80 text-xs uppercase tracking-wider">
                  Active Research · 9 Years of Operation · Built &amp; proven in Milwaukee&apos;s 53206
                </span>
              </div>

              {/* The Problem */}
              <div className="mb-12">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-6">
                  The Problem — Why Traditional Models Fail
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Grant-dependent by design", text: "When funding ends, the program ends. There is no mechanism for self-renewal. Communities are left with a gap rather than infrastructure." },
                    { title: "Training without placement is waste", text: "Programs that measure success by enrollment rather than employment outcomes produce graduates without economic mobility." },
                    { title: "Poverty is structural, not behavioral", text: "The dominant approach treats poverty as an individual failure requiring charity. The Stellar Engine treats it as a system design problem requiring a better system." },
                  ].map((item) => (
                    <div key={item.title} className="border-l-2 border-gold/30 pl-5">
                      <h4 className="text-ivory font-heading text-sm mb-2">{item.title}</h4>
                      <p className="text-silver text-xs leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Two Sub-Models */}
              <div className="mb-12">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-6">
                  System Architecture — Two Interlocking Revenue Engines
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gold/10 p-6">
                    <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-1">Sub-Model</p>
                    <h4 className="text-ivory font-heading text-xl mb-2">Little Dipper</h4>
                    <p className="text-gold/70 text-xs italic mb-3">Workforce Revenue Only</p>
                    <p className="text-silver text-sm leading-relaxed mb-3">
                      Revenue generated from placing trained graduates with employers through the staffing arm.
                    </p>
                    <div className="border-t border-gold/10 pt-3">
                      <p className="text-ivory text-xs">
                        <span className="text-gold">Role:</span> Proves the model works on placement revenue alone. Establishes the floor of sustainability.
                      </p>
                    </div>
                  </div>
                  <div className="border border-gold/20 p-6">
                    <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-1">Sub-Model</p>
                    <h4 className="text-ivory font-heading text-xl mb-2">Big Dipper</h4>
                    <p className="text-gold/70 text-xs italic mb-3">Training + Workforce Revenue</p>
                    <p className="text-silver text-sm leading-relaxed mb-3">
                      Training program tuition or WIOA reimbursement revenue, plus workforce placement revenue from the staffing arm.
                    </p>
                    <div className="border-t border-gold/10 pt-3">
                      <p className="text-ivory text-xs">
                        <span className="text-gold">Role:</span> The full-power configuration. Combines both revenue streams to achieve sustainability at lower enrollment thresholds and generate larger surplus for reinvestment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Closed Loop */}
              <div className="mb-12">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
                  The Closed-Loop Logic
                </p>
                <p className="text-silver text-sm mb-6">
                  The system is designed as a closed loop, not a linear program. Each step feeds the next.
                </p>
                <div className="space-y-0 max-w-2xl mx-auto">
                  {closedLoopSteps.map((step, i) => (
                    <div key={step.num} className="flex gap-5 group">
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full border-2 border-gold/40 group-hover:border-gold flex items-center justify-center text-gold text-[10px] font-semibold transition-colors shrink-0">
                          {step.num}
                        </div>
                        {i < closedLoopSteps.length - 1 && (
                          <div className="w-px flex-1 bg-gold/10 group-hover:bg-gold/30 transition-colors" />
                        )}
                      </div>
                      <div className="pb-6">
                        <h4 className="text-ivory font-heading text-base mb-1 group-hover:text-gold transition-colors">
                          {step.label}
                        </h4>
                        <p className="text-silver text-xs leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Surplus Distribution */}
              <div className="mb-12">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-6">
                  Reinvestment Architecture — Surplus Distribution
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {surplusAllocation.map((item) => (
                    <div key={item.label} className="border border-gold/10 p-5 group hover:border-gold/30 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-ivory font-heading text-base group-hover:text-gold transition-colors">{item.label}</h4>
                        <span className="text-gold text-xl font-heading">{item.pct}</span>
                      </div>
                      <p className="text-silver text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proven Outcomes */}
              <div className="mb-12">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-6 text-center">
                  Proven Outcomes — 9 Years of Operation
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <p className="text-2xl md:text-3xl font-heading text-gold mb-1">{m.value}</p>
                      <p className="text-silver text-[10px] uppercase tracking-wider">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Makes It Different */}
              <div className="mb-12">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-6">
                  What Makes It Different from Every Other Model
                </p>
                <div className="space-y-4">
                  {differentiators.map((d) => (
                    <div key={d.title} className="border-l-2 border-gold/30 pl-5 py-1">
                      <h4 className="text-ivory font-heading text-sm mb-1">{d.title}</h4>
                      <p className="text-silver text-xs leading-relaxed">{d.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Replication Vision */}
              <div>
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-6">
                  Replication Vision — From Anchor Site to National Blueprint
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gold/10 p-6">
                    <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-2">Phase 1</p>
                    <h4 className="text-ivory font-heading text-lg mb-3">Anchor Site</h4>
                    <p className="text-silver text-sm leading-relaxed">
                      The Milwaukee operation reaches full financial self-sufficiency, generating surplus beyond what is needed for local operations. This surplus becomes the seed capital for Phase 2.
                    </p>
                  </div>
                  <div className="border border-gold/10 p-6">
                    <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-2">Phase 2</p>
                    <h4 className="text-ivory font-heading text-lg mb-3">Replication</h4>
                    <p className="text-silver text-sm leading-relaxed">
                      Each new site is seeded by the surplus of the previous site. The anchor funds the first satellite. The first satellite, once self-sustaining, funds the next. The network is self-financing — no external capital required to maintain the chain once it begins.
                    </p>
                  </div>
                </div>
              </div>
            </Accordion>
          </AnimatedSection>

          {/* ── HOME BUYERS REVERSAL PROCESS ── */}
          <AnimatedSection delay={0.1}>
            <Accordion
              title="Home Buyers Reversal Process"
              subtitle="Enabling bank-free homeownership for communities historically excluded from mortgage access."
              badge="Wealth Building & Housing"
            >
              <p className="text-silver leading-relaxed mb-6">
                The Home Buyers Reversal Process reimagines the homeownership pipeline by inverting the traditional sequence of bank qualification, mortgage approval, and purchase.
              </p>
              <p className="text-silver leading-relaxed mb-6">
                This research examines models where community members can access homeownership through alternative financing structures, cooperative ownership models, and asset-building mechanisms that don&apos;t require traditional bank relationships — directly addressing the wealth gap in communities like 53206.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Alternative Financing", text: "Structures that bypass traditional mortgage gatekeepers while maintaining legal protections for buyers." },
                  { title: "Cooperative Ownership", text: "Community-based ownership models that build collective wealth rather than individual debt." },
                  { title: "Asset-Building Pathways", text: "Mechanisms that convert existing economic activity into homeownership equity without bank relationships." },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-gold/30 pl-5">
                    <h4 className="text-ivory font-heading text-sm mb-2">{item.title}</h4>
                    <p className="text-silver text-xs leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </Accordion>
          </AnimatedSection>

          {/* ── PLACEHOLDER FOR FUTURE RESEARCH ── */}
          <AnimatedSection delay={0.2}>
            <Accordion
              title="Childcare Infrastructure as Economic Architecture"
              subtitle="Examining how childcare access directly impacts workforce participation rates in 53206."
              badge="Coming Soon"
              badgeColor="emerald"
            >
              <p className="text-silver leading-relaxed mb-4">
                Research in development. This initiative examines the economic architecture of childcare as workforce infrastructure — not a social service, but a prerequisite for labor market participation.
              </p>
              <p className="text-silver/60 text-sm italic">
                Findings will be published as data collection is completed.
              </p>
            </Accordion>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Accordion
              title="Transportation as a Poverty Multiplier"
              subtitle="Mapping the relationship between transit access and employment outcomes in Milwaukee."
              badge="Coming Soon"
              badgeColor="emerald"
            >
              <p className="text-silver leading-relaxed mb-4">
                Research in development. This study maps the structural relationship between transportation access and employment sustainability — measuring how transit gaps function as poverty multipliers in zip codes like 53206.
              </p>
              <p className="text-silver/60 text-sm italic">
                Findings will be published as data collection is completed.
              </p>
            </Accordion>
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
