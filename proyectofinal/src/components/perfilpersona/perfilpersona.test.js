import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Perfilpersona from './Perfilpersona/';

describe('<Perfilpersona />', () => {
  test('it should mount', () => {
    render(<Perfilpersona />);
    
    const perfilpersona = screen.getByTestId('Perfilpersona');

    expect(perfilpersona).toBeInTheDocument();
  });
});