import React, { useState } from 'react';
import Calculator from './components/calculator';
import GetQuotes from './components/displayQuote';
import Home from './components/Home';

function App() {
  const [calculatorObj, setCalculatorObj] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  return (
    <div className="App">
      <Calculator
        total={calculatorObj.total}
        next={calculatorObj.next}
        operation={calculatorObj.operation}
        setCalculatorObj={setCalculatorObj}
      />
      <GetQuotes />
      <Home />
    </div>
  );
}

export default App;
