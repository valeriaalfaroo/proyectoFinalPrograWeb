import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Notes from './Notes';

describe('<Notes />', () => {
  test('it should mount', () => {
    render(<Notes />);
    
    const notes = screen.getByTestId('Notes');

    expect(notes).toBeInTheDocument();
  });
});