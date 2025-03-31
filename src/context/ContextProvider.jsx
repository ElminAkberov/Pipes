import React, { createContext, useState } from "react";
export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState({
    design: false,
    recommend: false,
    dashboard: false,
    documentation: false,
    features: false,
  });
  const [addNewFeature, setAddNewFeature] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState({});
  const [showSelectedFeatures, setShowSelectedFeatures] = useState({});
  const [changePassword, setChangePassword] = useState(false);

  return (
    <Context.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        addNewFeature,
        setAddNewFeature,
        selectedFeatures,
        setSelectedFeatures,
        changePassword,
        setChangePassword,
        showSelectedFeatures,
        setShowSelectedFeatures,
      }}
    >
      {children}
    </Context.Provider>
  );
};
