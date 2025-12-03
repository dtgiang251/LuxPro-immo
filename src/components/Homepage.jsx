import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import PropertiesSection from './PropertiesSection';
import NewsSection from './NewsSection';
import CTASection from './CTASection';
import Footer from './Footer';

const Homepage = () => {
  return (
    <div className="homepage">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PropertiesSection />
      <NewsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Homepage;
