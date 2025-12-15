import React, { useState } from "react";
import { TextAlignEnd } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Blog", "Contact Us"];

  return (
    <nav className="w-full text-white absolute top-0 left-0 z-50">
      <div className="w-[93%] mx-auto px-6 py-3 flex justify-between items-center">

        <img src="/images/logo.png" alt="logo" className="w-[100px]" />

        <ul className="hidden md:flex gap-12 text-[1.2rem]">
          {navLinks.map((item, index) => (
            <li key={index} className="relative cursor-pointer group">
              <a href="#">{item}</a>
              <span className="
                  absolute bottom-[-4px] left-1/2 w-0 h-[3px] bg-white 
                  group-hover:w-full group-hover:left-0
                  transition-all duration-300 rounded-full
                "></span>
            </li>
          ))}
        </ul>

        <button className="hidden lg:block px-6 py-2 rounded-md border border-gray-600 hover:bg-white/10 transition">
          Book Now
        </button>

        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          <TextAlignEnd />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 p-5 text-center space-y-4">
          {navLinks.map((item, i) => (
            <li key={i} className="list-none text-lg py-2 border-b border-white/20">
              <a href="">{item}</a>
            </li>
          ))}

          <button className="w-full px-6 py-2 mt-2 rounded-md border border-purple-400 bg-gradient-to-r from-purple-900 to-purple-800 hover:opacity-75">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
