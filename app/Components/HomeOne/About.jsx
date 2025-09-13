import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Food Image */}
          <div className="relative order-2 lg:order-1">
            <Image
              src="/Is+Breakfast+Important-removebg-preview.png"
              alt="vegetable"
              width={580}
              height={580}
              quality={100}
              priority
              className="object-contain"
              sizes="(max-width: 768px) 150px, 280px" // responsive sharpness
            />
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className=" text-[#ff9924] tracking-widest font-medium font-bangers italic">
                About Our Restaurant
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-black font-extrabold leading-tight text-4xl md:text-5xl uppercase font-barlow mb-8">
              We invite you to visit our Fast food{" "}
              <span className="text-red-600">RESTAURANT</span>
            </h2>

            {/* Description */}
            <p className="text-[#6c6c6c] font-inter text-md leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              At the heart of our kitchen are bold flavors, high-quality
              ingredients, and a commitment to consistency. From juicy burgers,
              crispy fries, and cheesy pizzas to spicy wraps and refreshing
              drinks, every item on our menu is made to order and packed with
              taste.
            </p>

            {/* Owner info */}
            <div className="mb-5">
              <h3 className="text-black leading-tight text-2xl font-barlow mb-2 font-bold">
                Parvez Hossain Imon
              </h3>
              <p className="text-gray-500 text-md">Restaurant Owner</p>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-none uppercase tracking-wide text-sm transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                VISIT OUR RESTAURANT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
