import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import HelpBanner from '../src/components/HelpBanner';

test('renders HelpBanner component', () => {
  render(<HelpBanner />);

  // Assert that the heading is rendered
  const headingElement = screen.getByText(/Hey! How can we help you?/i);
  expect(headingElement).toBeInTheDocument();

  // Assert that the support links are rendered
  const supportLinkElements = screen.getAllByRole('link');
  expect(supportLinkElements).toHaveLength(5); // Assuming `supportLinks` has 5 items

  // Assert that the support link labels are rendered correctly
  const supportLinkLabels = ['Contact Us', 'Order Status', 'Deliveries, Returns & Cancellations', 'Missing Bricks', 'Building Instructions']; // Replace with actual link labels
  supportLinkLabels.forEach((label) => {
    const linkElement = screen.getByText(label);
    expect(linkElement).toBeInTheDocument();
  });
});
