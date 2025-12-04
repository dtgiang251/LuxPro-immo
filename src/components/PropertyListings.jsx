import React from 'react';
import { Link } from 'react-router-dom';

const PropertyListings = ({ properties }) => {
  return (
    <div className="w-full bg-gray-50 px-5 py-[100px] lg:px-[100px]">
      <div className="flex items-center justify-between gap-10 flex-wrap">
        <h2 className="font-poppins text-[28px] md:text-[38px] font-bold leading-[1.16] text-dark">
          More listings
        </h2>
        <Link
          to="/buy"
          className="rounded-[10px] border-[2.209px] border-primary px-[34px] py-3 text-center font-poppins text-base font-normal leading-[1.63] text-primary hover:bg-primary hover:text-white transition-colors"
        >
          View more
        </Link>
      </div>

      <div className="mt-8 flex gap-4 flex-wrap">
        {properties.map((property, index) => (
          <div
            key={index}
            className="relative flex min-h-[400px] min-w-[300px] flex-1 flex-col justify-end rounded-lg p-2 pb-2 pt-[254px]"
          >
            <img
              src={property.image}
              alt={property.title}
              className="absolute inset-0 h-full w-full rounded-lg object-cover"
            />
            <div className="relative flex flex-col gap-4 rounded-lg bg-white p-3.5">
              <div className="flex items-center gap-1.5">
                <div className="flex-1 font-poppins text-base font-normal leading-[26px] text-black">
                  {property.title}
                </div>
                <div className="flex-1 text-right font-poppins text-lg font-bold leading-[1.33] text-black">
                  {property.price}
                </div>
              </div>
              <div className="h-px w-full bg-gray-200"></div>
              <div className="flex items-center justify-between gap-10 font-poppins text-sm font-normal leading-6 text-black">
                {property.bedrooms && (
                  <div className="flex items-center gap-1">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/3482d50d21658fce258d254a1c7dd6a1086bb0fc?placeholderIfAbsent=true"
                      alt="Bedrooms"
                      className="h-5 w-5"
                    />
                    <span>{property.bedrooms}</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-1">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/d08f45328821d3855c0dc307458c2c5ddfb6200a?placeholderIfAbsent=true"
                      alt="Bathrooms"
                      className="h-5 w-5"
                    />
                    <span>{property.bathrooms}</span>
                  </div>
                )}
                {property.area && (
                  <div className="flex items-center gap-1">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/89427fb179e7fa831e714faf2389386acfd41198?placeholderIfAbsent=true"
                      alt="Area"
                      className="h-5 w-5"
                    />
                    <span>{property.area} m²</span>
                  </div>
                )}
                {property.floor && (
                  <div className="flex items-center gap-1">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/51369d1e5f37ea76b7ab6e32ceddb5c3a92071e7?placeholderIfAbsent=true"
                      alt="Floor"
                      className="h-5 w-5"
                    />
                    <span>{property.floor}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListings;
