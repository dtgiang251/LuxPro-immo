import React from 'react';

const PropertyCard = ({ image, title, price, bedrooms, bathrooms, area, floor }) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden bg-white shadow-card hover:shadow-xl transition-shadow group">
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div className="flex flex-col gap-3 p-4 border-2 border-primary rounded-b-lg">
        <h3 className="text-black font-poppins text-lg font-semibold leading-6 min-h-[48px]">
          {title}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {bedrooms && (
              <div className="flex items-center gap-1.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 7V17M17 7V17M3 10H17M3 7H17V17H3V7Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-black font-poppins text-sm">{bedrooms}</span>
              </div>
            )}
            
            {bathrooms && (
              <div className="flex items-center gap-1.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17 10C17 10 17 8 15 8C13 8 13 10 13 10M3 10H17M5 10V14C5 15.1046 5.89543 16 7 16H13C14.1046 16 15 15.1046 15 14V10M7 16V18M13 16V18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-black font-poppins text-sm">{bathrooms}</span>
              </div>
            )}
            
            {area && (
              <div className="flex items-center gap-1.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 3H17V17H3V3Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 3L17 17M17 3L3 17" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-black font-poppins text-sm">{area} m²</span>
              </div>
            )}
            
            {floor && (
              <div className="flex items-center gap-1.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 17V3H17V17H3Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="10" y="13" textAnchor="middle" fontSize="8" fontWeight="bold" fill="black">{floor}</text>
                </svg>
                <span className="text-black font-poppins text-sm">{floor}</span>
              </div>
            )}
          </div>
          
          <div className="text-black font-poppins text-lg font-bold">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
