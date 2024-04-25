import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {
  afterEach, describe, expect, it,
  vi,
} from 'vitest';
import LoginInput from './LoginInput';

// LoginInput Testing
// - should display login form
// - should handle Email typing
// - should handle Password typing
// - should Call Login Function when submit button is clicked

describe('COMPONENT: LoginInput', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should display login Form', async () => {
    render(<LoginInput onLogin={() => {}} />);
    const btnInput = await screen.getByDisplayValue('Submit');
    const emailInput = await screen.getByTitle('Login Email');
    const passInput = await screen.getByTitle('Login Password');
    // Action

    // Assert
    expect(btnInput).toHaveValue('Submit');
    expect(emailInput).toBeVisible();
    expect(passInput).toBeVisible();
  });

  it('Should handle email typing', async () => {
    render(<LoginInput onLogin={() => {}} />);
    const emailInput = await screen.getByTitle('Login Email');
    const TEMPTEXT = 'testing@gmail.com';

    await userEvent.type(emailInput, TEMPTEXT);

    expect(emailInput).toHaveValue(TEMPTEXT);
  });

  it('Should handle password typing', async () => {
    render(<LoginInput onLogin={() => {}} />);
    const passwordInput = await screen.getByTitle('Login Password');
    const TEMPTEXT = 'hahahahahah';

    await userEvent.type(passwordInput, TEMPTEXT);

    expect(passwordInput).toHaveValue(TEMPTEXT);
  });

  it('Should call login function when submit button is clicked', async () => {
    const TEMP = {
      email: 'jael@gmail.com',
      pass: 'qwerty',
    };

    const mockLogin = vi.fn();
    render(<LoginInput onLogin={mockLogin} />);

    const emailInput = await screen.getByTitle('Login Email');
    const passwordInput = await screen.getByTitle('Login Password');
    const submitBtn = await screen.getByDisplayValue('Submit');

    await userEvent.type(emailInput, TEMP.email);
    await userEvent.type(passwordInput, TEMP.pass);
    await userEvent.click(submitBtn);

    expect(mockLogin).toBeCalledWith({
      email: TEMP.email,
      password: TEMP.pass,
    });
  });
});
