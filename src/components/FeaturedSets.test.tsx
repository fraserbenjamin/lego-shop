import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import FeaturedSets from './FeaturedSets';

test('renders FeaturedSets component', () => {
  // Render the component
  render(<FeaturedSets />);

  // Assert that the heading is rendered
  const headingElement = screen.getByText(/Featured Sets/i);
  expect(headingElement).toBeInTheDocument();

  // Assert that the product cards are rendered
  const productCards = screen.getAllByRole('button');
  expect(productCards.length).toBe(6);
});
