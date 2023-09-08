import JCB from "../assets/images/payment_images/JCB.jpg";
import Kpay from "../assets/images/payment_images/Kpay.jpg";
import MasterCard from "../assets/images/payment_images/MasterCard.jpg";
import MPU from "../assets/images/payment_images/MPU.jpg";
import Union from "../assets/images/payment_images/Union.jpg";
import VISA from "../assets/images/payment_images/VISA.jpg";

import Facebook from "../assets/images/Facebook.svg";
import Instagram from "../assets/images/Instagram.svg";
import Youtube from "../assets/images/Youtube.svg";

import { Link, useLocation, useNavigate } from "react-router-dom";
import HotelLogo from "../assets/Logo.png";
import { handleScrollDownClick } from "../utils";
import { FlipText } from "./FlipText";

export const Footer = () => {
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
    }, 1);
  }

  function handleLinkClick() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

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
                href="https://goo.gl/maps/LFB6PZeqcQDDuBnS8"
                target="_blank"
                className="typo-body-2 font-medium max-w-[400px] xl:text-start text-center hover:text-white transition"
                rel="noreferrer"
              >
                Coner of Dhammazedi Road x Inya Road, No.129, Kamayut Township
                Yangon, Myanmar, 11041
              </a>
            </div>
            <div className="flex justify-center xl:justify-start">
              <p className="min-w-[75px] typo-body-2">Email :</p>
              <a href="mailto:theboundaryresidence@gmail.com">
                <FlipText
                  text={"theboundaryresidence@gmail.com"}
                  textStyles={"text-white/75 typo-body-2 font-medium"}
                  secondTextStyles={"!text-white"}
                ></FlipText>
              </a>
            </div>
            <div className="flex justify-center xl:justify-start">
              <p className="min-w-[75px] typo-body-2">Phone :</p>
              <a href="tel:01526289">
                <FlipText
                  text={"01-526-289"}
                  secondTextStyles={"!text-white"}
                  textStyles={"text-white/75 typo-body-2 font-medium"}
                ></FlipText>
              </a>
            </div>
          </div>

          <div className="socials flex gap-8 xl:mb-10 mb-6 justify-center xl:justify-start">
            <img
              src={Facebook}
              alt=""
              className="opacity-40 w-10 h-10 rounded-full hover:opacity-100 transition-all duration-300 bg-black"
            />
            <img
              src={Instagram}
              alt=""
              className="opacity-40 w-10 h-10 rounded-full hover:opacity-100 transition-all duration-300 bg-black"
            />

            <img
              src={Youtube}
              alt=""
              className="opacity-40 w-10 h-10 rounded-full hover:opacity-100 transition-all duration-300 bg-black"
            />
          </div>
        </div>

        <div className="col-span-1 grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-3">
          <div className="col-span-3 xl:col-span-1 xl:row-span-2 flex flex-col gap-6 items-center justify-start xl:items-start mb-6">
            <Link
              onClick={handleLinkClick}
              to="/"
              className="my-1 nav-link-footer-typography"
            >
              <FlipText
                textStyles={"text-white/75"}
                secondTextStyles={"!text-white"}
                text={"Home"}
              ></FlipText>
            </Link>
            <Link
              onClick={handleLinkClick}
              to="/rooms"
              className="my-1 nav-link-footer-typography"
            >
              <FlipText
                textStyles={"text-white/75"}
                secondTextStyles={"!text-white"}
                text={"Rooms and Suite"}
              ></FlipText>
            </Link>
            <div
              onClick={() => handleScrollDownClick("features")}
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
            <Link
              href="tel:01526289"
              className="my-1 nav-link-footer-typography"
            >
              <FlipText
                textStyles={"text-white/75"}
                secondTextStyles={"!text-white"}
                text={"Phone Reservation"}
              ></FlipText>
            </Link>
          </div>
          <div className="col-span-3 xl:col-span-1 xl:row-span-2 flex flex-col gap-6 items-center justify-start xl:items-start mb-6">
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
          </div>

          <div className="col-span-3 row-span-1 flex flex-row justify-center xl:justify-start gap-4 xl:gap-12 mt-8 mb-8 xl:mt-0">
            <p
              className="nav-link-footer-typography capitalize !font-thin"
              style={{ fontSize: "16px" }}
            >
              We Accept :
            </p>

            <div className="grid grid-cols-3 xl:grid-cols-6 gap-3">
              <div className="h-10 w-14">
                <img className="" src={JCB} alt="" />
              </div>
              <div className="h-10 w-14">
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
              </div>
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
