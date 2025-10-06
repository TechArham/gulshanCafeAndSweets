"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
      name: "vegetable",
      items: "22 Items Available",
      image: "/vagis.png",
    },
    {
      id: 2,
      name: "bread and rice",
      items: "20 Items Available",
      image: "/rice-item.png",
    },
    { id: 3, name: "misty", items: "25 Items Available", image: "/misty.png" },
    {
      id: 4,
      name: "dessert and drinks",
      items: "22 Items Available",
      image: "/drink.png",
    },
    {
      id: 5,
      name: "halal chinese",
      items: "23 Items Available",
      image: "/chinese.png",
    },
    {
      id: 6,
      name: "breakfast combo",
      items: "15 Items Available",
      image: "/breakfast.png",
    },
    {
      id: 7,
      name: "lunch & dinner combo",
      items: "18 Items Available",
      image: "/lunch.png",
    },
  ];

  return (
    <div className="bg-white py-24 ">
      <div className="max-w-[1500px] mx-auto bg-white ">
        {/* Header */}
        <div className="text-center mx-auto mb-8">
          <div className="text-[#ff9924] tracking-widest uppercase font-normal font-bangers text-xl mb-2 ">
            FOOD CATEGORY
          </div>
          <h1 className="text-black font-extrabold leading-tight text-4xl md:text-5xl uppercase font-barlow mb-8">
            BROWSE OUR FOOD <span className="text-red-500">categories</span>
          </h1>

          <Image
            src="/title-shape.png"
            alt="title shape"
            width={290}
            height={24}
            className="object-contain text-center mx-auto"
          />
        </div>

        <div className="py-10 px-4 relative">
          {/* Navigation Buttons - bottom center */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center gap-4 z-20">
            <button
              ref={prevRef}
              aria-label="Previous"
              className="bg-red-600 p-2 md:p-3 rounded-full shadow-md hover:bg-red-700 pointer-events-auto hover:cursor-pointer"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button
              ref={nextRef}
              aria-label="Next"
              className="bg-red-600 p-2 md:p-3 rounded-full shadow-md hover:bg-red-700 pointer-events-auto hover:cursor-pointer"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <Swiper
            slidesPerView={2}
            spaceBetween={16}
            loop={true}
            modules={[Navigation]}
            onSwiper={(swiper) => {
              // keep reference
              swiperRef.current = swiper;

              // small delay ensures DOM refs (prevRef/nextRef) are attached
              setTimeout(() => {
                if (!swiperRef.current) return;
                const s = swiperRef.current;
                if (prevRef.current && nextRef.current) {
                  // attach DOM elements
                  s.params.navigation.prevEl = prevRef.current;
                  s.params.navigation.nextEl = nextRef.current;

                  // re-init navigation (destroy first to be safe)
                  try {
                    if (s.navigation) s.navigation.destroy();
                  } catch (e) {
                    /* ignore */
                  }
                  try {
                    s.navigation.init();
                    s.navigation.update();
                  } catch (e) {
                    /* ignore */
                  }
                }
              }, 0);
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
              1280: { slidesPerView: 6, spaceBetween: 30 },
            }}
            className="mySwiper"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id} className="pb-10">
                <div className="aspect-square bg-[#f7f2e2] w-full py-12 flex items-center justify-center group cursor-pointer hover:bg-[#3f9065] transition-colors duration-500 rounded-t-full p-4">
                  <div className="text-center">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 md:mb-3">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-contain group-hover:rotate-12 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-base capitalize md:text-lg lg:text-xl font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-white transition-colors duration-500 line-clamp-1">
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
