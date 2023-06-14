import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Calculator from './components/calculator';
import GetQuotes from './components/displayQuote';
import Home from './components/Home';

const Layout = () => (
  <>
    <Navbar />
  </>
);

const App = () => (
  <BrowserRouter>
    <Layout />
    <div className="cal-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<GetQuotes />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
