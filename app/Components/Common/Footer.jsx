"use client";
import React from "react";
import {
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

import { useState, useEffect } from "react";

const Footer = () => {
  // Floting image
  const [floatingVeggies, setFloatingVeggies] = useState([]);

  const vegetables = [
    { image: "/images/imgi_84_footer-1-5.png" },
    { image: "/images/imgi_77_footer-1-1.png" },
    { image: "/images/imgi_83_footer-1-4.png" },
    { image: "/images/imgi_81_footer-1-3.png" },
  ];

  useEffect(() => {
    const positions = [
      { x: 0, y: 70 }, // left side
      { x: 0, y: 0 }, // left side top
      { x: 85, y: 70 }, // right side
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
    <div className="relative min-h-screen bg-[#072f25] overflow-hidden text-[#6c6c6c]">
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
            height={300}
            width={300}
            className="max-w-[100px] md:max-w-[300px]"
          />
        </div>
      ))}
      {/* Main footer content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        {/* Logo */}
        <div className="mb-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-10">
            {/* Left Line */}
            <div className="hidden md:block md:col-span-5">
              <hr className="h-[1px] w-full bg-[#57726b] border-0" />
            </div>

            {/* Logo */}
            <div className="col-span-1 md:col-span-2 flex justify-center">
              <Image
                src="/logoo.png"
                alt="title shape"
                width={200}
                height={200}
                sizes="(max-width: 768px) 140px, 200px"
                className="object-contain w-[140px] h-auto md:w-[200px]"
              />
            </div>

            {/* Right Line */}
            <div className="hidden md:block md:col-span-5">
              <hr className="h-[1px] w-full bg-[#57726b] border-0" />
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16 items-start lg:items-center justify-between text-center lg:text-left">
          {/* Useful Links */}
          <div className="">
            <h3 className="text-white text-xl font-semibold mb-6">
              Useful Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Our History
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Favorite Place
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-center">
            <div className="border-2 border-gray-600 rounded-2xl p-8 bg-emerald-800/30 backdrop-blur-sm">
              <div className="flex flex-col items-center space-y-4">
                <Clock className="w-12 h-12 text-gray-300" />
                <p className="text-yellow-400 font-semibold">
                  We're currently open!
                </p>
                <div className="text-center space-y-2">
                  <p className="text-gray-300">
                    Opening Hours: 8:00AM To 10:00PM
                  </p>
                  <p className="text-gray-300">
                    Opening Hours: 8:00AM To 10:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Favorite Menus */}
          <div className="flex justify-center lg:justify-end">
            <div>
              <h3 className="text-white text-xl font-semibold mb-6">
                Favorite Menus
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    Burgers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    Crispy Flavors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    Breakfast Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    Desserts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    Kids Menus
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    Beverages
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-12">
          <div className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center hover:border-yellow-400 transition-colors cursor-pointer">
            <Facebook className="w-5 h-5 text-gray-300 hover:text-yellow-400 transition-colors" />
          </div>
          <div className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center hover:border-yellow-400 transition-colors cursor-pointer">
            <Twitter className="w-5 h-5 text-gray-300 hover:text-yellow-400 transition-colors" />
          </div>
          <div className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center hover:border-yellow-400 transition-colors cursor-pointer">
            <Linkedin className="w-5 h-5 text-gray-300 hover:text-yellow-400 transition-colors" />
          </div>
          <div className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center hover:border-yellow-400 transition-colors cursor-pointer">
            <MessageCircle className="w-5 h-5 text-gray-300 hover:text-yellow-400 transition-colors" />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t max-w-6xl border-gray-600 pt-8 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center text-center space-y-4 lg:space-y-0">
            <p className="text-gray-300">
              Copyright © 2025 <span className="text-yellow-400">Barab</span>{" "}
              All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Terms & Condition
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Support policy
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-15px); /* noticeable shake */
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
