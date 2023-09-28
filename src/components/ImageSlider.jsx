import ProgressiveImage from "react-progressive-graceful-image";
import "swiper/css/effect-creative";
import { Navigation, Scrollbar } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import RoomPlaceHolder from "../assets/images/RoomPlaceHolder.jpg";

const ImageSlider = ({ imageUrls }) => {
  return (
    <section className="mx-auto container xl:py-10 py-0 px-4">
      <h4 className="typo-title">Let&apos;s take a look</h4>

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
          {imageUrls.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <ProgressiveImage src={imageUrl} placeholder={RoomPlaceHolder}>
                {(src, loading) => (
                  <img
                    src={src}
                    className={loading ? "loading" : "loaded"}
                    alt={`Nature ${index + 1}`}
                  />
                )}
              </ProgressiveImage>
            </SwiperSlide>
          ))}
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
  );
};

export default ImageSlider;
