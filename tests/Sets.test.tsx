import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect } from 'vitest';
import Sets from '../src/components/Sets';

test('renders Sets component', () => {
  render(<Sets />);

  // Assert that the heading is rendered
  const headingElement = screen.getByText(/New LEGO® Sets/i);
  expect(headingElement).toBeInTheDocument();

  // Assert that the paragraph is rendered
  const paragraphElement = screen.getByText(/Calling all LEGO® fans!/i);
  expect(paragraphElement).toBeInTheDocument();

  // Assert that the "Find More" button is rendered
  const buttonElement = screen.getByRole('button', { name: /Find More/i });
  expect(buttonElement).toBeInTheDocument();
});

test('loads more sets when "Find More" button is clicked', () => {
  render(<Sets />);

  // Assert that initially only 12 sets are visible and the "Find More" button is rendered
  const initialSets = screen.getAllByRole('button');
  expect(initialSets.length).toBe(13);

  // Click the "Find More" button
  const findMoreButton = screen.getByRole('button', { name: /Find More/i });
  fireEvent.click(findMoreButton);

  // Assert that more sets are loaded
  const updatedSets = screen.getAllByRole('button');
  expect(updatedSets.length).toBeGreaterThan(13);
});
