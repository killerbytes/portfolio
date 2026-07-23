import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';

const TechBadge: React.FC<{ label: string }> = ({ label }) => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-orange-600 dark:text-orange-400 border border-orange-500/40 bg-orange-500/10">
    <span className="w-1.5 h-1.5 bg-orange-500" />
    <span>[ {label} ]</span>
  </div>
);

describe('TechBadge component', () => {
  it('renders technical bracket badge correctly', () => {
    render(<TechBadge label="ABOUT" />);
    expect(screen.getByText('[ ABOUT ]')).toBeInTheDocument();
  });
});
