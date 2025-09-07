import React, { useState } from 'react';
import { FaShoppingCart, FaCheck } from 'react-icons/fa';

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
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        onAddToCart(item, category);
        setIsAdded(true);
        // Reset the success state after 2 seconds
        setTimeout(() => setIsAdded(false), 2000);
    };
    return (
        <div className="bg-white   group rounded-xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 transform  group  relative overflow-hidden">
            {/* Food Image Section */}
            <div className="relative cursor-pointer">
                <img
                    className={`w-full ${imageHeight} object-cover group-hover:scale-105 transition-transform duration-300`}
                    src={item.image}
                    alt={item.name}
                />

                {/* Promotional Banner Overlay */}
                {/* {showPromotionalBanner && promotionalBanner && (
                    <div className="absolute bottom-0 left-0 w-60   rounded-r-2xl right-0">
                        <div className=" bg-orange-500 text-white px-4 py-2 text-center font-bold text-sm">
                            {promotionalBanner}
                        </div>
                    </div>
                )} */}
            </div>

            {/* Content Section */}
            <div className="p-5">
                {/* Item Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {item.name}
                </h3>

                {/* Category */}
                <p className="text-black text-sm mb-3">
                    {categoryDisplayNames?.[category] || category}
                </p>

                {/* Price and Rating */}
                <div className="flex items-center justify-between  mt-4 pb-4">

                    <span className="text-2xl font-bold  text-black">
                        ${item.price.toFixed(2)}
                    </span>

                    {/* Action Button */}
                    <button
                        onClick={handleAddToCart}
                        className={`cursor-pointer flex items-center justify-center space-x-2 px-5 py-1.5 rounded-full transition-all duration-300 font-semibold ${
                            isAdded 
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
        </div>
    );
};

export default FoodItemCard;
