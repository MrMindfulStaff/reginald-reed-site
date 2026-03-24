import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-obsidian-light border-t border-gold/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-gold font-heading text-lg mb-4">
              Reginald Reed Jr.
            </h3>
            <p className="text-silver text-sm leading-relaxed mb-4">
              Systems Designer. Liberation Architect.
              <br />
              Building infrastructure that reverses urban poverty from
              Milwaukee&apos;s 53206.
            </p>
            <a
              href="https://www.linkedin.com/in/reginald-reed-jr-01862368/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-silver hover:text-gold transition-colors text-sm"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
          <div>
            <h4 className="text-ivory text-sm uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <div className="space-y-2">
              {[
                { href: "/about", label: "Origin Story" },
                { href: "/ecosystem", label: "The Ecosystem" },
                { href: "/research", label: "Research" },
                { href: "/blog", label: "Insights" },
                { href: "/contact", label: "Connect" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-silver text-sm hover:text-gold transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-ivory text-sm uppercase tracking-wider mb-4">
              The Ecosystem
            </h4>
            <div className="space-y-2 text-silver text-sm">
              <a
                href="https://www.themindfulgroupinc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold transition-colors"
              >
                The Mindful Group
              </a>
              <a
                href="https://www.mindfulstaff.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold transition-colors"
              >
                Mindful Staffing Solutions
              </a>
              <a
                href="https://www.reignos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold transition-colors"
              >
                Mindful Measures (REIGN)
              </a>
              <a
                href="https://www.nanascozycorner.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold transition-colors"
              >
                Nana&apos;s Cozy Corner
              </a>
              <p>Cozy Cruisers</p>
              <a
                href="https://www.skool.com/blackwealth"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold transition-colors"
              >
                Black Entrepreneurship Society
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-silver/60 text-xs">
            &copy; {new Date().getFullYear()} Reginald Reed Jr. / House Reed.
            All rights reserved.
          </p>
          <p className="text-silver/40 text-xs">
            Milwaukee, WI &middot; 53206
          </p>
        </div>
      </div>
    </footer>
  );
}
