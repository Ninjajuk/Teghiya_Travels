import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const cars = [
  {
    id: 1,
    name: "Rolls-Royce Ghost Series II",
    price: "₹ 8.95 - 10.52 Cr",
    launchDate: "5th FEB",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Rolls-Royce/Ghost-Series-II/12399/1739005302678/front-left-side-47.jpg",
    tags: ["Facelift"],
  },
  {
    id: 2,
    name: "Mahindra BE 6",
    price: "₹ 18.90 - 26.90 Lakh",
    launchDate: "5th FEB",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/BE-6/9263/1738382953778/front-left-side-47.jpg",
    tags: ["Electric", "New Variant"],
  },
  {
    id: 3,
    name: "Mahindra XEV 9e",
    price: "₹ 21.90 - 30.50 Lakh",
    launchDate: "5th FEB",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra-XEV/9e/9262/1732688872801/front-left-side-47.jpg",
    tags: ["Electric", "New Variant"],
  },
  {
    id: 4,
    name: "Kia Syros",
    price: "₹ 9 - 17.80 Lakh",
    launchDate: "1st FEB",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Syros/11791/1734599341690/front-left-side-47.jpg",
    tags: [],
  },
  {
    id: 5,
    name: "Tesla Model X",
    price: "₹ 1.50 - 2.00 Cr",
    launchDate: "10th FEB",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/RS-Q8-2025/12377/1738054937653/front-left-side-47.jpg",
    tags: ["Electric"],
  },
];

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 w-72 flex flex-col justify-between m-2">
      <div>
        <div className="relative">
          <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-md" />
          <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
            LAUNCHED ON : {car.launchDate}
          </div>
        </div>
        <div className="mt-3">
          <h3 className="text-lg font-semibold">{car.name}</h3>
          <p className="text-gray-600">{car.price}</p>
          <div className="flex flex-wrap mt-2 gap-2">
            {car.tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button className="mt-4 w-full text-red-500 border border-red-500 py-2 rounded hover:bg-red-500 hover:text-white transition">
        Book Now
      </button>
    </div>
  );
};

const LatestCarsLaunches = () => {
  const [index, setIndex] = useState(0);
  const isMobile = window.innerWidth < 768;
  const visibleCars = isMobile ? 1 : 4;
  const maxIndex = cars.length - visibleCars;

  const nextSlide = () => {
    if (index < maxIndex) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-300 relative ">
      <h2 className="text-2xl font-semibold mb-4">Latest new cars launches</h2>
      <div className="flex overflow-hidden relative">
        {index > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-10"
          >
            <FaChevronLeft />
          </button>
        )}
        <div
          className="flex space-x-4 transition-transform duration-300"
          style={{ transform: `translateX(-${index * (100 / visibleCars)}%)` }}
        >
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        {index < maxIndex && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-10"
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default LatestCarsLaunches;