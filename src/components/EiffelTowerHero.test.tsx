import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import EiffelTowerHero from './EiffelTowerHero';

test('renders EiffelTowerHero component', () => {
  render(<EiffelTowerHero />);

  // Assert that the heading is rendered
  const headingElement = screen.getByText(/Ooh la la!/i);
  expect(headingElement).toBeInTheDocument();

  // Assert that the paragraph is rendered
  const paragraphElement = screen.getByText(/Bring the iconic Eiffel tower to life with the tallest LEGO® set to date./i);
  expect(paragraphElement).toBeInTheDocument();

  // Assert that the "Shop now" button is rendered
  const shopNowButtonElement = screen.getByRole('button', { name: /Shop now/i });
  expect(shopNowButtonElement).toBeInTheDocument();

  // Assert that the "Learn more" button is rendered
  const learnMoreButtonElement = screen.getByRole('button', { name: /Learn more/i });
  expect(learnMoreButtonElement).toBeInTheDocument();
});