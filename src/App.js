import React, { Component } from 'react';
import Calculator from './components/calculator';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      somethinguseless: true,
    };
  }

  render() {
    const { somethingUseless } = this.state;
    return <div className='App'>{somethingUseless && <Calculator />}</div>;
  }
}

export default App;
