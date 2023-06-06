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
      <div>
        <h1>Calculator</h1>
        <p>Result: {result}</p>
      </div>
    );
  }
}

export default Calculator;
