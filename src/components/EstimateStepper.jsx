import React from 'react';

const EstimateStepper = ({ steps, currentStep }) => {
  return (
    <div className="flex min-w-[80px] max-w-[140px] flex-1 items-center gap-2.5 rounded-lg bg-white">
      <div className="flex w-full flex-1 pr-7">
        <div className="relative z-10 -mr-35 flex w-full flex-col justify-start">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex w-full items-center gap-3 ${index > 0 ? 'mt-7.5' : ''}`}
            >
              <div className="flex flex-1 flex-col justify-center">
                <div
                  className={`font-poppins text-xs font-semibold leading-tight tracking-[0.3px] ${
                    currentStep >= step.id ? 'text-primary' : 'text-gray-400'
                  }`}
                >
                  {step.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <img
          loading="lazy"
          src={
            currentStep === 5
              ? "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/484403f22186ca7fa37e649428c4fbfdd956386e?placeholderIfAbsent=true"
              : currentStep === 4
              ? "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/1f0283366261d188d176ddd444d9da95f803f000?placeholderIfAbsent=true"
              : currentStep === 3
              ? "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/c347aa61cc2b2cd9ca4bece569348ed61a79431b?placeholderIfAbsent=true"
              : currentStep === 2
              ? "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/59e0052d659238b3ceb3e2dfbc136deba65d7832?placeholderIfAbsent=true"
              : "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/a938896e4b8f1d06348bbd0fb96059f703c25b8a?placeholderIfAbsent=true"
          }
          alt=""
          className="mt-1.5 h-auto w-0.5 object-contain"
        />
      </div>
    </div>
  );
};

export default EstimateStepper;
