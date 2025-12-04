import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    privacy: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="flex w-full flex-col gap-7 px-5 py-15 md:px-15 lg:px-30 lg:py-15">
      <div className="flex flex-col gap-2.5">
        <h1 className="font-poppins text-[38px] font-bold leading-[44px] text-black">
          Contact us
        </h1>
        <p className="font-poppins text-base leading-[26px] text-text-gray">
          We will respond within one business day whenever possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="font-poppins text-sm font-semibold leading-[14px] text-black">
            Full name
          </label>
          <div className="flex items-center justify-between gap-3 border border-gray-200 px-3.5 py-3">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Rudolphe Aben"
              className="flex-1 font-poppins text-base leading-[26px] text-text-gray outline-none placeholder:text-text-gray"
            />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.01" width="20" height="20" fill="#939393"/>
              <path d="M10.0003 9.16667C11.8413 9.16667 13.3337 7.67428 13.3337 5.83333C13.3337 3.99238 11.8413 2.5 10.0003 2.5C8.15938 2.5 6.66699 3.99238 6.66699 5.83333C6.66699 7.67428 8.15938 9.16667 10.0003 9.16667Z" fill="#939393"/>
              <path d="M15.0003 17.5C15.4606 17.5 15.8337 17.1269 15.8337 16.6667C15.8337 13.445 13.222 10.8333 10.0003 10.8333C6.77866 10.8333 4.16699 13.445 4.16699 16.6667C4.16699 17.1269 4.54009 17.5 5.00033 17.5H15.0003Z" fill="#939393"/>
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-poppins text-sm font-semibold leading-[14px] text-black">
            Email
          </label>
          <div className="flex items-center justify-between gap-3 border border-gray-200 px-3.5 py-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Example@gmail.com"
              className="flex-1 font-poppins text-base leading-[26px] text-text-gray outline-none placeholder:text-text-gray"
            />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.1667 0H2.5C1.11929 0 0 1.11929 0 2.5V10.8333C0 12.214 1.11929 13.3333 2.5 13.3333H14.1667C15.5474 13.3333 16.6667 12.214 16.6667 10.8333V2.5C16.6667 1.11929 15.5474 0 14.1667 0ZM14.1667 1.66667L8.75 5.39167C8.49217 5.54053 8.1745 5.54053 7.91667 5.39167L2.5 1.66667H14.1667Z" fill="#939393"/>
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-poppins text-sm font-semibold leading-[14px] text-black">
            Phone
          </label>
          <div className="flex items-center justify-between gap-3 border border-gray-200 px-3.5 py-3">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="012-123456"
              className="flex-1 font-poppins text-base leading-[26px] text-text-gray outline-none placeholder:text-text-gray"
            />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3303L4.79126 9.10437C5.90756 11.8783 8.12168 14.0924 10.8956 15.2087L11.6697 13.6606C11.866 13.2679 12.2955 13.0492 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z" fill="#939393"/>
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-poppins text-sm font-semibold leading-[14px] text-black">
            How can we help you?
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="h-32 resize-none rounded-md border border-gray-200 px-3.5 py-3 font-poppins text-base leading-[26px] text-text-gray outline-none placeholder:text-text-gray"
          />
        </div>

        <label className="flex items-center gap-2.5">
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              className="h-4 w-4 rounded border border-text-gray accent-text-gray"
            />
          </div>
          <span className="flex-1 font-poppins text-xs leading-4 text-text-gray">
            Personal information is transmitted and used for the purposes described in the privacy statement.
          </span>
        </label>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 self-start rounded-[10px] border border-primary bg-primary px-8 py-3 font-poppins text-base leading-[26px] text-white transition-all hover:bg-primary/90"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
