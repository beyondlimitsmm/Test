import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProgressiveImage from "react-progressive-graceful-image";
import { about, facility, gallery, header } from "../../api/restaurant";
import RestaurantPlaceHolder from "../../assets/images/RestaurantPlaceHolder.jpg";
import Error from "../../components/Error";
import { createAssetsUrl, parseCmsData } from "../../libs/functions";
import "../../styles/ImageCarousel.css";

// const CarouselListData = [
//   {
//     backgroundImage:
//       "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
//     iconComponent: <TiWeatherDownpour size={25}></TiWeatherDownpour>,
//     mainText: "Blonkisoaz",
//     subText: "Omuke trughte a otufta",
//   },
//   {
//     backgroundImage:
//       "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
//     iconComponent: <TiWeatherDownpour size={25}></TiWeatherDownpour>,
//     mainText: "Oretemauw",
//     subText: "Omuke trughte a otufta",
//   },
//   {
//     backgroundImage:
//       "https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg",
//     iconComponent: <TiWeatherDownpour size={25}></TiWeatherDownpour>,
//     mainText: "Iteresuselle",
//     subText: "Omuke trughte a otufta",
//   },
//   {
//     backgroundImage:
//       "https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg",
//     iconComponent: <TiWeatherDownpour size={25}></TiWeatherDownpour>,
//     mainText: "Idiefe",
//     subText: "Omuke trughte a otufta",
//   },
//   {
//     backgroundImage:
//       "https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg",
//     iconComponent: <TiWeatherDownpour size={25}></TiWeatherDownpour>,
//     mainText: "Inatethi",
//     subText: "Omuke trughte a otufta",
//   },
//   {
//     backgroundImage:
//       "https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg",
//     iconComponent: <TiWeatherDownpour size={25}></TiWeatherDownpour>,
//     mainText: "Inatethi",
//     subText: "Omuke trughte a otufta",
//   },
// ];

