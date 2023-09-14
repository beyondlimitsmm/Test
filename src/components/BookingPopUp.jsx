import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavBarContext } from "../hooks/NavBarContext";

export const MessageUsPopUp = () => {
  const { isPopUpOpen, togglePopUp } = useContext(NavBarContext);

  return (
    <div
      className={`w-screen h-screen relative z-[99999] bg-black/5 flex justify-center items-center overflow-y-hidden ${
        isPopUpOpen ? "flex" : "hidden"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col w-96 p-10 border-2 border-primary">
        <div className="flex justify-between">
          <div></div>
          <div className="">
            <img src="../assets/images/feather.svg" alt="" />
          </div>
          <AiOutlineClose
            size={27}
            onClick={() => togglePopUp()}
          ></AiOutlineClose>
        </div>
        <div className="flex flex-col gap-6">
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
            type="text"
            className="focus:border-primary border border-primary/50 outline-none p-3  w-full typo-body-2 font-medium"
            placeholder="Write Here"
          />
          <div className="flex justify-center items-center mt-4">
            <button className="pb-4 pt-[11px] px-20 tracking-widest border border-primary bg-primary font-madera text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
