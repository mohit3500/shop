import React from 'react';
import HeadPhone from '../img/_import_6268d564ea6f24.86803459_FPpreview.mp4';

const VideoBg = () => {
  return (
    <div className="pt-[64px] w-screen h-screen overflow-hidden  relative">
      <video
        autoPlay
        muted
        loop
        src={HeadPhone}
        className="w-[100vw] bg-cover"
      ></video>
      <div className="absolute top-[64px] h-full w-full bg-black opacity-40 z-10"></div>
        <div className="absolute top-60 px-24 flex flex-col h-full w-[60vw] z-40">
          <h1 className="text-orange-50 text-[70px] font-semibold">
            Choose Your{' '}
            <p className="rotate-12 bg-orange-600 w-[200px] rounded-xl flex items-center justify-center ml-5">
              LOOK
            </p>{' '}
            Campaign.
          </h1>
        </div>
      </div>
  );
};

export default VideoBg;
