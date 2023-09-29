/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";

export function NavbarProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [roomType, setRoomType] = useState(undefined);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  // const

  const toggleNavbar = () => {
    if (!isNavOpen) {
      setCurrentOffset(window.scrollY);
      setIsHidden(true);
      setIsNavOpen(!isNavOpen);
    } else {
      setIsHidden(false);
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(currentOffset),
          left: 0,
        });
      }, 0.1);
      setTimeout(() => {
        setIsNavOpen(!isNavOpen);
      }, 200);
    }
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
        showDropdown,
        setShowDropdown,
        currentOffset,
        isHidden,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
}

export const NavBarContext = createContext();
