import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from '../Header';
import { ThemeProvider } from '../../context/ThemeContext';

describe('Header component', () => {
  it('renders branding and main navigation items', () => {
    render(
      <ThemeProvider>
        <Header onOpenResume={() => {}} />
      </ThemeProvider>
    );

    expect(screen.getByText(/joel/i)).toBeInTheDocument();
    expect(screen.getByText(/carlos/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/skills/i)).toBeInTheDocument();
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
    expect(screen.getByText(/experience/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  it('toggles theme when dark mode button is clicked', () => {
    render(
      <ThemeProvider>
        <Header onOpenResume={() => {}} />
      </ThemeProvider>
    );

    const themeToggles = screen.getAllByRole('button', { name: /toggle theme/i });
    expect(themeToggles.length).toBeGreaterThan(0);

    fireEvent.click(themeToggles[0]);
    expect(document.documentElement.classList.contains('dark') || document.documentElement.classList.contains('light')).toBe(true);
  });
});
