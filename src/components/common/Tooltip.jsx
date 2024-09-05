import React from "react";

const Tooltip = ({ children, text, position = "right", className = "" }) => {
  let positionClasses = "";

  switch (position) {
    case "top":
      positionClasses = "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
      break;
    case "bottom":
      positionClasses = "top-full left-1/2 transform -translate-x-1/2 mt-2";
      break;
    case "left":
      positionClasses = "right-full top-1/2 transform -translate-y-1/2 mr-2";
      break;
    case "right":
    default:
      positionClasses = "left-full top-1/2 transform -translate-y-1/2 ml-2";
      break;
  }

  return (
    <div className="relative group">
      {children}
      <div
        className={`absolute ${positionClasses} bg-gray-700 text-white text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${className}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
