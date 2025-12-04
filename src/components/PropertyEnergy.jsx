import React from 'react';

const PropertyEnergy = ({ energyPerformance, thermicIsolation }) => {
  return (
    <div className="mt-10 w-full rounded-lg">
      <h2 className="font-poppins text-lg font-bold leading-[1.33] text-black">
        Energy/Heating
      </h2>
      
      <div className="mt-5 flex flex-col gap-5">
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex items-center gap-5 min-w-[240px] w-[257px]">
            <div className="flex-1 font-poppins text-sm font-semibold leading-[1] text-gray-400 capitalize">
              Energetic performance
            </div>
            <div className="font-poppins text-base font-normal leading-[1.63] text-primary text-right">
              {energyPerformance}
            </div>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/1ab13b5c75e532d8ea293c787311cf625c153d0d?placeholderIfAbsent=true"
            alt="Energy performance scale"
            className="flex-1 min-w-[240px] h-1"
          />
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex items-center gap-5 min-w-[240px] w-[257px]">
            <div className="flex-1 font-poppins text-sm font-semibold leading-[1] text-gray-400 capitalize">
              Thermic isolation
            </div>
            <div className="font-poppins text-base font-normal leading-[1.63] text-primary text-right">
              {thermicIsolation}
            </div>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/139ec5c18093355f84c8079cd4f7cd88fe003110?placeholderIfAbsent=true"
            alt="Thermic isolation scale"
            className="flex-1 min-w-[240px] h-1"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyEnergy;
