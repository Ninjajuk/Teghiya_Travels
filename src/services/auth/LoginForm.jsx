
import React, { useRef, useState } from "react";


import { MdOutlineClear } from "react-icons/md";
import OTPForm from "./OTPForm";
// import useClickOutside from "./customhooks/useClickOutside";


const LoginForm = ({onClick,closeLoginModal}) => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const [OTP, setOTP] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    // login logic 
    // console.log(phone)
    setOTP(phone)
  };





  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 "
    >
      <div className="  flex justify-center items-center relative    max-w-md   overflow-y-auto min-h-64">
        <div
          onClick={() => closeLoginModal()}
          className="absolute top-0 right-0 cursor-pointer text-red-600 hover:text-red-800 bg-gray-200 "
        >
          <MdOutlineClear className="w-8 h-8 rounded-full " />
        </div>
        <form
          className="bg-white p-6 rounded-md  shadow-md w-full  "
          onSubmit={handleLogin}
        >
          <h2 className="text-2xl font-semibold my-6">
            Sign in to
            <span className="text-primary font-bold  tracking-wider">
              Teghiya Travels
            </span>
          </h2>
          {OTP ? (
            <>
              <h1 className="py-4">
                OTP Sent to <span className="ml-2 text-sky-800">{phone}</span>
              </h1>
              <OTPForm />
              <button
                type="submit"
                disabled={phone.length < 10}
                className={`w-full text-white rounded-lg py-2 transition duration-300 border ${
                  phone.length < 10
                    ? "bg-gray-200 border-gray-200 cursor-not-allowed"
                    : "bg-[#ed3237] border-[#ed3237] hover:bg-[#e74f5b]"
                }`}
              >
                {loading ? "Loadind..." : "Verify OTP"}
              </button>
            </>
          ) : (
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-600">
                Phone
              </label>
              <div className="flex items-center border border-gray-300 rounded px-3  mt-2 mb-4 focus-within:border-blue-400">
                <span className="text-gray-600 mr-2">+91</span>
                <input
                  type="tel"
                  id="phone"
                  className="w-full focus:outline-none py-2"
                  placeholder="Enter your phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              {/* <p className="text-red-800 text-x ">Error</p> */}
              <button
                type="submit"
                disabled={phone.length < 10}
                className={`w-full text-white rounded-lg py-2 transition duration-300 border ${
                  phone.length < 10
                    ? "bg-gray-200 border-gray-200 cursor-not-allowed"
                    : "bg-[#ed3237] border-[#ed3237] hover:bg-[#e74f5b]"
                }`}
              >
                {OTP ? "Loading..." : "Generate OTP"}
              </button>
            </div>
          )}



          <div className="mt-4 flex justify-between items-center">
            <div className="border-t border-gray-400 flex-grow"></div>
            <p className="mx-2 text-gray-500">Or continue with</p>
            <div className="border-t border-gray-400 flex-grow"></div>
          </div>
          <div className="flex items-center my-4 text-center gap-4 bg-white rounded-md shadow-md border-2 border-blue-600 cursor-pointer">
            <div className="w-6 h-6 ml-2">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                class="LgbsSe-Bz112c"
              >
                <g>
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
            </div>
            <div className="flex-grow w-full bg-blue-600 text-white   border-2 border-blue-600">
              <button
                onClick={handleLogin}
                className="py-2  transition duration-300 "
              >
                Sign in with Google
              </button>
            </div>
          </div>

          {/* <div className="flex items-center my-4 text-center gap-4 bg-white rounded-md shadow-md border-2 border-blue-600 cursor-pointer">
            <div className="w-6 h-6 ml-2">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                class="LgbsSe-Bz112c"
              >
                <g>
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
            </div>
            <div className="flex-grow w-full bg-blue-600 text-white   border-2 border-blue-600">
              <button
                onClick={handleLogin}
                className="py-2  transition duration-300 "
              >
                Facebook
              </button>
            </div>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
