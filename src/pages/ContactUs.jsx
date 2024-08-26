import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const ContactUsPage = ({ handleLoginModal }) => {
  // useEffect(() => {
  //   document.title = 'Contact us - Teghiya Travels';
  // }, []);
  return (
    <>
      <Navbar handleLoginModal={handleLoginModal} />
      {/* <h1 className='text-red-900 font-bold text-3xl text-center py-8'>Contact Us Page</h1>
        <p className='py-12 text-center'>Call us <span className='text-primary font-extrabold'>+91-7542067763</span></p> */}
      <div
        className=" bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('/tbus1.jpg')`,
          height: "calc(100vh - 4rem)",
        }}
      >
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row">
          <div className="flex-1 p-6 ">
            <h2 className="text-2xl font-bold mb-4 text-center text-primary">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-gray-700">
                  <a href="tel:+197542067763">+91-7542067763</a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-gray-700">teghiyatravels@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Address</h3>
                <p className="text-gray-700">Delhi, India 110092</p>
              </div>
            </div>
          </div>
          <div className="flex-1 p-6 ">
            <h2 className="text-2xl font-bold mb-4 text-center text-primary">
              Contact Us
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary hover:bg-green-700 text-white font-bold rounded-md shadow-lg transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
