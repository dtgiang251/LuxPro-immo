import React from 'react';
import Navigation from './Navigation';
import FinanceHero from './FinanceHero';
import FinanceCalculator from './FinanceCalculator';
import FinanceMortgage from './FinanceMortgage';
import FinanceServices from './FinanceServices';
import FinanceTestimonials from './FinanceTestimonials';
import CTASection from './CTASection';
import Footer from './Footer';

const FinancePage = () => {
  return (
    <div className="finance-page">
      <Navigation />
      <FinanceHero />
      <FinanceCalculator />
      <FinanceMortgage />
      <FinanceServices />
      <FinanceTestimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default FinancePage;
