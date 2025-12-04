import React, { useState } from 'react';

const PropertyCalculator = ({ propertyPrice }) => {
  const [price, setPrice] = useState(propertyPrice || 525000);
  const [downPayment, setDownPayment] = useState(105000);
  const [interestRate, setInterestRate] = useState(4.0);
  const [loanTerm, setLoanTerm] = useState(30);

  const loanAmount = price - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyInstalment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  const estimatedIncome = monthlyInstalment * 2.24;

  return (
    <div className="mt-10 w-full">
      <h2 className="font-poppins text-lg font-bold leading-[1.33] text-black">
        Range of average prices advertised per square meter of existing houses in Differdange
      </h2>

      <div className="mt-4 flex gap-5 flex-wrap">
        <div className="flex flex-1 min-w-[240px] flex-col rounded-lg bg-white">
          <div className="rounded-lg bg-gray-50 px-3.5 py-2.5 font-poppins text-xs font-normal leading-4 text-[#737373]">
            Utilize our mortgage calculator for a hassle-free way to predict your monthly mortgage payments. This user-friendly tool enables you to swiftly and effortlessly simulate your monthly mortgage expenses, taking into account factors such as the property price, your deposit, loan term, and nominal interest rate.
          </div>

          <div className="mt-7 flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="font-poppins text-sm font-semibold leading-[1] text-black">
                Property price
              </label>
              <input
                type="text"
                value={`${price.toLocaleString()} €`}
                onChange={(e) => setPrice(parseInt(e.target.value.replace(/\D/g, '')) || 0)}
                className="mt-2.5 border border-gray-200 px-3.5 py-3 font-poppins text-base font-normal leading-[1.63] text-gray-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-poppins text-sm font-semibold leading-[1] text-black">
                Down payment
              </label>
              <input
                type="text"
                value={`${downPayment.toLocaleString()} €`}
                onChange={(e) => setDownPayment(parseInt(e.target.value.replace(/\D/g, '')) || 0)}
                className="mt-2.5 border border-gray-200 px-3.5 py-3 font-poppins text-base font-normal leading-[1.63] text-gray-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-poppins text-sm font-semibold leading-[1] text-black">
                Nominal interest rate
              </label>
              <div className="mt-2.5 font-poppins text-base font-normal leading-[1.63] text-black">
                {interestRate.toFixed(2)} %
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="mt-3.5 w-full"
                style={{
                  background: `linear-gradient(to right, #85053b ${interestRate * 10}%, #e5e7eb ${interestRate * 10}%)`
                }}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-poppins text-sm font-semibold leading-[1] text-black">
                Term of the loan
              </label>
              <div className="mt-2.5 font-poppins text-base font-normal leading-[1.63] text-black">
                {loanTerm} years
              </div>
              <input
                type="range"
                min="5"
                max="40"
                step="1"
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                className="mt-3.5 w-full"
                style={{
                  background: `linear-gradient(to right, #85053b ${((loanTerm - 5) / 35) * 100}%, #e5e7eb ${((loanTerm - 5) / 35) * 100}%)`
                }}
              />
            </div>
          </div>

          <div className="mt-7 font-poppins text-xs font-normal leading-4 text-[#737373]">
            * Please note that our simulation is an estimate only and does not constitute a finance offer. However, it can give you an idea of your monthly repayments and help you make an informed decision about your finance project.
          </div>
        </div>

        <div className="flex min-w-[240px] max-w-[300px] flex-1 flex-col rounded-lg bg-white">
          <div className="flex flex-col">
            <h3 className="font-poppins text-lg font-bold leading-[1.33] text-black">
              Totals
            </h3>
            <div className="mt-2.5 font-poppins text-sm font-semibold leading-[1] text-gray-400 capitalize">
              Monthly Instalment
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2.5">
            <div className="flex flex-col gap-2.5 rounded-lg border border-gray-200 p-2.5">
              <div className="font-poppins text-sm font-semibold leading-[1] text-gray-400">
                Loan amount
              </div>
              <div className="font-poppins text-lg font-bold leading-[1.33] text-black">
                {loanAmount.toLocaleString()} €
              </div>
            </div>

            <div className="flex flex-col gap-2.5 rounded-lg border border-gray-200 p-2.5">
              <div className="font-poppins text-sm font-semibold leading-[1] text-gray-400">
                Down payment
              </div>
              <div className="font-poppins text-lg font-bold leading-[1.33] text-black">
                {downPayment.toLocaleString()} €
              </div>
            </div>

            <div className="flex flex-col gap-2.5 rounded-lg border border-gray-200 p-2.5">
              <div className="font-poppins text-sm font-semibold leading-[1] text-gray-400">
                Nominal interest rate
              </div>
              <div className="font-poppins text-lg font-bold leading-[1.33] text-black">
                {interestRate.toFixed(2)} %
              </div>
            </div>

            <div className="flex flex-col gap-2.5 rounded-lg border border-gray-200 p-2.5">
              <div className="font-poppins text-sm font-semibold leading-[1] text-gray-400">
                Monthly Instalment
              </div>
              <div className="font-poppins text-lg font-bold leading-[1.33] text-black">
                {Math.round(monthlyInstalment).toLocaleString()} €
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2.5 rounded-lg border border-gray-200 bg-gray-50 px-5 py-3.5">
            <div className="flex-1 font-poppins text-sm font-normal leading-[22px] text-[#374151]">
              Estimated monthly income to acquire this property:
            </div>
            <div className="font-poppins text-lg font-bold leading-[1.33] text-black text-right">
              {Math.round(estimatedIncome).toLocaleString()} €
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCalculator;
