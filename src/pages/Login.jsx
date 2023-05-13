import React, { useState } from 'react';
import back from '../img/back.png';
import { BiShow } from 'react-icons/bi';
import { BiHide } from 'react-icons/bi';
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
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
            <h className="text-[22px] font-semibold text-center"> User Login</h>
            <p className="text-[14px] p-4 font-medium px-8 text-center tracking-[0.7px]">
              Hey,Enter your details to get sign in to your account
            </p>

            <div className="w-full h-auto pt-8 overflow-hidden flex flex-col gap-3">
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
            </div>
            <p className='text-[12px] font-medium tracking-[0.3px] pt-4 px-2 cursor-pointer ' >Having trouble in sign in?</p>
            <button type='submit' className='my-5 py-3 mx-2 rounded-md bg-[#ecc88b] text-center cursor-pointer text-[12px] font-semibold shadow-md'>
                Sign in
            </button>
            <div className='flex items-center justify-center gap-2 pt-2'>
            <hr className='w-[1.5vw]  bg-black p-[0.4px]'/>
            <p className='text-[12px] font-medium'>Or sign in with</p>
            <hr className='w-[1.5vw]  bg-black p-[0.4px]'/>
            </div>
          <div className='mt-3 mx-3  py-3 px-4 rounded-md flex items-center gap-3 shadow-md cursor-pointer'>
            <FcGoogle className=''/>
            <p className='text-[13px] font-semibold'>Google</p>
          </div>
          <p className='text-[11px] mt-3 text-center'>Don't have account?  <b className='cursor-pointer'>Request Now</b></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
