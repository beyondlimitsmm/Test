import { useState } from "react";
import { TiWeatherDownpour } from "react-icons/ti";
import PoolBg from "../../assets/images/PoolPlaceHolder.webp";
import "../../styles/ImageCarousel.css";
import { useQuery } from "@tanstack/react-query";
import { about, facility, gallery, header } from "../../api/pool";

import Error from "../../components/Error";
import { createAssetsUrl, parseCmsData } from "../../libs/functions";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/scrollbar";
import ProgressiveImage from "react-progressive-graceful-image";
import config from "../../config";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { RoomSlider } from "../../components/RoomSlider";
import ImageSlider from "../../components/ImageSlider";
import ReactMarkdown from "react-markdown";
import { LinkToContactUs } from "../../components/LinkToContactUs";

const CarouselListData = [
  {
    backgroundImage:
      "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    iconComponent: <TiWeatherDownpour size={25}></TiWeatherDownpour>,
    mainText: "Blonkisoaz",
    subText: "Omuke trughte a otufta",
  },
  {
    backgroundImage:
      "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
    iconComponent: <TiWeatherDownpour size={25}></TiWeatherDownpour>,
    mainText: "Oretemauw",
    subText: "Omuke trughte a otufta",
  },
  {
    backgroundImage:
      "https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg",
    iconComponent: <TiWeatherDownpour size={25}></TiWeatherDownpour>,
    mainText: "Iteresuselle",
    subText: "Omuke trughte a otufta",
  },
  {
    backgroundImage:
      "https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg",
    iconComponent: <TiWeatherDownpour size={25}></TiWeatherDownpour>,
    mainText: "Idiefe",
    subText: "Omuke trughte a otufta",
  },
  {
    backgroundImage:
      "https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg",
    iconComponent: <TiWeatherDownpour size={25}></TiWeatherDownpour>,
    mainText: "Inatethi",
    subText: "Omuke trughte a otufta",
  },
];

export const PoolPage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const {
    data: headData,
    error,
    isLoading: loadingHeader,
  } = useQuery(["poolHeader"], header);
  const { data: galleryData, isLoading: loadedGallery } = useQuery(
    ["poolGallery"],
    gallery
  );
  const { data: facilityData, isLoading: loadingFacility } = useQuery(
    ["poolFacilities"],
    facility
  );
  const { data: poolAbout } = useQuery(["poolAbout"], about);

  if (error) return <Error />;

  if (loadingFacility || loadingHeader || loadedGallery) {
    return <Loading />;
  }

  const cmsHeadData = parseCmsData(headData);
  const cmsGalleryData = parseCmsData(galleryData);
  const cmsFacilityData = parseCmsData(facilityData);
  const cmsPoolAbout = parseCmsData(poolAbout);

  const galleryImages = cmsGalleryData?.poolCards?.map((el) => {
    return createAssetsUrl(el?.image);
  });

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
            placeholder={PoolBg}
          >
            {(src, loading) => (
              <img
                src={src}
                alt=""
                className={`w-full h-full object-cover brightness-50 ${
                  loading ? "loading" : "heroloaded"
                }`}
              />
            )}
          </ProgressiveImage>
        </div>
        <div className="h-screen xl:h-[75vh] xl:py-48 flex flex-col justify-center items-center">
          <h4 className="text-white z-20 typo-display capitalize text-5xl mb-6 xl:mb-0">
            {cmsHeadData?.title}
          </h4>
          <ReactMarkdown className="typo-body-2 text-white max-w-[560px] mx-4 xl:mx-0 mt-2 md:mt-6 text-center">
            {cmsHeadData?.description}
          </ReactMarkdown>
        </div>
      </section>
      {/* Section 2 */}

      <section className="py-20 bg-whiteGray">
        <div className="container mx-auto flex justify-center flex-col gap-10 xl:gap-0 xl:flex-row">
          <div className="p-8 xl:p-0 flex-1 xl:max-w-2xl flex flex-col gap-8">
            <h4 className="text-5xl my-4 transition-all duration-500 font-walbaum">
              {cmsPoolAbout?.title}
            </h4>
            <div className="flex-col flex gap-4">
              {cmsPoolAbout?.descriptions?.map((data) => (
                <ReactMarkdown
                  key={data?.id}
                  className="leading-relaxed typo-body-2 transition-all duration-500"
                >
                  {data?.description}
                </ReactMarkdown>
              ))}
            </div>
            {/* <div>
              <div className="border-b py-4 flex justify-between">
                <p>Cuisine</p>
                <p>French cuisine , alpine classics</p>
              </div>
              <div className="border-b py-4 flex justify-between">
                <p>Dress Code</p>
                <p>Smart-casual</p>
              </div>
              <div className="border-b py-4 flex justify-between">
                <p>Opening hours</p>
                <p>7:00pm – 10:00 pm (last order)</p>
              </div>
            </div> */}

            <div>
              {cmsPoolAbout?.facilities
                ?.slice(0, 4)
                .map(({ label, value }, index) => (
                  <div
                    key={index}
                    className="border-b py-4 flex justify-between"
                  >
                    <p>{label}</p>
                    <p>{value}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex-1 xl:max-w-lg py-16 px-12 h-max bg-white xl:ml-20 flex flex-col gap-8 xl:gap-16">
            <h4 className="header flex items-center gap-4 typo-body-2 font-walbaum">
              <span className="w-10 h-px bg-primary inline-block"></span>
              {cmsFacilityData?.title}
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 opacity-70">
              {cmsFacilityData?.facilityNames?.slice(0, 8).map((data) => {
                return (
                  <div key={data?.id} className="flex gap-4 items-center">
                    <div className="min-w-max">
                      <img
                        src={`${config.BASE_IMAGE_URL}${data?.icon?.data?.attributes?.url}`}
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <span>{data?.name}</span>
                  </div>
                );
              })}
            </div>
            <a
              href={`tel:${cmsFacilityData?.button?.phone}`}
              className="border-button w-full flex justify-center items-center"
            >
              {cmsFacilityData?.button.label}
            </a>
          </div>
        </div>
      </section>
      {/* Section 3 */}
      <ImageSlider
        imageUrls={galleryImages}
        type="pool"
        title={cmsGalleryData?.title}
      />
      {/* <section className="bg-whiteGray">
        <div className="slide_card-container">
          <div className="options">
            {cmsGalleryData?.poolCards?.map((el, index) => {
              return (
                <OptionCard
                  key={index}
                  handleClick={() => setActiveImage(index)}
                  active={index === activeImage}
                  backgroundImage={createAssetsUrl(el?.image)}
                  iconComponent={<TiWeatherDownpour size={25} />}
                  mainText={el.title}
                  subText={el.description}
                />
              );
            })}
          </div>
        </div>
      </section> */}

      <LinkToContactUs />
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
        <div className="icon">{iconComponent}</div>
        <div className="info">
          <div className="main">{mainText}</div>
          <div className="sub">{subText}</div>
        </div>
      </div> */}
    </div>
  );
};
