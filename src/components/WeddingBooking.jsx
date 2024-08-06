import React, { useContext, useState } from "react";
import TypingEffect from "./common/TypingEffect";
import { ThemeContext } from "../context/context";
import WeddingBusBookingForm from "./form/WeddingFormBus";
// import { ReactComponent as WeddingBusSvg } from './wedding-bus.svg';

const WeddingBookingSection = () => {
  const { language, theme } = useContext(ThemeContext);
  const [weddingForm, setWeddingForm] = useState(false);
  return (
    <>
      <div
        className={` ${
          theme === "light" ? "bg-white" : "bg-gray-950"
        } py-16 lg:px-[10rem]`}
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            {/* <div  className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
        <TypingEffect
        texts={["Hello there!", "Now You Can Book for Your Wedding", "Exiciting !!"]}
        typeSpeed={100}
        backSpeed={60}
        backDelay={2000}
        loop={true}
      />
'अब आप अपनी शादी के लिए पहले से बस बुक कर सकते हैं
        </div> */}
            {language === "en" ? (
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 h1-slide">
                Now You Can Book a Bus for{" "}
                <span className="text-primary pl-1">Your Wedding</span> in
                Advance
              </h2>
            ) : (
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 h1-slide">
                अब आप
                <span className="text-primary pl-1">अपनी शादी</span> के लिए पहले
                से बस बुक कर सकते हैं
              </h2>
            )}

            <p className="text-lg lg:text-xl text-gray-600 mb-8">
              {language === "en"
                ? "Make your special day even more memorable with our wedding bus booking service.Ensure your guests travel in comfort and style."
                : "हमारी विवाह बस बुकिंग सेवा के साथ अपने विशेष दिन को और भी यादगार बनाएं। सुनिश्चित करें कि आपके मेहमान आराम और स्टाइल से यात्रा करें।"}
            </p>
            <button
              onClick={() => setWeddingForm(!weddingForm)}
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-pink-700"
            >
              {language === "en"
                ? " Book Your Wedding Bus"
                : "अपनी शादी की बस बुक करें"}
            </button>
            {/* <WeddingBusBookingForm /> */}
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full h-auto max-w-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                class="icon icon-tabler icon-tabler-bus"
                fill="#000000"
              >
                <path
                  d="M2 12v32h6l4 8v4h4v-4h28v4h4v-4l4-8h6v-32z"
                  fill="#f2a3b3"
                />
                <path d="M10 44v-26h16v26z" fill="#fff" />
                <path d="M38 44v-26h16v26z" fill="#fff" />
                <circle cx="12" cy="56" r="4" fill="#f50057" />
                <circle cx="52" cy="56" r="4" fill="#f50057" />
              </svg>

              {/* <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="triangle-clip">
      <path d="M0,200 L200,0 L200,200 Z" />
    </clipPath>
  </defs>
  <rect width="200" height="200" fill="#f2a3b3" clip-path="url(#triangle-clip)" />
  <g clip-path="url(#triangle-clip)">
    <path d="M50 100 L150 100 L160 140 L40 140 Z" fill="#fff" stroke="#f50057" stroke-width="5" />
    <rect x="60" y="110" width="30" height="20" fill="#f50057" />
    <rect x="110" y="110" width="30" height="20" fill="#f50057" />
    <circle cx="70" cy="140" r="10" fill="#f50057" />
    <circle cx="130" cy="140" r="10" fill="#f50057" />
  </g>
</svg> */}
            </div>
          </div>
        </div>
      </div>
      {weddingForm && <WeddingBusBookingForm />}
    </>
  );
};

export default WeddingBookingSection;
