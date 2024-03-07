import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import CallToAction from './CallToAction';

test('renders CallToAction component', () => {
  render(<CallToAction />);

  // Assert that the first card is rendered with the correct title, description, and action
  const firstCardTitle = screen.getByText(/Win a LEGO® DREAMZzz™ bundle/i);
  expect(firstCardTitle).toBeInTheDocument();
  const firstCardDescription = screen.getByText(/Enter for your chance to win all of the new sets!/i);
  expect(firstCardDescription).toBeInTheDocument();

  // Assert that the second card is rendered with the correct title, description, and action
  const secondCardTitle = screen.getByText(/Catch them before they're gone!/i);
  expect(secondCardTitle).toBeInTheDocument();
  const secondCardDescription = screen.getByText(/Find out which LEGO® sets are retiring soon./i);
  expect(secondCardDescription).toBeInTheDocument();

  // Assert that the third card is rendered with the correct title, description, and action
  const thirdCardTitle = screen.getByText(/LEGO® Eiffel tower/i);
  expect(thirdCardTitle).toBeInTheDocument();
  const thirdCardDescription = screen.getByText(/Build a model of one of the world’s best-loved landmarks./i);
  expect(thirdCardDescription).toBeInTheDocument();

  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(3);
});
