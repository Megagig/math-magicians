import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div class='calculator'>
        <input type='text' id='display' disabled />
        <div class='result'>{result}</div>
        <div class='buttons'>
          <button onclick='appendNumber(AC)'>AC</button>
          <button onclick="appendOperator('+/-')">+/-</button>
          <button onclick="appendOperator('%')">%</button>
          <button onclick="appendOperator('/')">/</button>
          <button onclick='appendNumber(7)'>7</button>
          <button onclick='appendNumber(8)'>8</button>
          <button onclick='appendNumber(9)'>9</button>
          <button onclick="appendOperator('x')">x</button>
          <button onclick='appendNumber(4)'>4</button>
          <button onclick='appendNumber(5)'>5</button>
          <button onclick='appendNumber(6)'>6</button>
          <button onclick="appendOperator('-')">-</button>
          <button onclick='appendNumber(1)'>1</button>
          <button onclick='appendNumber(2)'>2</button>
          <button onclick='appendNumber(3)'>3</button>
          <button onclick="appendOperator('+')">+</button>
          <button onclick='appendNumber(0)'>0</button>
          <button onclick="appendOperator('.')">.</button>
          <button onclick='calculate()'>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
