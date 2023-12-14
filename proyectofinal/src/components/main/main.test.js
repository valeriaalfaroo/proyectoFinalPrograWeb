import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import Main from './Main';

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
  email: "daas@gmail.com",
  jwt: "b52c08656adef578429dcaf1a1ccd3b0616d5798e85845b8af32859b6f452572",
  lastnames: "Alfaro",
  name: "Diego",
  password: "daas",
  userID: 3,
  username: "daas"
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

describe('<Main />', () => {
  test('renders Main component with user and notes', async () => {
    axios.get.mockResolvedValueOnce({ data: testNotes });
    // Establece el usuario en localStorage antes de la prueba
    localStorage.setItem('user', JSON.stringify(testUser));
    render(<Main storedUser={testUser} />);

    await waitFor(() => {
      const registro = screen.getByTestId('Main');

      expect(registro).toBeInTheDocument();

      testNotes.forEach((note) => {
        expect(screen.getByText(note.title)).toBeInTheDocument();
        expect(screen.getByText(note.content)).toBeInTheDocument();
      });
    });
  });
  
});
