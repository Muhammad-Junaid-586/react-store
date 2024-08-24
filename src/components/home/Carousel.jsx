// src/components/Carousel/Carousel.js

import React, { useState } from "react";

const Carousel = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Slide Container */}
      <div className="relative w-full h-[450px]">
        {slides.length > 0 ? (
          slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 flex items-center justify-start">
                <div className="w-[55%] md:w-1/2 ml-5 md:pl-[45px]">
                  <p className="font-bold text-[16px] md:text-[20px] py-2">
                    <span className="text-[#64B496] pr-[5px]">
                      {slide.text.span}
                    </span>
                    {slide.text.p}
                  </p>
                  <h1 className="text-[24px] md:text-[35px] lg:text-[45px] font-black">
                    {slide.text.h1}
                  </h1>
                  <p className="text-[16px] lg:text-[18px] font-semibold text-[#B2A39A] hidden md:block">
                    {slide.text.para}
                  </p>
                  <button className="bg-[#64B496] px-[20px] py-[8px] rounded-[6px] text-white font-bold my-[10px]">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No slides available</div> // Display a message or a fallback UI when slides are empty
        )}
      </div>

      {/* Indicators */}
      {slides.length > 0 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex
                  ? "bg-[#64B496] border-transparent"
                  : "bg-transparent border-[2px] border-[#64B496]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
