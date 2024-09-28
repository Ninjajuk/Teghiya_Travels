import React, { useState } from "react";
import UPIPaymentOption from "./UPIPaymentOption";
import DebitCardPaymentOption from "./DebitCardPaymentOption";
import NetBankingPaymentOption from "./NetBankingPaymentOption";
import CreditCardPaymentOption from "./CreditCardPaymentOption";
import WalletPaymentOption from "./WalletPaymentOption";
import { useNavigate } from "react-router-dom";

const PaymentOption = ({}) => {
  const [selectedPayment, setSelectedPayment] = useState(1);

  const PaymentTypes = [
    { id: 1, title: "UPI Payments", component: <UPIPaymentOption /> },
    { id: 2, title: "Debit Card", component: <DebitCardPaymentOption /> },
    { id: 3, title: "Net Banking", component: <NetBankingPaymentOption /> },
    { id: 4, title: "Credit Card", component: <CreditCardPaymentOption /> },
    { id: 5, title: "Wallet", component: <WalletPaymentOption /> },
  ];
  const navigate = useNavigate();
  const handlePayment = () => {
    console.log("Payment success");

    navigate("/ticket-success");
  };

  return (
    <div className="w-full h-full p-4 flex flex-col gap-2">
      <h1 className="text-2xl font-bold mb-2 text-primary leading-5 ">
        Payment Options
      </h1>
      {/* <div className="flex-grow-0  flex flex-col gap-2 lg:flex-row  ">

        <div className="w-full h-full lg:w-1/3 border border-gray-200 ">
          <ul className="flex flex-col p-4 space-y-2">
            {PaymentTypes.map((type) => (
              <li
                key={type.id}
                onClick={() => setSelectedPayment(type.id)}
                className="space-x-2  font-sans text-md text-gray-600 cursor-pointer flex items-center"
              >
                <input
                  type="radio"
                  name="paymentType"
                  checked={selectedPayment === type.id}
                  onChange={() => setSelectedPayment(type.id)}
                  className="w-4 h-4"
                />
                <span>{type.title}</span>
              </li>
            ))}
          </ul>
        </div>

   
        <div className="w-full h-full lg:w-2/3 border p-4">
          {PaymentTypes.find((type) => type.id === selectedPayment)?.component}
        </div>
      </div> */}
      <div className="flex-grow-0 flex flex-col gap-2 lg:flex-row">
  {/* Payment Types Grid */}
  <div className="w-full h-full lg:w-1/3 border border-gray-200">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {PaymentTypes.map((type) => (
        <div
          key={type.id}
          onClick={() => setSelectedPayment(type.id)}
          className={`border py-4 px-1 rounded-lg cursor-pointer transition duration-200 ease-in-out ${
            selectedPayment === type.id ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-100'
          }`}
        >
          <div className="flex items-center">
            <span className="w-4 h-4 mr-1">
              {selectedPayment === type.id && <span className="text-indigo-600">✔</span>}
            </span>
            <span className="font-sans text-md text-gray-600">{type.title}</span>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Selected Payment Option Component */}
  <div className="w-full h-full lg:w-2/3 border p-4">
    {PaymentTypes.find((type) => type.id === selectedPayment)?.component}
  </div>
</div>

      <div className="mt-auto flex justify-center items-center p-2 bg-green-700 hover:bg-green-900 rounded-md cursor-pointer">
        <button onClick={handlePayment} className="text-white">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentOption;
