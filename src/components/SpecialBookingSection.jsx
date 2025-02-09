// import React, { useContext, useState } from "react";
// import { ThemeContext } from "../context/context";
// import { useNavigate } from "react-router-dom";
// const messages = [
//   {
//       name: "Dr. John Doe",
//       title: "Principal, Sacred Heart Secondary School",
//       message:
//           "The School aims to create a supportive and inclusive environment where every student is encouraged to explore their potential and achieve their personal best in all aspects of their life.",
//       img: "https://www.donboscohsdiphu.in/Images/principal.jpg",
//       href: "/principal-message",
//   },
//   {
//       name: "Ms. Jane Smith",
//       title: "Headmistress, Sacred Heart Secondary School",
//       message:
//           "Our goal at XYZ School is to create a nurturing environment where students feel valued and empowered. Education is a lifelong journey, and we strive to make it as enriching and inspiring as possible.",
//       img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       href: "/headmistress-message",
//   },
// ];
// const SpecialBookingSection = () => {
//   const { language, theme } = useContext(ThemeContext);
//   const [index, setIndex] = useState(0);
//   const navigate = useNavigate();

//   const nextMessage = () => {
//       setIndex((prev) => (prev + 1) % messages.length);
//   };

//   const prevMessage = () => {
//       setIndex((prev) => (prev - 1 + messages.length) % messages.length);
//   };

//   const handleNavigate = (msg) => {
//       navigate(msg.href);
//   };
//   return (
//     <div
//       className={`${
//         theme === "light" ? "bg-gray-100" : "bg-gray-950"
//       }  py-16 lg:px-[10rem]`}
//     >
//       <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
//         <div className="w-full lg:w-1/2 ">
//           <div className="w-full h-auto max-w-md">
          
//             <img
//               src="https://images.91trucks.com/buses/models/80/1701/tata-lp-909-starbus-665220249.jpg"
//               alt="bus"
//             />
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
//           <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
//             {language === "en"
//               ? "Now, Get More Than Just Bus Tickets with Our Service!"
//               : "अब, हमारी बस टिकटों की सेवा के अलावा और भी बहुत कुछ प्राप्त करें!!"}
//           </h2>
//           <p className="text-lg lg:text-xl text-gray-600 mb-8">
//             Plan and organize your special events in advance. Ensure everything
//             done in comfort and style.
//           </p>
//           <ul className="list-disc list-inside text-gray-600 mb-8">
//             <li>Catering Services for Marriage</li>
//             <li>Pandals Services for Marriage</li>
//             <li>Gifts Services for Marriage</li>
//           </ul>
//           {/* <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-700">
//             Book Bus Tickets
//           </button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpecialBookingSection;



import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { AnimatePresence,motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const messages = [
  {
      name: "Catering Services",
      title: "Catering Services for Marriage",
      message:
          "a supportive and inclusive environment where explore their potential and achieve their personal best in all aspects of their life.",
      img: "https://new.caterninja.com/ninja-buffy/header/Frame%20770.webp",
      href: "",
  },
  {
      name: "Pandals Services",
      title: "Pandals Services for Marriage",
      message:
          "",
      img: "https://images.pexels.com/photos/169203/pexels-photo-169203.jpeg?auto=compress&cs=tinysrgb&w=600",
      href: "",
  },
  {
    name: "Gift  Services",
    title: "Gift Services for Marriage",
    message:
        "Buy gift foe the couple",
    img: "https://images.pexels.com/photos/169203/pexels-photo-169203.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "",
},
];
const SpecialBookingSection = () => {
  const { language, theme } = useContext(ThemeContext);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

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
    <div
      className={`${
        theme === "light" ? "bg-gray-100" : "bg-gray-950"
      }  py-16 lg:px-[10rem]`}
    >
        <div className="bg-gray-100 min-h-[500px] flex flex-col justify-center py-1">
         
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 mb-8">
                    Now, Get More Than Just Bus Tickets with Our Service!
                </h2>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Div - Carousel */}
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
                                    className="w-40 h-40 object-cover rounded-full border-4 border-purple-200 shadow-lg"
                                />
                                <h2 className="text-2xl font-bold text-purple-800 mt-6">
                                    {messages[index].name}
                                </h2>
                                <p className="text-md text-blue-800 font-semibold">
                                    {messages[index].title}
                                </p>
                                <p className="mt-4 text-gray-600 text-center max-w-md">
                                    "{messages[index].message}"
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleNavigate(messages[index])}
                                    className="mt-6 px-6 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition-colors"
                                >
                                    Book Now
                                </motion.button>
                            </motion.div>
                        </AnimatePresence>

                        <button
                            onClick={prevMessage}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-purple-800 p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
                        >
                            <FiChevronLeft size={24} className="text-white" />
                        </button>
                        <button
                            onClick={nextMessage}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-purple-800 p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
                        >
                            <FiChevronRight size={24} className="text-white" />
                        </button>
                    </div>

                    {/* Right Div -  */}
                    <div className="h-[500px] w-full rounded-2xl shadow-xl bg-gradient-to-r from-purple-800 to-blue-800 p-8 flex flex-col justify-center items-center text-white">
                        <h2 className="text-lg lg:text-3xl font-bold mb-4">Our Mission & Values</h2>
                        <p className="text-sm lg:text-lg text-center mb-6">
                            At Sacred Heart Secondary School, we are committed to fostering a culture of excellence, integrity, and compassion.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm lg:text-lg">
                            <li>Hi there lorem ipsum</li>
                            <li>Promoting a culture of respect and inclusivity.</li>
                            <li>Encouraging innovation and critical thinking.</li>
               
                        </ul>
                        <button
          
                            className="mt-8 px-6 py-2 bg-white text-purple-800 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            Discover More
                        </button>
                    </div>
                </div>
       
        </div>
    </div>
  );
};

export default SpecialBookingSection;




