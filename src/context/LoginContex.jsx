import React, { createContext, useContext, useState } from "react";

// Create a context
const ModalContext = createContext();

// Create a provider component
export const ModalProvider = ({ children }) => {
  const [logmodal, setlogmodal] = useState(false);

  const handleLoginModal = () => {
    setlogmodal(!logmodal);
  };

  const closeLoginModal = () => {
    setlogmodal(false);
  };

  return (
    <ModalContext.Provider
      value={{ logmodal, handleLoginModal, closeLoginModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Create a custom hook to use the context
export const useModal = () => {
  return useContext(ModalContext);
};
