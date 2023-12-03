import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChildComponent from './ChildComponent';

describe('<ChildComponent />', () => {
  test('it should mount', () => {
    render(<ChildComponent />);
    
    const childComponent = screen.getByTestId('ChildComponent');

    expect(childComponent).toBeInTheDocument();
  });
});