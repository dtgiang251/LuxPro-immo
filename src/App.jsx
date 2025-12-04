import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import BuyPage from './components/BuyPage';
import FinancePage from './components/FinancePage';
import ContactPage from './components/ContactPage';
import SellPage from './components/SellPage';
import PropertyDetailPage from './components/PropertyDetailPage';
import EstimatePage from './components/EstimatePage';
import EstimateResultPage from './components/EstimateResultPage';
import BlogPage from './components/BlogPage';
import BlogArticlePage from './components/BlogArticlePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogArticlePage />} />
          <Route path="/estimate" element={<EstimatePage />} />
          <Route path="/estimate/result" element={<EstimateResultPage />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
