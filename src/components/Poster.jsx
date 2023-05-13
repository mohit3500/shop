import React from 'react';
import img from '../img/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg';

const Poster = () => {
  return (
    <div className="w-screen h-[500px]overflow-hidden mb-20 relative overflow-x-hidden">
      <img
        src={img}
        alt=""
        className="w-screen h-[500px] bg-cover hover:scale-[1.05] duration-700 transition-all ease"
      />
      <div className="absolute top-28 h-[300px] bg-yellow-700 right-40 w-[28vw] flex flex-col gap-2 p-10 shadow-md">
        <h1 className="text-white text-[35px] font-semibold tracking-[0.5px]">
          Get 5% Cash Back On $200
        </h1>
        <p className="text-white text-[14px] tracking-[0.5px]">
          Shopping is a bit of a relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>
        <button className="text-white border-[1.5px] p-2 rounded-3xl w-[10vw] text-[13px] mt-2 duration-500 transition-all ease hover:border-black tracking-[0.5px]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Poster;
