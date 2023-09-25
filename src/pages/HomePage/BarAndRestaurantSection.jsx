/* eslint-disable no-undef */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Rectangle10 from "../../assets/images/Rectangle10.png";
import Rectangle13 from "../../assets/images/Rectangle13.png";
import "../../styles/HomePage.css";
import { bar } from "../../api/home";
import { createAssetsUrl, parseCmsData } from "../../libs/functions";
import Error from "../../components/Error";

// const SlideMenuData = [
//   {
//     id: 1,
//     imageRef: React.createRef(),
//     title: "Boundary Restaurant",
//     description:
//       "Indulge in the finest culinary experience at our gourmet restaurant. Our chef prepares exquisite dishes using fresh, locally sourced ingredients. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus odio blanditiis, et beatae modi molestiae, obcaecati sit maxime non deleniti eveniet. Eligendi aliquid delectus soluta impedit iusto neque, mollitia officia?",
//     imageUrl: Rectangle10,
//     cuisine: "French Cuisine, Local Specialties",
//     dressCode: "Smart Casual",
//     openHours: "6:00pm – 11:00pm",
//     menuLink: "#",
//     exploreLink: "#",
//   },
//   {
//     id: 2,
//     imageRef: React.createRef(),
//     title: "Voyage Bar",
//     description:
//       "Enjoy a relaxed atmosphere in our Voyage Bar. We offer a wide selection of premium cocktails, wines, and craft beers. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus odio blanditiis, et beatae modi molestiae, obcaecati sit maxime non deleniti eveniet. Eligendi aliquid delectus soluta impedit iusto neque, mollitia officia?",
//     imageUrl: Rectangle13,
//     cuisine: "Cocktails, Wines, Craft Beers",
//     dressCode: "Casual",
//     openHours: "5:00pm – 2:00am",
//     menuLink: "#",
//     exploreLink: "#",
//   },
// ];

