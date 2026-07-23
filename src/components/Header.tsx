import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X, FileText, Terminal } from "lucide-react";

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-theme-glass border-b border-theme transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-theme-primary font-display font-bold text-lg tracking-tight group"
        >
          <div className="w-8 h-8 rounded-md bg-theme-accent flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-theme-muted font-normal text-xs">[</span>
            <span className="font-extrabold uppercase">Joel</span>
            <span className="text-theme-accent font-extrabold uppercase">
              Carlos
            </span>
            <span className="text-theme-muted font-normal text-xs">]</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider text-theme-secondary">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-theme-accent transition-colors flex items-center gap-1"
            >
              <span className="text-theme-accent opacity-60">▪</span>
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 font-mono text-xs font-semibold rounded-md text-theme-accent bg-theme-accent-light border border-theme-accent hover:bg-theme-accent hover:text-white transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            RESUME
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-theme-secondary hover:bg-theme-card-hover border border-theme transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-theme-secondary hover:bg-theme-card-hover border border-theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-theme-secondary hover:bg-theme-card-hover border border-theme"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-theme bg-theme-card px-4 pt-2 pb-4 space-y-3 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-theme-primary hover:text-theme-accent"
            >
              ▪ {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-md text-white bg-theme-accent hover:bg-theme-accent-hover transition-colors"
          >
            <FileText className="w-4 h-4" />[ VIEW RESUME ]
          </button>
        </div>
      )}
    </header>
  );
};
