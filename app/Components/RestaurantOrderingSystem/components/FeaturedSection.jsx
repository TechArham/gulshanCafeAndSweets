import React, { useState } from "react";
import { FaShoppingCart, FaCheck } from "react-icons/fa";
import Image from "next/image";
const FeaturedSection = ({
  item,
  category,
  categoryDisplayNames,
  onAddToCart,
  promotionalBanner = "$5.00 OFF UPTO $50.00",
  showPromotionalBanner = true,
  rating = 4.8,
  showRating = true,
  buttonText = "View options",
}) => {

      const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(item, category);
    setIsAdded(true);
    // Reset the success state after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
  };
    const breakfastItems = [
        {
            id: 1,
            name: "Chocolate Cream",
            originalPrice: 19.00,
            discountedPrice: 17.00,
            image: "/sooji-rasgulle_1541394246.avif"
        },
        {
            id: 2,
            name: "Baked Pastries and Egg",
            originalPrice: 19.00,
            discountedPrice: 18.00,
            image: "/coffee.jpg"
        },
        {
            id: 3,
            name: "Breakfast with Toasts",
            originalPrice: 20.00,
            discountedPrice: 15.00,
            image: "/bread_banner-scaled.jpg"
        }
    ];

    const lunchItems = [
        {
            id: 4,
            name: "Rice Fresh Chao",
            priceRange: "9.00 - 20.00",
            image: "/Beef-Fried-Rice.jpg"
        },
        {
            id: 5,
            name: "Vegetable Salad",
            originalPrice: 15.00,
            discountedPrice: 14.00,
            image: "/vagitable.jpg"
        },
        {
            id: 6,
            name: "Burger with Meat",
            originalPrice: 22.00,
            discountedPrice: 16.00,
            image: "/chicken.jpg"
        },
        {
            id: 7,
            name: "Stewed Beef Meat",
            originalPrice: 19.00,
            discountedPrice: 17.00,
            image: "/tanduri.jpg"
        },
        {
            id: 8,
            name: "Lula Kebab Adjika",
            originalPrice: 19.00,
            discountedPrice: 18.00,
            image: "/fishes.jpg"
        },
        {
            id: 9,
            name: "BBQ By Barbeque",
            originalPrice: 27.00,
            discountedPrice: 25.00,
            image: "/fish.jpg"
        }
    ];

    const renderItemCard = (item) => (
      <div
        key={item.id}
        className="bg-white border  flex-col md:flex-row gap-3   transition-all duration-200 hover:outline hover:outline-red-500 border-gray-300 p-4 flex items-center rounded-lg shadow-sm overflow-hidden"
      >
        {/* Image */}
        <div className="h-28 w-28 overflow-hidden">
          <Image
            width={112}
            height={112}
            src={item.image}
            alt={item.name}
            className="w-full h-full rounded-xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-5 text-center md:text-left flex-1 ">
          {/* Name */}
          <h3 className="text-xl  font-bold text-black mb-2">{item.name}</h3>

          {/* Price */}
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
            {item.priceRange ? (
              <span className="text-xl font-bold text-black">
                ${item.priceRange}
              </span>
            ) : (
              <>
                <span className="text-xl font-bold text-black">
                  ${item.discountedPrice}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  ${item.originalPrice}
                </span>
              </>
            )}
          </div>

          {/* Order Button */}
          <div className="flex items-center justify-center md:justify-start">
            <button
              onClick={handleAddToCart}
              className={`cursor-pointer flex items-center justify-center space-x-2 px-5 py-1.5 rounded-full transition-all duration-300 font-semibold ${
                isAdded
                  ? "bg-green-500 border border-green-500 text-white"
                  : "bg-white border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              }`}
            >
              {isAdded ? (
                <>
                  <FaCheck className="w-4 h-4" />
                  <span className="text-sm">Added!</span>
                </>
              ) : (
                <>
                  <FaShoppingCart className="w-4 h-4" />
                  <span className="text-sm">Add To Cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );

    return (
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Breakfast Section */}
          <div className="mb-16">

            <h2 className="text-black font-bold leading-tight text-4xl md:text-5xl uppercase font-barlow mb:5 lg:mb-10 text-center mx-auto">
              Breakfast
            </h2>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
              {breakfastItems.map(renderItemCard)}
            </div>
          </div>

          {/* Lunch Section */}
          <div>
            <h2 className="text-black font-bold leading-tight text-4xl md:text-5xl uppercase font-barlow mb:5 lg:mb-10 text-center mx-auto">
              Lunch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lunchItems.map(renderItemCard)}
            </div>
          </div>
        </div>
      </div>
    );
};

export default FeaturedSection;
