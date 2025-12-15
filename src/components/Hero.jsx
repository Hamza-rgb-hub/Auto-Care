import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-black to-[#1a002d] text-white overflow-hidden pt-[10rem] pb-10">

      <div className="w-[90%] mx-auto flex justify-between items-center relative z-20 md:gap-0 gap-2.5">

        <div className="lg:w-[17%] md:w-[20%] border border-white/20 bg-black/30 backdrop-blur-lg p-4 rounded-md">
          <h2 className="text-2xl mb-1 text-[#6114E4]">300k</h2>
          <p className="text-[12px] leading-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>
        </div>

        <h1 className="text-transparent bg-transparent [-webkit-text-stroke:1px_#ccc]  lg:text-[10rem] md:text-[5.5rem] text-[4rem] uppercase  tracking-[1vw] font-medium  absolute md:-translate-0  -translate-y-[100px] md:left-1/2 md:-translate-x-1/2 z-10">
          convertible
        </h1>

        <div className="lg:w-[17%] md:w-[20%] border border-white/20 bg-black/30 backdrop-blur-lg p-4 rounded-md z-20">
          <h2 className="text-2xl mb-1 text-[#6114E4]">300k</h2>
          <p className="text-[12px] leading-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>
        </div>
      </div>

      <div className="w-[90%] mx-auto md:mt-[-5%] mt-3.5 relative z-20">
        <img src="/images/car.png" alt="car" className="w-full drop-shadow-2xl" />
      </div>

      <div className="w-[90%] mx-auto flex justify-between absolute bottom-10 left-1/2 md:gap-0 gap-2.5 -translate-x-1/2 z-30">

        <div className="lg:w-[17%] md:w-[20%] border border-white/20 bg-black/30 backdrop-blur-lg p-4 rounded-md">
          <h2 className="text-2xl mb-1 text-[#6114E4]">300k</h2>
          <p className="text-[12px] leading-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>
        </div>

        <div className="lg:w-[17%] md:w-[20%] border border-white/20 bg-black/30 backdrop-blur-lg p-4 rounded-md">
          <h2 className="text-2xl mb-1 text-[#6114E4]">200k</h2>
          <p className="text-[12px] leading-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>
        </div>

      </div>

      <img src="/images/shade.png" alt="shadow" className="absolute bottom-0 w-full md:block hidden" />
    </div>
  );
};

export default Hero;
