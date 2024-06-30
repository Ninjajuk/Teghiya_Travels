import React, { useContext } from 'react';
import MyInput from './common/MyInput'; // Assuming you have a MyInput component
import { MdOutlineSwapHoriz, MdOutlineSwapVert } from 'react-icons/md';
import { ThemeContext } from '../context/context';
'अपनी बस यात्रा बुक करें'
const Hero = () => {
  const {language } =useContext(ThemeContext)
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
         {language==='en'? 'Fast, Easy, and Affordable':'तेज़, आसान और किफायती'}
        </p>
        <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center bg-white p-4 rounded-md shadow-lg">
          <div className="w-full lg:w-auto mb-4 lg:mb-0 lg:mr-2">
            <MyInput placeholder={language==='en'?'From':'से' }/>
          </div>
          <div className="mb-4 lg:mb-0 lg:mr-2">
            <button
              // onClick={handleSwap}
              className="hidden lg:block bg-gray-200 rounded-full p-2"
            >
              <MdOutlineSwapHoriz className="w-8 h-8 text-green-700 hover:text-green-900 font-bold" />
            </button>
            <button
              // onClick={handleSwap}
              className="block lg:hidden bg-green-100 hover:bg-green-400 rounded-full p-2  "
            >
              <MdOutlineSwapVert className="w-8 h-8 text-green-500 hover:text-green-900 font-bold" />
            </button>
          </div>
          <div className="w-full lg:w-auto mb-4 lg:mb-0 lg:mr-2">
            <MyInput placeholder={language==='en'?"To":'तक' }/>
          </div>
          <div className="w-full lg:w-auto mb-4 lg:mb-0 lg:mr-2">
            <input
              type="date"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            />
          </div>
          <button className="w-full lg:w-auto px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700">
            {language==='en'?'Search Bus':'बस खोजें'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
