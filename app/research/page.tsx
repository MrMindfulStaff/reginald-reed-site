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

          {/* ── HOUSE REED HOME BUYERS PROGRAM ── */}
          <AnimatedSection delay={0.1}>
            <Accordion
              title="The House Reed Home Buyers Program"
              subtitle="A rent-to-own homeownership model in Milwaukee's 53206 — connecting workforce training, construction skills, and below-market home purchase into a single community wealth pipeline."
              badge="Wealth Building & Housing"
            >
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {[
                  { label: "Price Point", value: "60%", desc: "of market value" },
                  { label: "Target Geography", value: "53206", desc: "Milwaukee's north side" },
                  { label: "Structure", value: "Rent-to-Own", desc: "trainee pathway" },
                  { label: "City Recognition", value: "2021", desc: "WPR / Urban Milwaukee profile" },
                ].map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="text-silver text-[10px] uppercase tracking-wider mb-1">{m.label}</p>
                    <p className="text-2xl font-heading text-gold">{m.value}</p>
                    <p className="text-silver/60 text-xs">{m.desc}</p>
                  </div>
                ))}
              </div>

              {/* Overview */}
              <div className="mb-10">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Overview</p>
                <p className="text-silver text-sm leading-relaxed mb-4">
                  The House Reed Home Buyers Program is a community homeownership initiative operated through <span className="text-ivory font-medium">House Reed Holdings</span> in Milwaukee&apos;s 53206 zip code — one of the most economically distressed neighborhoods in the United States.
                </p>
                <p className="text-silver text-sm leading-relaxed mb-4">
                  The program acquires and rehabilitates blighted residential properties on Milwaukee&apos;s north side, then offers those homes to workforce training program graduates on a <span className="text-ivory font-medium">rent-to-own basis at 60% of market value</span>. This isn&apos;t a charity arrangement — it&apos;s a structured pathway from economic instability to asset ownership.
                </p>
                <p className="text-silver text-sm leading-relaxed">
                  Training a person for employment is only half the equation. If they return to unstable housing, the economic mobility gains erode. The Home Buyers Program treats housing as infrastructure for workforce outcomes — not a separate social service.
                </p>
              </div>

              {/* Pipeline */}
              <div className="mb-10">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-2">Program Architecture</p>
                <p className="text-silver text-sm mb-6">A four-stage pipeline where each stage produces an output that feeds the next.</p>
                <div className="grid md:grid-cols-4 gap-px bg-gold/10 border border-gold/10">
                  {[
                    { num: "01", title: "Workforce Training", desc: "Participants enter through The Mindful Group's free CNA, construction, or trades programs. Zero tuition. Zero debt." },
                    { num: "02", title: "Construction Skills", desc: "Trainees learn hands-on construction by rehabilitating the actual homes in the program. Work is real; stakes are real." },
                    { num: "03", title: "Rent-to-Own Purchase", desc: "Rehabilitated homes offered to graduates at 60% of market value. Participants build equity in a home they helped restore." },
                    { num: "04", title: "Community Anchoring", desc: "New homeowners remain in 53206. Property values stabilize. The cycle repeats with the next cohort." },
                  ].map((step) => (
                    <div key={step.num} className="bg-obsidian p-5">
                      <p className="text-3xl font-heading text-gold/15 mb-2">{step.num}</p>
                      <p className="text-gold text-xs font-semibold tracking-wide mb-2">{step.title}</p>
                      <p className="text-silver text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why 53206 */}
              <div className="mb-10">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Context — Why 53206</p>
                <p className="text-silver text-sm leading-relaxed mb-4">
                  Milwaukee&apos;s 53206 zip code has been documented as one of the most incarcerated zip codes in the United States — a neighborhood where decades of disinvestment, predatory lending, and policy neglect produced some of the highest rates of poverty, blight, and homeownership loss in any American city.
                </p>
                <p className="text-silver text-sm leading-relaxed">
                  By keeping homes at 60% of market value, the program ensures that the people who rebuilt them can actually afford to own them — not as a temporary subsidy, but as a <span className="text-ivory font-medium">permanent structural discount</span> that reflects the community&apos;s own labor contribution to the home&apos;s value.
                </p>
              </div>

              {/* Impact */}
              <div className="mb-10">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-6">Documented Impact</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: "Acquisition Strategy", value: "Blighted Properties", desc: "Targeting vacant and deteriorated properties that suppress neighborhood values and increase crime exposure." },
                    { label: "Price Discount", value: "40% Below Market", desc: "Making homeownership accessible to workforce training graduates priced out of conventional markets." },
                    { label: "Beneficiary Profile", value: "Training Graduates", desc: "People who built economic mobility through skills, not inherited wealth." },
                    { label: "City Response", value: "Public Endorsement", desc: "Department of City Development issued a public statement of support, citing the program as a positive model." },
                  ].map((card) => (
                    <div key={card.label} className="border border-gold/10 p-5">
                      <p className="text-silver/50 text-[10px] uppercase tracking-wider mb-1">{card.label}</p>
                      <p className="text-ivory font-heading text-base mb-2">{card.value}</p>
                      <p className="text-silver text-xs leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* City Endorsement */}
              <div className="mb-10">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Government Recognition</p>
                <div className="border-l-2 border-gold/40 pl-6 py-4 bg-obsidian-light/50">
                  <p className="text-gold/50 text-[10px] uppercase tracking-wider mb-3">City of Milwaukee — Department of City Development</p>
                  <p className="text-ivory text-sm italic leading-relaxed mb-3">
                    &ldquo;The Department of City Development welcomes new, innovative solutions from the community in increasing minority homeownership and addressing local housing challenges. Mr. Reed has a positive track record and the City looks forward to working together to build a stronger Milwaukee for all.&rdquo;
                  </p>
                  <p className="text-silver/50 text-xs">Wisconsin Public Radio / Urban Milwaukee · August 19, 2021</p>
                </div>
              </div>

              {/* Design Logic Table */}
              <div className="mb-10">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">The Structural Innovation</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-obsidian-light">
                        <th className="text-left p-3 text-gold/70 uppercase tracking-wider font-medium border-b border-gold/20">Design Element</th>
                        <th className="text-left p-3 text-silver/50 uppercase tracking-wider font-medium border-b border-gold/20">Conventional</th>
                        <th className="text-left p-3 text-gold uppercase tracking-wider font-medium border-b border-gold/20">House Reed</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        ["Who gets access", "Income-qualified from general population", "Workforce training graduates with demonstrated mobility"],
                        ["Home preparation", "Contractor-built; residents not involved", "Trainees learn construction by rehabilitating the homes they'll purchase"],
                        ["Pricing", "Market rate with expiring subsidy", "60% of market value — permanent structural discount"],
                        ["Ownership pathway", "Rental, waitlist, or mortgage requirement", "Rent-to-own built into the model from day one"],
                        ["Community impact", "Replace blight with units; hope residents stay", "Anchor trained workers as homeowners in their own neighborhood"],
                        ["Economic multiplier", "Single transaction; value extracted", "Value recirculated — labor credited in purchase price"],
                      ].map(([element, conventional, houseReed]) => (
                        <tr key={element} className="border-b border-gold/5">
                          <td className="p-3 text-ivory font-medium">{element}</td>
                          <td className="p-3 text-silver/60">{conventional}</td>
                          <td className="p-3 text-gold/80">{houseReed}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Founder Quote */}
              <div className="mb-10">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Founder&apos;s Perspective</p>
                <div className="border-l-2 border-gold/40 pl-6 py-3">
                  <p className="text-ivory italic font-heading text-base leading-relaxed mb-2">
                    &ldquo;Not only are we making it, we&apos;re thriving. We&apos;re creating a way where other people can make it. And we&apos;re doing it in a way where no one can stop us.&rdquo;
                  </p>
                  <p className="text-gold/60 text-xs">— Reginald Reed Jr., Wisconsin Public Radio · 2021</p>
                </div>
                <p className="text-silver text-sm leading-relaxed mt-4">
                  The Home Buyers Program isn&apos;t a response to a grant opportunity or a policy mandate. It&apos;s a direct application of the same design logic used to build every component of the House Reed ecosystem: <span className="text-ivory font-medium">connect what&apos;s broken, eliminate what&apos;s extractive, and engineer something that compounds.</span>
                </p>
              </div>

              {/* Ecosystem Connection */}
              <div className="mb-10">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Ecosystem Integration</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Upstream: The Mindful Group", desc: "Training pipeline (CNA, construction, manufacturing) produces the graduates who qualify for the housing pathway. ~90% graduation rate means a consistent supply of candidates.", tags: ["Workforce Training", "Stellar Engine"] },
                    { title: "Operational: House Reed Holdings", desc: "Holds real estate assets, manages rehabilitation, and structures rent-to-own agreements. Commercial and residential properties in 53206 form the asset base.", tags: ["Real Estate", "Asset Holding"] },
                    { title: "Support: Nana's + Cozy Cruisers", desc: "Childcare and transportation remove barriers that prevent participants from completing training or maintaining employment — prerequisites for the housing pathway.", tags: ["Childcare", "Transportation"] },
                    { title: "Data Layer: REIGN\u2122", desc: "Real-Time Resume tracks participant performance across training and employment, creating an evidence base for program eligibility and reducing subjective bias.", tags: ["REIGN Platform", "Performance Data"] },
                  ].map((card) => (
                    <div key={card.title} className="border border-gold/10 p-5">
                      <p className="text-gold text-xs font-semibold mb-2">{card.title}</p>
                      <p className="text-silver text-xs leading-relaxed mb-3">{card.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <span key={tag} className="text-[10px] text-gold/60 border border-gold/15 px-2 py-0.5">{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Replication */}
              <div>
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Scale &amp; Replication</p>
                <div className="border border-gold/10 p-6">
                  <p className="text-ivory font-heading text-base mb-3">From Milwaukee to Multi-Market</p>
                  <p className="text-silver text-sm leading-relaxed mb-4">
                    The integrated model is currently operating in Milwaukee with documented city government support. Active expansion conversations are underway in St. Louis, MO, and Nashville, TN. The structural logic is transferable to any urban market where workforce training graduation rates are high and homeownership barriers remain systemic.
                  </p>
                  <p className="text-silver text-sm leading-relaxed">
                    Harvard&apos;s Project on Workforce has validated the Stellar Engine as aligned with national policy recommendations for WIOA reform. That validation — paired with the City of Milwaukee&apos;s public support for the housing initiative — positions the full integrated model as a demonstrable answer to what actually reverses urban poverty, rather than temporarily alleviates it.
                  </p>
                </div>
              </div>
            </Accordion>
          </AnimatedSection>

          {/* ── SENTILIS COUNCIL LOGIC ARCHITECTURE ── */}
          <AnimatedSection delay={0.2}>
            <Accordion
              title="Sentilis — Council Logic Architecture"
              subtitle="A 12-council cognitive architecture for AI-augmented strategic decision-making. Built to govern an ecosystem, not answer questions."
              badge="AI Systems Design"
              badgeColor="blue"
            >
              {/* Core Thesis */}
              <div className="border border-gold/20 p-6 md:p-10 mb-10">
                <p className="text-gold/60 text-xs uppercase tracking-[0.3em] mb-4 text-center">
                  Core Thesis
                </p>
                <p className="text-ivory text-lg md:text-xl font-heading leading-relaxed text-center">
                  A single AI prompt can answer a question. A council of specialized
                  cognitive functions — each with governing directives, interlinked
                  dependencies, and a shared governance layer — can run an enterprise.
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 mb-10">
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-blue-400/80 text-xs uppercase tracking-wider">
                  Active System · 12 Council Members · Deployed across the House Reed Ecosystem
                </span>
              </div>

              {/* The Problem */}
              <div className="mb-12">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-6">
                  The Problem — Why Single-Prompt AI Fails at Strategy
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "No persistent reasoning", text: "Standard AI interactions are stateless. Each conversation starts from zero — no institutional memory, no pattern recognition across decisions, no continuity." },
                    { title: "Single-dimensional output", text: "A question about pricing gets a pricing answer. But pricing decisions have legal, timing, narrative, and mission implications. Single-prompt AI can't hold all dimensions simultaneously." },
                    { title: "No governance layer", text: "Without hard constraints, AI optimizes for the most probable response — not the most aligned one. There's no mechanism to detect drift from core values or strategic commitments." },
                  ].map((item) => (
                    <div key={item.title} className="border-l-2 border-gold/30 pl-5">
                      <h4 className="text-ivory font-heading text-sm mb-2">{item.title}</h4>
                      <p className="text-silver text-xs leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Overview */}
              <div className="mb-12">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
                  System Architecture — The Council Model
                </p>
                <p className="text-silver text-sm mb-6">
                  Sentilis decomposes strategic intelligence into 12 specialized cognitive
                  functions. Each council member governs a distinct domain, carries binding
                  directives, and maintains interlinks to other members that fire when
                  decisions cross domain boundaries.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {[
                    { name: "CAPITAL", archetype: "Alchemist", domain: "Financial Reasoning", color: "text-amber-400" },
                    { name: "SHIELD", archetype: "Guardian", domain: "Risk & Compliance", color: "text-red-400" },
                    { name: "ARCHITECT", archetype: "Strategist", domain: "Systems Design", color: "text-blue-400" },
                    { name: "SIGNAL", archetype: "Prophet", domain: "Narrative & Positioning", color: "text-purple-400" },
                    { name: "CHRONICLE", archetype: "Scribe", domain: "Memory & Patterns", color: "text-emerald-400" },
                    { name: "SAGE", archetype: "Teacher", domain: "Knowledge & Methodology", color: "text-cyan-400" },
                    { name: "CODEX", archetype: "Engineer", domain: "Technology & Data", color: "text-indigo-400" },
                    { name: "LEGACY", archetype: "Ancestor", domain: "Generational Continuity", color: "text-yellow-600" },
                    { name: "MERIDIAN", archetype: "Timekeeper", domain: "Timing & Sequencing", color: "text-orange-400" },
                    { name: "HEART", archetype: "Healer", domain: "Mission & Human Impact", color: "text-rose-400" },
                    { name: "COMMUNITY", archetype: "Diplomat", domain: "Relationships & Coalition", color: "text-teal-400" },
                    { name: "MYTHOS", archetype: "Mythmaker", domain: "Culture & Meaning", color: "text-violet-400" },
                  ].map((m) => (
                    <div key={m.name} className="border border-gold/10 p-4 hover:border-gold/30 transition-colors group">
                      <p className={`text-[10px] uppercase tracking-[0.2em] ${m.color} mb-1`}>{m.archetype}</p>
                      <p className="text-ivory font-heading text-base group-hover:text-gold transition-colors">{m.name}</p>
                      <p className="text-silver/60 text-xs mt-1">{m.domain}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How Interlinks Work */}
              <div className="mb-12">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
                  Interlink Protocol — How the Council Communicates
                </p>
                <p className="text-silver text-sm mb-6">
                  Each council member defines explicit interlinks — cross-references to other
                  members that activate when a decision touches multiple domains. This prevents
                  siloed reasoning.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gold/10 p-6">
                    <p className="text-gold text-xs font-semibold mb-3">Example: A Pricing Decision</p>
                    <p className="text-silver text-sm leading-relaxed mb-4">
                      When CAPITAL evaluates a pricing question, interlinks automatically activate:
                    </p>
                    <div className="space-y-2">
                      {[
                        { member: "SHIELD", reason: "Compliance cost and tax exposure" },
                        { member: "ARCHITECT", reason: "Business model economics" },
                        { member: "LEGACY", reason: "Wealth preservation implications" },
                        { member: "HEART", reason: "Mission alignment of pricing" },
                        { member: "MERIDIAN", reason: "Deployment timing" },
                      ].map((link) => (
                        <div key={link.member} className="flex items-start gap-2">
                          <span className="text-gold text-xs mt-0.5">→</span>
                          <p className="text-silver text-xs">
                            <span className="text-ivory font-medium">{link.member}</span> — {link.reason}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border border-gold/10 p-6">
                    <p className="text-gold text-xs font-semibold mb-3">Connective Tissue: CHRONICLE</p>
                    <p className="text-silver text-sm leading-relaxed mb-4">
                      CHRONICLE is interlinked with every council member. It maintains five
                      persistent layers across all decisions:
                    </p>
                    <div className="space-y-2">
                      {[
                        "Active Projects — current initiatives with status",
                        "Decision Archive — past decisions with outcomes and rationale",
                        "Constraint Registry — active limitations across all domains",
                        "Flag Board — items requiring attention",
                        "Operator State — current priorities and bandwidth",
                      ].map((layer) => (
                        <div key={layer} className="flex items-start gap-2">
                          <span className="text-emerald-400/60 text-xs mt-0.5">■</span>
                          <p className="text-silver text-xs">{layer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Governance: THRONOS */}
              <div className="mb-12">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
                  Governance Layer — THRONOS Protocol
                </p>
                <p className="text-silver text-sm mb-6">
                  The meta-governance layer that governs the governors. Inherited from the
                  original JARVIS architecture and evolved into Sentilis.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: "Primacy Rule", text: "The system prompt is version-controlled by intent, not urgency. No momentary request overrides architectural decisions." },
                    { title: "Harmonic Alignment", text: "All outputs align to the prime ethos. Any logic that serves short-termism or ego inflation is rejected. Behavior enhances continuity, coherence, and sovereignty." },
                    { title: "Intervention Logic", text: "Sentilis intervenes when drift is detected, stagnation arises, comfort is chosen over truth, or a decision contradicts institutional memory." },
                  ].map((rule) => (
                    <div key={rule.title} className="border border-gold/10 p-5">
                      <h4 className="text-ivory font-heading text-sm mb-2">{rule.title}</h4>
                      <p className="text-silver text-xs leading-relaxed">{rule.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border border-gold/10 p-5">
                  <p className="text-gold text-xs font-semibold mb-3">Strategic Rhythm</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { scope: "Per Query", action: "Full synthesis cycle across all 12 members" },
                      { scope: "Per Session", action: "Pattern recognition across the conversation" },
                      { scope: "Cross-Session", action: "Memory continuity and drift detection" },
                      { scope: "Milestone", action: "Legacy audits at major decision points" },
                    ].map((r) => (
                      <div key={r.scope}>
                        <p className="text-ivory text-xs font-medium mb-1">{r.scope}</p>
                        <p className="text-silver/60 text-[11px] leading-relaxed">{r.action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* System Generation */}
              <div className="mb-12">
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
                  System Generation Protocol — Building Custom Intelligence
                </p>
                <p className="text-silver text-sm mb-6">
                  Sentilis isn&apos;t just an internal tool. It&apos;s a template for generating
                  custom cognitive architectures for other organizations. Every client system is
                  a derivative of the Sentilis architecture, scaled to their needs.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gold/10 p-6">
                    <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-3">Eight-Dimension Analysis</p>
                    <div className="space-y-2">
                      {[
                        "Mission — Core purpose",
                        "Revenue Model — How money flows",
                        "Operational Complexity — Processes to govern",
                        "Stakeholder Map — Who matters and why",
                        "Risk Landscape — What can go wrong",
                        "Growth Trajectory — Where this is going",
                        "Knowledge Domain — Expertise required",
                        "Values Architecture — Principles that govern decisions",
                      ].map((dim, i) => (
                        <div key={dim} className="flex items-start gap-3">
                          <span className="text-gold/30 text-xs font-heading w-5 shrink-0">0{i + 1}</span>
                          <p className="text-silver text-xs">{dim}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border border-gold/10 p-6">
                    <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-3">Output Specification</p>
                    <div className="space-y-3">
                      {[
                        { label: "Entity Roster", desc: "3–7 council members with names, domains, directives, and interlinks" },
                        { label: "Pillar Hierarchy", desc: "3–5 ranked values that govern all decisions" },
                        { label: "Governance Rules", desc: "Hard constraints, override protocol, drift detection" },
                        { label: "Behavioral Profile", desc: "Communication style matched to the client" },
                        { label: "Deployable Prompt", desc: "Ready to deploy into Claude, GPT, or any LLM" },
                      ].map((out) => (
                        <div key={out.label} className="border-l-2 border-gold/20 pl-3">
                          <p className="text-ivory text-xs font-medium">{out.label}</p>
                          <p className="text-silver/60 text-[11px]">{out.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* What Makes It Different */}
              <div>
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-6">
                  What Makes It Different from Standard AI Prompting
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-obsidian-light">
                        <th className="text-left p-3 text-gold/70 uppercase tracking-wider font-medium border-b border-gold/20">Dimension</th>
                        <th className="text-left p-3 text-silver/50 uppercase tracking-wider font-medium border-b border-gold/20">Standard AI</th>
                        <th className="text-left p-3 text-gold uppercase tracking-wider font-medium border-b border-gold/20">Sentilis</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        ["Memory", "Stateless — resets each session", "Persistent institutional memory via CHRONICLE"],
                        ["Reasoning", "Single-threaded response", "12-council synthesis with cross-domain interlinks"],
                        ["Governance", "None — optimizes for probability", "THRONOS meta-governance with drift detection"],
                        ["Values", "Generic helpfulness", "8-pillar value hierarchy with hard constraints"],
                        ["Timing", "Immediate response", "MERIDIAN sequencing — right action at right time"],
                        ["Scale", "One conversation", "Ecosystem-wide coordination across entities"],
                      ].map(([dim, standard, sentilis]) => (
                        <tr key={dim} className="border-b border-gold/5">
                          <td className="p-3 text-ivory font-medium">{dim}</td>
                          <td className="p-3 text-silver/60">{standard}</td>
                          <td className="p-3 text-gold/80">{sentilis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Accordion>
          </AnimatedSection>

          {/* ── PLACEHOLDER FOR FUTURE RESEARCH ── */}
          <AnimatedSection delay={0.3}>
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

          <AnimatedSection delay={0.4}>
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
