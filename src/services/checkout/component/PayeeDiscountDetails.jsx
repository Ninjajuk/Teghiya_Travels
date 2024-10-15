import React, { useState } from "react";

const PayeeDiscountDetails = ({ onClick }) => {
  const [payeeDetails, setPayeeDetails] = useState({
    mobile: "",
    email: "",
  });

  const [discountDetails, setDiscountDetails] = useState({
    discountCode: "",
    discountAmount: "",
  });

  const handlePayeeChange = (e) => {
    const { name, value } = e.target;
    setPayeeDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleDiscountChange = (e) => {
    const { name, value } = e.target;
    setDiscountDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <main className="flex flex-col w-full h-full">
      <div className="p-4 ">
        <h1 className="text-2xl font-bold mb-4 text-primary leading-5">
          Payee & Discount Details
        </h1>

        {/* Payee Details */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-500">
            Payee Details
          </h2>
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col">
              <label htmlFor="mobile" className="mb-1 font-medium">
                Mobile
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={payeeDetails.mobile}
                onChange={handlePayeeChange}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
              />
              {/* <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-600">
                Phone
              </label>
              <div className="flex items-center border border-gray-300 rounded px-3  mt-2 mb-4 focus-within:border-blue-400">
                <span className="text-gray-600 mr-2">+91</span>
                <input
                  type="tel"
                  id="phone"
                  className="w-full focus:outline-none py-2"
                  placeholder="Enter your phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

            </div> */}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={payeeDetails.email}
                onChange={handlePayeeChange}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
              />
            </div>
          </div>
        </div>

        {/* Discount Details */}
        <div>
          <h2 className="text-lg font-semibold mb-1 text-gray-500">
            Discount Details
          </h2>
          {/* <div className="flex flex-col space-y-2">
          <div className="flex flex-col">
            <label htmlFor="discountCode" className="mb-1 font-medium">Discount Code</label>
            <input
              type="text"
              id="discountCode"
              name="discountCode"
              value={discountDetails.discountCode}
              onChange={handleDiscountChange}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="discountAmount" className="mb-1 font-medium">Discount Amount</label>
            <input
              type="text"
              id="discountAmount"
              name="discountAmount"
              value={discountDetails.discountAmount}
              onChange={handleDiscountChange}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            />
          </div>
        </div> */}
          <div className=" w-full my-2">
            <button className="w-full  ring-2 ring-gray-200 rounded-md shadow-md p-2 cursor-pointer">
              Login / Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="mt-auto flex justify-center items-center p-2 bg-green-700 hover:bg-green-900 rounded-md cursor-pointer">
        <button onClick={() => onClick()} className="text-white">
          Proceed to Payment Options
        </button>
      </div>
    </main>
  );
};

export default PayeeDiscountDetails;
