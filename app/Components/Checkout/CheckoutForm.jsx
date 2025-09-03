"use client"
import React, { useState } from 'react';
import Image from "next/image";
export default function CheckoutForm() {
  const [selectedPayment, setSelectedPayment] = useState('direct-bank');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto py-8 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Billing Details Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 h-fit">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Billing Details
            </h2>

            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500  placeholder:text-base placeholder:font-medium text-gray-700 text-base"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500  placeholder:text-base placeholder:font-medium text-gray-700 text-base"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500  placeholder:text-base placeholder:font-medium text-gray-700 text-base"
                />
              </div>

              <div>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder-gray-500  placeholder:text-base placeholder:font-medium text-gray-700 text-base">
                  <option>Country</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500  placeholder:text-base placeholder:font-medium text-gray-700 text-base"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Town/City"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500  placeholder:text-base placeholder:font-medium text-gray-700 text-base"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Zip"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500  placeholder:text-base placeholder:font-medium text-gray-700 text-base"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500  placeholder:text-base placeholder:font-medium text-gray-700 text-base"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500  placeholder:text-base placeholder:font-medium text-gray-700 text-base"
                />
              </div>

              <div>
                <textarea
                  placeholder="Order Notes(Optional)"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder-gray-500  placeholder:text-base placeholder:font-medium text-gray-700 text-base"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Your Order Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 h-fit">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Your Order
            </h2>

            {/* Order Items */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-base text-gray-500 font-semibold mb-1">
                    PRODUCT
                  </p>
                </div>
                <div>
                  <p className="text-base text-gray-500 font-medium mb-1">
                    TOTAL
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center py-2">
                <p className="text-[#2a435d] text-base font-medium">
                  Kacchi Biryani
                </p>
                <p className="font-semibold text-[#2a435d]">$699</p>
              </div>

              <div className="flex justify-between items-center py-2">
                <p className="text-[#2a435d] text-base font-medium">
                  Beef Tehari
                </p>
                <p className="font-semibold text-[#2a435d]">$399</p>
              </div>

              <div className="flex justify-between items-center py-2">
                <p className="text-[#2a435d] text-base font-medium">Khichuri</p>
                <p className="font-semibold text-[#2a435d]">$1,699</p>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between items-center py-2">
                <p className="font-semibold text-gray-700">SUBTOTAL</p>
                <p className="font-semibold text-[#2a435d]">$5,699</p>
              </div>

              <div className="flex justify-between items-center py-2">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-gray-700">PERCHED</p>
                  <span className="text-sm text-gray-500">
                    Flat rate: $5.00
                  </span>
                  <span className="text-sm text-gray-500">Bank Transfer</span>
                </div>
                <p className="font-semibold text-[#2a435d]">free</p>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between items-center py-2">
                <p className="font-bold text-lg text-[#2a435d]">TOTAL</p>
                <p className="font-bold text-lg text-red-500">$5,699</p>
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-3 mb-3">
              <div className="flex items-center">
                <input
                  id="direct-bank"
                  type="radio"
                  name="payment"
                  value="direct-bank"
                  checked={selectedPayment === "direct-bank"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="direct-bank"
                  className="ml-2 text-sm text-gray-700"
                >
                  DIRECT BANK TRANSFER
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="check-payments"
                  type="radio"
                  name="payment"
                  value="check-payments"
                  checked={selectedPayment === "check-payments"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="check-payments"
                  className="ml-2 text-sm text-gray-700"
                >
                  CHECK PAYMENTS
                </label>
              </div>

              {/* PayPal and Card Icons */}
              <div className="flex items-center">
                <Image
                  src="/payment.png"
                  alt="payment"
                  width={160}
                  height={80}
                  quality={100}
                  priority
                  className="h-20 w-40 object-contain"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="cash-delivery"
                  type="radio"
                  name="payment"
                  value="cash-delivery"
                  checked={selectedPayment === "cash-delivery"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="cash-delivery"
                  className="ml-2 text-sm text-gray-700"
                >
                  CASH ON DELIVERY
                </label>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start mb-6">
              <input
                id="terms"
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 mt-1"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                I've read and accept the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  terms & conditions
                </a>{" "}
                *
              </label>
            </div>

            {/* Place Order Button */}
            <button
              className={`w-full py-4 px-6 rounded-md text-white font-semibold text-lg transition-colors ${
                acceptedTerms
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!acceptedTerms}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Leaf */}
      <div className="fixed bottom-4 right-4 opacity-20">
        <div className="w-16 h-16 bg-green-500 rounded-full transform rotate-45"></div>
      </div>
    </div>
  );
}