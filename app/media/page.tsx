"use client";

import Link from "next/link";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const awards = [
  {
    name: "40 Under 40",
    org: "Milwaukee Business Journal",
    year: "2018",
    description:
      "Recognized as one of Milwaukee's top young leaders making a difference in business and community.",
    url: "https://wtmj.com/news/2019/01/10/mbjs-40-under-40-reginald-reed-jr/",
    color: "text-amber-400",
    borderColor: "border-amber-400/30",
  },
  {
    name: "Future 50",
    org: "BizTimes Milwaukee / MMAC",
    year: "2019",
    description:
      "Mindful Staffing Solutions named one of the fastest-growing companies in southeastern Wisconsin. 1st-Year Winner.",
    url: "https://biztimes.com/mindful-staffing-solutions-llc/",
    color: "text-emerald-400",
    borderColor: "border-emerald-400/30",
  },
  {
    name: "Wisconsin Job Honor Award",
    org: "America's Job Honor Awards",
    year: "2016",
    description:
      "Honoring Wisconsinites who have overcome significant barriers to employment and built careers that uplift their communities.",
    url: "https://www.jobhonor.org/news-wisconsin",
    color: "text-sky-400",
    borderColor: "border-sky-400/30",
  },
];

const nationalMedia = [
  {
    title: "Milwaukee Program Bypasses Banks To Help People Get Into Homes",
    source: "NPR",
    sourceTag: "National Radio",
    date: "August 2021",
    description:
      "National coverage of the rent-to-own housing program where trainees renovate blighted city-owned homes and families purchase at 60% of market value — bypassing traditional banks entirely.",
    url: "https://www.npr.org/2021/08/19/1029173990/milwaukee-program-bypasses-banks-to-help-people-get-into-homes",
    accent: "bg-red-500",
  },
  {
    title:
      "Buying Power: Milwaukee Entrepreneur Helping Build A Path To Homeownership",
    source: "Wisconsin Public Radio",
    sourceTag: "Public Radio",
    date: "August 2021",
    description:
      "Radio feature on building a path to homeownership on Milwaukee's north side — rehabbing and building homes in the 53206 ZIP code, including new construction, townhomes, and transitional living.",
    url: "https://www.wpr.org/diversity-and-inclusion/buying-power-milwaukee-entrepreneur-helping-build-path-homeownership-citys-north-side",
    accent: "bg-blue-500",
  },
];

