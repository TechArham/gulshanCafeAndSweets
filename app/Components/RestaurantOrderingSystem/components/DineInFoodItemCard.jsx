import React, { useState } from 'react';
import { FaShoppingCart, FaCheck } from 'react-icons/fa';

const DineInFoodItemCard = ({
    item,
    category,
    categoryDisplayNames,
    onAddToCart,
    promotionalBanner = "$5.00 OFF UPTO $50.00",
    showPromotionalBanner = true,
    rating = 4.8,
    showRating = true,
    buttonText = "View options"
}) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        onAddToCart(item, category);
        setIsAdded(true);
        // Reset the success state after 2 seconds
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="bg-white border transition-all duration-200 hover:outline hover:outline-red-500 border-gray-300 p-4 flex items-center rounded-lg shadow-sm overflow-hidden">
            {/* Image */}
            <div className="h-28 w-28 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full rounded-xl object-cover"
                />
            </div>

            {/* Content */}
            <div className="px-5 flex-1">
                {/* Name */}
                <h3 className="text-xl font-bold text-black mb-2">
                    {item.name}
                </h3>

                {/* Category */}
                <p className="text-gray-600 text-sm mb-2">
                    {categoryDisplayNames?.[category] || category}
                </p>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold text-black">
                        ${item.price.toFixed(2)}
                    </span>
                </div>

                {/* Order Button */}
                <button
                    onClick={handleAddToCart}
                    className={`cursor-pointer flex items-center justify-center space-x-2 px-5 py-1.5 rounded-full transition-all duration-300 font-semibold ${isAdded
                        ? 'bg-green-500 border border-green-500 text-white'
                        : 'bg-white border border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
                        }`}
                >
                    {isAdded ? (
                        <>
                            <FaCheck className='w-4 h-4' />
                            <span className='text-sm'>Added!</span>
                        </>
                    ) : (
                        <>
                            <FaShoppingCart className='w-4 h-4' />
                            <span className='text-sm'>Add To Cart</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default DineInFoodItemCard;
