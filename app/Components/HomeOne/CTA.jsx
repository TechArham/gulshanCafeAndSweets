"use client";
import React from "react";
import Image from "next/image";

import { useState, useEffect } from "react";
const CTA = () => {
  // Floting image
  const [floatingVeggies, setFloatingVeggies] = useState([]);

  const vegetables = [{ image: "/images/imgi_74_cta-1-top.png" }];

  useEffect(() => {
    const positions = [
      { x: 0, y: 10 }, // right side top
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
    <section className="relative overflow-hidden bg-[#f7f2e2]">
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
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left relative z-20">
              <h2 className="text-white font-extrabold leading-tight text-3xl md:text-5xl uppercase font-barlow">
                SUBSCRIBE TO OUR NEWSLETTER &<br />
                GET <span className="text-red-600">20% OFF</span>{" "}
                <span className="text-red-600">FAST FOOD ORDER</span>
              </h2>

              <p className="text-black text-lg lg:text-xl mb-8 opacity-90">
                Get all latest information on sales and offer
              </p>

              {/* Newsletter Form */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your mail address...."
                  className="flex-1 bg-white px-6 py-3 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-none focus:ring-none text-lg"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 text-lg whitespace-nowrap">
                  SUBSCRIBE
                </button>
              </div>
            </div>
            <div className="lg:flex justify-end items-start relative z-20 sm:hidden">
              <Image
                src="/images/imgi_76_cta-1-img.png"
                alt="vegetable"
                height={550}
                width={550}
                className=""
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
