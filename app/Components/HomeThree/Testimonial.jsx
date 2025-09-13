'use client'
import React, { useState } from 'react';
import Image from "next/image";
const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Christ Deo",
      position: "CEO AzTech Ltd.",
      image: "/people.jpg",
      rating: 5,
      text: "Food Khan is a great Restaurant from the University of Texas at Austin has been researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study.",
    },
    {
      id: 2,
      name: "Christ Deo",
      position: "CEO AzTech Ltd.",
      image: "/fish.jpg",
      rating: 5,
      text: "Food Khan is a great Restaurant from the University of Texas at Austin has been researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study.",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      position: "Marketing Director",
      image: "/fish.jpg",
      rating: 5,
      text: "Exceptional service and amazing food quality. The team at Food Khan consistently delivers outstanding dining experiences that exceed our expectations every single time.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-orange-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Decorative wheat/grain illustrations */}
        <div className="absolute top-32 right-10 opacity-10">
          <svg className="w-32 h-32 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2A1,1 0 0,1 13,3V4.5C13,5.33 12.33,6 11.5,6C10.67,6 10,5.33 10,4.5V3A1,1 0 0,1 12,2M21,11H22A1,1 0 0,1 22,13A1,1 0 0,1 22,13H21V11M3,11H2A1,1 0 0,0 2,13A1,1 0 0,0 2,13H3V11M19.07,4.93L19.78,4.22C20.17,3.83 20.17,3.17 19.78,2.78C19.39,2.39 18.73,2.39 18.34,2.78L17.63,3.49L19.07,4.93M4.93,4.93L6.37,3.49L5.66,2.78C5.27,2.39 4.61,2.39 4.22,2.78C3.83,3.17 3.83,3.83 4.22,4.22L4.93,4.93Z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-16 opacity-8">
          <svg className="w-28 h-28 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3l14 9-14 9V3z"/>
          </svg>
        </div>
        
        {/* Top right decorative leaf */}
        <div className="absolute top-10 right-32 opacity-15">
          <svg className="w-20 h-20 text-green-400 transform rotate-45" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22.35C8.1,16.7 10.4,10.9 17,10V8Z"/>
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-500 font-medium text-lg italic mb-2">Testimonial</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Client <span className="text-red-500">Feedback</span>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Current testimonial */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {/* <img 
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-red-100"
                  /> */}
                  <Image
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    height={100}
                    width={100}
                    className="w-16 h-16 rounded-full object-cover border-4 border-red-100"/>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{testimonials[currentSlide].name}</h4>
                      <p className="text-gray-600 text-sm">{testimonials[currentSlide].position}</p>
                    </div>
                    <div className="bg-red-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                      </svg>
                    </div>
                  </div>
                  <StarRating rating={testimonials[currentSlide].rating} />
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                {testimonials[currentSlide].text}
              </p>
            </div>

            {/* Next testimonial preview */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-80">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[(currentSlide + 1) % testimonials.length].image}
                    alt={testimonials[(currentSlide + 1) % testimonials.length].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{testimonials[(currentSlide + 1) % testimonials.length].name}</h4>
                      <p className="text-gray-600 text-sm">{testimonials[(currentSlide + 1) % testimonials.length].position}</p>
                    </div>
                    <div className="bg-orange-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                      </svg>
                    </div>
                  </div>
                  <StarRating rating={testimonials[(currentSlide + 1) % testimonials.length].rating} />
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                {testimonials[(currentSlide + 1) % testimonials.length].text}
              </p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-red-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4">
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-10">
        <button className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;