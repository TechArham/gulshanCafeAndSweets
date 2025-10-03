"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown,ShoppingCart } from "lucide-react";
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import Link from "next/link";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  const timeoutRef = useRef(null);

  // Home page demo data
  const homePages = [
    {
      id: 1,
      title: "Home Page One",
      route: "/home-one",
      image: "/home-one.png",
    },
    {
      id: 2,
      title: "Home Page Two",
      route: "/home-two",
      image:
        "/home-two.png",
    },
    {
      id: 3,
      title: "Home Page Three",
      route: "/home-three",
      image:
        "/home-three.png",
    },
  ];

  // Mobile nav items
  const navItems = [
    {
      name: "Home",
      hasDropdown: true,
      dropdownItems: homePages.map((page) => ({
        name: page.title,
        href: page.route,
      })),
    },
    { name: "Menu", href: "/menu" },
    {
      name: "Order",
      hasDropdown: true,
      dropdownItems: [
        { name: "Dine-in", href: "/dine-in" },
        { name: "Online Order", href: "/menu" },
      ],
    },
    { name: "Catering", href: "/catering" },
    { name: "Contact", href: "/contact" },
  ];

  // Scroll effect
  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile toggles
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };
  const toggleDropdown = (name) =>
    setOpenDropdown(openDropdown === name ? null : name);

  // Hover logic for Home dropdown (desktop)
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHomeDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHomeDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 backdrop-blur-md ${
          isClient && isScrolled ? "bg-white shadow-lg" : "bg-white shadow-sm"
        }`}
      >
        <div className="px-4 sm:px-6 md:px-10 xl:px-20 h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logoo.png"
              width={200}
              height={200}
              alt="Logo"
              className="w-28 h-auto sm:w-32 md:w-56"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-16">
            {/* Home Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center hover:cursor-pointer gap-1 text-black font-semibold hover:text-red-500 transition-colors duration-500 font-barlow text-lg">
                Home
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-500 ${
                    isHomeDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mega menu */}
              <div
                className={`absolute left-0 mt-2 w-[1200px] bg-white rounded-md shadow-lg border transition-all duration-500 ease-in-out ${
                  isHomeDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-6">
                    {homePages.map((page) => (
                      <Link
                        key={page.id}
                        href={page.route}
                        className="text-center group cursor-pointer"
                      >
                        <div className="mb-3 overflow-hidden rounded-lg shadow-sm">
                          <img
                            src={page.image}
                            alt={page.title}
                            className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <h3 className="text-black mt-2 font-medium leading-tight text-xl  uppercase font-barlow group-hover:text-red-500 transition-colors">
                          {page.title}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Other menu items */}
            <Link
              href="/menu"
              className="text-black font-semibold hover:text-red-500 transition-colors font-barlow text-lg"
            >
              Menu
            </Link>

            <div className="relative group">
              <Link
                href="/order"
                className="flex items-center gap-1 text-black font-semibold hover:text-red-500 transition-colors font-barlow text-lg"
              >
                Order
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
              </Link>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2">
                  <Link
                    href="/dine-in"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-500"
                  >
                    Dine-in
                  </Link>
                  <Link
                    href="/onlineOrder"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-500"
                  >
                    Online Order
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/catering"
              className="text-black font-semibold hover:text-red-500 transition-colors font-barlow text-lg"
            >
              Catering
            </Link>
            <Link
              href="/contact"
              className="text-black font-semibold hover:text-red-500 transition-colors font-barlow text-lg"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center md:hidden xl:flex gap-3">
              <IoCallOutline className="text-black text-xl" />
              <p className="text-black text-sm md:text-base">+880 123 456 88</p>
            </div>
            <ShoppingCart className="text-black text-xl" />

            <Link
              href="/onlineOrder"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 uppercase tracking-wide text-sm transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-black hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-[9999] transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link href="/">
            <Image
              src="/logoo.png"
              width={190}
              height={180}
              alt="Logo"
              className="w-36 h-auto"
            />
          </Link>
          <button
            onClick={closeMobileMenu}
            className="text-gray-700 hover:text-red-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Nav Items */}
        <div className="flex flex-col mt-4 px-4 gap-2">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col">
              <button
                onClick={() =>
                  item.hasDropdown
                    ? toggleDropdown(item.name)
                    : closeMobileMenu()
                }
                className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-red-500 hover:bg-gray-100 rounded-md transition-all"
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Dropdown for mobile */}
              {item.hasDropdown && openDropdown === item.name && (
                <div className="flex flex-col ml-4 mt-1 gap-1">
                  {item.dropdownItems.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="px-3 py-2 text-gray-600 hover:text-red-500 hover:bg-gray-100 rounded-md"
                      onClick={closeMobileMenu}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-auto p-4 border-t">
          <Link
            href="/dine-in"
            className="block w-full text-center bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-semibold"
            onClick={closeMobileMenu}
          >
            Book Table
          </Link>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      ></div>
    </>
  );
};

export default Navbar;
