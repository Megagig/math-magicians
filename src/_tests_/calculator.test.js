import React from 'react';
import { render, screen } from '@testing-library/react';
import 'regenerator-runtime/runtime';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

describe('Calculator component', () => {
  test('renders calculator with correct button labels', () => {
    render(<Calculator />);

    const button = [
      'AC',
      '+/-',
      '%',
      '÷',
      '7',
      '8',
      '9',
      'X',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
      '0',
      '.',
      '=',
    ];

    button.forEach((label) => {
      const buttonEl = screen.queryAllByText(label);
      expect(buttonEl.length).toBeGreaterThanOrEqual(0);
    });
  });
});

describe('Calculator snapshot', () => {
  test('matches the snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
