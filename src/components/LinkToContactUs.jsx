import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getContactUs } from "../api/roomsAndSuites";

export const LinkToContactUs = () => {
  const { data, isLoading, error } = useQuery(["contact-us"], getContactUs);
  const navigate = useNavigate();

  const cmsData = data?.data.attributes;
  if (isLoading) return null;
  if (error) return null;

  function handleContactUsClick(sectionId) {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  }

  return (
    <section className="bg-[#3A1E13] w-screen h-[50vh] my-12">
      <div className="container mx-auto text-white flex justify-center items-center h-full">
        <div className="max-w-2xl flex flex-col sm:flex-row justify-center items-center gap-10">
          <h4 className="text-4xl text-left ml-4 sm:ml-0 leading-snug">
            {cmsData?.title}
          </h4>
          <div className="w-max">
            <button
              className="border-button !text-white w-max"
              id="contact-us-btn"
              onClick={() => handleContactUsClick("contactUs")}
            >
              {cmsData?.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
