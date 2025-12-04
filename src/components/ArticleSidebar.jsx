import React from 'react';
import BlogCard from './BlogCard';

const ArticleSidebar = () => {
  const relatedArticles = [
    {
      id: 1,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/f12be14cd94666cefd8fc113ba1a91e9eaeb05d6?width=376',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      excerpt: 'Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.',
    },
    {
      id: 2,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/4952bd5036097c14bdee9bbaf71b9f8781b83e34?width=376',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      excerpt: 'Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.',
    },
    {
      id: 3,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/e425d3539486d1bf99b596c57068072bb90448c9?width=376',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      excerpt: 'Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.',
    },
    {
      id: 4,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/086b8301dc3b932c1282f7c29191502cae9016ab?width=376',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      excerpt: 'Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.',
    },
  ];

  return (
    <aside className="flex max-w-full flex-col gap-10 lg:max-w-[400px]">
      <div className="flex flex-col gap-6">
        <h3 className="text-center font-poppins text-lg font-bold leading-6 text-dark">
          More articles
        </h3>
        <div className="flex flex-col gap-4">
          {relatedArticles.map((article) => (
            <div key={article.id} className="flex gap-6">
              <img 
                src={article.image} 
                alt={article.title}
                className="h-auto w-full max-w-[188px] flex-1 rounded-lg object-cover"
              />
              <div className="flex flex-1 flex-col gap-5 py-5">
                <div className="flex flex-col gap-2">
                  <h4 className="font-poppins text-lg font-bold leading-6 text-black">
                    {article.title}
                  </h4>
                  <p className="line-clamp-3 overflow-hidden text-ellipsis font-poppins text-base leading-[26px] text-text-gray">
                    {article.excerpt}
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
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-8">
        <span className="font-poppins text-base leading-[26px] text-black">Share to</span>
        <div className="flex items-start gap-5">
          <a href="#" aria-label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.13411 14.0005H0.231508V4.65317H3.13411V14.0005ZM1.68106 3.37812C0.753027 3.37812 0 2.60909 0 1.68106C0 0.753027 0.752527 0 1.68106 0C2.60959 0 3.36212 0.752527 3.36212 1.68106C3.36212 2.60909 2.60909 3.37812 1.68106 3.37812ZM13.9975 14.0005H11.1014V9.45034C11.1014 8.3658 11.0794 6.97525 9.59234 6.97525C8.08329 6.97525 7.85178 8.15329 7.85178 9.37233V14.0005H4.95218V4.65317H7.73578V5.92821H7.77628C8.16379 5.19369 9.11032 4.41866 10.5224 4.41866C13.46 4.41866 14 6.35323 14 8.86582V14.0005H13.9975Z" fill="black"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.696 7.87456L12.085 5.341H9.65377V3.69687C9.65377 3.00388 9.99327 2.32794 11.0822 2.32794H12.1873V0.171062C12.1873 0.171062 11.1846 0 10.2256 0C8.22358 0 6.91502 1.21363 6.91502 3.41031V5.34144H4.68945V7.875H6.91502V14H9.65377V7.875L11.696 7.87456Z" fill="black"/>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default ArticleSidebar;
