import React, { useState } from "react";
import { FaPenAlt } from "react-icons/fa";
function BusDetails({ bus }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    // Implement edit logic here
  };

  const handleDelete = () => {
    // Implement delete logic here with confirmation
    alert(`Are you sure you want to delete bus ${bus.name}?`);
  };

  const handleAssignRoute = () => {
    // Implement route assignment logic here
  };

  const handleUnassignRoute = () => {
    // Implement route unassignment logic here
  };

  //Seat Layout
  const [seats, setSeats] = useState([]);

  const addRow = (row) => {
    setSeats([...seats, row]);
  };

  const handleSave = () => {
    saveLayout(seats);
  };

  return (
    <div className="p-4 flex flex-col gap-1 h-full ">
      <div className=" bg-gray-800 flex items-center justify-evenly p-2">
        <div className="">
          <select className="p-2 rounded-md max-w-20 truncate">
            <option value="All" className="">
              Select
            </option>
            <option value="All">Vehicle Typesnhhhhh</option>
            <option value="All">All Types</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="seach"
            id="search"
            placeholder=""
            onChange={() => {}}
          />
          <label htmlFor="search">Search</label>
        </div>
        <div>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:ring-2 ring-primary "
            onClick={() => window.history.back()}
          >
            Search
          </button>
        </div>
      </div>

      <div className=" bg-gray-100">
        <header className=" p-2 flex justify-between items-center mb-4 mx-2">
          <h1 className="text-2xl font-bold">Bus Details: {bus.name}</h1>
          {/* <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => window.history.back()}
          >
            Back
          </button> */}
        </header>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6 mx-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold  tracking-widest text-gray-600">
              Bus Information
            </h2>
            <button
              className=" text-green-800 px-4 py-2 rounded flex items-center "
              // onClick={() => window.history.back()}
            >
              <span>
                {" "}
                <FaPenAlt />
              </span>
              <span className="ml-2">Edit</span>
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="font-medium">Bus Type:</label>
              <p>{bus.type}</p>
            </div>
            <div>
              <label className="font-medium">Registration Number:</label>
              <p>{bus.registrationNumber}</p>
            </div>
            <div>
              <label className="font-medium">Registration Name:</label>
              <p>{bus.registrationNumber}</p>
            </div>
            <div>
              <label className="font-medium">Owner Number:</label>
              <p>{bus.registrationNumber}</p>
            </div>
            <div>
              <label className="font-medium">Capacity:</label>
              <p>{bus.capacity} Seats</p>
            </div>
            <div>
              <label className="font-medium">Assigned Route:</label>
              <p>
                {bus.assignedRoute
                  ? bus.assignedRoute.name
                  : "No Route Assigned"}
              </p>
            </div>
            <div>
              <label className="font-medium">Status:</label>
              <p>{bus.status}</p>
            </div>
            <div>
              <label className="font-medium">Status:</label>
              <p>{bus.isAvailable === true ? "Available" : "Not Available"}</p>
            </div>
          </div>
          {/* <div className="flex mt-4 space-x-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleEdit}
            >
              Edit Bus Details
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleDelete}
            >
              Delete Bus
            </button>
          </div> */}
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6 mx-2">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-4 tracking-widest text-gray-600">
              Amenities
            </h2>
            <button
              className=" text-green-800 px-4 py-2 rounded flex items-center "
              // onClick={() => window.history.back()}
            >
              <span>
                {" "}
                <FaPenAlt />
              </span>
              <span className="ml-2">Edit</span>
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="font-medium">Bus Type:</label>
              <p>{bus.type}</p>
            </div>
            <div>
              <label className="font-medium">Registration Number:</label>
              <p>{bus.registrationNumber}</p>
            </div>
            <div>
              <label className="font-medium">Registration Name:</label>
              <p>{bus.registrationNumber}</p>
            </div>
            <div>
              <label className="font-medium">Owner Number:</label>
              <p>{bus.registrationNumber}</p>
            </div>
            <div>
              <label className="font-medium">Capacity:</label>
              <p>{bus.capacity} Seats</p>
            </div>
            <div>
              <label className="font-medium">Assigned Route:</label>
              <p>
                {bus.assignedRoute
                  ? bus.assignedRoute.name
                  : "No Route Assigned"}
              </p>
            </div>
            <div>
              <label className="font-medium">Status:</label>
              <p>{bus.status}</p>
            </div>
            <div>
              <label className="font-medium">Status:</label>
              <p>{bus.isAvailable === true ? "Available" : "Not Available"}</p>
            </div>
          </div>
          {/* <div className="flex mt-4 space-x-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleEdit}
            >
              Edit Bus Details
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleDelete}
            >
              Delete Bus
            </button>
          </div> */}
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 my-2 mx-2 ">
          <h2 className="text-2xl font-bold mb-4 text-gray-600 tracking-widest">
            Assignment History
          </h2>
          {/* Assignment history table */}
          <table className="w-full table-auto bg-white shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2">Route Name</th>
                <th className="p-2">Start Date</th>
                <th className="p-2">End Date</th>
              </tr>
            </thead>
            <tbody>
              {bus.assignmentHistory.map((history) => (
                <tr key={history.routeName} className="border-b">
                  <td className="p-2">{history.routeName}</td>
                  <td className="p-2">{history.startDate}</td>
                  <td className="p-2">{history.endDate || "Ongoing"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BusDetails;
