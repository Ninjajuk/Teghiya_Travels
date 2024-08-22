import React, { useState } from "react";

function RouteManagement() {
  const [routes, setRoutes] = useState([
    // Example routes data
    {
      id: 1,
      name: "Route 1",
      start: "City A",
      end: "City B",
      distance: "100 km",
    },
    // more routes...
  ]);

  const handleEdit = (id) => {
    // Handle edit route logic
  };

  const handleDelete = (id) => {
    // Handle delete route logic
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Route Management</h1>
        <button className="bg-primary text-white px-4 py-2 rounded">
          Add New Route
        </button>
      </header>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search routes..."
          className="border p-2 rounded w-full"
        />
      </div>

      <table className="w-full table-auto bg-white shadow-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Route Name</th>
            <th className="p-2 text-left">Start Location</th>
            <th className="p-2 text-left">End Location</th>
            <th className="p-2 text-left">Distance</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route) => (
            <tr key={route.id} className="border-b">
              <td className="p-2">{route.name}</td>
              <td className="p-2">{route.start}</td>
              <td className="p-2">{route.end}</td>
              <td className="p-2">{route.distance}</td>
              <td className="p-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleEdit(route.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(route.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination would go here */}
    </div>
  );
}

export default RouteManagement;
