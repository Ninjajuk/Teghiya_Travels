import React, { useState } from "react";
import TravellersDetails from "./TravellersDetails";
import PayeeDiscountDetails from "./PayeeDiscountDetails";
import PaymentOption from "./PaymentOption";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState({});

  const steps = [
    { id: 1, title: "1.Traveller Details" },
    { id: 2, title: "2.Payee & Discount Details" },
    { id: 3, title: "3.Payment Options" },
  ];

  const nextStep = () => {
    setCompletedSteps((prev) => ({ ...prev, [currentStep]: true }));
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length));
  };

  const goToStep = (stepId) => {
    setCurrentStep(stepId);
  };

  return (
    <div className="w-full h-full flex flex-col mx-auto p-4 bg-gray-100 rounded-md">
      <div className="flex justify-between items-center mb-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex-1 flex flex-col items-center">
            <div
              onClick={() => goToStep(step.id)}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full cursor-pointer mb-2 ${
                currentStep === step.id
                  ? "bg-blue-500 text-white"
                  : completedSteps[step.id]
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {completedSteps[step.id] && currentStep !== step.id ? (
                <span className="text-xl">&#10003;</span> // Checkmark
              ) : (
                <span>{step.id}</span>
              )}
            </div>
            <div
              onClick={() => goToStep(step.id)}
              className={` text-center cursor-pointer truncate text-xs sm:text-base break-words ${
                currentStep === step.id || completedSteps[step.id]
                  ? "text-blue-500 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {step.title}
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 w-full bg-gray-300 mx-4">
                <div
                  className={`h-1 ${
                    completedSteps[step.id]
                      ? "bg-green-500"
                      : currentStep === step.id
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="h-full lg:flex-grow p-4 bg-white rounded-md shadow-md overflow-y-auto">
        {currentStep === 1 && (
          <div className="w-full h-full">
            <TravellersDetails onClick={nextStep} />
          </div>
        )}
        {currentStep === 2 && (
          <div className="w-full h-full">
            <PayeeDiscountDetails onClick={nextStep} />
          </div>
        )}
        {currentStep === 3 && (
          <div className="w-full h-full">
            <PaymentOption />
          </div>
        )}
      </div>
    </div>
  );
};

export default Stepper;
