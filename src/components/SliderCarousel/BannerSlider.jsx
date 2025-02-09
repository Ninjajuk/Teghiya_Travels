import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const images = [
    // "https://www.donboscohsdiphu.in/Images/slide1.jpg",
    // "https://www.donboscohsdiphu.in/Images/slide3.jpg",
    // "https://www.donboscohsdiphu.in/Images/slide2.jpg",
   
    "https://images.pexels.com/photos/6307071/pexels-photo-6307071.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/169203/pexels-photo-169203.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://new.caterninja.com/ninja-buffy/header/Frame%20770.webp",
    "https://images.pexels.com/photos/157879/gift-jeans-fashion-pack-157879.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

   // Handle next image
   const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle previous image
  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <main className="w-full h-full flex items-center justify-center">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
        {/* Slider Image */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out"
        />

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={handleBack}
            className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
          >
            <FaAngleLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
          >
            <FaAngleRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default BannerSlider;