import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { describe, it } from 'vitest';
import { faker } from '@faker-js/faker';

import { AccessRequest } from '../AccessRequest';

describe('Access Request page', () => {
  it('should render Access request component', () => {
    render(
      <Router>
        <AccessRequest />
      </Router>
    );
  });

  it('should have twenty logo', () => {
    render(
      <Router>
        <AccessRequest />
      </Router>
    );

    const logo = screen.getByAltText('twenty logo');

    expect(logo).toBeDefined();
  });

  it('should be email input', () => {
    render(
      <Router>
        <AccessRequest />
      </Router>
    );

    const emailInput = screen.getByRole('textbox', {
      name: /e-mail/i
    });

    expect(emailInput).toBeDefined();
  });

  it('should collect email text', () => {
    render(
      <Router>
        <AccessRequest />
      </Router>
    );
    const email = faker.internet.email();

    const emailInput: HTMLInputElement = screen.getByRole('textbox', {
      name: /e-mail/i
    });

    fireEvent.change(emailInput, { target: { value: email } });

    expect(emailInput.value).toBe(email);
  });
});
