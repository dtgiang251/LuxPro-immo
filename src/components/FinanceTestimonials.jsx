import React from 'react';

const FinanceTestimonials = () => {
  const testimonials = [
    {
      name: 'Rudolphe',
      text: "LuxPro turned my home-selling stress into success! Their valuation was spot-on, and the team guided me through every step. Hands down, the best real estate experience I've had!"
    },
    {
      name: 'Rudolphe',
      text: "Working with LuxPro to buy my dream home was incredible. Their market expertise and attention to detail made everything smooth—definitely recommending them to everyone!"
    },
    {
      name: 'Rudolphe',
      text: "I was hesitant to sell, but LuxPro's honest valuation and proactive approach made it a breeze. They're not just a real estate company; they're trusted partners. Five stars all the way!"
    }
  ];

  return (
    <div className="flex flex-col items-center gap-20 self-stretch px-6 py-12 md:px-12 md:py-24 lg:px-25">
      <div className="px-6 max-w-[1280px] m-auto flex flex-col items-start gap-5 self-stretch">
        <div className="flex flex-col items-center gap-3.5 self-stretch">
          <div className="flex justify-center items-center gap-5 self-stretch">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.996712 22.0255H0V6.82691L9.96622 0L24.218 9.91644V22.0255H9.96622V20.6302H22.9224V10.3151L9.96622 1.49495L0.996712 7.67403V22.0255Z" fill="#B6B8B5"/>
              <path d="M10.0161 14.3015H3.83691V23.7197L10.0161 29.9984V14.3015Z" fill="#85053B"/>
            </svg>
            <span className="text-primary font-poppins text-lg font-extrabold tracking-[0.175em]">TESTIMONIAL</span>
          </div>
          <h2 className="self-stretch text-center text-black font-poppins text-[38px] font-bold leading-[44px]">
            What the people think about us
          </h2>
        </div>
        <p className="self-stretch text-center text-text-gray font-poppins text-base leading-[26px]">
          Discover the delight of our clients. Real properties, real joy. Embrace success with LuxPro.
        </p>
      </div>

      <div className="max-w-[1280px] m-auto grid grid-cols-1 md:grid-cols-3 justify-center items-start gap-2.5 self-stretch">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-start gap-5 rounded-lg bg-white shadow-card p-6">
            <div className="flex justify-between items-center flex-wrap gap-6 self-stretch">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div className="flex flex-col justify-center items-start gap-0.5">
                  <span className="text-center text-black font-opensans text-base font-bold leading-[26px]">
                    {testimonial.name}
                  </span>
                </div>
              </div>
              <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_114_2350)">
                  <path d="M15.6002 20.4801H4.22416V20.4641C4.22416 17.3361 5.77616 14.4401 8.37616 12.7041L15.5122 7.94412C16.4482 7.32012 16.6962 6.06412 16.0722 5.12812C15.6802 4.54412 15.0402 4.22412 14.3762 4.22412C13.9922 4.22412 13.6002 4.33612 13.2482 4.56812L6.11216 9.32812C2.39216 11.8081 0.160156 15.9761 0.160156 20.4641V35.9201C0.160156 36.3681 0.520156 36.7361 0.976156 36.7361H15.6002C16.0482 36.7361 16.4162 36.3761 16.4162 35.9201V21.2961C16.4162 20.8401 16.0562 20.4801 15.6002 20.4801ZM39.9842 20.4801H28.6082V20.4641C28.6082 17.3361 30.1602 14.4401 32.7602 12.7041L39.8962 7.94412C40.8322 7.32012 41.0802 6.06412 40.4562 5.12812C40.0642 4.54412 39.4242 4.22412 38.7602 4.22412C38.3762 4.22412 37.9842 4.33612 37.6322 4.56812L30.4962 9.32812C26.7602 11.8161 24.5362 15.9761 24.5362 20.4641V35.9201C24.5362 36.3681 24.8962 36.7361 25.3522 36.7361H39.9842C40.4322 36.7361 40.8002 36.3761 40.8002 35.9201V21.2961C40.8002 20.8401 40.4322 20.4801 39.9842 20.4801Z" fill="#85053B"/>
                </g>
                <defs>
                  <clipPath id="clip0_114_2350">
                    <rect width="40.96" height="40.96" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="self-stretch text-text-gray font-poppins text-base leading-[26px]">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinanceTestimonials;
