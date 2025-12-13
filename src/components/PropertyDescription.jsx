import React from 'react';

const PropertyDescription = ({ description }) => {
  return (
    <div className="w-full rounded-lg pt-5 md:pt-12">
      <h2 className="font-poppins text-lg font-bold leading-[1.33] text-black">
        Description
      </h2>
      <div className="mt-5 font-poppins text-base font-normal leading-[26px] text-black whitespace-pre-line">
        {description}
      </div>
    </div>
  );
};

export default PropertyDescription;
