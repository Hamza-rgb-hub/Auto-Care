import React from "react";
import bg from "/images/bg.png";
import car from "/images/car2.png";
import boxBg from "/images/image 3.png";

const About = () => {
  return (
    <div 
      className="w-full min-h-screen bg-cover bg-no-repeat bg-left py-24"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="
  w-[88%] mx-auto 
  flex flex-col lg:flex-row 
  items-center justify-between 
  gap-16
"
      >
        <div className="lg:w-1/2 w-full text-center lg:text-start">
          <h2 className="text-[#6114E4] md:text-[1.75rem] text-[1.5rem] uppercase tracking-wider font-medium">
            // About Us //
          </h2>

          <h2 className="md:text-[2.3rem] text-[1.7rem] font-semibold leading-tight mt-3 text-white">
            Experience The Shine{" "}
            <span className="text-[#6114E4]">You Deserve!</span>
          </h2>

          <p className="text-[1rem] mt-6 mb-4 text-gray-300">
            The use of the lorem ipsum passage dates back to the 1500s. When
            printing presses required painstaking hand-setting of type, workers
            needed something to show clients how their pages would look.
          </p>

          <p className="text-[1rem] mb-8 text-gray-300">
            Printers in the 1500s scrambled the words from Cicero's "De Finibus
            Bonorum et Malorum'' after mixing the words in each sentence. The
            familiar "lorem ipsum dolor sit amet" text emerged when 16th-century
            printers adapted Cicero's original work, beginning with the phrase
            "dolor sit amet consectetur."
          </p>

          <button
            className="
        px-9 py-2.5 
        rounded-lg
        text-white text-[1.05rem] 
        backdrop-blur-lg
        bg-[#421551]/20 
        border border-white/20 
        hover:bg-[#421551]/30
        transition-all
      "
          >
            Read More
          </button>
        </div>

        <div className="lg:w-1/3 w-full md:h-1/2 flex justify-center relative">
          <div
            className="
        w-[78%] h-[450px] 
        rounded-[2rem] 
        p-7
        border border-white/20 
        backdrop-blur-xl 
        relative z-10
        flex flex-col justify-start
        bg-gradient-to-b from-[#0a0a0acc] to-[#1a0f2ccc]
      "
            style={{
              backgroundImage: `url(${boxBg})`,
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
            }}
          >
            <h3 className="text-[1.6rem] font-semibold text-white mb-3 leading-tight">
              “Clean Cars,{" "}
              <span className="text-[#6114E4]">Happy Drivers!</span>”
            </h3>

            <p className="text-gray-300 text-[0.95rem] leading-relaxed">
              Fun Lorem Ipsum text may appear in any size and font to simulate
              everything you create for your campaigns.
            </p>
          </div>

          <img
            src={car}
            alt="car"
            className="
        absolute 
        bottom-3 
        lg:right-[25%] 
        lg:w-[130%] 
        drop-shadow-[0_0_45px_#000]
        z-50
        w-full
      "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
