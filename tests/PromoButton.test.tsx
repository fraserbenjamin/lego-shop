import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import PromoButton from '../src/components/PromoButton';

test('renders PromoButton component with default props', () => {
  render(<PromoButton label="Click me" />);

  // Assert that the button is rendered
  const buttonElement = screen.getByRole('button', { name: /Click me/i });
  expect(buttonElement).toBeInTheDocument();

  // Assert that the label is rendered
  const labelElement = screen.getByText(/Click me/i);
  expect(labelElement).toBeInTheDocument();

  // Assert that the button has the correct classes
  expect(buttonElement).toHaveClass('font-bold', 'rounded', 'flex', 'py-3', 'px-5', 'space-x-3', 'place-items-center', 'bg-white', 'text-neutral-900');
});

test('renders PromoButton component with night mode', () => {
  render(<PromoButton label="Click me" nightMode />);

  // Assert that the button has the correct classes for night mode
  const buttonElement = screen.getByRole('button', { name: /Click me/i });
  expect(buttonElement).toHaveClass('font-bold', 'rounded', 'flex', 'py-3', 'px-5', 'space-x-3', 'place-items-center', 'bg-neutral-900', 'text-white');
});
