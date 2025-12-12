import React, { useState } from 'react';

const EstimateStep4 = ({ formData, updateFormData, onNext, onPrevious }) => {
  const [balconyTerraceSurface, setBalconyTerraceSurface] = useState(formData.balconyTerraceSurface || '');
  const [caveSurface, setCaveSurface] = useState(formData.caveSurface || '');
  const [garageInteriorParking, setGarageInteriorParking] = useState(formData.garageInteriorParking || '');
  const [exteriorParking, setExteriorParking] = useState(formData.exteriorParking || '');

  const handleNext = () => {
    updateFormData({
      balconyTerraceSurface,
      caveSurface,
      garageInteriorParking,
      exteriorParking
    });
    onNext();
  };

  return (
    <div className="flex min-w-[240px] w-full flex-1 flex-col justify-start rounded-lg bg-white">
      <div className="flex w-full flex-col justify-start font-poppins">
        <h3 className="text-lg font-bold leading-tight text-black">
          Outdoors
        </h3>
        <div className="mt-2.5 flex w-full items-center justify-center gap-2.5 rounded-lg bg-gray-50 px-3.5 py-2.5">
          <div className="flex-1 text-xs font-normal leading-4 text-gray-400">
            Highlight the outdoor features that enhance your property's appeal. Include details about garden areas, balconies, or terraces to showcase the additional space and lifestyle benefits your property offers. These outdoor elements create added value and are key attractions for potential buyers.
          </div>
        </div>
      </div>

      <img
        loading="lazy"
        src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/589c2a91b6b5c589843ec2f2a2406f6053387a20?placeholderIfAbsent=true"
        alt=""
        className="mt-6 h-1 w-full object-contain"
      />

      <div className="mt-6 flex min-h-px w-full bg-gray-200"></div>

      <div className="mt-6 flex w-full flex-col justify-start font-poppins">
        <div className="flex w-full flex-col justify-start">
          <div className="text-sm font-semibold leading-none text-black">Balcony/terrace surface area</div>
          <div className="mt-2 flex w-full items-center justify-between gap-10 border border-gray-200 px-3.5 py-3">
            <input
              type="text"
              value={balconyTerraceSurface}
              onChange={(e) => {
                setBalconyTerraceSurface(e.target.value);
                updateFormData({ balconyTerraceSurface: e.target.value });
              }}
              placeholder="-"
              className="flex-1 text-base leading-relaxed text-gray-400 outline-none placeholder:text-gray-400"
            />
            <div className="text-base leading-relaxed text-gray-400">㎡</div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col justify-start font-poppins">
        <div className="flex w-full flex-col justify-start">
          <div className="text-sm font-semibold leading-none text-black">Cave surface area</div>
          <div className="mt-2 flex w-full items-center justify-between gap-10 border border-gray-200 px-3.5 py-3">
            <input
              type="text"
              value={caveSurface}
              onChange={(e) => {
                setCaveSurface(e.target.value);
                updateFormData({ caveSurface: e.target.value });
              }}
              placeholder="-"
              className="flex-1 text-base leading-relaxed text-gray-400 outline-none placeholder:text-gray-400"
            />
            <div className="text-base leading-relaxed text-gray-400">㎡</div>
          </div>
        </div>
      </div>

     <div className="mt-6 flex w-full flex-col justify-start font-poppins">
      <div className="flex w-full flex-col justify-start">
        <div className="text-sm font-semibold leading-none text-black">
          garage(s) or interior parking(s)
        </div>
          <select
            value={garageInteriorParking}
            onChange={(e) => {
              setGarageInteriorParking(e.target.value);
              updateFormData({ garageInteriorParking: e.target.value });
            }}
            className="flex-1 text-base leading-relaxed text-gray-400 outline-none bg-white border border-gray-300 mt-[10px] px-3 py-3"
          >
            <option value="">-</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3+</option>
          </select>
      </div>
    </div>


      <div className="mt-6 flex w-full flex-col justify-start font-poppins">
        <div className="flex w-full flex-col justify-start">
          <div className="text-sm font-semibold leading-none text-black">Exterior parking(s)</div>
          <select
            value={exteriorParking}
            onChange={(e) => {
              setExteriorParking(e.target.value);
              updateFormData({ exteriorParking: e.target.value });
            }}
            className="flex-1 text-base leading-relaxed text-gray-400 outline-none bg-white border border-gray-300 mt-[10px] px-3 py-3"
          >
            <option value="">-</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3+</option>
          </select>
          
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
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/af7b68ad3babba8243e59dc1da08fa2332722bf0?placeholderIfAbsent=true"
              alt=""
              className="h-2.5 w-3 object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstimateStep4;
