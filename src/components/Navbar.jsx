import React from 'react';
import logo from '../img/964261.png';
import { BsChevronCompactDown } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { BsCart } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className="h-auto w-screen flex items-center bg-white pb-3 shadow-md fixed top-0 z-50">
      <div className="pt-3 px-20 flex items-center gap-1">
        <img src={logo} alt="" className="h-[40px]" />
        <h2 className="text-[20px] font-[500] text-yellow-600">ShopCart</h2>
      </div>
      <ul className="flex gap-10 pt-3 text-[13px] font-medium text-gray-600 duration-300 transition-all ease">
        <li className="flex gap-2 cursor-pointer hover:text-black">
          Categories <BsChevronCompactDown className="mt-[4px]" />
        </li>
        <li className="cursor-pointer hover:text-black duration-300 transition-all ease">
          Deals
        </li>
        <li className="cursor-pointer hover:text-black duration-300 transition-all ease">
          What's New
        </li>
        <li className="cursor-pointer hover:text-black duration-300 transition-all ease">
          Delivery
        </li>
      </ul>
      <div className="flex ml-10 items-center mt-3  rounded-2xl overflow-hidden bg-orange-50 shadow-md px-3">
        <input
          type="text"
          placeholder="Search Product"
          className="text-[12px] outline-none border-none py-[7px] px-2  bg-transparent placeholder:text-gray-500"
        />
        <BsSearch className="text-gray-500 text-[14px] cursor-pointer" />
      </div>
      <div className="flex ml-10 gap-2 items-center mt-3 text-gray-600 hover:text-black cursor-pointer duration-300 transition-all ease">
        <VscAccount className="text-[23px]" />
        <p className="text-[12px] font-medium mt-[5px]">Account</p>
      </div>
      <div className="flex ml-10 gap-2 items-center mt-3 text-gray-600 hover:text-black cursor-pointer duration-300 transition-all ease">
        <BsCart className="text-[20px]" />
        <p className="text-[12px] font-medium mt-[5px]">Cart</p>
      </div>
    </div>
  );
};

export default Navbar;
