"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";



const Testimonial = () => {

      const [floatingVeggies, setFloatingVeggies] = useState([]);
    
      const vegetables = [{ image: "/Leaf2.png" }, { image: "/34.png" }];
    
      useEffect(() => {
        // Create only 3 fixed veggies
        const positions = [
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
  const testimonials = [
    {
      id: 1,
      name: "Delwar Hossain",
      rating: 5,
      text: "Gulshan Cafe and Sweets never disappoints! The sweets are always fresh, and the cozy atmosphere makes it perfect for family gatherings.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      productImage:
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=80&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Fojlay Rabbi",
      rating: 5,
      text: "Amazing food and exceptional service! From the savory dishes to the delightful desserts, every visit to Gulshan Cafe and Sweets is a treat.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      productImage:
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=80&h=100&fit=crop",
    },
  ];

  return (
    <div className=" bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 relative overflow-hidden">
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          <h3 className="text-red-500 font-script text-xl mb-4 transform hover:scale-105 transition-transform duration-300">
            Happy Customers
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 relative">
            Customers Feedback
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-500 rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-1 text-lg leading-relaxed">
            Our happy customers share their experiences and feedback, reflecting
            the quality and trust in our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group ${
                index === 0 ? "animate-slide-left" : "animate-slide-right"
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-red-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                  </svg>
                </div>

                {/* Profile Section */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full border-4 border-white shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-700 rounded-full border-2 border-white flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-3">
                      {testimonial.position}
                    </p>

                    {/* Rating Stars */}
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 md:w-5 md:h-5 text-orange-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
                  {testimonial.text}
                </p>

                {/* Product Image */}
                {/* <div className="flex justify-end">
                  <div className="relative transform group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={testimonial.productImage}
                      alt="Food Product"
                      width={80}
                      height={60}
                      className="rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div> */}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div
          className="flex justify-center mt-12 md:mt-16 space-x-3 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-3 h-3 bg-red-700 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-green-400 transition-colors duration-300 cursor-pointer"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-green-400 transition-colors duration-300 cursor-pointer"></div>
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

export default Testimonial;
