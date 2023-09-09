import { useNavigate } from "react-router-dom";

export const LinkToContactUs = () => {
  const navigate = useNavigate();

  function handleContactUsClick(sectionId) {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth",
      });
    }, 1);
  }

  return (
    <section className="bg-[#3A1E13] w-screen h-[50vh] my-12">
      <div className="container mx-auto text-white flex justify-center items-center h-full">
        <div className="max-w-xs flex flex-col justify-center gap-10">
          <h4 className="text-4xl">
            If you have any questions feel free to contact us!
          </h4>
          <div className="w-max">
            <button
              className="border-button !text-white w-max"
              id="contact-us-btn"
              onClick={() => handleContactUsClick("contactUs")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
