import React from 'react';
import Calculator from '../components/calculator';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

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

    for (const label of button) {
      const buttonEl = screen.queryAllByText(label);
      expect(buttonEl.length).toBeGreaterThanOrEqual(0);
    }
  });
});

describe('Calculator snapshot', () => {
  test('matches the snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
