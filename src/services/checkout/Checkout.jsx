import React, { useContext } from "react";
import Stepper from "./component/Stepper";
import Navbar from "../../components/Navbar";
import PriceSummary from "./component/PriceSummary";
import { ThemeContext } from "../../context/context";

const CheckoutPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <div
        className={`w-full  ${
          theme === "light" ? "bg-gray-200 " : "bg-gray-950 "
        }`}
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="w-full h-full flex flex-col lg:flex-row lg:px-[10rem] gap-1 lg:gap-2 py-4">
          <div className="w-full h-full   lg:w-2/3   py-4">
            <Stepper />
          </div>

          <div className={`w-full h-full py-4    lg:w-1/3 rounded-md   `}>
            <div className={`w-full h-full  `}>
              <PriceSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
