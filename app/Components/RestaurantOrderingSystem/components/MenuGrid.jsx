import React from 'react';
import { getFilteredItems } from '../utils/helpers';
import { useRestaurantStore } from '../store/restaurantStore';

const MenuGrid = ({
    menuData,
    categoryDisplayNames,
    searchTerm,
    visibleItems,
    sidebarOpen,
    addToCart,
    categoryRefs
}) => {
    const { activeCategory } = useRestaurantStore();

    // Get categories to display based on active filter
    const getCategoriesToShow = () => {
        if (activeCategory === 'all') {
            return Object.keys(menuData || {});
        }
        return [activeCategory];
    };

    const categoriesToShow = getCategoriesToShow();

    return (
        <div className="p-4 relative z-30">
            {categoriesToShow.map((category) => {
                const filteredItems = getFilteredItems(category, menuData, searchTerm, visibleItems);

                // Don't show category if no items match the filter
                if (filteredItems.length === 0) return null;

                return (
                    <div
                        key={category}
                        ref={(el) => (categoryRefs.current[category] = el)}
                        className="mb-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-6 first:mt-0 flex items-center">
                            <span className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mr-3"></span>
                            {categoryDisplayNames?.[category] || category}
                        </h2>
                        <div
                            className={`grid gap-4 sm:gap-6 lg:gap-8 ${sidebarOpen
                                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
                                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                                }`}
                        >
                            {filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100 relative z-30"
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="flex-shrink-0 mb-4">
                                            <div className="relative overflow-hidden rounded-xl">
                                                <img
                                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                                    src={item.image}
                                                    alt={item.name}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                                                {item.name}
                                            </h3>
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-2xl font-bold text-orange-600">
                                                    ${item.price.toFixed(2)}
                                                </span>
                                                <div className="flex items-center space-x-1 text-yellow-500">
                                                    <span className="text-sm">⭐</span>
                                                    <span className="text-sm font-medium">4.8</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => addToCart(item, category)}
                                                className="mt-auto bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-4 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MenuGrid;

