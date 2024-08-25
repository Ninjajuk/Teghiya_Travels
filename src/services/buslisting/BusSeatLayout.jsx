import React, { useState } from "react";
import Seat from "./Seat";

const BusSeatLayout = ({ seatLayout }) => {
  // const initialSeats = [
  //   [
  //     { status: 0, id: "1A", price: 10 },
  //     { status: 0, id: "1B", price: 12 },
  //     { status: -1, id: "", price: 0 },
  //     { status: 0, id: "1C", price: 10 },
  //     { status: 0, id: "1D", price: 12 },
  //   ],
  //   [
  //     { status: 0, id: "2A", price: 10 },
  //     { status: 0, id: "2B", price: 12 },
  //     { status: -1, id: "", price: 0 },
  //     { status: 0, id: "2C", price: 10 },
  //     { status: 0, id: "2D", price: 12 },
  //   ],
  //   [
  //     { status: 0, id: "3A", price: 10 },
  //     { status: 0, id: "3B", price: 12 },
  //     { status: -1, id: "", price: 0 },
  //     { status: 0, id: "3C", price: 10 },
  //     { status: 0, id: "3D", price: 12 },
  //   ],
  //   [
  //     { status: 0, id: "4A", price: 10 },
  //     { status: 0, id: "4B", price: 12 },
  //     { status: -1, id: "", price: 0 },
  //     { status: 0, id: "4C", price: 10 },
  //     { status: 0, id: "4D", price: 12 },
  //   ],
  //   [
  //     { status: 0, id: "5A", price: 10 },
  //     { status: 0, id: "5B", price: 12 },
  //     { status: -1, id: "", price: 0 },
  //     { status: 0, id: "5C", price: 10 },
  //     { status: 0, id: "5D", price: 12 },
  //   ],
  //   [
  //     { status: 0, id: "6A", price: 10 },
  //     { status: 0, id: "6B", price: 12 },
  //     { status: -1, id: "", price: 0 },
  //     { status: 0, id: "6C", price: 10 },
  //     { status: 0, id: "6D", price: 12 },
  //   ],
  //   [
  //     { status: 0, id: "7A", price: 10 },
  //     { status: 0, id: "7B", price: 12 },
  //     { status: 0, id: "7C", price: 10 },
  //     { status: 0, id: "7D", price: 12 },
  //     { status: 0, id: "7E", price: 15 },
  //   ],
  // ];

  const [seats, setSeats] = useState(seatLayout);
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
      <div className="h-full flex justify-center items-center ">
        <div
          className="space-y-1 py-2"
          //  style={{ transform: "rotate(270deg)" }}
        >
          {limitReached && (
            <div className="text-red-500 text-center mb-4">
              You can only select a maximum of 6 seats.
            </div>
          )}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-10 w-10 text-gray-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm0-14a6 6 0 000 12 6 6 0 000-12zm0 10a4 4 0 010-8 4 4 0 010 8zm-2-4a2 2 0 114 0 2 2 0 01-4 0z"
              />
            </svg>
          </div>
          <div className="border-2 my-4 border-red-800"></div>
          {seats.map((row, rowIndex) => (
            <div key={rowIndex} className="flex space-x-2">
              {row.map((seat, colIndex) =>
                seat.status === -1 ? (
                  <div key={`${rowIndex}-${colIndex}`} className="w-6" />
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
