import React, { useState } from 'react';
import data from '../data.json';

const Products = () => {
  const [category, setCategory] = useState('Gadgets');
  const handleClick = (e) => {
    setCategory(e.target.textContent);
  };
  console.log(category)
  return (
    <div className="w-screen h-auto px-14 mb-20">
      <div className="mt-5 text-[20px] font-semibold mb-7">
        Todays Best Deals for You!
      </div>
      <div className="flex gap-5 mb-10">
        <button
          className="text-[12px] border-[1.5px] shadow-md duration-300 transition-all ease py-2 px-4 rounded-3xl hover:bg-yellow-700 hover:text-white hover:border-yellow-700 focus:bg-yellow-700 focus:text-white focus:border-yellow-700"
          value={category}
          onClick={handleClick}
        >
          Gadgets
        </button>
        <button
          className="text-[12px] border-[1.5px] shadow-md duration-300 transition-all ease py-2 px-4 rounded-3xl hover:bg-yellow-700 hover:text-white hover:border-yellow-700 focus:bg-yellow-700 focus:text-white focus:border-yellow-700
          "
          value={category}
          onClick={handleClick}
        >
          Fashion
        </button>
        <button
          className="text-[12px] border-[1.5px] shadow-md duration-300 transition-all ease py-2 px-4 rounded-3xl hover:bg-yellow-700 hover:text-white hover:border-yellow-700 focus:bg-yellow-700 focus:text-white focus:border-yellow-700"
          value={category}
          onClick={handleClick}
        >
          Toys
        </button>
        <button
          className="text-[12px] border-[1.5px] shadow-md duration-300 transition-all ease py-2 px-4 rounded-3xl hover:bg-yellow-700 hover:text-white hover:border-yellow-700 focus:bg-yellow-700 focus:text-white focus:border-yellow-700"
          value={category}
          onClick={handleClick}
        >
          Education
        </button>
        <button
          className="text-[12px] border-[1.5px] shadow-md duration-300 transition-all ease py-2 px-4 rounded-3xl hover:bg-yellow-700 hover:text-white hover:border-yellow-700 focus:bg-yellow-700 focus:text-white focus:border-yellow-700"
          value={category}
          onClick={handleClick}
        >
          Beauty
        </button>
        <button
          className="text-[12px] border-[1.5px] shadow-md duration-300 transition-all ease py-2 px-4 rounded-3xl hover:bg-yellow-700 hover:text-white hover:border-yellow-700 focus:bg-yellow-700 focus:text-white focus:border-yellow-700"
          value={category}
          onClick={handleClick}
        >
          Travel
        </button>
        <button
          className="text-[12px] border-[1.5px] shadow-md duration-300 transition-all ease py-2 px-4 rounded-3xl hover:bg-yellow-700 hover:text-white hover:border-yellow-700 focus:bg-yellow-700 focus:text-white focus:border-yellow-700"
          value={category}
          onClick={handleClick}
        >
          Fitness
        </button>
        <button
          className="text-[12px] border-[1.5px] shadow-md duration-300 transition-all ease py-2 px-4 rounded-3xl hover:bg-yellow-700 hover:text-white hover:border-yellow-700 focus:bg-yellow-700 focus:text-white focus:border-yellow-700"
          value={category}
          onClick={handleClick}
        >
          Furniture
        </button>
        <button
          className="text-[12px] border-[1.5px] shadow-md duration-300 transition-all ease py-2 px-4 rounded-3xl hover:bg-yellow-700 hover:text-white hover:border-yellow-700 focus:bg-yellow-700 focus:text-white focus:border-yellow-700"
          value={category}
          onClick={handleClick}
        >
          Sneakers
        </button>
      </div>
      <div className="w-full h-auto grid grid-cols-4 gap-5 ">
        {category === 'Gadgets' &&  data.Gadgets.map((pro) => (
          <>
            <div
              key={pro.id}
              className="flex flex-col gap-3 shadow-lg
                rounded-xl 
                overflow-hidden"
            >
              <div className="flex w-[280px] h-[250px] bg-red-300 rounded-xl cursor-pointer">
                <img src={pro.pic} alt="" className="w-full bg-cover" />
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="px-2 text-[15px] font-medium tracking-[0.5px]">
                  {pro.title}
                </div>
                <div className="px-2 text-[13px] font-medium">
                  <b>$</b>
                  {pro.price}
                </div>
              </div>
              <button className="border-orange-500 p-2 w-[150px] border-[1.5px] rounded-2xl font-medium text-[15px] mt-2 mx-2 my-5">
                Add to Cart
              </button>
            </div>
          </>
        ))}
        {category === 'Fashion' &&  data.Fashion.map((pro) => (
          <>
            <div
              key={pro.id}
              className="flex flex-col gap-3 shadow-lg
                rounded-xl 
                overflow-hidden"
            >
              <div className="flex w-[280px] h-[250px] bg-red-300 rounded-xl cursor-pointer">
                <img src={pro.pic} alt="" className="w-full bg-cover" />
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="px-2 text-[15px] font-medium tracking-[0.5px]">
                  {pro.title}
                </div>
                <div className="px-2 text-[13px] font-medium">
                  <b>$</b>
                  {pro.price}
                </div>
              </div>
              <button className="border-orange-500 p-2 w-[150px] border-[1.5px] rounded-2xl font-medium text-[15px] mt-2 mx-2 my-5">
                Add to Cart
              </button>
            </div>
          </>
        ))}
        {category === 'Toys' &&  data.Toys.map((pro) => (
          <>
            <div
              key={pro.id}
              className="flex flex-col gap-3 shadow-lg
                rounded-xl 
                overflow-hidden"
            >
              <div className="flex w-[280px] h-[250px] bg-red-300 rounded-xl cursor-pointer">
                <img src={pro.pic} alt="" className="w-full bg-cover" />
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="px-2 text-[15px] font-medium tracking-[0.5px]">
                  {pro.title}
                </div>
                <div className="px-2 text-[13px] font-medium">
                  <b>$</b>
                  {pro.price}
                </div>
              </div>
              <button className="border-orange-500 p-2 w-[150px] border-[1.5px] rounded-2xl font-medium text-[15px] mt-2 mx-2 my-5">
                Add to Cart
              </button>
            </div>
          </>
        ))}
        {category === 'Education' &&  data.Education.map((pro) => (
          <>
            <div
              key={pro.id}
              className="flex flex-col gap-3 shadow-lg
                rounded-xl 
                overflow-hidden"
            >
              <div className="flex w-[280px] h-[250px] bg-red-300 rounded-xl cursor-pointer">
                <img src={pro.pic} alt="" className="w-full bg-cover" />
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="px-2 text-[15px] font-medium tracking-[0.5px]">
                  {pro.title}
                </div>
                <div className="px-2 text-[13px] font-medium">
                  <b>$</b>
                  {pro.price}
                </div>
              </div>
              <button className="border-orange-500 p-2 w-[150px] border-[1.5px] rounded-2xl font-medium text-[15px] mt-2 mx-2 my-5">
                Add to Cart
              </button>
            </div>
          </>
        ))}
        {category === 'Beauty' &&  data.Beauty.map((pro) => (
          <>
            <div
              key={pro.id}
              className="flex flex-col gap-3 shadow-lg
                rounded-xl 
                overflow-hidden"
            >
              <div className="flex w-[280px] h-[250px] bg-red-300 rounded-xl cursor-pointer">
                <img src={pro.pic} alt="" className="w-full bg-cover" />
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="px-2 text-[15px] font-medium tracking-[0.5px]">
                  {pro.title}
                </div>
                <div className="px-2 text-[13px] font-medium">
                  <b>$</b>
                  {pro.price}
                </div>
              </div>
              <button className="border-orange-500 p-2 w-[150px] border-[1.5px] rounded-2xl font-medium text-[15px] mt-2 mx-2 my-5">
                Add to Cart
              </button>
            </div>
          </>
        ))}
        {category === 'Travel' &&  data.Travel.map((pro) => (
          <>
            <div
              key={pro.id}
              className="flex flex-col gap-3 shadow-lg
                rounded-xl 
                overflow-hidden"
            >
              <div className="flex w-[280px] h-[250px] bg-red-300 rounded-xl cursor-pointer">
                <img src={pro.pic} alt="" className="w-full bg-cover" />
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="px-2 text-[15px] font-medium tracking-[0.5px]">
                  {pro.title}
                </div>
                <div className="px-2 text-[13px] font-medium">
                  <b>$</b>
                  {pro.price}
                </div>
              </div>
              <button className="border-orange-500 p-2 w-[150px] border-[1.5px] rounded-2xl font-medium text-[15px] mt-2 mx-2 my-5">
                Add to Cart
              </button>
            </div>
          </>
        ))}
        {category === 'Fitness' &&  data.Fitness.map((pro) => (
          <>
            <div
              key={pro.id}
              className="flex flex-col gap-3 shadow-lg
                rounded-xl 
                overflow-hidden"
            >
              <div className="flex w-[280px] h-[250px] bg-red-300 rounded-xl cursor-pointer">
                <img src={pro.pic} alt="" className="w-full bg-cover" />
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="px-2 text-[15px] font-medium tracking-[0.5px]">
                  {pro.title}
                </div>
                <div className="px-2 text-[13px] font-medium">
                  <b>$</b>
                  {pro.price}
                </div>
              </div>
              <button className="border-orange-500 p-2 w-[150px] border-[1.5px] rounded-2xl font-medium text-[15px] mt-2 mx-2 my-5">
                Add to Cart
              </button>
            </div>
          </>
        ))}
        {category === 'Furniture' &&  data.Furniture.map((pro) => (
          <>
            <div
              key={pro.id}
              className="flex flex-col gap-3 shadow-lg
                rounded-xl 
                overflow-hidden"
            >
              <div className="flex w-[280px] h-[250px] bg-red-300 rounded-xl cursor-pointer">
                <img src={pro.pic} alt="" className="w-full bg-cover" />
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="px-2 text-[15px] font-medium tracking-[0.5px]">
                  {pro.title}
                </div>
                <div className="px-2 text-[13px] font-medium">
                  <b>$</b>
                  {pro.price}
                </div>
              </div>
              <button className="border-orange-500 p-2 w-[150px] border-[1.5px] rounded-2xl font-medium text-[15px] mt-2 mx-2 my-5">
                Add to Cart
              </button>
            </div>
          </>
        ))}
        {category === 'Sneakers' &&  data.Sneakers.map((pro) => (
          <>
            <div
              key={pro.id}
              className="flex flex-col gap-3 shadow-lg
                rounded-xl 
                overflow-hidden"
            >
              <div className="flex w-[280px] h-[250px] bg-white rounded-xl cursor-pointer">
                <img src={pro.pic} alt="" className="w-full bg-cover h-[150px] mt-16" />
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="px-2 text-[15px] font-medium tracking-[0.5px]">
                  {pro.title}
                </div>
                <div className="px-2 text-[13px] font-medium">
                  <b>$</b>
                  {pro.price}
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
  );
};

export default Products;
