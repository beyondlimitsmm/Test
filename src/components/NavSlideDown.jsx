import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Facebook from "../assets/images/Facebook.svg";
import Instagram from "../assets/images/Instagram.svg";
import LinkedIn from "../assets/images/LinkedIn.svg";
import Twitter from "../assets/images/Twitter.svg";
import Youtube from "../assets/images/Youtube.svg";
import { NavBarContext } from "../hooks/NavBarContext";

export const NavSlideDown = () => {
  const { isSidebarOpen, toggleNavbar } = useContext(NavBarContext);

  const navigate = useNavigate();
  const location = useLocation();

  function handleClick(sectionId) {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth",
      });
      toggleNavbar();
    }, 1);
  }

  return (
    <div
      className={`absolute w-screen bg-white overflow-y-scroll xl:overflow-y-hidden ${
        isSidebarOpen ? "h-[calc(100vh-79px)] xl:pt-16 xl:pb-10 py-8" : "h-0"
      }`}
    >
      <div
        className={`container mx-auto xl:px-20 px-4 ${
          isSidebarOpen ? "h-max xl:h-full" : "hidden h-0"
        }`}
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 h-full relative">
          <div className="flex flex-col justify-between col-span-1 2xl:h-2/3 h-[85%]">
            <button
              onClick={() => handleClick("home")}
              className="w-max xl:px-4 py-4 xl:py-0 nav-link-typography text-[#02102A] opacity-80 hover:opacity-100 !text-5xl hover:translate-x-4 duration-700 hover:text-hoverPale"
              //   x-on:click="handleScrollDownClick('#home');open = !open"
            >
              Home
            </button>

            <button
              onClick={() => handleClick("roomSection")}
              className="w-max xl:px-4 py-4 xl:py-0 nav-link-typography text-[#02102A] opacity-80 hover:opacity-100 !text-5xl hover:translate-x-4 duration-700 hover:text-hoverPale"
              //   x-on:click="handleScrollDownClick('#roomSection');open = !open"
            >
              Our Rooms
            </button>
            <button
              onClick={() => handleClick("features")}
              //   x-on:click="handleScrollDownClick('#features');open = !open"
              className="w-max xl:px-4 py-4 xl:py-0 nav-link-typography text-[#02102A] opacity-80 hover:opacity-100 !text-5xl hover:translate-x-4 duration-700 hover:text-hoverPale"
            >
              Our Features
            </button>
            <button
              onClick={() => handleClick("gallery")}
              //   x-on:click="handleScrollDownClick('#gallery');open = !open"
              className="w-max xl:px-4 py-4 xl:py-0 nav-link-typography text-[#02102A] opacity-80 hover:opacity-100 !text-5xl hover:translate-x-4 duration-700 hover:text-hoverPale"
            >
              Gallery
            </button>
            <button
              onClick={() => handleClick("articles-for-you")}
              //   x-on:click="handleScrollDownClick('#articles-for-you');open = !open"
              className="w-max xl:px-4 py-4 xl:py-0 nav-link-typography text-[#02102A] opacity-80 hover:opacity-100 !text-5xl hover:translate-x-4 duration-700 hover:text-hoverPale"
            >
              Articles For You
            </button>
            <button
              onClick={() => handleClick("br-map")}
              //   x-on:click="handleScrollDownClick('#br-map');open = !open"
              className="w-max xl:px-4 py-4 xl:py-0 nav-link-typography text-[#02102A] opacity-80 hover:opacity-100 !text-5xl hover:translate-x-4 duration-700 hover:text-hoverPale"
            >
              View on Map
            </button>
          </div>
          <div className="col-span-1 flex flex-col xl:flex-row justify-between h-max pb-10 pt-10 xl:pt-0 transition-none">
            <div className="flex-1">
              <div className="mb-8 2xl:mb-[60px]">
                <h6 className="nav-link-typography 2xl:mb-4">Our HighLights</h6>
                <div className="flex flex-col gap-1">
                  <Link onClick={() => toggleNavbar()} to={"/rooms"}>
                    <p className="typo-body-2 hover:text-hoverPale transition-colors">
                      Deluxe Rooms
                    </p>
                  </Link>
                  <Link onClick={() => toggleNavbar()} to={"/rooms"}>
                    <p className="typo-body-2 hover:text-hoverPale transition-colors">
                      Suites
                    </p>
                  </Link>
                  <Link onClick={() => toggleNavbar()} to={"/restaurant"}>
                    <p className="typo-body-2 hover:text-hoverPale transition-colors">
                      Restaurant
                    </p>
                  </Link>
                  <Link onClick={() => toggleNavbar()} to={"/bar-details"}>
                    <p className="typo-body-2 hover:text-hoverPale transition-colors">
                      Voyage Bar
                    </p>
                  </Link>
                  <Link onClick={() => toggleNavbar()} to={"/pool"}>
                    <p className="typo-body-2 hover:text-hoverPale transition-colors">
                      Amazing Pool
                    </p>
                  </Link>
                  <Link onClick={() => toggleNavbar()} to={"/meeting-room"}>
                    <p className="typo-body-2 hover:text-hoverPale transition-colors">
                      Meetings & Events
                    </p>
                  </Link>
                </div>
              </div>

              <div className="mb-[60px] xl:mb-0">
                <h6 className="nav-link-typography whitespace-nowrap">
                  Check-In/Check Out
                </h6>
                <div className="flex flex-col gap-1">
                  <p className="typo-body-2">Check in from: 15:00</p>
                  <p className="typo-body-2">Check in from: 15:00</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col pb-10 transform-none">
              <div>
                <div className="mb-8 2xl:mb-[60px]">
                  <h6 className="nav-link-typography">Contact Us</h6>
                  <div className="flex flex-col gap-1">
                    <a href="tel:01526289" className="typo-body-2">
                      01 526 289
                    </a>
                    <a
                      href="mailto:theboundaryresidence@gmail.com"
                      className="typo-body-2"
                    >
                      theboundaryresidence@gmail.com
                    </a>
                  </div>
                </div>
                <div className="mb-8 2xl:mb-[60px]">
                  <h6 className="nav-link-typography">Address</h6>
                  <a
                    href="https://goo.gl/maps/LFB6PZeqcQDDuBnS8"
                    target="_blank"
                    className="typo-body-2"
                    rel="noreferrer"
                  >
                    Coner of Dhammazedi Road x Inya Road, No.129, Kamayut
                    Township Yangon, Myanmar, 11041
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-footer absolute right-0 left-0 bottom-0 mt-4 flex justify-center xl:justify-end gap-6">
            <img
              src={Instagram}
              alt=""
              className="opacity-40 w-10 h-10 rounded-full hover:opacity-100 transition-all duration-300 bg-black"
            />
            <img
              src={Twitter}
              alt=""
              className="opacity-40 w-10 h-10 rounded-full hover:opacity-100 transition-all duration-300 bg-black"
            />
            <img
              src={Facebook}
              alt=""
              className="opacity-40 w-10 h-10 rounded-full hover:opacity-100 transition-all duration-300 bg-black"
            />
            <img
              src={Youtube}
              alt=""
              className="opacity-40 w-10 h-10 rounded-full hover:opacity-100 transition-all duration-300 bg-black"
            />
            <img
              src={LinkedIn}
              alt=""
              className="opacity-40 w-10 h-10 rounded-full hover:opacity-100 transition-all duration-300 bg-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
