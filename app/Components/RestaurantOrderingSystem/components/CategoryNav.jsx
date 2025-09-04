import React from 'react';
import { X, Menu } from 'lucide-react';

const CategoryNav = ({
    categoryNavOpen,
    setCategoryNavOpen,
    menuData,
    categoryDisplayNames,
    activeCategory,
    scrollToCategory
}) => {
    return (
        <>
            {/* Mobile Menu Button */}
            <div className="p-3 sm:p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <button
                        onClick={() => setCategoryNavOpen(true)}
                        className="lg:hidden mr-3 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        <Menu size={20} className="text-gray-700" />
                    </button>
                </div>
            </div>

            {/* Mobile Category Navigation Sidenav */}
            {categoryNavOpen && (
                <div className="lg:hidden fixed inset-0 bg-black/50 z-50">
                    <div
                        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${categoryNavOpen ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        <div className="p-4 border-b flex items-center justify-between bg-orange-500 text-white">
                            <h2 className="text-xl font-bold">Menu Categories</h2>
                            <button
                                onClick={() => setCategoryNavOpen(false)}
                                className="p-2 hover:bg-orange-600 rounded-full transition-colors cursor-pointer"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-4">
                            <div className="space-y-2">
                                {Object.keys(menuData).map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => scrollToCategory(category)}
                                        className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors cursor-pointer ${activeCategory === category
                                            ? "bg-orange-500 text-white shadow-lg"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300"
                                            }`}
                                    >
                                        {categoryDisplayNames[category]}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CategoryNav;

