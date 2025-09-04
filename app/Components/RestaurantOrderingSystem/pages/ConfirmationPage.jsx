'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, Clock, MapPin, Phone, Mail, ArrowLeft, Home } from 'lucide-react';
import { useRestaurant } from '../context/RestaurantContext';
import { getTotalItems, getTotalPrice } from '../utils/helpers';

const ConfirmationPage = () => {
    const router = useRouter();
    const {
        orderDetails,
        orderId,
        cart,
        resetOrder
    } = useRestaurant();

    const handleNewOrder = () => {
        resetOrder();
        router.push('/');
    };

    const handleBackToMenu = () => {
        router.push('/menu');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="text-2xl">🍽️</div>
                            <h1 className="text-xl font-bold text-gray-800">Gulshan Cafe & Sweets</h1>
                        </div>
                        <button
                            onClick={handleNewOrder}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold transition-colors cursor-pointer"
                        >
                            New Order
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Success Message */}
                <div className="text-center mb-12">
                    <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="text-green-500" size={48} />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Order Confirmed!</h1>
                    <p className="text-xl text-gray-600 mb-2">
                        Thank you for your order, <span className="font-semibold text-orange-600">{orderDetails.name}</span>
                    </p>
                    <p className="text-lg text-gray-500">
                        Your order #{orderId} has been successfully placed
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Order Details */}
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <Clock className="mr-3 text-orange-500" size={24} />
                            Order Information
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="bg-orange-100 p-2 rounded-full">
                                    <MapPin className="text-orange-500" size={18} />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Table Number</p>
                                    <p className="text-gray-600">{orderDetails.tableNumber || 'Not specified'}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="bg-orange-100 p-2 rounded-full">
                                    <Phone className="text-orange-500" size={18} />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Phone</p>
                                    <p className="text-gray-600">{orderDetails.phone || 'Not provided'}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="bg-orange-100 p-2 rounded-full">
                                    <Mail className="text-orange-500" size={18} />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Email</p>
                                    <p className="text-gray-600">{orderDetails.email || 'Not provided'}</p>
                                </div>
                            </div>

                            <div className="bg-orange-50 rounded-xl p-4 mt-6">
                                <p className="text-orange-800 font-semibold mb-2">Estimated Preparation Time</p>
                                <p className="text-orange-700">15-25 minutes</p>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-lg object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <span className="font-semibold text-orange-600">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-50 rounded-xl p-4 mb-6">
                            <div className="flex justify-between items-center text-lg font-bold">
                                <span>Total ({getTotalItems(cart)} items)</span>
                                <span className="text-orange-600">${getTotalPrice(cart).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                    <button
                        onClick={handleBackToMenu}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-xl font-semibold transition-colors cursor-pointer flex items-center justify-center space-x-2"
                    >
                        <ArrowLeft size={18} />
                        <span>Back to Menu</span>
                    </button>
                    <button
                        onClick={handleNewOrder}
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
                    >
                        <Home size={18} />
                        <span>Start New Order</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;
