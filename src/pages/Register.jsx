import React, { useState } from 'react';
import back from '../img/back.png';
import { BiShow } from 'react-icons/bi';
import { BiHide } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

const Register = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="h-auto w-screen bg-[#f5f2ea] relative overflow-hidden">
      <img
        src={back}
        alt=""
        className="h-[90vh] flex absolute top-16 left-0 right-0 m-auto z-0"
      />
      <div className=" flex items-center justify-center h-screen w-screen z-10 relative">
        <div className="h-[80vh] w-[30vw] bg-white rounded-3xl shadow-md ">
          <div className="h-full w-full p-8 flex flex-col">
            <h className="text-[22px] font-semibold text-center">
              User Registration
            </h>
            <p className="text-[14px] p-4 font-medium px-8 text-center tracking-[0.7px]">
              Hey,Enter your details to get register for your account
            </p>

            <div className="w-full h-auto pt-8 overflow-hidden flex flex-col gap-3">
              <div className="w-full h-auto text-[12px] border-gray-300 border-[1px] rounded-md flex items-center justify">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="py-2 w-full px-4 outline-none bg-transparent"
                />
              </div>
              <div className="w-full h-auto text-[12px] border-gray-300 border-[1px] rounded-md flex items-center justify">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="py-2 w-full px-4 outline-none bg-transparent"
                />
              </div>
              <div className="w-full h-auto text-[12px] border-gray-300 border-[1px] rounded-md flex items-center justify-between">
                {show ? (
                  <>
                    <input
                      type="text"
                      placeholder="Passcode"
                      className="py-2 px-4 outline-none bg-transparent w-full"
                    />
                  </>
                ) : (
                  <>
                    <input
                      type="password"
                      placeholder="Passcode"
                      className="py-2 px-4 outline-none bg-transparent w-full"
                    />
                  </>
                )}
                {show ? (
                  <>
                    <BiShow
                      className=" cursor-pointer mr-3 text-[17px] text-gray-500"
                      onClick={() => setShow(!show)}
                    />
                  </>
                ) : (
                  <>
                    <BiHide
                      className=" cursor-pointer mr-3 text-[17px] text-gray-500"
                      onClick={() => setShow(!show)}
                    />
                  </>
                )}
              </div>
              <div className=" flex items-center gap-4 my-2">
                <CgProfile className="text-[30px] mt-1 ml-1 text-gray-500" />
                <input
                  type="file"
                  className="text-[12px] font-medium shadow-md py-2 px-3 border-[1px] rounded-md cursor-pointer block w-full text-sm text-orange-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 hover:file:bg-orange-100"
                />
              </div>
            </div>
            <button
              type="submit"
              className="my-4 py-3 mx-2 rounded-md bg-[#ecc88b] text-center cursor-pointer text-[12px] font-semibold shadow-md"
            >
              Register
            </button>
            <p className="text-[11px] mt-3 text-center">
              Already have account?{' '}
              <b className="cursor-pointer">Sign In Now</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
