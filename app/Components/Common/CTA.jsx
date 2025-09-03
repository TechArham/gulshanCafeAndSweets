import React from "react";
import Image from "next/image";
const CTA = () => {
  return (
    <div>
      <section className="relative w-full h-full flex items-center justify-center">
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
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content */}
        <div className="relative text-center text-white py-20 px-4 space-y-4">
          <p className="uppercase text-sm tracking-widest">Call to Action</p>
          <h1 className="text-2xl md:text-4xl font-bold">
            Hire Your Next Candidate On Discate
          </h1>
          <p className="text-base md:text-lg">Call Us: +99 698 569 565</p>
          <div>
            <button className="bg-red-700 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Discover More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
