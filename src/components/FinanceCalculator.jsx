import React, { useState, useEffect } from 'react';

const FinanceCalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState(525000);
  const [downPayment, setDownPayment] = useState(105000);
  const [interestRate, setInterestRate] = useState(4.0);
  const [loanTerm, setLoanTerm] = useState(30);

  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [estimatedIncome, setEstimatedIncome] = useState(0);

  useEffect(() => {
    const loan = propertyPrice - downPayment;
    setLoanAmount(loan);

    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    let monthly = 0;
    if (monthlyRate > 0) {
      monthly = loan * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    } else {
      monthly = loan / numberOfPayments;
    }
    
    setMonthlyPayment(monthly);
    setEstimatedIncome(monthly * 2.24);
  }, [propertyPrice, downPayment, interestRate, loanTerm]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('de-DE', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value) + ' €';
  };

  return (
    <div className="flex flex-col items-start gap-5 self-stretch bg-gray-50 py-14 md:py-20 lg:px-25">
      <div className="px-6 max-w-[1280px] m-auto flex flex-col lg:flex-row items-start gap-5 self-stretch">
        <div className="flex flex-col items-start gap-4 flex-1 rounded-lg bg-white p-6">
          <h2 className="self-stretch text-center text-gray-900 font-poppins text-[38px] font-bold leading-[44px]">
            Calculator simulator
          </h2>
          
          <div className="flex flex-col items-start gap-7 self-stretch">
            <div className="flex flex-col items-start gap-7 self-stretch bg-gray-50 rounded-lg p-4">
              <p className="flex-1 text-center text-gray-600 font-poppins text-xs leading-4">
                Utilize our mortgage calculator for a hassle-free way to predict your monthly mortgage payments. 
                This user-friendly tool enables you to swiftly and effortlessly simulate your monthly mortgage expenses, 
                taking into account factors such as the property price, your deposit, loan term, and nominal interest rate.
              </p>
            </div>

            <div className="flex flex-col items-start gap-6 self-stretch">
              <div className="flex flex-col items-start gap-2.5 self-stretch">
                <label className="text-black font-poppins text-sm font-semibold leading-[14px]">
                  Property price
                </label>
                <input
                  type="number"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="flex justify-between items-center self-stretch border border-gray-200 px-3.5 py-3 text-gray-900 font-poppins text-base leading-[26px]"
                />
              </div>

              <div className="flex flex-col items-start gap-2.5 self-stretch">
                <label className="text-black font-poppins text-sm font-semibold leading-[14px]">
                  Down payment
                </label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="flex justify-between items-center self-stretch border border-gray-200 px-3.5 py-3 text-gray-900 font-poppins text-base leading-[26px]"
                />
              </div>

              <div className="flex flex-col items-start gap-2.5 self-stretch">
                <label className="self-stretch text-black font-poppins text-sm font-semibold leading-[14px]">
                  Nominal interest rate
                </label>
                <div className="flex flex-col items-start gap-3.5 self-stretch">
                  <div className="self-stretch text-gray-900 font-poppins text-base leading-[26px]">
                    {interestRate.toFixed(2)} %
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-1 bg-primary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-[0_0_0_3px_#85053B] [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-[0_0_0_3px_#85053B]"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 self-stretch">
                <label className="self-stretch text-black font-poppins text-sm font-semibold leading-[14px]">
                  Term of the loan
                </label>
                <div className="flex flex-col items-start gap-3.5 self-stretch">
                  <div className="self-stretch text-gray-900 font-poppins text-base leading-[26px]">
                    {loanTerm} years
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full h-1 bg-primary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-[0_0_0_3px_#85053B] [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-[0_0_0_3px_#85053B]"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="self-stretch text-gray-600 font-poppins text-xs leading-4">
            * Please note that our simulation is an estimate only and does not constitute a finance offer. 
            However, it can give you an idea of your monthly repayments and help you make an informed decision 
            about your finance project.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 w-full lg:w-[400px] rounded-lg bg-white p-6">
          <div className="flex flex-col items-start gap-2.5 self-stretch">
            <h2 className="self-stretch text-center text-gray-900 font-poppins text-[38px] font-bold leading-[44px]">
              Totals
            </h2>
            <p className="self-stretch text-center text-gray-400 font-poppins text-sm font-semibold leading-[14px]">
              Monthly instalment
            </p>
          </div>

          <div className="flex flex-col items-start gap-2.5 self-stretch">
            <div className="flex flex-col items-start gap-2.5 self-stretch rounded-lg border border-gray-200 p-2.5">
              <p className="self-stretch text-center text-gray-400 font-poppins text-sm font-semibold leading-[14px]">
                Loan amount
              </p>
              <p className="self-stretch text-center text-gray-900 font-poppins text-lg font-bold leading-6">
                {formatCurrency(loanAmount)}
              </p>
            </div>

            <div className="flex flex-col items-start gap-2.5 self-stretch rounded-lg border border-gray-200 p-2.5">
              <p className="self-stretch text-center text-gray-400 font-poppins text-sm font-semibold leading-[14px]">
                Down payment
              </p>
              <p className="self-stretch text-center text-gray-900 font-poppins text-lg font-bold leading-6">
                {formatCurrency(downPayment)}
              </p>
            </div>

            <div className="flex flex-col items-start gap-2.5 self-stretch rounded-lg border border-gray-200 p-2.5">
              <p className="self-stretch text-center text-gray-400 font-poppins text-sm font-semibold leading-[14px]">
                Nominal interest rate
              </p>
              <p className="self-stretch text-center text-gray-900 font-poppins text-lg font-bold leading-6">
                {interestRate.toFixed(2)} %
              </p>
            </div>

            <div className="flex flex-col items-start gap-2.5 self-stretch rounded-lg border border-gray-200 p-2.5">
              <p className="self-stretch text-center text-gray-400 font-poppins text-sm font-semibold leading-[14px]">
                Monthly instalment
              </p>
              <p className="self-stretch text-center text-gray-900 font-poppins text-lg font-bold leading-6">
                {formatCurrency(monthlyPayment)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-stretch rounded-lg border border-gray-200 bg-gray-50 p-3.5">
            <div className="flex flex-col justify-center flex-1 text-gray-700 font-poppins text-sm leading-[22px]">
              Estimated monthly income to acquire this property:
            </div>
            <div className="text-right text-gray-900 font-poppins text-lg font-bold leading-6">
              {formatCurrency(estimatedIncome)}
            </div>
          </div>
        </div>
      </div>

      <p className="px-6 max-w-[1280px] m-auto self-stretch text-gray-600 font-poppins text-xs leading-4">
        Please be aware that our simulation is an estimate and not a formal finance offer. It offers a snapshot 
        of your potential monthly repayments, aiding you in making informed decisions about your financial project.
      </p>
    </div>
  );
};

export default FinanceCalculator;
