import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import TelephoneBoxHero from './TelephoneBoxHero';

test('renders TelephoneBoxHero component', () => {
  render(<TelephoneBoxHero />);

  // Assert that the heading is rendered
  const headingElement = screen.getByText(/London calling/i);
  expect(headingElement).toBeInTheDocument();

  // Assert that the paragraph is rendered
  const paragraphElement = screen.getByText(/Recreate a British cultural icon with the new Red London Telephone Box/i);
  expect(paragraphElement).toBeInTheDocument();

  // Assert that the "Shop now" button is rendered
  const shopNowButtonElement = screen.getByRole('button', { name: /Shop now/i });
  expect(shopNowButtonElement).toBeInTheDocument();

  // Assert that the "Learn more" button is rendered
  const learnMoreButtonElement = screen.getByRole('button', { name: /Learn more/i });
  expect(learnMoreButtonElement).toBeInTheDocument();
});
