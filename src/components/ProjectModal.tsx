import React, { useEffect, useState } from 'react';
import { ProjectCaseStudy } from '../types/portfolio';
import { ExternalLink, Github, Layers, Calendar, UserCheck, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, lightboxOpen, onClose]);

  if (!project) return null;

  const { metadata, content } = project;
  const screenshots = metadata.screenshots && metadata.screenshots.length > 0
    ? metadata.screenshots
    : [metadata.thumbnail];

  const currentScreenshot = screenshots[activeImageIndex] || metadata.thumbnail;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] tech-card bg-theme-card border border-theme shadow-2xl overflow-hidden flex flex-col my-auto">
        
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-theme bg-theme-page">
          <div>
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-theme-accent">
              [ ▪ CASE STUDY: {metadata.category} ]
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-theme-primary">
              {metadata.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="px-2.5 py-1 font-mono text-xs font-bold text-theme-secondary hover:text-theme-primary border border-theme hover:border-theme-accent transition-colors"
          >
            [ X ]
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-theme-page border border-theme font-mono text-xs">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-theme-accent shrink-0" />
              <div>
                <div className="text-theme-muted uppercase text-[10px]">ROLE</div>
                <div className="font-bold text-theme-primary">{metadata.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-theme-accent shrink-0" />
              <div>
                <div className="text-theme-muted uppercase text-[10px]">DATE</div>
                <div className="font-bold text-theme-primary">{metadata.date}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <Layers className="w-4 h-4 text-theme-accent shrink-0" />
              <div>
                <div className="text-theme-muted uppercase text-[10px]">CATEGORY</div>
                <div className="font-bold text-theme-primary">{metadata.category}</div>
              </div>
            </div>
          </div>

          {/* Screenshot Carousel Showcase */}
          {screenshots.length > 0 && (
            <div className="space-y-3">
              <div className="relative border border-theme bg-slate-950 overflow-hidden group aspect-video flex items-center justify-center">
                <img
                  src={currentScreenshot}
                  alt={`${metadata.title} screenshot ${activeImageIndex + 1}`}
                  className="max-h-full max-w-full object-contain"
                />

                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute top-3 right-3 px-3 py-1 font-mono text-xs font-bold bg-slate-900/90 text-white border border-slate-700 hover:border-theme-accent transition-all opacity-80 group-hover:opacity-100 flex items-center gap-1.5"
                  aria-label="Expand image"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>[ EXPAND ]</span>
                </button>

                {screenshots.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImageIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 text-white border border-slate-700 hover:border-theme-accent transition-colors"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActiveImageIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 text-white border border-slate-700 hover:border-theme-accent transition-colors"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails row */}
              {screenshots.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {screenshots.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-14 overflow-hidden border transition-all ${
                        activeImageIndex === idx
                          ? 'border-theme-accent scale-105 shadow-sm'
                          : 'border-theme opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            {metadata.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-theme-page text-theme-primary border border-theme"
              >
                ▪ {tech}
              </span>
            ))}
          </div>

          {/* Case Study Markdown Content */}
          <div className="prose dark:prose-invert max-w-none text-theme-secondary text-xs sm:text-sm leading-relaxed border-t border-theme pt-6 font-sans">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-theme bg-theme-page font-mono text-xs">
          <div className="flex items-center gap-3">
            {metadata.demoUrl && (
              <a
                href={metadata.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 font-bold text-white bg-theme-accent hover:bg-theme-accent-hover transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>[ LIVE DEMO ↗ ]</span>
              </a>
            )}
            {metadata.githubUrl && (
              <a
                href={metadata.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 font-bold text-theme-primary bg-theme-card border border-theme hover:border-theme-accent transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>[ REPOSITORY ↗ ]</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="px-4 py-2 font-bold text-theme-secondary hover:text-theme-primary border border-theme hover:border-theme-accent transition-colors"
          >
            [ CLOSE ]
          </button>
        </div>

      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 px-3 py-1 font-mono text-xs font-bold bg-slate-900 text-white border border-slate-700 hover:border-theme-accent"
          >
            [ X CLOSE ]
          </button>
          <img
            src={currentScreenshot}
            alt="Fullscreen view"
            className="max-h-[95vh] max-w-[95vw] object-contain border border-slate-800 shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};
