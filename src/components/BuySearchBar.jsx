import React, { useState } from 'react';

const BuySearchBar = () => {
  const [searchType, setSearchType] = useState('Buy');

  return (
    <div className="relative -mt-10 z-20 px-6 md:px-12 lg:px-0 max-w-[1060px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 rounded-lg bg-white shadow-[0_10px_20px_-12px_rgba(0,0,0,0.10)] p-5">
        <div className="flex flex-col gap-1.5 w-full md:w-auto">
          <label className="text-black font-poppins text-lg font-bold leading-[26px]">For</label>
          <div className="flex items-center gap-6">
            <select 
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="text-text-gray font-poppins text-base leading-[26px] bg-transparent border-none outline-none cursor-pointer"
            >
              <option>Buy</option>
              <option>Rent</option>
            </select>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M0.75 0.75L6.75 6.75L12.75 0.75" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="w-full md:w-px h-px md:h-20 bg-gray-200"></div>

        <div className="flex flex-col gap-1.5 w-full md:flex-1">
          <label className="text-black font-poppins text-lg font-bold leading-[26px]">Location</label>
          <div className="flex items-center gap-6">
            <input 
              type="text"
              placeholder="Select your city"
              className="text-text-gray font-poppins text-base leading-[26px] bg-transparent border-none outline-none placeholder:text-text-gray w-full"
            />
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
              <path d="M12 7.66667C12 12.3333 6 16.3333 6 16.3333C6 16.3333 0 12.3333 0 7.66667C0 6.07536 0.632141 4.54925 1.75736 3.42403C2.88258 2.29881 4.4087 1.66667 6 1.66667C7.5913 1.66667 9.11742 2.29881 10.2426 3.42403C11.3679 4.54925 12 6.07536 12 7.66667Z" stroke="#939393" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 9.66667C7.10457 9.66667 8 8.77124 8 7.66667C8 6.5621 7.10457 5.66667 6 5.66667C4.89543 5.66667 4 6.5621 4 7.66667C4 8.77124 4.89543 9.66667 6 9.66667Z" stroke="#939393" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="w-full md:w-px h-px md:h-20 bg-gray-200"></div>

        <div className="flex flex-col gap-1.5 w-full md:w-auto">
          <label className="text-black font-poppins text-lg font-bold leading-[26px]">Property type</label>
          <div className="flex items-center gap-6">
            <select className="text-text-gray font-poppins text-base leading-[26px] bg-transparent border-none outline-none cursor-pointer">
              <option>Choose property type</option>
              <option>House</option>
              <option>Apartment</option>
            </select>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M0.75 0.75L6.75 6.75L12.75 0.75" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="w-full md:w-px h-px md:h-20 bg-gray-200"></div>

        <div className="flex flex-col gap-1.5 w-full md:w-auto">
          <label className="text-black font-poppins text-lg font-bold leading-[26px]">Price range</label>
          <div className="flex items-center gap-6">
            <select className="text-text-gray font-poppins text-base leading-[26px] bg-transparent border-none outline-none cursor-pointer">
              <option>Choose price range</option>
              <option>0 - 500,000€</option>
              <option>500,000€ - 1,000,000€</option>
            </select>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M0.75 0.75L6.75 6.75L12.75 0.75" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="w-full md:w-px h-px md:h-20 bg-gray-200"></div>

        <div className="flex flex-col gap-1.5 w-full md:w-auto">
          <label className="text-black font-poppins text-lg font-bold leading-[26px]">Surfaces</label>
          <div className="flex items-center gap-6">
            <select className="text-text-gray font-poppins text-base leading-[26px] bg-transparent border-none outline-none cursor-pointer">
              <option>All</option>
              <option>0-100 m²</option>
              <option>100-200 m²</option>
            </select>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M0.75 0.75L6.75 6.75L12.75 0.75" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <button className="w-full md:w-14 h-14 rounded-lg bg-primary flex items-center justify-center hover:bg-opacity-90 transition-opacity">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
            <path d="M10.8947 18.7895C15.2549 18.7895 18.7895 15.2549 18.7895 10.8947C18.7895 6.53459 15.2549 3 10.8947 3C6.53459 3 3 6.53459 3 10.8947C3 15.2549 6.53459 18.7895 10.8947 18.7895Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.7635 20.7632L16.4707 16.4704" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BuySearchBar;
