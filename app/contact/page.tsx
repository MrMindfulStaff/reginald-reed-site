"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const inquiryTypes = [
  "Speaking Engagement",
  "Partnership / Collaboration",
  "Consulting Inquiry",
  "Media / Press",
  "General",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <AnimatedSection className="max-w-5xl mx-auto px-6">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-6">
            Connect
          </p>
          <h1 className="text-4xl md:text-6xl font-heading text-ivory leading-tight mb-8">
            Let&apos;s Build <span className="text-gold">Together</span>
          </h1>
          <p className="text-silver text-lg max-w-3xl">
            Speaking on systems design, workforce architecture, AI, and
            liberation infrastructure. Open to partnerships, consulting, and
            collaborations that move the needle on urban poverty.
          </p>
        </AnimatedSection>
      </section>

      {/* Form + Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16">
          {/* Form */}
          <AnimatedSection className="md:col-span-3" delay={0.1}>
            {submitted ? (
              <div className="border border-gold/30 p-12 text-center">
                <p className="text-gold text-2xl font-heading mb-4">
                  Message Received.
                </p>
                <p className="text-silver">
                  I&apos;ll review your inquiry and respond within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-silver text-xs uppercase tracking-wider block mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-obsidian-light border border-gold/20 px-4 py-3 text-ivory text-sm focus:border-gold focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-silver text-xs uppercase tracking-wider block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-obsidian-light border border-gold/20 px-4 py-3 text-ivory text-sm focus:border-gold focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-silver text-xs uppercase tracking-wider block mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    className="w-full bg-obsidian-light border border-gold/20 px-4 py-3 text-ivory text-sm focus:border-gold focus:outline-none transition-colors"
                    placeholder="Company or organization"
                  />
                </div>

                <div>
                  <label className="text-silver text-xs uppercase tracking-wider block mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    required
                    className="w-full bg-obsidian-light border border-gold/20 px-4 py-3 text-ivory text-sm focus:border-gold focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select type</option>
                    {inquiryTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-silver text-xs uppercase tracking-wider block mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full bg-obsidian-light border border-gold/20 px-4 py-3 text-ivory text-sm focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about what you're working on and how we might collaborate."
                  />
                </div>

                <button
                  type="submit"
                  className="px-10 py-4 bg-gold text-obsidian font-semibold text-sm uppercase tracking-wider hover:bg-gold-light transition-colors w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            )}
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection className="md:col-span-2 space-y-10" delay={0.3}>
            <div>
              <h3 className="text-gold font-heading text-lg mb-4">
                Speaking Topics
              </h3>
              <ul className="space-y-3 text-silver text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">—</span>
                  <span>Systems Design for Social Impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">—</span>
                  <span>Building Liberation Infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">—</span>
                  <span>AI Architecture for Workforce Operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">—</span>
                  <span>
                    Reversing Urban Poverty Through Enterprise Ecosystems
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">—</span>
                  <span>
                    From 53206 to $60M — Building Without a Blueprint
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gold font-heading text-lg mb-4">
                Direct Contact
              </h3>
              <div className="space-y-3 text-silver text-sm">
                <p>
                  <span className="text-gold/60 uppercase tracking-wider text-xs block mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:reginald@mindfulstaff.com"
                    className="hover:text-gold transition-colors"
                  >
                    reginald@mindfulstaff.com
                  </a>
                </p>
                <p>
                  <span className="text-gold/60 uppercase tracking-wider text-xs block mb-1">
                    Based In
                  </span>
                  Milwaukee, WI · 53206
                </p>
                <p>
                  <span className="text-gold/60 uppercase tracking-wider text-xs block mb-1">
                    LinkedIn
                  </span>
                  <a
                    href="https://www.linkedin.com/in/reginald-reed-jr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    linkedin.com/in/reginald-reed-jr
                  </a>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
