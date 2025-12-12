import React from 'react';

const EstimateStepper = ({ steps, currentStep }) => {
  return (
    <div className="flex min-w-[80px] max-w-[140px] flex-1 items-center gap-2.5 rounded-lg">
      <div className="flex w-full flex-1 pr-7">
        <div className="relative z-10 -mr-[35px] flex w-full flex-col justify-start before:absolute before:-left-[1px] before:top-[5px] before:bottom-9 before:w-[1px] before:bg-[#ccc]">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex w-full items-center gap-3 ${index > 0 ? 'mt-7.5' : ''}`}
            >
              <div className="flex flex-1 flex-col justify-center mb-7 relative">
                <div
                  className={`font-poppins text-xs font-semibold leading-tight pl-[10px] tracking-[0.3px]
                    before:absolute before:-left-[2.5px] before:top-1/2 before:-translate-y-1/2
                    before:h-[4px] before:w-[4px] before:rounded-full
                    ${currentStep >= step.id
                      ? 'text-primary before:bg-primary'
                      : 'text-gray-400 before:bg-gray-400'
                    }`}
                >
                  {step.name}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EstimateStepper;
