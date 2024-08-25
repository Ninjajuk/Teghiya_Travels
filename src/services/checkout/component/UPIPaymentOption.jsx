import React from "react";

const UPIPaymentOption = () => {
  return (
    <main className="w-full h-full">
      <div className="w-full p-2">
        <input
          type="text"
          placeholder="UPI ID"
          className="w-full p-2 border border-sky-600 rounded-md shadow-md"
        />
      </div>
      <div className="p-2">
        <h2 className=" text-lg font-semibold  text-gray-900 pb-2">
          How UPI Works ?{" "}
        </h2>
        <ol className="space-y-2 list-decimal px-4">
          <li>Make sure</li>
          <li>User initiates a payment through a UPI-enabled mobile app.</li>
          <li>User selects the recipient's UPI ID (VPA).</li>
          <li>App verifies the UPI ID and transaction details.</li>
        </ol>
      </div>
    </main>
  );
};

export default UPIPaymentOption;
