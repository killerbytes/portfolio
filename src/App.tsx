import React, { useState, useMemo } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CareerHighlights } from './components/CareerHighlights';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ResumeModal } from './components/ResumeModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { getAllProjects } from './utils/projectLoader';

export const AppContent: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  // Load all markdown project case studies statically
  const projects = useMemo(() => getAllProjects(), []);

  return (
    <div className="min-h-screen bg-theme-page text-theme-primary transition-colors duration-200 flex flex-col">
      <Header onOpenResume={() => setResumeOpen(true)} />
      
      <main className="flex-1">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <CareerHighlights />
        <SkillsSection />
        <ProjectsSection projects={projects} />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      <Footer />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
