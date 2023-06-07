import React from 'react';

function Calculator() {
  return (
    <div className="calculator">
      <input type="text" placeholder="0" disabled />
      <div className="buttons">
        <button type="button" className="operator-btn">
          AC
        </button>
        <button type="button" className="operator-btn">
          +/-
        </button>
        <button type="button" className="operator-btn">
          %
        </button>
        <button type="button" className="operator-btn orange-btn">
          /
        </button>
        <button type="button" className="operator-btn">
          7
        </button>
        <button type="button" className="operator-btn">
          8
        </button>
        <button type="button" className="operator-btn">
          9
        </button>
        <button type="button" className="operator-btn orange-btn">
          x
        </button>
        <button type="button" className="operator-btn">
          4
        </button>
        <button type="button" className="operator-btn">
          5
        </button>
        <button type="button" className="operator-btn">
          6
        </button>
        <button type="button" className="operator-btn orange-btn">
          -
        </button>
        <button type="button" className="operator-btn">
          1
        </button>
        <button type="button" className="operator-btn">
          2
        </button>
        <button type="button" className="operator-btn">
          3
        </button>
        <button type="button" className="operator-btn orange-btn">
          +
        </button>
        <button type="button" className="operator-btn grid-item">
          0
        </button>
        <button type="button" className="operator-btn">
          .
        </button>
        <button type="button" className="operator-btn">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
