import React from "react";
import { ArrowDownRight, Terminal } from "lucide-react";
import { experiences } from "@/utils/definitions";

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 relative bg-theme-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-theme pb-4">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-theme-accent">
            <Terminal className="w-4 h-4" />
            <span>WORK EXPERIENCE</span>
          </div>
          <span className="font-mono text-xs text-theme-muted uppercase">
            10+ YEARS CAREER TIMELINE
          </span>
        </div>

        <div className="space-y-6">
          {experiences.map((item) => (
            <div key={item.id} className="tech-card p-6 md:p-8 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-theme pb-3">
                <div>
                  <div className="flex items-center gap-2 font-display text-lg sm:text-xl font-bold text-theme-primary">
                    <ArrowDownRight className="w-5 h-5 text-theme-accent shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-theme-accent uppercase mt-0.5">
                    {item.company} — {item.location}
                  </div>
                </div>

                <div className="font-mono text-xs text-theme-muted">
                  [ {item.period} ]
                </div>
              </div>

              <ul className="space-y-2 font-sans text-xs sm:text-sm text-theme-secondary">
                {item.description.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="font-mono text-theme-accent font-bold">
                      ▪
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {item.techStack && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 font-mono text-[11px] bg-theme-page text-theme-secondary border border-theme"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* <div className="tech-card p-6 flex items-center gap-4">
          <div className="p-3 bg-theme-accent-light border border-theme-accent text-theme-accent shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display text-base font-bold text-theme-primary uppercase">
              B.S. Computer Science
            </h3>
            <p className="font-mono text-xs text-theme-muted">
              AMA Computer University | 1996 – 2002
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};
