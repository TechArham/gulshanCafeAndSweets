'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { useRestaurantStore } from '../store/restaurantStore';

// Import components
import CategoryFilter from '../components/CategoryFilter';
import MenuGrid from '../components/MenuGrid';
import CartSidebar from '../components/CartSidebar';
import OnboardingModal from '../components/OnboardingModal';

// Import data and utilities
import { menuData, categoryDisplayNames } from '../data/menuData';
import { useRef } from 'react';

const DineInPage = () => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [showOnboarding, setShowOnboarding] = useState(false);

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
            <CartSidebar />

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
                        className="hidden lg:block fixed top-1/2 right-0 transform -translate-y-1/2 bg-orange-500 text-white p-4   rounded-l-2xl shadow-xl cursor-pointer hover:bg-orange-600 transition-all duration-300 z-40 hover:scale-105"
                    >
                        <div className="flex flex-col items-center">
                            <ShoppingCart size={24} className="mb-2" />
                            <div className="text-sm font-bold">{getTotalItems(cart || [])}</div>
                            <div className="text-sm font-bold">
                                ${getTotalPrice(cart || []).toFixed(2)}
                            </div>
                        </div>
                    </div>
                )}

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
                )}
            </div>


            {/* Onboarding Modal */}
            {showOnboarding && (
                <OnboardingModal onComplete={handleOnboardingComplete} />
            )}
        </div>
    );
};

export default DineInPage;
