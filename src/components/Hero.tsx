import React from "react";
import {
  Mail,
  Linkedin,
  FileText,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { highlights } from "@/utils/definitions";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="about"
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="flex items-center justify-between border-b border-theme/60 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 font-mono text-xs uppercase tracking-wider text-theme-accent bg-theme-accent-light border border-theme-accent">
            <span className="w-3 h-3 bg-green-500 animate-pulse rounded-full" />
            <span>AVAILABLE</span>
          </div>
        </div>

        <div className="space-y-6 max-w-5xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-normal text-theme-secondary tracking-tight leading-[1.08]">
            <span className="text-theme-primary font-bold">JOEL R. CARLOS</span>{" "}
            <span className="text-theme-muted font-light">specializing in</span>{" "}
            <span className="text-theme-accent font-extrabold">React</span>,{" "}
            <span className="text-theme-primary font-bold">TypeScript</span>{" "}
            <span className="text-theme-muted font-light">and</span>{" "}
            <span className="text-theme-primary font-bold">
              Enterprise Design Systems
            </span>
          </h1>

          <p className="text-theme-secondary text-base sm:text-lg max-w-3xl leading-relaxed">
            10+ years building enterprise React & TypeScript web applications.
            Experienced in designing reusable UI systems, replacing legacy
            monoliths, and optimizing frontend performance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-3 bg-theme-card border border-theme flex items-center gap-2 font-mono text-xs text-theme-secondary"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center pt-4">
          <div className="md:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-theme-secondary">
              {/* <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-theme-accent" />
                Cabanatuan City, Philippines
              </div> */}
              <a
                href="mailto:joelcarlos02@gmail.com"
                className="flex items-center gap-1 text-theme-secondary hover:text-theme-accent transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                joelcarlos02@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/joel-carlos"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-theme-secondary hover:text-theme-accent transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider rounded-md text-white bg-theme-accent hover:bg-theme-accent-hover shadow-md transition-all"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider rounded-md text-theme-primary bg-theme-card border border-theme hover:bg-theme-card-hover transition-colors"
              >
                <FileText className="w-4 h-4 text-theme-accent" />
                <span>VIEW RESUME</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="tech-card p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-theme pb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1">
                  <Terminal className="w-4 h-4" />
                  SENIOR FRONTEND METRICS{" "}
                  <span className="animate-pulse w-4 h-4 "></span>
                </span>
                <span className="font-mono text-[10px] text-theme-muted">
                  KEY STATS
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-theme-page border border-theme space-y-1">
                  <div className="font-display text-2xl font-extrabold text-theme-accent flex items-center gap-1">
                    <span>↑ 10+</span>
                  </div>
                  <div className="font-mono text-[11px] uppercase text-theme-muted">
                    Years Experience
                  </div>
                </div>

                <div className="p-3 bg-theme-page border border-theme space-y-1">
                  <div className="font-display text-2xl font-extrabold text-theme-accent flex items-center gap-1">
                    <span>↑ 10+</span>
                  </div>
                  <div className="font-mono text-[11px] uppercase text-theme-muted">
                    Apps Delivered
                  </div>
                </div>

                <div className="p-3 bg-theme-page border border-theme space-y-1">
                  <div className="font-display text-2xl font-extrabold text-theme-accent flex items-center gap-1">
                    <span>↑ 4+</span>
                  </div>
                  <div className="font-mono text-[11px] uppercase text-theme-muted">
                    Engineers Mentored
                  </div>
                </div>

                <div className="p-3 bg-theme-page border border-theme space-y-1">
                  <div className="font-display text-2xl font-extrabold text-theme-accent flex items-center gap-1">
                    <span>↑ 100%</span>
                  </div>
                  <div className="font-mono text-[11px] uppercase text-theme-muted">
                    Clean Architecture
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
