import { categories } from "@/utils/definitions";
import { Terminal } from "lucide-react";
import React from "react";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-theme pb-4">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-theme-accent">
            <Terminal className="w-4 h-4" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <span className="font-mono text-xs text-theme-muted uppercase">
            SKILLSET & TOOLING
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="tech-card p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-theme pb-3">
                <h3 className="font-mono text-xs font-bold tracking-wider text-theme-accent uppercase">
                  [ ▪ {cat.title} ]
                </h3>
                <span className="font-mono text-[10px] text-theme-muted">
                  0{idx + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 font-mono text-xs rounded-none bg-theme-page text-theme-primary border border-theme hover:border-theme-accent transition-colors"
                  >
                    ▪ {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
