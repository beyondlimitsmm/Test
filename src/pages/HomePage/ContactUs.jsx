import { useQuery } from "@tanstack/react-query";

import { getInTouch } from "../../api/home";
import Error from "../../components/Error";
import { parseCmsData } from "../../libs/functions";
import useSendEmail from "../../hooks/useSendEmail";
import ButtonLoading from "../../components/ButtonLoading";
import { FlipText } from "../../components/FlipText";

export const ContactUs = () => {
  const { data, error } = useQuery({
    queryKey: ["getInTouch"],
    queryFn: getInTouch,
  });

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
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  if (error) return <Error />;

  const cmsData = parseCmsData(data);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((data) => {
      const newData = { ...data };
      newData[name] = value;
      return newData;
    });
  };

  const onSubmitHandler = async () => {
    await onSubmit(formData);
  };

  return (
    <section id="contactUs" className="bg-[#F8F9FA] xl:py-12  px-4 py-6">
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
                  <FlipText
                    text={cmsData?.contactInfo?.email}
                    textStyles={" typo-body-2 font-medium "}
                    secondTextStyles={"!text-black"}
                  ></FlipText>
                </a>
              </div>
              <div className="flex xl:justify-start flex-row">
                <p className="min-w-[75px] typo-body-2">Phone :</p>
                <a href={`tel:${cmsData?.contactInfo?.phone}`}>
                  <FlipText
                    text={cmsData?.contactInfo?.phone}
                    textStyles={" typo-body-2 font-medium "}
                    secondTextStyles={"!text-black"}
                  ></FlipText>
                </a>
              </div>

              <div className="my-8">
                <p className="typo-body-2 mb-2 text-start">
                  Check In / Check Out
                </p>

                <div className="flex justify-start">
                  <p className="w-[100px] typo-body-2">Check In :</p>
                  <p className="typo-body-2 font-medium">
                    {cmsData?.openClose?.open}
                  </p>
                </div>
                <div className="flex justify-start">
                  <p className="w-[100px] typo-body-2">Check Out :</p>
                  <p className="typo-body-2 font-medium">
                    {cmsData?.openClose?.close}
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
                name="name"
                value={formData.name}
                onChange={onChangeHandler}
              />

              <span className="input_underline"></span>

              <label className="input_label absolute top-0 typo-body-2 font-medium text-black/70 transition-all ease-linear">
                {cmsData?.label_for_name}
                <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="relative flex flex-col">
              <input
                type="text"
                className="input border-b border-black/20 py-3 outline-none bg-transparent w-full typo-body-2 mt-2 font-medium"
                name="phone"
                value={formData.phone}
                onChange={onChangeHandler}
              />

              <span className="input_underline"></span>

              <label className="input_label absolute top-0 typo-body-2 font-medium text-black/70 transition-all ease-linear">
                {cmsData?.label_for_phone}{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="relative flex flex-col">
              <input
                type="email"
                className="input border-b border-black/20 py-3 outline-none bg-transparent w-full typo-body-2 font-medium mt-2"
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
              />

              <span className="input_underline"></span>

              <label className="input_label absolute top-0 typo-body-2 font-medium text-black/70 transition-all ease-linear">
                {cmsData?.label_for_email}{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="relative flex flex-col">
              <input
                type="text"
                className="input border-b border-black/20 py-3 outline-none bg-transparent w-full typo-body-2 font-medium mt-2"
                name="subject"
                value={formData.subject}
                onChange={onChangeHandler}
              />

              <span className="input_underline"></span>

              <label className="input_label absolute top-0 typo-body-2 font-medium text-black/70 transition-all ease-linear">
                {cmsData?.label_for_subject}{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="relative flex flex-col">
              <textarea
                rows="4"
                type="text"
                className="input border-b border-black/20 py-3 outline-none bg-transparent w-full typo-body-2 mt-4 resize-none font-medium z-[8]"
                name="message"
                value={formData.message}
                onChange={onChangeHandler}
              ></textarea>

              <span className="input_underline"></span>

              <label className="input_label top-0 absolute z-10 bg-[#F8F9FA] typo-body-2 font-medium text-black/70 transition-all ease-linear">
                {cmsData?.label_for_message}
              </label>
            </div>

            {/* <OutlineButton
              linkStyle="self-end"
              routeTo="./articles"
              text="Send"
            ></OutlineButton> */}
            <div className="w-full flex items-start  justify-between">
              <h6
                className={`${isSuccess && "text-green-600"} ${
                  isError && "text-red-600"
                }`}
              >
                {message && message}
              </h6>
              <button
                disabled={isLoading}
                className="border-button relative"
                onClick={onSubmitHandler}
              >
                {isLoading && <ButtonLoading />}
                <span className={isLoading ? "opacity-0" : ""}>Send</span>
              </button>
            </div>
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
