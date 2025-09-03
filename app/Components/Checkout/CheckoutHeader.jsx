import React from "react";
import Image from "next/image";
const CheckoutHeader = () => {
  return (
    <section className="relative bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/call-2.png" // Change to your background image
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -z-30">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Checkout
            </h1>

            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <span className="hover:text-white transition-colors cursor-pointer">
                Home
              </span>
              <span className="text-white">/</span>
              <span className="text-orange-400">Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutHeader;
