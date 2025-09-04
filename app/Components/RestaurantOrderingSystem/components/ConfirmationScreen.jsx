import React from 'react';
import { Check, Clock } from 'lucide-react';

const ConfirmationScreen = ({
    orderDetails,
    orderId,
    getTotalItems,
    getTotalPrice,
    resetOrder
}) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-3 sm:p-4">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full text-center">
                <div className="mb-6 sm:mb-8">
                    <div className="bg-green-100 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Check className="text-green-600" size={32} />
                    </div>
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                        Order Confirmed!
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base">Thank you {orderDetails.name}</p>
                </div>

                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                        <Clock className="text-orange-500 mr-2" size={18} />
                        <span className="text-gray-700 text-sm sm:text-base">Estimated prep time</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-orange-600">15-25 mins</div>
                </div>

                <div className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 space-y-1">
                    <p className="font-semibold">
                        Order #{orderId}
                    </p>
                    <p>Table {orderDetails.tableNumber}</p>
                    <p>
                        {getTotalItems()} items • ${getTotalPrice().toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                        Order sent to kitchen • Receipt printed
                    </p>
                </div>

                <button
                    onClick={resetOrder}
                    className="w-full cursor-pointer bg-gray-200 text-gray-700 font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl sm:rounded-2xl hover:bg-gray-300 transition-colors text-sm sm:text-base"
                >
                    Place Another Order
                </button>
            </div>
        </div>
    );
};

export default ConfirmationScreen;
