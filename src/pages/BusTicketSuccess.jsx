import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";

const BusTicketSuccess = () => {
  const bookingDetails = {
    ticketNumber: "AB123456789",
    departure: "New York",
    arrival: "Washington, D.C.",
    date: "August 30, 2024",
    time: "10:00 AM",
    busNumber: "NY-DC Express",
    passengers: [
      { name: "John Doe", seatNumber: "12A" },
      { name: "Jane Doe", seatNumber: "12B" },
      { name: "Alice Smith", seatNumber: "12C" },
      { name: "Bob Johnson", seatNumber: "12D" },
      // { name: "Charlie Brown", seatNumber: "12E" },
      // { name: "Eve White", seatNumber: "12F" },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center"   style={{ height: "calc(100vh - 4rem)" }}>
        <div className="w-full h-full flex items-center justify-center flex-col lg:flex-row lg:px-[10rem] gap-2 lg:gap-4 py-2 lg:py-8">
          <div className=" bg-white py-4 rounded-md shadow-lg w-full h-96  lg:w-1/2 text-center ">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-6 lg:mb-2 " />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Booking Confirmed!
            </h1>
            <p className="text-gray-600 mb-6">
              Your bus ticket has been successfully booked.
            </p>

            <div className=" p-4  mb-4 text-left">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Ticket Details
              </h2>
              <p className="py-2">
                <strong>Ticket Number:</strong> {bookingDetails.ticketNumber}
              </p>
              <p className="pb-2 flex justify-between">
                <span>
                  <strong>Departure:</strong> {bookingDetails.departure}
                </span>
                <span>
                  <strong>Arrival:</strong> {bookingDetails.arrival}
                </span>
              </p>

              <p className=" pb-2 flex justify-between">
                <span>
                  {" "}
                  <strong>Date:</strong> {bookingDetails.date}
                </span>
                <span>
                  <strong>Time:</strong> {bookingDetails.time}
                </span>
              </p>
              <p className="pb-2">
                <strong>Bus Number:</strong> {bookingDetails.busNumber}
              </p>
            </div>
          </div>

          <div className=" bg-white p-4 rounded-md shadow-lg w-full h-96   lg:w-1/2 text-center ">
            <h3 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-2">
              Passenger Details
            </h3>
            {bookingDetails.passengers.map((passenger, index) => (
              <div key={index} className="flex justify-between mb-2 px-2">
                <span>
                  <strong>Passenger {index + 1}:</strong> {passenger.name}
                </span>
                <span>
                  <strong>Seat:</strong> {passenger.seatNumber}
                </span>
              </div>
            ))}

            <div className="flex justify-center gap-4 py-4 px-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
                Download Ticket
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700">
                Share Ticket
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700">
                Book Another Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusTicketSuccess;
