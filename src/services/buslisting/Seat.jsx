import React from "react";

const seatStatus = {
  0: "bg-white border-gray-400", // available
  1: "bg-gray-400 border-gray-400", // occupied
  2: "bg-green-400 border-gray-400", // selected
};

function Seat({ status, onClick, seatId, price }) {
  return (
    <div className="relative group">
      <div
        className={`w-10 h-10 border-2 ${seatStatus[status]} flex justify-center items-center cursor-pointer`}
        onClick={onClick}
      >
        {/* Tooltip */}
        <div className="absolute hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 bottom-full mb-1">
          {seatId}, Price: ${price}
        </div>
      </div>
    </div>
  );
}

export default Seat;
