import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavBarContext } from "../hooks/NavBarContext";
import useScrollAtTop from "../hooks/useScrollAtTop";
import { NavSlideDown } from "./NavSlideDown";

const Nav = () => {
  const { isNavOpen, toggleNavbar } = useContext(NavBarContext);
  const atTop = useScrollAtTop();

  return (
    <>
      <div className="HomeNav h-20 sticky top-0 left-0 right-0 z-50 ">
        <div
          className={`h-20 bg-white ${
            atTop && !isNavOpen && "!bg-transparent"
          }`}
        >
          <nav className="h-20 max-w-[3500px]  custom-container flex justify-between items-center bg-transparent">
            <button
              onClick={toggleNavbar}
              className="space-x-2 focus:outline-none w-8 h-8 flex justify-center items-center"
            >
              <div className="w-6 flex items-center justify-center relative">
                <span
                  className={` transform h-[2px] transition duration-300 w-full absolute bg-black -translate-y-2 ${
                    atTop && !isNavOpen && "bg-white"
                  }  ${isNavOpen && "bg-black translate-y-0 rotate-45"} `}
                ></span>
                <span
                  className={`transform h-[2px] transition duration-300 w-2/3 absolute left-0 ${
                    atTop && !isNavOpen && "bg-white"
                  } ${
                    isNavOpen
                      ? "opacity-0 translate-x-3 bg-black"
                      : "opacity-100 bg-black"
                  }`}
                ></span>
                <span
                  className={`transform h-[2px] transition duration-300 w-full absolute ${
                    atTop && !isNavOpen && "bg-white"
                  }  ${
                    isNavOpen
                      ? "translate-y-0 -rotate-45 bg-black"
                      : "translate-y-2 bg-black"
                  }`}
                ></span>
              </div>
            </button>
            <Link to="/">
              <h1
                className={`typo-menu absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase typo-text-black tracking-wider font-madera font-medium invisible xl:visible ${
                  atTop && !isNavOpen && "hidden"
                } ${isNavOpen && "block"}`}
                style={{ fontSize: "25px" }}
              >
                The Boundary Residence
              </h1>
            </Link>
            <button
              className={`border-button ${
                atTop &&
                !isNavOpen &&
                "border-hoverPale bg-transparent !text-white"
              }`}
            >
              Book Now
            </button>
          </nav>
        </div>
        <NavSlideDown></NavSlideDown>
      </div>
    </>
  );
};

export default Nav;
