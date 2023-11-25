import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Editar from './Editar';

describe('<Editar />', () => {
  test('it should mount', () => {
    render(<Editar />);
    
    const editar = screen.getByTestId('Editar');

    expect(editar).toBeInTheDocument();
  });
});