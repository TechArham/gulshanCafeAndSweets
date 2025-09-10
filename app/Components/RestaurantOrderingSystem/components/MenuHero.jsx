import React from 'react';

const MenuHero = ({
    title = "Menu 01",
    subtitle = "gulshanCafeAndSweets",
    showDeliveryIllustration = true
}) => {
    return (
        <>
            {/* Desktop Hero Section */}
            <div
                className="hidden lg:block relative py-24 overflow-hidden"
                style={{
                    backgroundImage: "url('img/bread_banner-scaled.jpg'), linear-gradient(to right, #ffe4ec, #fff7ed)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="container mx-auto relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left">
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 font-rt-heading mb-4">
                                {title}
                            </h1>
                            <p className="text-xl text-gray-700 font-medium">
                                {subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Hero Section */}
            <div className="lg:hidden bg-gradient-to-r from-orange-500 to-red-500 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            {title}
                        </h1>
                        <p className="text-lg text-white/90">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuHero;
