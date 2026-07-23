import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectsSection } from '../ProjectsSection';
import { ProjectCaseStudy } from '../../types/portfolio';

const mockProjects: ProjectCaseStudy[] = [
  {
    metadata: {
      id: 'inventory-management',
      title: 'Inventory & Sales System',
      subtitle: 'Real-time stock tracking and order management',
      date: '2026-07',
      category: 'Enterprise Web App',
      role: 'Senior Frontend Developer',
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
      thumbnail: '/screenshots/inventory-system/dashboard.png',
      screenshots: ['/screenshots/inventory-system/dashboard.png'],
      featured: true,
      highlights: ['Stock Movements', 'Sales Orders'],
    },
    content: 'Full case study markdown for Inventory System.',
  },
  {
    metadata: {
      id: 'spotitracks',
      title: 'SpotiTracks: Playlist Manager',
      subtitle: 'Spotify playlist merger and analytics',
      date: '2026-06',
      category: 'Web App & API Integration',
      role: 'Senior Frontend Developer',
      techStack: ['React', 'Spotify API', 'Tailwind CSS'],
      thumbnail: '/screenshots/spotitracks/playlists.png',
      screenshots: ['/screenshots/spotitracks/playlists.png'],
      featured: true,
      highlights: ['Playlist Merging', 'Track Analytics'],
    },
    content: 'Full case study markdown for SpotiTracks.',
  },
];

describe('ProjectsSection component', () => {
  it('renders project cards for inventory-management and spotitracks', () => {
    render(<ProjectsSection projects={mockProjects} />);

    expect(screen.getByText('Inventory & Sales System')).toBeInTheDocument();
    expect(screen.getByText('SpotiTracks: Playlist Manager')).toBeInTheDocument();
  });

  it('opens project case study modal when clicking View Details', () => {
    render(<ProjectsSection projects={mockProjects} />);

    const viewDetailsButtons = screen.getAllByRole('button', { name: /view case study/i });
    expect(viewDetailsButtons.length).toBeGreaterThan(0);

    fireEvent.click(viewDetailsButtons[0]);
    expect(screen.getByText('Full case study markdown for Inventory System.')).toBeInTheDocument();
  });
});
