import { ExperienceItem, SkillCategory } from "@/types/portfolio";

export const highlights = [
  "10+ Years Frontend Expertise",
  "React & TypeScript Specialist",
  "Design Systems Architecture",
  "Performance & Accessibility",
];

export const experienceHighlights = [
  {
    code: "01",
    title: "ENTERPRISE DESIGN SYSTEMS & LIBRARIES",
    company: "DENTSU MYCO & PEPLINK",
    description:
      "Built enterprise React component libraries integrated with Drupal, standardizing UI design and speeding up development across multiple product teams.",
  },
  {
    code: "02",
    title: "SALESFORCE MONOLITH REPLACEMENT",
    company: "PEPLINK",
    description:
      "Led the frontend migration off legacy Salesforce, building a custom React CRM & ticketing platform from the ground up.",
  },
  {
    code: "03",
    title: "PERFORMANCE & ACCESSIBILITY",
    company: "ENTERPRISE APPLICATIONS",
    description:
      "Developed WCAG 2.1 compliant UI components, eliminated memory leaks, and optimized render cycles across large-scale single page applications.",
  },
  {
    code: "04",
    title: "ENGINEERING MENTORSHIP & CODE REVIEWS",
    company: "PEPLINK",
    description:
      "Mentored 4 junior frontend developers, standardizing React patterns, strict TypeScript typing, code review pipelines, and testing practices.",
  },
];

export const categories: SkillCategory[] = [
  {
    title: "FRONTEND CORE & UI",
    skills: [
      { name: "ReactJS" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "Tailwind CSS" },
      { name: "HTML5 / CSS3" },
      { name: "ShadCN UI" },
      { name: "Material UI" },
      { name: "Bootstrap" },
    ],
  },
  {
    title: "STATE & FRAMEWORKS",
    skills: [
      { name: "TanStack Query" },
      { name: "Redux / Toolkit" },
      { name: "Zustand" },
      { name: "MobX" },
      { name: "Next.js (App Router)" },
      { name: "Node.js" },
    ],
  },
  {
    title: "TOOLING & DESIGN SYSTEMS",
    skills: [
      { name: "Vite" },
      { name: "Design Systems" },
      { name: "REST APIs" },
      { name: "Component Libraries" },
      { name: "Figma" },
      { name: "ESLint / Prettier" },
    ],
  },
  {
    title: "PERFORMANCE & QUALITY",
    skills: [
      { name: "Performance Optimization" },
      { name: "Accessibility (WCAG a11y)" },
      { name: "Agile / Scrum" },
      { name: "Code Reviews" },
      { name: "Engineering Mentorship" },
    ],
  },
  {
    title: "BACKEND & MULTI-STACK EXPOSURE",
    skills: [
      { name: "Ruby on Rails" },
      { name: "Java" },
      { name: ".NET / C#" },
      { name: "Python" },
      { name: "SQL Databases" },
      { name: "WordPress / CMS" },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "dentsu",
    title: "SENIOR FRONTEND DEVELOPER",
    company: "Dentsu Myco Services, Inc.",
    location: "Philippines (Remote)",
    period: "July 2022 – May 2026",
    currentProject: "jp.iqos.com",
    description: [
      "Developed and maintained React-based component libraries and design system components integrated with Drupal.",
      "Built reusable, accessible UI components used across multiple enterprise web packages.",
      "Optimized frontend performance, scalability, and maintainability for production applications.",
      "Collaborated closely with designers, backend engineers, and stakeholders across multiple teams.",
      "Participated in code reviews, release cycles, and architectural discussions with team leads.",
    ],
    techStack: [
      "ReactJS",
      "Drupal",
      "C#",
      "REST APIs",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    id: "peplink",
    title: "SENIOR FRONTEND DEVELOPER",
    company: "Peplink",
    location: "Hong Kong (Remote)",
    period: "May 2018 – June 2022",
    description: [
      "Led frontend development for 10+ internal and external production applications using React and Next.js.",
      "Designed and built reusable component libraries and shared frontend utilities, improving cross-team velocity.",
      "Replaced Salesforce with a custom-built React enterprise CRM solution, leading frontend architecture.",
      "Developed a custom WYSIWYG editor with advanced rich-text functionality for a large-scale community platform.",
      "Mentored 4 junior frontend developers, improving onboarding efficiency, code quality, and React best practices.",
    ],
    techStack: ["ReactJS", "Next.js", "Material UI", "Redux", "REST APIs"],
  },
  {
    id: "recruit",
    title: "FRONTEND DEVELOPER",
    company: "Recruit.net",
    location: "Hong Kong (Remote)",
    period: "March 2017 – 2018",
    description: [
      "Refactored and modernized legacy frontend codebases for a high-traffic job search platform.",
      "Improved responsiveness, page speed performance, and cross-browser compatibility.",
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "jQuery"],
  },
  {
    id: "brydge",
    title: "FRONTEND DEVELOPER",
    company: "Brydge Pte Ltd",
    location: "Singapore",
    period: "March 2016 – December 2016",
    description: [
      "Solely responsible for frontend development of a professional social networking platform.",
      "Delivered a fully responsive user interface using EmberJS.",
    ],
    techStack: ["EmberJS", "JavaScript", "Sass"],
  },
  {
    id: "favorite-medium",
    title: "FRONTEND DEVELOPER",
    company: "Favorite Medium",
    location: "Singapore",
    period: "October 2011 – March 2016",
    description: [
      "Developed responsive, production-ready web applications using AngularJS, SCSS, Rails, and Node.js.",
      "Converted complex designs into pixel-perfect, cross-browser compatible interfaces following modern web standards.",
      "Built static HTML deployments compiled via Node/Grunt workflows suitable for AWS database-free hosting.",
      "Developed hybrid mobile applications using AngularJS and PhoneGap for Android and iOS platforms.",
    ],
    techStack: [
      "AngularJS",
      "JavaScript",
      "SCSS",
      "Ruby on Rails",
      "Grunt",
      "PhoneGap",
    ],
  },
];
