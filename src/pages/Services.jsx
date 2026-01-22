import React, { useState } from "react";
import {
  Droplets,
  Sparkles,
  Wind,
  Wrench,
  Lightbulb,
  ArrowRight,
  Check,
  Car,
} from "lucide-react";
import heroImage from "/public/images/ser.jpg";

const Service = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Droplets,
      title: "Exterior Hand Washing",
      description:
        "Premium hand wash service using pH-balanced solutions that protect your paint.",
      features: [
        "Hand wash with premium soap",
        "Wheel and tire cleaning",
        "Window cleaning",
        "Door jambs cleaning",
        "Final rinse and dry",
      ],
      duration: "30-45 mins",
      price: "$49",
    },
    {
      id: 2,
      icon: Sparkles,
      title: "Paint Correction",
      description:
        "Professional paint restoration to remove swirl marks and oxidation.",
      features: [
        "Multi-stage polishing",
        "Swirl mark removal",
        "Scratch reduction",
        "Paint sealant",
        "UV protection",
      ],
      duration: "4-8 hours",
      price: "$299",
    },
    {
      id: 3,
      icon: Wind,
      title: "Interior Deep Cleaning",
      description:
        "Comprehensive interior detailing that eliminates odors and stains.",
      features: [
        "Vacuum all surfaces",
        "Steam cleaning",
        "Leather conditioning",
        "Dashboard detailing",
        "Air vent cleaning",
      ],
      duration: "2-3 hours",
      price: "$149",
    },
    {
      id: 4,
      icon: Wrench,
      title: "Engine Bay Detailing",
      description: "Thorough engine compartment cleaning and protection.",
      features: [
        "Degreasing treatment",
        "Component cleaning",
        "Protective dressing",
        "Wire organization",
        "Final inspection",
      ],
      duration: "1-2 hours",
      price: "$99",
    },
    {
      id: 5,
      icon: Lightbulb,
      title: "Head Light Restoration",
      description:
        "Restore clarity to foggy, yellowed headlights for better visibility.",
      features: [
        "Oxidation removal",
        "Multi-stage sanding",
        "Professional polishing",
        "UV coating",
        "Night visibility boost",
      ],
      duration: "45-60 mins",
      price: "$79",
    },
    {
      id: 6,
      icon: Car,
      title: "Ceramic Coating",
      description: "Premium ceramic coating for long-lasting paint protection.",
      features: [
        "Surface preparation",
        "Multi-layer coating",
        "Enhanced gloss",
        "Hydrophobic shield",
        "5-year durability",
      ],
      duration: "2-4 hours",
      price: "$399",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-black text-white relative overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative py-24 px-6 max-w-[90%] mx-auto flex flex-col lg:flex-row items-center lg:items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <p className="text-purple-500 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            // Our Services //
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Experience The Shine{" "}
            <span className="text-purple-500">You Deserve!</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-8">
            From basic washes to premium detailing, we offer comprehensive
            services to keep your vehicle looking its absolute best.
          </p>
          <button className="px-8 py-3 max-w-max bg-purple-600 rounded-md hover:bg-purple-700 transition font-medium flex items-center gap-2 mx-auto lg:mx-0">
            Book Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Image */}
        {/* <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-purple-500/20 max-w-lg w-full">
            <img
              src={heroImage}
              alt="VIP Car Detailing"
              className="w-full h-auto object-cover"
            />
          </div>
        </div> */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
         <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
              <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
               <img
              src={heroImage}
              alt="VIP Car Detailing"
              className="w-full h-auto object-cover"
            />
              </div>
            </div>
        </div>
       
      </section>

      {/* ================= Services Grid ================= */}
      <section className="relative max-w-[90%] mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            const isActive = activeService === service.id;

            return (
              <div
                key={service.id}
                className={`group relative rounded-xl p-6 cursor-pointer transition-all duration-300
                  bg-gray-900/50 backdrop-blur-sm border
                  ${isActive ? "border-purple-500 shadow-[0_0_30px_-5px_hsl(270,70%,60%/0.3)]" : "border-gray-700/50 hover:border-purple-500/40"}
                `}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300
                      ${isActive ? "bg-purple-500/20 text-purple-500" : "bg-gray-800/50 text-gray-400 group-hover:text-purple-500"}
                    `}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-lg font-semibold mb-2 transition-colors duration-300 ${isActive ? "text-purple-500" : "text-white"}`}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Expanded Features */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${isActive ? "max-h-52 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <div className="space-y-1.5 mb-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                            <span className="text-xs text-gray-400">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center py-3 border-t border-gray-700">
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-gray-500/70">
                            Duration
                          </p>
                          <p className="text-sm font-medium text-white">
                            {service.duration}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] uppercase tracking-wider text-gray-500/70">
                            From
                          </p>
                          <p className="text-sm font-semibold text-purple-500">
                            {service.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    className={`mt-4 w-full py-2.5 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300
                    ${isActive ? "bg-purple-500 text-black" : "border border-gray-700 text-gray-400 hover:border-purple-500 hover:text-purple-500"}
                  `}
                  >
                    Book Now{" "}
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${isActive ? "translate-x-0.5" : ""}`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Service;
