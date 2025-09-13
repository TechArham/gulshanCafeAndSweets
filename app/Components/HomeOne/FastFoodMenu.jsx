"use client";
import React, { useState } from "react";
import Image from "next/image";

const FastFoodMenu = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Menu data for each tab
const menuData = {
  "Event Creating": [
    {
      id: 1,
      name: "Grilled Salmon with Dill Sauce",
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
      name: "Fried Chicken Special",
      description: "Candied Jerusalem artichokes, truffle",
      price: 40,
      image: "/chicken.jpg",
    },
    {
      id: 7,
      name: "Low Carb Salad",
      description: "Fresh avocado, greens, olive oil",
      price: 30,
      image: "/Beef-Fried-Rice.jpg",
    },
  ],
  "Meal Plans": [
    {
      id: 8,
      name: "Healthy Morning Oats",
      description: "Banana, honey, almond milk",
      price: 25,
      image: "/vagitable.jpg",
    },
    {
      id: 9,
      name: "Grilled Chicken Wrap",
      description: "Whole wheat, lettuce, light mayo",
      price: 35,
      image: "/chicken.jpg",
    },
    {
      id: 10,
      name: "Marrakesh Vegetarian Curry",
      description: "Candied Jerusalem artichokes, truffle",
      price: 50,
      image: "/Chicken-Chow-Mein-1.jpg",
    },
    {
      id: 11,
      name: "Spicy Vegan Potato Curry",
      description: "Candied Jerusalem artichokes, truffle",
      price: 50,
      image: "/vagitable.jpg",
    },
    {
      id: 12,
      name: "Fruit & Nut Salad",
      description: "Mixed greens, nuts, fresh fruit",
      price: 40,
      image: "/Beef-Fried-Rice.jpg",
    },
    {
      id: 13,
      name: "Salmon Rice Bowl",
      description: "Brown rice, grilled salmon, veggies",
      price: 55,
      image: "/Chicken-Chow-Mein-1.jpg",
    },
    {
      id: 14,
      name: "Veggie Omelette",
      description: "Spinach, bell peppers, cheese",
      price: 30,
      image: "/vagitable.jpg",
    },
  ],
  "Food Delivery": [
    {
      id: 15,
      name: "Cheese Burger Combo",
      description: "Beef patty, cheese, fries, coke",
      price: 45,
      image: "/chicken.jpg",
    },
    {
      id: 16,
      name: "Apple Pie with Cream",
      description: "Candied Jerusalem artichokes, truffle",
      price: 80,
      image: "/vagitable.jpg",
    },
    {
      id: 17,
      name: "Fried Chicken Special",
      description: "Candied Jerusalem artichokes, truffle",
      price: 40,
      image: "/chicken.jpg",
    },
    {
      id: 18,
      name: "Pepperoni Pizza",
      description: "Cheese, pepperoni, tomato sauce",
      price: 65,
      image: "/Beef-Fried-Rice.jpg",
    },
    {
      id: 19,
      name: "Beef Fried Rice",
      description: "Stir fried rice with beef & veggies",
      price: 50,
      image: "/Beef-Fried-Rice.jpg",
    },
    {
      id: 20,
      name: "Veggie Chow Mein",
      description: "Noodles with fresh vegetables",
      price: 45,
      image: "/Chicken-Chow-Mein-1.jpg",
    },
    {
      id: 21,
      name: "BBQ Chicken Pizza",
      description: "BBQ sauce, chicken, onions",
      price: 70,
      image: "/chicken.jpg",
    },
  ],
  "Diet Plans": [
    {
      id: 22,
      name: "Low Carb Salad",
      description: "Fresh avocado, greens, olive oil",
      price: 30,
      image: "/Beef-Fried-Rice.jpg",
    },
    {
      id: 23,
      name: "Protein Power Bowl",
      description: "Quinoa, grilled chicken, spinach",
      price: 45,
      image: "/Chicken-Chow-Mein-1.jpg",
    },
    {
      id: 24,
      name: "Keto Egg Muffins",
      description: "Egg, cheese, spinach, mushrooms",
      price: 35,
      image: "/vagitable.jpg",
    },
    {
      id: 25,
      name: "Green Detox Smoothie",
      description: "Spinach, cucumber, green apple",
      price: 25,
      image: "/vagitable.jpg",
    },
    {
      id: 26,
      name: "Grilled Fish & Veggies",
      description: "Steamed broccoli, grilled fish",
      price: 55,
      image: "/Beef-Fried-Rice.jpg",
    },
    {
      id: 27,
      name: "Tofu Stir Fry",
      description: "Tofu, vegetables, soy sauce",
      price: 40,
      image: "/Chicken-Chow-Mein-1.jpg",
    },
    {
      id: 28,
      name: "Chia Pudding",
      description: "Chia seeds, almond milk, berries",
      price: 20,
      image: "/vagitable.jpg",
    },
  ],
};


  const tabs = Object.keys(menuData);

  return (
    <div className="min-h-screen bg-white px-4">
      <div className="max-w-[1600px] mx-auto py-24">
        {/* Header */}
        <div className="text-center mx-auto mb-8">
          <div className="text-[#ff9924] tracking-widest font-medium font-bangers italic mb-2 ">
            Menu Card
          </div>
          <h1 className="text-black font-extrabold leading-tight text-4xl md:text-5xl uppercase font-barlow mb-8">
            OUR FAST FOODS <span className="text-red-500">MENU CARD</span>
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
                {menuData[tabs[activeTab]].map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-3 rounded-xl hover:cursor-pointer transition-all duration-300 group"
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
