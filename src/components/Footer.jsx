import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Cta from "./Cta";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(/images/last.png)` }}
      className="relative min-h-screen pt-17 bg-cover bg-center text-white flex flex-col justify-between"
    >
      <div className="pt-7 pb-10">
        <Cta />
      </div>

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto pt-20 pb-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-9 md:grid-cols-8 gap-12">
          <div className="lg:col-span-3 md:col-span-4">
            <img src="/images/f-logo.png" alt="logo" className="w-32" />

            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard.
            </p>

            <div className="flex space-x-4 mt-5">
              <a className="w-9 h-9 rounded-md bg-white text-[#6114E4] hover:bg-white/90 transition flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
              <a className="w-9 h-9 rounded-md bg-white text-[#6114E4] hover:bg-white/90 transition flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a className="w-9 h-9 rounded-md bg-white text-[#6114E4] hover:bg-white/90 transition flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
              <a className="w-9 h-9 rounded-md bg-white text-[#6114E4] hover:bg-white/90 transition flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 md:col-span-4">
            <h3 className="text-[#6114E4] text-lg font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="" className="text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="" className="text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="text-gray-300 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-[#6114E4] text-lg font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white">
                <a href="">Exterior Hand Washing</a>
              </li>
              <li className="hover:text-white">
                <a href="">Paint Correction</a>
              </li>
              <li className="hover:text-white">
                <a href="">Interior Deep Cleaning</a>
              </li>
              <li className="hover:text-white">
                <a href="">Engine Bay Detailing</a>
              </li>
              <li className="hover:text-white">
                <a href="">Head Light Restoration</a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 md:col-span-4 ">
            <h3 className="text-[#6114E4] text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                Los Angeles Latifabad Hyd
                <br />
                America
              </li>
              <li>
                <a
                  href="mailto:america291@gmail.com"
                  className="hover:text-white"
                >
                  america291@gmail.com
                </a>
              </li>
              <li>+92 42532624 / +92 4253624</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="
  border-t-2 border-white/60 py-6 text-[1rem] text-gray-300
  flex flex-col items-center text-center
  md:flex-row md:justify-center md:space-x-6 md:text-left
"
      >
        <span>© Copyright Reserved 2024</span>

        <span className="cursor-pointer hover:text-white md:block hidden">
          |
        </span>

        <span className="cursor-pointer hover:text-white">
          terms & condition
        </span>
      </div>
    </div>
  );
};

export default Footer;
