import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProjectModal } from '../ProjectModal';
import { ProjectCaseStudy } from '../../types/portfolio';

const mockProject: ProjectCaseStudy = {
  metadata: {
    id: 'inventory-management',
    title: 'Inventory Management System',
    subtitle: 'Real-time stock tracking',
    date: '2026-07',
    category: 'Enterprise Web App',
    role: 'Senior Frontend Developer',
    techStack: ['React', 'TypeScript'],
    thumbnail: '/screenshots/inventory-system/dashboard.png',
    screenshots: ['/screenshots/inventory-system/dashboard.png'],
    featured: true,
    highlights: ['Stock Movements'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
  content: '# Case Study Content',
};

describe('ProjectModal component', () => {
  it('renders technical bracket tags and project title when open', () => {
    const handleClose = vi.fn();
    render(<ProjectModal project={mockProject} onClose={handleClose} />);

    expect(screen.getByText('Inventory Management System')).toBeInTheDocument();
    expect(screen.getAllByText(/case study/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/React/i)).toBeInTheDocument();
    expect(screen.getByText(/TypeScript/i)).toBeInTheDocument();
  });

  it('triggers onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(<ProjectModal project={mockProject} onClose={handleClose} />);

    const closeBtns = screen.getAllByRole('button', { name: /close modal/i });
    expect(closeBtns.length).toBeGreaterThan(0);
    fireEvent.click(closeBtns[0]);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
