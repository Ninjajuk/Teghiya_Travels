import React, { useState, useRef } from 'react';

const OTPForm = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
          {otp.map((data, index) => (
            <div key={index}>
              <label htmlFor={`code-${index + 1}`} className="sr-only">
                {`Code ${index + 1}`}
              </label>
              <input
                type="text"
                maxLength="1"
                id={`code-${index + 1}`}
                className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={data}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputs.current[index] = el)}
                required
              />
            </div>
          ))}
        </div>
        <p
          id="helper-text-explanation"
          className="my-2 text-sm text-gray-500 dark:text-gray-400"
        >
          Please fill the 6 digit code we sent via email.
        </p>
      </form>
    </div>
  );
};

export default OTPForm;
