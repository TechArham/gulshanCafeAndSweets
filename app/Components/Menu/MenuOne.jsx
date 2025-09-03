import React from "react";
import Image from "next/image";

export default function MenuOne() {
  const menuItems = [
    {
      id: 1,
      name: "Chicken Soup",
      price: "$8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/fish.jpg",
    },
    {
      id: 2,
      name: "Caprese Salad",
      price: "$9",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/sweets.jpg", 
    },
    {
      id: 3,
      name: "Folgette",
      price: "$8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/sweets.jpg",
    },
    {
      id: 4,
      name: "Waffle",
      price: "$9",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/kalojam.jpg",
    },
    {
      id: 5,
      name: "Caprino",
      price: "$8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/tehari.jpg",
    },
    {
      id: 6,
      name: "Calamary",
      price: "$10",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/tanduri.jpg",
    },
        {
      id: 7,
      name: "Calamary",
      price: "$10",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/tanduri.jpg",
    },
        {
      id: 8,
      name: "Calamary",
      price: "$10",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/tanduri.jpg",
    },
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-br from-orange-50 to-red-50 text-black relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-20 min-h-screen">
        {/* Main Content */}
        <div className="col-span-12 md:col-span-8 py-10 px-6 md:px-12 lg:py-20 z-10 relative">
          <div className="max-w-4xl mx-auto  lg:px-10">
            {/* Header */}
            <div className="text-center mb-10 mx-auto">
              <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] mb-3 uppercase">
                STARTER
              </h1>
              <p className="text-xl md:text-2xl text-red-700  font-serif italic mb-5">
                Fresh and delicious
              </p>
              <div className="w-16 h-1 bg-red-700 text-center mx-auto"></div>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-16 gap-y-9">
              {menuItems.map((item) => (
                <div key={item.id} className="flex items-start space-x-5">
                  {/* Food Image */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-600">
                        {item.name}
                      </h3>
                      <span className="text-lg font-semibold text-red-700 ml-4 flex-shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Side Image */}
        <div className="col-span-12 md:col-span-4 relative">
          <Image
            src="/bg-side-3.jpg"
            alt="Fresh salad background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
