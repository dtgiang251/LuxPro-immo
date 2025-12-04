import React from 'react';
import Navigation from './Navigation';
import BlogHero from './BlogHero';
import BlogGrid from './BlogGrid';
import CTASection from './CTASection';
import Footer from './Footer';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <Navigation />
      <BlogHero />
      <BlogGrid />
      <CTASection />
      <Footer />
    </div>
  );
};

export default BlogPage;
