import React, { useState, useEffect } from "react";
import { FaBusAlt } from "react-icons/fa";
import {
  MdOutlineDashboard,
  MdLogout,
  MdOutlineStarOutline,
  MdRestaurant,
} from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import {
  FaAngleLeft,
  FaAngleRight,
  FaBuilding,
  FaShoppingCart,
} from "react-icons/fa";
import { BiHome } from "react-icons/bi";

const SidebarMenu = () => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    {
      name: "Corporate Site",
      link: "/dashboard/corporate-website",
      icon: FaBuilding, // Or MdBusiness, AiOutlineGlobal, FiGlobe
    },
    {
      name: "Bus Booking",
      link: "/dashboard/vehicle-management",
      icon: FaBusAlt,
      subMenu: [
        { name: "Add Vehicle", link: "/dashboard/vehicle-management/add" },
        { name: "View Vehicles", link: "/dashboard/vehicle-management/view" },
        {
          name: "Vehicle Reports",
          link: "/dashboard/vehicle-management/reports",
        },
      ],
    },
    { name: "Ecom", link: "/admin/ecom", icon: FiShoppingCart },
    { name: "Catering", link: "/admin/catering", icon: MdRestaurant },
    { name: "Pandals", link: "/admin/catering", icon: MdOutlineStarOutline },
    { name: "Customer", link: "/admin/customers", icon: AiOutlineUser },
    // { name: "messages", link: "/", icon: FiMessageSquare },
    // { name: "analytics", link: "/", icon: TbReportAnalytics },
    // { name: "analytics", link: "/", icon: TbReportAnalytics },
    // { name: "analytics", link: "/", icon: TbReportAnalytics },
    // { name: "analytics", link: "/", icon: TbReportAnalytics },
    // { name: "analytics", link: "/", icon: TbReportAnalytics },
    // { name: "analytics", link: "/", icon: TbReportAnalytics },
    // { name: "analytics", link: "/", icon: TbReportAnalytics },
    // { name: "analytics", link: "/", icon: TbReportAnalytics },
    { name: "File Manager", link: "/", icon: FiFolder },
    // { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "User", link: "/admin/user", icon: AiOutlineUserAdd },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [open, setOpen] = useState(true);

  return (
    <section className="hidden lg:flex relative ">
      {/* Sidebar starts here bg-[#0e0e0e]*/}
      <div
        className={`bg-primary min-h-screen       ${
          open ? "w-48" : "w-16 "
        } duration-500  `}
      >
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-16 bg-gray-50 ">
            <div className="w-full h-full px-4 flex items-center text-sm gap-3.5 font-medium   cursor-pointer">
              <span>
                <BiHome className="h-6 w-6" />
              </span>
              <h1
                className={`whitespace-pre duration-500 p-2 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Teghiya
              </h1>
            </div>
          </div>

          <div className={`flex-grow h-0 px-4 bg-gray-50 `}>
            <div className=" flex flex-col gap-4 relative z-10 ">
              {menus?.map((menu, i) => (
                <NavLink
                  to={menu?.link}
                  key={i}
                  className={({ isActive }) =>
                    `${menu?.margin ? "mt-5" : ""} ${
                      isActive ? "bg-gray-200" : ""
                    } group flex items-center text-sm gap-2 font-medium p-2 hover:bg-gray-200 rounded-md`
                  }
                >
                  <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48  bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    {menu?.name}
                  </h2>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="p-6 flex items-center bg-gray-100 cursor-pointer ">
            <MdLogout className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-2 z-10 flex items-center bg-gray-300 rounded-full w-6 h-6 p-2 ${
          open ? "left-48" : "left-16"
        }`}
      >
        {open ? (
          <FaAngleLeft
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <FaAngleRight
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
    </section>
  );
};

export default SidebarMenu;
