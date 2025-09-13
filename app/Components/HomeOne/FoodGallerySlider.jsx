"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const FoodGallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1600&auto=format&fit=crop",
      alt: "Burger",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1600&auto=format&fit=crop",
      alt: "Potato Wedges",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=1600&auto=format&fit=crop",
      alt: "Pizza",
    },
  ];

  const total = slides.length;
  const getPrev = (i) => (i - 1 + total) % total;
  const getNext = (i) => (i + 1) % total;

  const goNext = () => setCurrentIndex((i) => getNext(i));
  const goPrev = () => setCurrentIndex((i) => getPrev(i));

  // autoplay
  useEffect(() => {
    const id = setInterval(goNext, 5000);
    return () => clearInterval(id);
  }, []);

  const visible = useMemo(() => {
    const center = currentIndex;
    return [getPrev(center), center, getNext(center)];
  }, [currentIndex]);

  return (
    <section className="relative bg-[#f7f2e2] py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative h-[360px] sm:h-[420px] md:h-[520px]">
          {slides.map((item, idx) => {
            const position =
              idx === visible[1]
                ? "center"
                : idx === visible[0]
                ? "left"
                : idx === visible[2]
                ? "right"
                : "hidden";

            const base =
              "absolute top-1/2 left-1/2 will-change-transform transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]";

            const classesByPos = {
              center: "z-20 opacity-100",
              left: "z-10 opacity-90",
              right: "z-10 opacity-90",
              hidden: "z-0 opacity-0 pointer-events-none",
            };

            const offsetVw = 28;
            const transformByPos = {
              center: `translate(-50%, -50%) scale(1)`,
              left: `translate(calc(-50% - ${offsetVw}vw), -50%) scale(0.9)`,
              right: `translate(calc(-50% + ${offsetVw}vw), -50%) scale(0.9)`,
              hidden: `translate(-50%, -50%) scale(0.8)`,
            };

            return (
              <div
                key={item.id}
                className={`${base} ${classesByPos[position]}`}
                style={{ transform: transformByPos[position] }}
              >
                {/* Frame wrapper to control the shapes */}
                <div
                  className={`relative bg-white shadow-2xl overflow-hidden ${
                    position === "center"
                      ? "w-[520px] h-[360px] md:w-[640px] md:h-[440px] rounded-2xl"
                      : position === "left"
                      ? "w-[420px] h-[300px] md:w-[520px] md:h-[360px] clip-left"
                      : position === "right"
                      ? "w-[420px] h-[300px] md:w-[520px] md:h-[360px] clip-right"
                      : "w-[520px] h-[360px]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 420px, 640px"
                    className="object-cover"
                    priority={idx === currentIndex}
                  />
                </div>
              </div>
            );
          })}

          {/* Prev/Next arrows */}
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 md:w-12 md:h-12 grid place-items-center shadow-lg cursor-pointer"
          >
            <span className="text-xl md:text-2xl">←</span>
          </button>
          <button
            onClick={goNext}
            aria-label="Next"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 md:w-12 md:h-12 grid place-items-center shadow-lg cursor-pointer"
          >
            <span className="text-xl md:text-2xl">→</span>
          </button>
        </div>
      </div>

      {/* Custom shapes for side images */}
      <style jsx>{`
        /* Base size ~420x300 */
        .clip-left {
          -webkit-clip-path: path(
            "M20,10 Q210,0 400,10 L400,290 Q210,300 20,290 C55,220 55,80 20,10 Z"
          );
          clip-path: path(
            "M20,10 Q210,0 400,10 L400,290 Q210,300 20,290 C55,220 55,80 20,10 Z"
          );
          border-radius: 12px;
        }
        .clip-right {
          -webkit-clip-path: path(
            "M20,10 Q210,0 400,10 C365,80 365,220 400,290 Q210,300 20,290 L20,10 Z"
          );
          clip-path: path(
            "M20,10 Q210,0 400,10 C365,80 365,220 400,290 Q210,300 20,290 L20,10 Z"
          );
          border-radius: 12px;
        }
        @media (min-width: 768px) {
          /* md size ~520x360 */
          .clip-left {
            -webkit-clip-path: path(
              "M24,12 Q260,0 520,12 L520,348 Q260,360 24,348 C66,264 66,108 24,12 Z"
            );
            clip-path: path(
              "M24,12 Q260,0 520,12 L520,348 Q260,360 24,348 C66,264 66,108 24,12 Z"
            );
            border-radius: 16px;
          }
          .clip-right {
            -webkit-clip-path: path(
              "M24,12 Q260,0 520,12 C474,96 474,252 520,348 Q260,360 24,348 L24,12 Z"
            );
            clip-path: path(
              "M24,12 Q260,0 520,12 C474,96 474,252 520,348 Q260,360 24,348 L24,12 Z"
            );
            border-radius: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default FoodGallerySlider;
