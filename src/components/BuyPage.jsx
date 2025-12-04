import React from 'react';
import Navigation from './Navigation';
import BuyHero from './BuyHero';
import BuySearchBar from './BuySearchBar';
import BuyPropertyGrid from './BuyPropertyGrid';
import BuyPagination from './BuyPagination';
import FinanceCTA from './FinanceCTA';
import Footer from './Footer';

const BuyPage = () => {
  return (
    <div className="buy-page">
      <Navigation />
      <BuyHero />
      <BuySearchBar />
      <BuyPropertyGrid />
      <BuyPagination />
      <FinanceCTA />
      <Footer />
    </div>
  );
};

export default BuyPage;
