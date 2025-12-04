import React from 'react';

const FinanceHero = () => {
  return (
    <div className="relative w-full h-[238px] flex items-center justify-center">
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/7f35c2ba70ccb87fca836b889eae9d0a33c4097a?width=2880" 
        alt="Finance hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <h1 className="relative z-10 text-white text-center font-poppins text-[38px] font-bold leading-[44px]">
        Finance
      </h1>
    </div>
  );
};

export default FinanceHero;
