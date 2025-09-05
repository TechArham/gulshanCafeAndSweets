"use client";
import Image from "next/image";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Link from "next/link";
const FoodTab = () => {
  const [activeTab, setActiveTab] = useState("Pizza");
  const [floatingVeggies, setFloatingVeggies] = useState([]);

  const vegetables = [
    { image: "/14.png" },
    { image: "/15.png" },
    { image: "/sm-tomatto.png" },
  ];

  useEffect(() => {
    const positions = [
      { x: 12, y: 70 }, // left side
      { x: 2, y: 20 },
      { x: 90, y: 40 }, // right side
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

  const menuTabs = [
    { name: "Misty", image: "/misty.png", color: "bg-[#d14747]" },
    { name: "Drinks", image: "/drinks.png", color: "bg-[#d14747]" },
    { name: "Vegetable", image: "/vegetable.png", color: "bg-[#d14747]" },
    { name: "Rice Items", image: "/rice.png", color: "bg-[#d14747]" },
    { name: "Chinese", image: "/foods.png", color: "bg-[#d14747]" },
    { name: "Dessert", image: "/dessert.png", color: "bg-[#d14747]" },
  ];

  const menuItems = [
    {
      name: "Rosogullah",
      price: "$8.00",
      image: "/swtte.jpg",
    },
    {
      name: "Balu Shahi",
      price: "$8.00",
      image: "/Balu-Shahi.jpg",
    },
    {
      name: "Kalo Jam",
      price: "$8.00",
      image: "/kalo jam.jpg",
    },
    {
      name: "Golap Jam",
      price: "$8.00",
      image: "/Golap Jam.jpg",
    },
    {
      name: "Panthua",
      price: "$8.00",
      image: "/Panthua.jpg",
    },
    {
      name: "Kacha Gullah",
      price: "$9.00",
      image: "/Kacha Gullah.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-10 lg:py-24 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Floating Vegetables */}
        {floatingVeggies.map((veggie) => (
          <div
            key={veggie.id}
            className="absolute pointer-events-none opacity-80 hidden sm:block"
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
              height={100}
              width={100}
              className="max-w-[80px] md:max-w-[120px]"
            />
          </div>
        ))}

        {/* Header */}
        <div className="text-center mb-10 relative z-10">
          <h2 className="text-red-500 text-base sm:text-lg font-medium mb-2 italic">
            Food Items
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700">
            Popular <span className="text-red-500">Menu</span>
          </h1>
        </div>

        {/* Menu Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
          {menuTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab.name)}
              className={`flex flex-col items-center p-4 rounded-md transition-all duration-300 cursor-pointer hover:text-white transform hover:bg-red-700 hover:scale-105 hover:shadow-xl
              ${
                activeTab === tab.name
                  ? tab.color + " text-white shadow-lg scale-105"
                  : "bg-white text-[#2a435d] hover:bg-gray-50"
              }
              w-24 sm:w-28 h-24 group relative overflow-hidden`}
            >
              <div
                className={`text-2xl mb-1 transition-transform duration-300 group-hover:animate-bounce
                ${activeTab === tab.name ? "animate-pulse" : ""}`}
              >
                <Image src={tab.image} height={40} width={40} alt={tab.name} />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-center leading-tight">
                {tab.name}
              </span>

              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white flex items-center gap-4 sm:gap-6 rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Item Image */}
              <div className="flex-shrink-0">
                <div className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={100}
                    width={100}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Item Details */}
              <div className="text-left flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-red-500 transition-colors duration-300">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-bold text-red-600">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <Link href='/menu' className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-red-600 hover:to-orange-600">
            <span className="mr-2 sm:mr-3 text-sm sm:text-lg">FULL MENU</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
              <FaRegArrowAltCircleDown className="w-5 h-5 sm:w-6 sm:h-6 text-red-700" />
            </div>
          </Link>
        </div>
      </div>

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
      `}</style>
    </div>
  );
};

export default FoodTab;