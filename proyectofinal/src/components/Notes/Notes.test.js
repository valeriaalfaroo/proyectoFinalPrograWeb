import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Notes from './Notes';

describe('<Notes />', () => {
  test('Renderea y encuentra el registro', async () => {  
    // Proporciona las propiedades necesarias al componente Notes
    const testNote = {
      Title: 'Ejemplo 1',
      Content: 'Contenido de la nota de ejemplo 1',
    };

    render(<Notes note={testNote} />);
    
    await waitFor(() => {
      const registro = screen.getByTestId('Notes');
      expect(registro).toBeInTheDocument();
    });
  });
});
