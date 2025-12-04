import React from 'react';

const PropertyTitleBar = ({ title, address, price, bedrooms, bathrooms, area, floor }) => {
  return (
    <div className="flex items-center justify-between gap-10 bg-white px-5 py-6 lg:px-[120px] flex-wrap">
      <div className="flex flex-1 flex-col gap-1.5">
        <h1 className="font-poppins text-[28px] md:text-[38px] font-bold leading-[1.16] text-dark">
          {title}
        </h1>
        <p className="font-poppins text-base font-normal leading-[1.63] text-dark opacity-60">
          {address}
        </p>
      </div>

      <div className="flex flex-col gap-1.5 w-auto">
        <div className="font-poppins text-[28px] md:text-[38px] font-medium leading-[1.16] text-dark text-right">
          {price}
        </div>
        <div className="flex items-center gap-[18px] justify-end font-opensans text-sm font-normal leading-6 text-black">
          {bedrooms && (
            <div className="flex items-center gap-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/3482d50d21658fce258d254a1c7dd6a1086bb0fc?placeholderIfAbsent=true"
                alt="Bedrooms"
                className="h-5 w-5"
              />
              <span>{bedrooms}</span>
            </div>
          )}
          {bathrooms && (
            <div className="flex items-center gap-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/d08f45328821d3855c0dc307458c2c5ddfb6200a?placeholderIfAbsent=true"
                alt="Bathrooms"
                className="h-5 w-5"
              />
              <span>{bathrooms}</span>
            </div>
          )}
          {area && (
            <div className="flex items-center gap-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/378a6df9b55809ef3ebe9f2848d99c59081f9e18?placeholderIfAbsent=true"
                alt="Area"
                className="h-5 w-5"
              />
              <span>{area} m²</span>
            </div>
          )}
          {floor && (
            <div className="flex items-center gap-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/75cec33dc72614fe2fb848165796754cb352bfd7?placeholderIfAbsent=true"
                alt="Floor"
                className="h-5 w-5"
              />
              <span>{floor}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyTitleBar;
