import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import SpecialBookingPandalsCatering from "../../../components/SpecialBookingPandalsCatering";

const WebsiteMain = () => {
  return (
    <DefaultLayout>
      <h1> Corporate Wesbite</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <div className="  bg-gray-200 shadow-md rounded-md p-2">
          <h1>Banner </h1>
          <div className="flex justify-between">
            <h1>Banner </h1>
            <button className="p-2 bg-green-100">Edit</button>
          </div>
        </div>

        <div className=" h-full max-h-64 bg-gray-200 shadow-md rounded-md p-2">
          <h1>Vehicle Booking </h1>
        </div>

        <div className=" h-full max-h-64 bg-gray-200 shadow-md rounded-md p-2">
          <h1>Catering Booking </h1>
        </div>

        <div className=" h-full max-h-64 bg-gray-200 shadow-md rounded-md p-2">
          <h1>Pandals Booking </h1>
        </div>
      </div>

      {/* <SpecialBookingPandalsCatering /> */}
    </DefaultLayout>
  );
};

export default WebsiteMain;
