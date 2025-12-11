import React from 'react';
import Navigation from './Navigation';
import BuyHero from './BuyHero';
import BuySearchBar from './BuySearchBar';
import BuyPropertyGrid from './BuyPropertyGrid';
import BuyPagination from './BuyPagination';
//import FinanceCTA from './FinanceCTA';
import CTASection from './CTASection';
import Footer from './Footer';

const BuyPage = () => {
  return (
    <div className="buy-page">
      <Navigation />
      <BuyHero />
      <BuySearchBar />
      <BuyPropertyGrid />
      <BuyPagination />
      <CTASection />
      <Footer />
    </div>
  );
};

export default BuyPage;
