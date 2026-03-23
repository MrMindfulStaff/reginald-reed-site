"use client";

import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const articles = [
  {
    title:
      "The Closed Loop: How Milwaukee's Social Architecture Produces the Conditions It Claims to Address",
    excerpt:
      "A structural analysis of how Milwaukee's philanthropic ecosystem — board seats, credentialing networks, and symptom-oriented funding — creates a closed loop that manages poverty rather than solving it.",
    date: "March 2026",
    readTime: "6 min read",
    tags: ["Systems Analysis", "Milwaukee", "Philanthropy"],
    url: "https://www.linkedin.com/pulse/closed-loop-how-milwaukees-social-architecture-produces-reed-jr-dqqcc/",
  },
  {
    title:
      "AI Hiring Tools Have Never Preferred a Black Male Candidate. Not Once.",
    excerpt:
      "Peer-reviewed research shows AI resume-screening tools preferred white-associated names 85% of the time. Black men were at the bottom of every model tested. This isn't a glitch — it's architecture. And REIGN was built to replace it.",
    date: "February 2026",
    readTime: "3 min read",
    tags: ["AI", "Workforce", "REIGN"],
    url: "https://www.linkedin.com/pulse/ai-hiring-tools-have-never-preferred-black-male-once-reginald-reed-jr-znohc/",
  },
  {
    title: "Why Workforce Management Is Dead",
    excerpt:
      "For thirty years, workforce management meant scheduling software, time clocks, and payroll integrations — tools designed to track hours and reduce labor costs. What comes next for organizations that depend on labor.",
    date: "January 2026",
    readTime: "4 min read",
    tags: ["Workforce", "Technology", "REIGN"],
    url: "https://www.linkedin.com/pulse/why-workforce-management-dead-reginald-reed-jr-rui9c/",
  },
  {
    title:
      "The Double-Edged Sword of Economic Growth: Who Benefits from Milwaukee's Booming Development?",
    excerpt:
      "Milwaukee's skyline is evolving with major development projects like the Deer District expansion and Fiserv Forum upgrades. But who actually benefits when a city booms — and who gets left behind?",
    date: "January 2025",
    readTime: "3 min read",
    tags: ["Milwaukee", "Economic Development", "Equity"],
    url: "https://www.linkedin.com/pulse/double-edged-sword-economic-growth-who-benefits-from-booming-reed-jr-bjbmc/",
  },
  {
    title:
      "Revolutionary Process, Revolutionary Results: The Mindful Solution",
    excerpt:
      "With workforce development as a key topic and problem facing the modern construction and other industries, a new approach to training, placement, and performance tracking is needed.",
    date: "June 2018",
    readTime: "1 min read",
    tags: ["Workforce", "Mindful Staffing", "Training"],
    url: "https://www.linkedin.com/pulse/revolutionary-process-results-mindful-solution-staffing-reginald-reed/",
  },
  {
    title: "The Great Acquisition",
    excerpt:
      "April 8th, 2016 marks the inception date of Mindful Staffing Solutions. The changes taking place in Milwaukee's workforce landscape — and the vision that started it all.",
    date: "October 2017",
    readTime: "3 min read",
    tags: ["Origin Story", "Mindful Staffing", "Milwaukee"],
    url: "https://www.linkedin.com/pulse/great-acquisition-reginald-reed/",
  },
  {
    title: "The Answer to Construction Workforce Shortage and the Skills Gap",
    excerpt:
      "We face a dire problem in many industries as business growth is compromised by the skills gap and worker shortage. Here's how we're solving it from the ground up.",
    date: "October 2016",
    readTime: "1 min read",
    tags: ["Construction", "Skills Gap", "Workforce"],
    url: "https://www.linkedin.com/pulse/answer-construction-workforce-shortage-skills-gap-reginald-reed/",
  },
  {
    title: "The Evolution of Employment",
    excerpt:
      "Mindful Staffing Solutions is adding a new twist to the way we hire people in the construction industry — addressing multiple issues in not only the industry but also the community in Milwaukee.",
    date: "July 2016",
    readTime: "4 min read",
    tags: ["Workforce", "Construction", "Milwaukee"],
    url: "https://www.linkedin.com/pulse/evolution-employment-reginald-reed/",
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <AnimatedSection className="max-w-5xl mx-auto px-6">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-6">
            Insights
          </p>
          <h1 className="text-4xl md:text-6xl font-heading text-ivory leading-tight mb-8">
            Thinking Out Loud
          </h1>
          <p className="text-silver text-lg max-w-3xl">
            Systems analysis, workforce architecture, AI ethics, and the real
            mechanics of reversing poverty at the infrastructure level. Not the
            nonprofit brochure version — the actual systems thinking.
          </p>
        </AnimatedSection>
      </section>

      {/* Featured Article */}
      <section className="py-8">
        <AnimatedSection className="max-w-4xl mx-auto px-6">
          <a
            href={articles[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gold/20 hover:border-gold/50 transition-all duration-300 p-8 md:p-12 group"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-obsidian text-xs font-semibold uppercase tracking-wider bg-gold px-3 py-1">
                Featured
              </span>
              <span className="text-silver/60 text-sm">
                {articles[0].date}
              </span>
              <span className="text-gold/30">·</span>
              <span className="text-silver/60 text-sm">
                {articles[0].readTime}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading text-ivory group-hover:text-gold transition-colors mb-4">
              {articles[0].title}
            </h2>
            <p className="text-silver leading-relaxed mb-6">
              {articles[0].excerpt}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {articles[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-gold/60 text-xs uppercase tracking-wider border border-gold/20 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-gold/40 text-sm group-hover:text-gold transition-colors">
                Read on LinkedIn →
              </span>
            </div>
          </a>
        </AnimatedSection>
      </section>

      {/* All Articles */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <StaggerContainer className="space-y-6" staggerDelay={0.08}>
            {articles.slice(1).map((article) => (
              <StaggerItem key={article.title}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gold/10 hover:border-gold/30 transition-all duration-300 p-8 md:p-10 group"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="text-silver/60 text-sm">
                      {article.date}
                    </span>
                    <span className="text-gold/30">·</span>
                    <span className="text-silver/60 text-sm">
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading text-ivory group-hover:text-gold transition-colors mb-3">
                    {article.title}
                  </h2>
                  <p className="text-silver text-sm leading-relaxed mb-5">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-gold/60 text-xs uppercase tracking-wider border border-gold/20 px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-gold/30 text-sm group-hover:text-gold transition-colors">
                      Read →
                    </span>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
