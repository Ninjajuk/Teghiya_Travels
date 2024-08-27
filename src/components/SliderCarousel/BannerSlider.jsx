import React, { useState } from "react";
// import "./style.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/6307071/pexels-photo-6307071.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/169203/pexels-photo-169203.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://new.caterninja.com/ninja-buffy/header/Frame%20770.webp",
    "https://images.pexels.com/photos/157879/gift-jeans-fashion-pack-157879.jpeg?auto=compress&cs=tinysrgb&w=600",
    // "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc",
    // "https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o",
    // "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
    // "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
    // "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",

    // "https://via.placeholder.com/600x400?text=Image+1",
    // "https://via.placeholder.com/600x400?text=Image+2",
    // "https://via.placeholder.com/600x400?text=Image+3",
    // "https://via.placeholder.com/600x400?text=Image+4",
    // "https://via.placeholder.com/600x400?text=Image+5",
  ];

  const handleNext = () => {
    //     // setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     // setCurrentIndex((prevIndex) => prevIndex + 1);

    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    //     // setCurrentIndex(
    //     //   (prevIndex) => (prevIndex - 1 + images.length) % images.length
    //     // );
    // setCurrentIndex((prevIndex) => prevIndex - 1);
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <main className="w-full h-full flex items-center justify-center flex-col lg:flex-row lg:px-[10rem] gap-1 lg:gap-2 py-2 lg:py-8">
      <div className="w-full h-[600px] relative">
        <img
          src={images[currentIndex]}
          className="w-full h-full object-center object-cover rounded-md transition-all duration-700 ease-in-out"
        />
        <div className="w-full absolute inset-y-1/2 ">
          <div className=" flex items-center gap-2 justify-between text-primary">
            <button
              //   disabled={currentIndex === 0}
              className="btn p-2 bg-gray-400"
              onClick={handleBack}
            >
              <FaAngleLeft className="w-6 h-6 rounded-full" />
            </button>
            <button
              //   disabled={currentIndex >= images.length - 1}
              onClick={handleNext}
              className="btn p-2 bg-gray-400"
              //   style={{ marginLeft: "4px" }}
            >
              <FaAngleRight className="w-6 h-6 rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BannerSlider;
