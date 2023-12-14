import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './login.js/';

describe('<Login />', () => {
  test('Renderea y encuentra el registro', async () => {  
    render(<Login />);
    await waitFor(() => {
      const registro = screen.getByTestId('Login');
      expect(registro).toBeInTheDocument() 
    });
  });
});