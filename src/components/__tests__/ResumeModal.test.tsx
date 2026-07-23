import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ResumeModal } from '../ResumeModal';

describe('ResumeModal component', () => {
  it('renders resume details and download button when open', () => {
    const handleClose = vi.fn();
    render(<ResumeModal isOpen={true} onClose={handleClose} />);

    expect(screen.getAllByText(/JOEL R. CARLOS/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/SENIOR FRONTEND DEVELOPER/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/DOWNLOAD/i)).toBeInTheDocument();
  });

  it('triggers onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(<ResumeModal isOpen={true} onClose={handleClose} />);

    const closeButtons = screen.getAllByRole('button', { name: /close modal/i });
    fireEvent.click(closeButtons[0]);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
