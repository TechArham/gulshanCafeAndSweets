import React, { useState } from "react";

const RestaurantMenu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    {
      id: "All",
      name: "All",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      ),
    },
    {
      id: "Pizza",
      name: "Pizza",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 2l9 4.9V21L12 2z M12 2L3 6.9V21L12 2z M12 2v19"
          />
          <circle cx="8" cy="12" r="1" fill="currentColor" />
          <circle cx="16" cy="10" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "Asian",
      name: "Asian",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 12h8M12 8v8"
          />
        </svg>
      ),
    },
    {
      id: "Burger",
      name: "Burger",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2 12h20M4 8h16c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6 8V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v2"
          />
        </svg>
      ),
    },
    {
      id: "Salad",
      name: "Salad",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 12l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      id: "Bakery",
      name: "Bakery",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6V2l-2 2-2-2v4l2 2 2-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 10h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V10z"
          />
        </svg>
      ),
    },
    {
      id: "Drink",
      name: "Drink",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 12V7a1 1 0 011-1h12a1 1 0 011 1v5M5 12l2 7h10l2-7M5 12h14"
          />
        </svg>
      ),
    },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus turpis",
      price: 10,
      image: "swtte.jpg",
      category: "Pizza",
    },
    {
      id: 2,
      name: "Chicken Alfredo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus turpis",
      price: 10,
      image: "fish.jpg",
      category: "Asian",
    },
    {
      id: 3,
      name: "Caesar Salad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus turpis",
      price: 10,
      image: "tehari.jpg",
      category: "Salad",
    },
    {
      id: 4,
      name: "Pepperoni Pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus turpis",
      price: 12,
      image: "sweets.jpg",
      category: "Pizza",
    },
    {
      id: 5,
      name: "Classic Burger",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus turpis",
      price: 15,
      image: "tanduri.jpg",
      category: "Burger",
    },
    {
      id: 6,
      name: "Chocolate Croissant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus turpis",
      price: 8,
      image: "tea.jpg",
      category: "Bakery",
    },

  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
    // Add your cart functionality here
  };

  return (
    <div className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-500 font-medium text-lg mb-2 tracking-wide">
            Special Menu
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-12">
            Our Specials Menu
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 min-w-[100px] ${
                activeCategory === category.id
                  ? "text-red-500 bg-white shadow-lg transform -translate-y-1"
                  : "text-gray-600 hover:text-red-500 hover:bg-white hover:shadow-md"
              }`}
            >
              <div className="mb-2">{category.icon}</div>
              <span className="text-sm font-medium">{category.name}</span>
              {activeCategory === category.id && (
                <div className="w-8 h-0.5 bg-red-500 mt-2 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                  <div className="text-red-500 font-semibold">
                    Delivery Fee : ${item.price}
                  </div>

                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-gray-800 hover:bg-red-500 text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-110 group"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8.5M9.5 18h8.5M9.5 18a1.5 1.5 0 003 0M19 18a1.5 1.5 0 01-3 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No items message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">
              No items found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
