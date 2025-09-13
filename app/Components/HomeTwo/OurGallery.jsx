import React from "react";

const OurGallery = () => {
  const promotions = [
    {
      id: 1,
      title: "Chicken Chow Mein",
      description: "Stir-fried noodles with tender chicken",
      buttonColor: "bg-red-600 hover:bg-red-700",
      image: "/Chicken-Chow-Mein-1.jpg",
      size: "col-span-2",
      price: "$6.00",
    },
    {
      id: 2,
      title: "Ilish Fish",
      description: "Fresh & Crunchy Veggie Delight",
      buttonColor: "bg-red-600 hover:bg-red-700",
      image: "/fish.jpg",
      size: "col-span-1",
      price: "$6.00",
    },
    {
      id: 3,
      title: "Sesame chicken",
      description: "Crispy Sesame Chicken with a Sweet & Savory Glaze",
      buttonColor: "bg-red-600 hover:bg-red-700",
      image: "/bg-side-3.jpg",
      size: "col-span-1",
      price: "$6.00",
    },
    {
      id: 4,
      title: "Special Misty",
      description:
        "Traditional Bengali sweet, rich in flavor and made with love.",
      buttonColor: "bg-red-600 hover:bg-red-700",
      image: "/misty.webp",
      size: "col-span-1",
      price: "$6.00",
    },
    {
      id: 5,
      title: "Vegetable Fried Rice",
      description:
        "Flavorful fried rice tossed with fresh vegetables and aromatic spices.",
      buttonColor: "bg-red-600 hover:bg-red-700",
      image: "/Beef-Fried-Rice.jpg",
      size: "col-span-1",
      price: "$6.00",
    },
    {
      id: 6,
      title: "Hot Coffee",
      description: "Special hot Coffee",
      buttonColor: "bg-red-600 hover:bg-red-700",
      image: "/coffee.png",
      size: "col-span-2",
      price: "$6.00",
    },
  ];

  return (
    <div className="bg-gray-50 p-4 md:p-8 lg:py-24">
      <div className="container mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className={`relative ${promo.size} h-64 shadow-lg group overflow-hidden hover:cursor-pointer  transition-shadow duration-300`}
            >
              <div className="absolute inset-0">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-115 hover:cursor-pointer will-change-transform"
                  draggable={false}
                />
              </div>

              {/* Dark overlay that fades in on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Content on top of image */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20 text-center">
                <h2 className="text-2xl md:text-3xl text-white font-extrabold mb-2">
                  {promo.title}
                </h2>
                <p className="text-white text-sm font-medium mb-4">
                  {promo.description}
                </p>
                <button
                  className={`text-xs font-bold py-2 px-4 rounded ${promo.buttonColor} transition-all duration-300 transform hover:scale-105 z-30`}
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional small animations (kept from your original) */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.8s both;
        }
      `}</style>
    </div>
  );
};

export default OurGallery;
