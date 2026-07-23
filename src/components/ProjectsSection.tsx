import React, { useState } from "react";
import { ProjectCaseStudy } from "../types/portfolio";
import { ProjectModal } from "./ProjectModal";
import { ArrowUpRight, Search, FolderGit2, Terminal } from "lucide-react";

interface ProjectsSectionProps {
  projects: ProjectCaseStudy[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
}) => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectCaseStudy | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allTags = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.metadata.techStack))),
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesTag =
      selectedTag === "All" || project.metadata.techStack.includes(selectedTag);
    const matchesSearch =
      project.metadata.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      project.metadata.subtitle
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      project.metadata.techStack.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesTag && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 md:py-24 relative bg-theme-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-theme pb-4">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-theme-accent">
            <Terminal className="w-4 h-4" />
            <span>FEATURED PROJECTS</span>
          </div>
          <span className="font-mono text-xs text-theme-muted uppercase">
            CASE STUDIES & APPLICATIONS
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 font-mono text-xs font-medium whitespace-nowrap transition-all border ${
                  selectedTag === tag
                    ? "bg-theme-accent text-white border-theme-accent shadow-sm"
                    : "bg-theme-card text-theme-secondary hover:bg-theme-card-hover border-theme"
                }`}
              >
                {tag === "All" ? "[ ALL ]" : tag}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-theme-muted" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 font-mono text-xs rounded-none bg-theme-card border border-theme text-theme-primary focus:outline-none focus:border-theme-accent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const { metadata } = project;
            return (
              <div
                key={metadata.id}
                className="tech-card group flex flex-col justify-between overflow-hidden space-y-4"
              >
                <div className="relative aspect-video bg-slate-950 overflow-hidden border-b border-theme">
                  <img
                    src={metadata.thumbnail}
                    alt={metadata.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-linear-t from-slate-950/80 via-transparent to-transparent" />

                  {metadata.featured && (
                    <div className="absolute top-3 left-3 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider bg-theme-accent text-white shadow-md">
                      [ FEATURED ]
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-xs">
                    <span className="bg-slate-900/90 border border-slate-700 px-2 py-0.5">
                      {metadata.category}
                    </span>
                    <span className="bg-slate-900/90 border border-slate-700 px-2 py-0.5">
                      {metadata.date}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-theme-primary group-hover:text-theme-accent transition-colors">
                      {metadata.title}
                    </h3>
                    <p className="text-xs text-theme-secondary line-clamp-2 leading-relaxed">
                      {metadata.subtitle}
                    </p>
                  </div>

                  {metadata.highlights && metadata.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      {metadata.highlights.slice(0, 3).map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs font-mono text-theme-secondary"
                        >
                          <span className="w-1.5 h-1.5 bg-theme-accent shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {metadata.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 font-mono text-[11px] bg-theme-page text-theme-secondary border border-theme"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider rounded-none text-white bg-theme-accent hover:bg-theme-accent-hover transition-colors shadow-sm"
                    >
                      <span>[ VIEW CASE STUDY & SCREENSHOTS ]</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-theme-card border border-theme p-8 space-y-3 font-mono">
            <FolderGit2 className="w-10 h-10 mx-auto text-theme-muted" />
            <h3 className="text-sm font-bold text-theme-primary">
              No projects found
            </h3>
            <p className="text-xs text-theme-muted">
              Try adjusting your search query or tag filter.
            </p>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
