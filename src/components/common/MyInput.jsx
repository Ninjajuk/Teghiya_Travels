import React, { useState } from "react";

const MyInput = ({ placeholder = "", staticDataCity, value, onChange }) => {
  // const [inputVal,setInputval]=useState(value)
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);

  const handleInputChange = (e) => {
    setShowSuggestions(true);
    onChange(e.target.value);
    // console.log(inputVal)
    // if(value.length>=4){
    //     setShowSuggestions(true)
    // }
    // else{
    //     setShowSuggestions(false)
    // }
  };
  const handleselectInput = (item) => {
    onChange(item);
    // console.log(item)
    setShowSuggestions(false);
  };

  //Highlight the search field
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

  //to view the city that matches the query
  const matchingCities = staticDataCity.filter((city) =>
    city.toLowerCase().includes(value.toLowerCase())
  );

  //Show search city value based on the input
  const getSuggestion = () => {
    const filterCity = cities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
  };

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
        {/* {showSuggestions && (
          <ul className="absolute top-12 z-10 w-full min-w-48 max-h-40 overflow-y-auto  bg-white  p-4 rounded-md shadow-md">
            {staticDataCity.map((item,index) => (
            <li 
            key={index}
            onClick={()=>handleselectInput(item)}
            className="space-x-2 text-gray-600 py-2 px-2 hover:bg-gray-200 rounded-md cursor-pointer">
              {item}
            </li>
            ))}
          </ul>
        )} */}
        {showSuggestions && (
          <div className="absolute top-12  w-full h-40 z-10 bg-white rounded-md shadow-md overflow-y-auto">
            <ul className="px-4 py-2">
              {matchingCities.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleselectInput(item)}
                  className=" px-4 py-1 text-gray-600  hover:bg-gray-200 rounded-md cursor-pointer"
                >
                  {highlightText(item, value)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default MyInput;
