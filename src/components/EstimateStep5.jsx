import React, { useState } from 'react';

const EstimateStep5 = ({ formData, updateFormData, onNext, onPrevious }) => {
  const [energyRatingHeating, setEnergyRatingHeating] = useState(formData.energyRatingHeating || '');
  const [energyRatingInsulation, setEnergyRatingInsulation] = useState(formData.energyRatingInsulation || '');

  const energyRatings = [
    { label: 'A', color: '#397f3b', borderColor: '#397f3b', textColor: 'rgba(57, 127, 59, 1)', bgColor: '#fff' },
    { label: 'B', color: '#63a04b', borderColor: 'rgba(99, 160, 75, 1)', textColor: 'rgba(99, 160, 75, 1)', bgColor: 'transparent' },
    { label: 'C', color: '#8faf47', borderColor: 'rgba(143, 175, 71, 1)', textColor: 'rgba(143, 175, 71, 1)', bgColor: 'rgba(143, 175, 71, 1)' },
    { label: 'D', color: '#d9d33e', borderColor: 'rgba(217, 211, 62, 1)', textColor: 'rgba(217, 211, 62, 1)', bgColor: 'transparent' },
    { label: 'E', color: '#efcc16', borderColor: 'rgba(239, 204, 22, 1)', textColor: 'rgba(239, 204, 22, 1)', bgColor: 'transparent' },
    { label: 'F', color: '#f6b647', borderColor: 'rgba(246, 182, 71, 1)', textColor: 'rgba(246, 182, 71, 1)', bgColor: 'transparent' },
    { label: 'G', color: '#ef7a36', borderColor: 'rgba(239, 122, 54, 1)', textColor: 'rgba(239, 122, 54, 1)', bgColor: 'transparent' },
    { label: 'H', color: '#e04b2b', borderColor: 'rgba(224, 75, 43, 1)', textColor: 'rgba(224, 75, 43, 1)', bgColor: 'transparent' },
    { label: 'I', color: '#b72a29', borderColor: 'rgba(183, 42, 41, 1)', textColor: 'rgba(183, 42, 41, 1)', bgColor: 'transparent' }
  ];

  const handleRatingClick = (rating, type) => {
    if (type === 'heating') {
      setEnergyRatingHeating(rating);
      updateFormData({ energyRatingHeating: rating });
    } else {
      setEnergyRatingInsulation(rating);
      updateFormData({ energyRatingInsulation: rating });
    }
  };

  const handleNext = () => {
    updateFormData({
      energyRatingHeating,
      energyRatingInsulation
    });
    onNext();
  };

  return (
    <div className="flex min-w-[240px] w-full flex-1 flex-col justify-start rounded-lg bg-white">
      <div className="flex w-full flex-col justify-start font-poppins">
        <h3 className="text-lg font-bold leading-tight text-black">
          Energy
        </h3>
        <div className="mt-2.5 flex w-full items-center justify-center gap-2.5 rounded-lg bg-gray-50 px-3.5 py-2.5">
          <div className="flex-1 text-xs font-normal leading-4 text-gray-400">
            Share essential details about your property's energy efficiency. Include information on energy ratings, insulation quality, heating systems, and any sustainable upgrades. Highlighting energy efficiency can increase the property's appeal and long-term savings potential!
          </div>
        </div>
      </div>

      <img
        loading="lazy"
        src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/3116018544cbbecc6291f0e7eb438ccdeb67d454?placeholderIfAbsent=true"
        alt=""
        className="mt-6 h-1 w-full object-contain"
      />

      <div className="mt-6 flex min-h-px w-full bg-gray-200"></div>

      <div className="mt-6 flex w-full flex-col justify-start font-poppins">
        <div className="flex w-full flex-col justify-start">
          <div className="text-sm font-semibold leading-none text-black">Energy Performance Certificate (EPC)</div>
          <div className="mt-2 flex w-full flex-wrap items-start gap-2">
            {energyRatings.map((rating) => (
              <button
                key={rating.label}
                onClick={() => handleRatingClick(rating.label, 'heating')}
                className={`flex min-h-10 flex-1 items-center justify-center gap-1 rounded-md border px-2.5 py-3 font-inter text-sm transition-all ${
                  energyRatingHeating === rating.label
                    ? rating.label === 'C'
                      ? 'border-[1.4px] bg-[rgba(143,175,71,1)] text-white'
                      : rating.label === 'A'
                      ? 'border-[1.4px] border-[#397f3b] text-[rgba(57,127,59,1)]'
                      : 'border text-current'
                    : 'border text-current hover:opacity-70'
                }`}
                style={{
                  borderColor: rating.borderColor,
                  color: energyRatingHeating === rating.label && rating.label === 'C' ? '#fff' : rating.textColor,
                  backgroundColor: energyRatingHeating === rating.label && rating.label === 'C' ? rating.bgColor : 'transparent',
                  minWidth: '0',
                  flexBasis: 'calc((100% - 64px) / 9)'
                }}
              >
                {rating.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col justify-start font-poppins">
        <div className="flex w-full flex-col justify-start">
          <div className="text-sm font-semibold leading-none text-black">Overall Building Energy Rating</div>
          <div className="mt-2 flex w-full flex-wrap items-start gap-2">
            {energyRatings.map((rating) => (
              <button
                key={rating.label}
                onClick={() => handleRatingClick(rating.label, 'insulation')}
                className={`flex min-h-10 flex-1 items-center justify-center gap-1 rounded-md border px-2.5 py-3 font-inter text-sm transition-all ${
                  energyRatingInsulation === rating.label
                    ? rating.label === 'A'
                      ? 'border-[1.4px] border-[#397f3b] text-[rgba(57,127,59,1)]'
                      : 'border text-current'
                    : 'border text-current hover:opacity-70'
                }`}
                style={{
                  borderColor: rating.borderColor,
                  color: rating.textColor,
                  minWidth: '0',
                  flexBasis: 'calc((100% - 64px) / 9)'
                }}
              >
                {rating.label}
              </button>
            ))}
          </div>
        </div>
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
            onClick={handleNext}
            className="flex items-center justify-center gap-4 rounded-lg border border-primary bg-primary px-8 py-3 text-white transition-opacity hover:opacity-90"
          >
            <div>Next</div>
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

export default EstimateStep5;
