import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-theme-card border-t border-theme font-mono text-xs text-theme-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-none bg-theme-accent flex items-center justify-center text-white font-bold text-xs">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span>© {new Date().getFullYear()} JOEL R. CARLOS. ALL RIGHTS RESERVED.</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[11px]">
            BUILT WITH REACT, TYPESCRIPT, TAILWIND & VITE
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-theme-secondary hover:text-theme-accent transition-colors uppercase font-bold"
            aria-label="Back to top"
          >
            <span>[ BACK TO TOP ]</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
