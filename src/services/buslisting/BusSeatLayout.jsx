import React, { useState } from "react";
import Seat from "./Seat";

const BusSeatLayout = () => {
  const initialSeats = [
    [
      { status: 0, id: "1A", price: 10 },
      { status: 0, id: "1B", price: 12 },
      { status: -1, id: "", price: 0 },
      { status: 0, id: "1C", price: 10 },
      { status: 0, id: "1D", price: 12 },
    ],
    [
      { status: 0, id: "2A", price: 10 },
      { status: 0, id: "2B", price: 12 },
      { status: -1, id: "", price: 0 },
      { status: 0, id: "2C", price: 10 },
      { status: 0, id: "2D", price: 12 },
    ],
    [
      { status: 0, id: "3A", price: 10 },
      { status: 0, id: "3B", price: 12 },
      { status: -1, id: "", price: 0 },
      { status: 0, id: "3C", price: 10 },
      { status: 0, id: "3D", price: 12 },
    ],
    [
      { status: 0, id: "4A", price: 10 },
      { status: 0, id: "4B", price: 12 },
      { status: -1, id: "", price: 0 },
      { status: 0, id: "4C", price: 10 },
      { status: 0, id: "4D", price: 12 },
    ],
    [
      { status: 0, id: "5A", price: 10 },
      { status: 0, id: "5B", price: 12 },
      { status: -1, id: "", price: 0 },
      { status: 0, id: "5C", price: 10 },
      { status: 0, id: "5D", price: 12 },
    ],
    [
      { status: 0, id: "6A", price: 10 },
      { status: 0, id: "6B", price: 12 },
      { status: -1, id: "", price: 0 },
      { status: 0, id: "6C", price: 10 },
      { status: 0, id: "6D", price: 12 },
    ],
    [
      { status: 0, id: "7A", price: 10 },
      { status: 0, id: "7B", price: 12 },
      { status: 0, id: "7C", price: 10 },
      { status: 0, id: "7D", price: 12 },
      { status: 0, id: "7E", price: 15 },
    ],
  ];

  const [seats, setSeats] = useState(initialSeats);
  const [selectedCount, setSelectedCount] = useState(0);
  const [limitReached, setLimitReached] = useState(false);

  const toggleSeatStatus = (rowIndex, colIndex) => {
    setSeats((prevSeats) => {
      return prevSeats.map((row, rIndex) => {
        if (rIndex !== rowIndex) return row;
        return row.map((seat, cIndex) => {
          if (cIndex !== colIndex) return seat;

          if (seat.status === 0 && selectedCount < 6) {
            setSelectedCount((prevCount) => prevCount + 1);
            console.log(limitReached);
            setLimitReached(false);
            return { ...seat, status: 2 }; // available to selected
          } else if (seat.status === 2) {
            setSelectedCount((prevCount) => prevCount - 1);
            return { ...seat, status: 0 }; // selected to available
          } else if (seat.status === 0 && selectedCount >= 6) {
            setLimitReached(true);
          }
          return seat; // keep the same for occupied or gap
        });
      });
    });
  };

  return (
    <>
      {/* <h1 className='text-center text-lg font-bold text-gray-900 py-4'>Bus Booking App</h1> */}
      <div className="flex justify-center items-center h-auto bg-gray-100">
        <div className="space-y-4">
          {limitReached && (
            <div className="text-red-500 text-center mb-4">
              You can only select a maximum of 6 seats.
            </div>
          )}
          {seats.map((row, rowIndex) => (
            <div key={rowIndex} className="flex space-x-4">
              {row.map((seat, colIndex) =>
                seat.status === -1 ? (
                  <div key={`${rowIndex}-${colIndex}`} className="w-10" />
                ) : (
                  <Seat
                    key={`${rowIndex}-${colIndex}`}
                    status={seat.status}
                    onClick={() => toggleSeatStatus(rowIndex, colIndex)}
                    seatId={seat.id}
                    price={seat.price}
                  />
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BusSeatLayout;
