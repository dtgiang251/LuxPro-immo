import React from 'react';

const SellGuidance = () => {
  return (
    <div className="max-w-[1240px] m-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-25 self-stretch bg-white px-6 py-12 lg:py-30">
      <div className="flex items-center gap-3.5 w-full lg:w-[700px] h-auto lg:h-[577px] relative">
        <div className="w-[342.6px] h-[420.209px] bg-primary absolute left-0 top-0 hidden lg:block"></div>
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/c280bd290b27757e869906235626e890d69c5f14?width=636" 
          alt="" 
          className="w-[318.194px] h-[423px] rounded-[49px] opacity-50 blur-[25px] absolute left-[173px] bottom-[-29.5px] hidden lg:block"
        />
        <div className="w-full lg:w-[450px] h-auto lg:h-[503px] flex-shrink-0 relative">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/7da6afcb263a99bc9574cf3b6e543d9c82828a67?width=900" 
            alt="Property exterior"
            className="w-full h-full rounded-l-lg object-cover"
          />
        </div>
        <div className="hidden lg:flex flex-col items-start gap-2.5 flex-1">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/205eb1e93e8ba1ada14783e4ff9a887ee507be0c?width=472" 
            alt="Modern property"
            className="h-[250px] self-stretch rounded-lg object-cover"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/e5233d716604454c93e53f2b2b8c9eb34303c32b?width=472" 
            alt="Property interior"
            className="h-[317.045px] self-stretch rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-5 flex-1">
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
