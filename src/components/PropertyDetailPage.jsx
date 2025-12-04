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
      
      <img
        src={propertyData.image}
        alt={propertyData.title}
        className="w-full object-cover"
        style={{ aspectRatio: '2.83' }}
      />

      <div className="relative -mt-10 z-10 flex w-full flex-col">
        <div className="flex w-full items-start gap-10 px-5 py-[60px] pb-[100px] lg:px-[100px] flex-wrap justify-center">
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
