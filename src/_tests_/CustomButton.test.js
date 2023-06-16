import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Buttons from '../components/CustomButton';

describe('Buttons component', () => {
  test('renders button with correct value and class name', () => {
    const handleClick = jest.fn();
    const value = 'Click Me';
    const className = 'custom-button';

    const { getByText } = render(
      <Buttons value={value} className={className} handleClick={handleClick} />
    );

    const buttonElement = getByText(value);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(className);
  });

  test('calls handleClick function when clicked', () => {
    const handleClick = jest.fn();
    const value = 'Click Me';
    const className = 'custom-button';

    const { getByText } = render(
      <Buttons value={value} className={className} handleClick={handleClick} />
    );

    const buttonElement = getByText(value);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(value);
  });
});

describe('Buttons snapshot', () => {
  test('matches the snapshot', () => {
    const handleClick = jest.fn();
    const value = 'Click Me';
    const className = 'custom-button';

    const tree = renderer
      .create(
        <Buttons
          value={value}
          className={className}
          handleClick={handleClick}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
