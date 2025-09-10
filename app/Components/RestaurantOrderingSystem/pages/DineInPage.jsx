'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { ShoppingBasket } from 'lucide-react';
import { useRestaurantStore } from '../store/restaurantStore';

// Import components
import CategoryFilter from '../components/CategoryFilter';
import MenuGrid from '../components/MenuGrid';
import CartSidebar from '../components/CartSidebar';
import OnboardingModal from '../components/OnboardingModal';
import TableChangeModal from '../components/TableChangeModal';
import InitialTableModal from '../components/InitialTableModal';

// Import data and utilities
import { menuData, categoryDisplayNames } from '../data/menuData';
import { useRef } from 'react';

const DineInPage = () => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [showOnboarding, setShowOnboarding] = useState(false);

    const {
        cart,
        orderDetails,
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
        getTotalPrice,
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

    // Show onboarding for new users
    useEffect(() => {
        const hasSeenOnboarding = localStorage.getItem('dineInOnboardingSeen');
        if (!hasSeenOnboarding) {
            setShowOnboarding(true);
        }
    }, []);

    // Show initial table selection modal if no table is selected
    useEffect(() => {
        if (!orderDetails.tableNumber) {
            // Dispatch event to open initial table modal after a short delay
            const timer = setTimeout(() => {
                window.dispatchEvent(new CustomEvent('openInitialTableModal'));
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [orderDetails.tableNumber]);


    const handleBackToLanding = () => {
        router.push('/');
    };

    const handleOnboardingComplete = () => {
        localStorage.setItem('dineInOnboardingSeen', 'true');
        setShowOnboarding(false);
    };

    return (
        <div className="bg-gray-50 min-h-screen">


            <CategoryFilter showTableInfo={true} />
            <CartSidebar showTableInfo={true} />

            <div className={`min-h-screen container mx-auto flex ${isScrolled ? 'pt-[16rem]' : 'pt-4'}  relative z-10`}>
                <div className="flex-1 transition-all duration-300 ease-in-out pb-24 lg:pb-4 bg-gray-50">
                    <MenuGrid
                        menuData={menuData}
                        categoryDisplayNames={categoryDisplayNames}
                        searchTerm={searchTerm}
                        visibleItems={visibleItems}
                        sidebarOpen={sidebarOpen}
                        addToCart={addToCart}
                        categoryRefs={categoryRefs}
                        cardType="horizontal"
                    />
                </div>






                {/* Desktop Floating Cart Button */}

                {!sidebarOpen && getTotalItems(cart || []) > 0 && (
                    <div
                        onClick={() => setSidebarOpen(true)}
                        className="hidden lg:block  fixed top-[45%]  right-0 transform -translate-y-1/2  bg-orange-500 text-white  pb-1 rounded-l-xl  shadow-xl border border-r-0 cursor-pointer backdrop-blur-2xl  border-gray-200 hover:bg-orange-600 transition-all duration-300 z-40 hover:scale-105"
                    >
                        <div className="flex flex-col items-center ">
                            {/* Shopping Cart Icon */}


                            <div className="   rounded-xl px-2 py-1 w-full relative flex flex-col items-center ">
                                {/* Red Blink Dot */}
                                <ShoppingBasket size={24} className="text-white" />
                                {/* Items Count */}
                                <div className="text-white font-bold text-lg">
                                    {getTotalItems(cart || [])} items
                                </div>
                            </div>






                            {/* Total Price */}
                            <div className="text-black bg-white px-2 py-1 rounded-xl  font-bold text-sm">
                                ${getTotalPrice(cart || []).toFixed(2)}
                            </div>
                        </div>
                    </div>
                )}



                {/* Mobile Floating Cart Button */}
                {!sidebarOpen && getTotalItems(cart || []) > 0 && (
                    <div
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden fixed top-[45%] left-0 transform -translate-y-1/2  bg-orange-500 text-white  pb-1 rounded-r-xl  shadow-xl border border-l-0 cursor-pointer backdrop-blur-2xl  border-gray-200 hover:bg-orange-600 transition-all duration-300 z-40 hover:scale-105"
                    >
                        <div className="flex flex-col items-center ">
                            {/* Shopping Cart Icon */}


                            <div className="   rounded-xl px-2 py-1 w-full relative flex flex-col items-center ">
                                {/* Red Blink Dot */}
                                <ShoppingBasket size={24} className="text-white" />
                                {/* Items Count */}
                                <div className="text-white font-bold text-lg">
                                    {getTotalItems(cart || [])} items
                                </div>
                            </div>






                            {/* Total Price */}
                            <div className="text-black bg-white px-2 py-1 rounded-xl  font-bold text-sm">
                                ${getTotalPrice(cart || []).toFixed(2)}
                            </div>
                        </div>
                    </div>
                )}






                {/* 
                {getTotalItems(cart || []) > 0 && (
                    <div className="lg:hidden fixed bottom-0 left-0  border-gray-200 right-0 bg-white border-t shadow-lg p-3 sm:p-4 z-30">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-semibold flex items-center justify-between text-sm sm:text-base cursor-pointer"
                        >
                            <span>View Order ({getTotalItems(cart || [])} items)</span>
                            <span>${getTotalPrice(cart || []).toFixed(2)}</span>
                        </button>
                    </div>
                )} */}


            </div>


            {/* Onboarding Modal */}
            {/* {showOnboarding && (
                <OnboardingModal onComplete={handleOnboardingComplete} />
            )} */}

            {/* Initial Table Modal - for first-time users */}
            <InitialTableModal />

            {/* Table Change Modal - for changing existing table info */}
            <TableChangeModal />
        </div>
    );
};

export default DineInPage;
