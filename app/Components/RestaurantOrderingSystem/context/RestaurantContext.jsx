'use client'
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const RestaurantContext = createContext();

export const useRestaurant = () => {
    const context = useContext(RestaurantContext);
    if (!context) {
        throw new Error('useRestaurant must be used within a RestaurantProvider');
    }
    return context;
};

export const RestaurantProvider = ({ children }) => {
    // State management with localStorage persistence
    const [cart, setCart] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('restaurant-cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });
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

    // Sync cart with localStorage on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('restaurant-cart');
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
        }
    }, []);

    // Cart functions with localStorage persistence
    const addToCart = (item, category) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            let newCart;
            if (existingItem) {
                newCart = prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                newCart = [...prevCart, { ...item, quantity: 1 }];
            }

            // Save to localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('restaurant-cart', JSON.stringify(newCart));
            }

            return newCart;
        });

        if (typeof window !== "undefined" && window.innerWidth >= 1024) {
            setSidebarOpen(true);
        }
    };

    const updateQuantity = (id, newQuantity) => {
        setCart((prevCart) => {
            let newCart;
            if (newQuantity === 0) {
                newCart = prevCart.filter((item) => item.id !== id);
            } else {
                newCart = prevCart.map((item) =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                );
            }

            // Save to localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('restaurant-cart', JSON.stringify(newCart));
            }

            return newCart;
        });
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
        setSidebarOpen(false);
        setCategoryNavOpen(false);
    };

    const resetOrder = () => {
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

        // Clear localStorage
        if (typeof window !== 'undefined') {
            localStorage.removeItem('restaurant-cart');
        }
    };

    const value = {
        // State
        cart,
        orderDetails,
        orderId,
        activeCategory,
        searchTerm,
        sidebarOpen,
        categoryNavOpen,
        visibleItems,
        categoryRefs,

        // Functions
        setCart,
        setOrderDetails,
        setOrderId,
        setActiveCategory,
        setSearchTerm,
        setSidebarOpen,
        setCategoryNavOpen,
        setVisibleItems,
        addToCart,
        updateQuantity,
        scrollToCategory,
        handleInputChange,
        submitOrder,
        resetOrder,
    };

    return (
        <RestaurantContext.Provider value={value}>
            {children}
        </RestaurantContext.Provider>
    );
};
