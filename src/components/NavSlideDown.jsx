import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Facebook from "../assets/images/Facebook.svg";
import Instagram from "../assets/images/Instagram.svg";
import LinkedIn from "../assets/images/LinkedIn.svg";
import Twitter from "../assets/images/Twitter.svg";
import Youtube from "../assets/images/Youtube.svg";
import { NavBarContext } from "../hooks/NavBarContext";
import { useQuery } from "@tanstack/react-query";
import { sidebar } from "../api/home";
import Error from "./Error";
import { parseCmsData } from "../libs/functions";

export const NavSlideDown = () => {
  const { isNavOpen, toggleNavbar } = useContext(NavBarContext);

  const navigate = useNavigate();
  const location = useLocation();
  const { data, error } = useQuery(["sidebar"], sidebar);
  if (error) return <Error />;

  const cmsData = parseCmsData(data);

  function handleClick(data) {
    toggleNavbar();
    // if (location.pathname !== "/") {
    //   alert("/");
    //   navigate("/");
    // }

    if (!data?.self) {
      if (data?.link.includes("http")) return window.open(data?.link);

      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

      setTimeout(() => {
        navigate(data?.link);
        // toggleNavbar();
      }, 1);
      return;
    }

    navigate("/");
    setTimeout(() => {
      document.getElementById(data?.link).scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  }

  return (
    <div
      className={`absolute w-screen bg-white overflow-y-scroll xl:overflow-y-hidden ${
        isNavOpen ? "h-[calc(100vh-79px)] xl:pt-16 xl:pb-10 py-8" : "h-0"
      }`}
    >
      <div
        className={`container mx-auto xl:px-20 px-4 ${
          isNavOpen ? "h-max xl:h-full" : "hidden h-0"
        }`}
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 h-full relative">
          <div className="flex flex-col justify-between col-span-1 2xl:h-2/3 h-[85%]">
            {cmsData?.navLinks?.slice(0, 6).map((data, index) => (
              <button
                key={index}
                onClick={() => handleClick(data)}
                className="w-max xl:px-4 py-4 xl:py-0 nav-link-typography text-[#02102A] opacity-80 hover:opacity-100 !text-5xl hover:translate-x-4 duration-700 hover:text-hoverPale"
                //   x-on:click="handleScrollDownClick('#home');open = !open"
              >
                {data?.title}
              </button>
            ))}

            {/* <button
              onClick={() => handleClick("roomSection")}
              className="w-max xl:px-4 py-4 xl:py-0 nav-link-typography text-[#02102A] opacity-80 hover:opacity-100 !text-5xl hover:translate-x-4 duration-700 hover:text-hoverPale"
            >
              Our Rooms
            </button>
            <button
              onClick={() => handleClick("features")}
              className="w-max xl:px-4 py-4 xl:py-0 nav-link-typography text-[#02102A] opacity-80 hover:opacity-100 !text-5xl hover:translate-x-4 duration-700 hover:text-hoverPale"
            >
              Our Features
            </button>
            <button
              onClick={() => handleClick("gallery")}
              className="w-max xl:px-4 py-4 xl:py-0 nav-link-typography text-[#02102A] opacity-80 hover:opacity-100 !text-5xl hover:translate-x-4 duration-700 hover:text-hoverPale"
            >
              Gallery
            </button>
            <button
              onClick={() => handleClick("articles-for-you")}
              className="w-max xl:px-4 py-4 xl:py-0 nav-link-typography text-[#02102A] opacity-80 hover:opacity-100 !text-5xl hover:translate-x-4 duration-700 hover:text-hoverPale"
            >
              Articles For You
            </button>
            <button
              onClick={() => handleClick("br-map")}
              className="w-max xl:px-4 py-4 xl:py-0 nav-link-typography text-[#02102A] opacity-80 hover:opacity-100 !text-5xl hover:translate-x-4 duration-700 hover:text-hoverPale"
            >
              View on Map
            </button> */}
          </div>
          <div className="col-span-1 flex flex-col xl:flex-row justify-between h-max pb-10 pt-10 xl:pt-0 transition-none">
            <div className="flex-1">
              <div className="mb-8 2xl:mb-[60px]">
                <h6 className="nav-link-typography 2xl:mb-4">Our HighLights</h6>
                <div className="flex flex-col gap-1">
                  {cmsData?.ourHighlights?.map((data, index) => (
                    <button
                      className="flex justify-start"
                      key={index}
                      onClick={() => handleClick(data)}
                    >
                      <p className="typo-body-2">{data?.title}</p>
                    </button>
                  ))}

                  {/* <p className="typo-body-2">Restarurant</p>
                  <p className="typo-body-2">Refresh Pool</p>
                  <p className="typo-body-2">Voyage Bar</p>
                  <p className="typo-body-2">Luxuary Rooms</p> */}
                </div>
              </div>

              <div className="mb-[60px] xl:mb-0">
                <h6 className="nav-link-typography whitespace-nowrap">
                  Check-In/Check Out
                </h6>
                <div className="flex flex-col gap-1">
                  <p className="typo-body-2">
                    Check in from: {cmsData?.checkIn}
                  </p>
                  <p className="typo-body-2">
                    Check in from: {cmsData?.checkOut}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col pb-10 transform-none">
              <div>
                <div className="mb-8 2xl:mb-[60px]">
                  <h6 className="nav-link-typography">Contact Us</h6>
                  <div className="flex flex-col gap-1">
                    <a
                      href={`tel:${cmsData?.contactInfo?.phone}`}
                      className="typo-body-2"
                    >
                      {cmsData?.contactInfo?.phone}
                    </a>
                    <a
                      href="mailto:theboundaryresidence@gmail.com"
                      className="typo-body-2 hover:text-hoverPale"
                    >
                      {cmsData?.contactInfo?.email}
                    </a>
                  </div>
                </div>
                <div className="mb-8 2xl:mb-[60px]">
                  <h6 className="nav-link-typography">Address</h6>
                  <a
                    href={cmsData?.contactInfo?.location?.link}
                    target="_blank"
                    className="typo-body-2 hover:text-hoverPale"
                    rel="noreferrer"
                  >
                    {cmsData?.contactInfo?.location?.name}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-footer absolute right-0 left-0 bottom-0 mt-4 flex justify-center xl:justify-end gap-6">
            {cmsData?.socials?.instagram && (
              <a href={cmsData?.socials?.instagram}>
                <img
                  src={Instagram}
                  alt=""
                  className="w-10 h-10 rounded-full hover:opacity-100 transition-all duration-300"
                />
              </a>
            )}

            {cmsData?.socials?.twitter && (
              <a href={cmsData?.socials?.twitter}>
                <img
                  src={Twitter}
                  alt=""
                  className="w-10 h-10 rounded-full hover:opacity-100 transition-all duration-300"
                />
              </a>
            )}

            {cmsData?.socials?.facebook && (
              <a href={cmsData?.socials?.facebook}>
                <img
                  src={Facebook}
                  alt=""
                  className="w-10 h-10 rounded-full hover:opacity-100 transition-all duration-300"
                />
              </a>
            )}

            {cmsData?.socials?.youtube && (
              <a href={cmsData?.socials?.youtube}>
                <img
                  src={Youtube}
                  alt=""
                  className="w-10 h-10 rounded-full hover:opacity-100 transition-all duration-300"
                />
              </a>
            )}

            {cmsData?.socials?.linkedin && (
              <a href={cmsData?.socials?.linkedin}>
                <img
                  src={LinkedIn}
                  alt=""
                  className="w-10 h-10 rounded-full hover:opacity-100 transition-all duration-300"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
