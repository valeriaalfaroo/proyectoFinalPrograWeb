import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotasId from './NotasId';

describe('<NotasId />', () => {
  test('it should mount', () => {
    render(<NotasId />);
    
    const notasId = screen.getByTestId('NotasId');

    expect(notasId).toBeInTheDocument();
  });
});