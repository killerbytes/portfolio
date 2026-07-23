import React, { useEffect, useState } from "react";
import {
  Download,
  Copy,
  Check,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyText = async () => {
    try {
      const response = await fetch("/resume.txt");
      const text = await response.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] tech-card bg-theme-card border border-theme shadow-2xl overflow-hidden flex flex-col my-auto">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-theme bg-theme-page font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-theme-accent-light border border-theme-accent text-theme-accent">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-theme-accent">
                JOEL R. CARLOS — RESUME
              </div>
              <div className="text-[10px] text-theme-muted uppercase">
                SENIOR FRONTEND DEVELOPER
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs font-semibold text-theme-primary bg-theme-card border border-theme hover:border-theme-accent transition-colors"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              <span>{copied ? "[ COPIED! ]" : "[ COPY TEXT ]"}</span>
            </button>

            <a
              href="/resume.pdf"
              download="Joel_Carlos_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 font-mono text-xs font-bold text-white bg-theme-accent hover:bg-theme-accent-hover transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>[ DOWNLOAD .PDF ]</span>
            </a>

            <button
              onClick={onClose}
              className="px-2.5 py-1.5 font-mono text-xs font-bold text-theme-secondary hover:text-theme-primary border border-theme hover:border-theme-accent transition-colors"
              aria-label="Close modal"
            >
              [ X ]
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-theme-secondary">
          {/* Header Info Card */}
          <div className="p-4 bg-theme-page border border-theme space-y-2 font-mono text-xs">
            <h3 className="font-display text-xl font-extrabold text-theme-primary">
              JOEL R. CARLOS
            </h3>
            <p className="text-theme-accent font-bold flex">
              <Terminal className="w-4 h-4" /> SENIOR FRONTEND DEVELOPER
            </p>
            <p className="text-theme-muted">
              Cabanatuan City, Philippines | Phone: +63 918 400 0368 | Email:
              joelcarlos02@gmail.com
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              PROFESSIONAL SUMMARY
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed text-theme-secondary border-l-2 border-theme-accent pl-4 font-sans">
              Senior Frontend Developer with 10+ years of solid experience
              building scalable, high-performance web applications with a strong
              focus on ReactJS, component-driven architecture, and design
              systems. Proven track record delivering enterprise-grade
              platforms, replacing legacy systems, and building reusable UI
              frameworks used across multiple products. Highly experienced in
              modern JavaScript (ES6+), ReactJS, TypeScript, Tailwind CSS, and
              frontend performance optimization.
            </p>
          </div>

          {/* Work History */}
          <div className="space-y-4 pt-2 font-mono text-xs">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              WORK HISTORY
            </h4>

            {/* Dentsu */}
            <div className="border-l-2 border-theme-accent pl-4 space-y-1 bg-theme-page p-3 border border-theme">
              <div className="font-bold text-theme-primary">
                SENIOR FRONTEND DEVELOPER — Dentsu Myco Services, Inc.
              </div>
              <div className="text-theme-muted">
                July 2022 – Present | Current Project: jp.iqos.com
              </div>
              <p className="font-sans text-xs text-theme-secondary pt-1">
                Developed React component libraries integrated with Drupal,
                built accessible UI components across enterprise packages, and
                collaborated with cross-functional global teams.
              </p>
            </div>

            {/* Peplink */}
            <div className="border-l-2 border-theme-accent pl-4 space-y-1 bg-theme-page p-3 border border-theme">
              <div className="font-bold text-theme-primary">
                SENIOR FRONTEND DEVELOPER — Peplink (Hong Kong)
              </div>
              <div className="text-theme-muted">May 2018 – June 2022</div>
              <p className="font-sans text-xs text-theme-secondary pt-1">
                Led frontend development for 10+ production applications,
                replaced Salesforce with custom React platform, developed custom
                WYSIWYG editor, and mentored 4 junior FE engineers.
              </p>
            </div>

            {/* Recruit.net */}
            <div className="border-l-2 border-theme pl-4 space-y-1 p-2">
              <div className="font-bold text-theme-primary">
                FRONTEND DEVELOPER — Recruit.net (Hong Kong)
              </div>
              <div className="text-theme-muted">March 2017 – 2018</div>
            </div>

            {/* Brydge */}
            <div className="border-l-2 border-theme pl-4 space-y-1 p-2">
              <div className="font-bold text-theme-primary">
                FRONTEND DEVELOPER — Brydge Pte Ltd (Singapore)
              </div>
              <div className="text-theme-muted">March 2016 – December 2016</div>
            </div>

            {/* Favorite Medium */}
            <div className="border-l-2 border-theme pl-4 space-y-1 p-2">
              <div className="font-bold text-theme-primary">
                FRONTEND DEVELOPER — Favorite Medium (Singapore)
              </div>
              <div className="text-theme-muted">October 2011 – March 2016</div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2 pt-2 font-mono text-xs">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              EDUCATION
            </h4>
            <p className="text-xs text-theme-secondary border-l-2 border-theme-accent pl-4">
              <strong className="text-theme-primary font-bold">
                B.S. COMPUTER SCIENCE
              </strong>{" "}
              — AMA Computer University (1996 – 2002)
            </p>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="flex items-center justify-end px-6 py-3 border-t border-theme bg-theme-page font-mono text-xs">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="px-4 py-2 font-bold text-theme-secondary hover:text-theme-primary border border-theme hover:border-theme-accent transition-colors"
          >
            [ CLOSE ]
          </button>
        </div>
      </div>
    </div>
  );
};
