import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";



const Topbar = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="container h-8 sm:h-10 flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Left Side - Hidden on mobile, visible on sm and up */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-1 sm:gap-2">
              <FaPhone className="text-xs sm:text-sm" />
              <p className="text-xs sm:text-sm">123-58794069</p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <MdEmail className="text-xs sm:text-sm" />
              <p className="text-xs sm:text-sm">info@gulshancafe.com</p>
            </div>
          </div>

          {/* Right Side - Smaller on mobile */}
          <div className="flex items-center gap-3 sm:gap-5">
            <FaFacebookF className="text-white hover:text-red-700 transition-colors duration-500 ease-in-out text-sm sm:text-base" />
            <IoLogoInstagram className="text-white hover:text-red-700 transition-colors duration-500 ease-in-out text-sm sm:text-base" />
            <BsTwitterX className="text-white hover:text-red-700 transition-colors duration-500 ease-in-out text-sm sm:text-base" />
            <FaLinkedinIn className="text-white hover:text-red-700 transition-colors duration-500 ease-in-out text-sm sm:text-base" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
