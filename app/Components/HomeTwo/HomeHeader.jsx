"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const HomeHeader = () => {
  const [scrollY, setScrollY] = useState(0);
  const [floatingVeggies, setFloatingVeggies] = useState([]);

  const vegetables = [
    { image: "/tomato.png" },
    { image: "/Leaf2.png" },
    { image: "/sm-tomatto.png" },
    { image: "/chili.png" },
  ];

  useEffect(() => {
    const positions = [
      { x: 86, y: 25 },
      { x: 59, y: 38 },
      { x: 85, y: 80 },
      { x: 1, y: 30 },
    ];

    const initialVeggies = vegetables.map((veg, i) => ({
      id: i,
      veggie: veg.image,
      x: positions[i].x,
      y: positions[i].y,
      rotation: Math.random() * 360,
      scale: 0.6 + Math.random() * 0.4,
      animationDuration: 3 + Math.random() * 4,
    }));

    setFloatingVeggies(initialVeggies);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden relative">
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

      {/* Floating Vegetables */}
      {floatingVeggies.map((veggie) => (
        <div
          key={veggie.id}
          className="absolute z-40 pointer-events-none opacity-80"
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
            height={80}
            width={80}
            className="w-12 sm:w-16 md:w-20 lg:w-24 h-auto"
          />
        </div>
      ))}

      {/* Hero Section */}
      <section className="min-h-screen px-4 sm:px-8 lg:px-24 py-10 lg:py-0 relative flex flex-col lg:flex-row items-center justify-between">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-blue-900/10"></div>
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-amber-500/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-blue-500/10 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full gap-12">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-amber-500/20">
              <span>✨</span>
              Halal Food Certified
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6 uppercase">
              Welcome to
              <br />
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Gulshan Cafe
              </span>
              <br />
              and Sweets
            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Experience authentic flavors and traditional sweets crafted with
              love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto justify-center items-center md:justify-center lg:justify-start">
              <Link href='/pick-up' className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                🍽️ Pick Up
              </Link>
              <Link href='/menu' className="w-full sm:w-auto border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                View Menu
              </Link>
            </div>

            {/* Features */}
            <div className="flex justify-center lg:justify-start gap-6 md:gap-12">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-xl md:text-2xl">
                  ☘️
                </div>
                <span className="text-slate-300 text-sm md:text-lg">
                  Fresh Daily
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-xl md:text-2xl">
                  🥇
                </div>
                <span className="text-slate-300 text-sm md:text-lg">
                  100% Halal
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-xl md:text-2xl">
                  🍽️
                </div>
                <span className="text-slate-300 text-sm md:text-lg">
                  Family Recipes
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/Image2-ss1-h1.webp"
              alt="Banner"
              width={570}
              height={570}
              className="w-56 sm:w-72 md:w-80 lg:w-[570px] h-auto rounded-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHeader;
