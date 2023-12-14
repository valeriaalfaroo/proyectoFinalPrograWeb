import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotasId from './NotasId';

describe('<NotasId />', () => {
  test('Renderea y encuentra el registro', async () => {  
    render(<NotasId />);
    await waitFor(() => {
      const registro = screen.getByTestId('NotasID');
      expect(registro).toBeInTheDocument() 
    });
  });
});
