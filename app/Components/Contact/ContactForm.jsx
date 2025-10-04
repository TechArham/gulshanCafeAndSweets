"use client";
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
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Left Column - Contact Information */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-[#f7f2e2] rounded-[40px] sm:rounded-[60px] md:rounded-[80px] p-6 sm:p-10 md:p-16 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
              <div className="relative z-10">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-black font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl uppercase font-barlow pb-2 text-center lg:text-left">
                    CONTACT <span className="text-red-500">INFORMATION</span>
                  </h2>
                  <p className="text-[#6c6c6c] font-inter text-base sm:text-md leading-relaxed text-center lg:text-left">
                    Relax and enjoy your food in our cozy restaurant, or take it
                    to-go. Great taste, great service – every visit is a
                    flavorful experience worth coming back for.
                  </p>
                </div>

                <div className="space-y-5 sm:space-y-8">
                  {/* Address */}
<div className="w-full max-w-2xl mx-auto">
  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 bg-white rounded-2xl sm:rounded-full px-5 sm:px-8 py-5 shadow-md hover:shadow-lg transition-shadow duration-300 group">
    {/* Icon Section */}
    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:bg-red-600 transition-colors duration-300">
      <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    </div>

    {/* Text Section */}
    <div className="flex-1 text-center sm:text-left">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
        Address
      </h3>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
        8502 Preston Rd, Inglewood, Maine 98380
      </p>
    </div>
  </div>
</div>


                  {/* Contact Info */}
<div className="w-full max-w-2xl mx-auto">
  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 bg-white rounded-2xl sm:rounded-full px-5 sm:px-8 py-5 shadow-md hover:shadow-lg transition-shadow duration-300 group">
    {/* Icon Section */}
    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:bg-green-600 transition-colors duration-300">
      <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    </div>

    {/* Text Section */}
    <div className="flex-1 text-center sm:text-left">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
        Contact Info
      </h3>
      <div className="text-gray-600 text-base sm:text-lg leading-relaxed">
        <p>
          Mobile: <span className="font-medium">+256-6547-98749</span>
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:info@barab.com"
            className="text-green-600 hover:underline font-medium"
          >
            info@barab.com
          </a>
        </p>
      </div>
    </div>
  </div>
</div>


                  {/* Opening Hours */}


                  <div className="w-full max-w-2xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 bg-white rounded-2xl sm:rounded-full px-5 sm:px-8 py-5 shadow-md hover:shadow-lg transition-shadow duration-300">
                      {/* Icon Section */}
                      <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:bg-orange-600 transition-colors duration-300">
<Clock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>

                      {/* Text Section */}
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                          Opening Hours
                        </h3>
                        <div className="text-gray-600 text-base sm:text-lg leading-relaxed">
                          <p>
                            Mon - Sat:{" "}
                            <span className="font-medium">9:00am - 6:00pm</span>
                          </p>
                          <p>
                            Sunday:{" "}
                            <span className="font-medium text-red-500">
                              Closed
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-3md:p-10 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-6 sm:mb-8 text-center lg:text-left">
                  <h2 className="text-black font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl uppercase font-barlow mb-2">
                    Get In Touch!
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  <div className="flex-1 space-y-5 sm:space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full px-5 sm:px-6 py-4 sm:py-5 bg-[#f7f2e2] rounded-full focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-base sm:text-lg placeholder-gray-500"
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
                          className="w-full px-5 sm:px-6 py-4 sm:py-5 bg-[#f7f2e2] rounded-full focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-base sm:text-lg placeholder-gray-500"
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
                        className="w-full px-5 sm:px-6 py-4 sm:py-5 bg-[#f7f2e2] rounded-full focus:outline-none focus:border-transparent transition-all duration-300 text-base sm:text-lg appearance-none cursor-pointer text-gray-500"
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
                        rows="8"
                        className="w-full px-5 sm:px-6 py-4 bg-[#f7f2e2] rounded-2xl sm:rounded-3xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-base sm:text-lg placeholder-gray-500 resize-none"
                      ></textarea>
                      <Send className="absolute right-4 top-5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6 sm:mt-8 text-center lg:text-left">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-black text-white text-base sm:text-lg font-semibold rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
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
        className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-110 active:scale-95 z-50"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 mx-auto"
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
    </div>
  );
};

export default ContactForm;
