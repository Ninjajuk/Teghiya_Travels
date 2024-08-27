import React, { useState } from "react";
import { MdOutlineClear } from "react-icons/md";

const CateringForm = ({ handleCloseModal }) => {
  const [formData, setFormData] = useState({
    eventType: "",
    date: "",
    guests: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center   bg-black bg-opacity-50 z-50 ">
      <div className="min-h-64 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md   overflow-y-auto relative">
        <div
          onClick={() => handleCloseModal()}
          className="absolute top-0 right-0 cursor-pointer text-red-600 hover:text-red-800 bg-gray-200 rounded-full "
        >
          <MdOutlineClear className="w-8 h-8  " />
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg "
        >
          <h2 className="text-2xl font-bold mb-4">Book Your Catering</h2>
          <div className="form-group mb-4">
            <input
              type="text"
              id="eventType"
              name="eventType"
              placeholder=""
              value={formData.eventType}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
            <label htmlFor="eventType" className="block text-gray-700">
              Event Type
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="number"
              name="guests"
              id="guests"
              placeholder=""
              value={formData.guests}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
            <label htmlFor="guests" className="block text-gray-700">
              Number of Guests
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Special Requests</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              className="mt-1 block w-full ring-1 ring-gray-100 rounded-md shadow-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CateringForm;