export const BarAndRestaurantSection = () => {
  const menuSection = useRef();
  const buttonHoverOverlay = useRef();
  const contentWrapperRef = useRef();
  const [selectEl, setSelectEl] = useState();
  const [changeUI, setChangeUI] = useState(false);
  const menusRef = useRef();
  const menuDetails = useRef();
  const [menuSlideRight, setMenuSlideRight] = useState(false);
  const [slideMenu, setSlideMenu] = useState([]);

  const { data, error } = useQuery(["bar"], bar);
  const cmsData = parseCmsData(data);
  const createSlideMenu = useCallback(() => {
    if (!cmsData && !error) return;

    const _slideMenu = cmsData?.restaurantCards?.map((dt) => {
      return {
        id: dt?.id,
        imageRef: React.createRef(),
        title: dt?.title,
        description: dt?.description,
        cuisine: dt?.cuisine,
        dressCode: dt?.dressCode,
        openHours: dt?.openHours,
        imageUrl: createAssetsUrl(dt?.image),
        menuLink: dt.menu,
        exploreLink: dt?.explore,
      };
    });
    setSlideMenu(_slideMenu);
  }, [cmsData]);

  useEffect(() => {
    createSlideMenu();
  }, [createSlideMenu]);

  if (error) return <Error />;

  function hideImage(imageRef) {
    if (selectEl === null || selectEl === undefined) {
      if (imageRef.current) {
        imageRef.current.classList.replace(
          "-translate-x-[50%]",
          "-translate-x-full"
        );
        imageRef.current.classList.replace("opacity-100", "opacity-0");
      }
    }
  }

  function showImage(imageRef) {
    imageRef.current.classList.replace(
      "-translate-x-full",
      "-translate-x-[50%]"
    );
    imageRef.current.classList.replace("opacity-0", "opacity-50");
  }

  function changeLayout(imageRef) {
    setSelectEl(imageRef);
    buttonHoverOverlay.current.classList.replace("-z-10", "z-10");

    imageRef.current.classList.replace("-translate-x-[50%]", "translate-x-0");
    imageRef.current.classList.replace("opacity-50", "opacity-100");

    setMenuSlideRight(true);

    setTimeout(() => {
      menuSection.current.scrollIntoView({
        behavior: "smooth",
      });

      setChangeUI(true);

      if (menuDetails.current) {
        requestAnimationFrame(() => {
          menuDetails.current.classList.add("new-layout-enter-active");
          let menuDetailsChildren = menuDetails.current.children;
          setTimeout(() => {
            menuDetailsChildren[0].classList.remove(
              "translate-y-[50px]",
              "opacity-0"
            );
            menuDetailsChildren[0].classList.add(
              "translate-y-0",
              "opacity-100"
            );
          }, 200);

          setTimeout(() => {
            menuDetailsChildren[1].classList.remove(
              "translate-y-[50px]",
              "opacity-0"
            );
            menuDetailsChildren[1].classList.add(
              "translate-y-0",
              "opacity-100"
            );
          }, 500);

          buttonHoverOverlay.current.classList.replace("z-10", "-z-10");
        });
      }
    }, 300);
  }

  function closePopUp() {
    selectEl.current.classList.replace("opacity-100", "opacity-0");
    selectEl.current.classList.replace("translate-x-0", "-translate-x-full");

    requestAnimationFrame(() => {
      menuDetails.current.classList.remove("new-layout-enter-active");
      menuDetails.current.classList.add("new-layout-exit");

      let menuDetailsChildren = menuDetails.current.children;

      setTimeout(() => {
        menuDetailsChildren[0].classList.add("translate-y-[50px]", "opacity-0");
        menuDetailsChildren[0].classList.remove("translate-y-0", "opacity-100");
      }, 200);

      setTimeout(() => {
        menuDetailsChildren[1].classList.add("translate-y-[50px]", "opacity-0");
        menuDetailsChildren[1].classList.remove("translate-y-0", "opacity-100");
      }, 500);

      setTimeout(() => {
        setChangeUI(false);
        setMenuSlideRight(false);
        setSelectEl(null);
      }, 600);
    });
  }

  return (
    <section
      className="w-screen h-[1000px] relative bg-[#3A1E13] text-white"
      id="menuSection"
      ref={menuSection}
      style={{ scrollSnapType: "y mandatory" }}
    >
      <div className="xl:ml-40 h-full flex py-10 xl:py-0 overflow-hidden relative">
        <div
          ref={buttonHoverOverlay}
          id="hoverOverlay"
          className="bg-transparent -z-10 absolute inset-0"
        ></div>
        <div id="imageWrapper" className="flex-1 relative hidden xl:block">
          {slideMenu?.slice(0, 4).map((menu) => {
            return (
              <img
                key={menu.id}
                src={menu.imageUrl}
                alt=""
                className="absolute inset-0 h-full w-full  transition-all duration-1000 object-cover -translate-x-full opacity-0"
                ref={menu.imageRef}
              />
            );
          })}
        </div>

        <div
          className="flex-[1.5] relative"
          id="contentWrapper"
          ref={contentWrapperRef}
        >
          <LayoutDetails
            show={changeUI}
            wrapperRef={menuDetails}
            onClosePopUp={closePopUp}
            {...slideMenu?.find((menu) => menu.imageRef === selectEl)}
          ></LayoutDetails>

          <div
            className={`${
              changeUI ? "hidden" : "flex"
            } h-full flex-col justify-center items-start px-10 xl:px-0 ${
              menuSlideRight && "menu-slide-right"
            }`}
            ref={menusRef}
            id="menus"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-white/80 w-8 h-1"></div>

              <h2 className="typo-menu-2 font-modesfa text-white/80">
                Bar And Restaurant
              </h2>
            </div>

            {slideMenu?.map((menu) => {
              return (
                <div
                  key={menu.id}
                  className="self-stretch font-walbaum text-5xl cursor-pointer text-white/60 hover:text-white hover:translate-x-10 transition-all duration-700 py-8"
                  onMouseOver={() => showImage(menu.imageRef)}
                  onMouseLeave={() => hideImage(menu.imageRef)}
                  onClick={() => changeLayout(menu.imageRef)}
                >
                  {menu.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const LayoutDetails = ({
  show,
  wrapperRef,
  onClosePopUp,
  title,
  description,
  cuisine,
  dressCode,
  openHours,
  menuLink,
  exploreLink,
}) => {
  return (
    <div
      className={`max-w-full lg:max-w-[80%] mx-auto xl:mx-0 flex-col gap-8 px-4 xl:px-32 mt-10 xl:mt-20 2xl:mt-32 justify-start relative new-layout-enter ${
        show ? "flex new-layout-enter-active" : "hidden"
      }`}
      id="menu-details"
      ref={wrapperRef}
    >
      <h4 className="text-5xl my-4 transition-all duration-500 translate-y-[50px] opacity-0 font-walbaum">
        {title}
      </h4>
      <p className="leading-relaxed typo-body-2 font-walbaum transition-all duration-500 translate-y-[50px] opacity-0">
        {description}
      </p>
      <div className="border-b border-[#e5e7eb8c] py-4 flex justify-between">
        <p>Cuisine</p>
        <p>{cuisine}</p>
      </div>
      <div className="border-b border-[#e5e7eb8c]  py-4 flex justify-between">
        <p>Dress Code</p>
        <p>{dressCode}</p>
      </div>
      <div className="border-b border-[#e5e7eb8c]  py-4 flex justify-between">
        <p>Opening hours</p>
        <p>{openHours}</p>
      </div>
      <div className="flex gap-4 group transition opacity-75 hover:opacity-100 duration-300 w-max cursor-pointer">
        <div className="group-hover:translate-x-2 duration-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
        <a
          href={menuLink}
          className="font-medium group-hover:tracking-wider duration-500"
        >
          Download Menu
        </a>
      </div>
      <div className="flex gap-4 group transition opacity-75 hover:opacity-100 duration-300 w-max cursor-pointer">
        <div className="group-hover:translate-x-2 duration-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
        <a
          href={exploreLink}
          className="font-medium group-hover:tracking-wider duration-500"
        >
          Explore More
        </a>
      </div>
      <div
        className="z-10 text-4xl cursor-pointer absolute -top-10 right-10 w-8 h-8 opacity-50 hover:opacity-100 flex justify-center items-center"
        onClick={() => onClosePopUp()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </div>
    </div>
  );
};
