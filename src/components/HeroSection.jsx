import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/683ac9bd05003d81c3c6b48ccfc07855cfd7f035?width=2880')" }}>
      <div className="flex h-full items-end justify-center bg-black/30">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-20 px-5 py-10 md:px-10 lg:px-5">
        <h1 className="max-w-[800px] text-center font-poppins text-[38px] font-bold leading-[44px] text-white">
          Your real estate project is in good hands with the Lux-Pro-Immo team
        </h1>
        
        <div className='relative max-w-[1240px] m-auto w-full'> 
          <img className='absolute left-0 bottom-10' alt="" src="./src/public/circle.png"/>
          <div className="w-full max-w-[800px] m-auto rounded-lg border border-white bg-white/90 px-9 py-7 shadow-hero-card backdrop-blur-xs">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex-1 font-poppins text-lg font-semibold leading-6">
                Your trusted real estate partner
              </h2>
              <span className="text-center font-poppins text-sm font-semibold leading-5">
                99,926 real estate listings
              </span>
            </div>
            
            <div className="mb-6 flex gap-px overflow-hidden rounded shadow-search">
              <div className="flex cursor-pointer items-center gap-5 bg-white px-5 py-3.5 text-text-gray">
                <span className="font-poppins text-base">Buy</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.64645 3.64645C2.84171 3.45118 3.15829 3.45118 3.35355 3.64645L5 5.29289L6.64645 3.64645C6.84171 3.45118 7.15829 3.45118 7.35355 3.64645C7.54882 3.84171 7.54882 4.15829 7.35355 4.35355L5.35355 6.35355C5.15829 6.54882 4.84171 6.54882 4.64645 6.35355L2.64645 4.35355C2.45118 4.15829 2.45118 3.84171 2.64645 3.64645Z" fill="black"/>
                </svg>
              </div>
              
              <input 
                type="text" 
                className="flex-1 border-none bg-white px-5 py-3.5 font-poppins text-base text-text-gray outline-none placeholder:text-text-gray" 
                placeholder="Search by city, district, type of properties"
              />
              
              <button className="flex h-14 items-center justify-center bg-white px-5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M7.5789 13.0709C10.612 13.0709 13.0709 10.612 13.0709 7.5789C13.0709 4.54576 10.612 2.08691 7.5789 2.08691C4.54576 2.08691 2.08691 4.54576 2.08691 7.5789C2.08691 10.612 4.54576 13.0709 7.5789 13.0709Z" stroke="#85053B" strokeWidth="1.3913" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.4438 14.4438L11.4575 11.4575" stroke="#85053B" strokeWidth="1.3913" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <a href="#estimate" className="flex items-center gap-1 font-opensans text-base font-semibold text-primary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0742 18.4961H3.92578C3.13867 18.4961 2.5 17.8555 2.5 17.0684V2.93164C2.5 2.14453 3.13867 1.50391 3.92578 1.50391H16.0742C16.8613 1.50391 17.5 2.14453 17.5 2.93164V17.0703C17.5 17.8555 16.8613 18.4961 16.0742 18.4961ZM3.92578 2.59766C3.74219 2.59766 3.59375 2.74805 3.59375 2.93164V17.0703C3.59375 17.2539 3.74219 17.4043 3.92578 17.4043H16.0742C16.2578 17.4043 16.4062 17.2539 16.4062 17.0703V2.93164C16.4062 2.74805 16.2578 2.59766 16.0742 2.59766H3.92578Z" fill="#85053B" stroke="#85053B" stroke-width="0.2"/>
              <path d="M3.06445 6.21875H16.9355V7.3125H3.06445V6.21875ZM5.89648 9.99609H9.00586V11.0898H5.89648V9.99609Z" fill="#85053B" stroke="#85053B" stroke-width="0.2"/>
              <path d="M6.9043 9H7.99805V12.125H6.9043V9ZM12.2716 13.2223L14.4703 15.421L13.6969 16.1944L11.4982 13.9957L12.2716 13.2223Z" fill="#85053B" stroke="#85053B" stroke-width="0.2"/>
              <path d="M13.7163 13.203L14.4897 13.9764L12.28 16.1861L11.5066 15.4127L13.7163 13.203ZM13.2477 8.61371L14.0209 9.3872L6.76937 16.6367L5.99609 15.8632L13.2477 8.61371Z" fill="#85053B" stroke="#85053B" stroke-width="0.2"/>
              </svg> 
              <span>How much is your home worth?</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14.1668 5.8335L5.8335 14.1668" stroke="#85053B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.6665 5.8335H14.1665V13.3335" stroke="#85053B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
