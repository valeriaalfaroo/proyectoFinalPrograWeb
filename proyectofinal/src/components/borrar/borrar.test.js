import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Borrar from './borrar';


describe('<Borrar />', () => {
  test('Renderea y encuentra el registro', async () => {
    render(<Borrar />);
    await waitFor(() => {
      const registro = screen.getByTestId('Borrar');
      expect(registro).toBeInTheDocument()
    });
  });
});
