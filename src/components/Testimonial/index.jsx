import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    comment: "Booking my bus ticket was a breeze! The app is user-friendly and efficient.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "Great experience! I loved the variety of bus options available.",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Brown",
    comment: "The customer service was fantastic when I needed to change my booking.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Johnson",
    comment: "Highly recommend this service. The buses are always on time and comfortable.",
    rating: 5,
  },
  {
    id: 5,
    name: "David Wilson",
    comment: "The app is intuitive, and the booking process is seamless.",
    rating: 4,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 lg:px-[10rem] bg-gray-50">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">Testimonials</h1>
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Testimonial Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[currentIndex].id}
            className="p-8 bg-white rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-4">
              <span className="text-yellow-500 text-2xl">
                {"⭐".repeat(testimonials[currentIndex].rating)}
                {"☆".repeat(5 - testimonials[currentIndex].rating)}
              </span>
            </div>
            <p className="text-gray-700 text-lg mb-4">
              "{testimonials[currentIndex].comment}"
            </p>
            <p className="font-semibold text-xl text-primary">
              - {testimonials[currentIndex].name}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg hover:bg-hoverPrimary transition-colors"
        >
          <FiChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg hover:bg-hoverPrimary transition-colors"
        >
          <FiChevronRight size={24} className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;