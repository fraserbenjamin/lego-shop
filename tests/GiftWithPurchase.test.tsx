import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import GiftWithPurchase from '../src/components/GiftWithPurchase';

test('renders GiftWithPurchase component', () => {
  render(<GiftWithPurchase />);

  // Assert that the image is rendered
  const imageElement = screen.getByAltText('Gift with purchase');
  expect(imageElement).toBeInTheDocument();

  // Assert that the text is rendered
  const textElement = screen.getByText(/A fan-inspired gift with LEGO® purchases over £120\*/i);
  expect(textElement).toBeInTheDocument();

  // Assert that the button is rendered
  const buttonElement = screen.getByRole('button', { name: /Shop Now/i });
  expect(buttonElement).toBeInTheDocument();
});