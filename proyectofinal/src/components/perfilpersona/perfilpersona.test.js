import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Perfilpersona from './perfilpersona.js';

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


const testUser = {
  email: "daas@gmail.com",
  jwt: "b52c08656adef578429dcaf1a1ccd3b0616d5798e85845b8af32859b6f452572",
  lastnames: "Alfaro",
  name: "Diego",
  password: "daas",
  userID: 3,
  username: "daas"
};

describe('<Perfilpersona />', () => {
  test('Renderea y encuentra el registro', async () => {
    // Establece el usuario en localStorage antes de la prueba
    localStorage.setItem('user', JSON.stringify(testUser));

    render(<Perfilpersona />);

    await waitFor(() => {
      const registro = screen.getByTestId('Perfilpersona');
      expect(registro).toBeInTheDocument();
    });
  });
});
