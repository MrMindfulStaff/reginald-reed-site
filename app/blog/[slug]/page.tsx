import Link from "next/link";

export default function BlogPost() {
  return (
    <>
      <article className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="text-gold text-sm uppercase tracking-wider hover:text-gold-light mb-8 inline-block">
            ← Back to Insights
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-silver/60 text-sm">March 2026</span>
            <span className="text-gold/30">·</span>
            <span className="text-silver/60 text-sm">2 min read</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-heading text-ivory leading-tight mb-12">
            Why I Build Systems, Not Programs
          </h1>

          <div className="prose-custom space-y-6 text-silver leading-relaxed">
            <p className="text-lg">
              I grew up in 53206 — the most incarcerated zip code in the country. No degree. No connections.
              No blueprint for what I was about to build. But I had something more dangerous than credentials:
              I had a systems mind in a world that only funds silos.
            </p>

            <h2 className="text-2xl font-heading text-ivory mt-12 mb-4">
              The Problem With How We Fight Poverty
            </h2>
            <p>
              Every year, billions of dollars flow into workforce development, housing programs, childcare subsidies,
              and transportation initiatives. They all operate independently. They all measure their own metrics.
              And they all fail to solve the actual problem — because poverty is a system, and you can&apos;t defeat
              a system with a program.
            </p>
            <p>
              A single mother in Milwaukee doesn&apos;t have a training problem OR a childcare problem OR a
              transportation problem. She has all three simultaneously. And if you solve two out of three,
              you&apos;ve solved nothing.
            </p>

            <h2 className="text-2xl font-heading text-ivory mt-12 mb-4">
              The Ecosystem Approach
            </h2>
            <p>
              That&apos;s why I built House Reed as an integrated ecosystem, not a collection of separate organizations.
              The Mindful Group trains people. Mindful Staffing places them. Nana&apos;s Cozy Corner watches their kids
              while they&apos;re in training. Cozy Cruisers gets them there. And Mindful Measures (REIGN) provides
              the intelligence layer that makes the whole system visible and optimizable.
            </p>
            <p>
              Each entity feeds the others. The output of one becomes the input for another. Revenue from staffing
              placements validates the training model. Childcare enrollment grows as training enrollment grows.
              Transportation demand maps directly to training schedules and job site locations.
            </p>

            <h2 className="text-2xl font-heading text-ivory mt-12 mb-4">
              525+ People. $60M+ in Wages. Zero Tuition.
            </h2>
            <p>
              These numbers didn&apos;t come from a single grant cycle or a lucky contract. They came from designing
              a self-reinforcing system where every dollar invested creates compounding returns across multiple entities.
              That&apos;s not program management — that&apos;s economic architecture.
            </p>
            <p>
              The question I&apos;m always asking isn&apos;t &ldquo;how do we help more people?&rdquo; It&apos;s
              &ldquo;how do we build infrastructure that makes help unnecessary?&rdquo; Systems that create economic
              participation, not dependency. Pathways that generate wealth, not just wages.
            </p>

            <h2 className="text-2xl font-heading text-ivory mt-12 mb-4">What&apos;s Next</h2>
            <p>
              I&apos;m using this space to share the thinking behind the building. Research on alternative economic models.
              Findings from our AI systems work. The real mechanics of how you reverse poverty at the infrastructure
              level — not the nonprofit brochure version, but the actual systems architecture.
              If you build things that matter, this is where we connect.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-gold/10">
            <Link
              href="/contact"
              className="text-gold text-sm uppercase tracking-wider hover:text-gold-light transition-colors gold-underline"
            >
              Start a conversation →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
