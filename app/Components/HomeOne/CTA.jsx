"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const CTA = () => {
  const [floatingVeggies, setFloatingVeggies] = useState([]);

  const vegetables = [{ image: "/images/imgi_74_cta-1-top.png" }];

  useEffect(() => {
    const positions = [
      { x: 0, y: 10 },
    ];

    const initialVeggies = vegetables.map((veg, i) => ({
      id: i,
      veggie: veg.image,
      x: positions[i].x,
      y: positions[i].y,
      scale: 0.8 + Math.random() * 0.4,
      animationDuration: 1.2 + Math.random() * 1.0,
    }));

    setFloatingVeggies(initialVeggies);
  }, []);
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Floating Vegetables */}
      {floatingVeggies.map((veggie) => (
        <div
          key={veggie.id}
          className="absolute pointer-events-none opacity-80 hidden sm:block z-0"
          style={{
            left: `${veggie.x}%`,
            top: `${veggie.y}%`,
            transform: `scale(${veggie.scale})`,
            animation: `float ${veggie.animationDuration}s ease-in-out infinite alternate`,
          }}
        >
          <Image
            src={veggie.veggie}
            alt="vegetable"
            height={150}
            width={150}
            className="max-w-[100px] md:max-w-[150px]"
          />
        </div>
      ))}

      {/* Main container with gradient background */}
      <div className="wave min-h-[400px] lg:min-h-[500px] flex items-center relative z-10">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-end gap-5">
            {/* Left Content */}
            <div className="hidden lg:flex justify-start items-start">
              <Image
                src="/pngtree-chicken-biryani-.png"
                alt="vegetable"
                height={750}
                width={750}
                className="-mt-20"
              />
            </div>

            {/* Middle Buttons */}
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/"
                className="bg-red-600 hover:cursor-pointer hover:bg-red-700 text-white font-bold py-4 px-8 rounded-none uppercase tracking-wide text-sm transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Catering
              </Link>
              <Link
                href="/"
                className="bg-red-600 ml-5 hover:cursor-pointer hover:bg-red-700 text-white font-bold py-4 px-8 rounded-none uppercase tracking-wide text-sm transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Online Order
              </Link>
            </div>

            {/* Right Content */}
            <div className="hidden lg:flex justify-end items-start">
              <Image
                src="/about_1_1.png"
                alt="vegetable"
                height={550}
                width={550}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-15px); /* noticeable shake */
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
