import React, { useState } from 'react';

const PropertiesSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Buy', 'Rent'];

  const properties = [
    { id: 1, image: 'https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/e2a0598dc33fdee1e1cb5ba55873ffd15ffb81a7?placeholderIfAbsent=true&width=800', type: 'Buy' },
    { id: 2, image: 'https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/0fe1fcea814af24c5b713c1c434752200d33e04b?placeholderIfAbsent=true&width=800', type: 'Rent' },
    { id: 3, image: 'https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/d87ab08065ec89866d92d486c0c0b6b4cfd03bc0?placeholderIfAbsent=true&width=800', type: 'Buy' },
    { id: 4, image: 'https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/d06b287dfe2e465d48f312f38bbb06b7e4b60863?placeholderIfAbsent=true&width=800', type: 'Rent' },
    { id: 5, image: 'https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/525f6c0cd8e2b52db118db7aea92a6371965b5a3?placeholderIfAbsent=true&width=800', type: 'Buy' },
    { id: 6, image: 'https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/78ba8d627363f2dd4fb76147d7bbaa9e07982b52?placeholderIfAbsent=true&width=800', type: 'Rent' }
  ];

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-[1280px] py-[60px] md:py-20 px-5 md:px-10 lg:px-5 lg:py-30">
        <div className="flex w-full flex-col items-center gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3.5">
            <h2 className='justify-center md:justify-start flex gap-5 font-poppins font-extrabold text-[18px] leading-[27px] tracking-[0.175em] uppercase text-[#85053B]'>
                <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.996712 22.0255H0V6.82691L9.96622 0L24.218 9.91644V22.0255H9.96622V20.6302H22.9224V10.3151L9.96622 1.49495L0.996712 7.67403V22.0255Z" fill="#B6B8B5"/>
                <path d="M10.0161 14.3016H3.83691V23.7197L10.0161 29.9985V14.3016Z" fill="#85053B"/>
                </svg>
                CHECKOUT OUR NEW
              </h2>
            <h2 className="text-center font-poppins text-[38px] font-bold leading-[44px] md:text-left mb-7 md:mb-0">Latest listed properties</h2>
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

        <div className="mt-15 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {properties.slice(0, 6).map((property) => (
            <div
              key={property.id}
              className="flex flex-col-reverse h-[400px] min-w-[300px] rounded-lg bg-cover bg-center p-2 shadow-property"
              style={{ backgroundImage: `url(${property.image})` }}
            >
              <div className='pt-3 pb-[18px] px-4 pl-[14px] bg-white rounded-lg'>
                <div className='flex items-center justify-between border-b border-[#E5E7EB] pb-4 mb-4'>
                  <div className='w-[55%]'>
                    <p className='text-[#1E1E1E] text-base'>House for sale in Zoufftgen (FR)</p>
                  </div>
                  <div className='w-[45%] text-right'>
                    <strong>14950000 €</strong>
                  </div>
                </div>
                <ul className='flex items-center justify-between m-0 p-0'>
                  <li className='flex items-center text-sm text-black'>
                    <svg className='mr-1' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.7341 10.0256V9.65258C17.7341 8.96546 17.4227 8.3602 16.953 8.0102V3.94143C16.953 2.87092 16.1906 2 15.2537 2H4.74597C3.80896 2 3.04664 2.87092 3.04664 3.94143V8.01016C2.57691 8.36016 2.26554 8.96542 2.26554 9.65254V10.0255C1.78455 10.1702 1.42871 10.6713 1.42871 11.2657V15.6301C1.42871 16.3167 1.90354 16.8789 2.49772 16.9108V17.4273C2.49772 17.7436 2.72215 18 2.99897 18C3.27578 18 3.5002 17.7436 3.5002 17.4273V16.9123H16.4994V17.4273C16.4994 17.7436 16.7238 18 17.0006 18C17.2774 18 17.5019 17.7436 17.5019 17.4273V16.9108C18.0961 16.8788 18.5709 16.3167 18.5709 15.63V11.2657C18.5709 10.6713 18.2151 10.1702 17.7341 10.0256ZM4.04916 3.94143C4.04916 3.50245 4.36173 3.14534 4.74597 3.14534H15.2537C15.6379 3.14534 15.9504 3.50245 15.9504 3.94143V7.69267H15.2821V6.68328C15.2821 5.97677 14.7791 5.40196 14.1606 5.40196H11.4635C10.8451 5.40196 10.342 5.97677 10.342 6.68328V7.69267H9.65764V6.68328C9.65764 5.97677 9.15455 5.40196 8.53617 5.40196H5.83901C5.22059 5.40196 4.7175 5.97677 4.7175 6.68328V7.69267H4.04916V3.94143ZM14.2797 6.68324V7.55669C14.2797 7.63166 14.2262 7.69263 14.1606 7.69263H11.4635C11.3979 7.69263 11.3444 7.63162 11.3444 7.55669V6.68324C11.3444 6.60827 11.3979 6.5473 11.4635 6.5473H14.1606C14.2262 6.5473 14.2797 6.60827 14.2797 6.68324ZM8.65515 6.68324V7.55669C8.65515 7.63166 8.60175 7.69263 8.53617 7.69263H5.83901C5.77339 7.69263 5.72003 7.63162 5.72003 7.55669V6.68324C5.72003 6.60827 5.77342 6.5473 5.83901 6.5473H8.53617C8.60175 6.5473 8.65515 6.60827 8.65515 6.68324ZM3.26805 9.65254C3.26805 9.20339 3.5879 8.83801 3.98102 8.83801H16.0186C16.4118 8.83801 16.7316 9.20343 16.7316 9.65254V9.98334H3.26805V9.65254ZM17.5684 15.63C17.5684 15.7055 17.5147 15.767 17.4485 15.767H2.55109C2.48499 15.767 2.4312 15.7055 2.4312 15.63V11.2657C2.4312 11.1902 2.48497 11.1288 2.55109 11.1288H17.4486C17.5147 11.1288 17.5685 11.1902 17.5685 11.2657L17.5684 15.63Z" fill="black" stroke="black" stroke-width="0.380938" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    3
                  </li>
                  <li className='flex items-center text-sm text-black'>
                    <svg className='mr-1' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5709 9.66275C18.5709 8.82531 17.9396 8.14395 17.1635 8.14395H3.79049V3.20738C3.79049 2.6391 4.21886 2.17679 4.74542 2.17679H4.99542C5.25413 2.17679 5.4982 2.29028 5.67545 2.484L5.63307 2.52974C4.92131 3.29788 4.92131 4.54769 5.63307 5.31591L5.87451 5.5765C5.98096 5.69137 6.12047 5.74884 6.26006 5.74884C6.39965 5.74884 6.53909 5.69145 6.6456 5.5765L9.02951 3.0037C9.24239 2.77397 9.24239 2.40135 9.02951 2.17161L8.78806 1.91103C8.44332 1.53889 7.98487 1.334 7.49732 1.334C7.1246 1.334 6.76914 1.45406 6.46828 1.67667C6.08747 1.25054 5.55783 1 4.9955 1H4.7455C3.61768 1 2.7001 1.9902 2.7001 3.20746V8.15147C1.98767 8.22554 1.42871 8.87502 1.42871 9.66283C1.42871 10.3071 1.803 10.8577 2.32881 11.0779V13.0172C2.32881 14.7276 3.45685 16.1591 4.95222 16.4908L4.48447 16.9956C4.27159 17.2254 4.27159 17.5979 4.48447 17.8277C4.59091 17.9425 4.73042 18 4.87001 18C5.0096 18 5.14904 17.9426 5.25555 17.8277L6.42778 16.5632H13.5716L14.7441 17.8277C14.8505 17.9425 14.99 18 15.1297 18C15.2692 18 15.4088 17.9426 15.5152 17.8277C15.7281 17.5979 15.7281 17.2254 15.5152 16.9956L15.0475 16.4908C16.543 16.1591 17.671 14.7277 17.671 13.0172V11.0779C18.1966 10.8575 18.5709 10.3071 18.5709 9.66275ZM7.49732 2.51071C7.62378 2.51071 7.7453 2.54487 7.85286 2.60923L6.28046 4.30621C6.12632 4.00467 6.16758 3.61707 6.40423 3.36175L6.97759 2.74296C7.11643 2.5932 7.30102 2.51071 7.49732 2.51071ZM2.83609 9.32081H17.1635C17.3383 9.32081 17.4805 9.47422 17.4805 9.66291C17.4805 9.85145 17.3383 10.0049 17.1635 10.0049H2.83609C2.66132 10.0049 2.51917 9.85145 2.51917 9.66291C2.51917 9.47422 2.66132 9.32081 2.83609 9.32081ZM16.5803 13.0171C16.5803 14.3235 15.5954 15.3864 14.3848 15.3864H5.61476C4.40413 15.3864 3.4192 14.3236 3.4192 13.0171V11.1986H16.5803V13.0171Z" fill="black" stroke="black" stroke-width="0.285704" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    2
                  </li>
                  <li className='flex items-center text-sm text-black'>
                    <svg className='mr-1' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.60889 4.34777V16.5217C2.60889 17.4808 3.38889 18.2608 4.34802 18.2608H16.5219C17.4811 18.2608 18.2611 17.4808 18.2611 16.5217V4.34777C18.2611 3.38864 17.4811 2.60864 16.5219 2.60864H4.34802C3.38889 2.60864 2.60889 3.38864 2.60889 4.34777ZM16.5237 16.5217H4.34802V4.34777H16.5219L16.5237 16.5217Z" fill="black"/>
                    <path d="M13.0434 10.4347H14.7826V6.08691H10.4347V7.82604H13.0434V10.4347ZM10.4347 13.0434H7.82604V10.4347H6.08691V14.7826H10.4347V13.0434Z" fill="black"/>
                    </svg> 
                    260 m²
                  </li>
                  <li className='flex items-center text-black'>
                    <svg className='mr-1' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.47845 2.60864H17.3915C17.6221 2.60864 17.8433 2.70026 18.0064 2.86333C18.1694 3.02641 18.2611 3.24758 18.2611 3.47821V17.3913C18.2611 17.6219 18.1694 17.8431 18.0064 18.0061C17.8433 18.1692 17.6221 18.2608 17.3915 18.2608H3.47845C3.24783 18.2608 3.02665 18.1692 2.86358 18.0061C2.7005 17.8431 2.60889 17.6219 2.60889 17.3913V3.47821C2.60889 3.24758 2.7005 3.02641 2.86358 2.86333C3.02665 2.70026 3.24783 2.60864 3.47845 2.60864ZM4.34802 4.34777V16.5217H16.5219V4.34777H4.34802ZM7.82628 6.0869H10.8698C11.6769 6.0869 12.4511 6.40755 13.0218 6.97832C13.5926 7.54908 13.9132 8.3232 13.9132 9.13038C13.9132 9.93756 13.5926 10.7117 13.0218 11.2824C12.4511 11.8532 11.6769 12.1739 10.8698 12.1739H9.56541V14.7826H7.82628V6.0869ZM9.56541 7.82603V10.4347H10.8698C11.2157 10.4347 11.5475 10.2973 11.7921 10.0527C12.0367 9.80808 12.1741 9.47632 12.1741 9.13038C12.1741 8.78445 12.0367 8.45268 11.7921 8.20807C11.5475 7.96346 11.2157 7.82603 10.8698 7.82603H9.56541Z" fill="black"/>
                    </svg> 
                    4
                  </li>
                </ul>

              </div>
            </div>
          ))}
        </div>
        <div className='text-center'>
          <button className="mt-15 rounded-[10px] border-2 border-primary bg-transparent px-8 py-3 text-center font-poppins text-base text-primary transition-all hover:bg-primary hover:text-white">
            VIew more
          </button>
        </div>  
      </div>
      <div className="absolute bottom-[178px] left-[59px] hidden h-30 w-30 bg-primary lg:block"></div>
    </section>
  );
};

export default PropertiesSection;
