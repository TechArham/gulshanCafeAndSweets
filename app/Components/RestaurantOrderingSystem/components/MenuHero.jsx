import React from 'react';

const MenuHero = ({
    title = "Menu 01",
    subtitle = "gulshanCafeAndSweets",
    showDeliveryIllustration = true
}) => {
    return (


        <div
            className="relative   py-28  overflow-hidden"
            style={{
                backgroundImage: "url('img/bread_banner-scaled.jpg'), linear-gradient(to right, #ffe4ec, #fff7ed)",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
            }}
        >


            <div className="container mx-auto relative ">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 font-rt-heading">
                        {title}
                    </h1>

                </div>
            </div>
        </div>
    );
};

export default MenuHero;
