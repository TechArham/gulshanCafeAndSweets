import React from "react";

export default function HomeHeader() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[20s] ease-out hover:scale-110"
        style={{
          backgroundImage: `url('bg.png')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

      {/* Additional Dark Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="relative z-10 h-full px-6 ">
        <div className="max-w-7xl mx-auto text-left py-28">
          {/* Badge/Tag */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fadeInUp">
            <span className="text-sm font-medium text-white/90 tracking-wide">
              🍽️ Flavorful Authentic Dining
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp animation-delay-200">
            Welcome To
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f8ba0e]  to-orange-600">
              Gulshan Cafe <br /> And Sweets
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl  text-white/70 mb-8 max-w-2xl leading-relaxed font-light animate-fadeInUp animation-delay-400">
            Wecome Gulshan Cafe and Sweets. Serving authentic Bangladeshi
            home-style halal food in Albany, NY. From traditional dishes to
            handcrafted sweets, each meal reflects rich heritage and care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-600">
            <button className="group relative px-8 py-4 bg-[linear-gradient(155deg,#ff6b35_0%,#f8ba0e_100%)] text-white font-semibold rounded-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
              <span className="relative z-10">View Menu</span>
            </button>

            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-md border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105">
              <span className="flex items-center gap-2">
                Order Now
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}