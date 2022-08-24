import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegistrationPage from './RegistrationPage';

describe('<RegistrationPage />', () => {
  test('it should mount', () => {
    render(<RegistrationPage />);
    
    const registrationPage = screen.getByTestId('RegistrationPage');

    expect(registrationPage).toBeInTheDocument();
  });
});