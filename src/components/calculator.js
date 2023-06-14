import React, { useState } from 'react';
import '../styles/calculator.css';
import calculate from '../logic/calculate';
import Buttons from './CustomButton';

const Calculator = () => {
  const [count, setCount] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (value) => {
    setCount(calculate(count, value));
  };
  return (
    <div className="content-container">
      <div className="separation">
        <h1 className="title">Let&apos;s do some math!</h1>
      </div>
      <input
        className="show result"
        type="text"
        value={count.next || count.operation || count.total || '0'}
        readOnly
      />

      {[
        ['AC', '+/-', '%', '÷'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
      ].map((row, rowIndex) => (
        /* eslint-disable-next-line react/no-array-index-key */
        <div className="btn-container" key={`row-${rowIndex}`}>
          {row.map((buttonValue, buttonIndex) => (
            /* eslint-disable-next-line react/no-array-index-key */
            <Buttons
              /* eslint-disable-next-line react/no-array-index-key */
              key={`${rowIndex}-${buttonIndex}`}
              className={`button ${buttonValue === '0' ? 'zero ' : ''}${
                [
                  'AC',
                  '+/-',
                  '%',
                  '7',
                  '8',
                  '9',
                  '4',
                  '5',
                  '6',
                  '1',
                  '2',
                  '3',
                  '0',
                  '.',
                ].includes(buttonValue)
                  ? 'grey-button'
                  : 'operators-buttons'
              }`}
              type="button"
              value={buttonValue}
              handleClick={handleClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calculator;
