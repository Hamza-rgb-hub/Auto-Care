import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Cta from "./Cta";
import { Link } from "react-router-dom";

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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/"
                className="
      w-9 h-9 rounded-md
      bg-white text-[#6114E4]
      transition-all duration-300
      flex items-center justify-center
      hover:scale-110
      hover:shadow-lg hover:shadow-[#6114E4]/40
    "
              >
                <Twitter className="w-4 h-4" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/"
                className="
      w-9 h-9 rounded-md
      bg-white text-[#6114E4]
      transition-all duration-300
      flex items-center justify-center
      hover:scale-110
      hover:shadow-lg hover:shadow-[#6114E4]/40
    "
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/"
                className="
      w-9 h-9 rounded-md
      bg-white text-[#6114E4]
      transition-all duration-300
      flex items-center justify-center
      hover:scale-110
      hover:shadow-lg hover:shadow-[#6114E4]/40
    "
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/"
                className="
      w-9 h-9 rounded-md
      bg-white text-[#6114E4]
      transition-all duration-300
      flex items-center justify-center
      hover:scale-110
      hover:shadow-lg hover:shadow-[#6114E4]/40
    "
              >
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
                <Link to={"/"} className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/services"}
                  className="text-gray-300 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-gray-300 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-[#6114E4] text-lg font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white">
                <Link to={"/services"}>Exterior Hand Washing</Link>
              </li>
              <li className="hover:text-white">
                <Link to={"/services"}>Paint Correction</Link>
              </li>
              <li className="hover:text-white">
                <Link to={"/services"}>Interior Deep Cleaning</Link>
              </li>
              <li className="hover:text-white">
                <Link to={"/services"}>Engine Bay Detailing</Link>
              </li>
              <li className="hover:text-white">
                <Link to={"/services"}>Head Light Restoration</Link>
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
                <Link
                  href="mailto:america291@gmail.com"
                  className="hover:text-white"
                >
                  america291@gmail.com
                </Link>
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
