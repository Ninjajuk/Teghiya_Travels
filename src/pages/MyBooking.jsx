import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../context/context";

const MyBookingPage = () => {
  const [pnr, setPnr] = useState("");
  const [error, setError] = useState("");
  const { language } = useContext(ThemeContext);
  const handleChange = (e) => {
    setPnr(e.target.value);
    setError("");
  };
  const handleCancelClick = () => {
    if (pnr === "samsuddin") {
      setError("Enter a valid PNR No.");
    } else {
      setError(""); // Clear error if the PNR is valid
    }
    console.log(pnr);
  };
  return (
    <>
      <Navbar />
      <section
        className=" bg-primary flex items-center justify-center"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="max-h-[24rem] w-full max-w-md   bg-white p-4 rounded-md shadow-md ">
          <h1 className="text-gray-900 text-center font-semibold text-lg  py-4 leading-7">
            PRINT TICKET
          </h1>
          <p className="text-gray-500">
            Verify your details, and Print your tickets
          </p>
          <div className="py-4 flex flex-col">
            <div className="form-group w-full">
              <input
                type="text"
                placeholder=" "
                value={pnr}
                onChange={handleChange}
                className=" w-full py-2 bg-gray-100 rounded-md placeholder:px-4 "
              />
              <label htmlFor="PNR" className="block text-sm font-medium mb-1">
                {language === "en" ? "Enter PNR " : "पी.एन.आर. दर्ज करें"}
              </label>
            </div>
            <div className="w-full py-2 mt-2">
              <button
                disabled={pnr.length <= 5}
                onClick={handleCancelClick}
                className={`w-full py-2 text-white rounded-md ${
                  pnr.length <= 5
                    ? "bg-gray-300 text-gray-900 cursor-not-allowed "
                    : "bg-red-500 hover:bg-red-900 cursor-pointer"
                }  `}
              >
                Submit
              </button>
            </div>
          </div>
          {error && <p className="text-red-800 text-sm">{error}</p>}
        </div>
      </section>
    </>
  );
};

export default MyBookingPage;
