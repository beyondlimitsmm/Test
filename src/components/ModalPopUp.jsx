import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

import FeatherIcon from "../assets/images/feather.svg";
import { NavBarContext } from "../hooks/NavBarContext";
import useSendEmail from "../hooks/useSendEmail";
import ButtonLoading from "./ButtonLoading";
import BDropdown from "./BDropdown";
import { useQuery } from "@tanstack/react-query";
import { bookNow } from "../api/home";
import { createAssetsUrl, parseCmsData } from "../libs/functions";

export const ModalPopUp = ({
  // headerIcon,
  // title,
  // placeholder1,
  // placeholder2,
  // placeholder3,
  // buttonTitle,
  buttonAction,
}) => {
  const { isPopUpOpen, togglePopUp, roomType, setRoomType } =
    useContext(NavBarContext);

  const {
    isSuccess,
    isError,
    isLoading,
    message,
    onSubmit,
    formData,
    setFormData,
  } = useSendEmail({
    name: "",
    email: "",
    phone: "",
    subject: "",
    roomType,
    message: "",
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
    // const body = parseValidForm();
    // data["roomType"] = roomType ?? "-";

    await onSubmit(formData);
  };

  // const parseValidForm = () => {
  //   const data = { ...formData };

  //   if (isNaN(data["contact"])) {
  //     data["email"] = data["contact"];
  //     data["phone"] = "-";
  //   } else {
  //     data["email"] = "-";
  //     data["phone"] = data["contact"];
  //   }

  //   delete data.contact;

  //   return data;
  // };

  const onCloseHandler = () => {
    togglePopUp();
    setRoomType(undefined);
  };

  const { data } = useQuery({
    queryKey: ["bookNow"],
    queryFn: bookNow,
  });

  const cmsData = parseCmsData(data);

  return (
    <div
      className={`w-screen h-screen fixed inset-0 z-[98] bg-black/20 flex justify-center items-center ${
        isPopUpOpen ? "flex" : "hidden"
      }`}
      onClick={onCloseHandler}
    >
      <div className="border-2 border-primary bg-white z-[99999] flex-1 lg:max-w-[1024px] max-w-[500px] flex justify-between items-center">
        <div className="w-1/2 h-full lg:flex hidden justify-center items-center">
          <img
            src={createAssetsUrl(cmsData?.logo)}
            alt="logo"
            className="w-[300px]"
          />
        </div>

        <div
          className="flex flex-col lg:w-1/2 w-full py-10 "
          onClick={(e) => e.stopPropagation()}
        >
          <div className="border-primary border-opacity-10 lg:border-l border-l-0">
            <div className="flex justify-between relative px-10">
              <AiOutlineClose
                size={27}
                className="invisible opacity-0"
              ></AiOutlineClose>
              <div className="w-12 h-12 ">
                <img
                  src={createAssetsUrl(cmsData?.icon)}
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <AiOutlineClose
                size={27}
                className="cursor-pointer"
                onClick={onCloseHandler}
              ></AiOutlineClose>
            </div>
            <div className="flex flex-col gap-4 mt-4  px-10">
              <div className="typo-title text-center">{cmsData?.title}</div>

              <input
                type="text"
                className="focus:border-primary border border-primary/50 outline-none p-3  w-full typo-body-2 font-medium"
                placeholder={cmsData?.label_for_name}
                name="name"
                value={formData.name}
                onChange={onChangeHandler}
              />

              <input
                type="email"
                className="focus:border-primary border border-primary/50 outline-none p-3  w-full typo-body-2 font-medium"
                placeholder={cmsData?.label_for_email}
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
              />

              <input
                type="text"
                className="focus:border-primary border border-primary/50 outline-none p-3  w-full typo-body-2 font-medium"
                placeholder={cmsData?.label_for_phone}
                name="phone"
                value={formData.phone}
                onChange={onChangeHandler}
              />

              <input
                type="text"
                className="focus:border-primary border border-primary/50 outline-none p-3  w-full typo-body-2 font-medium"
                placeholder={cmsData?.label_for_subject}
                name="subject"
                value={formData.subject}
                onChange={onChangeHandler}
              />

              <BDropdown
                label={cmsData?.label_for_roomType}
                selectedRoomName={roomType}
                onOptionChange={(option) =>
                  setFormData({ ...formData, roomType: option })
                }
              />

              <textarea
                rows="4"
                type="text"
                className="focus:border-primary border border-primary/50 outline-none p-3  w-full typo-body-2 font-medium"
                placeholder={cmsData?.label_for_message}
                name="message"
                value={formData.message}
                onChange={onChangeHandler}
              />
              <div className="flex justify-center items-center mt-4">
                <button
                  disabled={isLoading}
                  onClick={onSubmitHandler}
                  className="pb-4 pt-[11px] px-20 tracking-widest border border-primary bg-primary font-madera text-white relative"
                >
                  {isLoading && <ButtonLoading />}
                  <span className={isLoading ? "opacity-0" : ""}>Send</span>
                </button>
              </div>
              <h6
                className={`${isSuccess && "text-green-600"} ${
                  isError && "text-red-600"
                } text-center`}
              >
                {message && message}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
