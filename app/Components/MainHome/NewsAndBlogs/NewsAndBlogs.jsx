"use client";
import React, { useRef } from "react";
import { User, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

// Swiper modules
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

const NewsAndBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Is Fast Food Getting Healthier? Here’s What We’re Doing",
      category: "Fast Food",
      image: "/Beef-Fried-Rice.jpg",
      date: "Sep 8, 2025",
    },
    {
      id: 2,
      title: "Is Fast Food Getting Healthier? Here’s What We’re Doing",
      category: "Fast Food",
      image: "/Chicken-Chow-Mein-1.jpg",
      date: "Sep 7, 2025",
    },
    {
      id: 3,
      title: "Is Fast Food Getting Healthier? Here’s What We’re Doing",
      category: "Fast Food",
      image: "/chicken.jpg",
      date: "Sep 6, 2025",
    },
    {
      id: 4,
      title: "Is Fast Food Getting Healthier? Here’s What We’re Doing",
      category: "Fast Food",
      image: "/Chicken-Chow-Mein-1.jpg",
      date: "Sep 5, 2025",
    },
    {
      id: 5,
      title: "Is Fast Food Getting Healthier? Here’s What We’re Doing",
      category: "Fast Food",
      image: "/Chicken-Chow-Mein-1.jpg",
      date: "Sep 4, 2025",
    },
    {
      id: 6,
      title: "Is Fast Food Getting Healthier? Here’s What We’re Doing",
      category: "Fast Food",
      image: "/images/imgi_52_gallery_1_4.png",
      date: "Sep 3, 2025",
    },
    {
      id: 7,
      title: "Is Fast Food Getting Healthier? Here’s What We’re Doing",
      category: "Fast Food",
      image: "/images/imgi_52_gallery_1_4.png",
      date: "Sep 2, 2025",
    },
  ];

  // Swiper refs for custom navigation
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const initNav = (swiper) => {
    if (!swiper || !prevRef.current || !nextRef.current) return;

    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;

    try {
      if (swiper.navigation) swiper.navigation.destroy();
    } catch (e) {}

    swiper.navigation.init();
    swiper.navigation.update();
  };

  return (
    <div className="bg-[#f7f2e2]">
      <div className="max-w-[1500px] mx-auto bg-[#f7f2e2] py-24 px-5">
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

        {/* Swiper with custom nav */}
        <div className="py-10 relative">
          {/* Navigation Buttons */}
          <button
            ref={prevRef}
            aria-label="Previous"
            className="absolute top-1/2 left-0 -translate-y-1/2 z-20 bg-red-600 p-3 rounded-full shadow-md hover:bg-red-700"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button
            ref={nextRef}
            aria-label="Next"
            className="absolute top-1/2 right-0 -translate-y-1/2 z-20 bg-red-600 p-3 rounded-full shadow-md hover:bg-red-700"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>

          <Swiper
            onInit={(swiper) => {
              swiperRef.current = swiper;
              initNav(swiper);
            }}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000} // 👈 smooth transition (1000ms = 1s)
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Navigation, Autoplay]}
            className="bg-[#f7f2e2]"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="bg-[#f7f2e2] text-left group hover:cursor-pointer pb-2">
                  {/* Image */}
                  <div className="h-[300px] w-full rounded-2xl overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={500}
                      className="w-full h-[300px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="pt-6 lg:pt-8">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-red-500" />
                        <span>{blog.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-red-500" />
                        <span>{blog.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-left text-xl lg:text-2xl font-bold text-gray-800 mb-6 leading-tight group-hover:text-red-600 transition-colors duration-300">
                      {blog.title}
                    </h2>

                    {/* Button */}
                    <Link
                      href="/"
                      className="text-left bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
                    >
                      Read More
                    </Link>
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

export default NewsAndBlogs;
