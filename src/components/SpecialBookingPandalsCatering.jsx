import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/context";

import WeddingBusBookingForm from "./form/WeddingFormBus";
import CateringForm from "./form/CateringForm";

const SpecialBookingPandalsCatering = () => {
  const { language, theme } = useContext(ThemeContext);
  const [selectedCard, setSelectedCard] = useState(null);
  const specailbook = [
    {
      id: 1,
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Bolero-Neo/10766/1690267562292/front-left-side-47.jpg",
      title: `${language === "en" ? "Hi there" : "नमस्ते"}`,
      description: "",
      btn: `${language === "en" ? "Book Vehicle" : "वाहन बुक करें"}`,
    },
    {
      id: 2,
      img: "/roadhill.jpg",
      title: `${language === "en" ? "Catering" : "खानपान"}`,
      description: "",
      btn: `${language === "en" ? "Book Catering" : "खानपान बुक करें"}`,
    },
    {
      id: 3,
      img: "landing.jpg",
      title: `${language === "en" ? "Pandals" : "पंडाल"}`,
      description: "",
      btn: `${language === "en" ? "Book Pandals" : "पंडाल बुक करें"}`,
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/715igBNcyEL._SY450_.jpg",
      title: `${language === "en" ? "Gift" : "उपहार"}`,
      description: "",
      btn: `${language === "en" ? "Buy Gift" : "उपहार करें"}`,
    },
  ];
  const handleCardClick = (id) => {
    setSelectedCard(id); // Set the selected card ID
  };

  const handleCloseModal = () => {
    setSelectedCard(null); // Close the modal
  };
  return (
    <>
      <div
        className={`${
          theme === "light" ? "bg-white" : "bg-gray-950"
        }  py-4 lg:px-[10rem]`}
      >
        <div className="container mx-auto  flex flex-col lg:flex-row items-center">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
            {specailbook.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between  bg-white rounded-md shadow-lg"
              >
                <div className="h-full max-h-64 relative">
                  <img
                    src={item.img}
                    className=" w-full h-full object-cover object-center rounded-md"
                  />
                  <div className="absolute top-0 right-0 w-full max-w-12 h-full max-h-8 bg-white rounded-md m-2 flex items-center justify-center text-primary font-semibold">
                    {language === "en" ? "New" : "नया"}
                  </div>
                  {/* <h1 className='absolute top-0 right-0'> hey</h1> */}
                </div>
                <div className=" flex- items-center justify-center my-2 rounded-md mx-2">
                  <h1 className="px-4 py-2 font-bold text-lg ">{item.title}</h1>
                  <button
                    onClick={() => handleCardClick(item.id)}
                    className=" w-full p-2 bg-primary rounded-md   text-white hover:bg-blue-600"
                  >
                    {item.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <CateringForm1
      /> */}
      {selectedCard === 1 && (
        <WeddingBusBookingForm handleCloseModal={handleCloseModal} />
      )}
      {selectedCard === 2 && (
        <CateringForm handleCloseModal={handleCloseModal} />
      )}
      {selectedCard === 3 && <CateringForm />}
      {selectedCard === 4 && <div>Form or Content for Buying Gift</div>}
    </>
  );
};

export default SpecialBookingPandalsCatering;
