// import React, { useContext, useState } from "react";
// import TypingEffect from "./common/TypingEffect";
// import { ThemeContext } from "../context/context";
// import WeddingBusBookingForm from "./form/WeddingFormBus";
// // import { ReactComponent as WeddingBusSvg } from './wedding-bus.svg';

// const WeddingVehicleBooking = () => {
//   const { language, theme } = useContext(ThemeContext);
//   const [weddingForm, setWeddingForm] = useState(false);
//   return (
//     <>
//       <div
//         className={` ${
//           theme === "light" ? "bg-white" : "bg-gray-950"
//         } py-16 lg:px-[10rem]`}
//       >
//         <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
//           <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
//             {/* <div  className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
//         <TypingEffect
//         texts={["Hello there!", "Now You Can Book for Your Wedding", "Exiciting !!"]}
//         typeSpeed={100}
//         backSpeed={60}
//         backDelay={2000}
//         loop={true}
//       />
// 'अब आप अपनी शादी के लिए पहले से बस बुक कर सकते हैं
//         </div> */}
//             {language === "en" ? (
//               <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 h1-slide">
//                 Now You Can Book a Vehicle for{" "}
//                 <span className="text-primary pl-1">Your Wedding</span> in
//                 Advance
//               </h2>
//             ) : (
//               <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 h1-slide">
//                 अब आप
//                 <span className="text-primary pl-1">अपनी शादी</span> के लिए पहले
//                 से बस बुक कर सकते हैं
//               </h2>
//             )}

//             <p className="text-lg lg:text-xl text-gray-600 mb-8">
//               {language === "en"
//                 ? "Make your special day even more memorable with our wedding bus booking service.Ensure your guests travel in comfort and style."
//                 : "हमारी विवाह बस बुकिंग सेवा के साथ अपने विशेष दिन को और भी यादगार बनाएं। सुनिश्चित करें कि आपके मेहमान आराम और स्टाइल से यात्रा करें।"}
//             </p>
//             <button
//               onClick={() => setWeddingForm(!weddingForm)}
//               className="px-6 py-3 bg-primary text-white rounded-md hover:bg-hoverPrimary transition-colors duration-300 ease-in-out"
//             >
//               {language === "en"
//                 ? " Search Your Vehcile"
//                 : "अपनी शादी की बस बुक करें"}
//             </button>
//             {/* <WeddingBusBookingForm /> */}
//           </div>
//           <div className="w-full lg:w-1/2 flex justify-center">
//             <div className="w-full h-auto max-w-md">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 64 64"
//                 class="icon icon-tabler icon-tabler-bus"
//                 fill="#000000"
//               >
//                 <path
//                   d="M2 12v32h6l4 8v4h4v-4h28v4h4v-4l4-8h6v-32z"
//                   fill="#f2a3b3"
//                 />
//                 <path d="M10 44v-26h16v26z" fill="#fff" />
//                 <path d="M38 44v-26h16v26z" fill="#fff" />
//                 <circle cx="12" cy="56" r="4" fill="#f50057" />
//                 <circle cx="52" cy="56" r="4" fill="#f50057" />
//               </svg>
//               {/* <img
//                 src="https://images.91trucks.com/buses/models/80/1701/tata-lp-909-starbus-665220249.jpg"
//                 alt="bus"
//               /> */}

//               {/* <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//   <defs>
//     <clipPath id="triangle-clip">
//       <path d="M0,200 L200,0 L200,200 Z" />
//     </clipPath>
//   </defs>
//   <rect width="200" height="200" fill="#f2a3b3" clip-path="url(#triangle-clip)" />
//   <g clip-path="url(#triangle-clip)">
//     <path d="M50 100 L150 100 L160 140 L40 140 Z" fill="#fff" stroke="#f50057" stroke-width="5" />
//     <rect x="60" y="110" width="30" height="20" fill="#f50057" />
//     <rect x="110" y="110" width="30" height="20" fill="#f50057" />
//     <circle cx="70" cy="140" r="10" fill="#f50057" />
//     <circle cx="130" cy="140" r="10" fill="#f50057" />
//   </g>
// </svg> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       {weddingForm && (
//         <WeddingBusBookingForm
//           weddingForm={weddingForm}
//           setWeddingForm={setWeddingForm}
//         />
//       )}
//     </>
//   );
// };

// export default WeddingVehicleBooking;

import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/context";
import WeddingBusBookingForm from "./form/WeddingFormBus";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const messages = [
  {
    name: "Catering Services",
    title: "Catering Services for Marriage",
    message:
      "A supportive and inclusive environment where you can explore your potential and achieve your personal best in all aspects of your life.",
    img: "https://new.caterninja.com/ninja-buffy/header/Frame%20770.webp",
    href: "",
  },
  {
    name: "Pandals Services",
    title: "Pandals Services for Marriage",
    message: "",
    img: "https://images.pexels.com/photos/169203/pexels-photo-169203.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "",
  },
  {
    name: "Gift Services",
    title: "Gift Services for Marriage",
    message: "Buy gifts for the couple.",
    img: "https://images.pexels.com/photos/169203/pexels-photo-169203.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "",
  },
];

const WeddingVehicleBooking = () => {
  const { language, theme } = useContext(ThemeContext);
  const [weddingForm, setWeddingForm] = useState(false);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const nextMessage = () => {
    setIndex((prev) => (prev + 1) % messages.length);
  };

  const prevMessage = () => {
    setIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  const handleNavigate = (msg) => {
    navigate(msg.href);
  };

  return (
    <>
      <div
        className={`${
          theme === "light" ? "bg-white" : "bg-gray-950"
        } py-16 lg:px-[10rem]`}
      >
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Text and Button */}
          <div className="flex flex-col justify-center space-y-6">
            <motion.h2
              className="text-3xl lg:text-5xl font-bold text-gray-800"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {language === "en" ? (
                <>
                  Now You Can Book a Vehicle for{" "}
                  <span className="text-primary pl-1">Your Wedding</span> in
                  Advance
                </>
              ) : (
                <>
                  अब आप
                  <span className="text-primary pl-1">अपनी शादी</span> के लिए पहले
                  से बस बुक कर सकते हैं
                </>
              )}
            </motion.h2>

            <motion.p
              className="text-lg lg:text-xl text-gray-600"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              {language === "en"
                ? "Make your special day even more memorable with our wedding bus booking service. Ensure your guests travel in comfort and style."
                : "हमारी विवाह बस बुकिंग सेवा के साथ अपने विशेष दिन को और भी यादगार बनाएं। सुनिश्चित करें कि आपके मेहमान आराम और स्टाइल से यात्रा करें।"}
            </motion.p>

            <motion.button
              onClick={() => setWeddingForm(!weddingForm)}
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-hoverPrimary transition-colors duration-300 ease-in-out w-fit"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {language === "en"
                ? "Search Your Vehicle"
                : "अपनी शादी की बस बुक करें"}
            </motion.button>
          </div>

          {/* Right Section - Carousel */}
          <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-xl bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="absolute inset-0 flex flex-col items-center justify-center p-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={messages[index].img}
                  alt={messages[index].name}
                  className="object-cover w-full h-full rounded-md border-1 border-purple-200 shadow-lg"
                />
                <h2 className="text-2xl font-bold text-primary mt-6">
                  {messages[index].name}
                </h2>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevMessage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
            >
              <FiChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextMessage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
            >
              <FiChevronRight size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Wedding Bus Booking Form with Animation */}
      <AnimatePresence>
        {weddingForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <WeddingBusBookingForm
              weddingForm={weddingForm}
              setWeddingForm={setWeddingForm}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WeddingVehicleBooking;