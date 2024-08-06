import React from "react";

const WeddingBusBookingForm = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center   bg-black bg-opacity-50 z-50 ">
      <div className="min-h-64 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md   overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Book a Bus for Your Wedding
        </h2>
        {/* <p className="mb-6">
          Plan your wedding transportation in advance for a smooth experience.
        </p> #f8f9fa */}
        <form>
          <div className="grid gap-4 mb-6">
            <div>
              <label
                htmlFor="weddingDate"
                className="block text-sm font-medium mb-1"
              >
                Wedding Date
              </label>
              <input
                type="date"
                id="weddingDate"
                className="border focus:outline-none focus:ring-[#800000] focus:border-[#800000]  rounded-md p-2 w-full"
              />
            </div>
            {/* <div>
              <label
                htmlFor="guests"
                className="block text-sm font-medium mb-1"
              >
                Number of Guests
              </label>
              <input
                type="number"
                id="guests"
                placeholder="Enter number of guests"
                className="border rounded-md p-2 w-full"
              />
            </div> */}
            <div>
              <label
                htmlFor="busType"
                className="block text-sm font-medium mb-1"
              >
                Bus Type
              </label>
              <select
                id="busType"
                className="border focus:outline-none focus:ring-[#800000] focus:border-[#800000] rounded-md p-2 w-full"
              >
                <option value="standard">Standard</option>
                <option value="luxury">Luxury</option>
                <option value="premium">Premium</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="pickupLocation"
                className="block text-sm font-medium mb-1"
              >
                Pickup Location
              </label>
              <input
                type="text"
                id="pickupLocation"
                placeholder="Enter pickup location"
                className="border focus:outline-none focus:ring-[#800000] focus:border-[#800000] rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="dropoffLocation"
                className="block text-sm font-medium mb-1"
              >
                Dropoff Location
              </label>
              <input
                type="text"
                id="dropoffLocation"
                placeholder="Enter dropoff location"
                className="border focus:outline-none focus:ring-[#800000] focus:border-[#800000] rounded-md p-2 w-full"
              />
            </div>
          </div>
          {/* <div className="grid gap-4 mb-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium mb-1"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                placeholder="Enter your contact number"
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="border rounded-md p-2 w-full"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="specialRequests"
              className="block text-sm font-medium mb-1"
            >
              Special Requests or Notes
            </label>
            <textarea
              id="specialRequests"
              placeholder="Enter any special requests or notes"
              className="border rounded-md p-2 w-full h-32"
            ></textarea>
          </div> */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Book Now
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WeddingBusBookingForm;
