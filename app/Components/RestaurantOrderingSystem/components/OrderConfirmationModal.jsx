import React from 'react';
import { CheckCircle, Clock, MapPin, Phone, Mail, CreditCard, X, Copy, Calendar } from 'lucide-react';

const OrderConfirmationModal = ({ isOpen, onClose, orderData }) => {
    console.log('OrderConfirmationModal props:', { isOpen, orderData });
    if (!isOpen) return null;

    const generateOrderId = () => {
        const timestamp = Date.now().toString(36);
        const random = Math.random().toString(36).substr(2, 5);
        return `ORD-${timestamp}-${random}`.toUpperCase();
    };

    const orderId = generateOrderId();
    const estimatedTime = orderData?.orderType === 'delivery' ? '30-45 minutes' : '15-20 minutes';

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        // You could add a toast notification here
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-t-3xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="bg-white bg-opacity-20 rounded-full p-3">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold">Order Confirmed!</h2>
                                <p className="text-green-100 text-lg">Thank you for your order</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-white hover:text-green-200 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                    {/* Order ID */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Order Tracking ID</h3>
                                <p className="text-2xl font-bold text-green-600 font-mono">{orderId}</p>
                                <p className="text-sm text-gray-500 mt-1">Save this ID for order tracking</p>
                            </div>
                            <button
                                onClick={() => copyToClipboard(orderId)}
                                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl transition-colors"
                                title="Copy Order ID"
                            >
                                <Copy className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Order Details */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800">Order Details</h3>

                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-blue-100 rounded-full p-2">
                                        <Calendar className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Order Type</p>
                                        <p className="text-gray-600 capitalize">{orderData?.orderType}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="bg-orange-100 rounded-full p-2">
                                        <Clock className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Estimated Time</p>
                                        <p className="text-gray-600">{estimatedTime}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="bg-purple-100 rounded-full p-2">
                                        <MapPin className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Delivery Address</p>
                                        <p className="text-gray-600 text-sm">
                                            {orderData?.billingAddress?.street}, {orderData?.billingAddress?.city}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Customer Info */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800">Customer Information</h3>

                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-green-100 rounded-full p-2">
                                        <Phone className="w-4 h-4 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Phone</p>
                                        <p className="text-gray-600">{orderData?.phone || 'Not provided'}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="bg-indigo-100 rounded-full p-2">
                                        <Mail className="w-4 h-4 text-indigo-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Email</p>
                                        <p className="text-gray-600">{orderData?.email || 'Not provided'}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="bg-red-100 rounded-full p-2">
                                        <CreditCard className="w-4 h-4 text-red-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Payment</p>
                                        <p className="text-gray-600">Cash on {orderData?.orderType}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Items */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Items</h3>
                        <div className="space-y-3">
                            {orderData?.cart?.map((item) => (
                                <div key={item.id} className="flex items-center justify-between py-2">
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-800">{item.name}</p>
                                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                    </div>
                                    <p className="font-semibold text-gray-800">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pt-4 mt-4">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold text-gray-800">Total</span>
                                <span className="text-xl font-bold text-green-600">
                                    ${orderData?.total?.toFixed(2) || '0.00'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Important Information */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Information</h3>
                        <ul className="space-y-2 text-sm text-yellow-700">
                            <li className="flex items-start space-x-2">
                                <span className="text-yellow-600 mt-1">•</span>
                                <span>Please keep your order ID safe for tracking and customer service inquiries.</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-yellow-600 mt-1">•</span>
                                <span>We'll send you SMS updates about your order status.</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-yellow-600 mt-1">•</span>
                                <span>For delivery orders, please ensure someone is available to receive the order.</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-yellow-600 mt-1">•</span>
                                <span>Contact us at (555) 123-4567 if you have any questions.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={onClose}
                            className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                            Continue Shopping
                        </button>
                        <button
                            onClick={() => {
                                // You could implement order tracking here
                                console.log('Track order:', orderId);
                            }}
                            className="flex-1 bg-gray-100 text-gray-800 py-4 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                        >
                            Track Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmationModal;
