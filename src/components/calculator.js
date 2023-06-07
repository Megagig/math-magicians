import React, { useState } from 'react';
import DisplayButton from './DisplayButton'; // Corrected component name
import Calculate from '../logic/Calculate';
import '../App.css';
import '../index.css';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
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
    <div>
      {/* Calculator UI components */}
      {/* Display component */}
      <div className="display">{displayValue}</div>
      {/* Buttons component */}
      <div className="buttons">
        <DisplayButton onButtonClick={handleButtonClick} />
        {' '}
        {/* Corrected component name */}
      </div>
    </div>
  );
}

export default Calculator;
