"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const CTA = () => {

  const vegetables = [{ image: "/images/imgi_74_cta-1-top.png" }];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Main container with gradient background */}
      <div className="wave min-h-[400px] lg:min-h-[500px] flex items-center relative z-10">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-5">
            {/* Left Content */}
            <div className="hidden lg:flex justify-start items-start">
              <Image
                src="/Image2-ss1-h1 (1).webp"
                alt="vegetable"
                height={780}
                width={750}
                className=""
              />
            </div>

            {/* Middle Buttons */}
            <div className="flex justify-center gap-3 md:gap-5 items-center">
              <Link
                href="/catering"
                className="flex items-center gap-2 bg-red-600 hover:cursor-pointer hover:bg-red-700 text-white font-bold py-3 px-3 md:px-6 rounded-md uppercase tracking-wide text-sm transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Catering
              </Link>
              <Link
                href="/onlineOrder"
                className="flex items-center gap-2 bg-red-600 hover:cursor-pointer hover:bg-red-700 text-white font-bold py-3 px-3 md:px-6 rounded-md uppercase tracking-wide text-sm transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Online Order
              </Link>
            </div>

            {/* Right Content */}
            <div className="hidden lg:flex justify-end items-start">
              <Image
                src="/Is+Breakfast+Important-removebg-preview.png"
                alt="vegetable"
                height={550}
                width={550}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
