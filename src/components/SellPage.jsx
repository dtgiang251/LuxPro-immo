import React from 'react';
import Navigation from './Navigation';
import SellHero from './SellHero';
import SellServices from './SellServices';
import SellGuidance from './SellGuidance';
import SellCTA from './SellCTA';
import Footer from './Footer';

const SellPage = () => {
  return (
    <div className="sell-page">
      <Navigation />
      <SellHero />
      <SellServices />
      <SellGuidance />
      <SellCTA />
      <Footer />
    </div>
  );
};

export default SellPage;
