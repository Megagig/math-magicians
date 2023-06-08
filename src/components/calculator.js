import PropTypes from 'prop-types';
import React from 'react';
import calculate from '../logic/calculate';

const displayResult = (calculatorObj) => {
  const { total, next, operation } = calculatorObj;
  let result = null;

  if (total === null && next === null) {
    result = '0';
  } else if (next !== null && total === null) {
    result = next;
  } else if (next !== null && total !== null) {
    result = operation !== null && operation !== undefined
      ? `${total} ${operation} ${next}`
      : total;
  } else if (next === null && total !== null) {
    result = operation !== null && operation !== undefined
      ? `${total} ${operation}`
      : total;
  }

  return result;
};

const updateCalculation = (obj, button, setObj) => {
  const newObj = calculate(obj, button);
  setObj(newObj);
};

export default function Calculator(props) {
  const {
    total, next, operation, setCalculatorObj,
  } = props;
  const calculatorObj = { total, next, operation };

  const handleButtonClick = (button) => {
    updateCalculation(calculatorObj, button, setCalculatorObj);
  };

  return (
    <div id="calculator-container" className="calculator-container">
      <div id="result" className="result-display">
        {displayResult(calculatorObj)}
      </div>
      <button
        type="button"
        className="calc-button-style"
        onClick={() => handleButtonClick('AC')}
      >
        AC
      </button>
      <button
        type="button"
        className="calc-button-style"
        onClick={() => handleButtonClick('+/-')}
      >
        +/-
      </button>
      <button
        type="button"
        className="calc-button-style"
        onClick={() => handleButtonClick('%')}
      >
        %
      </button>
      <button
        type="button"
        className="operators-buttons calc-button-style"
        onClick={() => handleButtonClick('÷')}
      >
        ÷
      </button>
      <button
        type="button"
        className="calc-button-style"
        onClick={() => handleButtonClick('7')}
      >
        7
      </button>
      <button
        type="button"
        className="calc-button-style"
        onClick={() => handleButtonClick('8')}
      >
        8
      </button>
      <button
        type="button"
        className="calc-button-style"
        onClick={() => handleButtonClick('9')}
      >
        9
      </button>
      <button
        type="button"
        className="operators-buttons calc-button-style"
        onClick={() => handleButtonClick('x')}
      >
        x
      </button>
      <button
        type="button"
        className="calc-button-style"
        onClick={() => handleButtonClick('4')}
      >
        4
      </button>
      <button
        type="button"
        className="calc-button-style"
        onClick={() => handleButtonClick('5')}
      >
        5
      </button>
      <button
        type="button"
        className="calc-button-style"
        onClick={() => handleButtonClick('6')}
      >
        6
      </button>
      <button
        type="button"
        className="operators-buttons calc-button-style"
        onClick={() => handleButtonClick('-')}
      >
        -
      </button>
      <button
        type="button"
        className="calc-button-style"
        onClick={() => handleButtonClick('1')}
      >
        1
      </button>
      <button
        type="button"
        className="calc-button-style"
        onClick={() => handleButtonClick('2')}
      >
        2
      </button>
      <button
        type="button"
        className="calc-button-style"
        onClick={() => handleButtonClick('3')}
      >
        3
      </button>
      <button
        type="button"
        className="operators-buttons calc-button-style"
        onClick={() => handleButtonClick('+')}
      >
        +
      </button>
      <button
        type="button"
        className="zero-button calc-button-style"
        onClick={() => handleButtonClick('0')}
      >
        0
      </button>
      <button
        type="button"
        className="calc-button-style"
        onClick={() => handleButtonClick('.')}
      >
        .
      </button>
      <button
        type="button"
        className="operators-buttons calc-button-style"
        onClick={() => handleButtonClick('=')}
      >
        =
      </button>
    </div>
  );
}

Calculator.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
  setCalculatorObj: PropTypes.func.isRequired,
};

Calculator.defaultProps = {
  total: '0',
  next: null,
  operation: null,
};
