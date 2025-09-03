"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
export default function CartDetails() {
  const [couponCode, setCouponCode] = useState("");
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Burger Patties",
      price: 1.99,
      quantity: 1,
      image: "/swtte.jpg",
    },
    {
      id: 2,
      name: "Best Pizza Dough",
      price: 1.99,
      quantity: 1,
      image: "/fish.jpg",
    },
    {
      id: 3,
      name: "Burger Patties",
      price: 1.99,
      quantity: 1,
      image: "/sweets.jpg",
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const grandTotal = subtotal * 0.5; // Appears to be 50% discount in the image

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto py-8 lg:py-20">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header Controls */}
          <div className="bg-white p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter Coupon"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-64 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                  />
                </div>
                <button className="bg-[#c33] hover:bg-red-700 text-white px-8 py-2 rounded-md font-semibold transition-colors">
                  Apply Now
                </button>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={clearAll}
                  className="bg-yellow-50 border border-yellow-200 px-8 py-2 rounded-md font-semibold transition-colors text-gray-700"
                >
                  Clear All
                </button>
                <button className="bg-yellow-50 border border-yellow-200 px-8 py-2 rounded-md font-semibold transition-colors text-gray-700">
                  Update Cart
                </button>
              </div>
            </div>
          </div>

          {/* Table Header */}
          <div className="bg-[#ffedee] px-6 py-4">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-5">
                <h3 className="font-semibold text-gray-700">Product Name</h3>
              </div>
              <div className="hidden md:block col-span-2">
                <h3 className="font-semibold text-gray-700 text-center">
                  Price
                </h3>
              </div>
              <div className="hidden md:block col-span-2">
                <h3 className="font-semibold text-gray-700 text-center">
                  Quantity
                </h3>
              </div>
              <div className="hidden md:block col-span-2">
                <h3 className="font-semibold text-gray-700 text-center">
                  Subtotal
                </h3>
              </div>
              <div className="hidden md:block col-span-1"></div>
            </div>
          </div>

          {/* Cart Items */}
          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <div key={item.id} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Product Info */}
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt="Food"
                          width={160}
                          height={80}
                          quality={100}
                          priority
                          className="h-20 w-40 object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-lg">
                          {item.name}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-semibold text-gray-800">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-medium">
                        Quantity:
                      </span>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(
                              item.id,
                              parseInt(e.target.value) || 1
                            )
                          }
                          className="w-16 px-2 py-1 border border-gray-300 rounded text-center 
                 text-gray-800 placeholder-gray-*00
                 focus:outline-none focus:ring-2 focus:ring-gray-800"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-semibold text-gray-800">
                        {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-400 hover:text-red-600 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:block md:col-span-2 text-center">
                    <span className="font-semibold text-gray-800">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="hidden md:block md:col-span-2 text-center">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value) || 1)
                      }
                      className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="hidden md:block md:col-span-2 text-center">
                    <span className="font-semibold text-gray-800">
                      {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  <div className="hidden md:block md:col-span-1 text-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-400 hover:text-red-600 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty Cart Message */}
          {cartItems.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-gray-500 text-lg">Your cart is empty</p>
            </div>
          )}

          {/* Checkout Section */}
          {cartItems.length > 0 && (
            <div className="bg-[#ffedee] p-6 text-center mx-auto mt-14">
              <div className="max-w-md  text-center mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <button className="w-full bg-[#ffedee] hover:bg-[#ffedee] text-gray-700 py-3 px-4 rounded-md font-medium mb-6 transition-colors">
                    Proceed To Checkout
                  </button>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">
                        SUBTOTAL
                      </span>
                      <span className="font-semibold text-gray-800">
                        ${subtotal.toFixed(0)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-800">
                        Grand Total
                      </span>
                      <span className="font-bold text-gray-800">
                        ${grandTotal.toFixed(0)}
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-[#c33] hover:bg-red-700 text-white py-3 px-4 rounded-md font-medium mt-6 transition-colors">
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
