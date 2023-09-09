import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavBarContext } from "../hooks/NavBarContext";
import { NavSlideDown } from "./NavSlideDown";

export const NavBar = () => {
  const { isSidebarOpen, toggleNavbar } = useContext(NavBarContext);

  return (
    <div className="NavBar h-20 sticky top-0 left-0 right-0 w-screen z-50">
      <div className="h-20 bg-white">
        <nav className="h-full w-screen custom-container flex justify-between items-center">
          <button
            onClick={toggleNavbar}
            className="space-x-2 focus:outline-none w-8 h-8 flex justify-center items-center"
          >
            <div className="w-6 flex items-center justify-center relative">
              <span
                className={` transform h-[2px] transition duration-300 w-full absolute bg-black -translate-y-2 ${
                  isSidebarOpen && " translate-y-0 rotate-45"
                } `}
              ></span>
              <span
                className={`transform h-[2px] transition duration-300 w-2/3 absolute left-0 bg-black ${
                  isSidebarOpen ? "opacity-0 translate-x-3" : "opacity-100 "
                }`}
              ></span>
              <span
                className={`transform h-[2px] transition duration-300 w-full absolute bg-black ${
                  isSidebarOpen ? "translate-y-0 -rotate-45" : "translate-y-2 "
                }`}
              ></span>
            </div>
          </button>
          <Link to="/">
            <h1
              className="typo-menu absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase typo-text-black tracking-wider font-madera !font-medium invisible xl:visible"
              style={{ fontSize: "25px" }}
            >
              The Boundary Residence
            </h1>
          </Link>

          <button className={`border-button `}>Book Now</button>
        </nav>
      </div>

      <NavSlideDown></NavSlideDown>
    </div>
  );
};
