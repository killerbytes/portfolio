import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider, useTheme } from '../../context/ThemeContext';

const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe('ThemeContext CSS Variables integration', () => {
  it('applies dark/light classes to root document element', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const toggleButton = screen.getByText('Toggle Theme');
    const rootElement = document.documentElement;

    // Initial state check
    expect(rootElement.classList.contains('dark') || rootElement.classList.contains('light')).toBe(true);

    // Toggle state
    fireEvent.click(toggleButton);
    expect(rootElement.classList.contains('dark') || rootElement.classList.contains('light')).toBe(true);
  });
});
