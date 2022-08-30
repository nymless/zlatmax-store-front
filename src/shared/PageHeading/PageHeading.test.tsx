import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageHeading from './PageHeading';

describe('<PageHeading />', () => {
  test('it should mount', () => {
    render(<PageHeading />);
    
    const pageHeading = screen.getByTestId('PageHeading');

    expect(pageHeading).toBeInTheDocument();
  });
});