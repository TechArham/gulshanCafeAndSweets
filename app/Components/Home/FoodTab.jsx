"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
const FoodTab = () => {
  const [activeTab, setActiveTab] = useState("Pizza");

  const [floatingVeggies, setFloatingVeggies] = useState([]);

  const vegetables = [
    { image: "/14.png" },
    { image: "/15.png" },
    { image: "/sm-tomatto.png" },
  ];

  useEffect(() => {
    // Create only 3 fixed veggies
    const positions = [
      { x: 12, y: 70 }, // left side
      { x: 2, y: 20 }, // left side
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
      bgColor: "bg-red-100",
    },
    {
      name: "Balu Shahi",
      price: "$8.00",
      image: "/Balu-Shahi.jpg",
      bgColor: "bg-red-200",
    },
    {
      name: "Kalo Jam",
      price: "$8.00",
      image: "/kalo jam.jpg",
      bgColor: "bg-orange-100",
    },
    {
      name: "Golap Jam",
      price: "$8.00",
      image: "/Golap Jam.jpg",
      bgColor: "bg-blue-100",
    },
    {
      name: "Panthua",
      price: "$8.00",
      image: "/Panthua.jpg",
      bgColor: "bg-green-100",
    },
    {
      name: "Kacha Gullah",
      price: "$9.00",
      image: "/Kacha Gullah.jpg",
      bgColor: "bg-green-200",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-10 lg:py-24 p-8 relative overflow-hidden">
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
          <Image src={veggie.veggie} alt="vegetable" height={120} width={150} />
        </div>
      ))}

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-red-500 text-lg font-medium mb-2 italic">
          Food Items
        </h2>
        <h1 className="text-4xl text-gray-700 md:text-5xl font-bold">
          Popular <span className="text-red-500">Menu</span>
        </h1>
      </div>

      {/* Menu Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
        {menuTabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab.name)}
            className={`
              flex flex-col items-center p-4 rounded-md transition-all duration-300 cursor-pointer hover:text-white transform hover:bg-red-700 hover:scale-110 hover:shadow-xl
              ${
                activeTab === tab.name
                  ? tab.color + " text-white shadow-lg scale-105"
                  : "bg-white text-[#2a435d] hover:bg-gray-50"
              }
              w-28 h-24 group relative overflow-hidden
            `}
          >
            <div
              className={`
              text-2xl mb-1 transition-transform duration-300 group-hover:animate-bounce
              ${activeTab === tab.name ? "animate-pulse" : ""}
            `}
            >
              <Image src={tab.image} height={45} width={45} alt="Misty" />
            </div>
            <span className="text-sm font-semibold text-center leading-tight">
              {tab.name}
            </span>

            {/* Hover effect background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white flex items-center justify-center gap-10 rounded-3xl p-3 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden"
          >
            {/* Item Image */}
<div>
              <div
              className={`h-[100px] w-[100px] rounded-full flex items-center justify-center mb-4 mx-auto overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}
            >
              <Image
                src={item.image}
                alt="vegetable"
                height={100}
                width={100}
                className="h-full w-full object-cover"
              />
            </div>
</div>

            {/* Item Details */}
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-500 transition-colors duration-300">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              <div className="flex items-center justify-start gap-2">
                <span className="text-xl font-bold text-red-600">
                  Price: {item.price}
                </span>
                {item.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    {item.oldPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
          </div>
        ))}
      </div>

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

export default FoodTab;
