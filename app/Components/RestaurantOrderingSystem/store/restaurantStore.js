import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRestaurantStore = create(
    persist(
        (set, get) => ({
            // State
            cart: [],
            orderDetails: {
                tableNumber: "",
                name: "",
                phone: "",
                email: "",
                // Billing Address
                billingAddress: {
                    street: "",
                    city: "",
                    state: "",
                    zipCode: "",
                    country: "USA"
                },
                // Shipping Address
                shippingAddress: {
                    street: "",
                    city: "",
                    state: "",
                    zipCode: "",
                    country: "USA"
                },
                sameAsBilling: true
            },
            orderId: null,
            activeCategory: "SuperDeliciousDeal",
            searchTerm: "",
            sidebarOpen: false,
            categoryNavOpen: false,
            visibleItems: 8,
            itemsPerPage: 8,
            currentPage: 1,

            // Cart actions
            addToCart: (item, category) => {
                set((state) => {
                    const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
                    let newCart;

                    if (existingItem) {
                        newCart = state.cart.map((cartItem) =>
                            cartItem.id === item.id
                                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                                : cartItem
                        );
                    } else {
                        newCart = [...state.cart, { ...item, quantity: 1 }];
                    }

                    // Add item to cart but don't auto-open sidebar
                    console.log('Adding to cart:', { item: item.name, quantity: existingItem ? existingItem.quantity + 1 : 1 });
                    return { cart: newCart };
                });
            },

            updateQuantity: (id, newQuantity) => {
                set((state) => {
                    let newCart;
                    if (newQuantity === 0) {
                        newCart = state.cart.filter((item) => item.id !== id);
                    } else {
                        newCart = state.cart.map((item) =>
                            item.id === id ? { ...item, quantity: newQuantity } : item
                        );
                    }
                    return { cart: newCart };
                });
            },

            removeFromCart: (id) => {
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== id)
                }));
            },

            clearCart: () => {
                set({ cart: [] });
            },

            // Order details actions
            updateOrderDetails: (field, value) => {
                set((state) => {
                    if (typeof field === 'object') {
                        // If field is an object, merge it with orderDetails
                        return {
                            orderDetails: { ...state.orderDetails, ...field }
                        };
                    } else {
                        // If field is a string, update that specific field
                        return {
                            orderDetails: { ...state.orderDetails, [field]: value }
                        };
                    }
                });
            },

            // Navigation actions
            setActiveCategory: (category) => {
                set({ activeCategory: category });
            },

            scrollToCategory: (category, categoryRefs) => {
                set({ activeCategory: category, categoryNavOpen: false });
                if (categoryRefs && categoryRefs.current && categoryRefs.current[category]) {
                    categoryRefs.current[category].scrollIntoView({
                        behavior: "auto",
                        block: "start",
                    });
                }
            },

            setSearchTerm: (term) => {
                set({ searchTerm: term });
            },

            setSidebarOpen: (open) => {
                set({ sidebarOpen: open });
            },

            setCategoryNavOpen: (open) => {
                set({ categoryNavOpen: open });
            },

            setVisibleItems: (count) => {
                set({ visibleItems: count });
            },

            setCurrentPage: (page) => {
                set({ currentPage: page });
            },

            setItemsPerPage: (count) => {
                set({ itemsPerPage: count });
            },

            // Order actions
            submitOrder: () => {
                const { cart, orderDetails } = get();
                const generatedId = `12${Math.floor(Math.random() * 1000)}`;

                set({
                    orderId: generatedId,
                    sidebarOpen: false,
                    categoryNavOpen: false
                });

                console.log("Order submitted:", { cart, orderDetails, orderId: generatedId });
                return generatedId;
            },

            resetOrder: () => {
                set({
                    cart: [],
                    orderDetails: {
                        tableNumber: "",
                        name: "",
                        phone: "",
                        email: "",
                    },
                    orderId: null,
                    sidebarOpen: false,
                    categoryNavOpen: false,
                    searchTerm: "",
                    visibleItems: 20,
                    activeCategory: "SuperDeliciousDeal",
                    itemsPerPage: 8,
                    currentPage: 1,
                });
            },

            // Utility functions
            getTotalItems: () => {
                const { cart } = get();
                return cart.reduce((total, item) => total + item.quantity, 0);
            },

            getTotalPrice: () => {
                const { cart } = get();
                return cart.reduce((total, item) => total + item.price * item.quantity, 0);
            },
        }),
        {
            name: 'restaurant-store', // unique name for localStorage key
            partialize: (state) => ({
                cart: state.cart,
                orderDetails: state.orderDetails,
                orderId: state.orderId,
            }), // only persist cart and order details
        }
    )
);
