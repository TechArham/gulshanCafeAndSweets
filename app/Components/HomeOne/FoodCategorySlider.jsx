'use client'



import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FoodCategorySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const foodCategories = [
    {
      id: 1,
      title: "French Fries",
      image: "🍟",
      bgColor: "from-amber-600 to-orange-700",
      description: "Crispy golden fries"
    },
    {
      id: 2,
      title: "Healthy Salads",
      image: "🥗",
      bgColor: "from-green-500 to-emerald-600",
      description: "Fresh green salads"
    },
    {
      id: 3,
      title: "Gourmet Burgers",
      image: "🍔",
      bgColor: "from-red-600 to-orange-600",
      description: "Delicious beef burgers"
    },
    {
      id: 4,
      title: "Fresh Pizza",
      image: "🍕",
      bgColor: "from-red-500 to-yellow-500",
      description: "Wood fired pizzas"
    },
    {
      id: 5,
      title: "Hot Dogs",
      image: "🌭",
      bgColor: "from-yellow-600 to-red-600",
      description: "Classic hot dogs"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, foodCategories.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, foodCategories.length - 2)) % Math.max(1, foodCategories.length - 2));
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % foodCategories.length;
      items.push(foodCategories[index]);
    }
    return items;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4 overflow-hidden">
      {/* Diagonal Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-300 to-transparent transform -skew-y-12"></div>
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-gray-300 opacity-20"
              style={{
                width: '1px',
                height: '100vh',
                left: `${i * 2}%`,
                transform: `rotate(45deg) translateY(-50%)`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className=" text-[#ff9924] tracking-widest uppercase font-normal font-bangers text-xl mb-4">
            Our Food Gallery
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
            LET'S SEE OUR FAST FOOD <span className="text-red-500">CATEGORY</span>
          </h1>
          
          {/* Decorative Elements */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="w-8 h-0.5 bg-green-500"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-12 h-0.5 bg-green-500"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-8 h-0.5 bg-green-500"></div>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            <ChevronRight size={24} />
          </button>

          {/* Curved Slider Container */}
          <div className="relative mx-16">
            <div className="flex justify-center items-end space-x-6 md:space-x-8">
              {getVisibleItems().map((item, index) => {
                const isCenter = index === 1;
                const isLeft = index === 0;
                const isRight = index === 2;

                return (
                  <div
                    key={`${item.id}-${currentSlide}`}
                    className={`
                      relative transition-all duration-700 ease-out cursor-pointer group
                      ${isCenter 
                        ? 'transform scale-110 z-10 hover:scale-125' 
                        : isLeft 
                          ? 'transform -rotate-12 scale-90 hover:scale-100 hover:-rotate-6' 
                          : 'transform rotate-12 scale-90 hover:scale-100 hover:rotate-6'
                      }
                    `}
                    style={{
                      transformOrigin: 'center bottom',
                    }}
                  >
                    {/* Card */}
                    <div className={`
                      w-64 md:w-80 h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl
                      bg-gradient-to-br ${item.bgColor}
                      group-hover:shadow-3xl transition-all duration-500
                      ${isCenter ? 'ring-4 ring-white ring-opacity-50' : ''}
                    `}>
                      {/* Content */}
                      <div className="relative h-full flex flex-col justify-center items-center p-8 text-white">
                        
                        {/* Food Emoji/Icon */}
                        <div className="text-8xl md:text-9xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                          {item.image}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-center mb-3 transform group-hover:translate-y-2 transition-transform duration-500">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg opacity-90 text-center transform group-hover:translate-y-2 transition-transform duration-500 delay-100">
                          {item.description}
                        </p>

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 rounded-3xl"></div>
                        
                        {/* Shine effect */}
                        <div className="absolute -top-full left-0 w-full h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:top-full transition-all duration-1000 transform skew-y-12"></div>
                      </div>
                    </div>

                    {/* Shadow */}
                    <div className={`
                      absolute -bottom-6 left-1/2 transform -translate-x-1/2
                      w-48 h-8 bg-black bg-opacity-20 rounded-full blur-md
                      group-hover:w-56 group-hover:bg-opacity-30 transition-all duration-500
                      ${isCenter ? 'opacity-100' : 'opacity-60'}
                    `}></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: Math.max(1, foodCategories.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${index === currentSlide 
                    ? 'bg-red-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* Bottom Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" 
              fill="rgba(239, 68, 68, 0.1)"
            />
          </svg>
        </div>
      </div>

      {/* Custom CSS for slide animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          0% { 
            opacity: 0.5; 
            transform: translateX(-100px) rotate(-12deg) scale(0.8); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) rotate(-12deg) scale(0.9); 
          }
        }
        
        @keyframes slideInCenter {
          0% { 
            opacity: 0.5; 
            transform: translateY(-50px) scale(0.9); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1.1); 
          }
        }
        
        @keyframes slideInRight {
          0% { 
            opacity: 0.5; 
            transform: translateX(100px) rotate(12deg) scale(0.8); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) rotate(12deg) scale(0.9); 
          }
        }
      `}</style>
    </div>
  );
};

export default FoodCategorySlider;