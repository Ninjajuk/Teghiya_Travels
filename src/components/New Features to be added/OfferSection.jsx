import React from "react";

const OfferSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Special Wedding Offers</h2>
        <p className="text-lg mb-8">
          Book now and get exclusive discounts on catering, pandals, and more!
        </p>
        <button className="px-6 py-3 bg-white text-primary rounded-md font-semibold hover:bg-gray-100">
          View Offers
        </button>
      </div>
    </section>
  );
};

export default OfferSection;