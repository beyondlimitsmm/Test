import { useQuery } from "react-query";
import { OutlineButton } from "../../components/OutlineButton";
import { getInTouch } from "../../api/home";
import { parseCmsData } from "../../libs/functions";
import { useState } from "react";

export const ContactUs = () => {
  const { data } = useQuery("getInTouch", getInTouch);
  const { formData, setFormData } = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const cmsData = parseCmsData(data);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
  };

  return (
    <section id="contactUs" className="bg-[#F8F9FA] xl:py-12 xl:px-0 px-4 py-6">
      <div className="container mx-auto relative overflow-hidden">
        <div className="flex my-12 flex-col xl:flex-row">
          <div className="flex-1">
            <h4
              className="typo-title capitalize typo-text-black text-center xl:text-start"
              style={{ fontSize: "45px" }}
            >
              Get In Touch
            </h4>
            <div className="my-10 flex flex-col gap-4 xl:gap-2">
              <div className="flex xl:justify-start flex-row">
                <p className="min-w-[75px] typo-body-2">Address :</p>
                <a
                  href={cmsData?.contactInfo?.location?.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="typo-body-2 font-medium hover:text-hoverPale">
                    {/* No 129, Inya Road,
                    <br className="hidden xl:block" />
                    Kamayut Township Yangon, Myanmar */}
                    {cmsData?.contactInfo?.location?.name}
                  </p>
                </a>
              </div>
              <div className="flex xl:justify-start flex-row">
                <p className="min-w-[75px] typo-body-2">Email :</p>
                <a href={`mailto:${cmsData?.contactInfo?.email}`}>
                  <p className="flip-text typo-body-2 font-medium">
                    {cmsData?.contactInfo?.email}
                  </p>
                </a>
              </div>
              <div className="flex xl:justify-start flex-row">
                <p className="min-w-[75px] typo-body-2">Phone :</p>
                <a href={`tel:${cmsData?.contactInfo?.phone}`}>
                  <p className="flip-text typo-body-2 font-medium">
                    {cmsData?.contactInfo?.phone}
                  </p>
                </a>
              </div>

              <div className="my-8">
                <p className="typo-body-2 mb-2 text-center xl:text-start">
                  Opening / Closing Hours
                </p>

                <div className="flex justify-start">
                  <p className="w-[150px] typo-body-2">
                    {cmsData?.openClose?.open?.split(":")[0]} :
                  </p>
                  <p className="typo-body-2 font-medium">
                    {cmsData?.openClose?.open?.split(":")[1]}
                  </p>
                </div>
                <div className="flex justify-start">
                  <p className="w-[150px] typo-body-2">
                    {cmsData?.openClose?.close?.split(":")[0]} :
                  </p>
                  <p className="typo-body-2 font-medium">
                    {cmsData?.openClose?.close?.split(":")[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 input_form flex flex-col gap-8 typo-body-2 !font-thin">
            <div className="relative flex flex-col">
              <input
                type="text"
                className="input border-b border-black/20 py-3 outline-none bg-transparent w-full typo-body-2 mt-2 font-medium"
              />

              <span className="input_underline"></span>

              <label className="input_label absolute top-0 typo-body-2 font-medium text-black/70 transition-all ease-linear">
                Your Name<span className="text-red-500">*</span>
              </label>
            </div>

            <div className="relative flex flex-col">
              <input
                type="text"
                className="input border-b border-black/20 py-3 outline-none bg-transparent w-full typo-body-2 mt-2 font-medium"
              />

              <span className="input_underline"></span>

              <label className="input_label absolute top-0 typo-body-2 font-medium text-black/70 transition-all ease-linear">
                Phone <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="relative flex flex-col">
              <input
                type="text"
                className="input border-b border-black/20 py-3 outline-none bg-transparent w-full typo-body-2 font-medium mt-2"
              />

              <span className="input_underline"></span>

              <label className="input_label absolute top-0 typo-body-2 font-medium text-black/70 transition-all ease-linear">
                Email <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="relative flex flex-col">
              <textarea
                rows="4"
                type="text"
                className="input border-b border-black/20 py-3 outline-none bg-transparent w-full typo-body-2 mt-2 resize-none font-medium"
              ></textarea>

              <span className="input_underline"></span>

              <label className="input_label top-0 absolute z-10 bg-[#F8F9FA] typo-body-2 font-medium text-black/70 transition-all ease-linear">
                Your Comment
              </label>
            </div>

            <OutlineButton
              linkStyle="self-end"
              routeTo="./articles"
              text="Send"
            ></OutlineButton>
          </div>
        </div>

        <div className="h-[60vh] w-full rounded-xl overflow-hidden" id="br-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d954.849956028799!2d96.14708595662393!3d16.806509752734293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ebbef8589b9d%3A0xe6e3afa9fcce765!2sThe%20Boundary%20Residence!5e0!3m2!1sen!2smm&z=0"
            style={{ border: 0, width: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
