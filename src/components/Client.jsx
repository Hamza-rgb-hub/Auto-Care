import React from "react";
import bg from "/images/image 6.png";

const Client = () => {
  return (
    <div className="relative w-full bg-black text-white py-20 overflow-hidden">
      <div
        className="absolute inset-0 top-[40%]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative w-[90%] max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 className="text-[#6114E4] md:text-[1.75rem] uppercase tracking-widest font-medium mb-3">
            // our clients //
          </h3>

          <h2 className="md:text-[2.2rem] font-bold leading-tight text-[1.8rem]">
            From Dirty to Dazzling{" "}
            <span className="text-[#6114e4]">in Minutes</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 flex items-center justify-center hover:border-purple-500/50 transition-all duration-300">
            <img
              src="/images/img1.png"
              alt="Lexus"
              className="w-full h-auto object-contain filter brightness-90"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<div class="text-white text-2xl font-bold">LEXUS</div>';
              }}
            />
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 flex items-center justify-center hover:border-purple-500/50 transition-all duration-300">
            <img
              src="/images/img2.png"
              alt="Toyota"
              className="w-full h-auto object-contain filter brightness-90"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<div class="text-white text-2xl font-bold">TOYOTA</div>';
              }}
            />
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 flex items-center justify-center hover:border-purple-500/50 transition-all duration-300">
            <img
              src="/images/img3.png"
              alt="Audi"
              className="w-full h-auto object-contain filter brightness-90"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<div class="text-white text-2xl font-bold">AUDI</div>';
              }}
            />
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 flex items-center justify-center hover:border-purple-500/50 transition-all duration-300">
            <img
              src="/images/img4.png"
              alt="Autocar"
              className="w-full h-auto object-contain filter brightness-90"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<div class="text-white text-2xl font-bold">AUTOCAR</div>';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
