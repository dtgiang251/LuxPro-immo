import React, { useState } from 'react';

const EstimateStep6 = ({ formData, updateFormData, onPrevious, onSubmit }) => {
  const [email, setEmail] = useState(formData.email || '');
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || '');
  const [fullName, setFullName] = useState(formData.fullName || '');
  const [acceptedTerms, setAcceptedTerms] = useState(formData.acceptedTerms || false);

  const handleSubmit = () => {
    updateFormData({
      email,
      phoneNumber,
      fullName,
      acceptedTerms
    });
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="flex min-w-[240px] w-full flex-1 flex-col justify-start rounded-lg bg-white">
      <div className="flex w-full flex-col justify-start font-poppins">
        <h3 className="text-lg font-bold leading-tight text-black">
          Contact
        </h3>
        <div className="mt-2.5 flex w-full items-center justify-center gap-2.5 rounded-lg bg-gray-50 px-3.5 py-2.5">
          <div className="flex-1 text-xs font-normal leading-4 text-gray-400">
            This estimation tool integrates the public data of real estate ads currently available for sale as well as the data of transactions recorded by the notaries communicated by Liser.
          </div>
        </div>
      </div>

      <img
        loading="lazy"
        src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/b714a557e8853bd9910b77282aa0ac6adc2b79aa?placeholderIfAbsent=true"
        alt=""
        className="mt-6 h-1 w-full object-contain"
      />

      <div className="mt-6 flex min-h-px w-full bg-gray-200"></div>

      <div className="mt-6 flex w-full flex-wrap items-start gap-6 font-poppins">
        <div className="flex flex-1 flex-col justify-start" style={{ minWidth: '200px' }}>
          <div className="text-sm font-semibold leading-none capitalize text-black">Email</div>
          <div className="mt-2 flex w-full items-center justify-between gap-1.5 border border-gray-200 px-3.5 py-3">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                updateFormData({ email: e.target.value });
              }}
              placeholder="Example@gmail.com"
              className="flex-1 text-base leading-relaxed text-gray-400 w-full outline-none placeholder:text-gray-400"
            />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33333 3.33337H16.6667C17.5833 3.33337 18.3333 4.08337 18.3333 5.00004V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33333C2.41667 16.6667 1.66667 15.9167 1.66667 15V5.00004C1.66667 4.08337 2.41667 3.33337 3.33333 3.33337Z" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.3333 5L10 10.8333L1.66667 5" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-start" style={{ minWidth: '200px' }}>
          <div className="text-sm font-semibold leading-none text-black">phone number</div>
          <div className="mt-2 flex w-full items-center justify-between gap-1.5 border border-gray-200 px-3.5 py-3">
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                updateFormData({ phoneNumber: e.target.value });
              }}
              placeholder="012-123456"
              className="flex-1 text-base leading-relaxed text-gray-400 outline-none w-full placeholder:text-gray-400"
            />
            <img
              loading="lazy"
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/95f88f553bfc039740c142c17db9fd8fea94da29?placeholderIfAbsent=true"
              alt=""
              className="h-5 w-5 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col justify-start font-poppins">
        <div className="text-sm font-semibold leading-none text-black">Full Name</div>
        <div className="mt-2 flex w-full items-center justify-between gap-1.5 border border-gray-200 px-3.5 py-3">
          <input
            type="text"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              updateFormData({ fullName: e.target.value });
            }}
            placeholder="Rudolphe Aben"
            className="flex-1 text-base leading-relaxed text-gray-400 outline-none w-full placeholder:text-gray-400"
          />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect opacity="0.01" width="20" height="20" fill="#939393"/>
          <path d="M9.99935 9.16667C11.8403 9.16667 13.3327 7.67428 13.3327 5.83333C13.3327 3.99238 11.8403 2.5 9.99935 2.5C8.1584 2.5 6.66602 3.99238 6.66602 5.83333C6.66602 7.67428 8.1584 9.16667 9.99935 9.16667Z" fill="#939393"/>
          <path d="M14.9993 17.5C15.4596 17.5 15.8327 17.1269 15.8327 16.6667C15.8327 13.445 13.221 10.8333 9.99935 10.8333C6.77769 10.8333 4.16602 13.445 4.16602 16.6667C4.16602 17.1269 4.53911 17.5 4.99935 17.5H14.9993Z" fill="#939393"/>
          </svg>

        </div>
      </div>

      <div className="mt-6 flex w-full items-center gap-2.5">
        <div className="flex items-center justify-center overflow-hidden rounded-sm">
          <input
            type="checkbox"
            id="termsCheckbox"
            checked={acceptedTerms}
            onChange={(e) => {
              setAcceptedTerms(e.target.checked);
              updateFormData({ acceptedTerms: e.target.checked });
            }}
            className="h-4 w-4 cursor-pointer accent-gray-400"
          />
        </div>
        <label
          htmlFor="termsCheckbox"
          className="flex-1 cursor-pointer font-poppins text-xs font-normal leading-4 text-gray-400"
        >
          I'm an adult, i have read and accept Privacy policy and General conditions of use.
        </label>
      </div>

      <div className="mt-6 flex w-full flex-col justify-start text-center font-poppins text-base font-normal leading-relaxed">
        <div className="flex min-h-px w-full bg-gray-200"></div>
        <div className="mt-5 flex w-full items-center justify-between gap-10 flex-wrap">
          <button
            onClick={onPrevious}
            className="flex items-center justify-center gap-4 rounded-lg hover:opacity-70"
          >
            <img
              loading="lazy"
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/0f6990682676293e3727477e65ec05e98794d8f3?placeholderIfAbsent=true"
              alt=""
              className="h-2.5 w-3 object-contain"
            />
            <div className="text-primary">Previous</div>
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center gap-4 rounded-lg border border-primary bg-primary px-8 py-3 text-white transition-opacity hover:opacity-90"
          >
            <div>Submit</div>
            <img
              loading="lazy"
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/18ee0691ec79865e3a5b05c378d6c04b043ea00a?placeholderIfAbsent=true"
              alt=""
              className="h-2.5 w-3 object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstimateStep6;
