import React from 'react';
import FoodItemCard from './FoodItemCard';
import { menuData } from '../data/menuData';

const CartDemo = () => {
    const handleViewOptions = (item) => {
        console.log('View options for:', item.name);
        // You can add modal or navigation logic here
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Featured Food Items
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Discover our delicious menu items
                    </p>
                </div>

                {/* Featured Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {menuData.featuredItems.map((item) => (
                        <FoodItemCard
                            key={item.id}
                            item={item}
                            onViewOptions={handleViewOptions}
                        />
                    ))}
                </div>

                {/* Additional Sample Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {menuData.SuperDeliciousDeal.slice(0, 4).map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100 relative overflow-hidden">
                            {/* Food Image Section */}
                            <div className="relative">
                                <img
                                    className="w-full h-64 object-cover"
                                    src={item.image}
                                    alt={item.name}
                                />

                                {/* Promotional Banner Overlay */}
                                <div className="absolute bottom-0 left-0 right-0">
                                    <div className="bg-pink-500 text-white px-4 py-2 text-center font-bold text-sm">
                                        $5.00 OFF UPTO $50.00
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                {/* Item Title */}
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    {item.name}
                                </h3>

                                {/* Category */}
                                <p className="text-gray-600 text-sm mb-3">
                                    Super Delicious Deal
                                </p>

                                {/* Price Range and Action Button */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-bold text-gray-800">
                                            ${item.price.toFixed(2)}
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => handleViewOptions(item)}
                                        className="flex items-center space-x-2 bg-white border-2 border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 font-semibold"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                        </svg>
                                        <span>View options</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CartDemo;