export const RestaurantPage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const { data: headData, error } = useQuery(["restaurantHeader"], header);
  const { data: aboutData } = useQuery(["restaurantAbout"], about);
  const { data: facilityData } = useQuery(["restaurantFacility"], facility);
  const { data: galleryData } = useQuery(["restaurantGallery"], gallery);

  if (error) return <Error />;

  const cmsHeadData = parseCmsData(headData);
  const cmsAboutData = parseCmsData(aboutData);
  const cmsFacilityData = parseCmsData(facilityData);
  const cmsGalleryData = parseCmsData(galleryData);

  var optionElements = document.querySelectorAll(".option");

  optionElements.forEach(function (element) {
    element.addEventListener("click", function () {
      optionElements.forEach(function (el) {
        el.classList.remove("active");
      });

      element.classList.add("active");
    });
  });

  return (
    <>
      {/* Section 1 */}
      <section className="-mt-20 w-screen min-h-screen xl:min-h-0 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <ProgressiveImage
            src={createAssetsUrl(cmsHeadData?.image)}
            placeholder={RestaurantPlaceHolder}
          >
            {(src, loading) => (
              <img
                className={`w-full h-full object-cover brightness-75 image${
                  loading ? " loading" : " heroloaded"
                }`}
                src={src}
                alt=""
              />
            )}
          </ProgressiveImage>
          {/* <img
            src={createAssetsUrl(cmsHeadData?.image)}
            alt=""
            className="w-full h-full object-cover brightness-75"
          /> */}
        </div>
        <div className="h-screen xl:h-[75vh] xl:py-48 flex flex-col justify-center items-center">
          <h4 className="text-white z-20 typo-display capitalize text-5xl mb-6 xl:mb-0">
            {cmsHeadData?.title}
          </h4>
          <p className="typo-body-2 text-white max-w-[560px] mx-4 xl:mx-0 mt-2 md:mt-6 text-center">
            {cmsHeadData?.description}
          </p>
        </div>
      </section>
      {/* Section 2 */}

      <section className="py-20 bg-whiteGray">
        <div className="container mx-auto flex justify-center flex-col gap-10 xl:gap-0 xl:flex-row">
          <div className="p-8 xl:p-0 flex-1 xl:max-w-2xl flex flex-col gap-8">
            <h4 className="text-5xl my-4 transition-all duration-500 font-walbaum">
              {cmsAboutData?.title}
            </h4>
            <div className="flex-col flex gap-4">
              {cmsAboutData?.descriptions?.map((data) => (
                <p
                  key={data?.id}
                  className="leading-relaxed typo-body-2 transition-all duration-500"
                >
                  {data?.description}
                </p>
              ))}
              {/* <p className="leading-relaxed typo-body-2 transition-all duration-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
                molestiae impedit, nobis eligendi nam saepe! Dolorum autem
                consequuntur natus fugaelit. Officiis pariatur temporibus eum
                porro nam sed consectetur quia facilis nemo, in architecto enim
                libero voluptates. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Nostrum rerum aliquam, dolores quas harum modi
                similique quos tempora iusto cum?
              </p>
              <p className="leading-relaxed typo-body-2 transition-all duration-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
                molestiae impedit, nobis eligendi nam saepe! Dolorum autem
                consequuntur natus fuga veritatis quaerat, aliquid quasi magni
                quod laudantium nemo omnis quia facilis nemo, in architecto enim
                libero voluptates. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Nostrum rerum aliquam, dolores quas harum modi
                similique quos tempora iusto cum?
              </p> */}
            </div>
            <div>
              <div className="border-b py-4 flex justify-between">
                <p>Cuisine</p>
                <p>{cmsAboutData?.cuisine}</p>
              </div>
              <div className="border-b py-4 flex justify-between">
                <p>Dress Code</p>
                <p>{cmsAboutData?.dressCode}</p>
              </div>
              <div className="border-b py-4 flex justify-between">
                <p>Opening hours</p>
                <p>{cmsAboutData?.openHours}</p>
              </div>
            </div>
          </div>

          <div className="flex-1 xl:max-w-lg py-16 px-12 h-max bg-white xl:ml-20 flex flex-col gap-8 xl:gap-16">
            <h4 className="header flex items-center gap-4 typo-body-2">
              <span className="w-10 h-px bg-primary inline-block"></span>
              {cmsFacilityData?.title}
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 opacity-70">
              {cmsFacilityData?.facilityNames?.map((data) => (
                <div key={data?.id} className="flex gap-4 items-center">
                  <div className="min-w-max">
                    {data?.icon?.data ? (
                      <img
                        src={createAssetsUrl(data?.icon)}
                        alt="icon"
                        className="w-[24px] h-[24px]"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3A1E13"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-utensils"
                      >
                        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                        <path d="M7 2v20" />
                        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                      </svg>
                    )}
                  </div>
                  <span>{data?.name}</span>
                </div>
              ))}
              {/* <div className="flex gap-4 items-center">
                <div className="min-w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3A1E13"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-utensils"
                  >
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                    <path d="M7 2v20" />
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                  </svg>
                </div>
                <span>Open for breakfast</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="min-w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3A1E13"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-utensils"
                  >
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                    <path d="M7 2v20" />
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                  </svg>
                </div>
                <span className="break-words">
                  Open for breakfast & and Lunch
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="min-w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3A1E13"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-utensils"
                  >
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                    <path d="M7 2v20" />
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                  </svg>
                </div>
                <span>Open for breakfast & dinner</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="min-w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3A1E13"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-utensils"
                  >
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                    <path d="M7 2v20" />
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                  </svg>
                </div>
                <span>Open for breakfast & dinner</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="min-w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3A1E13"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-utensils"
                  >
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                    <path d="M7 2v20" />
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                  </svg>
                </div>
                <span>Open for breakfast</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="min-w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3A1E13"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-utensils"
                  >
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                    <path d="M7 2v20" />
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                  </svg>
                </div>
                <span className="break-words">
                  Open for breakfast & and Lunch
                </span>
              </div> */}
            </div>
            <a
              href={cmsFacilityData?.button?.link}
              className="border-button w-full text-center"
            >
              {cmsFacilityData?.button?.name}
            </a>
          </div>
        </div>
      </section>
      {/* Section 3 */}
      <section className="bg-whiteGray">
        <div className="slide_card-container">
          <div className="options">
            {cmsGalleryData?.galleryCards?.map((el, index) => {
              return (
                <OptionCard
                  key={index}
                  handleClick={() => setActiveImage(index)}
                  active={index === activeImage}
                  backgroundImage={createAssetsUrl(el.image)}
                  iconComponent={el.iconComponent}
                  mainText={el.title}
                  subText={el.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

const OptionCard = ({
  active,
  backgroundImage,
  iconComponent,
  mainText,
  subText,
  handleClick,
}) => {
  return (
    <div
      onClick={handleClick}
      className={`option ${active && "active"}`}
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* <div className="shadow"></div>
      <div className="label">
        <div className="icon">
          <FaBowlFood size={25} />
        </div>
        <div className="info">
          <div className="main">{mainText}</div>
          <div className="sub">{subText}</div>
        </div>
      </div> */}
    </div>
  );
};
