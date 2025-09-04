'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Clock, Star, Users } from 'lucide-react';

const LandingPage = () => {
    const router = useRouter();

    const handleStartOrder = () => {
        router.push('/menu');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="text-3xl">🍽️</div>
                            <h1 className="text-2xl font-bold text-gray-800">Gulshan Cafe & Sweets</h1>
                        </div>
                        <button
                            onClick={handleStartOrder}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors cursor-pointer"
                        >
                            Start Order
                        </button>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                        Welcome to
                        <span className="text-orange-500 block">Gulshan Cafe & Sweets</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Experience the finest flavors with our delicious menu of authentic dishes,
                        fresh ingredients, and exceptional service.
                    </p>
                    <button
                        onClick={handleStartOrder}
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer flex items-center space-x-2 mx-auto"
                    >
                        <span>Start Your Order</span>
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="text-orange-500" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Service</h3>
                        <p className="text-gray-600">Quick and efficient service to get your delicious food fast.</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Star className="text-orange-500" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Food</h3>
                        <p className="text-gray-600">Fresh ingredients and authentic recipes for the best taste.</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="text-orange-500" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Family Friendly</h3>
                        <p className="text-gray-600">Perfect atmosphere for families and friends to enjoy together.</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p>&copy; 2024 Gulshan Cafe & Sweets. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
