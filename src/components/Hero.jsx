// import React, { useContext, useEffect, useRef, useState } from "react";
// import MyInput from "./common/MyInput"; // Assuming you have a MyInput component
// import { MdOutlineSwapHoriz, MdOutlineSwapVert } from "react-icons/md";
// import { ThemeContext } from "../context/context";
// import { cities } from "./common/data";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useNavigate } from "react-router-dom";


// const Hero = () => {
//   const { language, theme } = useContext(ThemeContext);

//   const navigate = useNavigate();

//   //Date picker show on click on div
//   // const [startDate, setStartDate] = useState(new Date());
//   const [startDate, setStartDate] = useState(null);

//   //Swap two value of input tag
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const SwapInputSearch = () => {
//     setFrom(to);
//     setTo(from);
//   };

//   //Navigate to Bus Listing Page after finding the result
//   const handleSearch = () => {
//     const fromCity = encodeURIComponent(from);
//     const toCity = encodeURIComponent(to);
//     const departDate = startDate.toISOString().split("T")[0]; // Format the date as YYYY-MM-DD
//     const searchParams = new URLSearchParams({
//       fromCity,
//       toCity,
//       departDate,
//       returnDate: "",
//       mode: "oneway",
//     }).toString();
//     console.log('departDate',)
//     navigate(`/search?${searchParams}`);
//   };


//   return (
//     <div
//       className="relative w-full h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url(/roadmountain.jpg)" }}
//     >
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="relative z-5 flex flex-col items-center justify-center h-full text-white p-4">

//         {language === "en" ? (
//           <h1 className="text-4xl lg:text-6xl font-bold mb-4 h1-slide h1-1">
//             Book Your{" "}
//             <span className="text-primary font-extrabold p-2">Bus</span>
//             Journey
//           </h1>
//         ) : (
//           <h1 className="text-4xl lg:text-6xl font-bold mb-4 h1-slide h1-1">
//             अपनी बस
//             <span className="text-primary font-extrabold p-2">यात्रा</span>
//             बुक करें
//           </h1>
//         )}


//         <p className="text-xl lg:text-2xl mb-8 text-writing">
//           {language === "en"
//             ? "Fast, Easy, and Affordable"
//             : "तेज़, आसान और किफायती"}
//         </p>
//         <div
//           className={`w-full lg:w-auto flex flex-col lg:flex-row items-center ${
//             theme === "light" ? "bg-white" : "bg-gray-950"
//           }  p-4 rounded-md shadow-lg`}
//         >
//           <div className="w-full lg:w-auto mb-4 lg:mb-0 lg:mr-2">
//             <MyInput
//               placeholder={language === "en" ? "From" : "से"}
//               staticDataCity={cities}
//               value={from}
//               onChange={setFrom}
//             />
//           </div>
//           <div className="mb-4 lg:mb-0 lg:mr-2">
//             <button
//               onClick={SwapInputSearch}
//               className="hidden lg:block bg-gray-200 rounded-full p-2"
//             >
//               <MdOutlineSwapHoriz className="w-8 h-8 text-green-500 hover:text-green-900 font-bold" />
//             </button>
//             <button
//               onClick={SwapInputSearch}
//               className="block lg:hidden bg-green-100 hover:bg-green-400 rounded-full p-2  "
//             >
//               <MdOutlineSwapVert className="w-8 h-8 text-green-500 hover:text-green-900 font-bold" />
//             </button>
//           </div>
//           <div className="w-full lg:w-auto mb-4 lg:mb-0 lg:mr-2">
//             <MyInput
//               placeholder={language === "en" ? "To" : "तक"}
//               staticDataCity={cities}
//               value={to}
//               onChange={setTo}
//             />
//           </div>
//           <div className="w-full lg:w-auto mb-4 lg:mb-0 lg:mr-2">
//             <DatePicker
//               selected={startDate}
//               onChange={(date) => setStartDate(date)}
//               minDate={new Date()}
//               placeholderText="Select a date"
//               className={`w-full  bg-gray-50 border  border-gray-800 text-gray-900 text-sm rounded-md shadow-md focus:outline-none focus:ring-green-800 focus:border-green-800 p-2.5`}
//             />
//           </div>
//           <button
//             onClick={handleSearch}
//             className="w-full lg:w-auto px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700"
//           >
//             {language === "en" ? "Search Bus" : "बस खोजें"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;  // older component


import React, { useContext, useEffect, useRef, useState } from "react";
import MyInput from "./common/MyInput"; // Assuming you have a MyInput component
import { MdOutlineSwapHoriz, MdOutlineSwapVert } from "react-icons/md";
import { ThemeContext } from "../context/context";
import { cities } from "./common/data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { language, theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  // State for date picker
  const [startDate, setStartDate] = useState(null);

  // State for "From" and "To" inputs
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // Swap "From" and "To" values
  const swapInputSearch = () => {
    setFrom(to);
    setTo(from);
  };

  // Handle search and navigate to the results page
  const handleSearch = () => {
    const fromCity = encodeURIComponent(from);
    const toCity = encodeURIComponent(to);
    const departDate = startDate.toISOString().split("T")[0]; // Format the date as YYYY-MM-DD
    const searchParams = new URLSearchParams({
      fromCity,
      toCity,
      departDate,
      returnDate: "",
      mode: "oneway",
    }).toString();
    navigate(`/search?${searchParams}`);
  };

  // Dynamic heading text with typing and 3D flip animation
  const headingTexts = [
    language === "en" ? "Book Your Bus Journey" : "अपनी बस यात्रा बुक करें",
    language === "en" ? "Easy Bus Booking" : "आसान बस बुकिंग",
    language === "en" ? "Affordable Bus Travel" : "किफायती बस यात्रा",
  ];
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 100; // Speed of typing animation in milliseconds
  const flipSpeed = 2000; // Speed of flip animation in milliseconds

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (currentIndex <= headingTexts[currentHeadingIndex].length) {
          setDisplayText(headingTexts[currentHeadingIndex].slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headingTexts.length);
            setIsTyping(true);
          }, flipSpeed);
        }
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentHeadingIndex, isTyping, language]);

  // 3D tilt effect for the search container
  const searchContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = searchContainerRef.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 20;
    const y = (clientY - top - height / 2) / 20;
    searchContainerRef.current.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    searchContainerRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url(/roadmountain.jpg)" }}
    >
      {/* Floating background animation */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 animate-float bg-cover bg-center" style={{ backgroundImage: "url(/roadmountain.jpg)" }}></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4">
        {/* Dynamic heading with typing and flip animation */}
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 text-center">
          <span className="text-primary inline-block animate-flip">{displayText}</span>
          <span className="text-primary font-extrabold animate-blink">|</span> {/* Cursor effect */}
        </h1>

        {/* Subheading */}
        <p className="text-purple-800 font-bold text-xl lg:text-2xl mb-8">
          {language === "en" ? "Fast, Easy, and Affordable" : "तेज़, आसान और किफायती"}
        </p>

        {/* Search container with 3D tilt effect */}
        <div
          ref={searchContainerRef}
          className={`w-full lg:w-auto flex flex-col lg:flex-row items-center ${
            theme === "light" ? "bg-white" : "bg-gray-950"
          } p-6 rounded-md shadow-2xl transform transition-transform duration-300`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* From input */}
          <div className="w-full lg:w-auto mb-4 lg:mb-0 lg:mr-2">
            <MyInput
              placeholder={language === "en" ? "From" : "से"}
              staticDataCity={cities}
              value={from}
              onChange={setFrom}
            />
          </div>

          {/* Swap button */}
          <div className="mb-4 lg:mb-0 lg:mr-2">
            <button
              onClick={swapInputSearch}
              className="hidden lg:block bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors"
            >
              <MdOutlineSwapHoriz className="w-8 h-8 text-green-500 hover:text-green-900" />
            </button>
            <button
              onClick={swapInputSearch}
              className="block lg:hidden bg-green-100 hover:bg-green-400 rounded-full p-2 transition-colors"
            >
              <MdOutlineSwapVert className="w-8 h-8 text-green-500 hover:text-green-900" />
            </button>
          </div>

          {/* To input */}
          <div className="w-full lg:w-auto mb-4 lg:mb-0 lg:mr-2">
            <MyInput
              placeholder={language === "en" ? "To" : "तक"}
              staticDataCity={cities}
              value={to}
              onChange={setTo}
            />
          </div>

          {/* Date picker */}
          <div className="w-full lg:w-auto mb-4 lg:mb-0 lg:mr-2">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              placeholderText="Select a date"
              className={`w-full bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-md shadow-md focus:outline-none focus:ring-green-800 focus:border-green-800 p-2.5`}
            />
          </div>

          {/* Search button */}
          <button
            onClick={handleSearch}
            className="w-full lg:w-auto px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {language === "en" ? "Search Bus" : "बस खोजें"}
          </button>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes flip {
          0% {
            transform: rotateX(0deg);
          }
          50% {
            transform: rotateX(90deg);
          }
          100% {
            transform: rotateX(0deg);
          }
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-flip {
          animation: flip 2s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;