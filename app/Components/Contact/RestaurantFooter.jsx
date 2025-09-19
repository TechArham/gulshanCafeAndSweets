'use client'
import React from 'react';
import { ArrowUp } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
const RestaurantFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownload = (platform) => {
    console.log(`Downloading ${platform} app`);
  };

  const handleNavClick = (page) => {
    console.log(`Navigating to ${page}`);
  };

  return (
    <footer className="relative bg-[#072f25] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[1500px] mx-auto">
          {/* Large Text Overlay */}
          <div className="flex items-center justify-center mb-5">
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold  text-[#143b31]  leading-tight uppercase font-barlow">
              Let's Talk With Us
            </div>
          </div>

          {/* Top Section with Pizza and Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Content Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Contact Info Card */}
              <div className="bg-[#3f9065]  backdrop-blur-sm rounded-2xl p-6 border-[3px] border-[#ff9924] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Contact Info
                  </h3>
                </div>
                <Image
                  src="/images/imgi_36_title-shape2.png"
                  alt="title shape"
                  width={200}
                  height={18}
                  className="object-contain text-center mx-auto mb-5"
                />
                <div className="space-y-3 text-center text-white/90">
                  <p className="text-sm leading-relaxed">
                    <span className="font-medium">Phone:</span> +256 3698 54769
                    +16354786985
                  </p>
                  <p className="text-sm leading-relaxed">
                    <span className="font-medium">Email:</span>{" "}
                    info@gulshancafeandsweets.com
                  </p>
                </div>
              </div>

              {/* Quick Links Card */}
              <div className="bg-[#3f9065] backdrop-blur-sm rounded-2xl p-6 border-[3px] border-[#ff9924] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Quick Links
                  </h3>
                </div>
                <Image
                  src="/images/imgi_36_title-shape2.png"
                  alt="title shape"
                  width={200}
                  height={18}
                  className="object-contain text-center mx-auto mb-5"
                />
                <div className="grid grid-cols-4 items-center justify-center gap-3 text-white/90 text-sm text-center mx-auto">
                  <button
                    onClick={() => handleNavClick("home")}
                    className="hover:text-yellow-300 transition-colors duration-200 text-center"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => handleNavClick("about")}
                    className="hover:text-yellow-300 transition-colors duration-200 text-center"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => handleNavClick("services")}
                    className="hover:text-yellow-300 transition-colors duration-200 text-center"
                  >
                    Our Services
                  </button>
                  <button
                    onClick={() => handleNavClick("news")}
                    className="hover:text-yellow-300 transition-colors duration-200 text-center"
                  >
                    News
                  </button>
                  <button
                    onClick={() => handleNavClick("testimonials")}
                    className="hover:text-yellow-300 transition-colors duration-200 text-center col-span-2"
                  >
                    Testimonials
                  </button>
                  <button
                    onClick={() => handleNavClick("contact")}
                    className="hover:text-yellow-300 transition-colors duration-200 text-left"
                  >
                    Contact
                  </button>
                </div>
              </div>

              {/* Download Card */}
              <div className="bg-[#3f9065] backdrop-blur-sm rounded-2xl p-6  border-[3px] border-[#ff9924] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Download
                  </h3>
                </div>
                <Image
                  src="/images/imgi_36_title-shape2.png"
                  alt="title shape"
                  width={200}
                  height={18}
                  className="object-contain text-center mx-auto mb-5"
                />
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleDownload("ios")}
                    className="bg-black/20 hover:bg-black/30 rounded-lg px-4 py-2 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center gap-2 text-white text-sm">
                      <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center group-hover:scale-105 transition-transform">
                        <span className="text-black text-xs font-bold">🍎</span>
                      </div>
                      <span>App Store</span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleDownload("android")}
                    className="bg-black/20 hover:bg-black/30 rounded-lg px-4 py-2 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center gap-2 text-white text-sm">
                      <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center group-hover:scale-105 transition-transform">
                        <span className="text-green-600 text-xs">▶</span>
                      </div>
                      <span>Google Play</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8 border-t border-green-600/30">
            {/* Left side - Copyright */}
            <div className="text-white/80 text-sm order-2 lg:order-1">
              © Copyright 2025{" "}
              <span className="text-yellow-300 font-semibold">
                Gulshan Cafe And Sweets
              </span>{" "}
              All Rights Reserved.
            </div>

            {/* Center - Logo */}
            <div className="order-1 lg:order-2">
              <Link href="/">
                <Image
                  src="/logoo.png"
                  width={200}
                  height={200}
                  alt="Logo"
                  className="w-28 h-auto sm:w-32 md:w-56"
                />
              </Link>
            </div>

            {/* Right side - Payment Methods */}
            <div className="flex items-center gap-3 order-3">
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">VISA</span>
              </div>
              <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">MC</span>
              </div>
              <div className="w-12 h-8 bg-blue-400 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">AMEX</span>
              </div>
              <div className="w-12 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">DISC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-110 active:scale-95 z-50 group"
      >
        <ArrowUp className="w-6 h-6 mx-auto group-hover:animate-bounce" />
      </button>

      <style jsx>{`
        @keyframes sway {
          0%,
          100% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }
        .animate-sway {
          animation: sway 4s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default RestaurantFooter;