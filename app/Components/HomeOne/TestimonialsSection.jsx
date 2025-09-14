"use client";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Victoria Wotton",
      company: "Fermentum Odio Co.",
      rating: 5,
      quote:
        "Every pizza starts with our hand-tossed dough, made fresh daily and topped with our signature sauce crafted from ripe tomatoes and secret herbs.",
      avatar: "/api/placeholder/120/120",
      images: "/images/imgi_65_testi-1-1.png",
    },
    {
      id: 2,
      name: "Emma Mia",
      company: "Fermentum Odio Co.",
      rating: 5,
      quote:
        "Freshly tossed dough forms the base of every pizza, of the name topped with a homemade sauce made from juicy tomatoes and our special herb recipe.",
      avatar: "/api/placeholder/120/120",
      images: "/images/imgi_67_testi-1-2.png",
    },
  ];

  // Floting image
  const [floatingVeggies, setFloatingVeggies] = useState([]);

  const vegetables = [
    { image: "/images/imgi_64_testi-top-1-2.png" },
    { image: "/images/imgi_13_hero-1-3.png" },
    { image: "/images/imgi_63_testi-top-1-1.png" },
  ];

  useEffect(() => {
    const positions = [
      { x: 0, y: 50 }, // left side
      { x: 15, y: 10 }, // left side top
      { x: 85, y: 0 }, // right side top
    ];

    const initialVeggies = vegetables.map((veg, i) => ({
      id: i,
      veggie: veg.image,
      x: positions[i].x,
      y: positions[i].y,
      scale: 0.8 + Math.random() * 0.4,
      animationDuration: 1.2 + Math.random() * 1.0,
    }));

    setFloatingVeggies(initialVeggies);
  }, []);

  return (
    <section className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating Vegetables */}
      {floatingVeggies.map((veggie) => (
        <div
          key={veggie.id}
          className="absolute pointer-events-none opacity-80 hidden sm:block"
          style={{
            left: `${veggie.x}%`,
            top: `${veggie.y}%`,
            transform: `scale(${veggie.scale})`,
            animation: `float ${veggie.animationDuration}s ease-in-out infinite alternate`,
          }}
        >
          <Image
            src={veggie.veggie}
            alt="vegetable"
            height={200}
            width={200}
            className="max-w-[100px] md:max-w-[200px]"
          />
        </div>
      ))}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mx-auto mb-8">
          <div className="text-[#ff9924] tracking-widest font-medium font-bangers italic mb-2 ">
            TESTIMONIALS
          </div>
          <h1 className="text-black font-extrabold leading-tight text-4xl md:text-5xl uppercase font-barlow mb-8">
            OUR CUSTOMERS <span className="text-red-500">FEEDBACK</span>
          </h1>

          <Image
            src="/title-shape.png"
            alt="title shape"
            width={290} // natural width
            height={24} // natural height
            className="object-contain text-center mx-auto"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 text-6xl text-red-500 font-serif opacity-80 z-10">
                "
              </div>

              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl relative z-20 hover:shadow-2xl transition-shadow duration-300">
                {/* Quote Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-30">
                  {testimonial.quote}
                </p>

                {/* Customer Info */}
                <div className="flex items-center justify-start gap-5">
                  <div className="w-24 h-24 rounded-full">
                    <Image
                      src={testimonial.images}
                      alt="title shape"
                      width={290} // natural width
                      height={200} // natural height
                      className="object-contain text-center mx-auto"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className=" text-black inline-block mt-5">
                      <h4 className="font-bold text-lg mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-black text-sm">
                        {testimonial.company}
                      </p>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex items-center mt-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-orange-400 text-orange-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote Icon Bottom */}
              <div className="absolute -bottom-4 -right-4 text-6xl text-red-500 font-serif opacity-80 z-10 transform rotate-180">
                "
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </section>
  );
};

export default TestimonialsSection;
