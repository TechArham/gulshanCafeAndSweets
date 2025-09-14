// import React, { useState, useRef, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const HomeHeader = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const slides = [
//     {
//       id: 1,
//       category: "Best In Cafeu",
//       title: "Indulge in the",
//       highlight: "Sweetest",
//       subtitle: "Moments of Life",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eimod tempor incididunt ut labore et dolore magna aliqua Quis",
//       image: "/swtte.jpg",
//       discount: "50",
//     },
//     {
//       id: 2,
//       category: "Best In Cafeu",
//       title: "Grilled Salmon",
//       highlight: "Bowl",
//       subtitle: "with Fresh Herbs",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eimod tempor incididunt ut labore et dolore magna aliqua Quis",
//       image: "fuchka.jpg",
//       discount: "40",
//     },
//     {
//       id: 3,
//       category: "Best In Cafeu",
//       title: "Caesar Chicken",
//       highlight: "Wrap",
//       subtitle: "with Parmesan Cheese",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eimod tempor incididunt ut labore et dolore magna aliqua Quis",
//       image: "tehari.jpg",
//       discount: "30",
//     },
//   ];

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 overflow-hidden">
//       <div className="relative z-10 px-6 lg:px-12 py-12 container mx-auto">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//             renderBullet: (index, className) => {
//               return `<span class="${className} !bg-red-500 !w-12 !h-1 !rounded-full !mx-1"></span>`;
//             },
//           }}
//           onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//           className="hero-swiper"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={slide.id}>
//               <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
//                 {/* Left Content */}
//                 <div className="space-y-6">
//                   <div className="text-red-500 font-medium text-lg tracking-wide">
//                     {slide.category}
//                   </div>

//                   <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight">
//                     {slide.title}{" "}
//                     <span className="text-red-500 underline decoration-red-500 decoration-4 underline-offset-4">
//                       {slide.highlight}
//                     </span>{" "}
//                     <span className="block mt-2">{slide.subtitle}</span>
//                   </h1>

//                   <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
//                     {slide.description}
//                   </p>

//                   <div className="flex items-center space-x-6 pt-4">
//                     <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                       Order Now
//                     </button>

//                     <button className="flex items-center space-x-3 text-gray-700 hover:text-red-500 transition-colors group">
//                       <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
//                         <svg
//                           className="w-5 h-5 text-white ml-1"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
//                         </svg>
//                       </div>
//                       <span className="font-medium">Watch Video</span>
//                     </button>
//                   </div>
//                 </div>

//                 {/* Right Content */}
//                 <div className="relative">
//                   {/* Decorative Circle */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-96 h-96 lg:w-[600px] lg:h-[600px] border-2 border-red-200 rounded-full opacity-50"></div>
//                   </div>

//                   <div className="relative z-10 flex items-center justify-center">
//                     <div className="w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl bg-white p-4">
//                       <img
//                         src={slide.image}
//                         alt={`${slide.title} ${slide.highlight}`}
//                         className="w-full h-full object-cover rounded-full"
//                       />
//                     </div>

//                     <div className="absolute bottom-8 right-8 transform rotate-12">
//                       <div className="relative">
//                         <div className="bg-red-500 text-white px-6 py-4 rounded-xl shadow-lg transform -rotate-6">
//                           <div className="text-center">
//                             <div className="text-xs font-medium uppercase tracking-wider">
//                               Special Menu
//                             </div>
//                             <div className="text-3xl font-bold">
//                               {slide.discount}%
//                             </div>
//                             <div className="text-xs font-medium uppercase tracking-wider">
//                               Off
//                             </div>
//                           </div>
//                         </div>
//                         {/* Brush stroke effect */}
//                         <div className="absolute inset-0 bg-red-500 opacity-20 rounded-xl transform -rotate-12 scale-110 -z-10"></div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Social Links */}
//                   <div className="absolute right-0 top-1/2 transform translate-x-12 -translate-y-1/2 space-y-4">
//                     <div className="text-xs text-gray-400 transform rotate-90 whitespace-nowrap origin-center">
//                       Facebook
//                     </div>
//                     <div className="text-xs text-gray-400 transform rotate-90 whitespace-nowrap origin-center">
//                       Twitter
//                     </div>
//                     <div className="text-xs text-gray-400 transform rotate-90 whitespace-nowrap origin-center">
//                       Instagram
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Pagination */}
//         <div className="flex justify-center mt-12">
//           <div className="swiper-pagination"></div>
//         </div>
//       </div>

