import React from "react";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
const AboutUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image Collage */}
          <div className="relative order-2 lg:order-1">
            <Image src='/exparience.png' height={500} width={500} alt='Img'/>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            {/* Section Header */}
            <div className="mb-8">
              <h3 className="text-red-500 font-script text-lg sm:text-xl mb-3">
                About Us
              </h3>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Why We Are The Best
              </h2>
            </div>

            {/* Description */}
            <div className="mb-10">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse qua nihil molestiae consequatur, vel illum qui dolorem eum
                fugiat quvuptatas nulla pariaturcaque ipsa quae ab illo
                inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6 mb-10">
              {/* Buffet Service */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                  <Image src='/6.png' height={25} width={25} alt='Img'/>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Buffet Service
                  </h4>
                  <p className="text-gray-600">
                    Qariatureaque ipsa quae a illo inventore veritatis et quasi
                    architecto
                  </p>
                </div>
              </div>

              {/* Online Booking */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                  <Image src='/5.png' height={25} width={25} alt='Img'/>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Online Booking
                  </h4>
                  <p className="text-gray-600">
                    Qariatureaque ipsa quae a illo inventore veritatis et quasi
                    architecto
                  </p>
                </div>
              </div>
            </div>

            {/* About Us Button */}
            <div>
              <button className="bg-red-700 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
