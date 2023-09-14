import { useQuery } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";

import JCB from "../assets/images/payment_images/JCB.jpg";
import Kpay from "../assets/images/payment_images/Kpay.jpg";
import MasterCard from "../assets/images/payment_images/MasterCard.jpg";
import MPU from "../assets/images/payment_images/MPU.jpg";
import Union from "../assets/images/payment_images/Union.jpg";
import VISA from "../assets/images/payment_images/VISA.jpg";

import Facebook from "../assets/images/Facebook.svg";
import Instagram from "../assets/images/Instagram.svg";
import Youtube from "../assets/images/Youtube.svg";

import HotelLogo from "../assets/Logo.png";
import { handleScrollDownClick } from "../utils";
import { FlipText } from "./FlipText";
import { createAssetsUrl, parseCmsData } from "../libs/functions";
import { useCallback, useEffect, useState } from "react";
import Error from "./Error";
import { footer } from "../api/home";

export const Footer = () => {
  const navigate = useNavigate();
  const [footerLinks, setFooterLinks] = useState([]);
  const { data, error } = useQuery(["footer"], footer);
  if (error) return <Error />;

  const cmsData = parseCmsData(data);

  function handleClick(sectionId) {
    if (location.pathname !== "/") {
      navigate("/");
    }


    setTimeout(() => {
      document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth",
      });
    }, 1);
  }

  function handleLinkClick() {
   window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); 
  }

  const createFooterLinks = useCallback(() => {
    if (!cmsData) return;

    let _footerLinks = [];
    for (let i = 0; i < cmsData.footerLinks.length / 5; i++) {
      _footerLinks.push(cmsData?.footerLinks?.slice(i * 5, i * 5 + 5));
    }

    setFooterLinks(_footerLinks);
  }, [cmsData]);

  useEffect(() => {
    createFooterLinks();
  }, [createFooterLinks]);

  const onClickHandler = (data) => {
    handleLinkClick();

    if (data?.self) handleClick(data?.link);
    else navigate(data?.link);
  };

  return (
    <footer className="bg-[#3A1E13] text-white/75">
      <div className="mx-auto container pt-10 grid grid-cols-1 xl:grid-cols-2 xl:gap-6">
        <div className="col-span-1">
          <img
            src={HotelLogo}
            alt="HotelLogo"
            className="w-44 h-auto mb-10 xl:mx-0 mx-auto"
          />

          <div className="mb-10 flex flex-col gap-2">
            <div className="flex flex-col xl:flex-row items-center xl:items-start">
              <p className="min-w-[75px] typo-body-2">Address:</p>

              <a
                href={cmsData?.contactInfo?.location?.link}
                target="_blank"
                className="typo-body-2 font-medium max-w-[400px] xl:text-start text-center hover:text-white transition"
                rel="noreferrer"
              >
                {cmsData?.contactInfo?.location?.name}
              </a>
            </div>
            <div className="flex justify-center xl:justify-start">
              <p className="min-w-[75px] typo-body-2">Email :</p>
              <a href={`mailto:${cmsData?.contactInfo?.email}`}>
                <FlipText
                  text={cmsData?.contactInfo?.email}
                  textStyles={"text-white/75 typo-body-2 font-medium"}
                  secondTextStyles={"!text-white"}
                ></FlipText>
              </a>
            </div>
            <div className="flex justify-center xl:justify-start">
              <p className="min-w-[75px] typo-body-2">Phone :</p>
              <a href={`tel:${cmsData?.contactInfo?.phone}`}>
                <FlipText
                  text={cmsData?.contactInfo?.phone}
                  secondTextStyles={"!text-white"}
                  textStyles={"text-white/75 typo-body-2 font-medium"}
                ></FlipText>
              </a>
            </div>
          </div>

          <div className="socials flex gap-8 xl:mb-10 mb-6 justify-center xl:justify-start">
            <a target="_blank" href={cmsData?.socials?.facebook}>
              <img
                src={Facebook}
                alt=""
                className="opacity-40 w-10 h-10 rounded-full hover:opacity-100 transition-all duration-300 bg-black"
              />
            </a>
            <a target="_blank" href={cmsData?.socials?.instagram}>
              <img
                src={Instagram}
                alt=""
                className="opacity-40 w-10 h-10 rounded-full hover:opacity-100 transition-all duration-300 bg-black"
              />
            </a>
            <a target="_blank" href={cmsData?.socials?.youtube}>
              <img
                src={Youtube}
                alt=""
                className="opacity-40 w-10 h-10 rounded-full hover:opacity-100 transition-all duration-300 bg-black"
              />
            </a>
          </div>
        </div>

        <div className="col-span-1 grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-3">
          {footerLinks?.map((links, index) => (
            <div
              key={index}
              className="col-span-3 xl:col-span-1 xl:row-span-2 flex flex-col gap-6 items-center justify-start xl:items-start mb-6"
            >
              {links?.map((data, index) => (
                <button
                  key={index}
                  onClick={() => onClickHandler(data)}
                  to="/"
                  className="my-1 nav-link-footer-typography"
                >
                  <FlipText
                    textStyles={"text-white/75"}
                    secondTextStyles={"!text-white"}
                    text={data?.title}
                  ></FlipText>
                </button>
              ))}

              {/* <Link
                onClick={handleLinkClick}
                to="/room-type"
                className="my-1 nav-link-footer-typography"
              >
                <FlipText
                  textStyles={"text-white/75"}
                  secondTextStyles={"!text-white"}
                  text={"Rooms and Suite"}
                ></FlipText>
              </Link>
              <div
                onClick={() => handleClick("features")}
                className="my-1 nav-link-footer-typography"
              >
                <FlipText
                  textStyles={"text-white/75"}
                  secondTextStyles={"!text-white"}
                  text={"Our Features"}
                ></FlipText>
              </div>
              <div className="my-1 nav-link-footer-typography">
                <FlipText
                  textStyles={"text-white/75"}
                  secondTextStyles={"!text-white"}
                  text={"Online Booking"}
                ></FlipText>
              </div>
              <a
                href="tel:01526289"
                className="my-1 nav-link-footer-typography"
              >
                <FlipText
                  textStyles={"text-white/75"}
                  secondTextStyles={"!text-white"}
                  text={"Phone Reservation"}
                ></FlipText>
              </a> */}
            </div>
          ))}

          {/* <div className="col-span-3 xl:col-span-1 xl:row-span-2 flex flex-col gap-6 items-center justify-start xl:items-start mb-6">
            <Link
              onClick={handleLinkClick}
              to="/restaurant"
              className="my-1 nav-link-footer-typography"
            >
              <FlipText
                textStyles={"text-white/75"}
                secondTextStyles={"!text-white"}
                text={"Restaurant"}
              ></FlipText>
            </Link>
            <Link
              onClick={handleLinkClick}
              to="/bar-details"
              className="my-1 nav-link-footer-typography"
            >
              <FlipText
                textStyles={"text-white/75"}
                secondTextStyles={"!text-white"}
                text={"Voyage Bar"}
              ></FlipText>
            </Link>
            <Link
              onClick={handleLinkClick}
              to="/pool"
              className="my-1 nav-link-footer-typography"
            >
              <FlipText
                textStyles={"text-white/75"}
                secondTextStyles={"!text-white"}
                text={"Amazing Pool"}
              ></FlipText>
            </Link>
            <Link
              onClick={handleLinkClick}
              to="/meeting-room"
              className="my-1 nav-link-footer-typography"
            >
              <FlipText
                textStyles={"text-white/75"}
                secondTextStyles={"!text-white"}
                text={"Meeting and Events"}
              ></FlipText>
            </Link>
            <Link
              onClick={handleLinkClick}
              to="/gallery"
              className="my-1 nav-link-footer-typography"
            >
              <FlipText
                textStyles={"text-white/75"}
                secondTextStyles={"!text-white"}
                text={"Gallery"}
              ></FlipText>
            </Link>
          </div>
          <div className="col-span-3 xl:col-span-1 xl:row-span-2 flex flex-col gap-6 items-center justify-start xl:items-start mb-6">
            <div
              onClick={() => handleClick("contactUs")}
              className="my-1 nav-link-footer-typography"
            >
              <FlipText
                textStyles={"text-white/75"}
                secondTextStyles={"!text-white"}
                text={"Contact Us"}
              ></FlipText>
            </div>
            <div
              onClick={() => handleClick("aboutUs")}
              className="my-1 nav-link-footer-typography"
            >
              <FlipText
                textStyles={"text-white/75"}
                secondTextStyles={"!text-white"}
                text={"About"}
              ></FlipText>
            </div>
            <div
              onClick={() => handleClick("br-map")}
              className="my-1 nav-link-footer-typography"
            >
              <FlipText
                textStyles={"text-white/75"}
                secondTextStyles={"!text-white"}
                text={"View On Map"}
              ></FlipText>
            </div>
            <Link
              onClick={handleLinkClick}
              to="/articles"
              className="my-1 nav-link-footer-typography"
            >
              <FlipText
                textStyles={"text-white/75"}
                secondTextStyles={"!text-white"}
                text={"Articles For You"}
              ></FlipText>
            </Link>
          </div> */}

          <div className="col-span-3 row-span-1 flex flex-row justify-center xl:justify-start gap-4 xl:gap-12 mt-8 mb-8 xl:mt-0">
            <p
              className="nav-link-footer-typography capitalize !font-thin"
              style={{ fontSize: "16px" }}
            >
              We Accept :
            </p>

            <div className="grid grid-cols-3 xl:grid-cols-6 gap-3">
              {cmsData?.payments?.map((data) => (
                <div key={data.id} className="h-10 w-14">
                  <img className="" src={createAssetsUrl(data?.image)} alt="" />
                </div>
              ))}

              {/* <div className="h-10 w-14">
                <img className="" src={Kpay} alt="" />
              </div>
              <div className="h-10 w-14">
                <img className="" src={MasterCard} alt="" />
              </div>
              <div className="h-10 w-14">
                <img className="" src={MPU} alt="" />
              </div>
              <div className="h-10 w-14">
                <img className="" src={Union} alt="" />
              </div>
              <div className="h-10 w-14">
                <img className="" src={VISA} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto container">
        <div className="w-full divider h-[0.5px] bg-white/30 mb-10"></div>

        <div className="w-full flex flex-col gap-6 xl:gap-0 xl:flex-row justify-between items-center pb-10 typo-label-2 text-sm text-white/75">
          <p>The Boundary Residence © 2023</p>

          <p className="text-center">
            All Right Reserved. Powered by Beyond Limits Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};
