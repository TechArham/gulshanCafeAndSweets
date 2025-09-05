import React from 'react';
import { getFilteredItems } from '../utils/helpers';
import { useRestaurantStore } from '../store/restaurantStore';
import FoodItemCard from './FoodItemCard';

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

                        <h2 className="text-4xl font-bold text-gray-800   py-10 first:mt-0 flex items-center justify-center">

                            {categoryDisplayNames?.[category] || category}
                        </h2>

                        <div
                            className={`grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
                        >
                            {filteredItems.map((item) => (
                                <FoodItemCard
                                    key={item.id}
                                    item={item}
                                    category={category}
                                    categoryDisplayNames={categoryDisplayNames}
                                    onAddToCart={addToCart}
                                    promotionalBanner="$5.00 OFF UPTO $50.00"
                                    showPromotionalBanner={true}
                                    rating={4.8}
                                    showRating={true}
                                    buttonText="View options"
                                    imageHeight="h-48"
                                />
                            ))}
                        </div>


                    </div>
                );
            })}
        </div>
    );
};

export default MenuGrid;

