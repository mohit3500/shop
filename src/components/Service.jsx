import React from 'react';
import data from '../data.json';

const Service = () => {
  return (
    <div className="w-screen h-auto px-14 mb-20">
      <div className="mt-5 text-[20px] font-semibold mb-10">
        Services To Help You Shop
      </div>
      <div className="grid grid-cols-3 gap-7">
        {data.services.map((ser) => (
          <div className="overflow-hidden rounded-xl h-[55vh] relative cursor-pointer shadow-lg bg-slate-100">
            <div className="text-[20px] px-7 w-[70%] pt-7 font-semibold">{ser.title}</div>
            <div className="text-[13px] px-7 pt-3 w-[70%] font-medium ">{ser.desc}</div>
            <img
              src={ser.pic}
              alt=""
              className="h-[175px] w-full object-cover absolute bottom-0 hover:scale-[1.05] duration-500 transition-all ease"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
