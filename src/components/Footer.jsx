import React from 'react';
import { Link } from 'react-router-dom';

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
              <h3 className="font-poppins text-lg font-bold leading-6">Explore</h3>
              <div className='grid grid-cols-2 gap-y-10 gap-x-7'>
                <ul className="[&>li:not(:last-child)]:mb-7">
                  <li><Link to="/buy" className="text-base leading-[26px] hover:text-primary transition-colors">Buy</Link></li>
                  <li><Link to="/buy" className="text-base leading-[26px] hover:text-primary transition-colors">Rent</Link></li>
                  <li><Link to="/sell" className="text-base leading-[26px] hover:text-primary transition-colors">Sell or Rent property</Link></li>
                  <li><Link to="/blog" className="text-base leading-[26px] hover:text-primary transition-colors">Blog</Link></li> 
                </ul>
                <ul className="[&>li:not(:last-child)]:mb-7"> 
                  <li><Link to="/contact" className="text-base leading-[26px] hover:text-primary transition-colors">Contact</Link></li>
                  <li><Link to="/finance" className="text-base leading-[26px] hover:text-primary transition-colors">Finance</Link></li>
                  <li><Link to="/estimate" className="text-base leading-[26px] hover:text-primary transition-colors">Estimate</Link></li>
                </ul>
              </div>
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
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.13411 14.0005H0.231508V4.65317H3.13411V14.0005ZM1.68106 3.37812C0.753027 3.37812 0 2.60909 0 1.68106C0 0.753027 0.752527 0 1.68106 0C2.60959 0 3.36212 0.752527 3.36212 1.68106C3.36212 2.60909 2.60909 3.37812 1.68106 3.37812ZM13.9975 14.0005H11.1014V9.45034C11.1014 8.3658 11.0794 6.97525 9.59234 6.97525C8.08329 6.97525 7.85178 8.15329 7.85178 9.37233V14.0005H4.95218V4.65317H7.73578V5.92821H7.77628C8.16379 5.19369 9.11032 4.41866 10.5224 4.41866C13.46 4.41866 14 6.35323 14 8.86582V14.0005H13.9975Z" fill="black"/>
                  </svg> 
                </a>
                <a href="#" aria-label="Facebook">
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.00656 7.87456L7.3955 5.341H4.96431V3.69687C4.96431 3.00388 5.30381 2.32794 6.39275 2.32794H7.49788V0.171062C7.49788 0.171062 6.49512 0 5.53612 0C3.53412 0 2.22556 1.21363 2.22556 3.41031V5.34144H0V7.875H2.22556V14H4.96431V7.875L7.00656 7.87456Z" fill="black"/>
                  </svg> 
                </a>
                <a href="#" aria-label="Instagram">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0C5.09707 0 4.85992 0.00918865 4.1152 0.0406926C3.36742 0.0774472 2.86161 0.193399 2.4153 0.366671C1.95499 0.546943 1.56295 0.786286 1.17571 1.17571C0.785848 1.56295 0.544318 1.95499 0.366671 2.4153C0.193399 2.86161 0.0774472 3.36742 0.0406926 4.1152C0.00700088 4.86036 0 5.09707 0 7C0 8.90293 0.00918865 9.14008 0.0406926 9.8848C0.0774472 10.6304 0.193399 11.1384 0.366671 11.5847C0.546943 12.045 0.786286 12.4371 1.17571 12.8243C1.56295 13.2142 1.95499 13.4557 2.4153 13.6333C2.86161 13.8044 3.36961 13.9226 4.1152 13.9593C4.86036 13.993 5.09707 14 7 14C8.90293 14 9.14008 13.9908 9.8848 13.9593C10.6304 13.9226 11.1384 13.804 11.5847 13.6333C12.045 13.4531 12.4371 13.2137 12.8243 12.8243C13.2142 12.4371 13.4557 12.0472 13.6333 11.5847C13.8044 11.1384 13.9226 10.6304 13.9593 9.8848C13.993 9.13964 14 8.90293 14 7C14 5.09707 13.9908 4.85992 13.9593 4.1152C13.9226 3.36961 13.804 2.85898 13.6333 2.4153C13.4531 1.95499 13.2137 1.56295 12.8243 1.17571C12.4371 0.785848 12.0472 0.544318 11.5847 0.366671C11.1384 0.193399 10.6304 0.0774472 9.8848 0.0406926C9.13964 0.00700088 8.90293 0 7 0ZM7 1.26016C8.8688 1.26016 9.09195 1.26935 9.83054 1.30085C10.5118 1.33279 10.8829 1.44656 11.1292 1.54282C11.4578 1.67015 11.6875 1.82067 11.9361 2.06657C12.1798 2.31029 12.3303 2.54263 12.4576 2.87123C12.5539 3.11758 12.6676 3.48862 12.6996 4.1699C12.7311 4.90849 12.7403 5.13208 12.7403 7.00044C12.7403 8.8688 12.7311 9.09239 12.697 9.83098C12.6602 10.5123 12.5464 10.8833 12.4506 11.1296C12.318 11.4582 12.1701 11.688 11.926 11.9365C11.6796 12.1802 11.4451 12.3307 11.1191 12.4581C10.8759 12.5543 10.4996 12.6681 9.81566 12.7C9.07313 12.7315 8.85436 12.7407 6.98075 12.7407C5.10714 12.7407 4.8888 12.7315 4.14539 12.6974C3.46412 12.6606 3.08826 12.5469 2.84192 12.4511C2.50938 12.3185 2.28141 12.1706 2.03725 11.9264C1.79091 11.6801 1.63427 11.4456 1.5135 11.1196C1.41549 10.8763 1.30348 10.5 1.26716 9.8161C1.24222 9.08232 1.2304 8.85479 1.2304 6.98994C1.2304 5.12595 1.24222 4.89799 1.26716 4.15502C1.30348 3.47112 1.41549 3.0957 1.5135 2.85154C1.63427 2.51856 1.79135 2.29104 2.03725 2.04469C2.28097 1.80098 2.50938 1.64346 2.84192 1.52006C3.08826 1.42424 3.45493 1.31048 4.13883 1.27635C4.88136 1.24966 5.10014 1.24003 6.97112 1.24003L7 1.26016ZM7 3.40724C5.01306 3.40724 3.40636 5.01613 3.40636 7.00087C3.40636 8.98781 5.01525 10.5945 7 10.5945C8.98694 10.5945 10.5936 8.98562 10.5936 7.00087C10.5936 5.01394 8.98475 3.40724 7 3.40724ZM7 9.33435C5.71009 9.33435 4.66652 8.29079 4.66652 7.00087C4.66652 5.71096 5.71009 4.6674 7 4.6674C8.28991 4.6674 9.33348 5.71096 9.33348 7.00087C9.33348 8.29079 8.28991 9.33435 7 9.33435ZM11.5786 3.26372C11.5786 3.72884 11.2001 4.10426 10.7372 4.10426C10.272 4.10426 9.89661 3.7284 9.89661 3.26372C9.89661 2.80123 10.2747 2.42493 10.7372 2.42493C11.1996 2.42493 11.5786 2.80123 11.5786 3.26372Z" fill="black"/>
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
              <span className='flex items-center'>Designed by <img className='ml-2' alt="" src="./src/public/Meta.svg"/> </span>
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
