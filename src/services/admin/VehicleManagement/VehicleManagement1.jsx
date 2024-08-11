import React, { useState } from "react";

const VehicleManagement1 = () => {
  const [vehicles, setVehicles] = useState([]);
  const [currentVehicle, setCurrentVehicle] = useState({
    make: "",
    model: "",
    year: "",
    seatingCapacity: "",
    features: "",
    image: "",
    availability: "",
    price: "",
    maintenanceDate: "",
  });

  const handleInputChange = (e) => {
    setCurrentVehicle({ ...currentVehicle, [e.target.name]: e.target.value });
  };

  const handleSaveVehicle = () => {
    setVehicles([...vehicles, { ...currentVehicle, id: Date.now() }]);
    setCurrentVehicle({
      make: "",
      model: "",
      year: "",
      seatingCapacity: "",
      features: "",
      image: "",
      availability: "",
      price: "",
      maintenanceDate: "",
    });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Vehicle Management Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Add/Remove Vehicles Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Add/Remove Vehicles</h2>
          <input
            type="text"
            name="make"
            placeholder="Make"
            value={currentVehicle.make}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={currentVehicle.model}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border rounded"
          />
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={currentVehicle.year}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border rounded"
          />
          <input
            type="number"
            name="seatingCapacity"
            placeholder="Seating Capacity"
            value={currentVehicle.seatingCapacity}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border rounded"
          />
          <textarea
            name="features"
            placeholder="Features"
            value={currentVehicle.features}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={currentVehicle.image}
            onChange={handleInputChange}
            className="block w-full p-2 mb-2 border rounded"
          />
          <button
            onClick={handleSaveVehicle}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full"
          >
            Save Vehicle
          </button>
        </div>

        {/* Vehicle Availability Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Vehicle Availability</h2>
          <select
            name="availability"
            value={currentVehicle.availability}
            onChange={handleInputChange}
            className="block w-full p-2 mb-4 border rounded"
          >
            <option value="">Select Availability</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
          <button
            onClick={handleSaveVehicle}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full"
          >
            Update Availability
          </button>
        </div>

        {/* Pricing Control Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Pricing Control</h2>
          <input
            type="number"
            name="price"
            placeholder="Price per day"
            value={currentVehicle.price}
            onChange={handleInputChange}
            className="block w-full p-2 mb-4 border rounded"
          />
          <button
            onClick={handleSaveVehicle}
            className="bg-yellow-500 text-white px-4 py-2 rounded mt-4 w-full"
          >
            Update Price
          </button>
        </div>

        {/* Maintenance Scheduling Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Maintenance Scheduling</h2>
          <input
            type="date"
            name="maintenanceDate"
            value={currentVehicle.maintenanceDate}
            onChange={handleInputChange}
            className="block w-full p-2 mb-4 border rounded"
          />
          <button
            onClick={handleSaveVehicle}
            className="bg-red-500 text-white px-4 py-2 rounded mt-4 w-full"
          >
            Schedule Maintenance
          </button>
        </div>
      </div>

      {/* Vehicle List */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Current Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="p-4 border rounded shadow bg-white"
            >
              <h3 className="text-lg font-bold mb-2">
                {vehicle.make} {vehicle.model} ({vehicle.year})
              </h3>
              <p>Seating Capacity: {vehicle.seatingCapacity}</p>
              <p>Features: {vehicle.features}</p>
              <p>Availability: {vehicle.availability}</p>
              <p>Price: ${vehicle.price}/day</p>
              <p>Maintenance Date: {vehicle.maintenanceDate}</p>
              {vehicle.image && (
                <img
                  src={vehicle.image}
                  alt={vehicle.model}
                  className="w-full h-32 object-cover mt-2"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleManagement1;
