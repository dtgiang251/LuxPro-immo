import React from 'react';
import Navigation from './Navigation';
import ContactHero from './ContactHero';
import ContactMap from './ContactMap';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Navigation />
      <ContactHero />
      <ContactMap />
      <Footer />
    </div>
  );
};

export default ContactPage;
