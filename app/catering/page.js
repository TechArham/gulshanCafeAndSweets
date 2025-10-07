"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Calendar,
  Users,
  MapPin,
  CreditCard,
  Check,
  AlertCircle,
  Clock,
  DollarSign,
  Sparkles,
  Star,
  Heart,
} from "lucide-react";
import Image from "next/image";
const CateringFlow = () => {
  // Floting image
  const [floatingVeggies, setFloatingVeggies] = useState([]);

  const vegetables = [
    { image: "/images/imgi_64_testi-top-1-2.png" },
    { image: "/images/imgi_69_blog-1-2.png" },
    { image: "/images/imgi_63_testi-top-1-1.png" },
  ];

  useEffect(() => {
    const positions = [
      { x: 0, y: 70 }, // left side
      { x: 5, y: 15 }, // left side top
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
  const [currentStep, setCurrentStep] = useState(1);
  const [orderData, setOrderData] = useState({
    menuItems: {},
    guestCount: "",
    eventDate: "",
    eventTime: "",
    serviceType: "delivery",
    contactInfo: {
      name: "",
      email: "",
      phone: "",
      company: "",
    },
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    specialRequests: "",
    paymentMethod: "card",
  });

  const [errors, setErrors] = useState({});
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [pulseEffect, setPulseEffect] = useState(false);

  // Pulse animation trigger
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseEffect(true);
      setTimeout(() => setPulseEffect(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Sample menu data with categories and vibrant styling
  const menuCategories = {
    appetizers: {
      name: "🥗 Appetizers",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      items: [
        {
          id: "app1",
          name: "Mediterranean Platter",
          price: 4.5,
          minOrder: 25,
          description: "Hummus, olives, cheese, crackers",
          emoji: "😋",
        },
        {
          id: "app2",
          name: "Shrimp Cocktail",
          price: 6.75,
          minOrder: 25,
          description: "Fresh shrimp with cocktail sauce",
          emoji: "🦐",
        },
        {
          id: "app3",
          name: "Bruschetta Bar",
          price: 3.25,
          minOrder: 25,
          description: "Assorted toppings and breads",
          emoji: "🍞",
        },
      ],
    },
    mains: {
      name: "🍽️ Main Courses",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      items: [
        {
          id: "main1",
          name: "Grilled Chicken Breast",
          price: 12.95,
          minOrder: 25,
          description: "Herb-seasoned with sides",
          emoji: "🍗",
        },
        {
          id: "main2",
          name: "Beef Tenderloin",
          price: 18.5,
          minOrder: 25,
          description: "Premium cut with vegetables",
          emoji: "🥩",
        },
        {
          id: "main3",
          name: "Vegetarian Lasagna",
          price: 11.25,
          minOrder: 25,
          description: "Layered with fresh vegetables",
          emoji: "🍝",
        },
        {
          id: "main4",
          name: "Salmon Teriyaki",
          price: 15.75,
          minOrder: 25,
          description: "Glazed salmon with rice",
          emoji: "🐟",
        },
      ],
    },
    sides: {
      name: "🥗 Sides & Salads",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      items: [
        {
          id: "side1",
          name: "Caesar Salad",
          price: 4.25,
          minOrder: 25,
          description: "Romaine, parmesan, croutons",
          emoji: "🥬",
        },
        {
          id: "side2",
          name: "Roasted Vegetables",
          price: 3.75,
          minOrder: 25,
          description: "Seasonal vegetables",
          emoji: "🥕",
        },
        {
          id: "side3",
          name: "Garlic Bread",
          price: 2.5,
          minOrder: 25,
          description: "Fresh baked with herbs",
          emoji: "🧄",
        },
      ],
    },
    desserts: {
      name: "🧁 Desserts",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
      items: [
        {
          id: "dess1",
          name: "Chocolate Cake",
          price: 4.95,
          minOrder: 25,
          description: "Rich chocolate layer cake",
          emoji: "🍰",
        },
        {
          id: "dess2",
          name: "Fruit Tart Platter",
          price: 5.25,
          minOrder: 25,
          description: "Assorted seasonal fruits",
          emoji: "🍓",
        },
      ],
    },
  };

  const TAX_RATE = 0.085;
  const ADVANCE_PERCENTAGE = 0.6;

  const getMinDate = () => {
    const today = new Date();
    const minDate = new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000);
    return minDate.toISOString().split("T")[0];
  };

  const calculateTotals = () => {
    let subtotal = 0;
    Object.entries(orderData.menuItems).forEach(([itemId, quantity]) => {
      if (quantity > 0) {
        const item = findMenuItem(itemId);
        if (item) subtotal += item.price * quantity;
      }
    });

    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;
    const advancePayment = total * ADVANCE_PERCENTAGE;
    const balanceDue = total - advancePayment;

    return { subtotal, tax, total, advancePayment, balanceDue };
  };

  const findMenuItem = (itemId) => {
    for (const category of Object.values(menuCategories)) {
      const item = category.items.find((item) => item.id === itemId);
      if (item) return item;
    }
    return null;
  };

  const getTotalItemCount = () => {
    return Object.values(orderData.menuItems).reduce(
      (sum, qty) => sum + (qty || 0),
      0
    );
  };

  const updateMenuQuantity = (itemId, quantity) => {
    setOrderData((prev) => ({
      ...prev,
      menuItems: {
        ...prev.menuItems,
        [itemId]: Math.max(0, quantity),
      },
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      const totalItems = getTotalItemCount();
      if (totalItems < 25) {
        newErrors.menuItems = "Minimum order of 25 items required for catering";
      }
    }

    if (step === 2) {
      if (!orderData.guestCount || orderData.guestCount < 25) {
        newErrors.guestCount =
          "Minimum 25 guests required for catering service";
      }
      if (!orderData.eventDate) {
        newErrors.eventDate = "Event date is required";
      } else {
        const eventDate = new Date(orderData.eventDate);
        const minDate = new Date(getMinDate());
        if (eventDate < minDate) {
          newErrors.eventDate = "Event must be at least 5 days in advance";
        }
      }
      if (!orderData.eventTime) {
        newErrors.eventTime = "Event time is required";
      }
      if (!orderData.contactInfo.name) {
        newErrors.contactName = "Contact name is required";
      }
      if (!orderData.contactInfo.email) {
        newErrors.contactEmail = "Email is required";
      }
      if (!orderData.contactInfo.phone) {
        newErrors.contactPhone = "Phone number is required";
      }
      if (orderData.serviceType === "delivery") {
        if (!orderData.address.street) {
          newErrors.addressStreet = "Street address is required for delivery";
        }
        if (!orderData.address.city) {
          newErrors.addressCity = "City is required for delivery";
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const confirmOrder = () => {
    if (validateStep(2)) {
      setOrderConfirmed(true);
    }
  };

  const { subtotal, tax, total, advancePayment, balanceDue } =
    calculateTotals();

  if (orderConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-10 animate-pulse"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
                <Check className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                🎉 Order Confirmed! 🎉
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Your amazing catering experience is on its way!
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-200">
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-purple-500 mr-2 animate-spin" />
                  <p className="font-bold text-2xl text-gray-900">
                    Order ID: CAT-2024-
                    {Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                  <Sparkles className="w-6 h-6 text-purple-500 ml-2 animate-spin" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-purple-600 font-semibold">
                      📅 Event Date
                    </p>
                    <p className="text-gray-900 font-bold">
                      {new Date(orderData.eventDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-blue-600 font-semibold">
                      💰 Total Amount
                    </p>
                    <p className="text-gray-900 font-bold text-xl">
                      ${total.toFixed(2)}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-green-600 font-semibold">
                      ✅ Advance Paid
                    </p>
                    <p className="text-green-600 font-bold text-xl">
                      ${advancePayment.toFixed(2)}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-orange-600 font-semibold">
                      ⏳ Balance Due
                    </p>
                    <p className="text-orange-600 font-bold text-xl">
                      ${balanceDue.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 text-pink-600 mb-4">
                <Heart className="w-5 h-5 fill-current animate-pulse" />
                <p className="font-medium">
                  Confirmation sent to {orderData.contactInfo.email}
                </p>
                <Heart className="w-5 h-5 fill-current animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated Header */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 shadow-2xl border-b-4 border-white/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-pink-400/20 to-purple-400/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-yellow-300 mr-3 animate-spin" />
            <h1 className="text-white font-bold leading-tight text-3xl md:text-4xl uppercase font-barlow mb-3 text-center mx-auto">
              Premium Catering Experience
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-300 ml-3 animate-spin" />
          </div>
          <p className="text-white/90 text-xl text-center font-medium">
            🎊 Creating unforgettable moments for 25+ guests 🎊
          </p>
        </div>
      </div>

      {/* Colorful Progress Steps */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/20 gap-6 lg:gap-0">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className="flex items-start md:items-center w-full md:w-auto"
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-bold text-lg md:text-xl transform transition-all duration-500 ${
                  currentStep >= step
                    ? `bg-gradient-to-r ${
                        step === 1
                          ? "from-pink-500 to-rose-500"
                          : step === 2
                          ? "from-purple-500 to-indigo-500"
                          : "from-green-500 to-emerald-500"
                      } text-white shadow-lg scale-110`
                    : "bg-white/20 text-white/60 backdrop-blur-sm"
                } ${
                  currentStep === step && pulseEffect ? "animate-pulse" : ""
                }`}
              >
                {currentStep > step ? (
                  <Check className="w-6 h-6 md:w-8 md:h-8" />
                ) : (
                  step
                )}
              </div>

              <div className="ml-3 md:ml-4 flex-1">
                <p
                  className={`font-bold text-base md:text-lg ${
                    currentStep >= step ? "text-white" : "text-white/60"
                  }`}
                >
                  {step === 1
                    ? "🍽️ Menu Magic"
                    : step === 2
                    ? "📋 Event Details"
                    : "💳 Payment & Review"}
                </p>
                <p
                  className={`text-xs md:text-sm ${
                    currentStep >= step ? "text-white/80" : "text-white/40"
                  }`}
                >
                  {step === 1
                    ? "Choose your favorites"
                    : step === 2
                    ? "Tell us about your event"
                    : "Confirm & celebrate"}
                </p>
              </div>

              {step < 3 && (
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white/60 mx-4 md:mx-8" />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Vibrant Menu Selection */}
        {currentStep === 1 && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl px-2 py-5 md:p-3 xl:p-8 border border-white/30">
                <div className="flex items-center mb-8  px-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h2 className=" text-black font-bold leading-tight text-4xl md:text-4xl uppercase font-barlow bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                    Select Your Dream Menu
                  </h2>
                </div>

                {Object.entries(menuCategories).map(
                  ([categoryKey, category]) => (
                    <div
                      key={categoryKey}
                      className={`mb-10 ${category.bgColor} rounded-3xl px-2 lg:px-4  border-2 border-white/50`}
                    >
                      {/* Category Header */}
                      <div
                        className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${category.color} text-white rounded-2xl font-bold text-lg sm:text-xl mb-4 sm:mb-6 shadow-lg`}
                      >
                        <span className="mr-2">{category.name}</span>
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current animate-pulse" />
                      </div>

                      {/* Grid Items */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {category.items.map((item) => (
                          <div
                            key={item.id}
                            className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-white"
                          >
                            {/* Top Section */}
                            <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-4 gap-3 sm:gap-0">
                              <div className="flex items-start sm:items-center">
                                <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">
                                  {item.emoji}
                                </span>
                                <div>
                                  <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                                    {item.name}
                                  </h4>
                                  <p className="text-gray-600 text-xs sm:text-sm">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                              <div className="text-left sm:text-right">
                                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                  ${item.price}
                                </span>
                              </div>
                            </div>

                            {/* Minimum Order Info */}
                            <div className="bg-gray-50 rounded-xl p-2 sm:p-3 mb-4">
                              <p className="text-[10px] sm:text-xs text-gray-500">
                                ✨ Minimum order: {item.minOrder} servings
                              </p>
                            </div>

                            {/* Quantity Selector */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
                              <span className="font-semibold text-gray-700 text-sm sm:text-base">
                                Quantity:
                              </span>
                              <div className="flex items-center space-x-2 sm:space-x-3">
                                <button
                                  onClick={() =>
                                    updateMenuQuantity(
                                      item.id,
                                      (orderData.menuItems[item.id] || 0) - 1
                                    )
                                  }
                                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-red-400 to-pink-500 text-white flex items-center justify-center hover:scale-110 transition-transform font-bold text-base sm:text-lg shadow-lg"
                                >
                                  -
                                </button>
                                <span className="w-12 sm:w-16 text-center font-bold text-lg sm:text-xl text-gray-900 bg-gray-100 rounded-lg py-1 sm:py-2">
                                  {orderData.menuItems[item.id] || 0}
                                </span>
                                <button
                                  onClick={() =>
                                    updateMenuQuantity(
                                      item.id,
                                      (orderData.menuItems[item.id] || 0) + 1
                                    )
                                  }
                                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white flex items-center justify-center hover:scale-110 transition-transform font-bold text-base sm:text-lg shadow-lg"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Vibrant Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl shadow-2xl p-6 sticky top-6 border-2 border-white/50">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-3">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Order Summary
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  {Object.entries(orderData.menuItems).map(
                    ([itemId, quantity]) => {
                      if (quantity > 0) {
                        const item = findMenuItem(itemId);
                        if (item) {
                          return (
                            <div
                              key={itemId}
                              className="flex justify-between items-center bg-white rounded-xl p-3 shadow-sm border border-blue-100"
                            >
                              <div className="flex items-center">
                                <span className="text-xl mr-2">
                                  {item.emoji}
                                </span>
                                <div>
                                  <span className="font-semibold text-gray-800 text-sm">
                                    {item.name}
                                  </span>
                                  <span className="text-blue-600 font-bold ml-2">
                                    x{quantity}
                                  </span>
                                </div>
                              </div>
                              <span className="font-bold text-green-600">
                                ${(item.price * quantity).toFixed(2)}
                              </span>
                            </div>
                          );
                        }
                      }
                      return null;
                    }
                  )}
                </div>

                {getTotalItemCount() > 0 && (
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-4 mb-6 border border-green-200">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Subtotal:</span>
                        <span className="font-bold text-gray-900">
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Tax (8.5%):</span>
                        <span className="font-bold text-gray-900">
                          ${tax.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-xl font-bold border-t-2 border-green-300 pt-2">
                        <span className="text-green-800">Total:</span>
                        <span className="text-green-600">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div
                  className={`p-4 rounded-2xl mb-4 ${
                    getTotalItemCount() >= 25
                      ? "bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300"
                      : "bg-gradient-to-r from-red-100 to-pink-100 border border-red-300"
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <Users
                      className={`w-6 h-6 mr-3 ${
                        getTotalItemCount() >= 25
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    />
                    <span
                      className={`font-bold text-lg ${
                        getTotalItemCount() >= 25
                          ? "text-green-800"
                          : "text-red-800"
                      }`}
                    >
                      Total Items: {getTotalItemCount()}
                    </span>
                  </div>
                  {getTotalItemCount() < 25 ? (
                    <div className="flex items-center text-red-700">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      <p className="font-medium">
                        Need {25 - getTotalItemCount()} more items
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center text-green-700">
                      <Check className="w-5 h-5 mr-2" />
                      <p className="font-medium">Perfect! Ready to proceed</p>
                    </div>
                  )}
                </div>

                {errors.menuItems && (
                  <div className="bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-300 rounded-2xl p-4">
                    <p className="text-red-700 font-semibold flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      {errors.menuItems}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Colorful Order Details */}
        {currentStep === 2 && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Event Details */}
              <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-3xl shadow-2xl p-2 md:p-4 xl:p-8 border-2 border-white/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    🎉 Event Details
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      👥 Guest Count *
                    </label>
                    <input
                      type="number"
                      min="25"
                      value={orderData.guestCount}
                      onChange={(e) =>
                        setOrderData((prev) => ({
                          ...prev,
                          guestCount: e.target.value,
                        }))
                      }
                      className={`w-full px-4 py-3 border-2 rounded-2xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all text-lg font-semibold placeholder-gray-600 text-gray-800 ${
                        errors.guestCount
                          ? "border-red-400 bg-red-50"
                          : "border-purple-200 bg-white"
                      }`}
                      placeholder="Minimum 25 guests"
                    />
                    {errors.guestCount && (
                      <p className="text-red-600 font-medium mt-2 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.guestCount}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      📅 Event Date *
                    </label>
                    <input
                      type="date"
                      min={getMinDate()}
                      value={orderData.eventDate}
                      onChange={(e) =>
                        setOrderData((prev) => ({
                          ...prev,
                          eventDate: e.target.value,
                        }))
                      }
                      className={`w-full px-4 py-3 border-2 rounded-2xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all text-lg font-semibold placeholder-gray-600 text-gray-800 ${
                        errors.eventDate
                          ? "border-red-400 bg-red-50"
                          : "border-purple-200 bg-white"
                      }`}
                    />
                    {errors.eventDate && (
                      <p className="text-red-600 font-medium mt-2 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.eventDate}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      ⏰ Event Time *
                    </label>
                    <input
                      type="time"
                      value={orderData.eventTime}
                      onChange={(e) =>
                        setOrderData((prev) => ({
                          ...prev,
                          eventTime: e.target.value,
                        }))
                      }
                      className={`w-full px-4 py-3 border-2 rounded-2xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all text-lg font-semibold placeholder-gray-600 text-gray-800 ${
                        errors.eventTime
                          ? "border-red-400 bg-red-50"
                          : "border-purple-200 bg-white"
                      }`}
                    />
                    {errors.eventTime && (
                      <p className="text-red-600 font-medium mt-2 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.eventTime}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      🚚 Service Type *
                    </label>
                    <select
                      value={orderData.serviceType}
                      onChange={(e) =>
                        setOrderData((prev) => ({
                          ...prev,
                          serviceType: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border-2 border-purple-200 bg-white rounded-2xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all text-lg font-semibold placeholder-gray-600 text-gray-800"
                    >
                      <option value="delivery">🚚 Delivery Service</option>
                      <option value="pickup">🏪 Pickup</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-white via-blue-50 to-cyan-50 rounded-3xl shadow-2xl p-8 border-2 border-white/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    📞 Contact Information
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      👤 Full Name *
                    </label>
                    <input
                      type="text"
                      value={orderData.contactInfo.name}
                      onChange={(e) =>
                        setOrderData((prev) => ({
                          ...prev,
                          contactInfo: {
                            ...prev.contactInfo,
                            name: e.target.value,
                          },
                        }))
                      }
                      className={`w-full px-4 py-3 border-2 rounded-2xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all text-lg font-semibold placeholder-gray-600 text-gray-800 ${
                        errors.contactName
                          ? "border-red-400 bg-red-50"
                          : "border-blue-200 bg-white"
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.contactName && (
                      <p className="text-red-600 font-medium mt-2 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.contactName}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      🏢 Company
                    </label>
                    <input
                      type="text"
                      value={orderData.contactInfo.company}
                      onChange={(e) =>
                        setOrderData((prev) => ({
                          ...prev,
                          contactInfo: {
                            ...prev.contactInfo,
                            company: e.target.value,
                          },
                        }))
                      }
                      className="w-full px-4 py-3 border-2 border-blue-200 bg-white rounded-2xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all text-lg font-semibold placeholder-gray-600 text-gray-800"
                      placeholder="Company name (optional)"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      ✉️ Email *
                    </label>
                    <input
                      type="email"
                      value={orderData.contactInfo.email}
                      onChange={(e) =>
                        setOrderData((prev) => ({
                          ...prev,
                          contactInfo: {
                            ...prev.contactInfo,
                            email: e.target.value,
                          },
                        }))
                      }
                      className={`w-full px-4 py-3 border-2 rounded-2xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all text-lg font-semibold placeholder-gray-600 text-gray-800 ${
                        errors.contactEmail
                          ? "border-red-400 bg-red-50"
                          : "border-blue-200 bg-white"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.contactEmail && (
                      <p className="text-red-600 font-medium mt-2 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.contactEmail}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      📱 Phone *
                    </label>
                    <input
                      type="tel"
                      value={orderData.contactInfo.phone}
                      onChange={(e) =>
                        setOrderData((prev) => ({
                          ...prev,
                          contactInfo: {
                            ...prev.contactInfo,
                            phone: e.target.value,
                          },
                        }))
                      }
                      className={`w-full px-4 py-3 border-2 rounded-2xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all text-lg font-semibold placeholder-gray-600 text-gray-800 ${
                        errors.contactPhone
                          ? "border-red-400 bg-red-50"
                          : "border-blue-200 bg-white"
                      }`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.contactPhone && (
                      <p className="text-red-600 font-medium mt-2 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.contactPhone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              {orderData.serviceType === "delivery" && (
                <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 rounded-3xl shadow-2xl p-8 border-2 border-white/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      🗺️ Delivery Address
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        🏠 Street Address *
                      </label>
                      <input
                        type="text"
                        value={orderData.address.street}
                        onChange={(e) =>
                          setOrderData((prev) => ({
                            ...prev,
                            address: {
                              ...prev.address,
                              street: e.target.value,
                            },
                          }))
                        }
                        className={`w-full px-4 py-3 border-2 rounded-2xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all text-lg font-semibold ${
                          errors.addressStreet
                            ? "border-red-400 bg-red-50"
                            : "border-green-200 bg-white"
                        } placeholder:text-gray-500 text-gray-700`}
                        placeholder="123 Main Street"
                      />
                      {errors.addressStreet && (
                        <p className="text-red-600 font-medium mt-2 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.addressStreet}
                        </p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          🏙️ City *
                        </label>
                        <input
                          type="text"
                          value={orderData.address.city}
                          onChange={(e) =>
                            setOrderData((prev) => ({
                              ...prev,
                              address: {
                                ...prev.address,
                                city: e.target.value,
                              },
                            }))
                          }
                          className={`w-full px-4 py-3 border-2 rounded-2xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all text-lg font-semibold ${
                            errors.addressCity
                              ? "border-red-400 bg-red-50"
                              : "border-green-200 bg-white"
                          } placeholder:text-gray-500 text-gray-700`}
                          placeholder="Your City"
                        />
                        {errors.addressCity && (
                          <p className="text-red-600 font-medium mt-2 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.addressCity}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          🗺️ State
                        </label>
                        <input
                          type="text"
                          value={orderData.address.state}
                          onChange={(e) =>
                            setOrderData((prev) => ({
                              ...prev,
                              address: {
                                ...prev.address,
                                state: e.target.value,
                              },
                            }))
                          }
                          className="w-full px-4 py-3 border-2 border-green-200 bg-white rounded-2xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all text-lg font-semibold placeholder:text-gray-500 text-gray-700"
                          placeholder="State"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          📮 ZIP Code
                        </label>
                        <input
                          type="text"
                          value={orderData.address.zip}
                          onChange={(e) =>
                            setOrderData((prev) => ({
                              ...prev,
                              address: {
                                ...prev.address,
                                zip: e.target.value,
                              },
                            }))
                          }
                          className="w-full px-4 py-3 border-2 border-green-200 bg-white rounded-2xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all text-lg font-semibold placeholder:text-gray-500 text-gray-700"
                          placeholder="12345"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Special Requests */}
              <div className="bg-gradient-to-br from-white via-yellow-50 to-orange-50 rounded-3xl shadow-2xl p-8 border-2 border-white/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    ✨ Special Requests
                  </h3>
                </div>
                <textarea
                  value={orderData.specialRequests}
                  onChange={(e) =>
                    setOrderData((prev) => ({
                      ...prev,
                      specialRequests: e.target.value,
                    }))
                  }
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-yellow-200 bg-white rounded-2xl focus:ring-4 focus:ring-yellow-300 focus:border-yellow-500 transition-all text-lg placeholder:text-gray-500 text-gray-700"
                  placeholder="🍽️ Any dietary restrictions, setup requirements, or special magic you'd like us to add..."
                />
              </div>
            </div>

            {/* Colorful Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-white via-indigo-50 to-purple-50 rounded-3xl shadow-2xl p-6 sticky top-6 border-2 border-white/50">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-3">
                    <Star className="w-5 h-5 text-white fill-current" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Event Summary
                  </h3>
                </div>

                <div className="space-y-4 text-lg">
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-indigo-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">
                        👥 Guests:
                      </span>
                      <span className="font-bold text-indigo-600 text-xl">
                        {orderData.guestCount || "—"}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-indigo-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">
                        📅 Date:
                      </span>
                      <span className="font-bold text-purple-600">
                        {orderData.eventDate
                          ? new Date(orderData.eventDate).toLocaleDateString()
                          : "—"}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-indigo-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">
                        ⏰ Time:
                      </span>
                      <span className="font-bold text-pink-600">
                        {orderData.eventTime || "—"}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-indigo-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">
                        🚚 Service:
                      </span>
                      <span className="font-bold text-green-600 capitalize">
                        {orderData.serviceType}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-4 mt-6 border-2 border-green-200">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">
                        Subtotal:
                      </span>
                      <span className="font-bold text-gray-900">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">Tax:</span>
                      <span className="font-bold text-gray-900">
                        ${tax.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-xl font-bold border-t-2 border-green-300 pt-3">
                      <span className="text-green-800">Total:</span>
                      <span className="text-green-600">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-4 mt-4 border-2 border-yellow-300">
                  <div className="flex items-center mb-3">
                    <Clock className="w-6 h-6 text-yellow-600 mr-3" />
                    <span className="font-bold text-yellow-900">
                      ⏰ 5-Day Notice Required
                    </span>
                  </div>
                  <p className="text-yellow-800 font-medium">
                    All magical catering experiences must be ordered at least 5
                    days in advance! ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Spectacular Review & Payment */}
        {currentStep === 3 && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Order Review */}
              <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl shadow-2xl p-2 md:p-4 lg:p-8 border-2 border-white/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    🎊 Order Review
                  </h3>
                </div>

                {/* Selected Items */}
                <div className="mb-8">
                  <h4 className="font-bold text-xl text-gray-800 mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 text-purple-500 mr-2" />
                    Your Selected Menu Items
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(orderData.menuItems).map(
                      ([itemId, quantity]) => {
                        if (quantity > 0) {
                          const item = findMenuItem(itemId);
                          if (item) {
                            return (
                              <div
                                key={itemId}
                                className="flex justify-between items-center py-4 px-4 bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-sm border border-blue-100"
                              >
                                <div className="flex items-center">
                                  <span className="text-2xl mr-4">
                                    {item.emoji}
                                  </span>
                                  <div>
                                    <span className="font-bold text-gray-900 text-lg">
                                      {item.name}
                                    </span>
                                    <span className="text-blue-600 font-bold ml-3 bg-blue-100 px-3 py-1 rounded-full text-sm">
                                      x{quantity}
                                    </span>
                                  </div>
                                </div>
                                <span className="font-bold text-green-600 text-xl">
                                  ${(item.price * quantity).toFixed(2)}
                                </span>
                              </div>
                            );
                          }
                        }
                        return null;
                      }
                    )}
                  </div>
                </div>

                {/* Event Details Review */}
                <div className="border-t-2 border-purple-200 pt-6">
                  <h4 className="font-bold text-xl text-gray-800 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 text-purple-500 mr-2" />
                    Event Details
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 border border-purple-200">
                      <span className="text-purple-700 font-semibold">
                        👥 Guest Count:
                      </span>
                      <p className="text-purple-900 font-bold text-xl">
                        {orderData.guestCount} guests
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-4 border border-blue-200">
                      <span className="text-blue-700 font-semibold">
                        📅 Date & Time:
                      </span>
                      <p className="text-blue-900 font-bold">
                        {new Date(orderData.eventDate).toLocaleDateString()} at{" "}
                        {orderData.eventTime}
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-4 border border-green-200">
                      <span className="text-green-700 font-semibold">
                        🚚 Service Type:
                      </span>
                      <p className="text-green-900 font-bold capitalize">
                        {orderData.serviceType}
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-4 border border-yellow-200">
                      <span className="text-yellow-700 font-semibold">
                        👤 Contact:
                      </span>
                      <p className="text-yellow-900 font-bold">
                        {orderData.contactInfo.name}
                      </p>
                    </div>
                  </div>

                  {orderData.serviceType === "delivery" && (
                    <div className="mt-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-4 border border-green-200">
                      <span className="text-green-700 font-semibold">
                        🗺️ Delivery Address:
                      </span>
                      <div className="text-green-900 font-bold mt-1">
                        {orderData.address.street}
                        <br />
                        {orderData.address.city}, {orderData.address.state}{" "}
                        {orderData.address.zip}
                      </div>
                    </div>
                  )}

                  {orderData.specialRequests && (
                    <div className="mt-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-4 border border-yellow-200">
                      <span className="text-yellow-700 font-semibold">
                        ✨ Special Requests:
                      </span>
                      <div className="text-yellow-900 font-medium italic mt-1">
                        {orderData.specialRequests}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 rounded-3xl shadow-2xl p-8 border-2 border-white/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    💳 Payment Method
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      value: "card",
                      label: "💳 Credit/Debit Card",
                      color: "from-blue-400 to-purple-500",
                    },
                    {
                      value: "check",
                      label: "🏦 Company Check",
                      color: "from-blue-400 to-purple-500",
                    },
                    {
                      value: "invoice",
                      label: "📄 Net 30 Invoice",
                      color: "from-blue-400 to-purple-500",
                    },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer ${
                        orderData.paymentMethod === option.value
                          ? `bg-gradient-to-r ${option.color} text-white border-transparent shadow-lg`
                          : "bg-white border-gray-200 hover:border-gray-300 text-gray-800"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={option.value}
                        checked={orderData.paymentMethod === option.value}
                        onChange={(e) =>
                          setOrderData((prev) => ({
                            ...prev,
                            paymentMethod: e.target.value,
                          }))
                        }
                        className="mr-4 scale-150"
                      />
                      <span className="font-bold text-lg">{option.label}</span>
                    </label>
                  ))}
                </div>

                {orderData.paymentMethod === "card" && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl border-2 border-blue-200">
                    <div className="flex items-center">
                      <CreditCard className="w-6 h-6 text-blue-600 mr-3" />
                      <p className="text-blue-800 font-bold">
                        🔒 Secure payment processing will be handled on the next
                        page.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Spectacular Payment Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-white via-pink-50 to-purple-50 rounded-3xl shadow-2xl p-6 sticky top-6 border-2 border-white/50">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mr-3">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    💰 Payment Magic
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-purple-100">
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-medium">
                        Subtotal:
                      </span>
                      <span className="font-bold text-gray-900 text-lg">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-purple-100">
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-medium">
                        Tax (8.5%):
                      </span>
                      <span className="font-bold text-gray-900 text-lg">
                        ${tax.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-4 border-2 border-purple-300">
                    <div className="flex justify-between text-xl font-bold">
                      <span className="text-purple-800">Total Amount:</span>
                      <span className="text-purple-600">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-200 to-emerald-200 p-6 rounded-2xl border-2 border-green-300 shadow-lg">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-green-800 text-lg">
                        💚 Advance Payment (60%):
                      </span>
                      <span className="text-3xl font-bold text-green-600">
                        ${advancePayment.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-green-700 font-medium flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Due today to secure your amazing event!
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-100 to-blue-100 p-6 rounded-2xl border-2 border-gray-300">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-gray-800 text-lg">
                        ⏳ Balance Due:
                      </span>
                      <span className="text-2xl font-bold text-gray-900">
                        ${balanceDue.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-gray-600 font-medium">
                      Due on your special event day
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl border-2 border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                    <Star className="w-5 h-5 mr-2 fill-current" />
                    Payment Terms
                  </h4>
                  <ul className="text-blue-800 font-medium space-y-2">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 mr-2 text-green-600" />
                      60% advance payment required
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 mr-2 text-green-600" />
                      Balance due on event day
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 mr-2 text-green-600" />
                      Cancellation policy applies
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 mr-2 text-green-600" />
                      Service fees may apply for delivery
                    </li>
                  </ul>
                </div>

                <button
                  onClick={confirmOrder}
                  className={`w-full mt-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-4 px-6 rounded-2xl font-bold text-xl  shadow-2xl flex items-center justify-center cursor-pointer`}
                >
                  Confirm Order & Pay ${advancePayment.toFixed(2)}
                </button>
                <p className="text-sm text-gray-500 mt-4 text-center font-medium">
                  ✨ By confirming, you agree to our terms of service and
                  cancellation policy ✨
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Colorful Navigation Buttons */}
        <div className="flex flex-col md:flex-row  gap-4 justify-between mt-12">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all transform ${
              currentStep === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-gray-400 to-gray-600 text-white hover:scale-105 shadow-lg hover:shadow-xl"
            }`}
          >
            ⬅️ Previous Step
          </button>

          {currentStep < 3 ? (
            <button
              onClick={nextStep}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-lg hover:shadow-xl flex items-center"
            >
              Next Step ✨
              <ChevronRight className="w-6 h-6 ml-2" />
            </button>
          ) : null}
        </div>
        {/* Floating Vegetables */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden hidden xl:block">
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
                height={150}
                width={150}
                className="max-w-[100px] md:max-w-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CateringFlow;
