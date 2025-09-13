"use client";
import React, { useState } from "react";
import { Play, ArrowUp } from "lucide-react";
import Image from "next/image";

const YoutubeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Main Container with Curved Design */}
      <div className="max-w-[1500px] mx-auto">
        <div className="relative tv p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Side - Video/Image */}
            <div className="relative col-span-12 lg:col-span-7">
              <div className="relative overflow-hidden group rounded-3xl py-5">
                {/* Restaurant Interior Image */}
                <div className="video-container">
                  <iframe
                    className="youtube"
                    src="https://www.youtube.com/embed/unRjyl1SoEU?si=cMH3a-wlsu13e2vV"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlayClick}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-2xl hover:bg-opacity-100 transition-all duration-300 hover:scale-110 group"
                  >
                    {isPlaying ? (
                      <div className="w-6 h-6 bg-green-500 rounded-sm"></div>
                    ) : (
                      <Play
                        className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 ml-1"
                        fill="currentColor"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-white z-[999]  col-span-12 lg:col-span-5">
              <div className="text-center mx-auto mb-8">
                <div className="text-[#ff9924] tracking-widest font-medium font-bangers italic mb-2">
                  Menu Card
                </div>
                <h1 className="text-white font-extrabold leading-tight text-2xl md:text-3xl lg:text-4xl uppercase font-barlow mb-8">
                  OUR FAST FOODS MENU CARD
                </h1>

                <Image
                  src="/images/imgi_36_title-shape2.png"
                  alt="title shape"
                  width={290}
                  height={24}
                  className="object-contain text-center mx-auto"
                />
              </div>

              {/* Hours */}
              <div className="bg-transparent rounded-2xl p-6 mb-8 border border-white border-opacity-20">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-4 text-white">
                      Monday to Tuesday
                    </h3>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-white">10:00 AM</p>
                      <p className="text-2xl font-bold text-white">20:00 PM</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-4 text-white">
                      Friday to Sunday
                    </h3>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-white">12:00 AM</p>
                      <p className="text-2xl font-bold text-white">23:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <div className="text-center">
                <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Book Your TABLE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button className="fixed bottom-8 right-8 w-10 h-10 sm:w-12 sm:h-12 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 group">
        <ArrowUp className="w-6 h-6 group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

      {/* Custom CSS for .tv */}
      <style jsx>{`
        .tv {
          position: relative;
          width: 100%;
          height: 100%;
          margin: 20px 0;
          background: #3f9065;
          border-radius: 53% / 12%;
          color: white;
          text-align: center;
          text-indent: 0.1em;
        }
        .tv:before {
          content: "";
          position: absolute;
          top: 10%;
          bottom: 10%;
          right: -5%;
          left: -5%;
          background: inherit;
          border-radius: 5% / 50%;
        }
        .video-container {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
          overflow: hidden;
          border-radius: 53% / 12%;
        }
        .youtube {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
          border-radius: inherit;
        }
      `}</style>
    </section>
  );
};

export default YoutubeVideo;
