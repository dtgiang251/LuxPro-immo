import React from 'react';

const PropertyCharacteristics = ({ characteristics }) => {
  const rows = [];
  for (let i = 0; i < characteristics.length; i += 3) {
    rows.push(characteristics.slice(i, i + 3));
  }

  return (
    <div className="mt-10 w-full rounded-lg">
      <h2 className="font-poppins text-lg font-bold leading-[1.33] text-black">
        Characteristics
      </h2>
      <div className="mt-5 flex flex-col gap-5">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-5 flex-wrap">
            {row.map((item, index) => (
              <div key={index} className="flex flex-1 min-w-[200px] flex-col">
                <div className="font-poppins text-sm font-semibold leading-[1] text-gray-400">
                  {item.label}
                </div>
                <div className="mt-1.5 font-opensans text-[15px] font-bold leading-[1.47] text-black">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCharacteristics;
