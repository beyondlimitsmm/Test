import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import FeatherIcon from "../assets/images/feather.svg";
import { NavBarContext } from "../hooks/NavBarContext";
import { validateForm } from "../libs/functions";
import config from "../config";

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
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    comment: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((data) => {
      const newData = data;
      newData[name] = value;
      return { ...newData };
    });
  };

  const onSubmitHandler = async () => {
    if (validateForm(formData).length > 0) return console.log("Error");

    const body = parseValidForm();

    const data = await fetch(config?.EMAIL_API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());

    setIsSuccess(true);
    setFormData({
      name: "",
      contact: "",
      comment: "",
    });

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  const parseValidForm = () => {
    const data = formData;

    if (isValidEmail(data["contact"])) {
      data["email"] = data["contact"];
      data["phone"] = "-";
    } else {
      data["email"] = "-";
      data["phone"] = data["contact"];
    }

    delete data.contact;

    return data;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };

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
            className="cursor-pointer"
            onClick={() => togglePopUp()}
          ></AiOutlineClose>
        </div>
        <div className="flex flex-col gap-6 mt-4">
          <div className="typo-title text-center">Message Us</div>
          <input
            type="text"
            className="focus:border-primary border border-primary/50 outline-none p-3  w-full typo-body-2 font-medium"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            className="focus:border-primary border border-primary/50 outline-none p-3  w-full typo-body-2 font-medium"
            placeholder="Your Email or Phone"
            name="contact"
            value={formData.contact}
            onChange={onChangeHandler}
          />
          <textarea
            rows="4"
            type="text"
            className="focus:border-primary border border-primary/50 outline-none p-3  w-full typo-body-2 font-medium"
            placeholder="Write Here"
            name="comment"
            value={formData.comment}
            onChange={onChangeHandler}
          />
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={onSubmitHandler}
              className="pb-4 pt-[11px] px-20 tracking-widest border border-primary bg-primary font-madera text-white"
            >
              Send
            </button>
          </div>
          {isSuccess && (
            <h6 className="text-center text-green-600">
              Message send successfully.
            </h6>
          )}
        </div>
      </div>
    </div>
  );
};
