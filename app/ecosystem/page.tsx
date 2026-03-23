"use client";

import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const entities = [
  {
    num: "01",
    name: "The Mindful Group Inc.",
    type: "501(c)(3) Nonprofit",
    tagline: "Zero-tuition workforce training that creates economic liberation",
    description:
      "The engine of the ecosystem. Delivers CNA, CBRF, and construction training at zero cost to participants from Milwaukee's most underserved zip codes. Every graduate feeds directly into the employment pipeline.",
    feeds: ["Mindful Staffing Solutions", "Nana's Cozy Corner"],
    receives: ["Grant funding", "Community partnerships"],
    metric: "525+ people trained, $60M+ in wages generated",
    url: "https://www.themindfulgroupinc.org",
  },
  {
    num: "02",
    name: "Mindful Staffing Solutions",
    type: "For-Profit",
    tagline: "Connecting trained talent to employment that builds wealth",
    description:
      "Places Mindful Group graduates into CNA, caregiving, and construction positions. Converts training completions into sustained employment. The revenue engine that proves the model works and funds ecosystem expansion.",
    feeds: [
      "The Mindful Group (revenue cycle)",
      "Cozy Cruisers (transport demand)",
    ],
    receives: ["The Mindful Group (trained talent)"],
    metric: "Direct employment pipeline from training to placement",
    url: "https://www.mindfulstaff.com",
  },
  {
    num: "03",
    name: "Mindful Measures Inc.",
    type: "Technology",
    tagline: "REIGN — The AI-Powered Workforce Operating System",
    description:
      "The intelligence layer of the ecosystem. REIGN transforms employee time data into actionable business intelligence — AI-powered pattern recognition for workforce decisions, predictive labor estimating, skill-based scheduling, and performance simulations. Its Real-Time Resume feature builds cloud-based profiles continuously updated with verified work history, earned badges, and performance milestones — portable across careers. Delivers 20-30% productivity improvements, 15-25% labor cost reduction, and 30-50% turnover reduction across the organizations it serves.",
    feeds: ["All ecosystem entities (workforce intelligence, scheduling, performance tracking)"],
    receives: ["All entities (time data, skills data, project assignments)"],
    metric: "AI-powered workforce operating system across cloud, web, iOS, and Android",
    url: "https://www.reignos.com",
  },
  {
    num: "04",
    name: "Nana's Cozy Corner",
    type: "Childcare",
    tagline:
      "Childcare infrastructure that removes the #1 barrier to employment",
    description:
      "Without childcare, the training pipeline breaks. Nana's Cozy Corner solves the critical barrier that prevents parents — especially single mothers — from completing training and maintaining employment. This isn't a daycare. It's essential workforce infrastructure.",
    feeds: [
      "Mindful Group (enables attendance)",
      "Mindful Staffing (enables retention)",
    ],
    receives: [
      "Mindful Group (referrals)",
      "Mindful Staffing (employee families)",
    ],
    metric: "Barrier removal enabling workforce participation",
    url: "https://www.nanascozycorner.com",
  },
  {
    num: "05",
    name: "Cozy Cruisers",
    type: "Transportation",
    tagline: "Transportation that closes the last-mile gap to opportunity",
    description:
      "When people can't get to training or work, the entire pipeline fails. Cozy Cruisers provides reliable transport connecting participants to training sites and job placements — closing the last-mile gap in Milwaukee's workforce ecosystem.",
    feeds: ["Mindful Group (training access)", "Mindful Staffing (job access)"],
    receives: [
      "Mindful Group (transport demand)",
      "Mindful Staffing (employee needs)",
    ],
    metric: "Last-mile transportation removing mobility barriers",
  },
];

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
            Five entities. One interconnected system. Every output becomes an
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
              Supported by: Childcare + Transportation + AI Intelligence
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
