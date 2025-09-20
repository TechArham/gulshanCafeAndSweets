'use client'
import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  Send,
  ChevronDown,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className=" bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Left Column - Contact Information */}
          <div className="relative">
            <div className=" bg-[#f7f2e2] rounded-[80px] p-8 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <h2 className="text-black font-extrabold leading-tight text-4xl md:text-5xl uppercase font-barlow pb-2">
                    CONTACT <span className="text-red-500">INFORMATION</span>
                  </h2>
                  <p className="text-[#6c6c6c] font-inter text-md leading-relaxed">
                    Relax and enjoy your food in our cozy restaurant, or take it
                    to-go. Great taste, great service – every visit is a
                    flavorful experience worth coming back for.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-center gap-5 group bg-white py-5 rounded-full px-5">
                    <div className="flex-shrink-0 w-15 h-15 bg-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:bg-red-600 transition-colors duration-300">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Address
                      </h3>
                      <p className="text-gray-600 text-lg">
                        8502 Preston Rd, Inglewood, Maine 98380
                      </p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="flex items-center gap-5 group bg-white py-5 rounded-full px-5">
                    <div className="flex-shrink-0 w-15 h-15 bg-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:bg-green-600 transition-colors duration-300">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Contact Info
                      </h3>
                      <div className=" text-gray-600 text-lg">
                        <p>Mobile: + +256-6547-98749</p>
                        <p>Email: info@barab.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex items-center gap-5 group bg-white py-5 rounded-full px-5">
                    <div className="flex-shrink-0 w-15 h-15 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:bg-orange-600 transition-colors duration-300">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Opening Hours
                      </h3>
                      <div className=" text-gray-600 text-lg">
                        <p>Monday - Saturday: 9:00am - 18:00pm</p>
                        <p>Sunday are Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="">
            <div className="bg-white rounded-3xl p-8 sm:p-10 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-8">
                  <h2 className="text-black font-extrabold leading-tight text-4xl md:text-5xl uppercase font-barlow mb-2">
                    Get In Touch!
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  <div className="flex-1 space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full px-6 py-5 bg-[#f7f2e2] rounded-full focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-lg placeholder-gray-500"
                        />
                        <User className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                          className="w-full px-6 py-5 bg-[#f7f2e2] rounded-full focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-lg placeholder-gray-500"
                        />
                        <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-6 py-5 bg-[#f7f2e2] rounded-full focus:outline-none focus:border-transparent transition-all duration-300 text-lg appearance-none cursor-pointer text-gray-500"
                      >
                        <option value="">Select Service</option>
                        <option value="dine-in">Dine In</option>
                        <option value="takeout">Takeout</option>
                        <option value="delivery">Delivery</option>
                        <option value="catering">Catering</option>
                        <option value="reservation">Reservation</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Write Message..."
                        rows="9"
                        className="w-full px-6 py-4 bg-[#f7f2e2]  rounded-3xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg placeholder-gray-500 resize-none"
                      ></textarea>
                      <Send className="absolute right-4 top-6 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                    >
                      SEND MESSAGE NOW
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-110 active:scale-95 z-50"
      >
        <svg
          className="w-6 h-6 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
