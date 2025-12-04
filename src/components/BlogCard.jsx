import React from 'react';

const BlogCard = ({ image, title, excerpt, variant = 'default' }) => {
  return (
    <div className={`flex ${variant === 'horizontal' ? 'flex-row gap-6' : 'flex-col gap-6'}`}>
      <img 
        src={image} 
        alt={title}
        className={`rounded-lg object-cover ${variant === 'horizontal' ? 'h-auto w-full flex-1' : 'h-auto w-full'}`}
      />
      <div className={`flex flex-col gap-5 ${variant === 'horizontal' ? 'flex-1 py-5' : ''}`}>
        <div className="flex flex-col gap-2">
          <h3 className="font-poppins text-lg font-bold leading-6 text-black">
            {title}
          </h3>
          <p className="line-clamp-3 overflow-hidden text-ellipsis font-poppins text-base leading-[26px] text-text-gray">
            {excerpt}
          </p>
        </div>
        <button className="flex items-center gap-1 self-start">
          <span className="text-center font-poppins text-xs font-semibold leading-4 text-primary">
            Read article
          </span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
              <path d="M14.1673 5.83334L5.83398 14.1667" stroke="#85053B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.66602 5.83334H14.166V13.3333" stroke="#85053B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
