"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
const About = () => {
  // Floting image
  const [floatingVeggies, setFloatingVeggies] = useState([]);

  const vegetables = [
    { image: "/images/imgi_64_testi-top-1-2.png" },
    { image: "/images/imgi_28_about-shape-1.2.png" },
    { image: "/images/imgi_63_testi-top-1-1.png" },
  ];

  useEffect(() => {
    const positions = [
      { x: 0, y: 70 }, // left side
      { x: 10, y: 10 }, // left side top
      { x: 85, y: 5 }, // right side top
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
    <section className="relative bg-white pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating Vegetables */}
      {floatingVeggies.map((veggie) => (
        <div
          key={veggie.id}
          className="absolute pointer-events-none opacity-80 hidden sm:block"
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
            height={200}
            width={200}
            className="max-w-[100px] md:max-w-[200px]"
          />
        </div>
      ))}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Food Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-[680px] h-[400px] md:h-[680px]">
              <Image
                src="/Is+Breakfast+Important-removebg-preview.png"
                alt="vegetable"
                fill
                quality={100}
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 680px"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="text-[#ff9924] tracking-widest uppercase font-normal font-bangers text-xl">
                About Our Restaurant
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-black font-extrabold leading-tight text-4xl md:text-5xl uppercase font-barlow mb-8">
              We invite you to visit our{" "}
              <span className="text-red-600">Halal Food</span> Restaurant
            </h2>

            {/* Description */}
            <p className="text-[#6c6c6c] font-inter text-md leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Wecome Gulshan Cafe and Sweets. Serving authentic Bangladeshi
              home-style halal food in Albany, NY. From traditional dishes to
              handcrafted sweets, each meal reflects rich heritage and care.
              Catering available for Weddings, Birthday Party and Events.
            </p>

            {/* Owner info */}
            <div className="mb-12">
              <h3 className="text-black leading-tight text-2xl font-barlow mb-2 font-bold">
                Authentic Halal Food
              </h3>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/"
                className="bg-red-600 rounded-md hover:cursor-pointer hover:bg-red-700 text-white font-bold py-4 px-8 uppercase tracking-wide text-sm transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                VISIT OUR RESTAURANT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
