import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import NavBar from '../components/NavBar';

describe('NavBar component', () => {
  test('renders NavBar with correct button labels', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const buttonLabels = ['Home', 'Quotes', 'Calculator'];

    for (const label of buttonLabels) {
      const buttonElement = screen.getByText(label);
      expect(buttonElement).toBeInTheDocument();
    }
  });
});
describe('NavBar snapshot', () => {
  test('matches the snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});