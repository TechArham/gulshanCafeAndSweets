'use client'
import React from 'react';
import { ShoppingCart, Plus, Minus, Trash2, X, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useRestaurantStore } from '../store/restaurantStore';

const DineInCart = () => {
    const {
        cart,
        sidebarOpen,
        setSidebarOpen,
        updateQuantity,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
        orderDetails,
        submitOrder
    } = useRestaurantStore();


    const handleSubmitOrder = async () => {
        if (cart.length === 0) return;

        try {
            await submitOrder();
            // Show success message or redirect
            alert('Order submitted successfully! Your order will be prepared shortly.');
        } catch (error) {
            console.error('Error submitting order:', error);
            alert('Error submitting order. Please try again.');
        }
    };

    return (
        <>
            {/* Desktop Cart Sidebar */}
            <div className={`hidden lg:block fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="bg-white border-b border-gray-200 p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <ShoppingCart size={24} className="text-orange-500" />
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Your Order</h3>
                                    <p className="text-gray-600 text-sm">
                                        {orderDetails.tableNumber ? `Table ${orderDetails.tableNumber}` : 'Select Table'}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Order Info */}
                    <div className="p-4 bg-gray-50 border-b">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <div className="flex items-center space-x-1">
                                    <MapPin size={16} />
                                    <span>Table {orderDetails.tableNumber || 'Not Selected'}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Clock size={16} />
                                    <span>Dine In</span>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    // This will be handled by the parent component
                                    window.dispatchEvent(new CustomEvent('openTableModal'));
                                }}
                                className="text-orange-500 hover:text-orange-600 text-sm font-medium px-3 py-1 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer"
                            >
                                Change Table
                            </button>
                        </div>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-4">
                        {cart.length === 0 ? (
                            <div className="text-center py-12">
                                <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
                                <p className="text-gray-500 text-lg">Your cart is empty</p>
                                <p className="text-gray-400 text-sm">Add items from the menu to get started</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {cart.map((item) => (
                                    <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border">
                                        <div className="flex items-start space-x-3">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-16 h-16 rounded-lg object-cover"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-gray-900 truncate">{item.name}</h4>
                                                <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center justify-between mt-2">
                                                    <div className="flex items-center space-x-2">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center  transition-colors cursor-pointer"
                                                        >
                                                            <Minus size={12} />
                                                        </button>
                                                        <span className="w-8 text-center font-medium text-black">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="w-8 h-8 rounded-full bg-orange-500
                                                             flex items-center justify-center  transition-colors cursor-pointer"
                                                        >
                                                            <Plus size={12} />
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-red-500 hover:text-red-600 p-1 cursor-pointer"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {cart.length > 0 && (
                        <div className="border-t bg-white p-4">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-lg text-black font-semibold">Total ({getTotalItems(cart)} items)</span>
                                <span className="text-2xl font-bold text-orange-600">${getTotalPrice(cart).toFixed(2)}</span>
                            </div>

                            <button
                                onClick={handleSubmitOrder}
                                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                            >
                                <CheckCircle size={20} />
                                <span>Submit Order to Kitchen</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Cart Overlay */}
            {sidebarOpen && (
                <div className="lg:hidden fixed inset-0  backdrop-blur-md bg-opacity-50 z-20" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Mobile Cart Bottom Sheet */}
            <div className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl transform transition-transform duration-300 ease-in-out z-30 ${sidebarOpen ? 'translate-y-0' : 'translate-y-full'
                }`} style={{ maxHeight: '80vh' }}>
                <div className="h-full flex flex-col">
                    {/* Handle */}
                    <div className="flex justify-center pt-3 pb-2">
                        <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                    </div>

                    {/* Header */}
                    <div className="px-6 py-4 border-b">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <ShoppingCart size={24} className="text-orange-500" />
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Your Order</h3>
                                    <p className="text-gray-600 text-sm">
                                        {orderDetails.tableNumber ? `Table ${orderDetails.tableNumber}` : 'Select Table'}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="text-gray-400 hover:text-gray-600 cursor-pointer"
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto px-6 py-4">
                        {cart.length === 0 ? (
                            <div className="text-center py-8">
                                <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
                                <p className="text-gray-500 text-lg">Your cart is empty</p>
                                <p className="text-gray-400 text-sm">Add items from the menu to get started</p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {cart.map((item) => (
                                    <div key={item.id} className="bg-gray-50 rounded-xl p-3">
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-12 h-12 rounded-lg object-cover"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-gray-900 text-sm truncate">{item.name}</h4>
                                                <p className="text-xs text-gray-500">${item.price.toFixed(2)}</p>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-6 h-6 rounded-full  bg-orange-500 flex items-center justify-center cursor-pointer"
                                                >
                                                    <Minus size={12} />
                                                </button>
                                                <span className="w-6 text-center text-sm font-medium text-black">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer"
                                                >
                                                    <Plus size={12} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {cart.length > 0 && (
                        <div className="border-t bg-white p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-lg font-semibold  text-black">Total ({getTotalItems(cart)} items)</span>
                                <span className="text-xl font-bold text-orange-600">${getTotalPrice(cart).toFixed(2)}</span>
                            </div>

                            <button
                                onClick={handleSubmitOrder}
                                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                            >
                                <CheckCircle size={20} />
                                <span>Submit Order to Kitchen</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default DineInCart;
