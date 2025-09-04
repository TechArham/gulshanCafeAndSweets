import React from 'react';

const LandingScreen = ({ setCurrentScreen }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center p-3 sm:p-4">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full text-center">
                <div className="mb-6 sm:mb-8">
                    <div className="text-4xl sm:text-6xl mb-3 sm:mb-4 cursor-pointer">🍽️</div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                        Gulshan cafe and sweets
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base">Authentic Bangladeshy Dining</p>
                </div>

                <div className="mb-6 sm:mb-8">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">
                        Welcome!
                    </h2>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                        Browse our extensive menu and place your order directly from your
                        table
                    </p>
                </div>

                <button
                    onClick={() => setCurrentScreen("menu")}
                    className="w-full cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
                >
                    Start Your Order
                </button>
            </div>
        </div>
    );
};

export default LandingScreen;

