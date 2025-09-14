import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";


const Topbar = () => {
  return (
    <div className="w-full bg-[#072f25] text-white">
      <div className="h-9 sm:h-10 px-4 sm:px-6 md:px-10 xl:px-20 flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          {/* Left Side - Hidden on mobile, visible on sm and up */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-1 sm:gap-2">
              <LuMapPin className="text-lg" />
              <p className="text-xs sm:text-sm font-semibold">315 Central Ave, Albany, NY 12206, United States</p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2  font-semibold">
              <MdOutlineMail className="text-lg" />
              <p className="text-xs sm:text-sm">info@gulshancafe.com</p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <IoTimeOutline className="text-lg" />
              <p className="text-xs sm:text-sm font-semibold">
                Opening Hour: Mon to Sat - 	8 AM–12 AM
              </p>
            </div>
          </div>

          {/* Right Side - Smaller on mobile */}
<div className="flex items-center justify-end gap-3 sm:gap-5">
  <div className="w-7 h-7 flex items-center justify-center border hover:cursor-pointer border-white rounded-full hover:border-red-700 transition-colors duration-500 ease-in-out">
    <FaFacebookF className="text-white hover:text-red-700 text-xs" />
  </div>
  <div className="w-7 h-7 flex items-center justify-center border hover:cursor-pointer border-white rounded-full hover:border-red-700 transition-colors duration-500 ease-in-out">
    <IoLogoInstagram className="text-white hover:text-red-700 text-xs" />
  </div>
  <div className="w-7 h-7 flex items-center justify-center border hover:cursor-pointer border-white rounded-full hover:border-red-700 transition-colors duration-500 ease-in-out">
    <BsTwitterX className="text-white hover:text-red-700 text-xs" />
  </div>
  <div className="w-7 h-7 flex items-center justify-center border hover:cursor-pointer border-white rounded-full hover:border-red-700 transition-colors duration-500 ease-in-out">
    <FaLinkedinIn className="text-white hover:text-red-700 text-xs" />
  </div>
</div>



        </div>
      </div>
    </div>
  );
};

export default Topbar;
