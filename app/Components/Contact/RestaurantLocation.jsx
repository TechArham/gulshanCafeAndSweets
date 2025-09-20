'use client'
import React from 'react';
import { Facebook, Twitter, Linkedin, MessageCircle, MapPin, Clock, ExternalLink } from 'lucide-react';
import Image from "next/image";
import { useState, useEffect } from "react";
const RestaurantLocation = () => {
  const handleSocialClick = (platform) => {
    console.log(`Opening ${platform}`);
  };

  const openMap = () => {
    // Open Google Maps with the restaurant location
    const address = "213 W Tomichi Ave, Gunnison, CO 81230, United States";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };
    // Floting image
  const [floatingVeggies, setFloatingVeggies] = useState([]);

  const vegetables = [
    { image: "/images/imgi_64_testi-top-1-2.png" },
    { image: "/images/imgi_28_about-shape-1.2.png" },
    { image: "/images/imgi_63_testi-top-1-1.png" },
  ];

  useEffect(() => {
    const positions = [
      { x: 0, y: 70 }, // left side
      { x: 10, y: 10 }, // left side top
      { x: 85, y: 5 }, // right side top
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
    <div className="">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left Column - Restaurant Information */}
          <div className="relative">
            <div className="bg-[#fde1b9] backdrop-blur-sm p-5  lg:p-8 shadow-2xl border border-white/50 relative overflow-hidden h-full text-center">
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
            height={200}
            width={200}
            className="max-w-[100px] md:max-w-[200px]"
          />
        </div>
      ))}
<div className='border-[3px] border-white rounded-3xl py-8'>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-0.5 bg-orange-400"></div>
                    <span className="text-[#3f9065] tracking-widest uppercase font-normal font-bangers text-xl">
                      Restaurant Location
                    </span>
                    <div className="w-12 h-0.5 bg-orange-400"></div>
                  </div>
                  
                  <h2 className="text-black font-extrabold leading-tight uppercase font-barlow text-4xl md:text-5xl  mb-6">
                    VISIT OUR RESTAURANT
                  </h2>
                </div>

                {/* Address Section */}
                <div className="mb-8 flex-1">
                  <div className="flex items-start  justify-center gap-4 mb-6">
                      <p className="text-gray-700 text-lg leading-relaxed font-medium">
                        213 W Tomichi Ave, Gunnison, CO<br />
                        81230, United States
                      </p>
                  </div>

                  {/* Divider */}
                  <div className="w-16 h-0.5  bg-orange-400 my-8 mx-auto"></div>

                  {/* Hours Section */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <span className="font-semibold">Monday - Saturday:</span> 6:00pm - 10:00pm<br />
                        Sunday:is the holyday
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-4 mt-auto">
                  <button
                    onClick={() => handleSocialClick('facebook')}
                    className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center bg-transparent hover:cursor-pointer"
                  >
                    <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                  </button>
                  
                  <button
                    onClick={() => handleSocialClick('twitter')}
                    className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center bg-transparent hover:cursor-pointer"
                  >
                    <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-400" />
                  </button>
                  
                  <button
                    onClick={() => handleSocialClick('linkedin')}
                    className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center bg-transparent hover:cursor-pointer"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-700" />
                  </button>
                  
                  <button
                    onClick={() => handleSocialClick('whatsapp')}
                    className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center bg-transparent hover:cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 text-gray-600 hover:text-green-500" />
                  </button>
                </div>
              </div>
</div>






            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative">
            <div className="bg-white overflow-hidden shadow-2xl border border-gray-200 h-full min-h-[500px] lg:min-h-[600px] relative group">
              
                   <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.510529761611!2d90.4125189154317!3d23.810331384564188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ab7d14f5a7%3A0xabcdef123456789!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1693673600000!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> 


            </div>
          </div>


        </div>
      </div>
      <style jsx>{`
        @keyframes sway {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(5px) rotate(2deg); }
        }
        .animate-sway {
          animation: sway 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
export default RestaurantLocation;