import React, { useState, useEffect } from "react";

const FoodDeliveryLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const foodImages = [
    "sweets.jpg",
    "tanduri.jpg",
    "swtte.jpg",
    "fish.jpg",
    "tehari.jpg",
    "kalojam.jpg",
    "fuchka.jpg",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % Math.max(1, foodImages.length - 4)
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [foodImages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="relative overflow-hidden bg-white shadow-sm">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 25}%)` }}
        >
          {foodImages.concat(foodImages.slice(0, 4)).map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 p-1"
            >
              <img
                src={img}
                alt={`Food ${index + 1}`}
                className="w-full h-20 md:h-24 lg:h-68 object-cover shadow-sm hover:shadow-md transition-shadow duration-200"
              />
            </div>
          ))}
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {Array.from({ length: Math.max(1, foodImages.length - 4) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? "bg-red-500" : "bg-gray-300"
                }`}
              />
            )
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side - Food Image */}
          <div className="flex-1 relative">
            <div className="relative z-10">
              <img
                src="/delivery-img.png"
                alt="Delicious burger meal"
                className="w-full max-w-md mx-auto"
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🍟</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-red-100 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl">🍅</span>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-8 left-8 w-full h-full bg-gradient-to-br from-red-200 to-orange-200 rounded-2xl -z-10 opacity-20"></div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Delivery Badge */}
            <div className="inline-block mb-4">
              <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
                Delivery
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-[55px] font-extrabold text-white leading-tight mb-6">
              <span className="text-gray-800">A Moments Of Delivered</span>
              <br />
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                On Right Time & Place
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Food Khan is a restaurant, bar and coffee roastery located on a
              busy corner site in Farringdon's Exmouth Market. With glazed
              frontage on two sides of the building, overlooking the market and
              a bustling London intersection.
            </p>

            {/* Delivery Info & CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              {/* Delivery Number */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-.293-.707L15 4.586A1 1 0 0014.414 4H14v3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Delivery Order Num
                  </p>
                  <p className="text-xl font-bold text-red-500">123-59794069</p>
                </div>
              </div>

              {/* Order Now Button */}
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="fixed top-20 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 -z-10"></div>
      <div className="fixed bottom-20 left-10 w-24 h-24 bg-red-200 rounded-full opacity-20 -z-10"></div>
    </div>
  );
};

export default FoodDeliveryLanding;
