import React from 'react';

const FinanceMortgage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-25 self-stretch bg-white px-6 py-12 lg:px-25 lg:py-30">
      <div className="flex items-center gap-3.5 w-full lg:w-[700px] h-auto lg:h-[577px] relative">
        <div className="w-[342.6px] h-[420.209px] bg-primary absolute left-0 top-0 hidden lg:block"></div>
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/24d6a89007255219f637dfd6c1e594a9ec546d7c?width=636" 
          alt="" 
          className="w-[318.194px] h-[423px] rounded-[49px] opacity-50 blur-[25px] absolute left-[103px] bottom-[-19.5px] hidden lg:block"
        />
        <div className="w-full lg:w-[450px] h-auto lg:h-[503px] flex-shrink-0 relative">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/97b5161eb9fde694358f34533a70cab93cadbf7a?width=900" 
            alt="Mortgage consultation"
            className="w-full h-full rounded-r-lg object-cover"
          />
        </div>
        <div className="hidden lg:flex flex-col items-start gap-2.5 flex-1">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/38950bac92ddd953ffb117fbad4132e549a0a595?width=472" 
            alt="Office workspace"
            className="h-[250px] self-stretch rounded-lg object-cover"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/e3ff97c6ab29a5d634ed452ae23c7a817f4e2098?width=472" 
            alt="Client consultation"
            className="h-[317.045px] self-stretch rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-10 flex-1">
        <div className="flex flex-col items-start gap-3.5 self-stretch">
          <div className="flex items-center gap-5 self-stretch">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.996712 22.0255H0V6.82691L9.96622 0L24.218 9.91644V22.0255H9.96622V20.6302H22.9224V10.3151L9.96622 1.49495L0.996712 7.67403V22.0255Z" fill="#B6B8B5"/>
              <path d="M10.0161 14.3016H3.83691V23.7197L10.0161 29.9985V14.3016Z" fill="#85053B"/>
            </svg>
            <span className="text-primary font-poppins text-lg font-extrabold tracking-[0.175em]">WHO ARE WE</span>
          </div>
          <h2 className="self-stretch text-black font-poppins text-[38px] font-bold leading-[44px]">
            A mortgage tailored to work for you
          </h2>
        </div>

        <div className="flex flex-col items-start gap-5 self-stretch">
          <p className="self-stretch text-text-gray font-opensans text-sm font-bold leading-[14px]">
            Discover the advantages of financing your home with our Mortgage
          </p>

          <div className="flex flex-col md:flex-row items-start gap-2.5 self-stretch">
            <div className="flex flex-col items-start gap-4 flex-1 rounded-lg bg-white shadow-card p-4 md:p-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1.60999C6.38794 1.61001 6.77353 1.67022 7.143 1.78849L13.643 3.86849C14.3999 4.11073 15.0603 4.58718 15.5289 5.22911C15.9975 5.87104 16.25 6.64523 16.25 7.43999V10.8835L18.292 9.58449C18.779 9.27456 19.3666 9.16369 19.933 9.27481C20.4995 9.38593 21.0016 9.71054 21.3355 10.1815L21.398 10.2745C21.6278 10.6355 21.7499 11.0545 21.75 11.4825V21H22.25C22.4489 21 22.6397 21.079 22.7803 21.2197C22.921 21.3603 23 21.5511 23 21.75C23 21.9489 22.921 22.1397 22.7803 22.2803C22.6397 22.421 22.4489 22.5 22.25 22.5H1.75C1.55109 22.5 1.36032 22.421 1.21967 22.2803C1.07902 22.1397 1 21.9489 1 21.75C1 21.5511 1.07902 21.3603 1.21967 21.2197C1.36032 21.079 1.55109 21 1.75 21H2.25V5.35999C2.25001 4.38647 2.62861 3.45111 3.30575 2.75167C3.98289 2.05222 4.90549 1.64353 5.8785 1.61199L6 1.60999ZM6 3.10999C5.40326 3.10999 4.83097 3.34704 4.40901 3.769C3.98705 4.19095 3.75 4.76325 3.75 5.35999V21H14.75V7.43999C14.75 6.9816 14.61 6.53414 14.3487 6.15751C14.0874 5.78087 13.7174 5.49302 13.288 5.33249L13.1855 5.29699L6.6855 3.21699C6.46391 3.14609 6.23266 3.11 6 3.10999ZM20.1325 11.08C20.0257 10.9123 19.8567 10.7939 19.6626 10.7507C19.4685 10.7076 19.2653 10.7433 19.0975 10.85L16.25 12.6615V21H20.25V11.4825C20.2501 11.3687 20.2243 11.2563 20.1745 11.154L20.1325 11.08ZM6.75 12.5C6.94891 12.5 7.13968 12.579 7.28033 12.7197C7.42098 12.8603 7.5 13.0511 7.5 13.25V15.75C7.5 15.9489 7.42098 16.1397 7.28033 16.2803C7.13968 16.421 6.94891 16.5 6.75 16.5C6.55109 16.5 6.36032 16.421 6.21967 16.2803C6.07902 16.1397 6 15.9489 6 15.75V13.25C6 13.0511 6.07902 12.8603 6.21967 12.7197C6.36032 12.579 6.55109 12.5 6.75 12.5ZM6.75 6.49999C6.94891 6.49999 7.13968 6.579 7.28033 6.71966C7.42098 6.86031 7.5 7.05107 7.5 7.24999V9.74999C7.5 9.9489 7.42098 10.1397 7.28033 10.2803C7.13968 10.421 6.94891 10.5 6.75 10.5C6.55109 10.5 6.36032 10.421 6.21967 10.2803C6.07902 10.1397 6 9.9489 6 9.74999V7.24999C6 7.05107 6.07902 6.86031 6.21967 6.71966C6.36032 6.579 6.55109 6.49999 6.75 6.49999Z" fill="black"/>
                <path d="M7.28033 12.7197C7.13968 12.579 6.94891 12.5 6.75 12.5C6.55109 12.5 6.36032 12.579 6.21967 12.7197C6.07902 12.8603 6 13.0511 6 13.25V15.75C6 15.9489 6.07902 16.1397 6.21967 16.2803C6.36032 16.421 6.55109 16.5 6.75 16.5C6.94891 16.5 7.13968 16.421 7.28033 16.2803C7.42098 16.1397 7.5 15.9489 7.5 15.75V13.25C7.5 13.0511 7.42098 12.8603 7.28033 12.7197Z" fill="#85053B"/>
                <path d="M7.28033 6.71967C7.13968 6.57902 6.94891 6.5 6.75 6.5C6.55109 6.5 6.36032 6.57902 6.21967 6.71967C6.07902 6.86032 6 7.05109 6 7.25V9.75C6 9.94891 6.07902 10.1397 6.21967 10.2803C6.36032 10.421 6.55109 10.5 6.75 10.5C6.94891 10.5 7.13968 10.421 7.28033 10.2803C7.42098 10.1397 7.5 9.94891 7.5 9.75V7.25C7.5 7.05109 7.42098 6.86032 7.28033 6.71967Z" fill="#85053B"/>
              </svg>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <h3 className="self-stretch text-black font-poppins text-lg font-bold leading-6">Expertise</h3>
                <p className="self-stretch text-text-gray font-poppins text-base leading-[26px]">
                  Specialized in Luxembourg real estate and local regulations
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-4 flex-1 rounded-lg bg-white shadow-card p-4 md:p-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.2891 22.1953H4.71094C3.76641 22.1953 3 21.4266 3 20.482V3.51797C3 2.57344 3.76641 1.80469 4.71094 1.80469H19.2891C20.2336 1.80469 21 2.57344 21 3.51797V20.4844C21 21.4266 20.2336 22.1953 19.2891 22.1953ZM4.71094 3.11719C4.49063 3.11719 4.3125 3.29766 4.3125 3.51797V20.4844C4.3125 20.7047 4.49063 20.8852 4.71094 20.8852H19.2891C19.5094 20.8852 19.6875 20.7047 19.6875 20.4844V3.51797C19.6875 3.29766 19.5094 3.11719 19.2891 3.11719H4.71094Z" fill="black"/>
                <path d="M3.67773 7.46252H20.323V8.77502H3.67773V7.46252ZM7.07617 11.9953H10.8074V13.3078H7.07617V11.9953Z" fill="black"/>
                <path d="M8.28516 10.8H9.59766V14.55H8.28516V10.8ZM14.726 15.8669L17.3643 18.5052L16.4363 19.4333L13.7979 16.7949L14.726 15.8669Z" fill="black"/>
                <path d="M16.4596 15.8436L17.3876 16.7717L14.736 19.4233L13.808 18.4952L16.4596 15.8436ZM15.8972 10.3364L16.8251 11.2646L8.12325 19.964L7.19531 19.0358L15.8972 10.3364Z" fill="#85053B"/>
              </svg>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <h3 className="self-stretch text-black font-poppins text-lg font-bold leading-6">Transparent Valuations</h3>
                <p className="self-stretch text-text-gray font-poppins text-base leading-[26px]">
                  Objective property assessments backed by market data
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 flex-1 rounded-lg bg-white shadow-card p-4 md:p-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.2891 22.1953H4.71094C3.76641 22.1953 3 21.4266 3 20.482V3.51797C3 2.57344 3.76641 1.80469 4.71094 1.80469H19.2891C20.2336 1.80469 21 2.57344 21 3.51797V20.4844C21 21.4266 20.2336 22.1953 19.2891 22.1953ZM4.71094 3.11719C4.49063 3.11719 4.3125 3.29766 4.3125 3.51797V20.4844C4.3125 20.7047 4.49063 20.8852 4.71094 20.8852H19.2891C19.5094 20.8852 19.6875 20.7047 19.6875 20.4844V3.51797C19.6875 3.29766 19.5094 3.11719 19.2891 3.11719H4.71094Z" fill="black"/>
                <path d="M3.67773 7.46252H20.323V8.77502H3.67773V7.46252ZM7.07617 11.9953H10.8074V13.3078H7.07617V11.9953Z" fill="black"/>
                <path d="M8.28516 10.8H9.59766V14.55H8.28516V10.8ZM14.726 15.8669L17.3643 18.5052L16.4363 19.4333L13.7979 16.7949L14.726 15.8669Z" fill="black"/>
                <path d="M16.4596 15.8436L17.3876 16.7717L14.736 19.4233L13.808 18.4952L16.4596 15.8436ZM15.8972 10.3364L16.8251 11.2646L8.12325 19.964L7.19531 19.0358L15.8972 10.3364Z" fill="#85053B"/>
              </svg>
              <div className="flex flex-col items-start gap-1 self-stretch">
                <h3 className="self-stretch text-black font-poppins text-lg font-bold leading-6">Tailored Solutions</h3>
                <p className="self-stretch text-text-gray font-poppins text-base leading-[26px]">
                  Custom mortgage plans aligned with your financial goals
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <button className="flex justify-center items-center gap-4 rounded-[10px] border border-primary bg-primary px-8 py-3">
            <span className="text-white text-center font-poppins text-base leading-[26px]">Contact us now</span>
          </button>
          <button className="flex justify-center items-center gap-4 rounded-[10px] border border-primary px-8 py-3">
            <span className="text-primary text-center font-poppins text-base leading-[26px]">Mortgage Simulator</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinanceMortgage;
