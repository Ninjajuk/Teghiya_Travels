import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  MdOutlineDashboard,
  MdLogout,
  MdSubdirectoryArrowLeft,
} from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import NavbarQucikAction from "./Navbar";
import { FaAngleDown } from "react-icons/fa";
import { getallProducts } from "../API/productAPI";
import { socialiconsentiment } from "./data";

import FollowerStats from "./TopSummaryStats/FollowerStats";
import SentimentsScoreStats from "./TopSummaryStats/SentimentsScoreStats";
import SocialMediaSentimentalTimeline from "./TopSummaryStats/SocialmediaSentimentalTimeline";
import SentimentcategoryTimeline from "./TopSummaryStats/SentimentcategoryTimeline";
import ScatterLinePlot from "./charts/ScatterLinePlot ";

const AdminDash = () => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/", icon: AiOutlineUser },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
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

  const [data, setData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [uniqueCategories, setUniqueCategories] = useState([]);
  // const navigate=useNavigate()

  const handleFilter = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterSelect = (e) => {
    setSortBy(e.target.value);
  };
  useEffect(() => {
    async function getData() {
      try {
        const product = await getallProducts();
        setData(product);

        // Extract unique categories
        const categories = [...new Set(product.map((item) => item.category))];
        setUniqueCategories(categories);
      } catch (error) {
        console.log("Error in fetching data:", error);
      }
    }

    getData();
  }, [data]);
  return (
    <section className="flex ">
      {/* Sidebar starts here*/}
      <div
        className={`bg-[#0e0e0e] min-h-screen    ${
          open ? "w-48" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        {/* <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div> */}

        <div className="flex flex-col">
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
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
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
          <div className="mt-auto py-3 flex justify-end ">
            <MdLogout
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDash;
