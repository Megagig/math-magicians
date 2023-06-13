import { Routes, Route, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/NavBar';
import Calculator from './components/calculator';
import GetQuotes from './components/displayQuote';
import Home from './components/Home';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quotes" element={<GetQuotes />} />
          <Route path="calculator" element={<Calculator />} />
          {/* <Route path="*" element={<Nopage />} /> */}
        </Route>
      </Routes>
      <GetQuotes />
      <Home />
    </div>
  );
}

export default App;
