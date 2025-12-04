import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navigation from './Navigation';

const EstimateResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData || {};

  const estimationData = {
    askedPrices: {
      min: '1 208 236 €',
      average: '1 473 459 €',
      max: '1 738 681 €'
    },
    notaryPrices: {
      min: '1 208 236 €',
      average: '1 473 459 €',
      max: '1 738 681 €'
    },
    mixedValues: {
      min: '1 208 236 €',
      average: '1 473 459 €',
      max: '1 738 681 €'
    }
  };

  const handleNewEstimation = () => {
    navigate('/estimate');
  };

  const handleRequestAgent = () => {
    navigate('/contact');
  };

  return (
    <div className="estimate-result-page min-h-screen bg-white">
      <Navigation />
      
      <div className="flex w-full flex-wrap font-poppins">
        <div className="flex flex-1 flex-col justify-center border-b border-gray-200 bg-white px-6 py-15 md:px-16 lg:px-25">
          <div className="w-full rounded-lg bg-white">
            <div className="flex w-full flex-col justify-start font-poppins">
              <div className="flex w-full items-center gap-2.5">
                <h2 className="text-lg font-bold leading-tight text-black">
                  Result of your estimation
                </h2>
              </div>
            </div>

            <div className="mt-6 flex w-full flex-col justify-start">
              <div className="flex w-full flex-col justify-start leading-none">
                <div className="flex w-full flex-wrap items-start gap-2.5 justify-start">
                  <div className="flex min-w-[240px] flex-1 flex-col justify-start rounded-lg border border-gray-200 bg-gray-50 px-4 py-4 shadow-sm">
                    <div className="text-center font-poppins text-sm font-semibold text-black">
                      Asked prices on the market
                    </div>
                    <div className="mt-6 flex w-full items-end justify-between">
                      <div className="flex flex-col justify-start">
                        <div className="font-poppins text-xs font-semibold capitalize text-gray-400">Min</div>
                        <div className="mt-1.5 font-opensans text-xs font-bold text-gray-400">
                          {estimationData.askedPrices.min}
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-start text-center">
                        <div className="font-poppins text-xs font-semibold capitalize text-gray-400">Average</div>
                        <div className="mt-1.5 self-center font-opensans text-sm font-bold text-black">
                          {estimationData.askedPrices.average}
                        </div>
                      </div>
                      <div className="flex flex-col justify-start text-right">
                        <div className="font-poppins text-xs font-semibold capitalize text-gray-400">Max</div>
                        <div className="mt-1.5 self-end font-opensans text-xs font-bold text-gray-400">
                          {estimationData.askedPrices.max}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex min-w-[240px] flex-1 flex-col justify-start rounded-lg border border-gray-200 bg-white px-4 py-4 shadow-sm">
                    <div className="text-center font-poppins text-sm font-semibold text-black">
                      Prices paid at notary
                    </div>
                    <div className="mt-6 flex w-full items-end justify-between">
                      <div className="flex flex-1 flex-col justify-start">
                        <div className="font-poppins text-xs font-semibold capitalize text-gray-400">Min</div>
                        <div className="mt-1.5 font-opensans text-xs font-bold text-gray-400">
                          {estimationData.notaryPrices.min}
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-start text-center">
                        <div className="font-poppins text-xs font-semibold capitalize text-gray-400">Average</div>
                        <div className="mt-1.5 self-center font-opensans text-sm font-bold text-black">
                          {estimationData.notaryPrices.average}
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-start text-right">
                        <div className="font-poppins text-xs font-semibold capitalize text-gray-400">Max</div>
                        <div className="mt-1.5 self-end font-opensans text-xs font-bold text-gray-400">
                          {estimationData.notaryPrices.max}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 flex w-full flex-col justify-start overflow-hidden rounded-lg px-6 py-6 shadow-sm"
                  style={{
                    background: 'linear-gradient(270deg, #85053b 0%, #750836 100%)'
                  }}>
                  <div className="text-center font-poppins text-sm font-semibold text-white">
                    Mixed values
                  </div>
                  <div className="mt-6 flex w-full flex-wrap items-end justify-between">
                    <div className="flex flex-col justify-start" style={{ width: '184px' }}>
                      <div className="font-poppins text-xs font-semibold capitalize text-white opacity-60">Min</div>
                      <div className="mt-1.5 font-opensans text-base font-bold text-white opacity-70">
                        {estimationData.mixedValues.min}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-start text-center">
                      <div className="font-poppins text-xs font-semibold capitalize text-white opacity-60">Average</div>
                      <div className="mt-1.5 self-center font-opensans text-xl font-bold text-white">
                        {estimationData.mixedValues.average}
                      </div>
                    </div>
                    <div className="flex flex-col justify-start text-right" style={{ width: '184px' }}>
                      <div className="font-poppins text-xs font-semibold capitalize text-white opacity-60">Max</div>
                      <div className="mt-1.5 self-end font-opensans text-base font-bold text-white opacity-70">
                        {estimationData.mixedValues.max}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3.5 flex min-h-[138px] w-full flex-col justify-start rounded-lg border border-gray-200 bg-gray-50 px-6 py-6">
                <div className="self-center text-center font-poppins text-lg font-bold leading-tight text-black">
                  Summary
                </div>
                <div className="mt-6 flex w-full flex-wrap items-start gap-5 justify-start">
                  <div className="flex flex-1 items-start gap-3 justify-start">
                    <div className="flex w-full flex-1 flex-col justify-start">
                      <div className="font-poppins text-sm font-semibold leading-none text-gray-400">Property type</div>
                      <div className="mt-1.5 font-opensans text-[15px] font-bold leading-snug text-black">
                        {formData.propertyType || '4'}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-start gap-3 justify-start">
                    <div className="flex w-full flex-1 flex-col justify-start">
                      <div className="font-poppins text-sm font-semibold leading-none text-gray-400">Commune</div>
                      <div className="mt-1.5 font-opensans text-[15px] font-bold leading-snug text-black">
                        {formData.commune || '2'}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-start gap-3 justify-start">
                    <div className="flex w-full flex-1 flex-col justify-start">
                      <div className="font-poppins text-sm font-semibold leading-none text-gray-400">Surface</div>
                      <div className="mt-1.5 font-opensans text-[15px] font-bold leading-snug text-black">
                        {formData.livingSurface ? `${formData.livingSurface} m²` : 'Yes'}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-start gap-3 justify-start">
                    <div className="flex w-full flex-1 flex-col justify-start">
                      <div className="font-poppins text-sm font-semibold leading-none text-gray-400">Construction year</div>
                      <div className="mt-1.5 font-opensans text-[15px] font-bold leading-snug text-black">
                        {formData.constructionYear || '4'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex w-full flex-col justify-start text-center font-poppins text-base font-normal leading-relaxed">
              <div className="flex min-h-px w-full bg-gray-200"></div>
              <div className="mt-5 flex w-full items-center justify-between gap-10 flex-wrap">
                <button
                  onClick={handleNewEstimation}
                  className="flex items-center justify-center gap-4 rounded-lg border border-primary bg-primary px-8 py-3 text-white transition-opacity hover:opacity-90"
                >
                  <div>New estimation</div>
                </button>
                <button
                  onClick={handleRequestAgent}
                  className="flex items-center justify-center gap-4 rounded-lg border-2 border-primary bg-transparent px-8 py-3 text-primary transition-opacity hover:opacity-90"
                >
                  <div>Request an agent</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <img
          loading="lazy"
          srcSet="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=100 100w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=200 200w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=400 400w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=800 800w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=1200 1200w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=1600 1600w, https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true&width=2000 2000w"
          src="https://api.builder.io/api/v1/image/assets/89a509c6608f4310bc23f3bed697f65c/64917bdc9d2ee9a2ebc3a11f6ef2d54c3b808525?placeholderIfAbsent=true"
          alt="Property visualization"
          className="min-w-[240px] flex-1 object-cover"
          style={{
            flexBasis: '200px',
            maxWidth: '600px',
            aspectRatio: '0.86'
          }}
        />
      </div>
    </div>
  );
};

export default EstimateResultPage;
