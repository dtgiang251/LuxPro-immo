import React from 'react';

const AboutSection = () => {
  const strengths = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 1.60986C6.38794 1.60988 6.77353 1.6701 7.143 1.78836L13.643 3.86836C14.3999 4.1106 15.0603 4.58706 15.5289 5.22899C15.9975 5.87092 16.25 6.64511 16.25 7.43986V10.8834L18.292 9.58436C18.779 9.27444 19.3666 9.16357 19.933 9.27469C20.4995 9.38581 21.0016 9.71042 21.3355 10.1814L21.398 10.2744C21.6278 10.6354 21.7499 11.0544 21.75 11.4824V20.9999H22.25C22.4489 20.9999 22.6397 21.0789 22.7803 21.2195C22.921 21.3602 23 21.551 23 21.7499C23 21.9488 22.921 22.1395 22.7803 22.2802C22.6397 22.4208 22.4489 22.4999 22.25 22.4999H1.75C1.55109 22.4999 1.36032 22.4208 1.21967 22.2802C1.07902 22.1395 1 21.9488 1 21.7499C1 21.551 1.07902 21.3602 1.21967 21.2195C1.36032 21.0789 1.55109 20.9999 1.75 20.9999H2.25V5.35986C2.25001 4.38634 2.62861 3.45098 3.30575 2.75154C3.98289 2.0521 4.90549 1.64341 5.8785 1.61186L6 1.60986Z" fill="black"/>
          <path d="M7.28033 12.7197C7.13968 12.579 6.94891 12.5 6.75 12.5C6.55109 12.5 6.36032 12.579 6.21967 12.7197C6.07902 12.8603 6 13.0511 6 13.25V15.75C6 15.9489 6.07902 16.1397 6.21967 16.2803C6.36032 16.421 6.55109 16.5 6.75 16.5C6.94891 16.5 7.13968 16.421 7.28033 16.2803C7.42098 16.1397 7.5 15.9489 7.5 15.75V13.25C7.5 13.0511 7.42098 12.8603 7.28033 12.7197Z" fill="#85053B"/>
        </svg>
      ),
      title: 'Competence',
      description: 'Expert in Luxembourg real estate & local policies'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19.2891 22.1953H4.71094C3.76641 22.1953 3 21.4266 3 20.482V3.51797C3 2.57344 3.76641 1.80469 4.71094 1.80469H19.2891C20.2336 1.80469 21 2.57344 21 3.51797V20.4844C21 21.4266 20.2336 22.1953 19.2891 22.1953Z" fill="black"/>
          <path d="M16.4591 15.8436L17.3872 16.7717L14.7355 19.4233L13.8075 18.4952L16.4591 15.8436ZM15.8967 10.3364L16.8246 11.2646L8.12276 19.964L7.19482 19.0358L15.8967 10.3364Z" fill="#85053B"/>
        </svg>
      ),
      title: 'Honest assessments',
      description: 'Objective valuations based on market data'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4.73583 11.0962C4.08108 11.0968 3.44089 10.903 2.89626 10.5396C2.35163 10.1762 1.92706 9.65937 1.67625 9.05456C1.42544 8.44975 1.35968 7.78413 1.48729 7.14193Z" fill="black"/>
          <path d="M22.573 4.13623H10.125V5.3629H22.573V4.13623Z" fill="#85053B"/>
        </svg>
      ),
      title: 'Flexibility',
      description: 'Tailored solutions for buying/selling/renting'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22.5 11.6248C22.5 9.93731 21.4821 8.48418 20.0285 7.84621C19.5996 6.03936 18.5737 4.43002 17.1168 3.27847C15.6598 2.12692 13.8571 1.50049 12 1.50049Z" fill="black"/>
          <path d="M12.0001 18C11.0375 18 10.1251 17.7127 9.42877 17.191C9.01064 16.8774 8.69189 16.4899 8.49127 16.0643C8.25947 15.5688 8.6251 15 9.17096 15C9.31241 14.9992 9.45116 15.0388 9.57083 15.1142C9.69051 15.1896 9.78613 15.2977 9.84642 15.4256C10.1291 16.0392 11.0012 16.5 12.0001 16.5C13.0827 16.5 14.0157 15.9588 14.2124 15.2684C14.235 15.1907 14.2823 15.1225 14.3471 15.0741C14.4119 15.0256 14.4907 14.9996 14.5717 15H15.3404C15.3956 15 15.4501 15.0122 15.5 15.0358C15.55 15.0593 15.5941 15.0935 15.6293 15.1361C15.6644 15.1786 15.6898 15.2284 15.7035 15.2818C15.7172 15.3353 15.719 15.3911 15.7086 15.4453C15.5842 16.111 15.185 16.7299 14.5714 17.19C13.8751 17.7127 12.9627 18 12.0001 18Z" fill="#85053B"/>
        </svg>
      ),
      title: 'Availability',
      description: 'Rapid responses & full project support'
    }
  ];

  return (
    <section className="bg-gray-50 px-5 py-20 md:px-20 lg:px-25 lg:py-30">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-25">
        <div className="flex flex-1 flex-col gap-5">
          <div className="flex flex-col gap-3.5">
            <svg className="self-stretch" width="540" height="30" viewBox="0 0 540 30" fill="none">
              <path d="M0.996712 22.0255H0V6.82691L9.96622 0L24.218 9.91644V22.0255H9.96622V20.6302H22.9224V10.3151L9.96622 1.49495L0.996712 7.67403V22.0255Z" fill="#B6B8B5"/>
              <path d="M10.0161 14.3018H3.83691V23.7199L10.0161 29.9986V14.3018Z" fill="#85053B"/>
              <text fill="#85053B" x="44.2178" y="21.299" fontFamily="Poppins" fontSize="18" fontWeight="800" letterSpacing="0.175em">WHO ARE WE</text>
            </svg>
            <h2 className="font-poppins text-[38px] font-bold leading-[44px]">
              Reliable real estate services for Luxembourg
            </h2>
          </div>

          <p className="text-base leading-[26px] text-text-gray">
            Established in 2008, Lux-Pro-Immo is your reliable partner for all real estate needs. Choose a trusted real estate professional for buying, selling, or renting homes, commercial properties, or land.
          </p>

          <p className="font-opensans text-sm font-bold leading-[14px] text-text-gray">Our Strengths</p>

          <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
            {strengths.map((strength, index) => (
              <div key={index} className="flex gap-4 rounded-lg bg-white px-5 py-4 shadow-card">
                <div className="flex-shrink-0">{strength.icon}</div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-poppins text-lg font-bold leading-6">{strength.title}</h3>
                  <p className="text-base leading-[26px] text-text-gray">{strength.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[400px] w-full lg:h-[577px] lg:w-[700px]">
          <div className="flex flex-col gap-2.5">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/3c7f1e4d3b6cfc166c33c6978a652074fa994aa3?width=472" 
              alt="Property 1" 
              className="h-[250px] w-full rounded-lg object-cover"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f768cfdd645af9f4cf1cafbaf5466516861aa338?width=472" 
              alt="Property 2" 
              className="h-[317px] w-full rounded-lg object-cover"
            />
          </div>
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/1fcbcc61613331e72d80ad027bec26d438538197?width=900" 
            alt="Property 3" 
            className="absolute right-0 top-0 hidden h-[503px] w-[450px] rounded-l-lg object-cover shadow-property lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
