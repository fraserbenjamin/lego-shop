import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import StarWarsHero from './StarWarsHero';

test('renders StarWarsHero component', () => {
  render(<StarWarsHero />);

  // Assert that the hero title is rendered
  const heroTitle = screen.getByText(/New LEGO® Star Wars™ X-Wing Starfighter™/i);
  expect(heroTitle).toBeInTheDocument();
});
