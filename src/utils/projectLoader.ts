import { ProjectCaseStudy, ProjectMetadata } from '../types/portfolio';

export function formatProjectSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function parseFrontmatter(rawMarkdown: string): ProjectCaseStudy {
  const frontmatterRegex = /^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*[\r\n]+([\s\S]*)$/;
  const match = rawMarkdown.match(frontmatterRegex);

  const defaultMeta: ProjectMetadata = {
    id: 'unknown-project',
    title: 'Untitled Project',
    subtitle: '',
    date: '',
    category: 'Web Development',
    role: 'Frontend Developer',
    techStack: [],
    thumbnail: '',
    screenshots: [],
    featured: false,
    highlights: [],
  };

  if (!match) {
    return {
      metadata: defaultMeta,
      content: rawMarkdown,
    };
  }

  const yamlBlock = match[1];
  const content = match[2];

  const metadata: ProjectMetadata = { ...defaultMeta };
  let currentKey: string | null = null;

  const lines = yamlBlock.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    if (trimmed.startsWith('- ') && currentKey) {
      const itemVal = trimmed.replace(/^- /, '').replace(/^['"]|['"]$/g, '');
      if (Array.isArray((metadata as any)[currentKey])) {
        (metadata as any)[currentKey].push(itemVal);
      }
      continue;
    }

    const colonIndex = trimmed.indexOf(':');
    if (colonIndex !== -1) {
      const key = trimmed.slice(0, colonIndex).trim();
      const val = trimmed.slice(colonIndex + 1).trim().replace(/^['"]|['"]$/g, '');

      currentKey = key;

      if (val === '') {
        if (key === 'techStack' || key === 'screenshots' || key === 'highlights') {
          (metadata as any)[key] = [];
        }
      } else if (val === 'true') {
        (metadata as any)[key] = true;
      } else if (val === 'false') {
        (metadata as any)[key] = false;
      } else {
        (metadata as any)[key] = val;
      }
    }
  }

  if (!metadata.id && metadata.title) {
    metadata.id = formatProjectSlug(metadata.title);
  }

  return {
    metadata,
    content,
  };
}

/**
 * Dynamically import all markdown files in src/content/projects/
 * Vite's import.meta.glob with raw import allows zero runtime server dependency!
 */
export function getAllProjects(): ProjectCaseStudy[] {
  const projectModules = import.meta.glob('../content/projects/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
  });

  const projects: ProjectCaseStudy[] = [];

  for (const path in projectModules) {
    const rawContent = projectModules[path] as string;
    if (typeof rawContent === 'string') {
      const parsed = parseFrontmatter(rawContent);
      projects.push(parsed);
    }
  }

  // Sort by featured first, then title
  return projects.sort((a, b) => {
    if (a.metadata.featured && !b.metadata.featured) return -1;
    if (!a.metadata.featured && b.metadata.featured) return 1;
    return a.metadata.title.localeCompare(b.metadata.title);
  });
}
