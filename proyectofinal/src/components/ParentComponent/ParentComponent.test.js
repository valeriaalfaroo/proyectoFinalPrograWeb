import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ParentComponent from './ParentComponent';

describe('<ParentComponent />', () => {
  test('it should mount', () => {
    render(<ParentComponent />);
    
    const parentComponent = screen.getByTestId('ParentComponent');

    expect(parentComponent).toBeInTheDocument();
  });
});