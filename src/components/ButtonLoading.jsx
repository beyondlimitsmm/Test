import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ButtonLoading = () => (
  <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
    <AiOutlineLoading3Quarters className=" animate-spin" size={20} />
  </div>
);

export default ButtonLoading;
