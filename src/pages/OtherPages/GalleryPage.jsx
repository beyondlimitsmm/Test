import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GallerySliderSection } from "../../components/GallerySliderSection";
import "../../styles/GalleryPage.css";
import "../../styles/RoomDetails.css";

const MenuData = [
  "Exterior",
  "Rooms & Suites",
  "Restaurants",
  "Spa",
  "Meetings & Events",
  "Videos",
];

export const GalleryPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(MenuData[0]);

  return (
    <>
      <section className="my-12">
        <nav className="flex justify-between md:px-20 w-full relative border-b border-stellarLightGrey mb-18">
          <div className="flex justify-start items-center"></div>
          <ul className="navSlider inline-block py-4 md:py-7 xl:py-9 whitespace-nowrap overflow-x-auto font-walbaum">
            {MenuData.map((menu, index) => {
              return (
                <GalleryPageMenu
                  key={index}
                  label={menu}
                  selectedMenu={selectedMenu}
                  handleClick={() => setSelectedMenu(menu)}
                ></GalleryPageMenu>
              );
            })}
          </ul>
          <div className="flex justify-center items-center"></div>
        </nav>
      </section>

      {selectedMenu === MenuData[0] ? (
        <GallerySliderSection></GallerySliderSection>
      ) : (
        <ChangeSliderExaample></ChangeSliderExaample>
      )}
    </>
  );
};

const GalleryPageMenu = ({ label, handleClick, selectedMenu }) => {
  return (
    <li className="relative inline-block text-center mx-4 md:mx-7 xl:mx-9 first:ml-4 last:mr-4">
      <button
        type="button"
        onClick={handleClick}
        className={`menu-items ${
          selectedMenu === label ? "text-hoverPale" : ""
        }`}
      >
        <h6 className="break-words text-2xl xl:text-3xl">{label}</h6>
      </button>
    </li>
  );
};

const ChangeSliderExaample = () => {
  const [thumbSwiper, setThumbsSwiper] = useState(null);

  return (
    <section
      className="container h-max mx-auto xl:px-40 px-10 mb-10 xl:mb-40"
      id="imageCarouselWrapper"
    >
      <div className="relative">
        <div className="swiper-button-prev w-14 h-14 p-[14px] flex">
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
            className="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </div>
        <div className="swiper-button-next w-14 h-14 p-[14px] flex">
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
            className="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>

        <Swiper
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          thumbs={{ swiper: thumbSwiper }}
          className="swiper roomDetailsSwiper h-[400px] xl:h-[600px]"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={(swiper) => {
            console.log("Inside thumbSwiper", swiper);
            if (swiper && !swiper.destroyed) {
              console.log(thumbSwiper);
              setThumbsSwiper(swiper);
            }
          }}
          spaceBetween={10}
          slidesPerView={2.5}
          freeMode={true}
          watchSlidesProgress={true}
          breakpoints={{
            640: {
              slidesPerView: 3.2,
            },
            768: {
              slidesPerView: 4.4,
            },
            1024: {
              slidesPerView: 5,
            },
            1440: {
              slidesPerView: 6.4,
            },
          }}
          className="swiper thumbSwiper xl:h-[150px] h-[100px]"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
