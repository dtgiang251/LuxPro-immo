import React from 'react';

const PropertySidebar = ({ title, address, bedrooms, bathrooms, area, floor }) => {
  return (
    <div className="md:sticky mt-10 top-6 w-full min-w-[240px] md:max-w-[360px] rounded-lg border border-[#e5e5e5] bg-white p-6 shadow-[0_16px_40px_-6px_rgba(30,52,96,0.08)]">
      <div className="flex flex-col">
        <h3 className="font-poppins text-2xl font-bold leading-[30px] text-black">
          {title}
        </h3>
        <p className="mt-3.5 font-testsohne text-sm leading-[1.43] text-gray-500">
          {address}
        </p>

        <div className="mt-3.5 flex items-center justify-between gap-10 font-opensans text-xs leading-[1] text-black">
          {bedrooms && (
            <div className="flex items-center gap-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/942722e984fc85dc94d6c2e9f9009a8c405a1ce1?placeholderIfAbsent=true"
                alt="Bedrooms"
                className="h-3.5 w-3.5"
              />
              <span>{bedrooms}</span>
            </div>
          )}
          {bathrooms && (
            <div className="flex items-center gap-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/40ed2f8f99d273ab032d459f9c33c8b8bcb045fa?placeholderIfAbsent=true"
                alt="Bathrooms"
                className="h-3.5 w-3.5"
              />
              <span>{bathrooms}</span>
            </div>
          )}
          {area && (
            <div className="flex items-center gap-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/50ddf3fab06a2d6ddb3a50579738a463aa24a4f1?placeholderIfAbsent=true"
                alt="Area"
                className="h-3.5 w-3.5"
              />
              <span>{area} m²</span>
            </div>
          )}
          {floor && (
            <div className="flex items-center gap-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/a7be3e72a636408848afea87fecfed5c6171ed48?placeholderIfAbsent=true"
                alt="Floor"
                className="h-3.5 w-3.5"
              />
              <span>{floor}</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 h-px w-full bg-gray-200"></div>

      <div className="mt-6 md:flex text-center md:text-left items-center gap-4">
        <div className="flex-1">
          <h4 className="font-poppins text-lg font-bold leading-[1.33] text-black">
            Visit this property
          </h4>
          <p className="mt-2.5 font-poppins text-sm font-normal leading-5 text-gray-500">
            Contact our agency to request extra information, some advice or a visit
          </p>
        </div>
        <div className="justify-center md:justify-start mt-4 md:mt-0 flex items-center gap-3.5">
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-primary bg-opacity-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/c5f5bf34301f4cc6ab79b81971051abea62f52dd?placeholderIfAbsent=true"
              alt="Phone"
              className="h-9 w-9 rounded-full"
            />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-primary bg-opacity-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/d496f6ad7006f1420045703aa91c41b40c8c963d?placeholderIfAbsent=true"
              alt="Email"
              className="h-9 w-9 rounded-full"
            />
          </button>
        </div>
      </div>

      <button className="mt-6 w-full rounded-[10px] border-[1.4px] border-primary bg-primary px-[34px] py-3 text-center font-poppins text-base font-normal leading-[1.63] text-white hover:bg-opacity-90 transition-opacity">
        Make an offer
      </button>
    </div>
  );
};

export default PropertySidebar;
