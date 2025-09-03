"use client";
import React from "react";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import Image from "next/image";
import CountUp from "react-countup";

const Counter = () => {
  const stats = [
    { end: 100, label: "Happy Clients" },
    { end: 250, label: "Projects Completed" },
    { end: 50, label: "Team Members" },
    { end: 10, label: "Years Experience" },
  ];

  return (
<div className='bg-white pb-24'>
      <div className="relative bg-white max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/app-bg.f2de9837.png"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      {/* Content */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, i) => (
          <div key={i} className="text-center space-y-3">
            <MdOutlinePersonAddAlt1 className="text-4xl text-gray-600 drop-shadow-md mx-auto" />
            <CountUp start={0} end={stat.end} delay={0} duration={2}>
              {({ countUpRef }) => (
                <span
                  className="block text-3xl text-gray-600 font-bold mt-2"
                  ref={countUpRef}
                />
              )}
            </CountUp>
            <p className="text-gray-500 text-xl font-semibold mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
</div>
  );
};

export default Counter;
