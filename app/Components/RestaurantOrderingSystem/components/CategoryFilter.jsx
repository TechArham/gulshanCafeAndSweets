import React, { useState, useEffect, useRef } from 'react';
import { useRestaurantStore } from '../store/restaurantStore';
import { menuData, categoryDisplayNames } from '../data/menuData';
import { ChevronLeft, ChevronRight, Utensils, Coffee, IceCream, Pizza, Salad, Beef, Fish, Apple, Cookie, Cake, Soup, Sandwich, Wine, Milk, Cherry, Grape, Lemon, Orange, Banana, Carrot, Leaf, Egg, Search, MapPin, Users } from 'lucide-react';

const CategoryFilter = ({ showTableInfo = false }) => {
    const {
        activeCategory,
        setActiveCategory,
        searchTerm,
        setSearchTerm,
        orderDetails
    } = useRestaurantStore();

    const [isScrolled, setIsScrolled] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const scrollContainerRef = useRef(null);
    const categories = Object.keys(menuData || {});

    // Icon mapping for categories with more variety
    const categoryIcons = {
        'all': Utensils,
        'vegetable': Carrot,
        'halalChinese': Soup,
        'SuperDeliciousDeal': Cake,
        'dessert': IceCream,
        'beverage': Coffee,
        'appetizer': Cherry,
        'mainCourse': Beef,
        'seafood': Fish,
        'sweets': Cookie,
        'snacks': Sandwich,
        'special': Wine,
        'drinks': Milk,
        'fruits': Apple,
        'salad': Leaf,
        'breakfast': Egg,
        'lunch': Pizza,
        'dinner': Utensils
    };

    // Get icon for category with fallback
    const getCategoryIcon = (category) => {
        const IconComponent = categoryIcons[category] || Utensils;
        return IconComponent;
    };

    // Handle scroll behavior to hide/show navbar
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hide default navbar when scrolled
    useEffect(() => {
        const navbar = document.querySelector('nav');
        if (navbar) {
            if (isScrolled) {
                navbar.style.transform = 'translateY(-100%)';
                navbar.style.transition = 'transform 0.3s ease-in-out';
            } else {
                navbar.style.transform = 'translateY(0)';
                navbar.style.transition = 'transform 0.3s ease-in-out';
            }
        }

        // Cleanup: restore navbar when component unmounts
        return () => {
            const navbar = document.querySelector('nav');
            if (navbar) {
                navbar.style.transform = 'translateY(0)';
                navbar.style.transition = 'transform 0.3s ease-in-out';
            }
        };
    }, [isScrolled]);

    // Check scroll position for arrow visibility
    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    // Scroll functions
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        }
    };

    // Check scroll position on mount and when categories change
    useEffect(() => {
        checkScrollPosition();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollPosition);
            return () => container.removeEventListener('scroll', checkScrollPosition);
        }
    }, [categories]);

    return (
        <div className={`bg-white  border-gray-200 transition-all duration-300 ${isScrolled ? ' border-b z-0 fixed top-0 left-0 right-0  shadow-lg  pt-0 ' : 'relative  pt-20'
            }`}>


            <div className="container mx-auto px-4 py-3">
                {/* Table Info Bar - Only show on dine-in page */}
                {showTableInfo && orderDetails.tableNumber && (
                    <div className="mb-4">
                        <div className="flex items-center justify-center space-x-6 text-sm">
                            <div className="flex items-center space-x-2">
                                <MapPin size={16} className="text-orange-500" />
                                <span className="font-medium text-gray-900">Table {orderDetails.tableNumber}</span>
                            </div>
                            {orderDetails.name && (
                                <div className="flex items-center space-x-2">
                                    <Users size={16} className="text-orange-500" />
                                    <span className="text-gray-600">{orderDetails.name}</span>
                                </div>
                            )}
                            <button
                                onClick={() => {
                                    // Dispatch event to open table modal
                                    window.dispatchEvent(new CustomEvent('openTableModal'));
                                }}
                                className="text-orange-500 hover:text-orange-600 text-sm font-medium px-3 py-1 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer"
                            >
                                Change
                            </button>
                        </div>
                    </div>
                )}

                {/* Desktop Layout */}
                <div className="hidden lg:block">


                    <div className="flex  w-full  justify-center mb-6">
                        {/* Search Bar - Right Corner */}
                        <div className="w-full mx-10">
                            <div className="relative w-full">
                                <Search
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    size={16}
                                />
                                <input
                                    type="text"
                                    placeholder="Search menu items..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500 text-black focus:bg-white transition-colors outline-none text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center">
                        {/* Left Arrow */}
                        {canScrollLeft && (
                            <button
                                onClick={scrollLeft}
                                className="absolute left-0 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <ChevronLeft size={18} className="text-gray-600" />
                            </button>
                        )}

                        {/* Categories Container */}
                        <div
                            ref={scrollContainerRef}
                            className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide mx-10"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <button
                                onClick={() => setActiveCategory('all')}
                                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 flex items-center space-x-1.5 ${activeCategory === 'all'
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                                    }`}
                            >
                                <Utensils size={14} />
                                <span>All</span>
                            </button>
                            {categories.map((category) => {
                                const IconComponent = getCategoryIcon(category);
                                return (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 flex items-center space-x-1.5 ${activeCategory === category
                                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                                            }`}
                                    >
                                        <IconComponent size={14} />
                                        <span>{categoryDisplayNames?.[category] || category}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right Arrow */}
                        {canScrollRight && (
                            <button
                                onClick={scrollRight}
                                className="absolute right-0 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <ChevronRight size={18} className="text-gray-600" />
                            </button>
                        )}
                    </div>

                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                    {/* Search Bar - Top */}
                    <div className="mb-5">
                        <div className="relative">
                            <Search
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                size={16}
                            />
                            <input
                                type="text"
                                placeholder="Search menu items..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500 text-black focus:bg-white transition-colors outline-none text-sm"
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="relative flex items-center">
                        {/* Left Arrow */}
                        {canScrollLeft && (
                            <button
                                onClick={scrollLeft}
                                className="absolute left-0 z-10 bg-white border border-gray-300 shadow-lg rounded-full p-1.5 hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <ChevronLeft size={14} className="text-gray-600" />
                            </button>
                        )}

                        {/* Categories Container */}
                        <div
                            ref={scrollContainerRef}
                            className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide mx-8"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <button
                                onClick={() => setActiveCategory('all')}
                                className={`px-3 py-1.5 rounded-full font-medium text-xs transition-all duration-300 whitespace-nowrap flex-shrink-0 flex items-center space-x-1 ${activeCategory === 'all'
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <Utensils size={12} />
                                <span>All</span>
                            </button>
                            {categories.map((category) => {
                                const IconComponent = getCategoryIcon(category);
                                return (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-3 py-1.5 rounded-full font-medium text-xs transition-all duration-300 whitespace-nowrap flex-shrink-0 flex items-center space-x-1 ${activeCategory === category
                                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        <IconComponent size={12} />
                                        <span>{categoryDisplayNames?.[category] || category}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right Arrow */}
                        {canScrollRight && (
                            <button
                                onClick={scrollRight}
                                className="absolute right-0 z-10 border border-gray-300 bg-white rounded-full p-1 sm:p-1.5 hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <ChevronRight size={12} className="text-gray-600 sm:w-3.5 sm:h-3.5" />
                            </button>
                        )}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CategoryFilter;