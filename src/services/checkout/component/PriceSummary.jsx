import React from 'react'

const PriceSummary = () => {
  return (
    <>
      <div className="h-full flex flex-col p-4 ">
        <div className="flex flex-col ">
          <h1 className="text-center font-bold text-3xl text-primary py-4">
            Fare Breakup
          </h1>
          <div>
            <div className=" px-2 py-2 space-y-2">
              <ul className="flex items-center justify-between  text-primary  font-semibold border-b-2 border-dashed border-gray-400">
                <li>Item Desc</li>
                <li>Base Fare</li>
                <li>GST</li>
                <li>Total</li>
              </ul>
            </div>
            <div className=" px-2 py-2">
              <ul className="flex items-center justify-between text-sm lg:text-md space-y-2 border-b-2 border-dashed border-gray-400">
                <li>Trip Fare (6 berth)</li>
                <li>₹7494</li>
                <li>₹378</li>
                <li>₹7872</li>
              </ul>
            </div>
            <div className="px-2  py-2">
              <p className="flex justify-between border-b-2 border-dashed border-gray-400 ">
                <span>Trip Insurances</span>
                <span className="">₹120</span>
              </p>
            </div>
            <div className=" px-2 py-2">
              <p className="flex justify-between border-b-2 border-dashed border-gray-400">
                <span>Travel Discount</span>
                <span className="">₹600</span>
              </p>
            </div>
          </div>

        </div>
        <div className="mt-auto px-2 py-2">
            <p className="flex justify-between  text-primary font-extrabold text-lg text-nowrap">
              <span className="">Total Amount</span>
              <span className="">₹7392</span>
            </p>
          </div>
      </div>
    </>
  );
}

export default PriceSummary