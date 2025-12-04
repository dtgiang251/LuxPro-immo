import React from 'react';

const SellServices = () => {
  const services = [
    {
      number: '1.',
      title: 'Full-cycle guidance',
      description: 'We guide you through every stage of your property project.'
    },
    {
      number: '2.',
      title: 'Needs assessment discussion',
      description: 'We understand your property expectations, needs, and details upfront.'
    },
    {
      number: '3.',
      title: 'Accurate property valuation',
      description: "We provide precise estimation of your property's value."
    },
    {
      number: '4.',
      title: 'Energy certificate preparation',
      description: 'We handle mandatory Energy Certificates for property sale/rental.'
    },
    {
      number: '5.',
      title: 'Property showcasing & buyer sourcing',
      description: 'We market your property to find financially sound buyers.'
    },
    {
      number: '6.',
      title: 'Direct property purchase',
      description: 'We directly purchase your apartment, house, or land.'
    }
  ];

  return (
    <div className="flex flex-col items-center gap-15 self-stretch bg-gray-50 px-6 py-12 md:px-12 md:py-20 lg:px-25 lg:py-30">
      <div className="flex flex-col items-start gap-5 self-stretch">
        <div className="flex flex-col items-center gap-3.5 self-stretch">
          <div className="flex justify-center items-center gap-5 self-stretch">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.996712 22.0255H0V6.82691L9.96622 0L24.218 9.91644V22.0255H9.96622V20.6302H22.9224V10.3151L9.96622 1.49495L0.996712 7.67403V22.0255Z" fill="#B6B8B5"/>
              <path d="M10.0161 14.3016H3.83691V23.7197L10.0161 29.9985V14.3016Z" fill="#85053B"/>
            </svg>
            <span className="text-primary font-poppins text-lg font-extrabold tracking-[0.175em]">SERVICES</span>
          </div>
          <h2 className="self-stretch text-center text-black font-poppins text-[38px] font-bold leading-[44px]">
            Planning to sell your property and need guidance?
          </h2>
        </div>
        <p className="self-stretch text-center text-text-gray font-poppins text-base leading-[26px]">
          Lux-Pro-Immo, an established real estate agency since 2008, offers the following services:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 self-stretch">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-start gap-3.5 rounded-lg bg-white shadow-card p-4 md:p-5">
            <span className="self-stretch text-primary font-poppins text-lg font-bold leading-6">
              {service.number}
            </span>
            <h3 className="self-stretch text-black font-poppins text-lg font-bold leading-6">
              {service.title}
            </h3>
            <p className="self-stretch text-text-gray font-poppins text-base leading-[26px]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellServices;
