import React, { useContext, useRef, useState } from 'react';
import MyInput from './common/MyInput'; // Assuming you have a MyInput component
import { MdOutlineSwapHoriz, MdOutlineSwapVert } from 'react-icons/md';
import { ThemeContext } from '../context/context';
import {cities} from './common/data'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const {language } =useContext(ThemeContext)
  const navigate = useNavigate();


//Date picker show on click on div
const [startDate, setStartDate] = useState(new Date());


  //Swap two value of input tag
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const SwapInputSearch = () => {
    setFrom(to);
    setTo(from);
  };

  //Navigate to Bus Listing Page after finding the result
  const handleSearch = () => {
    const fromCity = encodeURIComponent(from);
    const toCity = encodeURIComponent(to);
    const departDate = startDate.toISOString().split('T')[0]; // Format the date as YYYY-MM-DD
    const searchParams = new URLSearchParams({
      fromCity,
      toCity,
      departDate,
      returnDate: '',
      mode: 'oneway',
    }).toString();
    navigate(`/search?${searchParams}`);
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/roadmountain.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-5 flex flex-col items-center justify-center h-full text-white p-4">
        {/* <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Book Your <span className="text-primary font-extrabold p-2">Bus</span>
          Journey
        </h1> */}
        {language === "en" ? (
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 h1-slide h1-1">
            Book Your{" "}
            <span className="text-primary font-extrabold p-2">Bus</span>
            Journey
          </h1>
        ) : (
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 h1-slide h1-1">
            अपनी बस
            <span className="text-primary font-extrabold p-2">यात्रा</span>
            बुक करें
          </h1>
        )}

        {/* <h1 className="text-4xl lg:text-6xl font-bold mb-4 h1-slide h1-2">
            Easy <span className="text-primary font-extrabold p-2">Bus</span>
            Booking
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 h1-slide h1-3">
            Affordable <span className="text-primary font-extrabold p-2">Bus</span>
            Travel
          </h1> */}

        <p className="text-xl lg:text-2xl mb-8 text-writing">
          {language === "en"
            ? "Fast, Easy, and Affordable"
            : "तेज़, आसान और किफायती"}
        </p>
        <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center bg-white p-4 rounded-md shadow-lg">
          <div className="w-full lg:w-auto mb-4 lg:mb-0 lg:mr-2">
            <MyInput
              placeholder={language === "en" ? "From" : "से"}
              staticDataCity={cities}
              value={from}
              onChange={setFrom}
            />
          </div>
          <div className="mb-4 lg:mb-0 lg:mr-2">
            <button
              onClick={SwapInputSearch}
              className="hidden lg:block bg-gray-200 rounded-full p-2"
            >
              <MdOutlineSwapHoriz className="w-8 h-8 text-green-500 hover:text-green-900 font-bold" />
            </button>
            <button
              onClick={SwapInputSearch}
              className="block lg:hidden bg-green-100 hover:bg-green-400 rounded-full p-2  "
            >
              <MdOutlineSwapVert className="w-8 h-8 text-green-500 hover:text-green-900 font-bold" />
            </button>
          </div>
          <div className="w-full lg:w-auto mb-4 lg:mb-0 lg:mr-2">
            <MyInput
              placeholder={language === "en" ? "To" : "तक"}
              staticDataCity={cities}
              value={to}
              onChange={setTo}
            />
          </div>
          <div
            className="w-full lg:w-auto mb-4 lg:mb-0 lg:mr-2"
          >
            <input
              type="date"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            />
            {/* <DatePicker
              // ref={datepickerRef}
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()} 
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            /> */}
          </div>
          <button onClick={handleSearch} className="w-full lg:w-auto px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700">
            {language === "en" ? "Search Bus" : "बस खोजें"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
