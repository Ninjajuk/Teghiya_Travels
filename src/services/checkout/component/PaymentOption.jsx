
import React from 'react'

const PaymentOption = () => {
  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-bold mb-4 text-purple-800 leading-5">
        PaymentOption
      </h1>
      <div className="mb-4 flex flex-col gap-2 lg:flex-row">
        <div className="w-full min-h-48 lg:w-1/3 border border-gray-200">
          <ul className="flex flex-col p-4">
            <li className="space-x-2 font-sans text-md text-gray-600">
              <span>
                <input type="radio" />
              </span>
              <span>UPI Payments</span>
            </li>
            <li className="space-x-2 font-sans text-md text-gray-600">
              <span>
                <input type="radio" />
              </span>
              <span>Debit Card</span>
            </li>
            <li className="space-x-2 font-sans text-md text-gray-600">
              <span>
                <input type="radio" />
              </span>
              <span>Net Banking</span>
            </li>
            <li className="space-x-2 font-sans text-md text-gray-600">
              <span>
                <input type="radio" />
              </span>
              <span>Credit Card</span>
            </li>
            <li className="space-x-2 font-sans text-md text-gray-600">
              <span>
                <input type="radio" />
              </span>
              <span>Wallet</span>
            </li>
          </ul>
        </div>
        <div className="w-full min-h-48 lg:w-2/3 white border">
          {/* <h2 className="p-2 text-lg font-semibold mb-1 text-gray-500">Enter UPI ID</h2> */}
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
              <li>
                User initiates a payment through a UPI-enabled mobile app.
              </li>
              <li>User selects the recipient's UPI ID (VPA).</li>
              <li>App verifies the UPI ID and transaction details.</li>
    
    
  
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentOption