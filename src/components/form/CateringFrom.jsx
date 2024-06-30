import React, { useState } from 'react';

const CateringBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guests: '',
    venue: '',
    cuisine: '',
    specialRequests: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form className="bg-white p-8 shadow-md rounded-lg" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">Event Date</label>
          <input
            type="date"
            name="eventDate"
            id="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
          <input
            type="number"
            name="guests"
            id="guests"
            value={formData.guests}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="venue" className="block text-sm font-medium text-gray-700">Venue Address</label>
          <input
            type="text"
            name="venue"
            id="venue"
            value={formData.venue}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700">Preferred Cuisine</label>
          <input
            type="text"
            name="cuisine"
            id="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700">Special Requests</label>
          <textarea
            name="specialRequests"
            id="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default CateringBookingForm;
