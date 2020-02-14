import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import Header from './Header';
import "@testing-library/jest-dom/extend-expect";

test('Playas is rendering', () => {
  const { getByText } = render(<Header />);
  getByText(/playas/i);
});

test('button sends app to patriot mode', () => {
  const { getByTestId } = render(<Header />);
  fireEvent.click(getByTestId('patriotModeButton'));

  expect(getByTestId('patriotModeButton')).toHaveClass('toggle toggled');
});