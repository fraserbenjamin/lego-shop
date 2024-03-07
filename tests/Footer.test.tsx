
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Footer from '../src/components/Footer';

test('renders Footer component', () => {
  render(<Footer />);

  // Assert that the LEGO logo is rendered
  const legoLogoElement = screen.getByAltText('LEGO');
  expect(legoLogoElement).toBeInTheDocument();

  // Assert that the country is rendered
  const countryElement = screen.getByText('United Kingdom');
  expect(countryElement).toBeInTheDocument();

  // Assert that the email input field is rendered
  const emailInputElement = screen.getByPlaceholderText('Your email address');
  expect(emailInputElement).toBeInTheDocument();

  // Assert that the subscribe button is rendered
  const subscribeButtonElement = screen.getByRole('button');
  expect(subscribeButtonElement).toBeInTheDocument();

  // Assert that the footer links are rendered
  const privacyPolicyLinkElement = screen.getByText('Privacy Policy');
  expect(privacyPolicyLinkElement).toBeInTheDocument();

  const cookiesLinkElement = screen.getByText('Cookies');
  expect(cookiesLinkElement).toBeInTheDocument();

  const legalNoticeLinkElement = screen.getByText('Legal notice');
  expect(legalNoticeLinkElement).toBeInTheDocument();

  const termsOfUseLinkElement = screen.getByText('Terms of Use');
  expect(termsOfUseLinkElement).toBeInTheDocument();

  const digitalWellbeingLinkElement = screen.getByText('Digital wellbeing');
  expect(digitalWellbeingLinkElement).toBeInTheDocument();

  const accessibilityLinkElement = screen.getByText('Accessibility');
  expect(accessibilityLinkElement).toBeInTheDocument();

  const cookieSettingsLinkElement = screen.getByText('Cookie Settings');
  expect(cookieSettingsLinkElement).toBeInTheDocument();

  // Assert that the copyright notice is rendered
  const copyrightNoticeElement = screen.getByText(/This is a demonstration website/i);
  expect(copyrightNoticeElement).toBeInTheDocument();
});
