import React from 'react';

const FinanceServices = () => {
  const services = [
    {
      number: '1.',
      title: 'Pre-approve online & shop smart',
      description: 'Find your budget limit upfront, then shop for homes with confidence.'
    },
    {
      number: '2.',
      title: 'Make a competitive offer',
      description: 'Stand out to sellers with our strong pre-approval.'
    },
    {
      number: '3.',
      title: 'Lock a low interest rate',
      description: 'Pay less monthly with our favorable home loan rates.'
    },
    {
      number: '4.',
      title: 'Submit docs securely online',
      description: 'We handle paperwork, so you focus on your new home.'
    },
    {
      number: '5.',
      title: 'Get keys in 30 days max',
      description: 'Move in fast with our simplified mortgage process.'
    }
  ];

  return (
    <div className="flex flex-col items-center gap-15 self-stretch bg-gray-50 py-12 md:py-20 lg:py-30">
      <div className="px-6 max-w-[1280px] m-auto flex flex-col items-start gap-5 self-stretch">
        <div className="flex flex-col items-center gap-3.5 self-stretch">
          <div className="flex justify-center items-center gap-5 self-stretch">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.996712 22.0255H0V6.82691L9.96622 0L24.218 9.91644V22.0255H9.96622V20.6302H22.9224V10.3151L9.96622 1.49495L0.996712 7.67403V22.0255Z" fill="#B6B8B5"/>
              <path d="M10.0161 14.3015H3.83691V23.7197L10.0161 29.9984V14.3015Z" fill="#85053B"/>
            </svg>
            <span className="text-primary font-poppins text-lg font-extrabold tracking-[0.175em]">SERVICES</span>
          </div>
          <h2 className="self-stretch text-center text-black font-poppins text-[38px] font-bold leading-[44px]">
            We guide you through every phase
          </h2>
        </div>
      </div>

      <div className="px-6 max-w-[1280px] w-full m-auto flex flex-col items-start gap-2.5 self-stretch">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2.5 self-stretch">
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
    </div>
  );
};

export default FinanceServices;
