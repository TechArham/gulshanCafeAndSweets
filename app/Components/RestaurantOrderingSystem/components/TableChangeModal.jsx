'use client'
import React, { useState, useEffect } from 'react';
import { X, MapPin, Users, Phone, Mail } from 'lucide-react';
import { useRestaurantStore } from '../store/restaurantStore';

const TableChangeModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        tableNumber: '',
        name: '',
        phone: '',
        email: ''
    });

    const { orderDetails, updateOrderDetails } = useRestaurantStore();

    // Listen for the openTableModal event (for changing existing table info)
    useEffect(() => {
        const handleOpenModal = () => {
            // Only open if there's already a table selected (for changing)
            if (orderDetails.tableNumber) {
                setIsOpen(true);
                // Pre-fill form with current order details
                setFormData({
                    tableNumber: orderDetails.tableNumber || '',
                    name: orderDetails.name || '',
                    phone: orderDetails.phone || '',
                    email: orderDetails.email || ''
                });
            }
        };

        window.addEventListener('openTableModal', handleOpenModal);
        return () => window.removeEventListener('openTableModal', handleOpenModal);
    }, [orderDetails]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateOrderDetails(formData);
        setIsOpen(false);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900">Change Table Details</h2>
                    <button
                        onClick={handleClose}
                        className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                    >
                        <X size={20} className="text-gray-500" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Table Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <MapPin size={16} className="inline mr-2" />
                            Table Number *
                        </label>
                        <input
                            type="text"
                            value={formData.tableNumber}
                            onChange={(e) => handleInputChange('tableNumber', e.target.value)}
                            placeholder="Enter table number"
                            className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                            required
                        />
                    </div>

                    {/* Customer Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Users size={16} className="inline mr-2" />
                            Customer Name
                        </label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Phone size={16} className="inline mr-2" />
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="Enter phone number"
                            className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Mail size={16} className="inline mr-2" />
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="Enter email address"
                            className="w-full px-3 py-2 border text-black           border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="flex-1 px-4 py-2 border cursor-pointer border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-2 bg-gradient-to-r cursor-pointer from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-colors"
                        >
                            Update Details
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TableChangeModal;
