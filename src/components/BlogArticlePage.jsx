import React from 'react';
import Navigation from './Navigation';
import ArticleContent from './ArticleContent';
import ArticleSidebar from './ArticleSidebar';
import CTASection from './CTASection';
import Footer from './Footer';

const BlogArticlePage = () => {
  return (
    <div className="blog-article-page">
      <Navigation />
      
      <div className="w-full">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/5cdfb7cbe7b0687d3514ce37cf3a3ce2d3c4e3b9?width=2880" 
          alt="Article hero" 
          className="h-[238px] w-full flex-shrink-0 object-cover"
        />
      </div>

      <div className="flex w-full justify-center px-5 py-15 md:px-10 lg:px-25">
        <div className="flex w-full max-w-[1240px] flex-col gap-10 lg:flex-row lg:gap-15">
          <ArticleContent />
          <ArticleSidebar />
        </div>
      </div>

      <CTASection />
      <Footer />
    </div>
  );
};

export default BlogArticlePage;
