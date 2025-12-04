import React, { useState } from 'react';

const EstimateStep3 = ({ formData, updateFormData, onNext, onPrevious }) => {
  const [constructionYear, setConstructionYear] = useState(formData.constructionYear || '');
  const [livingSurface, setLivingSurface] = useState(formData.livingSurface || '');
  const [floors, setFloors] = useState(formData.floors || '');
  const [floor, setFloor] = useState(formData.floor || '');
  const [rooms, setRooms] = useState(formData.rooms || '');
  const [bathrooms, setBathrooms] = useState(formData.bathrooms || '');
  const [propertyStanding, setPropertyStanding] = useState(formData.propertyStanding || 'Standard');
  const [propertyCondition, setPropertyCondition] = useState(formData.propertyCondition || 'Normal');
  const [amenities, setAmenities] = useState(formData.generalAmenities || {
    lift: true,
    spa: false,
    smartHome: false,
    alarm: false
  });

  const handleToggle = (amenity) => {
    const updatedAmenities = {
      ...amenities,
      [amenity]: !amenities[amenity]
    };
    setAmenities(updatedAmenities);
    updateFormData({ generalAmenities: updatedAmenities });
  };

  const handleNext = () => {
    updateFormData({
      constructionYear,
      livingSurface,
      floors,
      floor,
      rooms,
      bathrooms,
      propertyStanding,
      propertyCondition,
      generalAmenities: amenities
    });
    onNext();
  };

  return (
    <div className="flex min-w-[240px] w-full flex-1 flex-col justify-start rounded-lg bg-white">
      <div className="flex w-full flex-col justify-start font-poppins">
        <h3 className="text-lg font-bold leading-tight text-black">
          General
        </h3>
        <div className="mt-2.5 flex w-full items-center justify-center gap-2.5 rounded-lg bg-gray-50 px-3.5 py-2.5">
          <div className="flex-1 text-xs font-normal leading-4 text-gray-400">
            Provide key details about your property's layout and living space to enhance its profile. Enter specifics like total living area, floor level, and the number of bedrooms and bathrooms.
          </div>
        </div>
      </div>

      <img
        loading="lazy"
        src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/8379d88f726a3e5b0612daad6ab3d132ead700df?placeholderIfAbsent=true"
        alt=""
        className="mt-6 h-1 w-full object-contain"
      />

      <div className="mt-6 flex min-h-px w-full bg-gray-200"></div>

      <div className="mt-6 flex w-full items-start gap-6 font-poppins">
        <div className="flex flex-1 flex-col justify-start">
          <div className="text-sm font-semibold leading-none text-black">Construction year</div>
          <div className="mt-2 flex w-full items-center justify-between gap-10 border border-gray-200 px-3.5 py-3">
            <input
              type="text"
              value={constructionYear}
              onChange={(e) => {
                setConstructionYear(e.target.value);
                updateFormData({ constructionYear: e.target.value });
              }}
              placeholder="-"
              className="flex-1 text-base leading-relaxed text-gray-400 outline-none placeholder:text-gray-400"
            />
            <img
              loading="lazy"
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/9b250a935530a8ddc335f9709ae5964bf5e0e4e4?placeholderIfAbsent=true"
              alt=""
              className="h-5 w-5 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-start">
          <div className="text-sm font-semibold leading-none text-black">Living surface</div>
          <div className="mt-2 flex w-full items-center justify-between gap-10 border border-gray-200 px-3.5 py-3">
            <input
              type="text"
              value={livingSurface}
              onChange={(e) => {
                setLivingSurface(e.target.value);
                updateFormData({ livingSurface: e.target.value });
              }}
              placeholder="-"
              className="flex-1 text-base leading-relaxed text-gray-400 outline-none placeholder:text-gray-400"
            />
            <div className="text-base leading-relaxed text-gray-400">㎡</div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex w-full items-start gap-6 font-poppins">
        <div className="flex flex-1 flex-col justify-start">
          <div className="text-sm font-semibold leading-none text-black">Floors</div>
          <div className="mt-2 flex w-full items-center justify-between gap-10 border border-gray-200 px-3.5 py-3">
            <input
              type="text"
              value={floors}
              onChange={(e) => {
                setFloors(e.target.value);
                updateFormData({ floors: e.target.value });
              }}
              placeholder="-"
              className="flex-1 text-base leading-relaxed text-gray-400 outline-none placeholder:text-gray-400"
            />
            <img
              loading="lazy"
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/9b250a935530a8ddc335f9709ae5964bf5e0e4e4?placeholderIfAbsent=true"
              alt=""
              className="h-5 w-5 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-start">
          <div className="text-sm font-semibold leading-none text-black">Floor</div>
          <div className="mt-2 flex w-full items-center justify-between gap-10 border border-gray-200 px-3.5 py-3">
            <input
              type="text"
              value={floor}
              onChange={(e) => {
                setFloor(e.target.value);
                updateFormData({ floor: e.target.value });
              }}
              placeholder="-"
              className="flex-1 text-base leading-relaxed text-gray-400 outline-none placeholder:text-gray-400"
            />
            <img
              loading="lazy"
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/9b250a935530a8ddc335f9709ae5964bf5e0e4e4?placeholderIfAbsent=true"
              alt=""
              className="h-5 w-5 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex w-full items-start gap-6 font-poppins">
        <div className="flex flex-1 flex-col justify-start">
          <div className="text-sm font-semibold leading-none text-black">Rooms</div>
          <div className="mt-2 flex w-full items-center justify-between gap-10 border border-gray-200 px-3.5 py-3">
            <input
              type="text"
              value={rooms}
              onChange={(e) => {
                setRooms(e.target.value);
                updateFormData({ rooms: e.target.value });
              }}
              placeholder="-"
              className="flex-1 text-base leading-relaxed text-gray-400 outline-none placeholder:text-gray-400"
            />
            <img
              loading="lazy"
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/9b250a935530a8ddc335f9709ae5964bf5e0e4e4?placeholderIfAbsent=true"
              alt=""
              className="h-5 w-5 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-start">
          <div className="text-sm font-semibold leading-none text-black">Bathrooms</div>
          <div className="mt-2 flex w-full items-center justify-between gap-10 border border-gray-200 px-3.5 py-3">
            <input
              type="text"
              value={bathrooms}
              onChange={(e) => {
                setBathrooms(e.target.value);
                updateFormData({ bathrooms: e.target.value });
              }}
              placeholder="-"
              className="flex-1 text-base leading-relaxed text-gray-400 outline-none placeholder:text-gray-400"
            />
            <img
              loading="lazy"
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/9b250a935530a8ddc335f9709ae5964bf5e0e4e4?placeholderIfAbsent=true"
              alt=""
              className="h-5 w-5 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex w-full items-start gap-6 font-poppins">
        <div className="flex flex-1 flex-col justify-start">
          <div className="text-sm font-semibold leading-none text-black">Property standing</div>
          <div className="mt-2 flex w-full items-center justify-between gap-10 border border-gray-200 px-3.5 py-3">
            <input
              type="text"
              value={propertyStanding}
              onChange={(e) => {
                setPropertyStanding(e.target.value);
                updateFormData({ propertyStanding: e.target.value });
              }}
              placeholder="Standard"
              className="flex-1 text-base leading-relaxed text-gray-400 outline-none placeholder:text-gray-400"
            />
            <img
              loading="lazy"
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/9b250a935530a8ddc335f9709ae5964bf5e0e4e4?placeholderIfAbsent=true"
              alt=""
              className="h-5 w-5 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-start">
          <div className="text-sm font-semibold leading-none text-black">Property condition</div>
          <div className="mt-2 flex w-full items-center justify-between gap-10 border border-gray-200 px-3.5 py-3">
            <input
              type="text"
              value={propertyCondition}
              onChange={(e) => {
                setPropertyCondition(e.target.value);
                updateFormData({ propertyCondition: e.target.value });
              }}
              placeholder="Normal"
              className="flex-1 text-base leading-relaxed text-gray-400 outline-none placeholder:text-gray-400"
            />
            <img
              loading="lazy"
              src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/9b250a935530a8ddc335f9709ae5964bf5e0e4e4?placeholderIfAbsent=true"
              alt=""
              className="h-5 w-5 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col justify-start">
        <div className="text-sm font-semibold capitalize leading-none text-black font-poppins">
          Amenities
        </div>
        <div className="mt-3 flex w-full items-center justify-center gap-2.5 rounded-lg bg-gray-50 px-3.5 py-2.5">
          <div className="flex-1 font-poppins text-xs font-normal leading-4 text-gray-400">
            Showcase the amenities that add value and convenience to your property. List features like a lift, smart home technology, security systems, and more to highlight the unique comforts and modern touches that make your property stand out.
          </div>
        </div>
        <div className="mt-3 flex w-full flex-wrap items-start gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleToggle('lift')}
              className={`flex h-5 w-8 items-center overflow-hidden rounded-full p-0.5 transition-colors ${
                amenities.lift ? 'bg-primary justify-end' : 'bg-gray-200 justify-start'
              }`}
            >
              <div className="h-4 w-4 rounded-full bg-white"></div>
            </button>
            <div className={`font-poppins text-sm font-medium capitalize leading-none ${
              amenities.lift ? 'text-black' : 'text-gray-400'
            }`}>
              Lift
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleToggle('spa')}
              className={`flex h-5 w-8 items-center overflow-hidden rounded-full p-0.5 transition-colors ${
                amenities.spa ? 'bg-primary justify-end' : 'bg-gray-200 justify-start'
              }`}
            >
              <div className="h-4 w-4 rounded-full bg-white"></div>
            </button>
            <div className={`font-poppins text-sm font-medium capitalize leading-none ${
              amenities.spa ? 'text-black' : 'text-gray-400'
            }`}>
              Spa
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleToggle('smartHome')}
              className={`flex h-5 w-8 items-center overflow-hidden rounded-full p-0.5 transition-colors ${
                amenities.smartHome ? 'bg-primary justify-end' : 'bg-gray-200 justify-start'
              }`}
            >
              <div className="h-4 w-4 rounded-full bg-white"></div>
            </button>
            <div className={`font-poppins text-sm font-medium leading-none ${
              amenities.smartHome ? 'text-black' : 'text-gray-400'
            }`}>
              Smart home
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleToggle('alarm')}
              className={`flex h-5 w-8 items-center overflow-hidden rounded-full p-0.5 transition-colors ${
                amenities.alarm ? 'bg-primary justify-end' : 'bg-gray-200 justify-start'
              }`}
            >
              <div className="h-4 w-4 rounded-full bg-white"></div>
            </button>
            <div className={`font-poppins text-sm font-medium capitalize leading-none ${
              amenities.alarm ? 'text-black' : 'text-gray-400'
            }`}>
              Alarm
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

export default EstimateStep3;
