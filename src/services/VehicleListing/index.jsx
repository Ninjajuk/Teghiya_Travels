import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LatestCarsLaunches from "./LatestCar";

const VehicleListingPage = () => {
  const location = useLocation();
  const { pickupLocation, dropoffLocation, weddingDate } = location.state || {};

  // Mock data for available vehicles
  const [vehicles, setVehicles] = useState([
    { id: 1, type: "Standard Bus", description: "Comfortable for up to 50 guests.", price: 300, image: "https://buscdn.cardekho.com/news/123.jpg" },
    { id: 2, type: "Luxury Bus", description: "Premium comfort for up to 30 guests.", price: 500, image: "https://buscdn.cardekho.com/news/120.jpg" },
    { id: 3, type: "Premium Coach", description: "Luxurious travel for up to 20 guests.", price: 700, image: "https://buscdn.cardekho.com/in/sml-isuzu/aasai-mx-bus/sml-isuzu-aasai-mx-bus-28797.jpg" },
    { id: 4, type: "Mini Bus", description: "Compact and efficient for small groups.", price: 200, image: "https://buscdn.cardekho.com/in/sml-isuzu/hiroi-ev/sml-isuzu-hiroi-ev-21905.jpg" },
  ]);

  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [selectedType, setSelectedType] = useState("all");

  // Handle filter change
  const handleFilterChange = (type) => {
    setSelectedType(type);
    if (type === "all") {
      setFilteredVehicles(vehicles);
    } else {
      setFilteredVehicles(vehicles.filter((vehicle) => vehicle.type.toLowerCase().includes(type.toLowerCase())));
    }
  };

  return (
    <>
    <Navbar/>

    <div className="p-6 bg-white min-h-screen   lg:px-[10rem]">
      <div className="max-w-7xl p-2 border border-gray-300 rounded-2xl shadow-md ">
        <h1 className="text-3xl font-bold mb-6">Available Vehicles</h1>
        <div className="mb-6">
          <p className="text-gray-600">
            Showing results for: <span className="font-semibold">{pickupLocation}</span> to{" "}
            <span className="font-semibold">{dropoffLocation}</span> on{" "}
            <span className="font-semibold">{new Date(weddingDate).toLocaleDateString()}</span>
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => handleFilterChange("all")}
            className={`px-4 py-2 rounded-lg ${
              selectedType === "all" ? "bg-primary text-white" : "bg-white text-gray-700"
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("standard")}
            className={`px-4 py-2 rounded-lg ${
              selectedType === "standard" ? "bg-primary text-white" : "bg-white text-gray-700"
            }`}
          >
            Standard
          </button>
          <button
            onClick={() => handleFilterChange("luxury")}
            className={`px-4 py-2 rounded-lg ${
              selectedType === "luxury" ? "bg-primary text-white" : "bg-white text-gray-700"
            }`}
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilterChange("premium")}
            className={`px-4 py-2 rounded-lg ${
              selectedType === "premium" ? "bg-primary text-white" : "bg-white text-gray-700"
            }`}
          >
            Premium
          </button>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={vehicle.image} alt={vehicle.type} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{vehicle.type}</h3>
              <p className="text-gray-600 mb-2">{vehicle.description}</p>
              <p className="text-lg font-bold text-primary">
                ${vehicle.price} <span className="text-sm text-gray-500">/ day</span>
              </p>
              <button
                className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-hoverPrimary transition-colors duration-300 ease-in-out mt-4"
                onClick={() => alert(`Booked ${vehicle.type}`)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="w-full lg:px-[10rem] py-2">
    <LatestCarsLaunches/>
    </div>

    <Footer/>
    </>

  );
};

export default VehicleListingPage;