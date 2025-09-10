'use client'
import React, { useState, useEffect } from 'react';
import { X, MapPin, Users, Phone, Mail, ArrowRight } from 'lucide-react';
import { useRestaurantStore } from '../store/restaurantStore';
import Image from 'next/image';

const InitialTableModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        tableNumber: '',
        name: '',
        phone: '',
        email: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const { orderDetails, updateOrderDetails } = useRestaurantStore();

    // Listen for the openInitialTableModal event
    useEffect(() => {
        const handleOpenModal = () => {
            setIsOpen(true);
            // Pre-fill form with current order details if any
            setFormData({
                tableNumber: orderDetails.tableNumber || '',
                name: orderDetails.name || '',
                phone: orderDetails.phone || '',
                email: orderDetails.email || ''
            });
        };

        window.addEventListener('openInitialTableModal', handleOpenModal);
        return () => window.removeEventListener('openInitialTableModal', handleOpenModal);
    }, [orderDetails]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        // Clear error when user starts typing
        if (formErrors[field]) {
            setFormErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.tableNumber.trim()) {
            errors.tableNumber = 'Table number is required';
        }
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            updateOrderDetails(formData);
            setIsOpen(false);
        }
    };

    const handleClose = () => {
        // Don't allow closing without table number
        if (!formData.tableNumber.trim()) {
            return;
        }
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0  backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 text-center">
                    <div className="mb-4">
                        <Image
                            src="/logo.png"
                            alt="Restaurant Logo"
                            width={60}
                            height={60}
                            className="mx-auto rounded-full bg-white p-2"
                        />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Welcome to Dine In</h2>
                    <p className="text-orange-100 text-sm">
                        Please provide your table and contact information
                    </p>
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
                            placeholder="Enter your table number"
                            className={`w-full px-3 py-2 border rounded-lg text-black focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none ${formErrors.tableNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'
                                }`}
                            required
                        />
                        {formErrors.tableNumber && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.tableNumber}</p>
                        )}
                    </div>

                    {/* Customer Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Users size={16} className="inline mr-2" />
                            Your Name *
                        </label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Enter your full name"
                            className={`w-full px-3 py-2 border rounded-lg text-black focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none ${formErrors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                                }`}
                            required
                        />
                        {formErrors.name && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                        )}
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Phone size={16} className="inline mr-2" />
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="Enter your phone number"
                            className={`w-full px-3 py-2 border rounded-lg text-black focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none ${formErrors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                                }`}
                            required
                        />
                        {formErrors.phone && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Mail size={16} className="inline mr-2" />
                            Email Address *
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="Enter your email address"
                            className={`w-full px-3 py-2 border rounded-lg text-black focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none ${formErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                                }`}
                            required
                        />
                        {formErrors.email && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full px-4 cursor-pointer py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-colors flex items-center justify-center space-x-2 font-semibold"
                        >
                            <span>Start Ordering</span>
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InitialTableModal;
