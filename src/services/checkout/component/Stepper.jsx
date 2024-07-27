
import React, { useState } from 'react';
import TravellersDetails from './TravellersDetails';
import PayeeDiscountDetails from './PayeeDiscountDetails';
import PaymentOption from './PaymentOption';


const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: 'Traveller Details' },
    { id: 2, title: 'Payee & Discount Details' },
    { id: 3, title: 'Payment Options' },
  ];

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <div className="w-full  mx-auto  p-4 bg-gray-100 rounded-md">
      <div className="mb-4 overflow-x-auto ">
        <ul className="flex justify-between">
          {steps.map((step, index) => (
            <li key={step.id} className="flex-1 min-w-0">
              <div className={`text-center py-2 px-4 rounded-md truncate ${currentStep === step.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                {step.title}
              </div>
              {/* {index < steps.length - 1 && (
                <div className="border-t-4 border-green-200 flex-grow"></div>
              )} */}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4  bg-white rounded-md shadow-md h-full min-h-96 overflow-y-auto">
        {currentStep === 1 && <div><TravellersDetails/></div>}
        {currentStep === 2 && <div><PayeeDiscountDetails/></div>}
        {currentStep === 3 && <div><PaymentOption/></div>}
      </div>
      <div className="mt-4 flex justify-between">
        <button title='Previous' onClick={prevStep} className={`py-2 px-4 rounded-md ${currentStep === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-primary text-white'}`} disabled={currentStep === 1}>
          Previous
        </button>
        <button title='Next' onClick={nextStep} className={`py-2 px-4 rounded-md ${currentStep === steps.length ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-primary text-white'}`} disabled={currentStep === steps.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
