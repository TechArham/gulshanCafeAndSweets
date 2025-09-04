'use client'
import React, { useState } from 'react';
import { X, ArrowRight, Utensils, Phone } from 'lucide-react';
import Image from 'next/image';

const OnboardingModal = ({ onComplete }) => {
    const [isValidPhone, setIsValidPhone] = useState(true);

    const handleGetStarted = () => {
        onComplete();
    };

    const handleSkip = () => {
        onComplete();
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);
        setIsValidPhone(true);
    };

    return (

        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            {/* Gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br  w-full h-full top-0 left-0 from-orange-100 via-orange-200 to-red-100 opacity-80 pointer-events-none"></div>

            <div className="relative bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-xl">
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 text-center">
                    <div className="mb-4">
                        <Image
                            src="/logo.png"
                            alt="Restaurant Logo"
                            width={60}
                            height={60}
                            className="mx-auto rounded-full bg-white p-2"
                        />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Welcome to Dine In</h2>
                    <p className="text-orange-100 text-sm">
                        Order directly from your table
                    </p>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="space-y-4 mb-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                <span className="text-orange-600 font-bold text-sm">1</span>
                            </div>
                            <span className="text-gray-700">Select your table number</span>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                <span className="text-orange-600 font-bold text-sm">2</span>
                            </div>
                            <span className="text-gray-700">Browse menu and add items</span>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                <span className="text-orange-600 font-bold text-sm">3</span>
                            </div>
                            <span className="text-gray-700">Submit order to kitchen</span>
                        </div>
                    </div>



                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <button
                            onClick={handleGetStarted}
                            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center space-x-2"
                        >
                            <span>Get Started</span>
                            <ArrowRight size={20} />
                        </button>

                        <button
                            onClick={handleSkip}
                            className="w-full text-gray-500 py-2 text-sm hover:text-gray-700 transition-colors"
                        >
                            Skip for now
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default OnboardingModal;