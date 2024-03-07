import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import ProductCard from './ProductCard';

test('renders ProductCard component', () => {
  const mockProduct = {
    name: 'LEGO Set',
    price: 19.99,
    rating: 4,
    image: 'https://example.com/lego-set.jpg',
  };

  render(<ProductCard {...mockProduct} />);

  // Assert that the product name is rendered
  const nameElement = screen.getByText(/LEGO Set/i);
  expect(nameElement).toBeInTheDocument();

  // Assert that the product price is rendered
  const priceElement = screen.getByText(/£19.99/i);
  expect(priceElement).toBeInTheDocument();

  // Assert that the "Add to Bag" button is rendered
  const buttonElement = screen.getByRole('button', { name: /Add to Bag/i });
  expect(buttonElement).toBeInTheDocument();
});