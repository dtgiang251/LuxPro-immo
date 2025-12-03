import React, { useState } from 'react';

const PropertiesSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Buy', 'Rent'];

  const properties = [
    { id: 1, image: 'https://api.builder.io/api/v1/image/assets/TEMP/property1.jpg', type: 'Buy' },
    { id: 2, image: 'https://api.builder.io/api/v1/image/assets/TEMP/property2.jpg', type: 'Rent' },
    { id: 3, image: 'https://api.builder.io/api/v1/image/assets/TEMP/property3.jpg', type: 'Buy' },
    { id: 4, image: 'https://api.builder.io/api/v1/image/assets/TEMP/property4.jpg', type: 'Rent' },
    { id: 5, image: 'https://api.builder.io/api/v1/image/assets/TEMP/property5.jpg', type: 'Buy' },
    { id: 6, image: 'https://api.builder.io/api/v1/image/assets/TEMP/property6.jpg', type: 'Rent' }
  ];

  return (
    <section>
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-10 lg:px-5 lg:py-30">
        <div className="flex flex-col items-center gap-15">
        <div className="flex w-full flex-col items-center gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3.5">
            <svg className="self-stretch" width="968" height="30" viewBox="0 0 968 30" fill="none">
              <path d="M0.996712 22.0255H0V6.82691L9.96622 0L24.218 9.91644V22.0255H9.96622V20.6302H22.9224V10.3151L9.96622 1.49495L0.996712 7.67403V22.0255Z" fill="#B6B8B5"/>
              <path d="M10.0161 14.3018H3.83691V23.7199L10.0161 29.9986V14.3018Z" fill="#85053B"/>
              <text fill="#85053B" x="44.2178" y="21.299" fontFamily="Poppins" fontSize="18" fontWeight="800" letterSpacing="0.175em">CHECKOUT OUR NEW</text>
            </svg>
            <h2 className="text-center font-poppins text-[38px] font-bold leading-[44px] md:text-left">Latest listed properties</h2>
          </div>

          <div className="flex gap-1.5 rounded-[44px] bg-gray-200 p-1.5">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`h-11 w-20 rounded-[32px] px-6 py-1 text-center font-opensans text-base font-bold opacity-80 transition-all ${
                  activeFilter === filter ? 'bg-white' : ''
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {properties.slice(0, 6).map((property) => (
            <div
              key={property.id}
              className="h-[400px] min-w-[300px] rounded-lg bg-cover bg-center p-2 shadow-property"
              style={{ backgroundImage: `url(${property.image})` }}
            >
            </div>
          ))}
        </div>

        <button className="rounded-[10px] border-2 border-primary bg-transparent px-8 py-3 text-center font-poppins text-base text-primary transition-all hover:bg-primary hover:text-white">
          VIew more
        </button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
