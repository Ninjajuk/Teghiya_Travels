import React, { useState } from "react";

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

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Bus Details: {bus.name}</h1>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </header>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Bus Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Bus Type:</label>
            <p>{bus.type}</p>
          </div>
          <div>
            <label className="font-medium">Registration Number:</label>
            <p>{bus.registrationNumber}</p>
          </div>
          <div>
            <label className="font-medium">Capacity:</label>
            <p>{bus.capacity} Seats</p>
          </div>
          <div>
            <label className="font-medium">Assigned Route:</label>
            <p>
              {bus.assignedRoute ? bus.assignedRoute.name : "No Route Assigned"}
            </p>
          </div>
          <div>
            <label className="font-medium">Status:</label>
            <p>{bus.status}</p>
          </div>
        </div>
        <div className="flex mt-4 space-x-4">
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
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 my-2">
        <h2 className="text-xl font-semibold mb-4">Assignment History</h2>
        {/* Assignment history table */}
        <table className="w-full table-auto bg-white shadow-lg">
          <thead>
            <tr className="bg-gray-200">
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

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Maintenance Records</h2>
        {/* Maintenance records table */}
        <table className="w-full table-auto bg-white shadow-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Date</th>
              <th className="p-2">Type</th>
              <th className="p-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {bus.maintenanceRecords.map((record) => (
              <tr key={record.date} className="border-b">
                <td className="p-2">{record.date}</td>
                <td className="p-2">{record.type}</td>
                <td className="p-2">{record.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Add Maintenance Record
        </button>
      </div>
    </div>
  );
}

export default BusDetails;
