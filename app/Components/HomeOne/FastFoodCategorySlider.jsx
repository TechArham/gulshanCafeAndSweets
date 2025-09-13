"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

const FastFoodCategorySlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const categories = [
    {
      id: 1,
      name: "FBox Meals",
      items: "22 Items Available",
      image: "/about-us-image.png",
    },
    {
      id: 2,
      name: "Combo Foods",
      items: "20 Items Available",
      image: "/about-us-image.png",
    },
    {
      id: 3,
      name: "Dominos Pizza",
      items: "25 Items Available",
      image: "/about-us-image.png",
    },
    {
      id: 4,
      name: "Grill Chicken",
      items: "22 Items Available",
      image: "/about-us-image.png",
    },
    {
      id: 5,
      name: "Delicious Burger",
      items: "23 Items Available",
      image: "/about-us-image.png",
    },
    {
      id: 6,
      name: "French Fries",
      items: "15 Items Available",
      image: "/about-us-image.png",
    },
    {
      id: 7,
      name: "Hot Wings",
      items: "18 Items Available",
      image: "/about-us-image.png",
    },
    {
      id: 8,
      name: "Pasta Special",
      items: "12 Items Available",
      image: "/about-us-image.png",
    },
  ];

  const setPrevRef = (el) => {
    prevRef.current = el;
  };

  const setNextRef = (el) => {
    nextRef.current = el;
  };

  return (
    <div className="bg-white py-24">
      <div className="max-w-[1500px] mx-auto bg-white ">
        {/* Header */}
        <div className="text-center mx-auto mb-8">
          <div className="text-[#ff9924] tracking-widest font-medium font-bangers italic mb-2 ">
            FOOD CATEGORY
          </div>
          <h1 className="text-black font-extrabold leading-tight text-4xl md:text-5xl uppercase font-barlow mb-8">
            BROWSE FAST FOODS <span className="text-red-500">CATEGORY</span>
          </h1>

          <Image
            src="/title-shape.png"
            alt="title shape"
            width={290} // natural width
            height={24} // natural height
            className="object-contain text-center mx-auto"
          />
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            ref={setPrevRef}
            aria-label="Previous"
            className="absolute top-1/2 hover:cursor-pointer left-0  -translate-y-1/2 z-20 bg-red-600 p-2 md:p-3 rounded-full shadow-md hover:bg-red-700"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button
            ref={setNextRef}
            aria-label="Next"
            className="absolute top-1/2  hover:cursor-pointer right-0 -translate-y-1/2 z-20 bg-red-600 p-2 md:p-3 rounded-full shadow-md hover:bg-red-700"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>

          {/* Slider */}
          <Swiper
            slidesPerView={2}
            spaceBetween={16}
            loop={true} // ✅ Infinite loop
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <div className="aspect-square bg-[#f7f2e2] w-full py-10 flex items-center justify-center group cursor-pointer hover:bg-[#3f9065] transition-colors duration-500 rounded-t-full p-4">
                  <div className="text-center">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-2 md:mb-3">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-contain rounded-full group-hover:rotate-12 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-white transition-colors duration-500 line-clamp-1">
                      {category.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 group-hover:text-white transition-colors duration-500">
                      {category.items}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FastFoodCategorySlider;
