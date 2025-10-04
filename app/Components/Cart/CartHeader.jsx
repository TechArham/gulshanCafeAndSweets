import React from "react";
import Image from "next/image";
const CartHeader = () => {
  return (
    <section className="relative bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img/bread_banner-scaled.jpg" // Change to your background image
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -z-30">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
              Cart
            </h1>

            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-3">
              <span className="text-balck transition-colors cursor-pointer">
                Home
              </span>
              <span className="text-balck">/</span>
              <span className="text-orange-400">Cart</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartHeader;
