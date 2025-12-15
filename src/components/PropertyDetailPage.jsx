import React from 'react';
import Navigation from './Navigation';
import PropertyTitleBar from './PropertyTitleBar';
import PropertyDescription from './PropertyDescription';
import PropertyCharacteristics from './PropertyCharacteristics';
import PropertyEnergy from './PropertyEnergy';
import PropertyCalculator from './PropertyCalculator';
import PropertySidebar from './PropertySidebar';
import PropertyListings from './PropertyListings';
import Footer from './Footer';

const PropertyDetailPage = () => {
  const propertyData = {
    title: 'House for sale in Differdange',
    address: '1 Am Weischbaendchen',
    price: '14950000 €',
    bedrooms: 3,
    bathrooms: 2,
    area: 260,
    floor: 4,
    image: 'https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/6dd7d0be9367aad8fa7b4b1ee513dc1c40660052?placeholderIfAbsent=true',
    description: `This brand-new 105.60 m² apartment sits on the first floor of a modern 2024-built residence.

It features a renovated living room with access to a 14.50 m² balcony, an open-plan equipped kitchen (customizable covering included in the price), three cozy rooms, a contemporary bathroom, and a separate toilet.

Energy-efficient specs meet today's standards: underfloor heating, heat pump, triple PVC glazing, electric shutters, tiled finishes, and energy class A.

A common outdoor parking space is included; an indoor spot can be purchased for an additional 15,000 €.

Conveniently located near shops, schools, and services, with quick access to Luxembourg—Rodange and Differdange in 15 minutes, Esch-sur-Alzette and Kirchberg in 25–30 minutes. Immediate availability.`,
    characteristics: [
      { label: 'Bedroom', value: '4' },
      { label: 'Bathroom', value: '2' },
      { label: 'Hallway', value: 'Yes' },
      { label: 'Kitchen', value: 'Yes' },
      { label: 'Cellar', value: 'Yes' },
      { label: 'Garden', value: 'Yes' },
      { label: 'Garage', value: 'Yes' },
      { label: 'Cellar', value: 'Yes' },
      { label: 'Garden', value: 'Yes' },
    ],
    energyPerformance: 'E',
    thermicIsolation: 'E',
  };

  const moreListings = [
    {
      title: 'House for sale in Zoufftgen (FR)',
      price: '14950000 €',
      bedrooms: 3,
      bathrooms: 2,
      area: 260,
      floor: 4,
      image: 'https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/1cb7d5b28a8339ea70b58018d312103cc74a4e13?placeholderIfAbsent=true',
    },
    {
      title: 'Apartment for sale in Esch-sur-Alzette',
      price: '410000 €',
      bedrooms: 3,
      bathrooms: 2,
      area: 260,
      floor: 4,
      image: 'https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/3ec23e3f19bc87e5d3211818e59b7b736721f94b?placeholderIfAbsent=true',
    },
    {
      title: 'House for sale in Zoufftgen (FR)',
      price: '14950000 €',
      bathrooms: 2,
      image: 'https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/d902e65eef7e3b492c799a1399b3f38ee87fabc0?placeholderIfAbsent=true',
    },
  ];

  return (
    <div className="property-detail-page">
      <Navigation />
      <PropertyTitleBar
        title={propertyData.title}
        address={propertyData.address}
        price={propertyData.price}
        bedrooms={propertyData.bedrooms}
        bathrooms={propertyData.bathrooms}
        area={propertyData.area}
        floor={propertyData.floor}
      />

      <div>
          {/* Slider section */}
          <div className="slider w-full px-5">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide m-auto justify-center">
              {/* Virtual visit/video item */}
              <div className="min-w-[220px] h-[324px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center relative group">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                  alt="Virtual visit"
                  className="w-full h-full object-cover blur-[2px] group-hover:blur-0 transition"
                />
                <button className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/60 transition">
                  <svg width="48" height="48" fill="white" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.4)" />
                    <polygon points="20,16 36,24 20,32" fill="white" />
                  </svg>
                  <span className="text-white mt-2 font-semibold">Virtual visit</span>
                </button>
              </div>
              {/* Image items */}
              <div className="min-w-[220px] h-[324px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                  alt="Property 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-[220px] h-[324px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80"
                  alt="Property 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-[220px] h-[324px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80"
                  alt="Property 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div> 
        </div>
      </div>
      {/* End slider */}
      <div className='bg-[#F9FAFB] py-11'>
           <div className='max-w-[1280px] m-auto px-6 relative'>
                <div className='sm:flex gap-6 justify-end sm:pr-[280px] md:pr-[310px]'>
                  <button className="mb-5 sm:mb-0 w-full sm:w-auto flex items-center justify-center gap-2 rounded-[10px] border border-[#0B0D33] bg-gray-50 px-8 py-3 font-poppins text-base text-[#0B0D33] transition-all hover:bg-white">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM2 16V2H8V16H2ZM16 16H10V9H16V16ZM16 7H10V2H16V7Z" fill="#6B7280"/>
                    </svg>
                    <span>Floor plans</span>
                  </button>
                  <button className="mb-3 sm:mb-0 w-full sm:w-auto flex items-center justify-center gap-2 rounded-[10px] border border-[#0B0D33] bg-gray-50 px-8 py-3 font-poppins text-base text-[#0B0D33] transition-all hover:bg-white">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 0L17.34 0.03L12 2.1L6 0L0.36 1.9C0.15 1.97 0 2.15 0 2.38V17.5C0 17.78 0.22 18 0.5 18L0.66 17.97L6 15.9L12 18L17.64 16.1C17.85 16.03 18 15.85 18 15.62V0.5C18 0.22 17.78 0 17.5 0ZM7 2.47L11 3.87V15.53L7 14.13V2.47ZM2 3.5L5.26091 2.38V14.13L2 15.31V3.5ZM16 14.54L13 15.55V3.86L16 2.7V14.54Z" fill="#6B7280"/>
                    </svg> 
                    <span>Map</span>
                  </button>
                </div>
                <div className='static sm:absolute right-0 bottom-[-44px] bg-white p-3 rounded-[10px] w-full sm:w-[257px]'>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.88814550111!2d6.145712276912192!3d49.562133650924764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954864dafeaba7%3A0xbd8702de0dcb7bd1!2s4%20Op%20de%20Leemen%2C%205846%20Fentange%20Hesperange%2C%20Luxembourg!5e0!3m2!1svi!2s!4v1765783714367!5m2!1svi!2s"
                    width="100%"
                    height="169"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe> 
                </div>
           </div>
      </div>

      <div className="relative -mt-10 z-10 flex w-full flex-col">
        <div className="flex-col-reverse md:flex-row flex w-full items-start gap-10 px-5 py-[60px] pb-[60px] md:pb-[100px] lg:px-[100px] flex-wrap justify-center">
          <div className="flex flex-1 min-w-[240px] max-w-[800px] flex-col">
            <PropertyDescription description={propertyData.description} />
            
            <div className="mt-10 h-px w-full bg-gray-200"></div>
            
            <PropertyCharacteristics characteristics={propertyData.characteristics} />
            
            <div className="mt-10 h-px w-full bg-gray-200"></div>
            
            <PropertyEnergy
              energyPerformance={propertyData.energyPerformance}
              thermicIsolation={propertyData.thermicIsolation}
            />
            
            <div className="mt-10 h-px w-full bg-gray-200"></div>
            
            <PropertyCalculator propertyPrice={14950000} />
          </div>

          <PropertySidebar
            title={propertyData.title}
            address={propertyData.address}
            bedrooms={propertyData.bedrooms}
            bathrooms={propertyData.bathrooms}
            area={propertyData.area}
            floor={propertyData.floor}
          />
        </div>

        <PropertyListings properties={moreListings} />
        
        <Footer />
      </div>
    </div>
  );
};

export default PropertyDetailPage;
