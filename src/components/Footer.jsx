import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5">
        <div className="flex flex-col gap-15 py-15 md:px-5 md:py-20 lg:flex-row lg:py-25">
          <div className="flex flex-1 flex-col gap-8">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/abc7878d4ff4e50737ff949344578816822341ed?width=240" 
              alt="LUX-PRO-IMMO" 
              className="h-20 w-30"
            />
            <div className="flex flex-col gap-5">
              <p className="text-base leading-[26px]">4, Op de Leemen, L-5846 Fentange, Luxembourg</p>
              <div className="flex items-center gap-3.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3303L4.79126 9.10437C5.90756 11.8783 8.12168 14.0924 10.8956 15.2087L11.6697 13.6606C11.866 13.2679 12.2955 13.0492 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z" fill="#85053B"/>
                </svg>
                <span className="text-base leading-[26px]">+352 24 83 69 63</span>
              </div>
              <div className="flex items-center gap-3.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3303L4.79126 9.10437C5.90756 11.8783 8.12168 14.0924 10.8956 15.2087L11.6697 13.6606C11.866 13.2679 12.2955 13.0492 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z" fill="#85053B"/>
                </svg>
                <span className="text-base leading-[26px]">+352 661 265 022</span>
              </div>
            </div>
          </div>

          <div className="flex flex-1 gap-6">
            <div className="flex flex-1 flex-col gap-9">
              <h3 className="font-poppins text-lg font-bold leading-6">Company</h3>
              <ul className="flex flex-col gap-7">
                <li><a href="#buy" className="text-base leading-[26px] hover:text-primary">Buy</a></li>
                <li><a href="#rent" className="text-base leading-[26px] hover:text-primary">Rent</a></li>
                <li><a href="#sell" className="text-base leading-[26px] hover:text-primary">Sell/Rent my property</a></li>
                <li><a href="#blog" className="text-base leading-[26px] hover:text-primary">Blog</a></li>
              </ul>
            </div>

            <div className="flex flex-1 flex-col gap-9">
              <h3 className="font-poppins text-lg font-bold leading-6">Company</h3>
              <ul className="flex flex-col gap-7">
                <li><a href="#contact" className="text-base leading-[26px] hover:text-primary">Contact</a></li>
                <li><a href="#finance" className="text-base leading-[26px] hover:text-primary">Finance</a></li>
                <li><a href="#estimate" className="text-base leading-[26px] hover:text-primary">Estimate</a></li>
              </ul>
            </div>
          </div>

          <div className="flex max-w-full flex-1 flex-col gap-9 lg:max-w-[600px]">
            <h3 className="font-poppins text-lg font-bold leading-6">Subscribe</h3>
            <p className="text-base leading-[26px]">Subscribe to get latest property news from us</p>
            <form className="flex h-14 overflow-hidden rounded-[10px] border border-gray-100">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="flex-1 border border-gray-200 bg-gray-100 px-5 py-5 text-sm text-text-gray outline-none"
              />
              <button type="submit" className="border border-gray-200 bg-primary px-7 py-5 text-sm text-white">
                Subscribe
              </button>
            </form>
            <label className="flex items-center gap-2.5 text-xs leading-4 text-text-gray">
              <input type="checkbox" defaultChecked className="h-4 w-4 rounded border border-text-gray" />
              <span>Personal information is transmitted and used for the purposes described in the privacy statement.</span>
            </label>
            <div className="flex items-center gap-8">
              <span className="text-base leading-[26px]">Follow us on</span>
              <div className="flex gap-5">
                <a href="#" aria-label="LinkedIn">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3.13411 14.0005H0.231508V4.65317H3.13411V14.0005ZM1.68106 3.37812C0.753027 3.37812 0 2.60909 0 1.68106C0 0.753027 0.752527 0 1.68106 0C2.60959 0 3.36212 0.752527 3.36212 1.68106C3.36212 2.60909 2.60909 3.37812 1.68106 3.37812Z" fill="black"/>
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
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pb-5 md:px-5">
          <div className="h-px w-full bg-gray-300"></div>
          <div className="flex flex-col items-center justify-between gap-5 text-sm leading-4 md:flex-row">
            <p className="text-center md:text-left">
              Copyright © LUX-PRO-IMMO, 2025 | All rights reserved | 
              <a href="#privacy" className="underline">Privacy Policy</a> | 
              <a href="#cookie" className="underline">Cookie Policy</a>
            </p>
            <div className="flex flex-col items-center gap-2.5 md:flex-row">
              <span>Designed by Mëtel</span>
              <span className="text-center">
                & Premium Partner of 
                <a href="#nextimmo" className="underline">Nextimmo.lu</a> / 
                <a href="#secretimmo" className="underline">Secretimmo.lu</a> / 
                <a href="#goodwork" className="underline">Goodwork.lu</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
