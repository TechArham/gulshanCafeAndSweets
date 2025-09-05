"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ComingSoonSection = () => {
  const [floatingVeggies, setFloatingVeggies] = useState([]);

  const vegetables = [
    { image: "/26.png" },
    { image: "/chili.png" },
    { image: "/sm-tomatto.png" },
    { image: "/tomato.png" },
  ];

  useEffect(() => {
    const positions = [
      { x: 12, y: 70 },
      { x: 2, y: 20 },
      { x: 90, y: 40 },
      { x: 70, y: 8 },
    ];

    const initialVeggies = vegetables.map((veg, i) => ({
      id: i,
      veggie: veg.image,
      x: positions[i].x,
      y: positions[i].y,
      rotation: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.4,
      animationDuration: 3 + Math.random() * 4,
    }));

    setFloatingVeggies(initialVeggies);
  }, []);

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Floating Vegetables */}
      {floatingVeggies.map((veggie) => (
        <div
          key={veggie.id}
          className="absolute pointer-events-none opacity-80"
          style={{
            left: `${veggie.x}%`,
            top: `${veggie.y}%`,
            transform: `rotate(${veggie.rotation}deg) scale(${veggie.scale})`,
            animation: `float ${veggie.animationDuration}s ease-in-out infinite alternate`,
          }}
        >
          <Image
            src={veggie.veggie}
            alt="vegetable"
            height={50}
            width={50}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
        </div>
      ))}

      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 opacity-60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-12 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
          {/* Left - Burger Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                height={900}
                width={900}
                alt="burger"
                src="/about-us-image.png"
                className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] xl:w-[650px] xl:h-[650px] object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Heading */}
            <p className="text-red-500 font-semibold text-lg sm:text-xl tracking-wider animate-pulse">
              Coming Soon
            </p>

            <div className="flex justify-center lg:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 30"
                fill="none"
                className="w-32 h-8 sm:w-44 sm:h-10 text-red-700"
              >
                <path
                  d="M5 12 Q100 -8 195 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                />
                <path
                  d="M5 17 Q100 -3 195 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                />
              </svg>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight">
              DELICIOUS
              <br />
              BURGER{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                FOOD
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
              Feel Hungry? Order Your Favourite Food.
            </p>

            {/* Paragraphs */}
            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text since the 1500s.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>

            {/* Button */}
            <div className="pt-4">
              <Link href='/order' className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base md:text-lg">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Top Button */}
      <button className="fixed bottom-6 right-6 w-10 h-10 sm:w-12 sm:h-12 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg z-20">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ComingSoonSection;
