import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Justin Carney",
    image: "https://i.pravatar.cc/100?img=1",
    feedback:
      "I never knew I'd be this happy. Not till I felt the feeling look I can drive my Car that feeling was crazy. You guys nailed it. Thanks So Much Guys.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    image: "https://i.pravatar.cc/100?img=5",
    feedback:
      "I never knew I'd be this happy. Not till I felt the feeling look I can drive my Car that feeling was crazy. You guys nailed it. Thanks So Much Guys.",
  },
  {
    id: 3,
    name: "Mike Peterson",
    image: "https://i.pravatar.cc/100?img=3",
    feedback:
      "I never knew I'd be this happy. Not till I felt the feeling look I can drive my Car that feeling was crazy. You guys nailed it. Thanks So Much Guys.",
  },
  {
    id: 4,
    name: "Emily Davis",
    image: "https://i.pravatar.cc/100?img=9",
    feedback:
      "I never knew I'd be this happy. Not till I felt the feeling look I can drive my Car that feeling was crazy. You guys nailed it. Thanks So Much Guys.",
  },
];

const Testimonial = ()=> {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      <div className="max-w-7xl px-4 mx-auto">
        
        <div className="mb-12">
          <h3 className="text-[#6114E4] md:text-[1.75rem] uppercase tracking-widest font-medium mb-3">
            // our Reviews //
          </h3>

          <h2 className="md:text-[2.4rem] text-[2rem] font-bold leading-tight">
            Clean. Shine. Drive{" "}
            <span className="text-[#6114E4]">With Pride</span>.
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="testimonial-swiper pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl py-8 px-6 h-full transition-all duration-300 hover:border-purple-500/50 bg">
                
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-base">
                      {t.name}
                    </h4>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {t.feedback}
                </p>

                <button className="text-purple-white bg-white/20 text-[1rem] font-medium hover:text-purple-500 border border-white/15 px-5  py-2 rounded-[10px] hover:bg-none transition-all hover:border-purple-500/50">
                  Read More
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;