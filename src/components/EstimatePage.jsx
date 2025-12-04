import React, { useState } from 'react';
import Navigation from './Navigation';
import EstimateStepper from './EstimateStepper';
import EstimateStep1 from './EstimateStep1';

const EstimatePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: 'apartment',
    propertySubtype: '',
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
            </div>
          </div>
        </div>

        <img
          loading="lazy"
          srcSet="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/74e02fff4d85c572f3d609494b5884936df5dee7?placeholderIfAbsent=true&width=100 100w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/74e02fff4d85c572f3d609494b5884936df5dee7?placeholderIfAbsent=true&width=200 200w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/74e02fff4d85c572f3d609494b5884936df5dee7?placeholderIfAbsent=true&width=400 400w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/74e02fff4d85c572f3d609494b5884936df5dee7?placeholderIfAbsent=true&width=800 800w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/74e02fff4d85c572f3d609494b5884936df5dee7?placeholderIfAbsent=true&width=1200 1200w"
          src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/74e02fff4d85c572f3d609494b5884936df5dee7?placeholderIfAbsent=true"
          alt="Property visualization"
          className="min-w-[240px] flex-1 object-cover"
          style={{ flexBasis: '200px', maxWidth: '600px', aspectRatio: '0.82' }}
        />
      </div>
    </div>
  );
};

export default EstimatePage;
