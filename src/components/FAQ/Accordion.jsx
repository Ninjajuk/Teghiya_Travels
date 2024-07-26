
import React, { useContext, useState } from 'react';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { ThemeContext } from '../../context/context';

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const {theme} = useContext(ThemeContext)

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full ">
      {data.map((item, index) => (
        <div
          key={index}
          className="border-b-2 border-gray-200 w-full  space-y-2"
        >
          <div
            className={`flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme==='light'?'text-textPrimary':'text-white'}`}
            onClick={() => handleToggle(index)}
          >
            <button className="w-full text-left py-4 px-4 ">
              <h2 className={`font-semibold text-md ${theme==='light'?'text-textPrimary':'text-white'}`}>{item.category}</h2>
            </button>
            {activeIndex === index ? (
              <button >
                <FaAngleUp className={`w-6 h-6`}/>
              </button>
            ) : (
              <button>
                <FaAngleDown className={`w-6 h-6`}/>
              </button>
            )}
          </div>

          <div
            className={`overflow-hidden transition-max-height duration-500 ${
              activeIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className={`p-4 ${theme==='light'?'':'text-white'}`}>
              {item.faqs.map((faq, faqIndex) => (
                <div key={faqIndex} className="mb-4">
                  <h3 className="font-medium text-md">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
