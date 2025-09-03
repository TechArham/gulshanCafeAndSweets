import React from 'react';
import Image from "next/image";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const instagramPosts = [
    '/fish.jpg',
    '/swtte.jpg',
    '/kalojam.jpg',
    '/swtte.jpg',
    '/tanduri.jpg',
        '/kalojam.jpg',
    '/swtte.jpg',
    '/tanduri.jpg',
    '/fish.jpg',
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start justify-center ">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image src="/logo.png" height={60} width={60} alt="Logo" />
            </div>

            <p className="text-gray-400 leading-relaxed -mt-8">
              Wecome Gulshan Cafe and Sweets. Serving authentic Bangladeshi
              home-style halal food in Albany, NY.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    315 Central Avenue , Albany, NY, United States, New York
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <a
                    href="mailto:info@example.com"
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    info@gulshancafeny.com
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <a
                    href="tel:+12345667123"
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    +1 838-207-7052
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <a
                    href="tel:+12345678"
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    +1 838-207-7052
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick links
            </h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Menu",
                "Blogs",
                "FAQ",
                "Service",
                "Gallery",
                "Contact Us",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram Gallery */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Instagram</h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramPosts.map((post, index) => (
                <Image
                  key={index}
                  src={post}
                  width={100}
                  height={100}
                  alt="Image"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Subscribe</h4>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Serving authentic Bangladeshi home-style halal food in Albany, NY.
              From traditional dishes to handcrafted sweets, each meal reflects
              rich heritage and care. Catering available for Weddings, Birthday
              Party and Events.
            </p>

            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-r-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Subscribe
                </button>
              </div>

              {/* Social Media */}
              <div className="flex space-x-3 pt-2">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Youtube, href: "#" },
                  { icon: Instagram, href: "#" },
                ].map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © Copyright Gulshan cafe and sweets. 2025 All Right Reserved
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}