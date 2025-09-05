"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
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
    // Create only 3 fixed veggies
    const positions = [
      { x: 86, y: 25 }, // right side
      { x: 59, y: 38 }, // right side
      { x: 85, y: 80 }, // right side
      { x: 1, y: 30 }, // right side
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

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      {/* Custom CSS for animations */}
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
          <Image src={veggie.veggie} alt="vegetable" height={100} width={110} />
        </div>
      ))}

      {/* Hero Section */}
      <section className="min-h-screen px-24 relative flex items-center justify-between">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-blue-900/10"></div>
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-amber-500/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-blue-500/10 to-transparent"></div>
        </div>

        <div className="px-4 lg:px-8 flex w-full gap-8 lg:gap-16 items-center  justify-between relative z-10">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-amber-500/20">
              <span>✨</span>
              Halal Food Certified
            </div>

            <h1 className="text-4xl md:text-5xl uppercase lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Welcome to
              <br />
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Gulshan Cafe
              </span>
              <br />
              and Sweets
            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Experience authentic flavors and traditional sweets crafted with
              love. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                🍽️ Pick Up
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                View Menu
              </button>
            </div>

            <div className="flex justify-center lg:justify-start gap-8 md:gap-12">
              <div className="text-center flex items-center justify-start gap-2">
                <div className="w-12 h-12 rounded-full font-bold  bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-2xl">
                  ☘️
                </div>
                <div className="text-slate-300 text-lg mt-1">Fresh Daily</div>
              </div>
              <div className="text-center flex items-center justify-start gap-2">
                <div className="w-12 h-12 rounded-full font-bold  bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-2xl">
                  🥇
                </div>
                <div className="text-slate-300 text-lg mt-1">100% Halal</div>
              </div>
              <div className="text-center flex items-center justify-start gap-2">
                <div className="w-12 h-12 rounded-full font-bold  bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-2xl">
                  🍽️
                </div>
                <div className="text-slate-300 text-lg mt-1">
                  Family Recipes
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="animate-slide-in-right relative flex justify-center lg:justify-end">
            <Image
              src="/Image2-ss1-h1.webp" // Change to your background image
              alt="Banner"
              width={570}
              height={570}
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[570px] lg:h-[570px] rounded-full relative overflow-hidden"
            />
          </div>
        </div>

        {/* Additional floating background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/30 rounded-full animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-3/4 left-3/4 w-1 h-1 bg-orange-400/40 rounded-full animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "2.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/6 w-3 h-3 bg-amber-300/20 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute top-1/6 right-1/4 w-2 h-2 bg-orange-300/30 rounded-full animate-bounce"
            style={{ animationDelay: "1.5s", animationDuration: "3.5s" }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default HomeHeader;
