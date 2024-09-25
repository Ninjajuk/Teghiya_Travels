import React, { useContext } from 'react'
import { ThemeContext } from '../../context/context';

const UserProfile = () => {
  const {language}=useContext(ThemeContext)
  return (
    <div
      className="bg-gray-200 flex items-center justify-center  lg:px-[10rem]"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <div className=" relative  rounded-md shadow-md max-h-[24rem] h-full  w-full max-w-xl bg-white">
        <div className="h-full p-4 flex flex-col justify-between">
          <div>
            <h1 className="py-8">{language==='en'?'My Profile':'मेरी प्रोफाइल'}</h1>
            <h1 className=" font-extrabold text-2xl tracking-widest uppercase text-primary">
              {language==='en'?'Samsuddin Ansari':'समसुद्दीन अंसारी'}
            </h1>
          </div>

          <div className="px-4">
            {/* <h1 className="py-8 text-center text-xl text-gray-600 font-semibold">
              Contact Details
            </h1> */}
            <div class="flex items-center justify-center py-4">
              <div class="flex-grow border-t border-gray-300"></div>
              <span class="mx-4 py-8 text-center text-xl text-gray-600 font-semibold">{language==='en'?'CONTACT DETAILS':'सम्पर्क करने का विवरण'}</span>
              <div class="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex justify-between">
              <span>Email:- biosamsuddin@gmail.com</span>
              <span>Phone:- +91-7542067763</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 m-2 bg-green-400 rounded-md ">
          <button className="w-full p-2  ">Edit</button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile