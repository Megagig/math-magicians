import React from 'react';

function Calculator() {
  return (
    <div className="calculator">
      <div className="buttons">
        <button type="button" className="number">
          AC
        </button>
        <button type="button" className="operator-btn">
          +/-
        </button>
        <button type="button" className="operator-btn">
          %
        </button>
        <button type="button" className="operator-btn">
          /
        </button>
        <button type="button" className="number">
          7
        </button>
        <button type="button" className="number">
          8
        </button>
        <button type="button" className="number">
          9
        </button>
        <button type="button" className="operator-btn">
          x
        </button>
        <button type="button" className="number">
          4
        </button>
        <button type="button" className="number">
          5
        </button>
        <button type="button" className="number">
          6
        </button>
        <button type="button" className="operator-btn">
          -
        </button>
        <button type="button" className="number">
          1
        </button>
        <button type="button" className="number">
          2
        </button>
        <button type="button" className="number">
          3
        </button>
        <button type="button" className="operator-btn">
          +
        </button>
        <button type="button" className="number">
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
