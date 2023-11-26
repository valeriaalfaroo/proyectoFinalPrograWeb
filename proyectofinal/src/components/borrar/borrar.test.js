import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Borrar from './Borrar';

describe('<Borrar />', () => {
  test('it should mount', () => {
    render(<Borrar />);
    
    const borrar = screen.getByTestId('Borrar');

    expect(borrar).toBeInTheDocument();
  });
});