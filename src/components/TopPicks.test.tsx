import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import TopPicks from './TopPicks';

test('renders TopPicks component', () => {
  render(<TopPicks />);

  // Assert that the heading is rendered
  const headingElement = screen.getByText(/This week's top picks/i);
  expect(headingElement).toBeInTheDocument();

  // Assert that the first product image is rendered
  const firstImageElement = screen.getByAltText(/Bowser/i);
  expect(firstImageElement).toBeInTheDocument();

  // Assert that the first product title is rendered
  const firstTitleElement = screen.getByText(/The ultimate Bowser build/i);
  expect(firstTitleElement).toBeInTheDocument();

  // Assert that the first product description is rendered
  const firstDescriptionElement = screen.getByText(/Display and play with the new LEGO® Super Mario™ The Mighty Bowser™ set/i);
  expect(firstDescriptionElement).toBeInTheDocument();

  // Assert that the second product image is rendered
  const secondImageElement = screen.getByAltText(/Dunder Mifflin/i);
  expect(secondImageElement).toBeInTheDocument();

  // Assert that the second product title is rendered
  const secondTitleElement = screen.getByText(/Return to Dunder Mifflin/i);
  expect(secondTitleElement).toBeInTheDocument();

  // Assert that the second product description is rendered
  const secondDescriptionElement = screen.getByText(/Recreate your favourite episodes with new LEGO® Ideas The Office/i);
  expect(secondDescriptionElement).toBeInTheDocument();
});
