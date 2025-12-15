import React from "react";
import { ArrowRight } from "lucide-react";
import HotspotMarker from "./Hotspot";
const Services = () => {
  return (
    <div  className="w-full min-h-screen bg-black text-white pt-16 relative">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 mb-12">

  <div className="md:w-[66%] text-left">
    <h2 className="text-[#6114E4] md:text-[1.6rem] uppercase font-medium">
      // Services //
    </h2>

    <h2 className="md:text-[2.4rem] text-[2rem] font-semibold leading-tight mt-3">
      Experience The Shine{" "}
      <span className="text-[#6114E4]">You Deserve!</span>
    </h2>
  </div>

  <button
    className="
      px-6 py-2.5
      rounded-full
      text-white text-[1rem]
      backdrop-blur-lg
      bg-[#421551]/20
      border border-white/20
      hover:bg-[#421551]/30
      transition-all
      flex items-center gap-3
      self-start md:self-auto
    "
  >
    <ArrowRight className="w-5 h-5" />
    See All Services
  </button>

</div>


      <div className="relative w-full overflow-hidden">
        <img
          src="/images/image 5.png"
          alt="Car Interior Dashboard"
          className="w-full h-auto object-cover"
        />

        
        <div className="absolute top-[24%] left-[50%] -translate-x-1/2">
          <HotspotMarker direction="top" />
        </div>

        <div className="absolute top-[24%] left-[6%] rotate-180">
          <HotspotMarker direction="left" />
        </div>

        <div className="absolute top-[24%] rotate-180 right-[6%]">
          <HotspotMarker direction="right" />
        </div>

        <div className="absolute bottom-[16%] left-[10%]">
          <HotspotMarker direction="left" />
        </div>

        <div className="absolute bottom-[16%] right-[10%]">
          <HotspotMarker direction="right" />
        </div>

        <div className="absolute bottom-[16%] left-[50%] -translate-x-1/2">
          <HotspotMarker direction="bottom" />
        </div>

      </div>
    </div>
  );
};

export default Services;

