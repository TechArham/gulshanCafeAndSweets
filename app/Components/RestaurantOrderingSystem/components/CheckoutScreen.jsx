import React from 'react';

const CheckoutScreen = ({
    setCurrentScreen,
    cart,
    getTotalPrice,
    orderDetails,
    handleInputChange,
    submitOrder
}) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="p-3 sm:p-4 max-w-2xl mx-auto">
                <div className="flex items-center mb-4 sm:mb-6">
                    <button
                        onClick={() => setCurrentScreen("menu")}
                        className="mr-3 sm:mr-4 text-gray-600 hover:text-gray-800 p-1 cursor-pointer"
                    >
                        ← Back to Menu
                    </button>
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Checkout</h1>
                </div>

                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6">
                    <h2 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Order Summary</h2>
                    <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
                        {cart.map((item) => (
                            <div key={item.id} className="flex justify-between text-sm py-1">
                                <span className="flex-1 mr-2">
                                    {item.name} x{item.quantity}
                                </span>
                                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t pt-2 flex justify-between text-gray-800 font-bold text-base sm:text-lg">
                        <span>Total</span>
                        <span className="text-orange-600">
                            ${getTotalPrice().toFixed(2)}
                        </span>
                    </div>
                </div>

                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                    <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Customer Details</h2>
                    <div className="space-y-3 sm:space-y-4">
                        <input
                            type="text"
                            placeholder="Table Number *"
                            value={orderDetails.tableNumber}
                            onChange={(e) =>
                                handleInputChange("tableNumber", e.target.value)
                            }
                            className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm sm:text-base"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Your Name *"
                            value={orderDetails.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm sm:text-base"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number (Optional)"
                            value={orderDetails.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm sm:text-base"
                        />
                        <input
                            type="email"
                            placeholder="Email (Optional - for receipt)"
                            value={orderDetails.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm sm:text-base"
                        />
                    </div>
                </div>

                <button
                    onClick={submitOrder}
                    disabled={!orderDetails.tableNumber || !orderDetails.name}
                    className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all cursor-pointer ${orderDetails.tableNumber && orderDetails.name
                        ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg transform hover:scale-105"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    Place Order - ${getTotalPrice().toFixed(2)}
                </button>
            </div>
        </div>
    );
};

export default CheckoutScreen;
