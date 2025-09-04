"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Navigation menu items
  const navItems = [
    { name: "Home", href: "/", hasDropdown: false },
    { name: "Menu", href: "/menu", hasDropdown: false },
    {
      name: "Order",
      href: "/rder ",
      hasDropdown: true,
      dropdownItems: [
        { name: "Dine-in", href: "/dine-in" },
        { name: "Online Order", href: "/onlineOrder" },
      ],
    },
    { name: "Catering", href: "/catering", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // Toggle dropdown in mobile menu
  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`transition-all py-1 sm:py-2 duration-300 items-center sticky top-0 z-50 bg-white shadow-md ${isScrolled
          ? "bg-White backdrop-blur-md shadow-lg"
          : "bg-White shadow-sm"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex rounded-2xl items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  height={60}
                  width={60}
                  alt="Logo"
                  className="rounded-2xl shadow-md sm:h-20 sm:w-20 h-12 w-12"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <a
                      href={item.href}
                      className="text-red-600 hover:text-red-500 px-3 py-2 text-lg font-bold transition-colors duration-200 flex items-center"
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                      )}
                    </a>

                    {/* Dropdown Menu */}
                    {item.hasDropdown && item.dropdownItems && (
                      <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                        <div className="py-2">
                          {item.dropdownItems.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-colors"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:block ">
              <div className="flex items-center gap-8">
                <FaCartPlus className="text-white text-3xl" />
                <a
                  href="/reservation"
                  className="bg-[linear-gradient(155deg,#ff6b35_0%,#f8ba0e_100%)] text-white px-7 py-4 rounded-md font-semibold transition-transform duration-200 hover:scale-105"
                >
                  🍽️ Order Now
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-colors duration-200"
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMobileMenuOpen
                      ? "opacity-0 rotate-180"
                      : "opacity-100 rotate-0"
                      }`}
                  />
                  <X
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMobileMenuOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 -rotate-180"
                      }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-50" : "opacity-0"
            }`}
          onClick={closeMobileMenu}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 left-0 h-full w-80 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-200">
            <div className="text-lg sm:text-xl font-bold">
              <span className="text-red-500">Gulshan Cafe and Sweets</span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-red-500 hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className={`transform transition-all duration-300 ${isMobileMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
                  }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() =>
                    item.hasDropdown
                      ? toggleDropdown(item.name)
                      : closeMobileMenu()
                  }
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:text-red-500 hover:bg-red-50 transition-colors duration-200"
                >
                  <span className="font-medium text-left">{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </button>

                {/* Dropdown inside mobile */}
                {item.hasDropdown && openDropdown === item.name && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.dropdownItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-red-500 hover:bg-gray-100 rounded-md transition-colors"
                        onClick={closeMobileMenu}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <div className="px-4 py-6 border-t border-gray-200">
            <a
              href="/reservation"
              className="block w-full bg-red-500 hover:bg-red-600 text-white text-center px-6 py-3 rounded-full font-medium transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Book Table
            </a>
          </div>

          {/* Mobile Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              © 2025 Gulshan Cafe and Sweets
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
