import { render, screen } from '@testing-library/react';
import DataSafety from './DataSafety';
import { test, expect } from 'vitest';

test('renders DataSafety component', () => {
  render(<DataSafety />);

  // Assert that the heading is rendered
  const headingElement = screen.getByText(/How we keep your data safe/i);
  expect(headingElement).toBeInTheDocument();

  // Assert that the paragraph is rendered
  const paragraphElement = screen.getByText(/We're committed to treating your personal info with care/i);
  expect(paragraphElement).toBeInTheDocument();

  // Assert that the "Learn more" button is rendered
  const buttonElement = screen.getByRole('button', { name: /Learn more/i });
  expect(buttonElement).toBeInTheDocument();
});