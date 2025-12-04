import React from 'react';

const BlogHero = () => {
  return (
    <section className="relative flex h-[238px] w-full items-center justify-center bg-gray-800">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/5cdfb7cbe7b0687d3514ce37cf3a3ce2d3c4e3b9?width=2880')",
        }}
      />
      <h1 className="relative z-10 font-poppins text-[38px] font-bold leading-[44px] text-white">
        Blog
      </h1>
    </section>
  );
};

export default BlogHero;
