import React from 'react';
import img from '../img/Screenshot_2023-04-28_222806-removebg-preview.png';

const BannerProduct = () => {
  return (
    <div className="py-5 px-14">
      <div className="bg-orange-100 flex justify-between">
        <div>
          <div className="pt-10 px-20 text-[25px] font-semibold w-[40vw] text-yellow-900">
            Grab Upto 50% On Selected Headphone
          </div>
          <button className="py-2 px-6 bg-yellow-800 rounded-3xl mx-20 text-white text-[13px] mb-10 mt-5 hover:bg-yellow-900 duration-500 transition-all ease">
            Buy Now
          </button>
        </div>

        <img src={img} alt="" className='h-[210px] mr-40'/>
      </div>
    </div>
  );
};

export default BannerProduct;
