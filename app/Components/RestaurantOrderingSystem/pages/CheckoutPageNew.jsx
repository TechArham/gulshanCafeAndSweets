'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CreditCard, User, Phone, Mail, MapPin, ShoppingBag, CheckCircle, Clock, Shield } from 'lucide-react';
import { useRestaurantStore } from '../store/restaurantStore';
import MenuHero from '../components/MenuHero';

const CheckoutPage = () => {
    const router = useRouter();
    const {
        cart,
        orderDetails,
        updateOrderDetails,
        submitOrder,
        getTotalPrice,
        getTotalItems
    } = useRestaurantStore();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [orderType, setOrderType] = useState('pickup');
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');
    const [sameAsBilling, setSameAsBilling] = useState(true);

    const handleBackToMenu = () => {
        router.push('/menu');
    };

    const handleSameAsBillingChange = (checked) => {
        setSameAsBilling(checked);
        if (checked) {
            // Copy billing address to shipping address
            updateOrderDetails('shippingAddress', orderDetails.billingAddress);
        }
    };

    const handleBillingAddressChange = (field, value) => {
        const newBillingAddress = { ...orderDetails.billingAddress, [field]: value };
        updateOrderDetails('billingAddress', newBillingAddress);

        // If same as billing is checked, update shipping address too
        if (sameAsBilling) {
            updateOrderDetails('shippingAddress', newBillingAddress);
        }
    };

    const handleShippingAddressChange = (field, value) => {
        const newShippingAddress = { ...orderDetails.shippingAddress, [field]: value };
        updateOrderDetails('shippingAddress', newShippingAddress);
    };

    const validateForm = () => {
        const errors = {};
        if (!orderDetails.name.trim()) errors.name = 'Name is required';
        if (!orderDetails.phone.trim()) errors.phone = 'Phone number is required';
        if (!orderDetails.email.trim()) errors.email = 'Email is required';
        if (!orderDetails.tableNumber.trim()) errors.tableNumber = 'Table number is required';

        // Validate billing address
        if (!orderDetails.billingAddress.street.trim()) errors.billingStreet = 'Billing street address is required';
        if (!orderDetails.billingAddress.city.trim()) errors.billingCity = 'Billing city is required';
        if (!orderDetails.billingAddress.state.trim()) errors.billingState = 'Billing state is required';
        if (!orderDetails.billingAddress.zipCode.trim()) errors.billingZip = 'Billing ZIP code is required';

        // Validate shipping address if not same as billing
        if (!sameAsBilling) {
            if (!orderDetails.shippingAddress.street.trim()) errors.shippingStreet = 'Shipping street address is required';
            if (!orderDetails.shippingAddress.city.trim()) errors.shippingCity = 'Shipping city is required';
            if (!orderDetails.shippingAddress.state.trim()) errors.shippingState = 'Shipping state is required';
            if (!orderDetails.shippingAddress.zipCode.trim()) errors.shippingZip = 'Shipping ZIP code is required';
        }

        // Validate pickup date and time if pickup is selected
        if (orderType === 'pickup') {
            if (!pickupDate.trim()) errors.pickupDate = 'Pickup date is required';
            if (!pickupTime.trim()) errors.pickupTime = 'Pickup time is required';
        }

        // Validate delivery date and time if delivery is selected
        if (orderType === 'delivery') {
            if (!deliveryDate.trim()) errors.deliveryDate = 'Delivery date is required';
            if (!deliveryTime.trim()) errors.deliveryTime = 'Delivery time is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmitOrder = async () => {
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            const orderData = {
                ...orderDetails,
                orderType,
                pickupDate: orderType === 'pickup' ? pickupDate : null,
                pickupTime: orderType === 'pickup' ? pickupTime : null,
                deliveryDate: orderType === 'delivery' ? deliveryDate : null,
                deliveryTime: orderType === 'delivery' ? deliveryTime : null,
                sameAsBilling
            };

            console.log('Order submitted:', orderData);
            // Here you would typically send the order to your backend

            router.push('/confirmation');
        } catch (error) {
            console.error('Error submitting order:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (cart.length === 0) {
        return (
            <div className="bg-white min-h-screen">
                {/* Checkout Hero Section */}
                <MenuHero
                    title="Checkout"
                    subtitle="Complete Your Order"
                    showDeliveryIllustration={false}
                />

                {/* Empty Cart Section */}
                <div className="container mx-auto px-4 py-12 flex items-center justify-center">
                    <div className="text-center max-w-md mx-auto">
                        <div className="bg-white rounded-3xl shadow-xl p-8">
                            <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                                <ShoppingBag size={32} className="text-gray-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
                            <p className="text-gray-600 mb-8">Add some delicious items to your cart before checkout.</p>
                            <button
                                onClick={handleBackToMenu}
                                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer"
                            >
                                Back to Menu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Checkout Hero Section */}
            <MenuHero
                title="Checkout"
                subtitle="Complete Your Order"
                showDeliveryIllustration={false}
            />

            <div className="container mx-auto px-4 py-12">
                {/* Delivery/Pickup Section */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Order Type & Timing</h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Delivery Option */}
                        <div
                            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${orderType === 'delivery'
                                ? 'border-red-500 bg-red-50'
                                : 'border-gray-200 bg-gray-50'
                                }`}
                            onClick={() => setOrderType('delivery')}
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <input
                                    type="radio"
                                    id="delivery"
                                    name="orderType"
                                    value="delivery"
                                    checked={orderType === 'delivery'}
                                    onChange={(e) => setOrderType(e.target.value)}
                                    className="w-5 h-5 text-red-500 border-gray-300 focus:ring-red-500"
                                />
                                <label htmlFor="delivery" className="text-lg font-semibold text-gray-700 cursor-pointer">
                                    Delivery *
                                </label>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" onClick={(e) => e.stopPropagation()}>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-red-500 mb-2">
                                        Delivery date *
                                    </label>
                                    <input
                                        type="date"
                                        value={deliveryDate}
                                        onChange={(e) => setDeliveryDate(e.target.value)}
                                        className={`px-3 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-sm text-black ${formErrors.deliveryDate ? 'border-red-500 bg-red-50' : 'border-red-300'
                                            }`}
                                        required
                                    />
                                    {formErrors.deliveryDate && (
                                        <p className="text-red-500 text-xs mt-1">{formErrors.deliveryDate}</p>
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-red-500 mb-2">
                                        Delivery Time *
                                    </label>
                                    <input
                                        type="time"
                                        value={deliveryTime}
                                        onChange={(e) => setDeliveryTime(e.target.value)}
                                        className={`px-3 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-sm text-black ${formErrors.deliveryTime ? 'border-red-500 bg-red-50' : 'border-red-300'
                                            }`}
                                        required
                                    />
                                    {formErrors.deliveryTime && (
                                        <p className="text-red-500 text-xs mt-1">{formErrors.deliveryTime}</p>
                                    )}
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-3">🚚 We'll deliver to your location</p>
                        </div>

                        {/* Pickup Option */}
                        <div
                            className={`p-6 cursor-pointer rounded-xl border-2 transition-all duration-200 ${orderType === 'pickup'
                                ? 'border-red-500 bg-red-50'
                                : 'border-gray-200 bg-gray-50'
                                }`}
                            onClick={() => setOrderType('pickup')}
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <input
                                    type="radio"
                                    id="pickup"
                                    name="orderType"
                                    value="pickup"
                                    checked={orderType === 'pickup'}
                                    onChange={(e) => setOrderType(e.target.value)}
                                    className="w-5 h-5 text-red-500 border-gray-300 focus:ring-red-500"
                                />
                                <label htmlFor="pickup" className="text-lg font-semibold text-gray-700 cursor-pointer">
                                    Pickup *
                                </label>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" onClick={(e) => e.stopPropagation()}>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-red-500 mb-2">
                                        Pickup date *
                                    </label>
                                    <input
                                        type="date"
                                        value={pickupDate}
                                        onChange={(e) => setPickupDate(e.target.value)}
                                        className={`px-3 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-sm text-black ${formErrors.pickupDate ? 'border-red-500 bg-red-50' : 'border-red-300'
                                            }`}
                                        required
                                    />
                                    {formErrors.pickupDate && (
                                        <p className="text-red-500 text-xs mt-1">{formErrors.pickupDate}</p>
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-red-500 mb-2">
                                        Pickup Time *
                                    </label>
                                    <input
                                        type="time"
                                        value={pickupTime}
                                        onChange={(e) => setPickupTime(e.target.value)}
                                        className={`px-3 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-sm text-black ${formErrors.pickupTime ? 'border-red-500 bg-red-50' : 'border-red-300'
                                            }`}
                                        required
                                    />
                                    {formErrors.pickupTime && (
                                        <p className="text-red-500 text-xs mt-1">{formErrors.pickupTime}</p>
                                    )}
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-3">🏪 Pickup Hurry! Come to our store</p>
                        </div>
                    </div>
                </div>

                {/* Billing Address Section */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
                    <div className="flex items-center mb-6">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-2xl mr-4">
                            <CreditCard className="text-white" size={24} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">Billing Address</h3>
                            <p className="text-gray-500">Enter your billing information</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                Street Address *
                            </label>
                            <div className="relative group">
                                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                                <input
                                    type="text"
                                    value={orderDetails.billingAddress.street}
                                    onChange={(e) => handleBillingAddressChange('street', e.target.value)}
                                    placeholder="Enter street address"
                                    className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.billingStreet ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                        }`}
                                />
                                {formErrors.billingStreet && (
                                    <p className="text-red-500 text-sm mt-2">{formErrors.billingStreet}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                City *
                            </label>
                            <input
                                type="text"
                                value={orderDetails.billingAddress.city}
                                onChange={(e) => handleBillingAddressChange('city', e.target.value)}
                                placeholder="Enter city"
                                className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.billingCity ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                    }`}
                            />
                            {formErrors.billingCity && (
                                <p className="text-red-500 text-sm mt-2">{formErrors.billingCity}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                State *
                            </label>
                            <select
                                value={orderDetails.billingAddress.state}
                                onChange={(e) => handleBillingAddressChange('state', e.target.value)}
                                className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.billingState ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                    }`}
                            >
                                <option value="">Select State</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                            {formErrors.billingState && (
                                <p className="text-red-500 text-sm mt-2">{formErrors.billingState}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                ZIP Code *
                            </label>
                            <input
                                type="text"
                                value={orderDetails.billingAddress.zipCode}
                                onChange={(e) => handleBillingAddressChange('zipCode', e.target.value)}
                                placeholder="Enter ZIP code"
                                className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.billingZip ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                    }`}
                            />
                            {formErrors.billingZip && (
                                <p className="text-red-500 text-sm mt-2">{formErrors.billingZip}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                Country
                            </label>
                            <input
                                type="text"
                                value={orderDetails.billingAddress.country}
                                disabled
                                className="w-full px-4 py-4 bg-gray-100 border-2 rounded-2xl text-gray-500 cursor-not-allowed"
                            />
                        </div>
                    </div>
                </div>

                {/* Shipping Address Section */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
                    <div className="flex items-center mb-6">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-2xl mr-4">
                            <MapPin className="text-white" size={24} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">Shipping Address</h3>
                            <p className="text-gray-500">Enter your shipping information</p>
                        </div>
                    </div>

                    {/* Same as Billing Checkbox */}
                    <div className="mb-6">
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={sameAsBilling}
                                onChange={(e) => handleSameAsBillingChange(e.target.checked)}
                                className="w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-500"
                            />
                            <span className="text-lg font-medium text-gray-700">
                                Same as billing address
                            </span>
                        </label>
                    </div>

                    {!sameAsBilling && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Street Address *
                                </label>
                                <div className="relative group">
                                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
                                    <input
                                        type="text"
                                        value={orderDetails.shippingAddress.street}
                                        onChange={(e) => handleShippingAddressChange('street', e.target.value)}
                                        placeholder="Enter street address"
                                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.shippingStreet ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                            }`}
                                    />
                                    {formErrors.shippingStreet && (
                                        <p className="text-red-500 text-sm mt-2">{formErrors.shippingStreet}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    City *
                                </label>
                                <input
                                    type="text"
                                    value={orderDetails.shippingAddress.city}
                                    onChange={(e) => handleShippingAddressChange('city', e.target.value)}
                                    placeholder="Enter city"
                                    className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.shippingCity ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                        }`}
                                />
                                {formErrors.shippingCity && (
                                    <p className="text-red-500 text-sm mt-2">{formErrors.shippingCity}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    State *
                                </label>
                                <select
                                    value={orderDetails.shippingAddress.state}
                                    onChange={(e) => handleShippingAddressChange('state', e.target.value)}
                                    className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.shippingState ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                        }`}
                                >
                                    <option value="">Select State</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                                {formErrors.shippingState && (
                                    <p className="text-red-500 text-sm mt-2">{formErrors.shippingState}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    ZIP Code *
                                </label>
                                <input
                                    type="text"
                                    value={orderDetails.shippingAddress.zipCode}
                                    onChange={(e) => handleShippingAddressChange('zipCode', e.target.value)}
                                    placeholder="Enter ZIP code"
                                    className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.shippingZip ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                        }`}
                                />
                                {formErrors.shippingZip && (
                                    <p className="text-red-500 text-sm mt-2">{formErrors.shippingZip}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    value={orderDetails.shippingAddress.country}
                                    disabled
                                    className="w-full px-4 py-4 bg-gray-100 border-2 rounded-2xl text-gray-500 cursor-not-allowed"
                                />
                            </div>
                        </div>
                    )}

                    {sameAsBilling && (
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                            <div className="flex items-center space-x-3">
                                <div className="bg-green-500 rounded-full p-2">
                                    <CheckCircle className="text-white" size={20} />
                                </div>
                                <div>
                                    <p className="text-green-800 font-medium">Using billing address for shipping</p>
                                    <p className="text-green-600 text-sm">
                                        {orderDetails.billingAddress.street && orderDetails.billingAddress.city && orderDetails.billingAddress.state && orderDetails.billingAddress.zipCode
                                            ? `${orderDetails.billingAddress.street}, ${orderDetails.billingAddress.city}, ${orderDetails.billingAddress.state} ${orderDetails.billingAddress.zipCode}`
                                            : 'Complete billing address to see shipping details'
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* Order Details Form - Takes 2 columns */}
                    <div className="xl:col-span-2">
                        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-orange-100 p-8">
                            <div className="flex items-center mb-8">
                                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-2xl mr-4">
                                    <User className="text-white" size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800">Order Details</h2>
                                    <p className="text-gray-500">Please provide your information</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Table Number *
                                    </label>
                                    <div className="relative group">
                                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={20} />
                                        <input
                                            type="text"
                                            value={orderDetails.tableNumber}
                                            onChange={(e) => updateOrderDetails('tableNumber', e.target.value)}
                                            placeholder="Enter your table number"
                                            className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.tableNumber ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                                }`}
                                        />
                                        {formErrors.tableNumber && (
                                            <p className="text-red-500 text-sm mt-2">{formErrors.tableNumber}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Full Name *
                                    </label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={20} />
                                        <input
                                            type="text"
                                            value={orderDetails.name}
                                            onChange={(e) => updateOrderDetails('name', e.target.value)}
                                            placeholder="Enter your full name"
                                            className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.name ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                                }`}
                                        />
                                        {formErrors.name && (
                                            <p className="text-red-500 text-sm mt-2">{formErrors.name}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Phone Number *
                                    </label>
                                    <div className="relative group">
                                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={20} />
                                        <input
                                            type="tel"
                                            value={orderDetails.phone}
                                            onChange={(e) => updateOrderDetails('phone', e.target.value)}
                                            placeholder="Enter your phone number"
                                            className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                                }`}
                                        />
                                        {formErrors.phone && (
                                            <p className="text-red-500 text-sm mt-2">{formErrors.phone}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Email Address *
                                    </label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={20} />
                                        <input
                                            type="email"
                                            value={orderDetails.email}
                                            onChange={(e) => updateOrderDetails('email', e.target.value)}
                                            placeholder="Enter your email address"
                                            className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                                }`}
                                        />
                                        {formErrors.email && (
                                            <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary - Takes 1 column */}
                    <div className="xl:col-span-1">
                        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-orange-100 p-6 sticky top-8">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-2xl mr-4">
                                    <CreditCard className="text-white" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Order Summary</h3>
                                    <p className="text-gray-500 text-sm">{getTotalItems()} items</p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-100">
                                        <div className="flex-1">
                                            <h4 className="font-medium text-gray-800">{item.name}</h4>
                                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-semibold text-gray-800">${getTotalPrice().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Tax</span>
                                    <span className="font-semibold text-gray-800">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Delivery Fee</span>
                                    <span className="font-semibold text-gray-800">
                                        {orderType === 'delivery' ? '$3.99' : 'Free'}
                                    </span>
                                </div>
                                <div className="border-t border-gray-200 pt-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-gray-800">Total</span>
                                        <span className="text-lg font-bold text-orange-600">
                                            ${(getTotalPrice() + (getTotalPrice() * 0.08) + (orderType === 'delivery' ? 3.99 : 0)).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleSubmitOrder}
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Processing...</span>
                                    </div>
                                ) : (
                                    'Place Order'
                                )}
                            </button>

                            <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-500">
                                <Shield className="w-4 h-4" />
                                <span>Secure checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;

