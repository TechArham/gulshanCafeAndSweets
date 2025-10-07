import React, { useState, useEffect } from "react";
import { getFilteredItems } from "../utils/helpers";
import { useRestaurantStore } from "../store/restaurantStore";
import FoodItemCard from "./FoodItemCard";
import DineInFoodItemCard from "./DineInFoodItemCard";

const MenuGrid = ({
  menuData,
  categoryDisplayNames,
  searchTerm,
  visibleItems,
  sidebarOpen,
  addToCart,
  categoryRefs,
  cardType = "vertical", // 'vertical' for MenuPage, 'horizontal' for DineInPage
}) => {
  const { activeCategory } = useRestaurantStore();
  const [itemsToShow, setItemsToShow] = useState(8);

  // Reset items to show when category changes
  useEffect(() => {
    setItemsToShow(8);
  }, [activeCategory]);

  // Get categories to display based on active filter
  const getCategoriesToShow = () => {
    if (activeCategory === "all") {
      return Object.keys(menuData || {});
    }
    return [activeCategory];
  };

  const categoriesToShow = getCategoriesToShow();

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 8);
  };

  return (
    <div className="p-2 sm:p-4 lg:p-6 relative z-30">
      {categoriesToShow.map((category) => {
        const allItems = getFilteredItems(category, menuData, searchTerm, 1000); // Get all items
        const displayedItems = allItems.slice(0, itemsToShow);
        const hasMoreItems = allItems.length > itemsToShow;

        // Don't show category if no items match the filter
        if (displayedItems.length === 0) return null;

        return (
          <div
            key={category}
            ref={(el) => (categoryRefs.current[category] = el)}
            className="mb-6 sm:mb-8 lg:mb-12"
          >
            <h2 className="text-black font-bold leading-tight text-4xl md:text-5xl uppercase font-barlow mb:5 lg:mb-10 text-center mx-auto">
              {categoryDisplayNames?.[category] || category}
            </h2>

            {/* Grid with responsive columns */}
            <div
              className={`grid gap-4 sm:gap-6 lg:gap-8 ${
                cardType === "horizontal"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {displayedItems.map((item) =>
                cardType === "horizontal" ? (
                  <DineInFoodItemCard
                    key={item.id}
                    item={item}
                    category={category}
                    categoryDisplayNames={categoryDisplayNames}
                    onAddToCart={addToCart}
                    promotionalBanner="$5.00 OFF UPTO $50.00"
                    showPromotionalBanner={true}
                    rating={4.8}
                    showRating={true}
                    buttonText="Order Now"
                  />
                ) : (
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
                )
              )}
            </div>

            {/* Show More Button */}
            {hasMoreItems && (
              <div className="flex justify-center mt-6 sm:mt-8">
                <button
                  onClick={handleShowMore}
                  className="px-6 py-2 sm:px-8 sm:py-3 border-2 border-red-500 text-red-500 cursor-pointer rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 text-sm sm:text-base"
                >
                  Show More
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MenuGrid;
