import React from 'react';

const CTASection = () => {
  return (
    <section className="relative h-[495px] overflow-hidden bg-[#F9FAFB]">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10 lg:px-5 relative">
        <img className='absolute z-10 top-0 left-[50%]' alt="" src="./src/public/before-img01.svg"/> 
        <div className="relative flex py-24" style={{background:"url('./src/public/bg01.svg') no-repeat center/cover"}}>
        <div className="flex w-full max-w-[513px] flex-col gap-13 relative">          
          <div className="flex flex-col gap-5">
            <h2 className="font-poppins text-[38px] font-bold leading-[44px]">
              Let's turn your property dreams into reality together!
            </h2>
            <p className="text-base leading-[26px]">
              Let our team assess your property's value—we'll reach out within 12 working hours to discuss your needs in detail.
            </p>
          </div>
          <div className="flex flex-col gap-3.5 md:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-[10px] border border-primary bg-primary px-8 py-3 font-poppins text-base text-white transition-all hover:bg-primary/90">
              Contact us now
            </button>
            <button className="flex items-center justify-center gap-2 rounded-[10px] border border-primary bg-gray-50 px-8 py-3 font-poppins text-base text-primary transition-all hover:bg-white">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0742 18.4961H3.92578C3.13867 18.4961 2.5 17.8555 2.5 17.0684V2.93164C2.5 2.14453 3.13867 1.50391 3.92578 1.50391H16.0742C16.8613 1.50391 17.5 2.14453 17.5 2.93164V17.0703C17.5 17.8555 16.8613 18.4961 16.0742 18.4961ZM3.92578 2.59766C3.74219 2.59766 3.59375 2.74805 3.59375 2.93164V17.0703C3.59375 17.2539 3.74219 17.4043 3.92578 17.4043H16.0742C16.2578 17.4043 16.4062 17.2539 16.4062 17.0703V2.93164C16.4062 2.74805 16.2578 2.59766 16.0742 2.59766H3.92578Z" fill="#85053B"/>
              <path d="M3.06445 6.21875H16.9355V7.3125H3.06445V6.21875ZM5.89648 9.99609H9.00586V11.0898H5.89648V9.99609Z" fill="#85053B"/>
              <path d="M6.9043 9H7.99805V12.125H6.9043V9ZM12.2716 13.2223L14.4703 15.421L13.6969 16.1944L11.4982 13.9957L12.2716 13.2223Z" fill="#85053B"/>
              <path d="M13.7163 13.2031L14.4897 13.9765L12.28 16.1862L11.5066 15.4128L13.7163 13.2031ZM13.2477 8.61377L14.0209 9.38727L6.76937 16.6368L5.99609 15.8633L13.2477 8.61377Z" fill="#85053B"/>
              </svg> 
              <span>Estimate the home</span>
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0 hidden h-[495px] w-[757px] lg:block">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/e6b13266676a14730d654d7141f6c23f77ec40c5?width=1514" 
            alt="House" 
            className="h-full w-full object-cover"
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
