"use client";

import { useState, useRef, useEffect } from "react";

interface AccordionProps {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function Accordion({
  title,
  subtitle,
  badge,
  badgeColor = "gold",
  defaultOpen = false,
  children,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(
    defaultOpen ? undefined : 0
  );

  useEffect(() => {
    if (!contentRef.current) return;
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
      // After transition, set to auto so it can resize naturally
      const timer = setTimeout(() => setHeight(undefined), 400);
      return () => clearTimeout(timer);
    } else {
      // First set to explicit height so transition can work
      setHeight(contentRef.current.scrollHeight);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setHeight(0);
        });
      });
    }
  }, [isOpen]);

  const badgeColors: Record<string, string> = {
    gold: "border-gold/20 text-gold/60",
    emerald: "border-emerald-400/20 text-emerald-400/60",
    blue: "border-blue-400/20 text-blue-400/60",
  };

  return (
    <div className="border border-gold/10 hover:border-gold/20 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 md:p-8 flex items-start md:items-center justify-between gap-4 group cursor-pointer"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-1">
            {badge && (
              <span
                className={`text-[10px] uppercase tracking-[0.2em] border px-2 py-0.5 ${badgeColors[badgeColor] || badgeColors.gold}`}
              >
                {badge}
              </span>
            )}
          </div>
          <h3 className="text-xl md:text-2xl font-heading text-ivory group-hover:text-gold transition-colors">
            {title}
          </h3>
          {subtitle && (
            <p className="text-silver/70 text-sm mt-1">{subtitle}</p>
          )}
        </div>
        <div
          className={`shrink-0 w-8 h-8 border border-gold/30 flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "rotate-45 border-gold/60 bg-gold/5"
              : "rotate-0 group-hover:border-gold/50"
          }`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="text-gold"
          >
            <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </button>

      <div
        ref={contentRef}
        style={{ height: height !== undefined ? `${height}px` : "auto" }}
        className="overflow-hidden transition-[height] duration-400 ease-in-out"
      >
        <div className="px-6 md:px-8 pb-8">{children}</div>
      </div>
    </div>
  );
}
