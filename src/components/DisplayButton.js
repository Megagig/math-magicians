import PropTypes from 'prop-types';
import '../App.css';
import '../index.css';
import React, { useState } from 'react';
import Calculate from '../logic/calculate';

function DisplayButton({ onButtonClick }) {
  let handleButtonClick = (e) => {
    const buttonName = e.target.value;
    onButtonClick(buttonName);
  };
  const [displayValue, setDisplayValue] = useState('0');
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  handleButtonClick = (buttonName) => {
    const newData = Calculate(calcData, buttonName);
    setCalcData(newData);

    if (newData.next !== null) {
      setDisplayValue(newData.next);
    } else if (newData.total !== null) {
      setDisplayValue(newData.total);
    } else {
      setDisplayValue('0');
    }
  };
  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button
          type="button"
          className="operator-btn"
          onClick={handleButtonClick}
          value="AC"
        >
          AC
        </button>
        <button
          type="button"
          className="operator-btn"
          onClick={handleButtonClick}
          value="+/-"
        >
          +/-
        </button>
        <button
          type="button"
          className="operator-btn"
          onClick={handleButtonClick}
          value="%"
        >
          %
        </button>
        <button
          type="button"
          className="operator-btn orange-btn"
          onClick={handleButtonClick}
          value="/"
        >
          /
        </button>
        <button
          type="button"
          className="operator-btn"
          onClick={handleButtonClick}
          value="7"
        >
          7
        </button>
        <button
          type="button"
          className="operator-btn"
          onClick={handleButtonClick}
          value="8"
        >
          8
        </button>
        <button
          type="button"
          className="operator-btn"
          onClick={handleButtonClick}
          value="9"
        >
          9
        </button>
        <button
          type="button"
          className="operator-btn orange-btn"
          onClick={handleButtonClick}
          value="x"
        >
          x
        </button>

        <button
          type="button"
          className="operator-btn"
          onClick={handleButtonClick}
          value="4"
        >
          4
        </button>
        <button
          type="button"
          className="operator-btn"
          onClick={handleButtonClick}
          value="5"
        >
          5
        </button>
        <button
          type="button"
          className="operator-btn"
          onClick={handleButtonClick}
          value="6"
        >
          6
        </button>
        <button
          type="button"
          className="operator-btn orange-btn"
          onClick={handleButtonClick}
          value="-"
        >
          -
        </button>
        <button
          type="button"
          className="operator-btn"
          onClick={handleButtonClick}
          value="1"
        >
          1
        </button>
        <button
          type="button"
          className="operator-btn"
          onClick={handleButtonClick}
          value="2"
        >
          2
        </button>
        <button
          type="button"
          className="operator-btn"
          onClick={handleButtonClick}
          value="3"
        >
          3
        </button>
        <button
          type="button"
          className="operator-btn orange-btn"
          onClick={handleButtonClick}
          value="+"
        >
          +
        </button>
        <button
          type="button"
          className="operator-btn grid-item"
          onClick={handleButtonClick}
          value="0"
        >
          0
        </button>
        <button
          type="button"
          className="operator-btn"
          onClick={handleButtonClick}
          value="."
        >
          .
        </button>
        <button
          type="button"
          className="operator-btn"
          onClick={handleButtonClick}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}

DisplayButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default DisplayButton;
