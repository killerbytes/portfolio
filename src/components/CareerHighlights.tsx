import React from "react";
import { ArrowDownRight, Terminal } from "lucide-react";
import { experienceHighlights } from "@/utils/definitions";

export const CareerHighlights: React.FC = () => {
  return (
    <section className="py-16 bg-theme-page border-y border-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-theme pb-4">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-theme-accent">
            <Terminal className="w-4 h-4" />
            <span>CAREER HIGHLIGHTS</span>
          </div>
          <span className="font-mono text-xs text-theme-muted uppercase">
            CORE IMPACT OVER 10+ YEARS
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experienceHighlights.map((item) => (
            <div key={item.code} className="tech-card p-6 md:p-8 space-y-4">
              <div className="flex items-start justify-between border-b border-theme pb-3">
                <div className="flex items-center gap-2 font-display text-lg sm:text-xl font-bold tracking-tight text-theme-accent">
                  <ArrowDownRight className="w-5 h-5 shrink-0 text-theme-accent" />
                  <span>{item.title}</span>
                </div>
                <span className="font-mono text-xs font-bold text-theme-muted">
                  [ {item.code} ]
                </span>
              </div>

              <div className="font-mono text-xs uppercase tracking-wider text-theme-secondary font-semibold">
                {item.company}
              </div>

              <p className="text-xs sm:text-sm text-theme-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
