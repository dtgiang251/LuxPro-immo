import React from 'react';

const SellHero = () => {
  return (
    <div className="relative w-full h-[238px] flex items-center justify-center">
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/3e413d8a9ae93038dcf04028443ec617c5a4e637?width=2880" 
        alt="Sell or Rent property hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <h1 className="relative z-10 text-white text-center font-poppins text-[38px] font-bold leading-[44px]">
        Sell or Rent property
      </h1>
    </div>
  );
};

export default SellHero;
