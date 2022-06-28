import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const openModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const openSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <AppContext.Provider
      value={{
        openModal,
        openSidebar,
        isOpenModal,
        isOpenSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//// custom ////

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
