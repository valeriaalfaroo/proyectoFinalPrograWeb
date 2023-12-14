import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Editar from './editar';

describe('<Editar />', () => {
  test('Renderea y encuentra el registro', async () => {  
    render(<Editar />);
    await waitFor(() => {
      const registro = screen.getByTestId('Editar');
      expect(registro).toBeInTheDocument() 
    });
  });
});
