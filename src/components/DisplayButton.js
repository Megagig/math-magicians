import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import '../index.css';

function displayButton({ onButtonClick }) {
  const handleButtonClick = (e) => {
    const buttonName = e.target.value;
    onButtonClick(buttonName);
  };

  return (
    <div className="calculator">
      <input type="text" placeholder="0" disabled />
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
          value="*"
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

displayButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default displayButton;
