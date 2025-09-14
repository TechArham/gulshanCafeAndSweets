"use client";
import React, { useState } from "react";
import Image from "next/image";

const FastFoodMenu = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Menu data for each tab
const menuData = {
  Vegetable: [
    { id: 1, name: "Mix Vegetable", price: 6, image: "/vagitable.jpg" },
    { id: 2, name: "Chana Daal", price: 6, image: "/vagitable.jpg" },
    { id: 3, name: "Aloo Bhaji", price: 6, image: "/vagitable.jpg" },
    { id: 4, name: "Shak Bhaji", price: 6, image: "/vagitable.jpg" },
    { id: 5, name: "Cabbage Bhaji", price: 6, image: "/vagitable.jpg" },
    { id: 6, name: "Daal", price: 4, image: "/vagitable.jpg" },
    { id: 7, name: "Begun Vaja (1p)", price: 2, image: "/vagitable.jpg" },
    { id: 8, name: "Aloo Bhorta", price: 2, image: "/vagitable.jpg" },
    { id: 9, name: "Shutki Bhorta", price: 3, image: "/vagitable.jpg" },
  ],

  "Bread and Rice": [
    { id: 16, name: "Naan Bread", price: 2, image: "/Beef-Fried-Rice.jpg" },
    { id: 17, name: "Garlic Naan", price: 3, image: "/Beef-Fried-Rice.jpg" },
    { id: 18, name: "Onion Khulsa", price: 3, image: "/Beef-Fried-Rice.jpg" },
    { id: 19, name: "Khima Naan", price: 5, image: "/Beef-Fried-Rice.jpg" },
    { id: 20, name: "Porota", price: 2, image: "/Beef-Fried-Rice.jpg" },
    { id: 21, name: "Ruti", price: 1.5, image: "/Beef-Fried-Rice.jpg" },
    { id: 22, name: "Chapathi Rooti", price: 2, image: "/Beef-Fried-Rice.jpg" },
    { id: 23, name: "White Rice", price: 2, image: "/Beef-Fried-Rice.jpg" },
    { id: 24, name: "Polao", price: 3, image: "/Beef-Fried-Rice.jpg" },
  ],

  Misty: [
    { id: 25, name: "Rosogullah", price: 8, image: "/chicken.jpg" },
    { id: 26, name: "Balu Shahi", price: 8, image: "/chicken.jpg" },
    { id: 27, name: "Kalo Jam", price: 8, image: "/chicken.jpg" },
    { id: 28, name: "Golap Jam", price: 8, image: "/chicken.jpg" },
    { id: 29, name: "Panthua", price: 8, image: "/chicken.jpg" },
    { id: 30, name: "Kacha Gullah", price: 9, image: "/chicken.jpg" },
    { id: 31, name: "Borbi Sondesh", price: 9, image: "/chicken.jpg" },
    { id: 32, name: "Gurer Sondesh", price: 9, image: "/chicken.jpg" },
    { id: 33, name: "Chom Chom", price: 8, image: "/chicken.jpg" },
  ],

  "Dessert and Drinks": [
    { id: 37, name: "Firni", price: "3/5", image: "/Chicken-Chow-Mein-1.jpg" },
    {
      id: 38,
      name: "Rice Pudding",
      price: 3,
      image: "/Chicken-Chow-Mein-1.jpg",
    },
    {
      id: 39,
      name: "Egg Pudding 1pc",
      price: 3,
      image: "/Chicken-Chow-Mein-1.jpg",
    },
    { id: 40, name: "Custard", price: 4, image: "/Chicken-Chow-Mein-1.jpg" },
    { id: 41, name: "Faloa Daa", price: 6, image: "/Chicken-Chow-Mein-1.jpg" },
    { id: 42, name: "Milk Semai", price: 4, image: "/Chicken-Chow-Mein-1.jpg" },
    {
      id: 43,
      name: "Mango Lacci",
      price: 5,
      image: "/Chicken-Chow-Mein-1.jpg",
    },
    { id: 44, name: "Semai", price: 3, image: "/Chicken-Chow-Mein-1.jpg" },
    { id: 45, name: "Deshi Doi", price: 5, image: "/Chicken-Chow-Mein-1.jpg" },
  ],
};



  const tabs = Object.keys(menuData);

  return (
    <div className="min-h-screen bg-white px-4">
      <div className="max-w-[1600px] mx-auto py-24">
        {/* Header */}
        <div className="text-center mx-auto mb-8">
          <div className="text-[#ff9924] tracking-widest uppercase font-normal font-bangers text-xl mb-2 ">
            Menu Card
          </div>
          <h1 className="text-black font-extrabold leading-tight text-4xl md:text-5xl uppercase font-barlow mb-8">
            OUR FOODS <span className="text-red-500">MENU CARD</span>
          </h1>

          <Image
            src="/title-shape.png"
            alt="title shape"
            width={290}
            height={24}
            className="object-contain text-center mx-auto"
          />
        </div>

        <div className="grid lg:grid-cols-12 lg:gap-3 xl:gap-8 items-center">
          {/* Left Side - Food Images */}
          <div className="w-full h-full overflow-hidden rounded-t-full rounded-bl-full col-span-3 hidden lg:block">
            <Image
              src="/vagitable.jpg"
              alt="vegetable"
              height={800}
              width={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Menu Card */}
          <div className="col-span-6">
            <div className="p-4 md:p-6 w-full">
              {/* Navigation Tabs */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-3">
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
                {menuData[tabs[activeTab]].map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 px-3 py-2 rounded-xl hover:cursor-pointer transition-all duration-300 group"
                  >
                    {/* Item Image */}
                    <div>
                      <Image
                        src={item.image}
                        alt={item.name}
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

          {/* Right Side - Chef Image */}
          <div className="w-full h-full overflow-hidden rounded-tr-full rounded-b-full col-span-3 hidden lg:block">
            <Image
              src="/Chef.png"
              alt="chef"
              height={800}
              width={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastFoodMenu;
