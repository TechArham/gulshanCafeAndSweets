'use client'
import React, { useState } from "react";
import Image from "next/image";
const FastFoodMenu = () => {
  const [activeTab, setActiveTab] = useState(0);

  const menuItems = [
    {
      id: 1,
      name: "Grilled Salmon with Dil Sauce",
      description: "Candied Jerusalem artichokes, truffle",
      price: 40,
      image: "/Beef-Fried-Rice.jpg",
    },
    {
      id: 2,
      name: "Roast Beef with Vegetable",
      description: "Candied Jerusalem artichokes, truffle",
      price: 60,
      image: "/chicken.jpg",
    },
    {
      id: 3,
      name: "Marrakesh Vegetarian Curry",
      description: "Candied Jerusalem artichokes, truffle",
      price: 50,
      image: "/Chicken-Chow-Mein-1.jpg",
    },
    {
      id: 4,
      name: "Spicy Vegan Potato Curry",
      description: "Candied Jerusalem artichokes, truffle",
      price: 50,
      image: "/vagitable.jpg",
    },
    {
      id: 5,
      name: "Apple Pie with Cream",
      description: "Candied Jerusalem artichokes, truffle",
      price: 80,
      image: "/vagitable.jpg",
    },
    {
      id: 6,
      name: "Grilled Salmon with Dil Sauce",
      description: "Candied Jerusalem artichokes, truffle",
      price: 40,
      image: "/Beef-Fried-Rice.jpg",
    },
    {
      id: 7,
      name: "Grilled Salmon with Dil Sauce",
      description: "Candied Jerusalem artichokes, truffle",
      price: 40,
      image: "/Beef-Fried-Rice.jpg",
    },
  ];

  const tabs = ["Event Creating", "Meal Plans", "Food Delivery", "Diet Plans"];
  return (
    <div className="min-h-screen bg-white px-4">
      <div className="max-w-[1600px] mx-auto py-24">
        {/* Header */}
        <div className="text-center mx-auto mb-8">
          <div className="text-orange-500 font-semibold text-sm md:text-base mb-2 tracking-wider uppercase">
            Menu Card
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
            OUR FAST FOODS <span className="text-red-500">MENU CARD</span>
          </h1>

          <Image
            src="/title-shape.png"
            alt="title shape"
            width={290} // natural width
            height={24} // natural height
            className="object-contain text-center mx-auto"
          />
        </div>
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - Food Images */}

          <div className="w-full h-full overflow-hidden rounded-t-full rounded-bl-full col-span-3">
            <Image
              src="/vagitable.jpg"
              alt="vegetable"
              height={80}
              width={80}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right Side - Menu Card */}
          <div className=" col-span-6">
            <div className="p-4 md:p-6 w-full">
              {/* Navigation Tabs */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-3 md:px-6 py-2 md:py-3 rounded-full font-medium text-xs md:text-sm transition-all duration-300 ${
                      index === activeTab
                        ? "bg-red-500 text-white shadow-lg transform scale-105"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Menu Items */}
              <div className="space-y-3">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-3 rounded-xl hover:cursor-pointer transition-all duration-300 group"
                  >
                    {/* Item Image */}
                    <div className="">
                      <Image
                        src={item.image}
                        alt="vegetable"
                        height={80}
                        width={80}
                        className="w-12 h-12 rounded-lg"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-800 text-lg md:text-xl mb-1 group-hover:text-red-500 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>

                    {/* Dotted Line */}
                    <div className="hidden sm:flex flex-grow border-b-2 border-dotted border-[#3f9065] mx-4 -mb-5"></div>

                    {/* Price */}
                    <div className="flex-shrink-0">
                      <span className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-full overflow-hidden rounded-tr-full rounded-b-full col-span-3">
            <Image
              src="/vagitable.jpg"
              alt="vegetable"
              height={80}
              width={80}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastFoodMenu;
