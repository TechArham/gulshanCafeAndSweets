import React from 'react';

const FoodItemCard = ({
    item,
    category,
    categoryDisplayNames,
    onAddToCart,
    promotionalBanner = "$5.00 OFF UPTO $50.00",
    showPromotionalBanner = true,
    rating = 4.8,
    showRating = true,
    buttonText = "View options",
    imageHeight = "h-48"
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100 relative overflow-hidden">
            {/* Food Image Section */}
            <div className="relative">
                <img
                    className={`w-full ${imageHeight} object-cover group-hover:scale-105 transition-transform duration-300`}
                    src={item.image}
                    alt={item.name}
                />

                {/* Promotional Banner Overlay */}
                {showPromotionalBanner && promotionalBanner && (
                    <div className="absolute bottom-0 left-0 right-0">
                        <div className="bg-pink-500 text-white px-4 py-2 text-center font-bold text-sm">
                            {promotionalBanner}
                        </div>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Item Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {item.name}
                </h3>

                {/* Category */}
                <p className="text-gray-600 text-sm mb-3">
                    {categoryDisplayNames?.[category] || category}
                </p>

                {/* Price and Rating */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-orange-600">
                        ${item.price.toFixed(2)}
                    </span>
                    {showRating && (
                        <div className="flex items-center space-x-1 text-yellow-500">
                            <span className="text-sm">⭐</span>
                            <span className="text-sm font-medium">{rating}</span>
                        </div>
                    )}
                </div>

                {/* Action Button */}
                <button
                    onClick={() => onAddToCart(item, category)}
                    className="w-full flex items-center justify-center space-x-2 bg-white border-2 border-red-500 text-red-500 px-4 py-3 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 font-semibold"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                    <span>{buttonText}</span>
                </button>
            </div>
        </div>
    );
};

export default FoodItemCard;
