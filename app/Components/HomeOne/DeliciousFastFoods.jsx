import React from "react";
import Image from "next/image";
import Link from "next/link";
const DeliciousFastFoods = () => {
  const foodItems = [
    {
      id: 1,
      name: "Chiken Curry",
      price: "$26.00",
      image: "/Image2-ss1-h1.webp",
    },
    {
      id: 2,
      name: "Special Misty",
      price: "$20.00",
      image: "misty.webp",
    },
    {
      id: 3,
      name: "Tehari",
      price: "$16.00",
      image: "Screenshot_26.png",
    },
    {
      id: 4,
      name: "Hot Coffee",
      price: "$36.00",
      image: "1c7ee4a7-5823-4052-93e7-3f2ac113c9fc.png",
    },
  ];

  return (
    <section className="py-20 bg-[#f7f2e2]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#ff9924] tracking-widest uppercase font-normal font-bangers text-xl mb-3">
            OUR popular dishes
          </p>

          <h2 className="text-black font-extrabold leading-tight text-4xl md:text-5xl uppercase font-barlow mb-8">
            OUR most <span className="text-red-600">popular dishes</span>
          </h2>

          <Image
            src="/title-shape.png"
            alt="title shape"
            width={290} // natural width
            height={24} // natural height
            className="object-contain text-center mx-auto"
          />
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
<div className='mt-8 '>
                <Link href='/menu' className="bg-red-600 rounded-md hover:cursor-pointer hover:bg-red-700 text-white font-bold py-3 px-8 uppercase tracking-wide text-sm transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                View Menu
              </Link>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliciousFastFoods;
