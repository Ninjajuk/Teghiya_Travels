import React from "react";

const DebitCardPaymentOption = () => {
  return (
    <div>
      <h1 className="text-primary font-semibold text-lg py-2 text-center">Debit Card Details</h1>
      <div>
        <div className="form-group w-full ">
          <input
            type="number"
            placeholder=""
            name="debit"
            id="debit"
            // value={debitcard}
            // onChange={handleChange}
            className=" w-full py-2 bg-gray-100 rounded-md placeholder:px-4 "
          />
          <label htmlFor="debit" className="block text-sm font-medium mb-1">
            {/* {language === "en" ? "Enter PNR " : "पी.एन.आर. दर्ज करें"} */}
            Card Number
          </label>
        </div>
        <div className="flex items-center gap-2 py-4">
          <div className="form-group w-full ">
            <input
              type="text"
              placeholder=""
              name="month"
              id="month"
              // value={debitcard}
              // onChange={handleChange}
              className=" w-full py-2 bg-gray-100 rounded-md placeholder:px-4 "
            />
            <label htmlFor="month" className="block text-sm font-medium mb-1">
              {/* {language === "en" ? "Enter PNR " : "पी.एन.आर. दर्ज करें"} */}
              Month -MM
            </label>
          </div>
          <div className="form-group w-full ">
            <input
              type="text"
              placeholder=""
              name="year"
              id="year"
              // value={debitcard}
              // onChange={handleChange}
              className=" w-full py-2 bg-gray-100 rounded-md placeholder:px-4 "
            />
            <label htmlFor="year" className="block text-sm font-medium mb-1">
              {/* {language === "en" ? "Enter PNR " : "पी.एन.आर. दर्ज करें"} */}
              Year -YYYY
            </label>
          </div>
        </div>

        <div className="flex items-center gap-2 py-4">
          <div className="form-group w-full ">
            <input
              type="text"
              placeholder=""
              name="CVV"
              id="CVV"
              // value={debitcard}
              // onChange={handleChange}
              className=" w-full py-2 bg-gray-100 rounded-md placeholder:px-4 "
            />
            <label htmlFor="CVV" className="block text-sm font-medium mb-1">
              {/* {language === "en" ? "Enter PNR " : "पी.एन.आर. दर्ज करें"} */}
              CVV
            </label>
          </div>
          <div className=" w-full ">
            <p>3-4 digit number on back of your card</p>

          </div>
        </div>

        <div className="py-2">
          <div className="form-group w-full ">
            <input
              type="text"
              placeholder=""
              name="cardHolderName"
              id="cardHolderName"
              // value={debitcard}
              // onChange={handleChange}
              className=" w-full py-2 bg-gray-100 rounded-md placeholder:px-4 "
            />
            <label htmlFor="cardHolderName" className="block text-sm font-medium mb-1">
              {/* {language === "en" ? "Enter PNR " : "पी.एन.आर. दर्ज करें"} */}
              Name of the Card Holder
            </label>
          </div>
        </div>


      </div>
    </div>
  )

};

export default DebitCardPaymentOption;
