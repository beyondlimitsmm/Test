/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export function NavbarProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <NavBarContext.Provider
      value={{ isSidebarOpen: isNavOpen, toggleNavbar: toggleNavbar }}
    >
      {children}
    </NavBarContext.Provider>
  );
}

export const NavBarContext = createContext();
