import Spinner from "../assets/images/spinner.svg";

const Loading = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <img src={Spinner} alt="" />
    </div>
  );
};

export default Loading;
