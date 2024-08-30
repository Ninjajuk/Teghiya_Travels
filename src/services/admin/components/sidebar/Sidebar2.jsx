import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaBuilding, FaBusAlt } from "react-icons/fa";
import { FiShoppingCart, FiFolder } from "react-icons/fi";
import { MdRestaurant, MdOutlineStarOutline } from "react-icons/md";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { RiSettings4Line } from "react-icons/ri";

const menus = [
  { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
  {
    name: "Corporate Site",
    link: "/dashboard/corporate-website",
    icon: FaBuilding,
  },
  {
    name: "Vehicle Management",
    link: "/dashboard/vehicle-management",
    icon: FaBusAlt,
    subMenu: [
      {
        name: "Bus Manage",
        link: "/dashboard/vehicle-management/add",
        subMenu: [
          { name: "Add Vehicle", link: "/dashboard/vehicle-management/add" },
          { name: "View Vehicles", link: "/dashboard/vehicle-management/view" },
          {
            name: "Vehicle Reports",
            link: "/dashboard/vehicle-management/reports",
          },
        ],
      },
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
  { name: "File Manager", link: "/", icon: FiFolder },
  { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
  { name: "User", link: "/admin/user", icon: AiOutlineUserAdd },
  { name: "Setting", link: "/", icon: RiSettings4Line },
];

const Sidebar2 = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSubSubMenu, setOpenSubSubMenu] = useState(null);

  const handleMenuToggle = (index) => {
    setOpenMenu(openMenu === index ? null : index);
    setOpenSubMenu(null); // Reset submenus
    setOpenSubSubMenu(null); // Reset sub-submenus
  };

  const handleSubMenuToggle = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
    setOpenSubSubMenu(null); // Reset sub-submenus
  };

  const handleSubSubMenuToggle = (index) => {
    setOpenSubSubMenu(openSubSubMenu === index ? null : index);
  };

  const renderSubMenu = (subMenu, parentIndex) => (
    <ul className="space-y-1 pl-6 mt-2 bg-gray-700 rounded-md">
      {subMenu.map((subItem, subIndex) => (
        <li key={subIndex} className="relative">
          <Link
            to={subItem.link}
            className="block p-3 hover:bg-gray-600 rounded-md flex items-center"
          >
            {subItem.name}
          </Link>
          {subItem.subMenu && (
            <>
              <button
                onClick={() => handleSubSubMenuToggle(subIndex)}
                className="absolute right-3 top-3 text-gray-400 hover:text-white"
              >
                {openSubSubMenu === subIndex ? "-" : "+"}
              </button>
              {openSubSubMenu === subIndex && (
                <ul className="space-y-1 pl-6 mt-2 bg-gray-600 rounded-md">
                  {subItem.subMenu.map((subSubItem, subSubIndex) => (
                    <li key={subSubIndex}>
                      <Link
                        to={subSubItem.link}
                        className="block p-3 hover:bg-gray-500 rounded-md"
                      >
                        {subSubItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-64 bg-gray-800 text-white h-screen overflow-y-auto">
      <ul className="space-y-2">
        {menus.map((item, index) => (
          <li key={index} className="relative">
            <Link
              to={item.link}
              className="flex items-center p-3 hover:bg-gray-700 rounded-md"
              onClick={() => item.subMenu && handleMenuToggle(index)}
            >
              <item.icon className="w-6 h-6 mr-3" />
              {item.name}
            </Link>
            {item.subMenu && openMenu === index && (
              <>
                <ul className="space-y-1 pl-6 mt-2 bg-gray-700 rounded-md">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="relative">
                      <Link
                        to={subItem.link}
                        className="block p-3 hover:bg-gray-600 rounded-md flex items-center"
                        onClick={() =>
                          subItem.subMenu && handleSubMenuToggle(subIndex)
                        }
                      >
                        {subItem.name}
                      </Link>
                      {subItem.subMenu &&
                        openSubMenu === subIndex &&
                        renderSubMenu(subItem.subMenu, subIndex)}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar2;
