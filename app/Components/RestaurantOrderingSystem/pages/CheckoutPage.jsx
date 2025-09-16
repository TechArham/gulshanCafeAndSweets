'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CreditCard, User, Phone, Mail, MapPin, ShoppingBag, CheckCircle, Clock, Shield, Truck, ChevronDown, Banknote, Apple, CreditCard as CardIcon } from 'lucide-react';
import { useRestaurantStore } from '../store/restaurantStore';
import MenuHero from '../components/MenuHero';
import OrderConfirmationModal from '../components/OrderConfirmationModal';

const CheckoutPage = () => {
    const router = useRouter();
    const {
        cart,
        orderDetails,
        updateOrderDetails,
        submitOrder,
        getTotalPrice,
        getTotalItems,
        orderSource
    } = useRestaurantStore();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [orderType, setOrderType] = useState('pickup');
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');
    const [sameAsBilling, setSameAsBilling] = useState(true);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [isClient, setIsClient] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [orderData, setOrderData] = useState(null);

    // Handle client-side hydration
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Prefill defaults when coming from catering
    useEffect(() => {
        if (orderSource === 'catering') {
            const now = new Date();
            const yyyy = now.getFullYear();
            const mm = String(now.getMonth() + 1).padStart(2, '0');
            const dd = String(now.getDate()).padStart(2, '0');
            const hh = String(now.getHours()).padStart(2, '0');
            const min = String(now.getMinutes()).padStart(2, '0');
            const today = `${yyyy}-${mm}-${dd}`;
            const time = `${hh}:${min}`;
            if (!pickupDate) setPickupDate(today);
            if (!pickupTime) setPickupTime(time);
            if (!deliveryDate) setDeliveryDate(today);
            if (!deliveryTime) setDeliveryTime(time);
        }
    }, [orderSource, pickupDate, pickupTime, deliveryDate, deliveryTime]);

    const handleBackToMenu = () => {
        router.push('/menu');
    };

    const handleCloseModal = () => {
        setShowConfirmationModal(false);
        setOrderData(null);
        // Clear cart after successful order
        // You might want to add a clearCart function to the store
    };

    const handleSameAsBillingChange = (checked) => {
        setSameAsBilling(checked);
        if (checked) {
            // Copy billing address and personal info to shipping
            updateOrderDetails({
                shippingAddress: orderDetails.billingAddress,
                shippingName: orderDetails.name,
                shippingPhone: orderDetails.phone,
                shippingEmail: orderDetails.email
            });
        }
    };

    const handleBillingAddressChange = (field, value) => {
        const newBillingAddress = { ...orderDetails.billingAddress, [field]: value };
        updateOrderDetails({ billingAddress: newBillingAddress });

        // If same as billing is checked, update shipping address and personal info too
        if (sameAsBilling) {
            updateOrderDetails({
                shippingAddress: newBillingAddress,
                shippingName: orderDetails.name,
                shippingPhone: orderDetails.phone,
                shippingEmail: orderDetails.email
            });
        }
    };

    const handleBillingPersonalInfoChange = (field, value) => {
        updateOrderDetails(field, value);

        // If same as billing is checked, update shipping personal info too
        if (sameAsBilling) {
            const shippingField = field === 'name' ? 'shippingName' :
                field === 'phone' ? 'shippingPhone' :
                    field === 'email' ? 'shippingEmail' : field;
            updateOrderDetails(shippingField, value);
        }
    };

    const handleShippingAddressChange = (field, value) => {
        const newShippingAddress = { ...orderDetails.shippingAddress, [field]: value };
        updateOrderDetails({ shippingAddress: newShippingAddress });
    };

    const validateForm = () => {

        const errors = {};
        if (!orderDetails.name.trim()) errors.name = 'Name is required';
        if (!orderDetails.phone.trim()) errors.phone = 'Phone number is required';
        if (!orderDetails.email.trim()) errors.email = 'Email is required';
        // Only require table number for dine-in orders
        // if (!orderDetails.tableNumber.trim()) errors.tableNumber = 'Table number is required';

        // Validate billing address
        if (!orderDetails.billingAddress?.street?.trim()) errors.billingStreet = 'Billing street address is required';
        if (!orderDetails.billingAddress?.city?.trim()) errors.billingCity = 'Billing city is required';
        if (!orderDetails.billingAddress?.state?.trim()) errors.billingState = 'Billing state is required';
        if (!orderDetails.billingAddress?.zipCode?.trim()) errors.billingZip = 'Billing ZIP code is required';

        // Validate shipping address if not same as billing
        if (!sameAsBilling) {
            // Validate shipping personal information
            if (!orderDetails.shippingName?.trim()) errors.shippingName = 'Shipping recipient name is required';
            if (!orderDetails.shippingPhone?.trim()) errors.shippingPhone = 'Shipping recipient phone is required';
            if (!orderDetails.shippingEmail?.trim()) errors.shippingEmail = 'Shipping recipient email is required';

            // Validate shipping address
            if (!orderDetails.shippingAddress?.street?.trim()) errors.shippingStreet = 'Shipping street address is required';
            if (!orderDetails.shippingAddress?.city?.trim()) errors.shippingCity = 'Shipping city is required';
            if (!orderDetails.shippingAddress?.state?.trim()) errors.shippingState = 'Shipping state is required';
            if (!orderDetails.shippingAddress?.zipCode?.trim()) errors.shippingZip = 'Shipping ZIP code is required';
        }

        // Validate pickup date and time if pickup is selected and source is catering
        if (orderType === 'pickup' && orderSource === 'catering') {
            if (!pickupDate.trim()) errors.pickupDate = 'Pickup date is required';
            if (!pickupTime.trim()) errors.pickupTime = 'Pickup time is required';
        }

        // Validate delivery date and time if delivery is selected and source is catering
        if (orderType === 'delivery' && orderSource === 'catering') {
            if (!deliveryDate.trim()) errors.deliveryDate = 'Delivery date is required';
            if (!deliveryTime.trim()) errors.deliveryTime = 'Delivery time is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmitOrder = async () => {

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            const total = getTotalPrice() + (getTotalPrice() * 0.08) + (orderType === 'delivery' ? 3.99 : 0);

            const orderData = {
                ...orderDetails,
                cart: [...cart],
                orderType,
                paymentMethod,
                pickupDate: orderType === 'pickup' ? pickupDate : null,
                pickupTime: orderType === 'pickup' ? pickupTime : null,
                deliveryDate: orderType === 'delivery' ? deliveryDate : null,
                deliveryTime: orderType === 'delivery' ? deliveryTime : null,
                sameAsBilling,
                orderSource,
                total
            };

            console.log(orderData);


            setOrderData(orderData);
            setShowConfirmationModal(true);



        } catch (error) {
            console.error('Error submitting order:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Show loading state during hydration
    if (!isClient) {
        return (
            <div className="bg-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading checkout...</p>
                </div>
            </div>
        );
    }

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
        <div className="bg-white min-h-screen checkout-input-rounded" key={isClient ? 'client' : 'server'}>
            {/* Checkout Hero Section */}
            <MenuHero
                title="Checkout"
                subtitle="Complete Your Order"
                showDeliveryIllustration={false}
            />




            <div className="container mx-auto  rounded-2xl  border my-14 border-gray-200 p-10 space-y-14">
                {/* Delivery/Pickup Section */}
                <div className=" ">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Shipping Information</h3>

                    <div className="  flex  items-center space-x-4">

                        {/* Delivery Option */}
                        <div
                            className={`  w-60 px-5 py-4 rounded-md border cursor-pointer transition-all duration-200 ${orderType === 'delivery'
                                ? 'border-red-500 bg-red-50'
                                : 'border-gray-200 bg-gray-50'
                                }`}
                            onClick={() => setOrderType('delivery')}
                        >
                            <div className="flex items-center space-x-3 ">
                                <label className="inline-flex items-center gap-4 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="orderType"
                                        value="delivery"
                                        checked={orderType === 'delivery'}
                                        onChange={(e) => setOrderType(e.target.value)}
                                        className="peer sr-only"
                                    />

                                    <span className="h-5 w-5 rounded-full border-2 border-gray-300 grid place-items-center peer-checked:border-red-500 transition">
                                        <span className="h-2.5 w-2.5 rounded-full bg-transparent peer-checked:bg-red-500"></span>
                                    </span>


                                    <Truck size={18} className="text-gray-400 peer-checked:text-red-500 transition" />
                                    <span className="text-gray-700 font-semibold">Delivery</span>
                                </label>
                            </div>

                            {orderSource === 'catering' && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex flex-col">
                                        <label className="text-sm font-medium text-red-500 mb-2">
                                            Delivery date *
                                        </label>
                                        <input
                                            type="date"
                                            value={deliveryDate || ''}
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
                                            value={deliveryTime || ''}
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
                            )}
                        </div>

                        {/* Pickup Option - same design as Delivery Option */}
                        <div
                            className={`w-60 px-5 py-4 rounded-md border cursor-pointer transition-all duration-200 ${orderType === 'pickup'
                                ? 'border-red-500 bg-red-50'
                                : 'border-gray-200 bg-gray-50'
                                }`}
                            onClick={() => setOrderType('pickup')}
                        >
                            <div className="flex items-center space-x-3">
                                <label className="inline-flex items-center gap-4 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="orderType"
                                        value="pickup"
                                        checked={orderType === 'pickup'}
                                        onChange={(e) => setOrderType(e.target.value)}
                                        className="peer sr-only"
                                    />
                                    <span className="h-5 w-5 rounded-full border-2 border-gray-300 grid place-items-center peer-checked:border-red-500 transition">
                                        <span className="h-2.5 w-2.5 rounded-full bg-transparent peer-checked:bg-red-500"></span>
                                    </span>
                                    <Clock size={18} className="text-gray-400 peer-checked:text-red-500 transition" />
                                    <span className="text-gray-700 font-semibold">Pickup</span>
                                </label>
                            </div>

                            {orderSource === 'catering' && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex flex-col">
                                        <label className="text-sm font-medium text-red-500 mb-2">
                                            Pickup date *
                                        </label>
                                        <input
                                            type="date"
                                            value={pickupDate || ''}
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
                                            value={pickupTime || ''}
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
                            )}
                        </div>



                    </div>
                </div>

                {/* Address Sections: Billing and Shipping side by side */}
                {orderType === 'pickup' && (
                    <div className="mt-6 bg-white rounded-2xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Pickup Location</h3>
                        <div className="text-gray-700 text-sm space-y-1">
                            <p>Gulshan Cafe and Sweets</p>
                            <p>House 12, Road 34, Gulshan 1, Dhaka</p>
                            <p>Phone: +880 123 456 88</p>
                            <p className="text-gray-500">Hours: 10:00 AM - 10:00 PM</p>
                        </div>
                    </div>
                )}

                {/* Address Sections: Billing and Shipping side by side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8">
                        <div className="flex items-center mb-6">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-2xl mr-4">
                                <CreditCard className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Billing Address</h3>
                                <p className="text-gray-500">Enter your billing information</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Personal Information Fields */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Full Name *
                                </label>
                                <div className="relative group">
                                    <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                        <User className="text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                                    </span>
                                    <input
                                        type="text"
                                        value={orderDetails.name || ''}
                                        onChange={(e) => handleBillingPersonalInfoChange('name', e.target.value)}
                                        placeholder="Enter your full name"
                                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.name ? 'border-red-300 bg-red-50' : 'border-gray-200'
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
                                    <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                        <Phone className="text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                                    </span>
                                    <input
                                        type="tel"
                                        value={orderDetails.phone || ''}
                                        onChange={(e) => handleBillingPersonalInfoChange('phone', e.target.value)}
                                        placeholder="Enter your phone number"
                                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                            }`}
                                    />
                                    {formErrors.phone && (
                                        <p className="text-red-500 text-sm mt-2">{formErrors.phone}</p>
                                    )}
                                </div>
                            </div>

                            <div className=' col-span-2'>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Email Address *
                                </label>
                                <div className="relative group">
                                    <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                        <Mail className="text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                                    </span>
                                    <input
                                        type="email"
                                        value={orderDetails.email || ''}
                                        onChange={(e) => handleBillingPersonalInfoChange('email', e.target.value)}
                                        placeholder="Enter your email address"
                                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                            }`}
                                    />
                                    {formErrors.email && (
                                        <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Street Address *
                                </label>
                                <div className="relative group">
                                    <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                        <MapPin className="text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                                    </span>
                                    <input
                                        type="text"
                                        value={orderDetails.billingAddress?.street || ''}
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
                                    value={orderDetails.billingAddress?.city || ''}
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
                                    value={orderDetails.billingAddress?.state || ''}
                                    onChange={(e) => handleBillingAddressChange('state', e.target.value)}
                                    className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white transition-all duration-200 outline-none text-black  mr-2 ${formErrors.billingState ? 'border-red-300 bg-red-50' : 'border-gray-200'
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
                                    value={orderDetails.billingAddress?.zipCode || ''}
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
                                    value={orderDetails.billingAddress?.country || 'USA'}
                                    disabled
                                    className="w-full px-4 py-4 bg-gray-100 border-2 rounded-2xl text-gray-500 cursor-not-allowed"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Shipping Address Section */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-8">
                        <div className="flex items-center mb-6">
                            <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-2xl mr-4">
                                <MapPin className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Shipping Address</h3>
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
                                {/* Personal Information Fields for Shipping */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Full Name *
                                    </label>
                                    <div className="relative group">
                                        <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                            <User className="text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
                                        </span>
                                        <input
                                            type="text"
                                            value={orderDetails.shippingName || ''}
                                            onChange={(e) => updateOrderDetails('shippingName', e.target.value)}
                                            placeholder="Enter recipient full name"
                                            className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.shippingName ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                                }`}
                                        />
                                        {formErrors.shippingName && (
                                            <p className="text-red-500 text-sm mt-2">{formErrors.shippingName}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Phone Number *
                                    </label>
                                    <div className="relative group">
                                        <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                            <Phone className="text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
                                        </span>
                                        <input
                                            type="tel"
                                            value={orderDetails.shippingPhone || ''}
                                            onChange={(e) => updateOrderDetails('shippingPhone', e.target.value)}
                                            placeholder="Enter recipient phone number"
                                            className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.shippingPhone ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                                }`}
                                        />
                                        {formErrors.shippingPhone && (
                                            <p className="text-red-500 text-sm mt-2">{formErrors.shippingPhone}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Email Address *
                                    </label>
                                    <div className="relative group">
                                        <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                            <Mail className="text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
                                        </span>
                                        <input
                                            type="email"
                                            value={orderDetails.shippingEmail || ''}
                                            onChange={(e) => updateOrderDetails('shippingEmail', e.target.value)}
                                            placeholder="Enter recipient email address"
                                            className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-500 focus:bg-white transition-all duration-200 outline-none text-black ${formErrors.shippingEmail ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                                }`}
                                        />
                                        {formErrors.shippingEmail && (
                                            <p className="text-red-500 text-sm mt-2">{formErrors.shippingEmail}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Street Address *
                                    </label>
                                    <div className="relative group">
                                        <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                            <MapPin className="text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
                                        </span>
                                        <input
                                            type="text"
                                            value={orderDetails.shippingAddress?.street || ''}
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
                                        value={orderDetails.shippingAddress?.city || ''}
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
                                        value={orderDetails.shippingAddress?.state || ''}
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
                                        value={orderDetails.shippingAddress?.zipCode || ''}
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
                                        value={orderDetails.shippingAddress?.country || 'USA'}
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
                                            {orderDetails.billingAddress?.street && orderDetails.billingAddress?.city && orderDetails.billingAddress?.state && orderDetails.billingAddress?.zipCode
                                                ? `${orderDetails.billingAddress.street}, ${orderDetails.billingAddress.city}, ${orderDetails.billingAddress.state} ${orderDetails.billingAddress.zipCode}`
                                                : 'Complete billing address to see shipping details'
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Order Summary - Full Width */}
                <div className="bg-white rounded-2xl  border border-gray-200 p-8 mb-8">
                    <div className="flex items-center mb-8">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl mr-6">
                            <CreditCard className="text-white" size={20} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Order Summary</h3>
                            <p className="text-gray-500 text-lg">{getTotalItems()} items in your order</p>
                            {orderSource && (
                                <p className="text-sm text-gray-500">Source: {orderSource}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">


                        {/* Order Details & Checkout */}
                        <div className="space-y-8">
                            <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <span className="inline-block w-2 h-6 bg-blue-500 rounded-full mr-2"></span>
                                Order Details
                            </h4>

                            {/* Order Type */}
                            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-500 rounded-full p-3 flex items-center justify-center">
                                        {orderType === 'delivery' ? (
                                            <MapPin className="text-white" size={24} />
                                        ) : (
                                            <Clock className="text-white" size={24} />
                                        )}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-blue-800 capitalize text-lg">{orderType}</p>
                                        <p className="text-sm text-blue-600">
                                            {orderType === 'delivery'
                                                ? `${deliveryDate} at ${deliveryTime}`
                                                : `${pickupDate} at ${pickupTime}`
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="mt-4">
                                <h5 className="text-md font-semibold text-gray-800 mb-3">Payment Method</h5>
                                <div className="flex items-center gap-4 flex-wrap">
                                    {/* Bank Transfer */}
                                    <div
                                        className={`w-60 px-5 py-4 rounded-md border cursor-pointer transition-all duration-200 ${paymentMethod === 'bank' ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
                                        onClick={() => setPaymentMethod('bank')}
                                    >
                                        <label className="inline-flex items-center gap-3 cursor-pointer">
                                            <input type="radio" name="payment" value="bank" checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')} className="peer sr-only" />
                                            <Banknote size={18} className="text-gray-400 peer-checked:text-red-500 transition" />
                                            <span className="text-gray-700 font-semibold">Bank Transfer</span>
                                        </label>
                                    </div>

                                    {/* Card */}
                                    <div
                                        className={`w-60 px-5 py-4 rounded-md border cursor-pointer transition-all duration-200 ${paymentMethod === 'card' ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
                                        onClick={() => setPaymentMethod('card')}
                                    >
                                        <label className="inline-flex items-center gap-3 cursor-pointer">
                                            <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="peer sr-only" />
                                            <CardIcon size={18} className="text-gray-400 peer-checked:text-red-500 transition" />
                                            <span className="text-gray-700 font-semibold">Card</span>
                                        </label>
                                    </div>

                                    {/* Apple Pay */}
                                    <div
                                        className={`w-60 px-5 py-4 rounded-md border cursor-pointer transition-all duration-200 ${paymentMethod === 'apple' ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
                                        onClick={() => setPaymentMethod('apple')}
                                    >
                                        <label className="inline-flex items-center gap-3 cursor-pointer">
                                            <input type="radio" name="payment" value="apple" checked={paymentMethod === 'apple'} onChange={() => setPaymentMethod('apple')} className="peer sr-only" />
                                            <Apple size={18} className="text-gray-400 peer-checked:text-red-500 transition" />
                                            <span className="text-gray-700 font-semibold">Apple Pay</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Pricing Breakdown */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 text-base">Subtotal</span>
                                        <span className="font-semibold text-gray-800 text-base">${getTotalPrice().toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 text-base">Tax (8%)</span>
                                        <span className="font-semibold text-gray-800 text-base">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 text-base">
                                            {orderType === 'delivery' ? 'Delivery Fee' : 'Pickup Fee'}
                                        </span>
                                        <span className="font-semibold text-gray-800 text-base">
                                            {orderType === 'delivery' ? '$3.99' : 'Free'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 text-base">Payment</span>
                                        <span className="font-semibold text-gray-800 text-base capitalize">{paymentMethod === 'card' ? 'Card' : paymentMethod === 'bank' ? 'Bank Transfer' : 'Apple Pay'}</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xl font-bold text-gray-800">Total</span>
                                            <span className="text-2xl font-bold text-orange-600">
                                                ${(getTotalPrice() + (getTotalPrice() * 0.08) + (orderType === 'delivery' ? 3.99 : 0)).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <div className="space-y-4">
                                <button
                                    onClick={handleSubmitOrder}
                                    disabled={isSubmitting}
                                    className="w-full  bg-red-500 text-white py-4 px-8 rounded-2xl font-bold text-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center space-x-3">
                                            <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Processing Your Order...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center space-x-3">
                                            <CreditCard className="w-5 h-5" />
                                            <span>Pay Now</span>
                                        </div>
                                    )}
                                </button>

                                <div className="flex items-center justify-center space-x-3 text-gray-500">
                                    <Shield className="w-5 h-5" />
                                    <span className="text-sm">Secure checkout protected by SSL</span>
                                </div>
                            </div>
                        </div>



                        {/* Cart Items with Images */}
                        <div className="space-y-6">
                            <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <span className="inline-block w-2 h-6 bg-orange-500 rounded-full mr-2"></span>
                                Your Items
                            </h4>
                            <div className="space-y-4 overflow-y-auto max-h-[40rem]">
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-100 shadow-sm hover:shadow-lg transition-shadow"
                                    >
                                        {/* Product Image */}
                                        <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border border-gray-200 bg-white flex items-center justify-center">
                                            <img
                                                src={item.image || '/images/food-placeholder.png'}
                                                alt={item.name}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        {/* Product Info */}
                                        <div className="flex-1 min-w-0">
                                            <h5 className="font-semibold text-gray-900 text-lg truncate">{item.name}</h5>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-gray-600 text-sm">Qty:</span>
                                                <span className="font-medium text-gray-800">{item.quantity}</span>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">${item.price.toFixed(2)} each</p>
                                        </div>
                                        {/* Price */}
                                        <div className="text-right min-w-[80px]">
                                            <p className="text-xl font-bold text-orange-600">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
            </div>



            {/* Order Confirmation Modal */}
            <OrderConfirmationModal
                isOpen={showConfirmationModal}
                onClose={handleCloseModal}
                orderData={orderData}
            />
        </div>
    );
};

export default CheckoutPage;