//       {/* Custom CSS for Swiper */}
//       <style jsx global>{`
//         .hero-swiper .swiper-pagination {
//           position: static !important;
//           margin-top: 2rem;
//         }

//         .hero-swiper .swiper-pagination-bullet {
//           background: #e5e7eb !important;
//           width: 3rem !important;
//           height: 0.25rem !important;
//           border-radius: 9999px !important;
//           margin: 0 0.25rem !important;
//           opacity: 1 !important;
//           transition: all 0.3s ease !important;
//         }

//         .hero-swiper .swiper-pagination-bullet-active {
//           background: #ef4444 !important;
//           width: 4rem !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomeHeader;

// import React from "react";
// import Image from "next/image";
// const HomeHeader = () => {
//   return (
//     <div className="">
//       <section className="relative w-full min-h-screen flex items-center justify-center">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <Image
//             src="/bg-img.png"
//             alt="Banner"
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/40"></div>
//         </div>

//         {/* Content */}
//         <div className="relative text-center text-white mx-auto py-20 px-4 space-y-4">
//           <div className=" text-center mx-auto">
//             <a href="/" className="flex items-center  text-center mx-auto">
//               <Image
//                 src="/halal-food.png"
//                 height={100}
//                 width={100}
//                 alt="Logo"
//               />
//             </a>
//           </div>
//           <h1 className="text-2xl md:text-7xl font-bold">
//             Welcome to <br /> Gulshan Cafe and Sweets
//           </h1>
//           <div>
//             <button className="bg-red-700 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
//               Order Now
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomeHeader;

'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
const HomeHeader = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const FloatingFood = ({ emoji, className, delay = 0 }) => (
    <div
      className={`absolute w-16 h-16 md:w-18 md:h-18 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg transform transition-all duration-1000 ${className}`}
      style={{
        animation: `float 3s ease-in-out infinite ${delay}s`,
        boxShadow: "0 10px 25px rgba(245, 158, 11, 0.3)",
      }}
    >
      {emoji}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(245, 158, 11, 0.6);
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-blue-900/10"></div>
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-amber-500/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-blue-500/10 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-amber-500/20">
              <span>✨</span>
              Halal Food Certified
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Welcome to
              <br />
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Gulshan Cafe
              </span>
              <br />
              and Sweets
            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Experience authentic flavors and traditional sweets crafted with
              love. From aromatic biryanis to delicate desserts, every bite
              tells a story of heritage and quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                🍽️ Order Now
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                View Menu
              </button>
            </div>

            <div className="flex justify-center lg:justify-start gap-8 md:gap-12">
              <div className="text-center flex items-center justify-start gap-2">
                <div className="w-12 h-12 rounded-full font-bold  bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-2xl">
                  ☘️
                </div>
                <div className="text-slate-300 text-lg mt-1">Fresh Daily</div>
              </div>
              <div className="text-center flex items-center justify-start gap-2">
                <div className="w-12 h-12 rounded-full font-bold  bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-2xl">
                  🥇
                </div>
                <div className="text-slate-300 text-lg mt-1">100% Halal</div>
              </div>
              <div className="text-center flex items-center justify-start gap-2">
                <div className="w-12 h-12 rounded-full font-bold  bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-2xl">
                  🍽️
                </div>
                <div className="text-slate-300 text-lg mt-1">
                  Family Recipes
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="animate-slide-in-right relative flex justify-center lg:justify-end">
            <Image
              src="/New Project.png" // Change to your background image
              alt="Banner"
              width={570}
              height={570}
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[570px] lg:h-[570px] rounded-full relative overflow-hidden"
            />
            {/* Enhanced Floating Food Items */}
            <FloatingFood
              emoji="🍗"
              className="top-1/2 -right-8 md:-right-12"
              delay={-1}
            />
            <FloatingFood
              emoji="🍰"
              className="top-8 right-8 md:top-12 md:right-12"
              delay={-0.5}
            />
            <FloatingFood
              emoji="🍽️"
              className="top-1/3 -left-12 md:-left-16"
              delay={-2.5}
            />
          </div>
        </div>

        {/* Additional floating background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/30 rounded-full animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-3/4 left-3/4 w-1 h-1 bg-orange-400/40 rounded-full animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "2.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/6 w-3 h-3 bg-amber-300/20 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute top-1/6 right-1/4 w-2 h-2 bg-orange-300/30 rounded-full animate-bounce"
            style={{ animationDelay: "1.5s", animationDuration: "3.5s" }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default HomeHeader;