"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const posts = [
  {
    slug: "why-i-build-systems-not-programs",
    title: "Why I Build Systems, Not Programs",
    excerpt:
      "Poverty is a system. You can't defeat a system with a program. I grew up in 53206 and decided to build better infrastructure instead of waiting for better programs.",
    date: "March 2026",
    readTime: "2 min read",
    tags: ["Systems Design", "Workforce", "53206"],
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
            The real mechanics of how you reverse poverty at the infrastructure
            level. Not the nonprofit brochure version — the actual systems
            architecture.
          </p>
        </AnimatedSection>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <article className="border border-gold/10 hover:border-gold/30 transition-all duration-300 p-8 md:p-12 group">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="text-silver/60 text-sm">{post.date}</span>
                  <span className="text-gold/30">·</span>
                  <span className="text-silver/60 text-sm">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-heading text-ivory group-hover:text-gold transition-colors mb-4">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-silver leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-gold/60 text-xs uppercase tracking-wider border border-gold/20 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}

          {posts.length === 1 && (
            <AnimatedSection delay={0.2}>
              <div className="text-center py-12 border border-gold/5 p-8">
                <p className="text-silver/60 text-sm">
                  More insights coming soon.
                </p>
                <p className="text-gold/40 text-xs mt-2 uppercase tracking-wider">
                  Subscribe to get notified
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
}
