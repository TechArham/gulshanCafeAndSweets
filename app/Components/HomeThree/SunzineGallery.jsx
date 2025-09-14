'use client'

import React, { useState, useEffect } from 'react';

const SunzineGallery = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Gallery items matching the layout pattern
  const galleryItems = [
    {
      id: 1,
      image: "5cdbef9f-fe38-463b-83f0-9ff4d1ea518e.png",
      title: "Golden Hour",
      description: "Capturing the perfect moment",
      size: "large", // spans 2 columns
      category: "Portrait",
    },
    {
      id: 2,
      image: "b5809ce3-ac30-49e9-8780-18bfe945fee0.png",
      title: "Forest Bridge",
      description: "Journey through nature",
      size: "tall",
      category: "Landscape",
    },
    {
      id: 3,
      image: "swtte.jpg",
      title: "Modern Architecture",
      description: "Clean lines and geometry",
      size: "medium",
      category: "Architecture",
    },
    {
      id: 4,
      image: "c4c96ea3-d02d-4e8c-b42d-400834b3a48b.png",
      title: "Culinary Art",
      description: "Food as visual poetry",
      size: "medium",
      category: "Food",
    },

    {
      id: 9,
      image: "1c7ee4a7-5823-4052-93e7-3f2ac113c9fc.png",
      title: "Blue Serenity",
      description: "Peaceful moments",
      size: "small",
      category: "Abstract",
    },
    {
      id: 10,
      image: "33e8f9d5-b964-4fd7-a488-8053620e8d9a.png",
      title: "Tropical Vibes",
      description: "Paradise found",
      size: "tall",
      category: "Nature",
    },
    {
      id: 11,
      image: "51c22de6-0ce9-441b-8ef3-1d4ffb9ec371.png",
      title: "Ocean Dreams",
      description: "Endless horizons",
      size: "medium",
      category: "Seascape",
    },
    {
      id: 12,
      image: "maxresdefault.jpg",
      title: "Vintage Red",
      description: "Classic automotive",
      size: "medium",
      category: "Vintage",
    },
    {
      id: 13,
      image: "Screenshot_26.png",
      title: "Gentle Touch",
      description: "Intimate moments",
      size: "medium",
      category: "Emotion",
    },
    {
      id: 14,
      image: "7db9ca0d-7148-42cf-bc4c-364c462278d3.png",
      title: "Gentle Touch",
      description: "Intimate moments",
      size: "medium",
      category: "Emotion",
    },
    {
      id: 15,
      image: "b2e7a63a-4636-4593-b47b-90a61b9511c8.png",
      title: "Gentle Touch",
      description: "Intimate moments",
      size: "medium",
      category: "Emotion",
    },
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'tall':
        return 'md:row-span-2';
      case 'wide':
        return 'md:col-span-2';
      case 'small':
        return '';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">

      {/* Gallery */}
      <main className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02] ${getSizeClasses(item.size)} ${
                  isLoaded ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Image */}
                <div className="w-full h-full min-h-[200px] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      {/* Category Badge */}
                      <div className="mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
                          {item.category}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-white font-bold text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                        {item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/90 text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 transform"></div>
                  
                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-2 group-hover:ring-blue-400/50 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        /* Masonry-like responsive behavior */
        @media (min-width: 768px) {
          .grid {
            grid-auto-rows: 200px;
          }
        }
        
        /* Hover glow effect */
        .group:hover {
          filter: brightness(1.05);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default SunzineGallery;