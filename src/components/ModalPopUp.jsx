import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import FeatherIcon from "../assets/images/feather.svg";
import { NavBarContext } from "../hooks/NavBarContext";

export const ModalPopUp = ({
  // headerIcon,
  // title,
  // placeholder1,
  // placeholder2,
  // placeholder3,
  // buttonTitle,
  buttonAction,
}) => {
  const { isPopUpOpen, togglePopUp } = useContext(NavBarContext);

  return (
    <div
      className={`w-screen h-screen fixed inset-0 z-[98] bg-black/20 flex justify-center items-center ${
        isPopUpOpen ? "flex" : "hidden"
      }`}
      onClick={() => togglePopUp()}
    >
      <div
        className="flex flex-col w-[375px] p-10  border-2 border-primary bg-white z-[99999]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between relative">
          <AiOutlineClose
            size={27}
            className="invisible opacity-0"
          ></AiOutlineClose>
          <div className="w-12 h-12 ">
            <img src={FeatherIcon} alt="" className="w-full h-full" />
          </div>
          <AiOutlineClose
            size={27}
            onClick={() => togglePopUp()}
          ></AiOutlineClose>
        </div>
        <div className="flex flex-col gap-6 mt-4">
          <div className="typo-title text-center">Message Us</div>
          <input
            type="text"
            className="focus:border-primary border border-primary/50 outline-none p-3  w-full typo-body-2 font-medium"
            placeholder="Your Name"
          />
          <input
            type="text"
            className="focus:border-primary border border-primary/50 outline-none p-3  w-full typo-body-2 font-medium"
            placeholder="Your Email or Phone"
          />
          <textarea
            rows="4"
            type="text"
            className="focus:border-primary border border-primary/50 outline-none p-3  w-full typo-body-2 font-medium"
            placeholder="Write Here"
          />
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={buttonAction}
              className="pb-4 pt-[11px] px-20 tracking-widest border border-primary bg-primary font-madera text-white"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
