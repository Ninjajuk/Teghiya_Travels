import React, { useState } from "react";

const ScheduleManagement = () => {
  const scheduleData = [
    {
      id: 1,
      busName: "Express 101",
      route: "Mumbai to Pune",
      day: "Monday",
      departureTime: "08:00 AM",
      arrivalTime: "12:00 PM",
      driver: "John Doe",
    },
    {
      id: 2,
      busName: "Express 102",
      route: "Mumbai to Pune",
      day: "Wednesday",
      departureTime: "08:00 AM",
      arrivalTime: "12:00 PM",
      driver: "Samsuddin Ansari",
    },
    {
      id: 3,
      busName: "Express 103",
      route: "Mumbai to Nashik",
      day: "Tuesday",
      departureTime: "09:00 AM",
      arrivalTime: "01:00 PM",
      driver: "Alice Smith",
    },
    {
      id: 4,
      busName: "Express 104",
      route: "Pune to Nashik",
      day: "Thursday",
      departureTime: "10:00 AM",
      arrivalTime: "02:00 PM",
      driver: "Bob Johnson",
    },
    {
      id: 5,
      busName: "Express 105",
      route: "Mumbai to Goa",
      day: "Friday",
      departureTime: "06:00 AM",
      arrivalTime: "02:00 PM",
      driver: "Charlie Brown",
    },
    {
      id: 6,
      busName: "Express 106",
      route: "Pune to Goa",
      day: "Saturday",
      departureTime: "07:00 AM",
      arrivalTime: "03:00 PM",
      driver: "Daisy Green",
    },
    {
      id: 7,
      busName: "Express 107",
      route: "Nashik to Goa",
      day: "Sunday",
      departureTime: "08:00 AM",
      arrivalTime: "04:00 PM",
      driver: "Eve White",
    },
    {
      id: 8,
      busName: "Express 108",
      route: "Mumbai to Lonavala",
      day: "Monday",
      departureTime: "07:30 AM",
      arrivalTime: "09:30 AM",
      driver: "Frank Black",
    },
    {
      id: 9,
      busName: "Express 109",
      route: "Pune to Lonavala",
      day: "Tuesday",
      departureTime: "08:30 AM",
      arrivalTime: "10:30 AM",
      driver: "Grace Pink",
    },
    {
      id: 10,
      busName: "Express 110",
      route: "Mumbai to Shirdi",
      day: "Wednesday",
      departureTime: "05:00 AM",
      arrivalTime: "11:00 AM",
      driver: "Henry Blue",
    },
    {
      id: 11,
      busName: "Express 111",
      route: "Pune to Shirdi",
      day: "Thursday",
      departureTime: "06:00 AM",
      arrivalTime: "12:00 PM",
      driver: "Ivy Violet",
    },
    {
      id: 12,
      busName: "Express 112",
      route: "Nashik to Shirdi",
      day: "Friday",
      departureTime: "07:00 AM",
      arrivalTime: "09:00 AM",
      driver: "Jack Orange",
    },
  ];
  const [activeMethod, setActiveMethod] = useState("automated");

  const handleScheduleCreation = (method) => {
    // Handle scheduling logic based on the method
    console.log(`Creating schedule using ${method} method`);
  };

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Schedule Management</h1>
        <button className="bg-primary text-white px-4 py-2 rounded">
          Add Schedule
        </button>
      </header>

      <table className="w-full table-auto bg-white shadow-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Bus Name</th>
            <th className="p-2 text-left">Route</th>
            <th className="p-2 text-left">Day</th>
            <th className="p-2 text-left">Departure Time</th>
            <th className="p-2 text-left">Arrival Time</th>
            <th className="p-2 text-left">Driver</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((schedule) => (
            <tr key={schedule.id} className="border-b">
              <td className="p-2">{schedule.busName}</td>
              <td className="p-2">{schedule.route}</td>
              <td className="p-2">{schedule.day}</td>
              <td className="p-2">{schedule.departureTime}</td>
              <td className="p-2">{schedule.arrivalTime}</td>
              <td className="p-2">{schedule.driver}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mb-6 pt-4">
        <label className="font-medium">Select Schedule Method:</label>
        <div className="flex space-x-4 mt-2">
          <button
            className={`px-4 py-2 rounded ${
              activeMethod === "automated"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveMethod("automated")}
          >
            Automated
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeMethod === "manual"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveMethod("manual")}
          >
            Manual
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeMethod === "bulk"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveMethod("bulk")}
          >
            Bulk
          </button>
        </div>
      </div>

      {activeMethod === "automated" && (
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Automated Schedule Creation
          </h3>
          <p>Configure parameters for automated scheduling here.</p>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => handleScheduleCreation("automated")}
          >
            Generate Automated Schedule
          </button>
        </div>
      )}

      {activeMethod === "manual" && (
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Manual Schedule Creation
          </h3>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-medium">Day:</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="e.g., Monday"
                />
              </div>
              <div>
                <label className="font-medium">Departure Time:</label>
                <input
                  type="time"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="font-medium">Arrival Time:</label>
                <input
                  type="time"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="font-medium">Driver:</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Driver Name"
                />
              </div>
            </div>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mt-4"
              type="submit"
            >
              Add Schedule
            </button>
          </form>
        </div>
      )}

      {activeMethod === "bulk" && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Bulk Schedule Upload</h3>
          <p>Upload a CSV file to add schedules in bulk.</p>
          <input type="file" className="block mt-4 mb-2" />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => handleScheduleCreation("bulk")}
          >
            Upload and Create Schedules
          </button>
        </div>
      )}
    </div>
  );
};

export default ScheduleManagement;
