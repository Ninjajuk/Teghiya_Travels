import React, { useContext } from 'react'
import Stepper from './component/Stepper'
import Navbar from '../../components/Navbar'
import PriceSummary from './component/PriceSummary';
import { ThemeContext } from '../../context/context';



const CheckoutPage = () => {
  const {theme}=useContext(ThemeContext)
  return (
    <>
      <Navbar />
      <div
        className={`w-full  ${theme==='light'?'bg-gray-200 ':'bg-gray-950 '}`}
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="w-full flex flex-col lg:flex-row lg:px-[10rem] gap-1 lg:gap-2">
          <div className="w-full   lg:w-2/3  overflow-x-auto">
            <Stepper />
          </div>

          <div className={`w-full min-h-full  lg:w-1/3 rounded-md  `}>
            <div className={`w-full h-full mx-auto   `}>
              <PriceSummary />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default CheckoutPage