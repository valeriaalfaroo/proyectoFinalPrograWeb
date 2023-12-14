import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Borrar from './borrar';

describe('<Borrar />', () => {
  test('Ocultar Notas button oculta las notas', async () => {
    render(<Borrar />);

    // Simular hacer clic en el botón "Ocultar Notas"
    await act(async () => {
      fireEvent.click(screen.getByText('Ocultar Notas'));
    });

    // Esperar a que las notas se oculten
    await waitFor(() => {
      const notas = screen.queryByTestId('notas-container'); // Asumiendo que tienes un test ID para el contenedor
      expect(notas).not.toBeInTheDocument();
    });
  });
});
