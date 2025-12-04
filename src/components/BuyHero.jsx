import React from 'react';

const BuyHero = () => {
  return (
    <div className="relative w-full h-[238px] flex items-center justify-center">
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/8141f0538c95154420374c0e3234b4e90b5d555d?width=2880" 
        alt="Buy & Rent hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <h1 className="relative z-10 text-white text-center font-poppins text-[38px] font-bold leading-[44px]">
        Discover Your Ideal Home
      </h1>
    </div>
  );
};

export default BuyHero;
