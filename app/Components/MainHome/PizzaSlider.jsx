"use client";
// components/PizzaSlider.jsx
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

const PizzaSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pizzas = [
    {
      id: 1,
      name: "Margherita Classic",
      price: "$40",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      name: "Pepperoni Feast",
      price: "$42",
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      name: "Vegetarian Supreme",
      price: "$38",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      name: "BBQ Chicken",
      price: "$44",
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const total = pizzas.length;

  const getPrev = (i) => (i - 1 + total) % total;
  const getNext = (i) => (i + 1) % total;

  const goNext = () => setCurrentIndex((i) => getNext(i));
  const goPrev = () => setCurrentIndex((i) => getPrev(i));

  // Optional auto-play (can be disabled by commenting out)
  useEffect(() => {
    const id = setInterval(goNext, 7000);
    return () => clearInterval(id);
  }, []);

  const visibleIds = useMemo(() => {
    const center = currentIndex;
    return [getPrev(center), center, getNext(center)];
  }, [currentIndex]);



  // Floting image
    const [floatingVeggies, setFloatingVeggies] = useState([]);

  const vegetables = [
    { image: "/14.png" },
    { image: "/chili.png" },
    { image: "/sm-tomatto.png" },
  ];

  useEffect(() => {
    const positions = [
      { x: 12, y: 70 }, // left side
      { x: 2, y: 20 },
      { x: 90, y: 40 }, // right side
    ];

    const initialVeggies = vegetables.map((veg, i) => ({
      id: i,
      veggie: veg.image,
      x: positions[i].x,
      y: positions[i].y,
      rotation: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.4,
      animationDuration: 3 + Math.random() * 4,
    }));

    setFloatingVeggies(initialVeggies);
  }, []);

  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 py-10 md:py-16 flex flex-col justify-between min-h-[700px] md:min-h-[820px]">
        {/* Floating Vegetables */}
        {floatingVeggies.map((veggie) => (
          <div
            key={veggie.id}
            className="absolute pointer-events-none opacity-80 hidden sm:block"
            style={{
              left: `${veggie.x}%`,
              top: `${veggie.y}%`,
              transform: `rotate(${veggie.rotation}deg) scale(${veggie.scale})`,
              animation: `float ${veggie.animationDuration}s ease-in-out infinite alternate`,
            }}
          >
            <Image
              src={veggie.veggie}
              alt="vegetable"
              height={100}
              width={100}
              className="max-w-[80px] md:max-w-[120px]"
            />
          </div>
        ))}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-yellow-400 tracking-widest font-extrabold">
            WELCOME TO BARAB FOOD
          </p>
          <h3 className="text-white font-extrabold leading-tight text-4xl sm:text-5xl md:text-7xl uppercase font-barlow">
            gulshan cafe and sweets
          </h3>
        </div>

        <div className="relative h-[540px] md:h-[680px]">
          {pizzas.map((pizza, idx) => {
            const position =
              idx === visibleIds[1]
                ? "center"
                : idx === visibleIds[0]
                ? "left"
                : idx === visibleIds[2]
                ? "right"
                : "hidden";

            const base =
              "absolute top-1/2 left-1/2 flex items-center justify-center will-change-transform transition-[transform,opacity] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

            const classesByPos = {
              center: "z-20 opacity-100",
              left: "z-10 opacity-95",
              right: "z-10 opacity-95",
              hidden: "z-0 opacity-0 pointer-events-none",
            };

            const offsetVw = 30; // gap from center in vw
            const transformByPos = {
              center: `translate(-50%, -50%) scale(1)`,
              left: `translate(calc(-50% - ${offsetVw}vw), -50%) scale(0.7)`,
              right: `translate(calc(-50% + ${offsetVw}vw), -50%) scale(0.7)`,
              hidden: `translate(-50%, -50%) scale(0.5)`,
            };

            return (
              <div
                key={pizza.id}
                className={`${base} ${classesByPos[position]}`}
                style={{ transform: transformByPos[position] }}
              >
                <div
                  className={`relative rounded-full shadow-2xl bg-black/5 h-[420px] w-[420px] md:h-[600px] md:w-[600px]`}
                >
                  <Image
                    src={pizza.image}
                    alt={pizza.name}
                    fill
                    sizes="(max-width: 768px) 360px, 520px"
                    className="object-cover rounded-full"
                    priority={idx === currentIndex}
                  />
                </div>

                {position === "center" && (
                  <div className="absolute -top-4 right-8 md:-top-6 md:right-16 rotate-[-6deg]">
                    <span className="inline-block bg-red-600 text-white text-xs md:text-sm font-extrabold px-3 py-2 md:px-4 md:py-2 rounded-md shadow-lg">
                      ADD TO CART
                    </span>
                  </div>
                )}
              </div>
            );
          })}

          <button
            onClick={goPrev}
            aria-label="Previous"
            className="absolute cursor-pointer left-2 md:left-6 top-[20%] -translate-y-1/2 rounded-full border border-white/60 text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 backdrop-blur-md"
          >
            <span className="text-2xl">←</span>
          </button>
          <button
            onClick={goNext}
            aria-label="Next"
            className="absolute cursor-pointer right-2 md:right-6 top-[20%] -translate-y-1/2 rounded-full border border-white/60 text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 backdrop-blur-md"
          >
            <span className="text-2xl">→</span>
          </button>
        </div>

        {false && <div className="mt-8 flex justify-center gap-2" />}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
      `}</style>
    </section>
  );
};

export default PizzaSlider;
