import React from 'react';
import Image from "next/image";
const OurChefSection = () => {
  return (
    <div className="bg-white py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="flex items-center justify-center lg:justify-start">
              {/* Chef Image */}
              <div className="relative">
                <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    height={300}
                    width={400}
                    src="/Chef.png"
                    alt="Jane Mila Jon - Chef Officer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Stats Card */}
                <div className="absolute -bottom-6 -right-6 bg-red-500 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <svg
                        className="w-8 h-8 text-white mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                      </svg>
                      <span className="text-3xl font-bold">2000</span>
                      <span className="text-2xl ml-1">+</span>
                    </div>
                    <p className="text-sm font-medium">Food Item</p>
                  </div>
                </div>

                {/* Name Badge */}
                <div className="absolute bottom-8 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800">
                    Jane Mila Jon
                  </h3>
                  <p className="text-gray-600 text-sm">Chef Officer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <p className="text-red-500 font-medium text-lg italic">
                Our Chef
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
                We Serve <span className="text-red-500">Passion</span>
              </h2>
            </div>

            {/* Food Items */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Burger Patties */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="relative mb-4">
                  <span className="absolute -top-2 -left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                    HOT
                  </span>
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-10 h-10 text-orange-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2M21 9V7L15 1H9L3 7V9H21M21 19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V11H21V19Z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Burger Patties
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  It is a long established fact that a reader BBQ food Chicken.
                </p>
                <p className="text-gray-800 font-bold">
                  Price: <span className="text-red-500">$15.00</span>
                </p>
              </div>

              {/* Vegetable Pizza */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-10 h-10 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Vegetable Pizza
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  It is a long established fact that a reader BBQ food Chicken.
                </p>
                <p className="text-gray-800 font-bold">
                  Price: <span className="text-red-500">$15.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurChefSection;