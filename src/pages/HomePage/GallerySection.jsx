import { useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Rectangle10 from "../../assets/images/Rectangle10.png";

import "../../styles/HomePage.css";
import { OutlineButton } from "../../components/OutlineButton";
import { createAssetsUrl, parseCmsData } from "../../libs/functions";
import { gallery } from "../../api/home";
import Error from "../../components/Error";
import { galleries } from "../../api/gallery";
import ProgressiveImage from "react-progressive-graceful-image";

export const GallerySection = () => {
  const { data } = useQuery(["homeGallery"], gallery);
  const cmsData = parseCmsData(data);
  const { data: galleriesData, error } = useQuery({
    queryKey: ["galleries"],
    queryFn: galleries,
  });
  const [galleryData, setGalleryData] = useState([]);

  const createGalleryData = useCallback(() => {
    if (!galleriesData) return;

    const _galleryData = galleriesData?.data?.map((data) => {
      const attr = data?.attributes;

      return {
        title: attr?.title,
        description: "-",
        image: createAssetsUrl(attr.galleries[0].image, "medium"),
      };
    });

    setGalleryData(_galleryData);
  }, [galleriesData]);

  useEffect(() => {
    createGalleryData();
  }, [createGalleryData]);

  if (error) return <Error />;

  return (
    <section
      id="gallery"
      className="flex justify-center h-[900px] items-center relative py-10 xl:py-0"
    >
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center w-full h-full gap-32 lg:gap-20 relative">
        <div className="lg:max-w-md lg:mb-32 flex flex-col relative mx-12">
          <h6 className="typo-title capitalize typo-text-black font-modesfa mb-4">
            {cmsData?.title}
          </h6>
          <p
            className="typo-body-2 typo-text-black text-left"
            style={{
              lineHeight: "1.625rem",
              letterSpacing: "0.02em",
              fontSize: "1.0625rem",
            }}
          >
            {cmsData?.description}
          </p>

          <OutlineButton
            styles="my-6 w-max"
            routeTo={cmsData?.button?.link}
            text={cmsData?.button?.name}
          ></OutlineButton>

          <div className="relative mt-6 flex items-center w-[150px]">
            <div className="home-gallery-swiper-button-prev h-8 w-8 xl:h-12 xl:w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 xl:h-12"
                viewBox="0 0 320 512"
                fill="#3A1E13"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </div>
            <div className="home-gallery-swiper-button-next h-8 w-8 xl:h-12 xl:w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 xl:h-12"
                viewBox="0 0 320 512"
                fill="#3A1E13"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        spaceBetween={15}
        slidesPerView={1.2}
        modules={[Navigation, Pagination, Scrollbar]}
        scrollbar={{
          el: ".swiper-scrollbar",
          hide: false,
        }}
        navigation={{
          nextEl: ".home-gallery-swiper-button-next",
          prevEl: ".home-gallery-swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          type: "fraction",
        }}
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
            slidesPerView: 1.1,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          2200: {
            slidesPerView: 1.9,
            spaceBetween: 30,
          },
        }}
        className="absolute bottom-0 lg:bottom-auto right-0 w-[90%] lg:w-1/2  pb-10 h-[340px] md:h-[400px] lg:h-[550px] mb-14 tiles home-gallery-swiper"
      >
        {galleryData?.map((data, index) => (
          <SwiperSlide key={index} className="swiper-slide tile">
            <ProgressiveImage src={data?.image} placeholder={Rectangle10}>
              {(src, loading) => (
                <img
                  src={src}
                  alt=""
                  className={`h-[550px] ${loading ? "loading" : "loaded"}`}
                />
              )}
            </ProgressiveImage>
            {/* <img src={data?.image} alt="" className="h-[550px]" /> */}
            <div className="details">
              <span className="title font-walbaum">{data?.title}</span>
              {/* <span className="info">{data?.description}</span> */}
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide className="tile">
          <img
            src="https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg"
            alt=""
            className="h-[550px]"
          />
          <div className="details">
            <span className="title">Lorem Ipsum Dolor</span>
            <span className="info">
              Quisque vel felis lectus donec vitae dapibus magna
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="tile">
          <img
            src="https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg"
            alt=""
            className="h-[550px]"
          />
          <div className="details">
            <span className="title">Lorem Ipsum Dolor</span>
            <span className="info">
              Quisque vel felis lectus donec vitae dapibus magna
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="tile custom">
          <img
            src="https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg"
            alt=""
            className="h-[550px]"
          />
          <div className="details">
            <span className="title">Lorem Ipsum Dolor</span>
            <span className="info">
              Quisque vel felis lectus donec vitae dapibus magna
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="tile">
          <img
            src="https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg"
            alt=""
            className="h-[550px]"
          />
          <div className="details">
            <span className="title">Lorem Ipsum Dolor</span>
            <span className="info">
              Quisque vel felis lectus donec vitae dapibus magna
            </span>
          </div>
        </SwiperSlide>{" "}
        */}
        <div className="swiper-scrollbar z-50"></div>
      </Swiper>
    </section>
  );
};
