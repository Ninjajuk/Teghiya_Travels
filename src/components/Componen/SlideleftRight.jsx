import React, { useRef, useEffect, useState } from "react";

const ScrollAppear = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the container
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === leftRef.current) {
            setLeftVisible(true);
          } else if (entry.target === rightRef.current) {
            setRightVisible(true);
          }
        }
      });
    }, observerOptions);

    if (leftRef.current) {
      observer.observe(leftRef.current);
    }

    if (rightRef.current) {
      observer.observe(rightRef.current);
    }

    return () => {
      if (leftRef.current) {
        observer.unobserve(leftRef.current);
      }
      if (rightRef.current) {
        observer.unobserve(rightRef.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-between items-center h-screen">
      <div
        ref={leftRef}
        className={`transition-transform duration-500 ease-in-out transform ${
          leftVisible ? "translate-x-0" : "-translate-x-full"
        } bg-blue-500 text-white p-4`}
      >
        Left Div
      </div>
      <div
        ref={rightRef}
        className={`transition-transform duration-500 ease-in-out transform ${
          rightVisible ? "translate-x-0" : "translate-x-full"
        } bg-green-500 text-white p-4`}
      >
        Right Div
      </div>
    </div>
  );
};

export default ScrollAppear;
