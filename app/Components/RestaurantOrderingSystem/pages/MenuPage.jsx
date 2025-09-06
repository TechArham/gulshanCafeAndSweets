'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useRestaurantStore } from '../store/restaurantStore';

// Import components
import CategoryNav from '../components/CategoryNav';
import CategoryFilter from '../components/CategoryFilter';
import MenuGrid from '../components/MenuGrid';
import CartSidebar from '../components/CartSidebar';
import MenuHero from '../components/MenuHero';
import FeaturedSection from '../components/FeaturedSection';

// Import data and utilities
import { menuData, categoryDisplayNames } from '../data/menuData';
import { useRef } from 'react';

const MenuPage = () => {


    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const {
        cart,
        sidebarOpen,
        setSidebarOpen,
        updateQuantity,
        addToCart,
        searchTerm,
        setSearchTerm,
        visibleItems,
        categoryNavOpen,
        setCategoryNavOpen,
        activeCategory,
        setActiveCategory,
        scrollToCategory,
        getTotalItems,
        getTotalPrice
    } = useRestaurantStore();

    const categoryRefs = useRef({});

    // Handle scroll behavior to detect when CategoryFilter is fixed
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBackToLanding = () => {
        router.push('/');
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Menu Hero Section */}
            <MenuHero
                title="Menu 01"
                subtitle="gulshanCafeAndSweets"
                showDeliveryIllustration={true}
            />


            <CategoryFilter showTableInfo={false} />

            <CartSidebar />


            <div className={`min-h-screen container z-10 mx-auto flex ${isScrolled ? 'pt-40' : 'pt-4 lg:pt-4'}`}>

                <div className="flex-1 transition-all duration-300 ease-in-out pb-24 lg:pb-4">
                    <MenuGrid
                        menuData={menuData}
                        categoryDisplayNames={categoryDisplayNames}
                        searchTerm={searchTerm}
                        visibleItems={visibleItems}
                        sidebarOpen={sidebarOpen}
                        addToCart={addToCart}
                        categoryRefs={categoryRefs}
                    />

                    {/* Featured Section */}
                    <FeaturedSection />
                </div>




                {/* Desktop Floating Cart Button */}
                {!sidebarOpen && getTotalItems(cart || []) > 0 && (
                    <div
                        onClick={() => setSidebarOpen(true)}
                        className="hidden lg:block fixed top-1/2 left-0 transform -translate-y-1/2 bg-orange-500 text-white px-6 py-4 rounded-r-2xl shadow-xl cursor-pointer hover:bg-orange-600 transition-all duration-300 z-40 hover:scale-105"
                    >
                        <div className="flex flex-col items-center space-y-2">
                            {/* Shopping Cart Icon */}
                            <div className="relative">
                                <ShoppingCart size={24} className="text-white" />
                                {/* Red Blink Dot */}
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            </div>

                            {/* Items Count */}
                            <div className="text-white font-bold text-lg">
                                {getTotalItems(cart || [])}
                            </div>

                            {/* Total Price */}
                            <div className="text-white font-bold text-sm">
                                ${getTotalPrice(cart || []).toFixed(2)}
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Floating Cart Button */}
                {!sidebarOpen && getTotalItems(cart || []) > 0 && (
                    <div
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden fixed top-1/2 left-0 transform -translate-y-1/2 bg-orange-500 text-white px-6 py-4 rounded-r-2xl shadow-xl cursor-pointer hover:bg-orange-600 transition-all duration-300 z-40 hover:scale-105"
                    >
                        <div className="flex flex-col items-center space-y-2">
                            {/* Shopping Cart Icon */}
                            <div className="relative">
                                <ShoppingCart size={24} className="text-white" />
                                {/* Red Blink Dot */}
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            </div>

                            {/* Items Count */}
                            <div className="text-white font-bold text-lg">
                                {getTotalItems(cart || [])}
                            </div>

                            {/* Total Price */}
                            <div className="text-white font-bold text-sm">
                                ${getTotalPrice(cart || []).toFixed(2)}
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
};

export default MenuPage;
