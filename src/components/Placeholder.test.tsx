import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Placeholder from './Placeholder';

test('renders Placeholder component', () => {
  render(<Placeholder />);

  // Assert that the heading is rendered
  const headingElement = screen.getByText(/It's looking empty in here!/i);
  expect(headingElement).toBeInTheDocument();

  // Assert that the subheading is rendered
  const subheadingElement = screen.getByText(/Open the README.md to get started./i);
  expect(subheadingElement).toBeInTheDocument();
});