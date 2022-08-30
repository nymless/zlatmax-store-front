import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FullScreenLoader from './FullScreenLoader';

describe('<FullScreenLoader />', () => {
  test('it should mount', () => {
    render(<FullScreenLoader />);
    
    const fullScreenLoader = screen.getByTestId('FullScreenLoader');

    expect(fullScreenLoader).toBeInTheDocument();
  });
});