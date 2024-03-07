import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import ReadAllAboutIt from './ReadAllAboutIt';

test('renders ReadAllAboutIt component', () => {
  render(<ReadAllAboutIt />);

  // Assert that the first card title is rendered
  const firstCardTitleElement = screen.getByText(/Best Jurassic World Toys/i);
  expect(firstCardTitleElement).toBeInTheDocument();

  // Assert that the first card description is rendered
  const firstCardDescriptionElement = screen.getByText(/Enter a world of adventure with our collection of LEGO® Jurassic World toys!/i);
  expect(firstCardDescriptionElement).toBeInTheDocument();

  // Assert that the second card title is rendered
  const secondCardTitleElement = screen.getByText(/How PAC-MAN was inspired by the yellow color of LEGO® bricks/i);
  expect(secondCardTitleElement).toBeInTheDocument();

  // Assert that the second card description is rendered
  const secondCardDescriptionElement = screen.getByText(/Our LEGO® designer explains how we turned the iconic 80s arcade game into a LEGO set.../i);
  expect(secondCardDescriptionElement).toBeInTheDocument();

  // Assert that the third card title is rendered
  const thirdCardTitleElement = screen.getByText(/5 of the best LEGO® classic cars and vehicles for adults/i);
  expect(thirdCardTitleElement).toBeInTheDocument();

  // Assert that the third card description is rendered
  const thirdCardDescriptionElement = screen.getByText(/Vroom! As we launch the new LEGO® Icons Land Rover Classic Defender 90, we thought we’d remind you of some of the best classic car sets.../i);
  expect(thirdCardDescriptionElement).toBeInTheDocument();

  // Assert that the fourth card title is rendered
  const fourthCardTitleElement = screen.getByText(/The 8 Best LEGO® ǀ Disney Princess™ Toys for Girls and Boys/i);
  expect(fourthCardTitleElement).toBeInTheDocument();

  // Assert that the fourth card description is rendered
  const fourthCardDescriptionElement = screen.getByText(/Make playtime magical for young princes and princesses with these LEGO® ǀ Disney Princess™ toys, featuring all of their favorite heroines./i);
  expect(fourthCardDescriptionElement).toBeInTheDocument();
});