import React, { useContext, useRef, useState } from "react";
import useClickOutside from "../customhooks/useClickOutside";
import {
  FaAlignJustify,
  FaAngleDown,
  FaAngleUp,
  FaTimes,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/context";

const Navbar = ({ handleLoginModal }) => {
  const [opensubmenu, setOpensubmenu] = useState(false);
  const [mobilemenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme, language, toggleLanguage } =
    useContext(ThemeContext);

  const handlemobilemenuOpen = () => {
    setMobileMenu(!mobilemenu);
  };

  const menuRef = useRef(null);

  const closeSubmenu = () => {
    setOpensubmenu(false);
  };

  useClickOutside(menuRef, closeSubmenu);
  const submenu = () => {
    return (
      <ul className="bg-white border border-gray-300 rounded-md shadow-lg mt-2 p-2">
        <li className="p-2 hover:bg-gray-200 cursor-pointer rounded-md ">
          <a href="/mybooking">My Booking</a>
        </li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer rounded-md">
          Phone Booking
        </li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer rounded-md">
          Email 
        </li>
      </ul>
    );
  };
  const [logmodal, setLogModal] = useState(false);

  const handelLogin = () => {
    // alert('Login Clciked')
    setLogModal(!logmodal);
  };
  return (
    <>
      <nav
        className={` sticky top-0 scroll-smooth z-10 flex items-center justify-between  shadow-lg  h-[4rem] lg:px-[10rem] app-container ${
          theme === "light" ? "bg-themeLight text-gray-600" : "bg-[#000]"
        }`}
      >
        <div
          onClick={() => navigate("/")}
          className="w-full max-w-xs lg:max-w-sm cursor-pointer"
        >
          <h1
            className={`px-2 text-lg lg:text-2xl font-bold ${
              theme === "light" ? "text-primary" : "text-white"
            }  leading- lg:leading-8 truncate`}
          >
            {/* Teghiya Travels */}{" "}
            {language === "en" ? "Teghiya Travels" : "तेघिया ट्रैवल्स"}
          </h1>
        </div>
        <div onClick={handlemobilemenuOpen} className="px-2 cursor-pointer">
          <FaAlignJustify className=" justify-end lg:hidden w-6 h-6 text-primary" />
        </div>

        {mobilemenu && (
          <div
          className={`absolute flex flex-col top-[4rem] left-0 h-[calc(100vh-4rem)] bg-gray-100  overflow-y-auto 
            ${mobilemenu ? "translate-x-0 w-64" : "-translate-x-full w-0"}
            `}
          >
            <div className="flex-grow ">
              <div className="w-full flex items-center pl-6">
                {/* <div className="w-24 h-10 ">
                      <img
                        src="/pangateng-tso-lake.jpg"
                        className="w-full h-full object-cover object-center"
                      />
                    </div> */}
                <h1 className="px-2 text-lg lg:text-2xl font-bold font-serif text-primary leading-5 lg:leading-8 truncate">
                  Welcome!
                </h1>

                <div
                  onClick={handlemobilemenuOpen}
                  className="ml-auto cursor-pointer text-red-600 hover:text-red-800   "
                >
                  <FaTimes className="w-8 h-8 p-2 bg-red-200  rounded-full" />
                </div>
              </div>

              <ul className="p-4 ">
                <li className="hover:bg-gray-100 transition duration-500 hover:text-primary tracking-wider font-serif text-gray-600 px-4 py-2 rounded-md">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-primary" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="hover:bg-gray-100 hover:text-primary tracking-wider font-serif text-gray-600 px-4 py-2 rounded-md truncate">
                  <NavLink
                    to="/mybooking"
                    className={({ isActive }) =>
                      `block truncate ${isActive ? "text-primary" : ""}`
                    }
                    // className=" "
                  >
                    Manage Booking
                  </NavLink>
                </li>
                <li className="hover:bg-gray-100 hover:text-primary tracking-wider font-serif text-gray-600 px-4 py-2 rounded-md">
                  <NavLink to="/services" className="block ">
                    Print Ticket
                  </NavLink>
                </li>
                <li className="hover:bg-gray-100 hover:text-primary tracking-wider font-serif text-gray-600 px-4 py-2 rounded-md">
                  <NavLink to="/services" className="block ">
                    Email/SMS
                  </NavLink>
                </li>
                <li className="hover:bg-gray-100 hover:text-primary tracking-wider font-serif  px-4 py-2 rounded-md">
                  <NavLink
                    to="/cancellation"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : "text-gray-600"
                    }
                  >
                    Cancellation
                  </NavLink>
                </li>
                <li className="hover:bg-gray-100 hover:text-primary tracking-wider font-serif text-gray-600 px-4 py-2 rounded-md">
                  <NavLink to="/contact-us" className="block ">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div
              onClick={() => handelLogin()}
              className="flex items-center  h-12   mt-auto  p-4 cursor-pointer text-gray-600  font-serif "
            >
              {/* <div>
                    <FaSignInAlt className='w-4 h-4'/>
                  </div> */}
              <div className="w-full px-4 py-2 hover:bg-gray-200 rounded-md">
                <h1>Account</h1>
              </div>
            </div>
          </div>
        )}

        <div
          className={`hidden lg:flex relative  space-x-4 text-gray-600 ${
            theme === "light" ? "text-gray-600" : "text-white"
          }`}
          ref={menuRef}
        >
          <a
            onClick={() => setOpensubmenu(!opensubmenu)}
            className=" flex items-center hover:bg-gray-200 hover:text-primary p-2 rounded-md truncate cursor-pointer"
          >
            <span className="truncate">
              {language === "en" ? "Manage Booking" : "बुकिंग प्रबंधित करें"}
            </span>
            <span className="ml-2">
              {opensubmenu ? (
                <FaAngleUp className="w-6 h-6" />
              ) : (
                <FaAngleDown className="w-6 h-6" />
              )}
            </span>
          </a>
          {opensubmenu && (
            <div className="max-w-48 absolute left-0 top-full  z-10">
              {submenu()}
            </div>
          )}
          <NavLink
            to="/cancellation"
            className={({ isActive }) =>
              `flex items-center hover:bg-gray-200 hover:text-primary p-2 rounded-md transition duration-500 ease-in-out  ${
                isActive
                  ? "text-primary ring-1 ring-primary "
                  : theme === "dark"
                  ? "text-white"
                  : "text-gray-600"
              }`
            }
            // className="flex items-center hover:bg-gray-200 hover:text-primary p-2 rounded-md"
          >
            {language === "en" ? "Cancellation" : "रद्द करना"}
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `flex items-center hover:bg-gray-200 hover:text-primary p-2 rounded-md truncate transition duration-500 ease-in-out transform hover:scale-105 ${
                isActive
                  ? "text-primary ring-1 ring-primary "
                  : theme === "dark"
                  ? "text-white"
                  : "text-gray-600"
              }`
            }
          >
            {language === "en" ? "Contact Us" : "संपर्क करें"}
          </NavLink>
          <a
            onClick={() => handleLoginModal()}
            className="flex items-center hover:bg-gray-200 hover:text-primary p-2 rounded-md cursor-pointer transition duration-500 ease-in-out hover:scale-105"
          >
            {language === "en" ? "Login" : "खाता"}
          </a>
          <div
            onClick={() => toggleTheme()}
            className="flex items-center cursor-pointer "
          >
            {theme === "light" ? (
              <span className="hover:bg-gray-200 hover:text-primary rounded-full p-2">
                <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                    class="fill-purple-800/20"
                  ></path>
                  <path
                    d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                    class="fill-primary"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                    class="fill-primary"
                  ></path>
                </svg>
              </span>
            ) : (
              <span
                span
                className="hover:bg-gray-200 hover:text-primary rounded-full p-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6"
                >
                  <path
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    class="fill-primary stroke-primary"
                  ></path>
                  <path
                    d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                    class="stroke-primary"
                  ></path>
                </svg>
              </span>
            )}
          </div>
          <div onClick={() => toggleLanguage()} className="cursor-pointer">
            {language === "en" ? "हिंदी" : "English"}
          </div>
          {/* <p>Account</p> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
