import { Navigation, Scrollbar } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import ArticleIcon from "../../assets/images/articles-icon.svg";
import BarPlaceHolder from "../../assets/images/BarPlaceHolder.jpg";
import FeatureImage from "../../components/FeatureImage";

import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { LinkToContactUs } from "../../components/LinkToContactUs";
import { feature, gallery, header } from "../../api/bar";
import Error from "../../components/Error";
import { createAssetsUrl, parseCmsData } from "../../libs/functions";
import ProgressiveImage from "react-progressive-graceful-image";
import { placeholder } from "@cloudinary/react";
import Loading from "../../components/Loading";

const BarDetailPage = () => {
  const {
    data: headData,
    error,
    isLoading: loadingHeader,
  } = useQuery(["barHeader"], header);
  const { data: featureData, isLoading: loadingFeature } = useQuery(
    ["barFeature"],
    feature
  );
  const { data: galleryData, isLoading: loadingGallery } = useQuery(
    ["barGallery"],
    gallery
  );

  if (loadingHeader || loadingFeature || loadingGallery) return <Loading />;

  if (error) return <Error />;

  const cmsHeadData = parseCmsData(headData);
  const cmsFeatureData = parseCmsData(featureData);
  const cmsGalleryData = parseCmsData(galleryData);

  return (
    <>
      <section className="h-screen w-screen -mt-20 relative overflow-hidden z-10 flex justify-center items-center">
        <div className="absolute w-screen h-screen brightness-50">
          <ProgressiveImage
            src={createAssetsUrl(cmsHeadData?.image)}
            placeholder={BarPlaceHolder}
          >
            {(src, loading) => (
              <img
                src={src}
                alt=""
                className={`w-full h-full object-cover ${
                  loading ? "loading" : "heroloaded"
                }`}
              />
            )}
          </ProgressiveImage>
        </div>

        <div className="text-white z-20 typo-display mb-10 flex flex-col items-center">
          <img src={createAssetsUrl(cmsHeadData?.logo)} alt="" />
          <h2 className="typo-title mb-8 text-center mx-2">
            {cmsHeadData?.title}
          </h2>

          <a
            href={`tel:${cmsHeadData?.button?.phone}`}
            className="border-button  text-base "
          >
            <span className="text-white"> {cmsHeadData?.button?.label} </span>
          </a>
        </div>
      </section>

      {/* <section className="py-10 xl:py-20 container mx-auto overflow-hidden w-screen relative flex justify-center items-center text-white">
        <div className="w-screen h-[450px] overflow-hidden relative">
          <div
            className="w-full h-full bg-no-repeat bg-cover bg-fixed bg-center "
            style={{
              backgroundImage: `url(${createAssetsUrl(cmsFeatureData?.image)})`,
            }}
          ></div>

          <FeatureImage
            icon={ArticleIcon}
            title={cmsFeatureData?.title}
            description={cmsFeatureData?.description}
            detail={cmsFeatureData?.button?.name}
          />
        </div>
      </section> */}

      <section className="py-10 xl:py-20 container mx-auto overflow-hidden w-screen relative flex justify-center items-center text-white">
        <div className="w-screen h-[450px] overflow-hidden relative">
          <ProgressiveImage
            src={createAssetsUrl(cmsFeatureData?.image)}
            placeholder={BarPlaceHolder}
          >
            {(src, loading) => (
              <img
                src={src}
                alt={cmsFeatureData?.title}
                className={`w-full h-full object-cover object-center bg-white ${
                  loading ? "loading" : "heroloaded"
                }`}
              />
            )}
          </ProgressiveImage>

          <FeatureImage
            icon={ArticleIcon}
            title={cmsFeatureData?.title}
            description={cmsFeatureData?.description}
            detail={cmsFeatureData?.button?.name}
          />
        </div>
      </section>

      <section className="mx-auto container xl:py-10 py-0 px-4">
        <h4 className="typo-title">{cmsGalleryData?.title}</h4>

        <div className="relative mt-6 mb-8">
          <Swiper
            modules={[Scrollbar, Navigation]}
            spaceBetween={15}
            slidesPerView={1.2}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              type: "fraction",
            }}
            scrollbar={{
              el: ".swiper-scrollbar",
              hide: false,
            }}
            className="swiper roomsSwiper2 pb-10 w-full h-[250px] lg:h-[500px]"
          >
            {cmsGalleryData?.barCards?.map((data) => (
              <SwiperSlide key={data?.id}>
                <ProgressiveImage
                  src={createAssetsUrl(data?.image)}
                  placeholder={BarPlaceHolder}
                >
                  {(src, loading) => (
                    <img
                      src={src}
                      alt=""
                      className={loading ? "loading" : "loaded"}
                    />
                  )}
                </ProgressiveImage>
              </SwiperSlide>
            ))}
            {/* <SwiperSlide>
              <img
                src="https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg"
                alt=""
              />
            </SwiperSlide> */}

            <div className="swiper-scrollbar z-50"></div>
          </Swiper>
          <div className="swiper-button-prev w-14 h-14 p-[14px] hidden md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>
          <div className="swiper-button-next w-14 h-14 p-[14px] hidden md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </section>

      <LinkToContactUs
        contactText={"If you have any questions, feel free to Contact Us"}
      ></LinkToContactUs>
    </>
  );
};
export default BarDetailPage;
