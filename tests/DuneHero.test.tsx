import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import DuneHero from '../src/components/DuneHero';

test('renders DuneHero component', () => {
  render(<DuneHero />);

  // Assert that the heading is rendered
  const headingElement = screen.getByText(/Recreate an epic aircraft from Dune/i);
  expect(headingElement).toBeInTheDocument();

  // Assert that the paragraph is rendered
  const paragraphElement = screen.getByText(/New LEGO® Icons Dune Atreides Royal Ornithopter set is a thrill for fans/i);
  expect(paragraphElement).toBeInTheDocument();

  // Assert that the "Shop Now" button is rendered
  const shopNowButtonElement = screen.getByRole('button', { name: /Shop Now/i });
  expect(shopNowButtonElement).toBeInTheDocument();

  // Assert that the "Learn More" button is rendered
  const learnMoreButtonElement = screen.getByRole('button', { name: /Learn More/i });
  expect(learnMoreButtonElement).toBeInTheDocument();
});