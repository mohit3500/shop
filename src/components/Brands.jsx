import React from 'react';
import data from '../data.json';

const Brands = () => {
  return (
    <div className="w-screen h-auto px-14 mb-20 ">
      <div className="mt-5 text-[20px] font-semibold mb-10">
        Choose By Brand
      </div>
      <div className="w-full h-auto grid grid-cols-4 gap-10">
        {data.brands.map((brand) => (
          <div className="w-full h-auto drop-shadow-md p-2 rounded-lg border-[1.5px] border-gray-100 hover:border-black cursor-pointer duration-300 transition-all ease bg-gray-50" key={brand.id}>
            <div className="flex">
              <img
                src={brand.pic}
                alt=""
                className="h-[50px] w-[50px] bg-cover rounded-full border-[1px] "
              />
              <div className="pl-5 flex flex-col justify-center gap-1">
                <div className="text-[14px] font-medium">{brand.title}</div>
                <div className="text-[11px]">{brand.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
