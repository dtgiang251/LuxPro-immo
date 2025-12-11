import React, { useState } from 'react';

const EstimateStep2 = ({ formData, updateFormData, onNext, onPrevious }) => {
  const [commune, setCommune] = useState(formData.commune || '');
  const [exposure, setExposure] = useState(formData.exposure || '');
  const [view, setView] = useState(formData.view || 'Not overlooked');
  const [environment, setEnvironment] = useState(formData.environment || 'Not overlooked');
  const [amenities, setAmenities] = useState(formData.amenities || {
    commerces: true,
    greenSpaces: false,
    transports: false,
    schools: false
  });

  const handleToggle = (amenity) => {
    const updatedAmenities = {
      ...amenities,
      [amenity]: !amenities[amenity]
    };
    setAmenities(updatedAmenities);
    updateFormData({ amenities: updatedAmenities });
  };

  const handleNext = () => {
    updateFormData({
      commune,
      exposure,
      view,
      environment,
      amenities
    });
    onNext();
  };

  return (
    <div className="flex min-w-[240px] w-full flex-1 flex-col justify-start rounded-lg bg-white">
      <div className="flex w-full flex-col justify-start font-poppins">
        <h3 className="text-lg font-bold leading-tight text-black">
          Location
        </h3>
        <div className="mt-2.5 flex w-full items-center justify-center gap-2.5 rounded-lg bg-gray-50 px-3.5 py-2.5">
          <div className="flex-1 text-xs font-normal leading-4 text-gray-400">
            Provide the geographical location of the property you'd like to value for the most accurate assessment. Feel free to include the exact address if desired—this information will remain strictly confidential. Your details help us deliver the most precise and tailored valuation possible!
          </div>
        </div>
      </div>

      <img
        loading="lazy"
        src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/60ed37a5459b0c42be114f57868ec4c06ec5196f?placeholderIfAbsent=true"
        alt=""
        className="mt-6 h-1 w-full object-contain"
      />

      <div className="mt-6 flex min-h-px w-full bg-gray-200"></div>

      <div className="mt-6 flex w-full flex-col justify-start font-poppins">
        <div className="flex w-full flex-col justify-start">
          <div className="text-sm font-semibold capitalize leading-none text-black">Commune</div>
            <select
            value={commune}
            onChange={(e) => {
              setCommune(e.target.value);
              updateFormData({ commune: e.target.value });
            }}
            className="flex-1 text-base leading-relaxed text-gray-400 outline-none bg-white border border-gray-300 mt-[10px] px-3 py-3"
          >
            <option value="" disabled>
              Locality, City, Commune
            </option>
            <option value="Locality">Locality</option>
            <option value="City"> City</option>
            <option value="Commune">Commune</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col justify-start font-poppins">
        <div className="flex w-full flex-col justify-start">
          <div className="text-sm font-semibold capitalize leading-none text-black">Exposure</div>
          <select
            value={commune}
            onChange={(e) => {
              setCommune(e.target.value);
              updateFormData({ commune: e.target.value });
            }}
            className="flex-1 text-base leading-relaxed text-gray-400 outline-none bg-white border border-gray-300 mt-[10px] px-3 py-3"
          >
            <option value="" disabled>
              -
            </option>
            <option value="Locality">Locality</option>
            <option value="City"> City</option>
            <option value="Commune">Commune</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col justify-start font-poppins">
        <div className="flex w-full flex-col justify-start">
          <div className="text-sm font-semibold capitalize leading-none text-black">View</div>
          <select
            value={commune}
            onChange={(e) => {
              setCommune(e.target.value);
              updateFormData({ commune: e.target.value });
            }}
            className="flex-1 text-base leading-relaxed text-gray-400 outline-none bg-white border border-gray-300 mt-[10px] px-3 py-3"
          >
            <option value="" disabled>
              Not overlooked
            </option>
            <option value="Locality">Locality</option>
            <option value="City"> City</option>
            <option value="Commune">Commune</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col justify-start font-poppins">
        <div className="flex w-full flex-col justify-start">
          <div className="text-sm font-semibold capitalize leading-none text-black">Environment</div>
          <select
            value={commune}
            onChange={(e) => {
              setCommune(e.target.value);
              updateFormData({ commune: e.target.value });
            }}
            className="flex-1 text-base leading-relaxed text-gray-400 outline-none bg-white border border-gray-300 mt-[10px] px-3 py-3"
          >
            <option value="" disabled>
              Not overlooked
            </option>
            <option value="Locality">Locality</option>
            <option value="City"> City</option>
            <option value="Commune">Commune</option>
          </select>
        </div>
        <div className="mt-2.5 flex w-full items-center justify-center gap-2.5 rounded-lg bg-gray-50 px-3.5 py-2.5">
          <div className="flex-1 text-xs font-normal leading-4 text-gray-400">
            Enhance your listing by highlighting the unique features of your property's location and surroundings. From breathtaking views to optimal sunlight exposure, showcase the elements that make your property stand out. Add details on nearby amenities and the environment to attract potential buyers seeking the perfect setting!
          </div>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col justify-start">
        <div className="text-sm font-semibold capitalize leading-none text-black font-poppins">
          Environment
        </div>
        <div className="mt-3 flex w-full flex-wrap items-start gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleToggle('commerces')}
              className={`flex h-5 w-8 items-center overflow-hidden rounded-full p-0.5 transition-colors ${
                amenities.commerces ? 'bg-primary justify-end' : 'bg-gray-200 justify-start'
              }`}
            >
              <div className="h-4 w-4 rounded-full bg-white"></div>
            </button>
            <div className={`font-poppins text-sm font-medium capitalize leading-none ${
              amenities.commerces ? 'text-black' : 'text-gray-400'
            }`}>
              Commerces
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleToggle('greenSpaces')}
              className={`flex h-5 w-8 items-center overflow-hidden rounded-full p-0.5 transition-colors ${
                amenities.greenSpaces ? 'bg-primary justify-end' : 'bg-gray-200 justify-start'
              }`}
            >
              <div className="h-4 w-4 rounded-full bg-white"></div>
            </button>
            <div className={`font-poppins text-sm font-medium capitalize leading-none ${
              amenities.greenSpaces ? 'text-black' : 'text-gray-400'
            }`}>
              Green spaces
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleToggle('transports')}
              className={`flex h-5 w-8 items-center overflow-hidden rounded-full p-0.5 transition-colors ${
                amenities.transports ? 'bg-primary justify-end' : 'bg-gray-200 justify-start'
              }`}
            >
              <div className="h-4 w-4 rounded-full bg-white"></div>
            </button>
            <div className={`font-poppins text-sm font-medium capitalize leading-none ${
              amenities.transports ? 'text-black' : 'text-gray-400'
            }`}>
              Transports
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleToggle('schools')}
              className={`flex h-5 w-8 items-center overflow-hidden rounded-full p-0.5 transition-colors ${
                amenities.schools ? 'bg-primary justify-end' : 'bg-gray-200 justify-start'
              }`}
            >
              <div className="h-4 w-4 rounded-full bg-white"></div>
            </button>
            <div className={`font-poppins text-sm font-medium capitalize leading-none ${
              amenities.schools ? 'text-black' : 'text-gray-400'
            }`}>
              Schools
            </div>
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
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/83f2b4ac7c012cd04fb188dd5d9b0b2f644baba5?placeholderIfAbsent=true"
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
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/a7215133d5457b98bbae51bf22c5acbf5577bfd6?placeholderIfAbsent=true"
              alt=""
              className="h-2.5 w-3 object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstimateStep2;
