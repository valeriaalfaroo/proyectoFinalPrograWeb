import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Registro from './Registro';

describe('<Registro />', () => {
  test('it should mount', () => {
    render(<Registro />);
    
    const registro = screen.getByTestId('Registro');

    expect(registro).toBeInTheDocument();
  });
});