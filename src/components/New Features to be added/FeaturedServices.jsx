import React from "react";

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      title: "Luxury Wedding Buses",
      image: "https://buscdn.cardekho.com/in/eka/12m/eka-12m-92416.jpg",
      rating: 5,
    },
    {
      id: 2,
      title: "Premium Catering",
      image: "https://new.caterninja.com/ninja-buffy/header/Frame%20770.webp",
      rating: 4,
    },
    {
      id: 3,
      title: "Elegant Pandals",
      image: "https://images.pexels.com/photos/169203/pexels-photo-169203.jpeg",
      rating: 5,
    },
  ];

  return (
    <section className="py-2 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Featured Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <div className="text-yellow-500">
                {"⭐".repeat(service.rating)}
              </div>
              <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-hoverPrimary">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedServices;