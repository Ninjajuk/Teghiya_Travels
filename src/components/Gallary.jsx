import React, { useState } from "react";

// Sample data for services
const services = [
  {
    id: 1,
    category: "Catering",
    title: "Premium Catering Services",
    description: "Delicious and hygienic food for your wedding guests.",
    image: "https://new.caterninja.com/ninja-buffy/header/Frame%20770.webp",
  },
  {
    id: 2,
    category: "Pandals",
    title: "Elegant Pandals",
    description: "Beautifully designed pandals to make your wedding memorable.",
    image: "https://images.pexels.com/photos/169203/pexels-photo-169203.jpeg",
  },
  {
    id: 3,
    category: "Gifts",
    title: "Customized Wedding Gifts",
    description: "Unique and personalized gifts for the couple.",
    image: "https://images.pexels.com/photos/169203/pexels-photo-169203.jpeg",
  },
  {
    id: 4,
    category: "Catering",
    title: "Budget Catering Packages",
    description: "Affordable catering options for small weddings.",
    image: "https://new.caterninja.com/ninja-buffy/header/Frame%20770.webp",
  },
  {
    id: 5,
    category: "Pandals",
    title: "Luxury Pandals",
    description: "Luxurious and spacious pandals for grand weddings.",
    image: "https://images.pexels.com/photos/169203/pexels-photo-169203.jpeg",
  },
  {
    id: 6,
    category: "Gifts",
    title: "Eco-Friendly Gifts",
    description: "Sustainable and eco-friendly gift options.",
    image: "https://images.pexels.com/photos/169203/pexels-photo-169203.jpeg",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter services based on category
  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <section className="py-16 lg:px-[10rem] bg-gray-50">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">
        Our Gallary
      </h1>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {["All", "Catering", "Pandals", "Gifts"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-hoverPrimary transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;