import React, { useContext } from 'react';
import { ThemeContext } from '../context/context';


const SpecialBookingSection = () => {
  const {language}=useContext(ThemeContext)
  return (
    <div className="bg-gray-100 py-16 lg:px-[10rem]">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 ">
          <div className="w-full h-auto max-w-md">
          <svg width="300" height="150" xmlns="http://www.w3.org/2000/svg">
  {/* <!-- Bus body --> */}
  <rect x="10" y="30" width="280" height="70" fill="#FFD700" stroke="black" stroke-width="2"/>
{/*   
  <!-- Bus roof --> */}
  <rect x="10" y="20" width="280" height="10" fill="#FFD700" stroke="black" stroke-width="2"/>
  
  {/* <!-- Bus windows --> */}
  <rect x="20" y="40" width="40" height="30" fill="white" stroke="black" stroke-width="1"/>
  <rect x="70" y="40" width="40" height="30" fill="white" stroke="black" stroke-width="1"/>
  <rect x="120" y="40" width="40" height="30" fill="white" stroke="black" stroke-width="1"/>
  <rect x="170" y="40" width="40" height="30" fill="white" stroke="black" stroke-width="1"/>
  <rect x="220" y="40" width="40" height="30" fill="white" stroke="black" stroke-width="1"/>
  
  {/* <!-- Bus door --> */}
  <rect x="270" y="30" width="20" height="70" fill="#87CEEB" stroke="black" stroke-width="2"/>
  
  {/* <!-- Bus wheels --> */}
  <circle cx="60" cy="110" r="15" fill="black"/>
  <circle cx="240" cy="110" r="15" fill="black"/>
  
  {/* <!-- Bus details --> */}
  <line x1="10" y1="60" x2="290" y2="60" stroke="black" stroke-width="1"/>
  <rect x="50" y="30" width="10" height="20" fill="#FFD700" stroke="black" stroke-width="1"/>
  <rect x="240" y="30" width="10" height="20" fill="#FFD700" stroke="black" stroke-width="1"/>
</svg>

          </div>
        </div>
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">{language==='en'?'Now, Get More Than Just Bus Tickets with Our Service!':'अब, हमारी बस टिकटों की सेवा के अलावा और भी बहुत कुछ प्राप्त करें!!'}</h2>
          <p className="text-lg lg:text-xl text-gray-600 mb-8">
            Plan and organize your special events in advance. Ensure everything done in comfort and style.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-8">
            <li>Catering Services for Marriage</li>
            <li>Pandals Services for Marriage</li>
            <li>Gifts Services for Marriage</li>
          </ul>
          {/* <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-700">
            Book Bus Tickets
          </button> */}
        </div>

      </div>
    </div>
  );
};

export default SpecialBookingSection;
