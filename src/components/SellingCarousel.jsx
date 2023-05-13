import React from 'react';
import data from '../data.json';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
const SellingCarousel = () => {
    const translateRight = () => {
        document.getElementById('carousel').style.transform =
          'translateX(-97vw)';
        document.getElementById('carousel').style.transition = 'all 1s';
      };
      const translateLeft = () => {
        document.getElementById('carousel').style.transform =
          'translateX(0vw)';
        document.getElementById('carousel').style.transition = 'all 1s';
      };
  return (
    <div className="px-14 w-auto mb-20 overflow-x-hidden">
      <div className="mt-5 text-[20px] font-semibold mb-10">
        Weekly Most Selling Products
      </div>
      <div className="w-auto h-auto mb-10 relative">
        <div
          className="h-[45px] w-[45px] bg-slate-600 absolute top-0 bottom-0  m-auto flex items-center justify-center rounded-full cursor-pointer duration-300 transition-all ease hover:bg-slate-700 group z-10 -left-5"
          onClick={() => translateLeft()}
        >
          <AiOutlineLeft className="text-white text-[17px] group-hover:text-[17.5px] duration-300 transition-all ease" />
        </div>
        <div
          className="h-[45px] w-[45px] bg-slate-600 absolute top-0 bottom-0 -right-5 m-auto flex items-center justify-center rounded-full cursor-pointer duration-300 transition-all ease hover:bg-slate-700 group z-10"
          onClick={() => translateRight()}
        >
          <AiOutlineRight className="text-white text-[17px] group-hover:text-[17.5px] duration-300 transition-all ease" />
        </div>
        <div className="flex w-[200vw] h-auto gap-6 " id="carousel">
          {data.selling.map((car) => (
            <>
              <div key={car.id} className="flex flex-col gap-3 shadow-lg rounded-lg overflow-hidden">
                <div className="flex w-[280px] h-[250px] bg-red-300 rounded-xl cursor-pointer">
                  <img src={car.pic} alt="" className="w-[400px]" />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="px-2 text-[15px] font-medium tracking-[0.5px]">
                    {car.title}
                  </div>
                  <div className="px-2 text-[13px] font-medium">
                    <b>$</b>
                    {car.price}
                  </div>
                </div>
                <button className="border-orange-500 p-2 w-[150px] border-[1.5px] rounded-2xl font-medium text-[15px] mt-2 mx-2 my-5">
                  Add to Cart
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellingCarousel;
