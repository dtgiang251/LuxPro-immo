import React, { useState } from 'react';
import Navigation from './Navigation';
import EstimateStepper from './EstimateStepper';
import EstimateStep1 from './EstimateStep1';
import EstimateStep2 from './EstimateStep2';
import EstimateStep3 from './EstimateStep3';
import EstimateStep4 from './EstimateStep4';
import EstimateStep5 from './EstimateStep5';
import EstimateStep6 from './EstimateStep6';

const EstimatePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: 'apartment',
    propertySubtype: '',
    commune: '',
    exposure: '',
    view: 'Not overlooked',
    environment: 'Not overlooked',
    amenities: {
      commerces: true,
      greenSpaces: false,
      transports: false,
      schools: false
    },
    constructionYear: '',
    livingSurface: '',
    floors: '',
    floor: '',
    rooms: '',
    bathrooms: '',
    propertyStanding: 'Standard',
    propertyCondition: 'Normal',
    generalAmenities: {
      lift: true,
      spa: false,
      smartHome: false,
      alarm: false
    },
    balconyTerraceSurface: '',
    caveSurface: '',
    garageInteriorParking: '',
    exteriorParking: '',
    energyRatingHeating: '',
    energyRatingInsulation: '',
    email: '',
    phoneNumber: '',
    fullName: '',
    acceptedTerms: false
  });

  const steps = [
    { id: 1, name: 'Category' },
    { id: 2, name: 'Location' },
    { id: 3, name: 'General' },
    { id: 4, name: 'Outdoors' },
    { id: 5, name: 'Energy' },
    { id: 6, name: 'Contact' }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Estimate submitted successfully!');
  };

  const updateFormData = (data) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <div className="estimate-page">
      <Navigation />
      
      <div className="flex w-full flex-wrap font-poppins">
        <div className="flex flex-1 flex-col justify-center border-b border-gray-200 bg-white px-6 py-15 md:px-16 lg:px-25">
          <div className="flex w-full max-w-[640px] flex-wrap items-start gap-7">
            <EstimateStepper steps={steps} currentStep={currentStep} />
            
            <div className="flex min-w-[240px] flex-1 items-start gap-7">
              {currentStep === 1 && (
                <EstimateStep1
                  formData={formData}
                  updateFormData={updateFormData}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                  isFirstStep={currentStep === 1}
                />
              )}
              {currentStep === 2 && (
                <EstimateStep2
                  formData={formData}
                  updateFormData={updateFormData}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                />
              )}
              {currentStep === 3 && (
                <EstimateStep3
                  formData={formData}
                  updateFormData={updateFormData}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                />
              )}
              {currentStep === 4 && (
                <EstimateStep4
                  formData={formData}
                  updateFormData={updateFormData}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                />
              )}
              {currentStep === 5 && (
                <EstimateStep5
                  formData={formData}
                  updateFormData={updateFormData}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                />
              )}
              {currentStep === 6 && (
                <EstimateStep6
                  formData={formData}
                  updateFormData={updateFormData}
                  onPrevious={handlePrevious}
                  onSubmit={handleSubmit}
                />
              )}
            </div>
          </div>
        </div>

        <img
          loading="lazy"
          srcSet={
            currentStep === 6
              ? "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=100 100w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=200 200w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=400 400w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=800 800w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=1200 1200w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=1600 1600w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=2000 2000w"
              : currentStep === 5
              ? "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=100 100w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=200 200w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=400 400w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=800 800w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=1200 1200w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=1600 1600w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=2000 2000w"
              : currentStep === 4
              ? "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/d751985f4b1b708ddfb9c5c1130539c73c162b65?placeholderIfAbsent=true&width=100 100w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/d751985f4b1b708ddfb9c5c1130539c73c162b65?placeholderIfAbsent=true&width=200 200w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/d751985f4b1b708ddfb9c5c1130539c73c162b65?placeholderIfAbsent=true&width=400 400w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/d751985f4b1b708ddfb9c5c1130539c73c162b65?placeholderIfAbsent=true&width=800 800w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/d751985f4b1b708ddfb9c5c1130539c73c162b65?placeholderIfAbsent=true&width=1200 1200w"
              : currentStep === 3
              ? "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/7a0b2e981c126e5f71656df2bcde2f859ff851ad?placeholderIfAbsent=true&width=100 100w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/7a0b2e981c126e5f71656df2bcde2f859ff851ad?placeholderIfAbsent=true&width=200 200w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/7a0b2e981c126e5f71656df2bcde2f859ff851ad?placeholderIfAbsent=true&width=400 400w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/7a0b2e981c126e5f71656df2bcde2f859ff851ad?placeholderIfAbsent=true&width=800 800w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/7a0b2e981c126e5f71656df2bcde2f859ff851ad?placeholderIfAbsent=true&width=1200 1200w"
              : currentStep === 2
              ? "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/9fda7dfcab0dfc29c30f473d129432353a309683?placeholderIfAbsent=true&width=100 100w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/9fda7dfcab0dfc29c30f473d129432353a309683?placeholderIfAbsent=true&width=200 200w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/9fda7dfcab0dfc29c30f473d129432353a309683?placeholderIfAbsent=true&width=400 400w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/9fda7dfcab0dfc29c30f473d129432353a309683?placeholderIfAbsent=true&width=800 800w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/9fda7dfcab0dfc29c30f473d129432353a309683?placeholderIfAbsent=true&width=1200 1200w"
              : "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/74e02fff4d85c572f3d609494b5884936df5dee7?placeholderIfAbsent=true&width=100 100w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/74e02fff4d85c572f3d609494b5884936df5dee7?placeholderIfAbsent=true&width=200 200w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/74e02fff4d85c572f3d609494b5884936df5dee7?placeholderIfAbsent=true&width=400 400w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/74e02fff4d85c572f3d609494b5884936df5dee7?placeholderIfAbsent=true&width=800 800w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/74e02fff4d85c572f3d609494b5884936df5dee7?placeholderIfAbsent=true&width=1200 1200w"
          }
          src={
            currentStep === 6
              ? "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true"
              : currentStep === 5
              ? "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true"
              : currentStep === 4
              ? "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/d751985f4b1b708ddfb9c5c1130539c73c162b65?placeholderIfAbsent=true"
              : currentStep === 3
              ? "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/7a0b2e981c126e5f71656df2bcde2f859ff851ad?placeholderIfAbsent=true"
              : currentStep === 2
              ? "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/9fda7dfcab0dfc29c30f473d129432353a309683?placeholderIfAbsent=true"
              : "https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/74e02fff4d85c572f3d609494b5884936df5dee7?placeholderIfAbsent=true"
          }
          alt="Property visualization"
          className="min-w-[240px] flex-1 object-cover"
          style={{
            flexBasis: '200px',
            maxWidth: '600px',
            aspectRatio: currentStep === 6 ? '0.86' : currentStep === 5 ? '0.86' : currentStep === 4 ? '0.86' : currentStep === 3 ? '0.65' : currentStep === 2 ? '0.61' : '0.82'
          }}
        />
      </div>
    </div>
  );
};

export default EstimatePage;
