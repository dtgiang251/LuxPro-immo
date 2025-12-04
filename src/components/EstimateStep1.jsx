import React, { useState } from 'react';

const EstimateStep1 = ({ formData, updateFormData, onNext, onPrevious, isFirstStep }) => {
  const [selectedType, setSelectedType] = useState(formData.propertyType || 'apartment');
  const [selectedSubtype, setSelectedSubtype] = useState(formData.propertySubtype || '');

  const apartmentSubtypes = ['Studio', 'Duplex', 'Triplext', 'Penthouse', 'LOFT'];

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setSelectedSubtype('');
    updateFormData({ propertyType: type, propertySubtype: '' });
  };

  const handleSubtypeSelect = (subtype) => {
    setSelectedSubtype(subtype);
    updateFormData({ propertySubtype: subtype });
  };

  const handleNext = () => {
    updateFormData({ propertyType: selectedType, propertySubtype: selectedSubtype });
    onNext();
  };

  return (
    <div className="flex min-w-[240px] w-full flex-1 flex-col justify-start rounded-lg bg-white">
      <div className="flex w-full flex-col justify-start leading-tight">
        <h3 className="font-poppins text-lg font-bold text-black">
          Discover how much your property is worth
        </h3>
        <div className="mt-2.5 flex w-full items-center justify-center gap-2.5 rounded-lg bg-gray-50 px-3.5 py-2.5">
          <div className="flex-1 font-poppins text-xs font-normal text-gray-400">
            Please specify the type and subtype of the property you're referring to.
          </div>
        </div>
      </div>

      <img
        loading="lazy"
        src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/247bc48a4870e6ce1d41351c3512ab09c1ae55d6?placeholderIfAbsent=true"
        alt=""
        className="mt-6 h-1 w-full object-contain"
      />

      <div className="mt-6 flex min-h-px w-full bg-gray-200"></div>

      <div className="mt-6 flex w-full flex-col justify-start">
        <div className="font-poppins text-sm font-semibold leading-none text-black">
          Select your property type
        </div>

        <div className="mt-2.5 flex w-full flex-col justify-start">
          <div className="flex w-full flex-col justify-start">
            <button
              onClick={() => handleTypeSelect('apartment')}
              className={`flex min-h-[48px] w-full items-center justify-start gap-2 rounded-md px-3.5 py-3.5 font-poppins text-sm font-normal leading-snug ${
                selectedType === 'apartment'
                  ? 'bg-primary text-white'
                  : 'border border-gray-300 text-black'
              }`}
            >
              <img
                loading="lazy"
                src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/9a39101bab189344b5532db270475f09082e5d49?placeholderIfAbsent=true"
                alt=""
                className="h-5 w-5 object-contain"
              />
              <div className="flex-1">Apartment</div>
            </button>

            {selectedType === 'apartment' && (
              <div className="mt-3.5 flex w-full flex-col justify-start leading-none text-black">
                <div className="font-poppins text-sm font-semibold">
                  Select subcategory of apartment
                </div>
                <div className="mt-2.5 flex w-full items-start gap-2 font-poppins text-xs font-normal">
                  {apartmentSubtypes.map((subtype) => (
                    <button
                      key={subtype}
                      onClick={() => handleSubtypeSelect(subtype)}
                      className={`flex flex-1 items-center justify-center gap-4 rounded-md border border-gray-300 px-2.5 py-2.5 transition-colors ${
                        selectedSubtype === subtype
                          ? 'border-primary bg-primary/10'
                          : 'hover:border-gray-400'
                      }`}
                    >
                      {subtype}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleTypeSelect('house')}
            className={`mt-5 flex min-h-[48px] w-full items-center justify-start gap-2 rounded-md px-3.5 py-3.5 font-poppins text-sm font-normal leading-snug ${
              selectedType === 'house'
                ? 'bg-primary text-white'
                : 'border border-gray-300 text-black'
            }`}
          >
            <img
              loading="lazy"
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/9cef4d1561fe787ea527ffa6b955bdf09834182f?placeholderIfAbsent=true"
              alt=""
              className="h-5 w-5 object-contain"
            />
            <div className="flex-1">House</div>
          </button>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col justify-start text-center font-poppins text-base font-normal leading-relaxed">
        <div className="flex min-h-px w-full bg-gray-200"></div>
        <div className="mt-5 flex w-full items-center justify-between gap-10 flex-wrap">
          <button
            onClick={handleNext}
            className="flex items-center justify-center gap-4.5 rounded-lg border border-primary bg-primary px-8.5 py-3 text-white transition-opacity hover:opacity-90"
          >
            <div>Next</div>
            <img
              loading="lazy"
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/18ee0691ec79865e3a5b05c378d6c04b043ea00a?placeholderIfAbsent=true"
              alt=""
              className="h-2.5 w-3 object-contain"
            />
          </button>
          <button
            onClick={onPrevious}
            disabled={isFirstStep}
            className={`flex items-center justify-center gap-4.5 rounded-lg ${
              isFirstStep ? 'cursor-not-allowed opacity-40' : 'hover:opacity-70'
            }`}
          >
            <div className="flex h-2.5 w-3 items-center justify-center border border-primary bg-white">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="rotate-180">
                <path d="M7 1L11 5L7 9" stroke="#85053b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 5H11" stroke="#85053b" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="text-primary">Previous</div>
          </button>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col justify-start font-poppins text-xs font-normal leading-4 text-gray-400">
        <div>
          In order to obtain a coherent result, please provide the exact characteristics of the property to be valued.
        </div>
        <div className="mt-2.5">
          As this is an indicative estimate, we strongly advise you to go through one of our agents in order to draw up a more precise estimate.
        </div>
        <div className="mt-2.5">
          Your data will only be used to respond to your request.<br />
          You have a right of access, rectification and erasure of data concerning you. For more information, see our PRIVACY POLICY.
        </div>
      </div>
    </div>
  );
};

export default EstimateStep1;
