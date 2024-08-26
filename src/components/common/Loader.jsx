import React from "react";
import { Circles } from "react-loader-spinner";

function LoaderCircle() {
  return (
    <div className="flex items-center justify-center h-full">
      <Circles
        height="80"
        width="80"
        color="#800000"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default LoaderCircle;
