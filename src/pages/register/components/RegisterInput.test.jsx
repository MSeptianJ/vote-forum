import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {
  afterEach, describe, expect, it,
  vi,
} from 'vitest';
import RegisterInput from './RegisterInput';

// RegisterInput Testing
// - should display Register form
// - should handle Name typing
// - should handle Email typing
// - should handle Password typing
// - should Call Register Function when submit button is clicked

const TEMP = {
  name: 'loki',
  email: 'loki@gmail.com',
  password: 'hwahauhauhauhaua',
};

describe('COMPONENT: RegisterInput', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should display Register form', async () => {
    render(<RegisterInput onRegister={() => {}} />);

    const nameInput = await screen.getByTitle('Register Name');
    const emailInput = await screen.getByTitle('Register Email');
    const passInput = await screen.getByTitle('Register Password');
    const submitBtn = await screen.getByDisplayValue('Submit');

    expect(nameInput).toBeVisible();
    expect(emailInput).toBeVisible();
    expect(passInput).toBeVisible();
    expect(submitBtn).toBeVisible();
  });

  it('should handle Name typing', async () => {
    render(<RegisterInput onRegister={() => {}} />);

    const nameInput = await screen.getByTitle('Register Name');

    await userEvent.type(nameInput, TEMP.name);

    expect(nameInput).toHaveValue(TEMP.name);
  });

  it('should handle Email typing', async () => {
    render(<RegisterInput onRegister={() => {}} />);

    const emailInput = await screen.getByTitle('Register Email');

    await userEvent.type(emailInput, TEMP.email);

    expect(emailInput).toHaveValue(TEMP.email);
  });

  it('should handle Pass typing', async () => {
    render(<RegisterInput onRegister={() => {}} />);

    const passInput = await screen.getByTitle('Register Password');

    await userEvent.type(passInput, TEMP.password);

    expect(passInput).toHaveValue(TEMP.password);
  });

  it('should Call Register Function when submit button is clicked', async () => {
    const mockRegist = vi.fn();
    render(<RegisterInput onRegister={mockRegist} />);

    const nameInput = await screen.getByTitle('Register Name');
    const emailInput = await screen.getByTitle('Register Email');
    const passInput = await screen.getByTitle('Register Password');
    const submitBtn = await screen.getByDisplayValue('Submit');

    await userEvent.type(nameInput, TEMP.name);
    await userEvent.type(emailInput, TEMP.email);
    await userEvent.type(passInput, TEMP.password);
    await userEvent.click(submitBtn);

    expect(mockRegist).toBeCalledWith(TEMP);
  });
});
