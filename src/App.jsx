import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuyPage from './components/BuyPage';
import FinancePage from './components/FinancePage';
import ContactPage from './components/ContactPage';
import SellPage from './components/SellPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BuyPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
