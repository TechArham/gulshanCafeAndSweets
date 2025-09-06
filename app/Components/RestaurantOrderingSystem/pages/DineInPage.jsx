'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Users, MapPin, X, ShoppingCart, Phone } from 'lucide-react';
import { useRestaurantStore } from '../store/restaurantStore';

// Import components
import CategoryFilter from '../components/CategoryFilter';
import MenuGrid from '../components/MenuGrid';
import DineInCart from '../components/DineInCart';
import OnboardingModal from '../components/OnboardingModal';

// Import data and utilities
import { menuData, categoryDisplayNames } from '../data/menuData';
import { useRef } from 'react';

const DineInPage = () => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [tableNumber, setTableNumber] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showTableModal, setShowTableModal] = useState(false);

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
        orderDetails,
        updateOrderDetails
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

    // Handle table modal event from cart
    useEffect(() => {
        const handleOpenTableModal = () => {
            setShowTableModal(true);
        };

        window.addEventListener('openTableModal', handleOpenTableModal);
        return () => window.removeEventListener('openTableModal', handleOpenTableModal);
    }, []);

    // Check if table is selected
    useEffect(() => {
        if (!orderDetails.tableNumber && !showOnboarding) {
            setShowTableModal(true);
        }
    }, [orderDetails.tableNumber, showOnboarding]);

    const handleBackToLanding = () => {
        router.push('/');
    };

    const handleTableSelect = (table) => {
        setTableNumber(table);
        updateOrderDetails({ tableNumber: table });
        setShowTableModal(false);
    };

    const handleNameSubmit = () => {
        if (customerName.trim() && phoneNumber.trim()) {
            updateOrderDetails({ name: customerName, phone: phoneNumber });
            setShowTableModal(false);
        }
    };

    const handleOnboardingComplete = () => {
        localStorage.setItem('dineInOnboardingSeen', 'true');
        setShowOnboarding(false);
        if (!orderDetails.tableNumber) {
            setShowTableModal(true);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">




            <CategoryFilter showTableInfo={true} />
            <DineInCart />

            <div className={`min-h-screen container mx-auto flex ${isScrolled ? 'pt-40' : 'pt-4'} ${sidebarOpen ? 'lg:pr-96' : ''} relative z-10`}>
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

            {/* Table Selection Modal */}
            {showTableModal && (
                <div className="fixed inset-0    backdrop-blur-md flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl border border-gray-300 p-6 w-full max-w-md">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-black">Select Your Table</h3>
                            <button
                                onClick={() => setShowTableModal(false)}
                                className="text-gray-400 cursor-pointer hover:text-gray-600"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Customer Name (Optional)
                            </label>
                            <input
                                type="text"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                placeholder="Enter your name"
                                className="w-full px-3 py-2 border border-gray-300 focus-within:border-orange-500 outline-none rounded-lg focus:ring-1 text-black focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number *
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone size={20} className="text-gray-400" />
                                </div>
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="Enter your phone number"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 focus-within:border-orange-500 outline-none rounded-lg focus:ring-1 text-black focus:ring-orange-500 focus:border-orange-500"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Table Number
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((table) => (
                                    <button
                                        key={table}
                                        onClick={() => handleTableSelect(table.toString())}
                                        className={`p-3 rounded-lg text-black border-2 cursor-pointer transition-all ${tableNumber === table.toString()
                                            ? 'border-orange-500 bg-orange-50 text-orange-600'
                                            : 'border-gray-200 hover:border-orange-300'
                                            }`}
                                    >
                                        {table}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handleNameSubmit}
                            disabled={!tableNumber || !phoneNumber.trim()}
                            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Continue to Menu
                        </button>
                    </div>
                </div>
            )}

            {/* Onboarding Modal */}
            {showOnboarding && (
                <OnboardingModal onComplete={handleOnboardingComplete} />
            )}
        </div>
    );
};

export default DineInPage;
