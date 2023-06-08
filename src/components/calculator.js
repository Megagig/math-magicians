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

// import PropTypes from 'prop-types';
// import React from 'react';
// import calculate from '../logic/calculate';

// const displayResult = (calculatorObj) => {
//   const { total } = calculatorObj;
//   const { next } = calculatorObj;
//   const { operation } = calculatorObj;
//   let result = null;

//   if (total === null && next === null) {
//     result = 0;
//   } else if (next !== null && total === null) {
//     result = next;
//   } else if (next !== null && total !== null) {
//     if (operation !== null && operation !== undefined) {
//       result = `${total} ${operation} ${next}`;
//     } else {
//       result = total;
//     }
//   } else if (next === null && total !== null) {
//     if (operation !== null && operation !== undefined) {
//       result = `${total} ${operation}`;
//     } else {
//       result = total;
//     }
//   }
//   return result;
// };
// const updateCalculation = (obj, button, setObj) => {
//   const newObj = calculate(obj, button);
//   setObj(newObj);
// };

// export default function Calculator(props) {
//   const {
//     total, next, operation, setCalculatorObj,
//   } = props;
//   const calculatorObj = { total, next, operation };

//   return (
//     <div id="calculator-container" className="calculator-container">
//       <div id="result" className="result-display">
//         {displayResult(calculatorObj)}
//       </div>
//       <div
//         className="calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, 'AC', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, 'AC', setCalculatorObj);
//         }}
//       >
//         AC
//       </div>
//       <div
//         className="calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '+/-', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '+/-', setCalculatorObj);
//         }}
//       >
//         +/-
//       </div>
//       <div
//         className="calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '%', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '%', setCalculatorObj);
//         }}
//       >
//         %
//       </div>
//       <div
//         className="operators-buttons calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '÷', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '÷', setCalculatorObj);
//         }}
//       >
//         ÷
//       </div>
//       <div
//         className="calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '7', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '7', setCalculatorObj);
//         }}
//       >
//         7
//       </div>
//       <div
//         className="calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '8', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '8', setCalculatorObj);
//         }}
//       >
//         8
//       </div>
//       <div
//         className="calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '9', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '9', setCalculatorObj);
//         }}
//       >
//         9
//       </div>
//       <div
//         className="operators-buttons calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, 'x', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, 'x', setCalculatorObj);
//         }}
//       >
//         x
//       </div>
//       <div
//         className="calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '4', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '4', setCalculatorObj);
//         }}
//       >
//         4
//       </div>
//       <div
//         className="calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '5', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '5', setCalculatorObj);
//         }}
//       >
//         5
//       </div>
//       <div
//         className="calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '6', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '6', setCalculatorObj);
//         }}
//       >
//         6
//       </div>
//       <div
//         className="operators-buttons calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '-', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '-', setCalculatorObj);
//         }}
//       >
//         -
//       </div>
//       <div
//         className="calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '1', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '1', setCalculatorObj);
//         }}
//       >
//         1
//       </div>
//       <div
//         className="calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '2', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '2', setCalculatorObj);
//         }}
//       >
//         2
//       </div>
//       <div
//         className="calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '3', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '3', setCalculatorObj);
//         }}
//       >
//         3
//       </div>
//       <div
//         className="operators-buttons calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '+', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '+', setCalculatorObj);
//         }}
//       >
//         +
//       </div>
//       <div
//         className="zero-button calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '0', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '0', setCalculatorObj);
//         }}
//       >
//         0
//       </div>
//       <div
//         className="calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '.', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '.', setCalculatorObj);
//         }}
//       >
//         .
//       </div>
//       <div
//         className="operators-buttons calc-button-style"
//         role="button"
//         tabIndex="0"
//         onClick={() => {
//           updateCalculation(calculatorObj, '=', setCalculatorObj);
//         }}
//         onKeyPress={() => {
//           updateCalculation(calculatorObj, '=', setCalculatorObj);
//         }}
//       >
//         =
//       </div>
//     </div>
//   );
// }

// Calculator.propTypes = {
//   total: PropTypes.string,
//   next: PropTypes.string,
//   operation: PropTypes.string,
//   setCalculatorObj: PropTypes.func.isRequired,
// };

// Calculator.defaultProps = {
//   total: 0,
//   next: null,
//   operation: null,
// };
