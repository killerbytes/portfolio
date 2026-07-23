import { describe, it, expect } from 'vitest';
import { parseFrontmatter, formatProjectSlug, resolveAssetUrl } from '../projectLoader';

describe('projectLoader utility', () => {
  it('should resolve asset URLs cleanly with base URL', () => {
    expect(resolveAssetUrl('https://external.com/img.png')).toBe('https://external.com/img.png');
    expect(resolveAssetUrl('/screenshots/test.png')).toContain('screenshots/test.png');
  });

  it('should format sluggified project IDs cleanly', () => {
    expect(formatProjectSlug('Inventory Management System')).toBe('inventory-management-system');
    expect(formatProjectSlug('SpotiTracks: Playlist Manager')).toBe('spotitracks-playlist-manager');
  });

  it('should parse markdown frontmatter correctly', () => {
    const rawMarkdown = `---
id: inventory-management
title: Inventory Management System
subtitle: High performance stock tracking
date: 2026-07
category: Enterprise Web App
role: Senior Frontend Developer
techStack:
  - React
  - TypeScript
  - Tailwind CSS
thumbnail: /screenshots/inventory-system/dashboard.png
screenshots:
  - /screenshots/inventory-system/dashboard.png
  - /screenshots/inventory-system/sales.png
featured: true
highlights:
  - Real-time stock movement audit logging
  - Sales order generation
---

# Inventory Management System
This is the case study markdown body.`;

    const result = parseFrontmatter(rawMarkdown);

    expect(result.metadata.id).toBe('inventory-management');
    expect(result.metadata.title).toBe('Inventory Management System');
    expect(result.metadata.techStack).toEqual(['React', 'TypeScript', 'Tailwind CSS']);
    expect(result.metadata.featured).toBe(true);
    expect(result.content.trim()).toContain('# Inventory Management System');
  });

  it('should fallback gracefully when frontmatter fields are missing', () => {
    const rawMarkdown = `---
title: Minimal Project
---
Basic content`;

    const result = parseFrontmatter(rawMarkdown);
    expect(result.metadata.title).toBe('Minimal Project');
    expect(result.metadata.techStack).toEqual([]);
    expect(result.metadata.featured).toBe(false);
  });
});
