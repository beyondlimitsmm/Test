import { Cloudinary } from "@cloudinary/url-gen";
import HotelLogo from "../../assets/Logo.png";
import HomePagePoster from "../../assets/images/Rectangle13.png";
import HomePageVideo from "../../assets/videos/hero-video.mp4";
import { handleScrollDownClick } from "../../utils";

export const HeroSection = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "drioyq6vt" } });
  const HomePoster = cld.image("Rectangle13_ig2kb3");
  console.log(cld, HomePoster);

  return (
    <section
      id="home"
      className="h-screen w-screen -mt-20 relative overflow-hidden z-10 flex justify-center items-center"
    >
      <div className="absolute w-screen h-screen brightness-50">
        <video
          loop
          autoPlay
          muted
          // preload="none"
          type="video/mp4"
          playsInline
          src={HomePageVideo}
          className="w-screen h-screen object-cover"
          poster={HomePagePoster}
        ></video>
      </div>
      <div className="flex flex-col z-20 items-center gap-20">
        <img
          src={HotelLogo}
          alt="logo"
          width="250"
          className="brightness-200 xl:hidden"
        />
        <div className="text-white z-20 typo-display mb-10 mx-4 capitalize text-center">
          Serving you our best forever
        </div>
      </div>
      <div className="absolute bottom-2 lg:bottom-12 left-1/2 -translate-x-1/2 flex justify-center items-center">
        <button
          aria-label="scroll down"
          className="absolute z-10 bottom-8 xl:-bottom-2 animate-bounce duration-700"
          onClick={() => handleScrollDownClick("aboutUs")}
        >
          <svg
            width="76"
            height="76"
            className="stroke-current text-white"
            fill="none"
            viewBox="0 0 76 76"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m22.7998 30.3996 15.2 15.2 15.2-15.2"
              strokeWidth="1.5"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
};
