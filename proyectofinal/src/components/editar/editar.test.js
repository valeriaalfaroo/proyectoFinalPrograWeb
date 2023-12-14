import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import Editar from './editar';

// Mock de localStorage
const localStorageMock = (() => {
  let store = {};

  return {
    getItem: key => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: key => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

// Establecer localStorage antes de las pruebas
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

jest.mock('axios');

const testUser = {
  email: 'daas@gmail.com',
  jwt: 'b52c08656adef578429dcaf1a1ccd3b0616d5798e85845b8af32859b6f452572',
  lastnames: 'Alfaro',
  name: 'Diego',
  password: 'daas',
  userID: 3,
  username: 'daas',
};

const testNotes = [
  {
    noteID: 1,
    title: 'Ejemplo 1',
    content: 'Contenido de la nota de ejemplo 1',
    userID: 3,
    status: false,
  },
  {
    noteID: 2,
    title: 'Ejemplo 2',
    content: 'Contenido de la nota de ejemplo 2',
    userID: 3,
    status: false,
  },
];

describe('<Editar />', () => {
  test('Mostrar Notas button muestra las notas', async () => {
    
    // Mock axios
    axios.get.mockResolvedValueOnce({ data: testNotes });

    // Establece el usuario en localStorage antes de la prueba
    localStorage.setItem('user', JSON.stringify(testUser));

    render(<Editar storedUser={testUser} />);

    // Simula click
    await act(async () => {
      fireEvent.click(screen.getByText('Mostrar Notas'));
    });
    await waitFor(() => {
      const notas = screen.getByTestId('notas-container'); 
      expect(notas).toBeInTheDocument();
    });
  });
});
