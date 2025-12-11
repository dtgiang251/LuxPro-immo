import React from 'react';

const SellCTA = () => {
  return (
    <div className="relative h-auto md:h-[495px] self-stretch bg-gradient-to-r from-primary to-[#750836] overflow-hidden">
      <svg 
        className="absolute right-0 top-[2px] w-[442px] h-[376px] fill-[#720030] hidden md:block" 
        width="327" 
        height="373" 
        viewBox="0 0 327 373" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M315.467 10.0649C314.007 5.73836 313.276 3.57508 311.875 2.22271C310.643 1.03348 309.061 0.271037 307.364 0.0475166C305.433 -0.206666 303.285 0.569096 298.991 2.12062L94.3511 76.0479C92.3255 76.7797 91.3127 77.1455 90.4607 77.7335C89.7056 78.2546 89.0458 78.9016 88.5101 79.6463C87.9056 80.4867 87.52 81.4922 86.7488 83.5032L2.67859 302.724C0.687408 307.916 -0.308197 310.513 0.0838623 312.705C0.42749 314.627 1.46216 316.357 2.99292 317.569C4.73929 318.952 7.4975 319.303 13.0139 320.005L418.094 371.558C424.822 372.414 428.185 372.842 430.407 371.685C432.347 370.674 433.789 368.913 434.396 366.811C435.091 364.404 434.007 361.192 431.838 354.766L315.467 10.0649Z" fill="#720030"/>
      </svg>
      <div className='max-w-[1240px] m-auto px-6'>
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/d5ce65aa174395ff7799f9eed92edec4e4bdee87?width=1514" 
            alt="House"
            className="absolute right-0 top-0 w-full md:w-[757px] h-auto md:h-[495px] object-cover"
          />
          
          <div className="relative flex flex-col items-start gap-12 w-full md:w-[513px] h-auto md:h-[305px] px-6 py-12 md:px-0 md:py-0 md:mt-[95px] z-10">
            <div className="flex flex-col items-start gap-5 self-stretch">
              <h2 className="self-stretch text-white font-poppins text-[38px] font-bold leading-[44px]">
                Let Lux-Pro-Immo maximize your property's potential today
              </h2>
              <p className="self-stretch text-white font-poppins text-base leading-[26px]">
                Don't leave your property sale to chance. Contact Lux-Pro-Immo now to schedule a no-obligation consultation.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-3.5">
              <button className="flex justify-center items-center gap-4 rounded-[10px] border border-white bg-primary px-8 py-3">
                <span className="text-white text-center font-poppins text-base leading-[26px]">Contact us now</span>
              </button>
              <button className="flex justify-center items-center gap-2 rounded-[10px] border border-white px-8 py-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0742 18.4961H3.92578C3.13867 18.4961 2.5 17.8555 2.5 17.0684V2.93164C2.5 2.14453 3.13867 1.50391 3.92578 1.50391H16.0742C16.8613 1.50391 17.5 2.14453 17.5 2.93164V17.0703C17.5 17.8555 16.8613 18.4961 16.0742 18.4961ZM3.92578 2.59766C3.74219 2.59766 3.59375 2.74805 3.59375 2.93164V17.0703C3.59375 17.2539 3.74219 17.4043 3.92578 17.4043H16.0742C16.2578 17.4043 16.4062 17.2539 16.4062 17.0703V2.93164C16.4062 2.74805 16.2578 2.59766 16.0742 2.59766H3.92578Z" fill="white"/>
                <path d="M3.06445 6.21875H16.9355V7.3125H3.06445V6.21875ZM5.89648 9.99609H9.00586V11.0898H5.89648V9.99609Z" fill="white"/>
                <path d="M6.9043 9H7.99805V12.125H6.9043V9ZM12.2716 13.2223L14.4703 15.421L13.6969 16.1944L11.4982 13.9957L12.2716 13.2223Z" fill="white"/>
                <path d="M13.7163 13.2031L14.4897 13.9765L12.28 16.1862L11.5066 15.4128L13.7163 13.2031ZM13.2477 8.61377L14.0209 9.38727L6.76937 16.6368L5.99609 15.8633L13.2477 8.61377Z" fill="white"/>
                </svg> 
                <span className="text-white text-center font-poppins text-base leading-[26px]">Estimate the home</span>
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SellCTA;
