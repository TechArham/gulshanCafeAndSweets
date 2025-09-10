import React, { useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { ShoppingCart, Plus, Minus, Trash2, X, MapPin, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRestaurantStore } from '../store/restaurantStore';

const CartSidebar = ({ showTableInfo = false }) => {
    const router = useRouter();
    const {
        cart,
        orderDetails,
        sidebarOpen,
        setSidebarOpen,
        updateQuantity,
        getTotalItems,
        getTotalPrice
    } = useRestaurantStore();

    const removeItem = (itemId) => {
        updateQuantity(itemId, 0);
    };

    const handleCheckout = () => {
        setSidebarOpen(false);
        router.push('/checkout');
    };

    // Hide sidebar when table change modal opens
    useEffect(() => {
        const handleTableModalOpen = () => {
            setSidebarOpen(false);
        };

        window.addEventListener('openTableModal', handleTableModalOpen);
        window.addEventListener('openInitialTableModal', handleTableModalOpen);

        return () => {
            window.removeEventListener('openTableModal', handleTableModalOpen);
            window.removeEventListener('openInitialTableModal', handleTableModalOpen);
        };
    }, [setSidebarOpen]);

    return (
        <Menu
            isOpen={sidebarOpen}
            onStateChange={(state) => {
                console.log('Menu state change:', state);
                setSidebarOpen(state.isOpen);
            }}
            right
            width={380}
            customBurgerIcon={false}
            customCrossIcon={false}
            disableAutoFocus={false}
            disableCloseOnEsc={false}
            styles={{
                bmMenuWrap: {
                    position: 'fixed',
                    height: '100vh',
                    width: '100vw',
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    zIndex: 1000
                },
                bmMenu: {
                    background: 'linear-gradient(135deg, #fff 0%, #fef7f0 100%)',
                    padding: '0',
                    fontSize: '1.15em',
                    boxShadow: '-5px 0 25px rgba(0,0,0,0.15)',
                    borderLeft: '1px solid rgba(251, 146, 60, 0.1)',
                    height: '100vh',
                    width: '400px',
                    position: 'absolute',
                    right: 0,
                    top: 0
                },
                bmMorphShape: {
                    fill: '#373a47'
                },
                bmItemList: {
                    color: '#b8b7ad',
                    padding: '0',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                },
                bmItem: {
                    display: 'block',
                    padding: '0'
                },
                bmOverlay: {
                    background: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(6px)',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 999
                }
            }}
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 relative">
                <div className="flex p-4 items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="bg-white/20 p-2 rounded-full">
                            <ShoppingCart size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Your Order</h2>
                            <p className="text-orange-100 text-sm">
                                {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="p-2 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                    >
                        <X size={24} />
                    </button>
                </div>
            </div>

            {/* Table Info Section - Only show on dine-in page */}
            {showTableInfo && (
                <div className="bg-white border-b mx-8 border-gray-200 py-5 ">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                                <MapPin size={16} className="text-orange-500" />
                                <span className="font-medium text-gray-900">
                                    {orderDetails.tableNumber ? `Table ${orderDetails.tableNumber}` : 'No table selected'}
                                </span>
                            </div>
                            {orderDetails.name && (
                                <div className="flex items-center space-x-2">
                                    <Users size={16} className="text-orange-500" />
                                    <span className="text-gray-600">{orderDetails.name}</span>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => {
                                // Dispatch event to open table modal
                                window.dispatchEvent(new CustomEvent('openTableModal'));
                            }}
                            className="text-orange-500 hover:text-orange-600 text-sm font-medium px-3 py-1 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer"
                        >
                            Change
                        </button>
                    </div>
                </div>
            )}

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
                {cart.length === 0 ? (
                    <div className="text-center text-gray-500 mt-12 px-6">
                        <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                            <ShoppingCart size={32} className="opacity-50" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                        <p className="text-sm text-gray-400">Add some delicious items to get started!</p>
                    </div>
                ) : (
                    <div className="p-4 space-y-4">
                        {cart.map((item, index) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animation: 'slideInRight 0.3s ease-out forwards'
                                }}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="relative">
                                        <img
                                            className="rounded-xl h-16 w-20 object-cover shadow-sm"
                                            src={item.image}
                                            alt={item.name}
                                        />
                                        <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                            {item.quantity}
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">
                                            {item.name}
                                        </h3>
                                        <p className="text-orange-600 font-bold text-sm mb-2">
                                            ${item.price.toFixed(2)} each
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors cursor-pointer"
                                                >
                                                    <Minus size={12} className="text-gray-600" />
                                                </button>
                                                <span className="font-semibold w-8 text-orange-600 text-center text-sm">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="bg-orange-500 hover:bg-orange-600 text-white p-1.5 rounded-full transition-colors cursor-pointer"
                                                >
                                                    <Plus size={12} />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-red-400 hover:text-red-600 p-1 transition-colors cursor-pointer"
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
                <div className="bg-white  p-6 md:mr-5 mb-10 md:mb-2">
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 mb-4">
                        <div className="flex justify-between items-center text-gray-800 mb-2">
                            <span className="font-semibold">Subtotal</span>
                            <span className="text-orange-600 font-bold text-lg">
                                ${getTotalPrice().toFixed(2)}
                            </span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                            <span>Total items: {getTotalItems()}</span>
                            <span>Tax included</span>
                        </div>
                    </div>

                    <div className="flex justify-center">


                        <button
                            onClick={handleCheckout}
                            className=" mb-8 w-90 bg-gradient-to-r from-orange-500 to-red-500 text-white  p-3 rounded-lg  font-semibold hover:shadow-lg transform hover:scale-102 transition-all duration-200 cursor-pointer relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center justify-center space-x-2">
                                <ShoppingCart size={20} />
                                <span>Proceed to Checkout</span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </Menu>
    );
};

export default CartSidebar;

