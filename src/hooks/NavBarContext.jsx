/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export function NavbarProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [roomType, setRoomType] = useState(undefined);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  return (
    <NavBarContext.Provider
      value={{
        isNavOpen,
        toggleNavbar,
        isPopUpOpen,
        togglePopUp,
        roomType,
        setRoomType,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
}

export const NavBarContext = createContext();
