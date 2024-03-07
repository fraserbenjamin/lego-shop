import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import IconsBirdHero from './IconsBirdHero';

test('renders IconsBirdHero component', () => {
  render(<IconsBirdHero />);

  // Assert that the heading is rendered
  const headingElement = screen.getByText(/Create a captivating centrepiece/i);
  expect(headingElement).toBeInTheDocument();

  // Assert that the paragraph is rendered
  const paragraphElement = screen.getByText(/New LEGO® Icons Kingfisher Bird set adds a splash of nature to any space./i);
  expect(paragraphElement).toBeInTheDocument();

  // Assert that the "Shop Now" button is rendered
  const buttonElement = screen.getByRole('button', { name: /Shop Now/i });
  expect(buttonElement).toBeInTheDocument();
});
