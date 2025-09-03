"use client";
import Image from "next/image";
import React from "react";


// import { User, ChevronRight } from "lucide-react";

const BlogCard = ({
  image,
  title,
  date,
  month,
  category,
  author,
  description,
}) => {
  return (
    <div className="bg-white  shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      {/* Image Section */}
      <div className="relative overflow-hidden w-full h-48 sm:h-56 lg:h-64 ">
        <Image
        height={300}
        width={300}
          src={image}
          alt={title}
          className="w-full h-full lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Date Badge */}
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 text-center shadow-lg">
          <div className="text-xl font-bold leading-none">{date}</div>
          <div className="text-xs uppercase tracking-wide">{month}</div>
        </div>
        {/* Category Badge */}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
          <p className="text-gray-600 font-medium text-lg">👨🏻‍💼 {author}</p>
          <p className="text-gray-600 font-medium text-lg">📍 {category}</p>
        </div>
        <h3 className="text-2xl text-left font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-red-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-left text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        <button className="mt-4 text-red-500 font-semibold text-sm hover:text-red-600 transition-colors duration-300 flex items-center group">
          Read More
          {/* <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" /> */}
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
