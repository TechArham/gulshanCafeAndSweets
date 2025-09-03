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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Left Side */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <FaPhone />
              <p>123-58794069</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail />
              <p>info@gulshancafe.com</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            <FaFacebookF className="text-white hover:text-red-700 transition-colors duration-500 ease-in-out" />
            <IoLogoInstagram className="text-white hover:text-red-700 transition-colors duration-500 ease-in-out" />
            <BsTwitterX className="text-white hover:text-red-700 transition-colors duration-500 ease-in-out" />
            <FaLinkedinIn className="text-white hover:text-red-700 transition-colors duration-500 ease-in-out" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
