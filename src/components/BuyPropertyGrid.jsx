import React from 'react';
import PropertyCard from './PropertyCard';

const BuyPropertyGrid = () => {
  const properties = [
    {
      id: 1,
      image: './src/public/thumbnail01.png',
      title: 'House for sale in Zoufftgen (FR)',
      price: '14950000 €',
      bedrooms: 3,
      bathrooms: 2,
      area: 260,
      floor: 4
    },
    {
      id: 2,
      image: './src/public/thumbnail02.png',
      title: 'Apartment for sale in Esch-sur-Alzette',
      price: '410000 €',
      bedrooms: 3,
      bathrooms: 2,
      area: 260,
      floor: null
    },
    {
      id: 3,
      image: './src/public/thumbnail03.png',
      title: 'House for sale in Zoufftgen (FR)',
      price: '14950000 €',
      bedrooms: null,
      bathrooms: 2,
      area: null,
      floor: null
    },
    {
      id: 4,
      image: './src/public/thumbnail04.png',
      title: 'House for sale in Zoufftgen (FR)',
      price: '14950000 €',
      bedrooms: 3,
      bathrooms: 2,
      area: 260,
      floor: 4
    },
    {
      id: 5,
      image: './src/public/thumbnail05.png',
      title: 'House for sale in Zoufftgen (FR)',
      price: '14950000 €',
      bedrooms: 3,
      bathrooms: 2,
      area: 260,
      floor: 4
    },
    {
      id: 6,
      image: './src/public/thumbnail06.png',
      title: 'House for sale in Zoufftgen (FR)',
      price: '14950000 €',
      bedrooms: 3,
      bathrooms: 2,
      area: 260,
      floor: 4
    },
    {
      id: 7,
      image: './src/public/thumbnail07.png',
      title: 'House for sale in Zoufftgen (FR)',
      price: '14950000 €',
      bedrooms: 3,
      bathrooms: 2,
      area: 260,
      floor: 4
    },
    {
      id: 8,
      image: './src/public/thumbnail08.png',
      title: 'House for sale in Zoufftgen (FR)',
      price: '14950000 €',
      bedrooms: 3,
      bathrooms: 2,
      area: 260,
      floor: 4
    },
    {
      id: 9,
      image: './src/public/thumbnail09.png',
      title: 'House for sale in Zoufftgen (FR)',
      price: '14950000 €',
      bedrooms: 3,
      bathrooms: 2,
      area: 260,
      floor: 4
    }
  ];

  return (
    <div className="mx-auto max-w-[1240px] flex flex-col gap-10 px-6 py-12 md:py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path d="M16.25 12.4688V10.1719C16.25 9.38866 15.9537 8.63752 15.4262 8.0837C14.8988 7.52988 14.1834 7.21875 13.4375 7.21875H12.1875C11.9389 7.21875 11.7004 7.11504 11.5246 6.93043C11.3488 6.74583 11.25 6.49545 11.25 6.23438V4.92188C11.25 4.13866 10.9537 3.38752 10.4262 2.8337C9.89879 2.27988 9.18342 1.96875 8.4375 1.96875H6.875M8.75 1.96875H4.6875C4.17 1.96875 3.75 2.40975 3.75 2.95312V18.0469C3.75 18.5902 4.17 19.0312 4.6875 19.0312H15.3125C15.83 19.0312 16.25 18.5902 16.25 18.0469V9.84375C16.25 7.75517 15.4598 5.75213 14.0533 4.27528C12.6468 2.79844 10.7391 1.96875 8.75 1.96875Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-black font-roboto text-sm">1 / 3</span>
          </div>
          <div className="flex items-center">
            <span className="text-black font-roboto text-sm">Results found:</span>
            <span className="text-black font-roboto text-base ml-1"> 36</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-black font-roboto text-sm">Sort by:</span>
           

          <div className="relative flex items-center gap-6">
            <select 
              className="h-9 appearance-none pr-8 rounded-md bg-white border border-gray-300 px-3 text-sm font-poppins leading-[26px] bg-transparent cursor-pointer outline-none"
            >
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <span className="absolute right-2 pointer-events-none">
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 0.75L6.75 6.75L12.75 0.75" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>



        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default BuyPropertyGrid;
