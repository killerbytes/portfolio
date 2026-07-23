export type ThemeMode = 'light' | 'dark';

export interface ProjectMetadata {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  role: string;
  techStack: string[];
  thumbnail: string;
  screenshots: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface ProjectCaseStudy {
  metadata: ProjectMetadata;
  content: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  techStack?: string[];
  currentProject?: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}
