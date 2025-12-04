import React, { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-3.5 md:px-10 lg:px-5">
          <div className="flex items-center justify-between gap-10 lg:gap-25">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/980a809e9d3eafef0d406e5078923c6bcd171de0?width=196"
            alt="LUX-PRO-IMMO"
            className="h-14 w-20 md:h-16 md:w-24"
          />

          <div className="hidden flex-1 flex-col items-end gap-4 lg:flex">
            <div className="flex items-center gap-10">
              <a href="#" aria-label="LinkedIn" className="flex items-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3.13411 14.0005H0.231508V4.65317H3.13411V14.0005ZM1.68106 3.37812C0.753027 3.37812 0 2.60909 0 1.68106C0 0.753027 0.752527 0 1.68106 0C2.60959 0 3.36212 0.752527 3.36212 1.68106C3.36212 2.60909 2.60909 3.37812 1.68106 3.37812ZM13.9975 14.0005H11.1014V9.45034C11.1014 8.3658 11.0794 6.97525 9.59234 6.97525C8.08329 6.97525 7.85178 8.15329 7.85178 9.37233V14.0005H4.95218V4.65317H7.73578V5.92821H7.77628C8.16379 5.19369 9.11032 4.41866 10.5224 4.41866C13.46 4.41866 14 6.35323 14 8.86582V14.0005H13.9975Z" fill="black"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="flex items-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7.696 7.87456L8.085 5.341H5.6538V3.69687C5.6538 3.00388 5.9933 2.32794 7.0822 2.32794H8.1873V0.171062C8.1873 0.171062 7.1846 0 6.2256 0C4.2236 0 2.915 1.21363 2.915 3.41031V5.34144H0.6895V7.875H2.915V14H5.6538V7.875L7.696 7.87456Z" fill="black"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="flex items-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 0C5.0971 0 4.8599 0.00918865 4.1152 0.0406926C3.3674 0.0774472 2.8616 0.193399 2.4153 0.366671C1.955 0.546943 1.5629 0.786286 1.1757 1.17571C0.7858 1.56295 0.5443 1.95499 0.3667 2.4153C0.1934 2.86161 0.0774 3.36742 0.0407 4.1152C0.007 4.86036 0 5.09707 0 7C0 8.90293 0.0092 9.14008 0.0407 9.8848C0.0774 10.6304 0.1934 11.1384 0.3667 11.5847C0.5469 12.045 0.7863 12.4371 1.1757 12.8243C1.5629 13.2142 1.955 13.4557 2.4153 13.6333C2.8616 13.8044 3.3696 13.9226 4.1152 13.9593C4.8604 13.993 5.0971 14 7 14C8.9029 14 9.1401 13.9908 9.8848 13.9593C10.6304 13.9226 11.1384 13.804 11.5847 13.6333C12.045 13.4531 12.4371 13.2137 12.8243 12.8243C13.2142 12.4371 13.4557 12.0472 13.6333 11.5847C13.8044 11.1384 13.9226 10.6304 13.9593 9.8848C13.993 9.13964 14 8.90293 14 7C14 5.09707 13.9908 4.85992 13.9593 4.1152C13.9226 3.36961 13.804 2.85898 13.6333 2.4153C13.4531 1.95499 13.2137 1.56295 12.8243 1.17571C12.4371 0.785848 12.0472 0.544318 11.5847 0.366671C11.1384 0.193399 10.6304 0.0774472 9.8848 0.0406926C9.1396 0.00700088 8.9029 0 7 0Z" fill="black"/>
                </svg>
              </a>

              <div className="flex cursor-pointer items-center gap-2 text-xs">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/flag-uk.png" alt="EN" className="h-7 w-7 rounded-full" />
                <span>EN</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.64645 3.64645C2.84171 3.45118 3.15829 3.45118 3.35355 3.64645L5 5.29289L6.64645 3.64645C6.84171 3.45118 7.15829 3.45118 7.35355 3.64645C7.54882 3.84171 7.54882 4.15829 7.35355 4.35355L5.35355 6.35355C5.15829 6.54882 4.84171 6.54882 4.64645 6.35355L2.64645 4.35355C2.45118 4.15829 2.45118 3.84171 2.64645 3.64645Z" fill="black"/>
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <a href="#buy" className="text-base transition-colors hover:text-primary">Buy</a>
              <a href="#rent" className="text-base transition-colors hover:text-primary">Rent</a>
              <a href="#sell" className="text-base transition-colors hover:text-primary">Sell or Rent property</a>
              <a href="#contact" className="text-base transition-colors hover:text-primary">Contact</a>
              <div className="h-3 w-px bg-black"></div>
              <a href="#finance" className="text-base transition-colors hover:text-primary">Finance</a>
              <a href="#estimate" className="text-base">Estimate</a>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <a href="tel:+352248369" className="flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3303L4.79126 9.10437C5.90756 11.8783 8.12168 14.0924 10.8956 15.2087L11.6697 13.6606C11.866 13.2679 12.2955 13.0492 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z" fill="black"/>
              </svg>
            </a>

            <button className="flex flex-col gap-1.5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="h-0.5 w-6 rounded bg-black"></span>
              <span className="h-0.5 w-6 rounded bg-black"></span>
              <span className="h-0.5 w-6 rounded bg-black"></span>
            </button>
          </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="flex h-full flex-col">
            <div className="relative flex flex-col justify-center pb-[87px] pt-[87px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/b94d14dd2e0315a6afd7044fe469ba2e8b8650e3?placeholderIfAbsent=true&width=800"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative rounded-b-lg bg-white px-5 py-5">
                <div className="flex flex-col">
                  <a href="#buy" className="py-5 text-center font-opensans text-base" onClick={() => setIsMenuOpen(false)}>Buy</a>
                  <div className="h-px w-full bg-gray-200"></div>

                  <a href="#rent" className="py-5 text-center font-opensans text-base" onClick={() => setIsMenuOpen(false)}>Rent</a>
                  <div className="h-px w-full bg-gray-200"></div>

                  <a href="#sell" className="py-5 text-center font-opensans text-base" onClick={() => setIsMenuOpen(false)}>Sell or Rent property</a>
                  <div className="h-px w-full bg-gray-200"></div>

                  <a href="#contact" className="py-5 text-center font-opensans text-base" onClick={() => setIsMenuOpen(false)}>Contact</a>
                  <div className="h-px w-full bg-gray-200"></div>

                  <a href="#finance" className="py-5 text-center font-opensans text-base" onClick={() => setIsMenuOpen(false)}>Finance</a>
                  <div className="h-px w-full bg-gray-200"></div>

                  <a href="#estimate" className="py-5 text-center font-opensans text-base" onClick={() => setIsMenuOpen(false)}>Estimate</a>
                  <div className="h-px w-full bg-gray-200"></div>

                  <div className="flex justify-center gap-10 py-5">
                    <a href="#" aria-label="LinkedIn">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3.13411 14.0005H0.231508V4.65317H3.13411V14.0005ZM1.68106 3.37812C0.753027 3.37812 0 2.60909 0 1.68106C0 0.753027 0.752527 0 1.68106 0C2.60959 0 3.36212 0.752527 3.36212 1.68106C3.36212 2.60909 2.60909 3.37812 1.68106 3.37812ZM13.9975 14.0005H11.1014V9.45034C11.1014 8.3658 11.0794 6.97525 9.59234 6.97525C8.08329 6.97525 7.85178 8.15329 7.85178 9.37233V14.0005H4.95218V4.65317H7.73578V5.92821H7.77628C8.16379 5.19369 9.11032 4.41866 10.5224 4.41866C13.46 4.41866 14 6.35323 14 8.86582V14.0005H13.9975Z" fill="black"/>
                      </svg>
                    </a>
                    <a href="#" aria-label="Facebook">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7.696 7.87456L8.085 5.341H5.6538V3.69687C5.6538 3.00388 5.9933 2.32794 7.0822 2.32794H8.1873V0.171062C8.1873 0.171062 7.1846 0 6.2256 0C4.2236 0 2.915 1.21363 2.915 3.41031V5.34144H0.6895V7.875H2.915V14H5.6538V7.875L7.696 7.87456Z" fill="black"/>
                      </svg>
                    </a>
                    <a href="#" aria-label="Instagram">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 0C5.0971 0 4.8599 0.00918865 4.1152 0.0406926C3.3674 0.0774472 2.8616 0.193399 2.4153 0.366671C1.955 0.546943 1.5629 0.786286 1.1757 1.17571C0.7858 1.56295 0.5443 1.95499 0.3667 2.4153C0.1934 2.86161 0.0774 3.36742 0.0407 4.1152C0.007 4.86036 0 5.09707 0 7C0 8.90293 0.0092 9.14008 0.0407 9.8848C0.0774 10.6304 0.1934 11.1384 0.3667 11.5847C0.5469 12.045 0.7863 12.4371 1.1757 12.8243C1.5629 13.2142 1.955 13.4557 2.4153 13.6333C2.8616 13.8044 3.3696 13.9226 4.1152 13.9593C4.8604 13.993 5.0971 14 7 14C8.9029 14 9.1401 13.9908 9.8848 13.9593C10.6304 13.9226 11.1384 13.804 11.5847 13.6333C12.045 13.4531 12.4371 13.2137 12.8243 12.8243C13.2142 12.4371 13.4557 12.0472 13.6333 11.5847C13.8044 11.1384 13.9226 10.6304 13.9593 9.8848C13.993 9.13964 14 8.90293 14 7C14 5.09707 13.9908 4.85992 13.9593 4.1152C13.9226 3.36961 13.804 2.85898 13.6333 2.4153C13.4531 1.95499 13.2137 1.56295 12.8243 1.17571C12.4371 0.785848 12.0472 0.544318 11.5847 0.366671C11.1384 0.193399 10.6304 0.0774472 9.8848 0.0406926C9.1396 0.00700088 8.9029 0 7 0Z" fill="black"/>
                      </svg>
                    </a>
                  </div>
                  <div className="h-px w-full bg-gray-200"></div>

                  <div className="flex justify-center gap-10 py-5">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/17da8b83ea7bebfca04cde2595072566af7d1fca?placeholderIfAbsent=true"
                      alt="French"
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/adc68c2794a08fa8ff042bd9d11b8ec1aa8f745f?placeholderIfAbsent=true"
                      alt="English"
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/895d2763ead4091e0c95c4e33876e9482f8eed0c?placeholderIfAbsent=true"
                      alt="German"
                      className="h-5 w-5 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid flex-1 grid-cols-2 bg-white">
              <button className="flex items-center justify-center gap-2 border-r border-gray-200 py-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2"/>
                  <text x="12" y="16" textAnchor="middle" fontSize="14" fontWeight="bold" fill="black">€</text>
                </svg>
                <span className="font-poppins text-base font-bold">Finance</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19.2891 22.1953H4.71094C3.76641 22.1953 3 21.4266 3 20.482V3.51797C3 2.57344 3.76641 1.80469 4.71094 1.80469H19.2891C20.2336 1.80469 21 2.57344 21 3.51797V20.4844C21 21.4266 20.2336 22.1953 19.2891 22.1953Z" fill="black"/>
                  <path d="M4.06445 7.21875H19.9355V8.3125H4.06445V7.21875ZM6.89648 11.9961H10.0059V13.0898H6.89648V11.9961Z" fill="white"/>
                  <path d="M16.4591 15.8436L17.3872 16.7717L14.7355 19.4233L13.8075 18.4952L16.4591 15.8436ZM15.8967 10.3364L16.8246 11.2646L8.12276 19.964L7.19482 19.0358L15.8967 10.3364Z" fill="white"/>
                </svg>
                <span className="font-poppins text-base font-bold">Estimate</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
