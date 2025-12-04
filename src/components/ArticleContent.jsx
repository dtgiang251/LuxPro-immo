import React from 'react';

const ArticleContent = () => {
  return (
    <article className="flex min-w-[300px] max-w-[800px] flex-1 flex-col gap-10">
      <h1 className="font-poppins text-[38px] font-bold leading-[44px] text-black">
        Lorem ipsum dolor sit amet consectetur Purus semper scelerisque
      </h1>

      <div className="flex flex-col gap-5 rounded-lg">
        <h2 className="font-poppins text-lg font-bold leading-6 text-dark">
          Ultrices lacus quisque posuere egestas blandit.
        </h2>
        <p className="font-poppins text-base leading-[26px] text-text-gray">
          Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.
        </p>
      </div>

      <div className="h-px w-full bg-gray-200"></div>

      <div className="flex flex-col gap-5 rounded-lg">
        <h2 className="font-poppins text-lg font-bold leading-6 text-dark">
          Lorem ipsum dolor sit amet consectetur Purus semper scelerisque
        </h2>
        <p className="font-poppins text-base leading-[26px] text-text-gray">
          Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.
        </p>
      </div>

      <div className="flex flex-col gap-3.5 rounded-lg border border-gray-200 bg-white p-6 md:flex-row md:flex-wrap md:items-center md:content-center">
        <div className="flex min-w-[200px] flex-1 flex-col gap-5">
          <h2 className="font-poppins text-[38px] font-bold leading-[44px] text-black">
            Let's turn your property dreams into reality together!
          </h2>
          <p className="font-poppins text-base leading-[26px] text-black">
            Let our team assess your property's value—we'll reach out within 12 working hours to discuss your needs in detail.
          </p>
        </div>
        <div className="flex flex-col gap-3.5">
          <button className="flex items-center justify-center gap-2 self-stretch rounded-[10px] border border-primary bg-primary px-8 py-3 font-poppins text-base text-white transition-all hover:bg-primary/90">
            Contact us now
          </button>
          <button className="flex items-center justify-center gap-2 rounded-[10px] border border-primary bg-white px-8 py-3 font-poppins text-base text-primary transition-all hover:bg-gray-50">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0742 18.4961H3.92578C3.13867 18.4961 2.5 17.8555 2.5 17.0684V2.93164C2.5 2.14453 3.13867 1.50391 3.92578 1.50391H16.0742C16.8613 1.50391 17.5 2.14453 17.5 2.93164V17.0703C17.5 17.8555 16.8613 18.4961 16.0742 18.4961Z" fill="#85053B"/>
              <path d="M3.06445 6.21875H16.9355V7.3125H3.06445V6.21875ZM5.89648 9.99609H9.00586V11.0898H5.89648V9.99609Z" fill="#85053B"/>
              <path d="M13.7163 13.203L14.4897 13.9764L12.28 16.1861L11.5066 15.4127L13.7163 13.203ZM13.2477 8.61371L14.0209 9.3872L6.76937 16.6367L5.99609 15.8632L13.2477 8.61371Z" fill="#85053B"/>
            </svg>
            <span>Estimate the home</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-5 rounded-lg">
        <h2 className="font-poppins text-lg font-bold leading-6 text-dark">
          Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.
        </h2>
        <p className="font-poppins text-base leading-[26px] text-text-gray">
          Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra. Condimentum risus id facilisis facilisis arcu diam. Ultrices lacus quisque posuere egestas blandit. Semper bibendum gravida mauris mattis. Sodales hac tellus eget posuere ut nulla.
        </p>
      </div>

      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/4913eb69c9b2fa2871e66cc614dbf22331ba1e43?width=1560" 
        alt="Article image" 
        className="h-[400px] w-full rounded-lg object-cover"
      />

      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/e288a2cf29e4142d8348bd5a56f05e3997465830?width=1560" 
        alt="Article image" 
        className="h-[400px] w-full rounded-lg object-cover"
      />

      <div className="h-px w-full bg-gray-200"></div>

      <div className="flex flex-col gap-5 rounded-lg">
        <h2 className="font-poppins text-lg font-bold leading-6 text-dark">
          Lorem ipsum dolor sit amet consectetur Purus semper scelerisque
        </h2>
        <p className="font-poppins text-base leading-[26px] text-text-gray">
          Lorem ipsum dolor sit amet consectetur. Purus semper scelerisque libero tellus porttitor tellus sed nulla. Bibendum arcu eu eros massa neque pharetra.
        </p>
      </div>

      <div className="h-px w-full bg-gray-200"></div>

      <div className="flex flex-col gap-3.5 rounded-lg border border-gray-200 bg-white p-6 md:flex-row md:flex-wrap md:items-center md:content-center">
        <div className="flex min-w-[200px] flex-1 flex-col gap-5">
          <h2 className="font-poppins text-[38px] font-bold leading-[44px] text-black">
            Let's turn your property dreams into reality together!
          </h2>
          <p className="font-poppins text-base leading-[26px] text-black">
            Let our team assess your property's value—we'll reach out within 12 working hours to discuss your needs in detail.
          </p>
        </div>
        <div className="flex flex-col gap-3.5">
          <button className="flex items-center justify-center gap-2 self-stretch rounded-[10px] border border-primary bg-primary px-8 py-3 font-poppins text-base text-white transition-all hover:bg-primary/90">
            Contact us now
          </button>
          <button className="flex items-center justify-center gap-2 rounded-[10px] border border-primary bg-white px-8 py-3 font-poppins text-base text-primary transition-all hover:bg-gray-50">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0742 18.4961H3.92578C3.13867 18.4961 2.5 17.8555 2.5 17.0684V2.93164C2.5 2.14453 3.13867 1.50391 3.92578 1.50391H16.0742C16.8613 1.50391 17.5 2.14453 17.5 2.93164V17.0703C17.5 17.8555 16.8613 18.4961 16.0742 18.4961Z" fill="#85053B"/>
              <path d="M3.06445 6.21875H16.9355V7.3125H3.06445V6.21875ZM5.89648 9.99609H9.00586V11.0898H5.89648V9.99609Z" fill="#85053B"/>
              <path d="M13.7163 13.2031L14.4897 13.9765L12.28 16.1862L11.5066 15.4128L13.7163 13.2031ZM13.2477 8.61377L14.0209 9.38727L6.76937 16.6368L5.99609 15.8633L13.2477 8.61377Z" fill="#85053B"/>
            </svg>
            <span>Estimate the home</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleContent;
