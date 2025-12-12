import React from 'react';

const NewsSection = () => {
  const articles = [
    {
      id: 1,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/96a013e034144ac24fa9a04307b5bafe45ab3e65?width=1216',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.',
      featured: true
    },
    {
      id: 2,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/a3cf8240d63669198c5a471830d5210856ad6452?width=584',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.'
    },
    {
      id: 3,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/e29aff6326f7db9355445073aaf982d1080fb6bb?width=584',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.'
    }
  ];

  return (
    <section className="border-b border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-15 md:px-10 lg:px-5 lg:py-25">
        <div className="flex flex-col gap-12">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:items-center">
          <div className="flex flex-col gap-3 md:w-[70%]">
             <h2 className='justify-center md:justify-start flex gap-5 font-poppins font-extrabold text-[18px] leading-[27px] tracking-[0.175em] uppercase text-[#85053B]'>
                <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.996712 22.0255H0V6.82691L9.96622 0L24.218 9.91644V22.0255H9.96622V20.6302H22.9224V10.3151L9.96622 1.49495L0.996712 7.67403V22.0255Z" fill="#B6B8B5"/>
                <path d="M10.0161 14.3016H3.83691V23.7197L10.0161 29.9985V14.3016Z" fill="#85053B"/>
                </svg>
                NEWS & BLOGS
              </h2>
            <h2 className="text-center font-poppins text-[38px] font-bold leading-[44px] md:text-left">Market updates & Property advice</h2>
          </div>
          <button className="hidden md:block rounded-[10px] border-2 border-primary bg-transparent px-8 py-3 text-center font-poppins text-base text-primary transition-all hover:bg-primary hover:text-white">
            VIew more
          </button>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex flex-1 flex-col gap-6">
            <img src={articles[0].image} alt={articles[0].title} className="w-full rounded-lg" />
            <div className="flex flex-col gap-5">
              <h3 className="font-poppins text-lg font-bold leading-6">{articles[0].title}</h3>
              <p className="line-clamp-3 text-base leading-[26px] text-text-gray">{articles[0].description}</p>
              <a href="#" className="flex items-center gap-1 font-poppins text-xs font-semibold leading-4 text-primary">
                <span>Read article</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M14.1668 5.83301L5.8335 14.1663" stroke="#85053B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.6665 5.83301H14.1665V13.333" stroke="#85053B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            {articles.slice(1).map((article) => (
              <div key={article.id} className="flex gap-6">
                <img src={article.image} alt={article.title} className="h-auto w-1/2 rounded-lg object-cover" />
                <div className="flex flex-1 flex-col gap-5 py-5">
                  <h3 className="font-poppins text-lg font-bold leading-6">{article.title}</h3>
                  <p className="line-clamp-3 text-base leading-[26px] text-text-gray">{article.description}</p>
                  <a href="#" className="flex items-center gap-1 font-poppins text-xs font-semibold leading-4 text-primary">
                    <span>Read article</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M14.1668 5.83301L5.8335 14.1663" stroke="#85053B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.6665 5.83301H14.1665V13.333" stroke="#85053B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
            <button className="mt-9 md:mt-0 block md:hidden rounded-[10px] border-2 border-primary bg-transparent px-8 py-3 text-center font-poppins text-base text-primary transition-all hover:bg-primary hover:text-white">
              VIew more
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
