import React, { useState } from 'react';

const BuySearchBar = () => {
  const [searchType, setSearchType] = useState('Buy');
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative -mt-10 z-20 px-6 md:px-12 lg:px-0 max-w-[1060px] mx-auto">
      <div className="hidden lg:flex flex-col md:flex-row items-start md:items-center gap-4 rounded-lg bg-white shadow-[0_10px_20px_-12px_rgba(0,0,0,0.10)] px-5">
        
            <div className="flex flex-col gap-1.5 w-full md:w-auto">
              <label className="text-black font-poppins text-lg font-bold leading-[26px]">For</label>
              <div className="flex items-center gap-6">
                <div className="relative flex items-center gap-6">
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="appearance-none pr-8 text-text-gray font-poppins text-base leading-[26px] bg-transparent border-none outline-none cursor-pointer"
                  >
                    <option>Buy</option>
                    <option>Rent</option>
                  </select>
                  <span className="absolute right-2 pointer-events-none">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.75 0.75L6.75 6.75L12.75 0.75" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div> 
              </div>
            </div>

            <div className="w-full md:w-px h-px md:h-20 bg-gray-200"></div>

            <div className="flex flex-col gap-1.5 w-full md:flex-1">
              <label className="text-black font-poppins text-lg font-bold leading-[26px]">Location</label>
              <div className="flex items-center gap-6 relative">
                <input 
                  type="text"
                  placeholder="Select your city"
                  className="text-text-gray font-poppins text-base leading-[26px] bg-transparent border-none outline-none placeholder:text-text-gray w-full"
                /> 
                <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7002 6.7C12.7002 11.3667 6.7002 15.3667 6.7002 15.3667C6.7002 15.3667 0.700195 11.3667 0.700195 6.7C0.700195 5.1087 1.33234 3.58258 2.45755 2.45736C3.58277 1.33214 5.1089 0.700001 6.7002 0.700001C8.29149 0.700001 9.81762 1.33214 10.9428 2.45736C12.0681 3.58258 12.7002 5.1087 12.7002 6.7Z" stroke="#939393" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.7002 8.7C7.80476 8.7 8.7002 7.80457 8.7002 6.7C8.7002 5.59543 7.80476 4.7 6.7002 4.7C5.59563 4.7 4.7002 5.59543 4.7002 6.7C4.7002 7.80457 5.59563 8.7 6.7002 8.7Z" stroke="#939393" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              </div>
            </div>

            <div className="w-full md:w-px h-px md:h-20 bg-gray-200"></div>

            <div className="flex flex-col gap-1.5 w-full md:w-auto">
              <label className="text-black font-poppins text-lg font-bold leading-[26px]">Property type</label>
              <div className="flex items-center gap-6">
              

                <div className="relative flex items-center gap-6">
                  <select
                    value="" 
                    className="appearance-none pr-8 text-text-gray font-poppins text-base leading-[26px] bg-transparent border-none outline-none cursor-pointer"
                  >
                    <option>Choose property type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  </select>
                  <span className="absolute right-2 pointer-events-none">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.75 0.75L6.75 6.75L12.75 0.75" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>



              </div>
            </div>

            <div className="w-full md:w-px h-px md:h-20 bg-gray-200"></div>

            <div className="flex flex-col gap-1.5 w-full md:w-auto">
              <label className="text-black font-poppins text-lg font-bold leading-[26px]">Price range</label>
              <div className="flex items-center gap-6">
                
                <div className="relative flex items-center gap-6">
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="appearance-none pr-8 text-text-gray font-poppins text-base leading-[26px] bg-transparent border-none outline-none cursor-pointer"
                  >
                    <option>Choose price range</option>
                    <option>0 - 500,000€</option>
                    <option>500,000€ - 1,000,000€</option>
                  </select>
                  <span className="absolute right-2 pointer-events-none">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.75 0.75L6.75 6.75L12.75 0.75" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div> 

              </div>
            </div>

            <div className="w-full md:w-px h-px md:h-20 bg-gray-200"></div>

            <div className="flex flex-col gap-1.5 w-full md:w-auto">
              <label className="text-black font-poppins text-lg font-bold leading-[26px]">Surfaces</label>
              <div className="flex items-center gap-6">
                
                <div className="relative flex items-center gap-6">
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="appearance-none pr-8 text-text-gray font-poppins text-base leading-[26px] bg-transparent border-none outline-none cursor-pointer"
                  >
                    <option>All</option>
                    <option>0-100 m²</option>
                    <option>100-200 m²</option>
                  </select>
                  <span className="absolute right-2 pointer-events-none">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.75 0.75L6.75 6.75L12.75 0.75" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>



              </div>
            </div>

            <button className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center hover:bg-opacity-90 transition-opacity">
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                <path d="M10.8947 18.7895C15.2549 18.7895 18.7895 15.2549 18.7895 10.8947C18.7895 6.53459 15.2549 3 10.8947 3C6.53459 3 3 6.53459 3 10.8947C3 15.2549 6.53459 18.7895 10.8947 18.7895Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.7635 20.7632L16.4707 16.4704" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button> 
      </div>
      <div className="block lg:hidden flex-col md:flex-row items-start md:items-center gap-4 rounded-lg bg-white shadow-[0_10px_20px_-12px_rgba(0,0,0,0.10)]">
        <div className='shadow-[0px_10px_20px_-12px_rgba(0,0,0,0.1)]'>
          <div
            className="top flex items-center justify-between px-5 cursor-pointer"
            onClick={() => setShowForm((prev) => !prev)}
          >
            <label className='text-black font-poppins text-lg font-bold leading-[26px]'>Click to filter</label>
            <div className='border-l border-[#E5E7EB] py-2.5 pl-5'>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.0003 9.99984V6.6665M20.0003 9.99984C18.1594 9.99984 16.667 11.4922 16.667 13.3332C16.667 15.1741 18.1594 16.6665 20.0003 16.6665M20.0003 9.99984C21.8413 9.99984 23.3337 11.4922 23.3337 13.3332C23.3337 15.1741 21.8413 16.6665 20.0003 16.6665M10.0003 29.9998C11.8413 29.9998 13.3337 28.5075 13.3337 26.6665C13.3337 24.8256 11.8413 23.3332 10.0003 23.3332M10.0003 29.9998C8.15938 29.9998 6.66699 28.5075 6.66699 26.6665C6.66699 24.8256 8.15938 23.3332 10.0003 23.3332M10.0003 29.9998V33.3332M10.0003 23.3332V6.6665M20.0003 16.6665V33.3332M30.0003 29.9998C31.8413 29.9998 33.3337 28.5075 33.3337 26.6665C33.3337 24.8256 31.8413 23.3332 30.0003 23.3332M30.0003 29.9998C28.1594 29.9998 26.667 28.5075 26.667 26.6665C26.667 24.8256 28.1594 23.3332 30.0003 23.3332M30.0003 29.9998V33.3332M30.0003 23.3332V6.6665" stroke="#85053B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <form className={`${showForm ? '' : 'hidden'} search-form border-t border-[#E5E7EB] px-5 pb-5`}>
               <div className='py-5 border-b border-[#E5E7EB] flex items-center justify-between'>
                  <label className="text-black font-poppins text-sm leading-[14px] font-semibold">For</label>
                  <span>Buy</span>
               </div>
               <div className='py-5 border-b border-[#E5E7EB] flex items-center justify-between'>
                  <label className="text-black font-poppins text-sm leading-[14px] font-semibold">City</label>
                  <div className="relative flex items-center gap-6">
                    <select 
                      className="text-right w-full appearance-none pr-8 text-text-gray font-poppins text-base leading-[26px] bg-transparent border-none outline-none cursor-pointer"
                    >
                      <option>Select your city</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </select>
                    <span className="absolute right-2 pointer-events-none">
                      <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.7002 6.7C12.7002 11.3667 6.7002 15.3667 6.7002 15.3667C6.7002 15.3667 0.700195 11.3667 0.700195 6.7C0.700195 5.1087 1.33234 3.58258 2.45755 2.45736C3.58277 1.33214 5.1089 0.700001 6.7002 0.700001C8.29149 0.700001 9.81762 1.33214 10.9428 2.45736C12.0681 3.58258 12.7002 5.1087 12.7002 6.7Z" stroke="#939393" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6.7002 8.7C7.80476 8.7 8.7002 7.80457 8.7002 6.7C8.7002 5.59543 7.80476 4.7 6.7002 4.7C5.59563 4.7 4.7002 5.59543 4.7002 6.7C4.7002 7.80457 5.59563 8.7 6.7002 8.7Z" stroke="#939393" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                  </div>  
               </div>
               <div className='py-5 border-b border-[#E5E7EB] flex items-center justify-between'>
                  <label className="text-black font-poppins text-sm leading-[14px] font-semibold">Property Type</label>
                  <div className="relative flex items-center gap-6">
                    <select 
                      className="text-right w-full appearance-none pr-8 text-text-gray font-poppins text-base leading-[26px] bg-transparent border-none outline-none cursor-pointer"
                    >
                      <option>Choose property type</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </select>
                    <span className="absolute right-2 pointer-events-none">
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.75 0.75L6.75 6.75L12.75 0.75" stroke="#939393" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg> 
                    </span>
                  </div>  
               </div>
               <div className='py-5 border-b border-[#E5E7EB] flex items-center justify-between'>
                  <label className="text-black font-poppins text-sm leading-[14px] font-semibold">Property Type</label>
                  <div className="relative flex items-center gap-6">
                    <select 
                      className="text-right w-full appearance-none pr-8 text-text-gray font-poppins text-base leading-[26px] bg-transparent border-none outline-none cursor-pointer"
                    >
                      <option>Price Range</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </select>
                    <span className="absolute right-2 pointer-events-none">
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.75 0.75L6.75 6.75L12.75 0.75" stroke="#939393" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg> 
                    </span>
                  </div>  
               </div>
               <div className='py-5 flex items-center justify-between'>
                  <label className="text-black font-poppins text-sm leading-[14px] font-semibold">Property Type</label>
                  <div className="relative flex items-center gap-6">
                    <select 
                      className="text-right w-full appearance-none pr-8 text-text-gray font-poppins text-base leading-[26px] bg-transparent border-none outline-none cursor-pointer"
                    >
                      <option>Surfaces</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </select>
                    <span className="absolute right-2 pointer-events-none">
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.75 0.75L6.75 6.75L12.75 0.75" stroke="#939393" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg> 
                    </span>
                  </div>  
               </div>
               <button className="w-full flex items-center justify-center gap-2 rounded-[10px] border border-primary bg-primary px-8 py-3 font-poppins text-base text-white transition-all hover:bg-primary/90">View results</button>
            </form>


        </div>

      </div>

    </div>
  );
};

export default BuySearchBar;
