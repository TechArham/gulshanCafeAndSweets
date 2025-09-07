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
            const hasScrollableContent = scrollWidth > clientWidth;
            const leftCanScroll = hasScrollableContent && scrollLeft > 0;
            const rightCanScroll = hasScrollableContent && scrollLeft < scrollWidth - clientWidth - 1;

            setCanScrollLeft(leftCanScroll);
            setCanScrollRight(rightCanScroll);
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

    // Check scroll position after component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            checkScrollPosition();
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // Check scroll position on window resize
    useEffect(() => {
        const handleResize = () => {
            setTimeout(() => {
                checkScrollPosition();
            }, 100);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Force check scroll position when categories change
    useEffect(() => {
        const timer = setTimeout(() => {
            checkScrollPosition();
        }, 200);
        return () => clearTimeout(timer);
    }, [categories]);

    return (
        <div className={`bg-white  z-40 border-gray-200 transition-all duration-300 ${isScrolled ? ' border-b z-40 fixed top-0 left-0 right-0  shadow-lg  pt-0 ' : 'relative  pt-10'
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

                {/* Unified Layout for All Devices */}
                <div className="w-full">
                    {/* Search Bar */}
                    {/* <div className="flex w-full justify-center mb-6">
                        <div className="w-full mx-4 sm:mx-6 lg:mx-10">
                            <div className="relative w-full">
                                <Search
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 shadow-lg text-gray-400"
                                    size={16}
                                />
                                <input
                                    type="search"
                                    placeholder="Search menu items..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2 sm:py-3 lg:py-3.5 text-sm sm:text-base lg:text-md bg-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500 text-black focus:bg-white transition-colors outline-none"
                                />
                            </div>
                        </div>
                    </div> */}

                    {/* Categories */}
                    <div className="relative flex items-center mx-4 sm:mx-6 lg:mx-10">
                        {/* Left Arrow */}
                        {canScrollLeft && (
                            <button
                                onClick={scrollLeft}
                                className="absolute left-0 z-20 bg-orange-500 shadow-lg rounded-full p-2 sm:p-2.5 lg:p-3 transition-colors cursor-pointer hover:bg-orange-600"
                            >
                                <ChevronLeft size={18} className="text-white" />
                            </button>
                        )}

                        {/* Categories Container */}
                        <div
                            ref={scrollContainerRef}
                            className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 overflow-x-auto pb-2 scrollbar-hide w-full px-8 sm:px-10 lg:px-12"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {categories.map((category) => {
                                const IconComponent = getCategoryIcon(category);
                                return (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3.5 rounded-lg sm:rounded-xl cursor-pointer font-medium sm:font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 flex items-center space-x-1.5 sm:space-x-2 ${activeCategory === category
                                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white transform scale-105'
                                            : 'bg-gray-100 text-black hover:bg-gray-200 hover:scale-105'
                                            }`}
                                    >
                                        <IconComponent size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                                        <span>{categoryDisplayNames?.[category] || category}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right Arrow */}
                        {canScrollRight && (
                            <button
                                onClick={scrollRight}
                                className="absolute right-0 z-20 bg-orange-500 shadow-lg rounded-full p-2 sm:p-2.5 lg:p-3 transition-colors cursor-pointer hover:bg-orange-600"
                            >
                                <ChevronRight size={18} className="text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CategoryFilter;