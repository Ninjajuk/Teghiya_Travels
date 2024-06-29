import React from 'react'
import Navbar from '../components/Navbar';

const MyProfile = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-gray-200 flex items-center justify-center  lg:px-[10rem]"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className=" relative  rounded-md shadow-md h-full max-h-72  w-full max-w-xl bg-white">
          <div className="h-full p-4 flex flex-col justify-between">
            <div>
              <h1 className="py-8">My Profile</h1>
              <h1 className=" font-extrabold text-2xl tracking-widest uppercase text-primary">Samsuddin Ansari</h1>
            </div>

            <div className='px-4'>
              <h1 className="py-8 text-center text-xl text-gray-600 font-semibold">Contact Details</h1>
              <div className='flex justify-between'>
                <span>Email:- biosamsuddin@gmail.com</span>
                <span>Phone:- +91-7542067763</span>
              </div>
            </div>
          </div>
          <div className='absolute top-0 right-0 m-2 bg-green-400 rounded-md '>
            <button className='w-full p-2  '>Edit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile