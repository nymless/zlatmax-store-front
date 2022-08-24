import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegistrationForm from './RegistrationForm';

describe('<RegistrationForm />', () => {
  test('it should mount', () => {
    render(<RegistrationForm />);

    const inputForm = screen.getByTestId('RegistrationForm');

    expect(inputForm).toBeInTheDocument();
  });
});
