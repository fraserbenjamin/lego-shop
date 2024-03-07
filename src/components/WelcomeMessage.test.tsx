import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import WelcomeMessage from './WelcomeMessage';

test('renders WelcomeMessage component', () => {
  render(<WelcomeMessage />);

  // Assert that the welcome message paragraph is rendered
  const paragraphElement = screen.getByText(/Welcome to the Official LEGO® Shop/i);
  expect(paragraphElement).toBeInTheDocument();

  // Assert that the "Christmas gifts" link is rendered
  const christmasGiftsLink = screen.getByRole('link', { name: /Christmas gifts/i });
  expect(christmasGiftsLink).toBeInTheDocument();

  // Assert that the "birthday treats" link is rendered
  const birthdayTreatsLink = screen.getByRole('link', { name: /birthday treats/i });
  expect(birthdayTreatsLink).toBeInTheDocument();

  // Assert that the "ages" link is rendered
  const agesLink = screen.getByRole('link', { name: /ages/i });
  expect(agesLink).toBeInTheDocument();

  // Assert that the "toddlers" link is rendered
  const toddlersLink = screen.getByRole('link', { name: /toddlers/i });
  expect(toddlersLink).toBeInTheDocument();

  // Assert that the "interests" link is rendered
  const interestsLink = screen.getByRole('link', { name: /interests/i });
  expect(interestsLink).toBeInTheDocument();

  // Assert that the "LEGO® sets for adults" link is rendered
  const adultSetsLink = screen.getByRole('link', { name: /LEGO® sets for adults/i });
  expect(adultSetsLink).toBeInTheDocument();
});
