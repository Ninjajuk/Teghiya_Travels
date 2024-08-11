import React, { useState } from "react";
import { VehicleData } from "../components/data";
import MyTable from "../../../components/common/MyTable";

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState(VehicleData);
  const [currentVehicle, setCurrentVehicle] = useState({
    make: "",
    model: "",
    year: "",
    seatingCapacity: "",
    features: "",
    image: "",
  });
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    setCurrentVehicle({ ...currentVehicle, [e.target.name]: e.target.value });
  };

  const handleSaveVehicle = () => {
    if (editing) {
      setVehicles(
        vehicles.map((vehicle) =>
          vehicle.id === currentVehicle.id ? currentVehicle : vehicle
        )
      );
      setEditing(false);
    } else {
      setVehicles([...vehicles, { ...currentVehicle, id: Date.now() }]);
    }
    setCurrentVehicle({
      make: "",
      model: "",
      year: "",
      seatingCapacity: "",
      features: "",
      image: "",
    });
  };

  const handleEditVehicle = (vehicle) => {
    setCurrentVehicle(vehicle);
    setEditing(true);
  };

  const handleDeleteVehicle = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };

  const headerCol = [
    "id",
    "vehicleType",
    "title",
    "vehicleNumber",
    "model",
    "seatingCapacity",
    "driverName",
    "driverContact",
    "ownerName",
    "ownerNumber",
    "isAvailable",
    "description",
    "img",
    "link",
    "btnText",
  ];

  return (
    <div className=" w-full h-[32rem]">
      <div className="w-full h-full p-4 bg-gray-50 shadow-md rounded-md">
        <div className="flex flex-col">
          <div className=" h-1/6 flex justify-between  mb-4">
            <h2 className="text-xl font-bold">Manage Vehicles</h2>
            <button
              onClick={handleSaveVehicle}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              {editing ? "Update Vehicle" : "Add Vehicle"}
            </button>
          </div>
          <div>
            <h1>Filterss</h1>
          </div>
        </div>

        {/* Vehicle List */}
        {/* <div className="grid grid-cols-1 gap-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="p-4 border rounded shadow bg-white"
            >
              <h3 className="text-lg font-bold mb-2">
                {vehicle.make} {vehicle.model} ({vehicle.year})
              </h3>
              <p className="mb-2">
                Seating Capacity: {vehicle.seatingCapacity}
              </p>
              <p className="mb-2">Features: {vehicle.features}</p>
              {vehicle.image && (
                <img
                  src={vehicle.image}
                  alt={vehicle.model}
                  className="w-full h-32 object-cover mb-2"
                />
              )}
              <div className="flex justify-between">
                <button
                  onClick={() => handleEditVehicle(vehicle)}
                  className="text-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteVehicle(vehicle.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div> */}
        <div className="h-4/6 p-2">
          <MyTable headerCol={headerCol} product={VehicleData} />
        </div>

        {/* Vehicle Form */}
        {/* <div className="mb-4 p-4 border rounded bg-white shadow">
          <h3 className="text-lg font-semibold mb-4">
            {editing ? "Edit Vehicle" : "Add New Vehicle"}
          </h3>
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
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {editing ? "Update Vehicle" : "Add Vehicle"}
          </button>
        </div> */}
        <div className="w-full h-1/6   flex items-center">
          <div className="w-full flex justify-between px-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Prev
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleManagement;