const localMedia = [
  {
    title:
      "NNS Spotlight: Reggie Reed Wanted to Help the Community. His Solution Was an Employment Agency.",
    source: "Milwaukee Neighborhood News Service",
    sourceTag: "NNS",
    date: "May 2019",
    description:
      "In-depth profile on growing up in 53206 and creating Mindful Staffing Solutions to connect people to real job opportunities.",
    url: "https://milwaukeenns.org/2019/05/23/nns-spotlight-reggie-reed-wanted-to-help-the-community-his-solution-was-an-employment-agency/",
    accent: "bg-gold",
  },
  {
    title: "Local Entrepreneur Building North Side Homeownership",
    source: "Urban Milwaukee",
    sourceTag: "Urban MKE",
    date: "August 2021",
    description:
      "Coverage of the rent-to-own homeownership model and its impact on Milwaukee's north side neighborhoods.",
    url: "https://urbanmilwaukee.com/2021/08/19/local-entrepreneur-building-north-side-homeownership/",
    accent: "bg-emerald-500",
  },
  {
    title:
      "Reggie Reed Wanted to Help the Community; His Solution Was an Employment Agency",
    source: "OnMilwaukee",
    sourceTag: "OnMKE",
    date: "May 2019",
    description:
      "Syndicated feature reaching broader Milwaukee audiences on the founding story of Mindful Staffing Solutions.",
    url: "https://onmilwaukee.com/articles/nns-reggie-reed-employment-agency",
    accent: "bg-orange-500",
  },
  {
    title: "Milwaukee Staffing, Training Firm Relocating to Park Place",
    source: "BizTimes Milwaukee",
    sourceTag: "BizTimes",
    date: "2020",
    description:
      "Mindful Staffing Solutions signs lease for 32,300 sq ft at Park Place — signaling major growth in workforce training capacity.",
    url: "https://biztimes.com/milwaukee-staffing-training-firm-relocating-to-park-place-office-building/",
    accent: "bg-violet-500",
  },
  {
    title: "Milwaukee Entrepreneur Plans to Launch Tech Company",
    source: "Wisconsin Technology Council / MBJ",
    sourceTag: "WI Tech",
    date: "~2019",
    description:
      "Coverage of the launch of Mindful Measures and the Real Time Resume platform — cloud-based metrics on job skill levels for employers.",
    url: "https://wisconsintechnologycouncil.com/milwaukee-business-journal-milwaukee-entrepreneur-plans-to-launch-tech-company/",
    accent: "bg-cyan-500",
  },
  {
    title: '"Mindful Group" quiere cambiar el Mundo',
    source: "Spanish Journal Network",
    sourceTag: "Spanish Journal",
    date: "",
    description:
      "Spanish-language coverage of The Mindful Group's mission — addressing transportation, housing, childcare, and minority business development in underserved communities.",
    url: "https://www.spanishjournal.com/mindful-group-quiere-cambiar-el-mundo/",
    accent: "bg-rose-500",
  },
  {
    title: "Unlocking Potential",
    source: "Metropolitan Milwaukee Association of Commerce",
    sourceTag: "MMAC",
    date: "",
    description:
      "Feature on Mindful Measures and the REIGN platform — built after discovering graduates weren't receiving fair treatment and compensation at their placements.",
    url: "https://www.mmac.org/news/unlocking-potential/",
    accent: "bg-amber-500",
  },
  {
    title: "MBJ's 40 Under 40: Reginald Reed Jr.",
    source: "WTMJ 620 AM / 103.3 FM",
    sourceTag: "WTMJ Radio",
    date: "January 2019",
    description:
      "Radio coverage of the Milwaukee Business Journal's 40 Under 40 recognition — highlighting the Mindful Staffing mission.",
    url: "https://wtmj.com/news/2019/01/10/mbjs-40-under-40-reginald-reed-jr/",
    accent: "bg-sky-500",
  },
];

const communityFeatures = [
  {
    title: "People of Action: Reginald Reed Jr.",
    source: "Rotary Club of Milwaukee",
    date: "August 2022",
    description:
      'Featured as a Rotarian with a "paradigm-shattering formula to lift Milwaukeeans" — from leaving high school in 9th grade to building an ecosystem that reverses poverty.',
    url: "https://www.facebook.com/mkerotary/photos/rotarian-reginald-reed-jr-has-a-paradigm-shattering-formula-to-lift-milwaukeeans/1009414637882819/",
  },
  {
    title: "Construction Entrepreneur from Milwaukee's North Side",
    source: "Milwaukee Journal Sentinel",
    date: "",
    description:
      "Feature on the journey from growing up on Milwaukee's north side to building a construction and workforce development enterprise.",
    url: "https://www.facebook.com/journalsentinel/posts/reginald-reed-an-entrepreneur-in-the-construction-industry-who-grew-up-on-milwau/10159866350578816/",
  },
];

