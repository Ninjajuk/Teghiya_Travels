import React, { useState } from "react";

const MyInput = ({ placeholder = "", staticDataCity, value, onChange }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    setShowSuggestions(true);
    onChange(e.target.value);
  };

  const handleselectInput = (item) => {
    onChange(item);
    setShowSuggestions(false);
  };

  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="bg-yellow-200">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const matchingCities = staticDataCity.filter((city) =>
    city.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          className={`w-full  bg-gray-50 border  border-gray-800 text-gray-900 text-sm rounded-md shadow-md focus:outline-none focus:ring-green-800 focus:border-green-800 p-2.5`}
        />
        {showSuggestions && (
          <div className="absolute top-12  w-full h-40 z-10 bg-white rounded-md shadow-md overflow-y-auto">
            <ul className="px-4 py-2">
              {matchingCities.length > 0 ? (
                matchingCities.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleselectInput(item)}
                    className=" px-4 py-1 text-gray-600  hover:bg-gray-200 rounded-md cursor-pointer"
                  >
                    {highlightText(item, value)}
                  </li>
                ))
              ) : (
                <li className="px-4 py-1 text-gray-600">Not Found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default MyInput;