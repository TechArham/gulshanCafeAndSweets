'use client'
import React, { useState, useRef } from "react";
import { Search, ShoppingCart } from "lucide-react";

// Import components
import LandingScreen from './components/LandingScreen';
import ConfirmationScreen from './components/ConfirmationScreen';
import CategoryNav from './components/CategoryNav';
import MenuGrid from './components/MenuGrid';
import CartSidebar from './components/CartSidebar';
import CheckoutScreen from './components/CheckoutScreen';

// Import data and utilities
import { menuData, categoryDisplayNames } from './data/menuData';
import { getTotalItems, getTotalPrice } from './utils/helpers';

const RestaurantOrderingSystem = () => {
  // State management
  const [currentScreen, setCurrentScreen] = useState("landing");
  const [cart, setCart] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    tableNumber: "",
    name: "",
    phone: "",
    email: "",
  });
  const [orderId, setOrderId] = useState(null);
  const [activeCategory, setActiveCategory] = useState("vegetable");
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categoryNavOpen, setCategoryNavOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(20);

  const categoryRefs = useRef({});

  // Cart functions
  const addToCart = (item, category) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      // Keep the same image shown in the menu card (MenuGrid uses deterministic online image)
      return [...prevCart, { ...item, quantity: 1 }];
    });

    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setSidebarOpen(true);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Navigation functions
  const scrollToCategory = (category) => {
    setActiveCategory(category);
    setCategoryNavOpen(false);
    if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }
  };

  // Form handling
  const handleInputChange = (field, value) => {
    setOrderDetails((prev) => ({ ...prev, [field]: value }));
  };

  const submitOrder = () => {
    const generatedId = `12${Math.floor(Math.random() * 1000)}`;
    setOrderId(generatedId);
    console.log("Order submitted:", { cart, orderDetails, orderId: generatedId });
    setCurrentScreen("confirmation");
    setSidebarOpen(false);
    setCategoryNavOpen(false);
  };

  const resetOrder = () => {
    setCurrentScreen("landing");
    setCart([]);
    setOrderDetails({
      tableNumber: "",
      name: "",
      phone: "",
      email: "",
    });
    setOrderId(null);
    setSidebarOpen(false);
    setCategoryNavOpen(false);
    setSearchTerm("");
    setVisibleItems(20);
    setActiveCategory("vegetable");
  };

  // Screen rendering
  if (currentScreen === "confirmation") {
    return (
      <ConfirmationScreen
        orderDetails={orderDetails}
        orderId={orderId}
        getTotalItems={() => getTotalItems(cart)}
        getTotalPrice={() => getTotalPrice(cart)}
        resetOrder={resetOrder}
      />
    );
  }

  if (currentScreen === "landing") {
    return <LandingScreen setCurrentScreen={setCurrentScreen} />;
  }

  if (currentScreen === "checkout") {
    return (
      <CheckoutScreen
        setCurrentScreen={setCurrentScreen}
        cart={cart}
        getTotalPrice={() => getTotalPrice(cart)}
        orderDetails={orderDetails}
        handleInputChange={handleInputChange}
        submitOrder={submitOrder}
      />
    );
  }

  if (currentScreen === "menu") {
    return (
      <div className="bg-white">
        <div className={`min-h-screen container flex `}>
          <div
            className={`flex-1 transition-all duration-300 ease-in-out pb-24 lg:pb-4 ${sidebarOpen ? 'lg:mr-80' : ''}`}
          >
            <div className="sticky top-0 bg-white shadow-sm z-30">
              <CategoryNav
                categoryNavOpen={categoryNavOpen}
                setCategoryNavOpen={setCategoryNavOpen}
                menuData={menuData}
                categoryDisplayNames={categoryDisplayNames}
                activeCategory={activeCategory}
                scrollToCategory={scrollToCategory}
              />

              <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Search menu items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-gray-100 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-colors outline-none text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>

            <MenuGrid
              menuData={menuData}
              categoryDisplayNames={categoryDisplayNames}
              searchTerm={searchTerm}
              visibleItems={visibleItems}
              sidebarOpen={sidebarOpen}
              addToCart={addToCart}
              categoryRefs={categoryRefs}
            />
          </div>

          <CartSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            cart={cart}
            updateQuantity={updateQuantity}
            getTotalItems={() => getTotalItems(cart)}
            getTotalPrice={() => getTotalPrice(cart)}
            setCurrentScreen={setCurrentScreen}
          />

          {/* Desktop Cart Trigger */}
          {!sidebarOpen && getTotalItems(cart) > 0 && (
            <div
              onClick={() => setSidebarOpen(true)}
              className="hidden lg:block fixed top-1/2 right-0 transform -translate-y-1/2 bg-orange-500 text-white p-4 rounded-l-2xl shadow-xl cursor-pointer hover:bg-orange-600 transition-all duration-300 z-30 hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <ShoppingCart size={24} className="mb-2" />
                <div className="text-xs font-bold">{getTotalItems(cart)}</div>
                <div className="text-xs font-bold">
                  ${getTotalPrice(cart).toFixed(2)}
                </div>
              </div>
            </div>
          )}

          {/* Mobile Cart Trigger - opens the same sidebar for consistency */}
          {getTotalItems(cart) > 0 && (
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-3 sm:p-4 z-30">
              <button
                onClick={() => setSidebarOpen(true)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-semibold flex items-center justify-between text-sm sm:text-base cursor-pointer"
              >
                <span>View Cart ({getTotalItems(cart)} items)</span>
                <span>${getTotalPrice(cart).toFixed(2)}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default RestaurantOrderingSystem;