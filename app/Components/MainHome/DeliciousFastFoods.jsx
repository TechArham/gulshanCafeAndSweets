import React from "react";

const DeliciousFastFoods = () => {
  const foodItems = [
    {
      id: 1,
      name: "Delicious Black Burger",
      price: "$26.00",
      description:
        "At the heart of our kitchen are bold flavors, high-quality ingredients",
      image: "/about-us-image.png",
    },
    {
      id: 2,
      name: "Fiery Beef Stack",
      price: "$20.00",
      description:
        "At the heart of our kitchen are bold flavors, high-quality ingredients",
      image: "21.png",
    },
    {
      id: 3,
      name: "Golden Crispy Fries",
      price: "$16.00",
      description:
        "At the heart of our kitchen are bold flavors, high-quality ingredients",
      image:
        "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 4,
      name: "Tangy Grilled Sandwich",
      price: "$36.00",
      description:
        "At the heart of our kitchen are bold flavors, high-quality ingredients",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop&crop=center",
    },
  ];

  return (
    <section className="py-20 bg-[#f7f2e2]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm sm:text-base uppercase tracking-wider mb-3">
            OUR FAST FOODS
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            OUR DELICIOUS FAST <span className="text-red-600">FOODS</span>
          </h2>
        </div>
        {/* Food Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {foodItems.map((item, index) => (
            <div
              key={item.id}
              className=" group hover:cursor-pointer transition-all duration-500 hover:duration-500 transform"
            >
              {/* Food Image */}
              <div className=" relative mb-6">
                <div className="shapeCss aspect-square bg-white rounded-2xl p-12 group-hover:bg-[#3f9065] transition-colors duration-500">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full group-hover:rotate-12 transition-transform duration-500"
                  />
                </div>

                {/* Price Tag */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-400 text-white font-bold text-lg px-6 py-2 rounded-full shadow-lg group-hover:bg-red-500 group-hover:text-white ">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Food Info */}
              <div className="text-center pt-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {item.name}
                </h3>

                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default DeliciousFastFoods;
