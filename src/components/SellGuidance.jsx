import React from 'react';

const SellGuidance = () => {
  return (
    <div className="max-w-[1280px] m-auto flex flex-col md:flex-row items-center gap-10 lg:gap-25 self-stretch bg-white px-6 py-12 lg:py-30">
      <div className="relative flex gap-[14px] items-center w-full md:w-[45%]">
        <div className='w-full lg:w-[65%] relative'>
            <div className='bg-[#85053B] max-w-[300px] w-full h-10 absolute right-0 top-[-40px]'></div>
            <img className='relative z-10 w-full md:w-auto' alt="" src="./src/public/img03.jpg"/> 
            <img className='absolute bottom-[-80px] right-0' alt="" src="./src/public/shadown.svg"/> 
              
        </div>
        <div className="lg:w-[35%] hidden lg:grid gap-[14px]">
          <img className='' alt="" src="./src/public/img01.jpg"/>
          <img className='' alt="" src="./src/public/img02.jpg"/> 
        </div>         
      </div>

      <div className="flex flex-col items-start gap-5 flex-1 w-full md:w-[55%]">
        <div className="flex flex-col items-start gap-3.5 self-stretch">
          <div className="flex items-center gap-5 self-stretch">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.996712 22.0255H0V6.82691L9.96622 0L24.218 9.91644V22.0255H9.96622V20.6302H22.9224V10.3151L9.96622 1.49495L0.996712 7.67403V22.0255Z" fill="#B6B8B5"/>
              <path d="M10.0161 14.3016H3.83691V23.7197L10.0161 29.9985V14.3016Z" fill="#85053B"/>
            </svg>
            <span className="text-primary font-poppins text-lg font-extrabold tracking-[0.175em]">COMPREHENSIVE GUIDANCE</span>
          </div>
          <h2 className="self-stretch text-black font-poppins text-[38px] font-bold leading-[44px]">
            Sell your property with confidence
          </h2>
        </div>

        <p className="self-stretch text-text-gray font-poppins text-base leading-[26px]">
          Ready to sell your property? Trust Lux-Pro-Immo, a leading real estate agency established in 2008, 
          to guide you through every step of your journey. From end-to-end project support and in-depth needs 
          assessment to precise property valuation, mandatory energy certificate preparation, targeted property 
          marketing to qualified buyers, and even direct property acquisition—we deliver tailored solutions to 
          ensure a smooth, successful sale. Let our expertise turn your property goals into reality.
        </p>
      </div>
    </div>
  );
};

export default SellGuidance;
