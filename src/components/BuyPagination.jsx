import React from 'react';

const BuyPagination = () => {
  const pages = [1, 2, 3, '...', 8, 9, 10];

  return (
    <div className="flex justify-between items-center px-6 md:px-12 lg:px-25 pb-12">
      <button className="flex items-center gap-2 text-primary font-poppins text-base hover:underline">
        Previous
      </button>

      <div className="flex items-center gap-0.5">
        {pages.map((page, index) => (
          <button
            key={index}
            className={`w-[30px] h-[30px] flex items-center justify-center rounded-lg font-poppins text-base ${
              page === 1
                ? 'bg-primary text-white'
                : 'text-primary hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button className="flex items-center gap-2 text-primary font-poppins text-base hover:underline">
        <span>Next</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4.1665 9.99996H15.8332M15.8332 9.99996L9.99984 4.16663M15.8332 9.99996L9.99984 15.8333" stroke="#85053B" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default BuyPagination;