const speakingTopics = [
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
];

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
            From NPR national coverage to Milwaukee&apos;s local newsrooms — the
            work speaks for itself. Featured across radio, print, and digital
            media for workforce innovation, systems design, and building
            liberation infrastructure from 53206.
          </p>
        </AnimatedSection>
      </section>

      {/* Awards */}
      <section className="py-20 bg-obsidian-light">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Recognition
            </p>
            <h2 className="text-3xl md:text-4xl font-heading text-ivory">
              Awards &amp; Honors
            </h2>
          </AnimatedSection>

          <StaggerContainer
            className="grid md:grid-cols-3 gap-8"
            staggerDelay={0.15}
          >
            {awards.map((a) => (
              <StaggerItem key={a.name}>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block border ${a.borderColor} hover:border-gold/50 p-8 transition-all duration-300 group h-full`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`${a.color} text-4xl font-heading leading-none`}
                    >
                      {a.year}
                    </span>
                    <span className="text-gold/30 text-xs uppercase tracking-wider group-hover:text-gold/60 transition-colors">
                      View →
                    </span>
                  </div>
                  <h3 className="text-ivory font-heading text-xl mb-2 group-hover:text-gold transition-colors">
                    {a.name}
                  </h3>
                  <p className="text-gold/70 text-sm mb-4">{a.org}</p>
                  <p className="text-silver text-sm leading-relaxed">
                    {a.description}
                  </p>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* National Media */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              National Coverage
            </p>
            <h2 className="text-3xl md:text-4xl font-heading text-ivory">
              On the National Stage
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {nationalMedia.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Accent bar */}
                    <div
                      className={`${item.accent} w-full md:w-2 h-2 md:h-auto shrink-0`}
                    />
                    <div className="p-8 md:p-10 flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-ivory text-xs font-semibold uppercase tracking-wider bg-white/10 px-3 py-1">
                          {item.sourceTag}
                        </span>
                        {item.date && (
                          <span className="text-silver/60 text-sm">
                            {item.date}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-heading text-ivory group-hover:text-gold transition-colors mb-3">
                        {item.title}
                      </h3>
                      <p className="text-silver text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-silver/50 text-xs">
                          {item.source}
                        </span>
                        <span className="text-gold/40 text-sm group-hover:text-gold transition-colors">
                          Read Full Article →
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Local & Business Media */}
      <section className="py-20 bg-obsidian-light">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Milwaukee &amp; Regional
            </p>
            <h2 className="text-3xl md:text-4xl font-heading text-ivory">
              Local Coverage
            </h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-4" staggerDelay={0.08}>
            {localMedia.map((item) => (
              <StaggerItem key={item.title}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div
                      className={`${item.accent} w-full md:w-1.5 h-1.5 md:h-auto shrink-0`}
                    />
                    <div className="p-6 md:p-8 flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="text-ivory text-xs font-semibold uppercase tracking-wider bg-white/10 px-2.5 py-0.5">
                              {item.sourceTag}
                            </span>
                            {item.date && (
                              <span className="text-silver/50 text-xs">
                                {item.date}
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-heading text-ivory group-hover:text-gold transition-colors mb-2">
                            {item.title}
                          </h3>
                          <p className="text-silver text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <span className="text-gold/30 text-sm group-hover:text-gold transition-colors shrink-0 hidden md:block">
                          Read →
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Community
            </p>
            <h2 className="text-3xl md:text-4xl font-heading text-ivory">
              Community Features
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {communityFeatures.map((item) => (
              <StaggerItem key={item.title}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gold/10 hover:border-gold/30 p-8 transition-all duration-300 group h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gold/60 text-xs uppercase tracking-wider">
                      {item.source}
                    </span>
                    {item.date && (
                      <>
                        <span className="text-gold/20">·</span>
                        <span className="text-silver/50 text-xs">
                          {item.date}
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="text-lg font-heading text-ivory group-hover:text-gold transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-silver text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="text-gold/40 text-sm group-hover:text-gold transition-colors">
                    View Feature →
                  </span>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-20 bg-obsidian-light">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Speaking
            </p>
            <h2 className="text-3xl md:text-4xl font-heading text-ivory mb-6">
              Available Speaking Topics
            </h2>
            <p className="text-silver max-w-2xl mx-auto">
              Keynotes, panels, and workshops on systems design, workforce
              architecture, AI, and liberation infrastructure.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingTopics.map((topic) => (
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

      {/* CTA */}
      <section className="py-24">
        <AnimatedSection className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-ivory mb-6">
            Book a Speaking Engagement
          </h2>
          <p className="text-silver max-w-xl mx-auto mb-10">
            Available for keynotes, panels, workshops, and media interviews.
            Let&apos;s talk about systems, liberation, and building
            infrastructure that lasts.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gold text-obsidian font-semibold text-sm uppercase tracking-wider hover:bg-gold-light transition-colors"
          >
            Get in Touch
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
