'use client'
import React, { useState, useEffect } from "react";
import {
  ChefHat,
  Coffee,
  Pizza,
  Utensils,
  Clock,
  ArrowRight,
} from "lucide-react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

import Image from "next/image";
const RestaurantMenu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  // Floating Start
    const [floatingVeggies, setFloatingVeggies] = useState([]);
  
  const vegetables = [
    { image: "/34.png" },
    { image: "/15.png" },
    { image: "/25.png" },
  ];
  
    useEffect(() => {
      // Create only 3 fixed veggies
      const positions = [

        { x: 6, y: 80 }, // left side
        { x: 2, y: 20 }, // left side
        { x: 90, y: 80 }, // right side
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
      // Floating End

  useEffect(() => {
    setIsVisible(true);
  }, []);

const menuItems = {
  vegetable: [
    { name: "Mix Vegetable", price: "$6.00" },
    { name: "Chana Daal", price: "$6.00" },
    { name: "Aloo Bhaji", price: "$6.00" },
    { name: "Shak Bhaji", price: "$6.00" },
    { name: "Cabbage Bhaji", price: "$6.00" },
    { name: "Daal", price: "$4.00" },
    { name: "Begun Vaja (1p)", price: "$2.00" },
    { name: "Aloo Bhorta", price: "$2.00" },
    { name: "Shutki Bhorta", price: "$3.00" },
    { name: "Maach Bhorta", price: "$3.00" },
    { name: "Tomoto Bhorta", price: "$3.00" },
    { name: "Begun Bhorta", price: "$3.00" },
    { name: "Shrimp Bhorta", price: "$4.00" },
    { name: "Dim Bhorta", price: "$3.00" },
    { name: "Bins Bhorta", price: "$3.00" },
  ],
  "bread and rice": [
    { name: "Naan Bread", price: "$2.00" },
    { name: "Garlic Naan", price: "$3.00" },
    { name: "Onion Khulsa", price: "$3.00" },
    { name: "Khima Naan", price: "$5.00" },
    { name: "Porota", price: "$2.00" },
    { name: "Ruti", price: "$1.50" },
    { name: "Chapathi Rooti", price: "$2.00" },
    { name: "White Rice", price: "$2.00" },
    { name: "Polao", price: "$3.00" },
  ],
  misty: [
    { name: "Rosogullah", price: "$8.00" },
    { name: "Balu Shahi", price: "$8.00" },
    { name: "Kalo Jam", price: "$8.00" },
    { name: "Golap Jam", price: "$8.00" },
    { name: "Panthua", price: "$8.00" },
    { name: "Kacha Gullah", price: "$9.00" },
    { name: "Borbi Sondesh", price: "$9.00" },
    { name: "Gurer Sondesh", price: "$9.00" },
    { name: "Chom Chom", price: "$8.00" },
    { name: "Jilapi", price: "$7.00" },
    { name: "Nimki", price: "$8.00" },
    { name: "Murali", price: "$6.00" },
  ],
  "dessert and drinks": [
    { name: "Firni", price: "$3.00/$5.00" },
    { name: "Rice Pudding", price: "$3.00" },
    { name: "Egg Pudding 1pc", price: "$3.00" },
    { name: "Custard", price: "$4.00" },
    { name: "Faloa Daa", price: "$6.00" },
    { name: "Milk Semai", price: "$4.00" },
    { name: "Mango Lacci", price: "$5.00" },
    { name: "Semai", price: "$3.00" },
    { name: "Deshi Doi", price: "$5.00" },
    { name: "Ros Moai", price: "$3.00" },
    { name: "Burhani 1(gl)", price: "$2.00" },
    { name: "Bottle Water", price: "$1.00" },
    { name: "Soda Can", price: "$1.00" },
    { name: "Tea", price: "$1.00" },
  ],
  // "halal chinese": [
  //   { name: "Vegetable Fried Rice", price: "$10.00" },
  //   { name: "Shrimp Fried Rice", price: "$10.00" },
  //   { name: "Egg Fried Rice", price: "$10.00" },
  //   { name: "Chilli Chicken", price: "$12.00" },
  //   { name: "Sesame Chicken", price: "$12.00" },
  //   { name: "Chicken Chow Mein", price: "$12.00" },
  //   { name: "Chinese Vegetable (Chicken/Shrimp)", price: "$10.00" },
  //   { name: "Noodles", price: "$12.00" },
  //   { name: "Thai Soup", price: "$8.00" },
  //   { name: "Chicken Soup", price: "$8.00" },
  //   { name: "Vegetable Corn Soup", price: "$8.00" },
  // ],
  // "breakfast combo": [
  //   {
  //     name: "Porota/Naan/Rooti, Vaji-Daal Mix, Cup of Tea",
  //     price: "$6.00",
  //   },
  //   {
  //     name: "Porota/Rooti, Haluwa or Misty, Cup of Tea",
  //     price: "$6.00",
  //   },
  //   {
  //     name: "Bhuna Khichuri, Fried Egg, and Cup of Tea",
  //     price: "$12.00",
  //   },
  // ],
  // "lunch & dinner combo": [
  //   {
  //     name: "Ruhi/Koi/Pangas, Any two bhorta, Daal/Mix Vegetable",
  //     price: "$14.00",
  //   },
  //   {
  //     name: "Shorshe Elish/Elisher Jul/Elisher Dupeyaju, Any two Bhorta, Daal/Mix Vegetable",
  //     price: "$16.00",
  //   },
  //   {
  //     name: "Beef Bhuna/Kala Bhuna/Goat Rejala, Any two Bhorta, Daal/Mix Vegetable",
  //     price: "$15.00",
  //   },
  //   {
  //     name: "Chicken Roast/Chicken Khurma/Chicken Curry, Daal/Mix Vegetable",
  //     price: "$15.00",
  //   },
  // ],
};


  const categories = [
    { id: "vegetable", name: "VEGETABLE", icon: Coffee, color: "text-red-500" },
    { id: "dessert and drinks", name: "DESSERT AND DRINKS", icon: ChefHat, color: "text-red-500" },
    { id: "misty", name: "MISTY", icon: ChefHat, color: "text-red-500" },
    // { id: "bread and rice", name: "BREAD AND RICE", icon: Coffee, color: "text-red-500" },
    // { id: "halal chinese", name: "HALAL CHAINESE", icon: Pizza, color: "text-red-500" },

    // { id: "breakfast combo", name: "BREAKFAST COMBO", icon: Utensils, color: "text-red-500" },
    // { id: "lunch & dinner combo", name: "LUNCH & DINNER COMBO", icon: Clock, color: "text-red-500" },
  ];

  const getDisplayedItems = () => {
    if (activeCategory === "all") {
      return Object.values(menuItems).flat();
    }
    return menuItems[activeCategory] || [];
  };

  const getItemsPerCategory = (categoryId) => {
    return menuItems[categoryId]?.slice(0, 8) || [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 px-4  overflow-hidden relative">
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
      <div className="absolute top-28 right-0">
        <Image src="/37.png" alt="vegetable" height={200} width={200} />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block">
            <h3 className="text-red-500 font-script text-xl mb-4 transform hover:scale-105 transition-transform duration-300">
              Food Item
            </h3>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 relative">
              OUR MENU
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-500 rounded-full"></div>
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-1 text-lg leading-relaxed">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Menu Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const categoryItems = getItemsPerCategory(category.id);

            return (
              <div
                key={category.id}
                className={`bg-white rounded-2xl group shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Category Header */}
                <div className="bg-[#ffe8d0] group-hover:bg-[#d14747] transition duration-300 p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg transform hover:rotate-12 transition-transform duration-300">
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="text-red-500 group-hover:text-white font-bold text-xl tracking-wider">
                    — {category.name} —
                  </h3>
                </div>

                {/* Menu Items */}
                <div className="p-6">
                  {categoryItems.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="group cursor-pointer hover:bg-gray-50 rounded-lg p-3 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex justify-between items-start">
                        <h4 className=" font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                          {item.name}
                        </h4>
                        <span className="text-red-500 font-bold text-lg ml-4 flex-shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <div className="w-full h-px bg-gray-200 group-hover:bg-red-300 transition-colors duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Menu Button */}
        <div
          className={`text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <button className="group inline-flex cursor-pointor items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-red-600 hover:to-orange-600">
            <span className="mr-3 text-lg">FULL MENU</span>
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
              <FaRegArrowAltCircleDown className="w-6 h-6  text-red-700" />
            </div>
          </button>
        </div>
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

export default RestaurantMenu;
