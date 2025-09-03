"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import BlogCard from "./BlogCard";

const blogPosts = [
  {
    id: 1,
    title: "Game Day Burger With Homemade",
    category: "Chicken Burger",
    author: "Milone Hridoy",
    date: "02",
    month: "Dec",
    image: "/swtte.jpg",
    description:
      "Perfect burger recipe for your game day celebrations with friends and family.",
  },
  {
    id: 2,
    title: "Delicious Pizza With On A Wooden",
    category: "Pizza",
    author: "Milone Hridoy",
    date: "02",
    month: "Dec",
    image: "/fish.jpg",
    description:
      "Traditional wood-fired pizza recipe that brings authentic Italian flavors to your table.",
  },
  {
    id: 3,
    title: "Game Day Burger With Homemade",
    category: "Chicken Burger",
    author: "Milone Hridoy",
    date: "02",
    month: "Dec",
    image: "/sweets.jpg",
    description: "Another delicious burger variation perfect for any occasion.",
  },
  {
    id: 4,
    title: "Fresh Garden Salad Bowl",
    category: "Healthy",
    author: "Milone Hridoy",
    date: "01",
    month: "Dec",
    image: "/api/placeholder/400/300",
    description:
      "Nutritious and colorful salad packed with fresh vegetables and herbs.",
  },
  {
    id: 5,
    title: "Grilled Chicken Special",
    category: "Chicken",
    author: "Milone Hridoy",
    date: "30",
    month: "Nov",
    image: "/api/placeholder/400/300",
    description: "Perfectly grilled chicken with special marinade and herbs.",
  },
];

const Blog = () => {
  return (
<div className='bg-white'>
      <div className="container mx-auto max-w-7xl pb-24 px-5">
      <div className="text-center mb-12">
        <div className="inline-block">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Blog & </span>
            <span className="text-red-500">News</span>
          </h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full"></div>
      </div>

      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
                  breakpoints={{
            0: {
              slidesPerView: 1, // Mobile devices
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2, // Tablet devices
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3, // Desktop
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <BlogCard {...post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
</div>
  );
};

export default Blog;
