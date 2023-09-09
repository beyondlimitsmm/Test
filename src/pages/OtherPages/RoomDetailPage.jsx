import { useNavigate, useParams } from "react-router-dom";
import rooms from "../../assets/images/more-rooms.png";
import { GallerySliderSection } from "../../components/GallerySliderSection";

const RoomDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <>
      <section className="-mt-20 w-screen min-h-screen xl:min-h-0 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <img
            src={rooms}
            alt=""
            className="w-full h-full object-cover brightness-50"
          />
        </div>

        <div className="min-h-screen xl:min-h-[600px] xl:py-48 flex flex-col justify-center gap-8 items-center">
          <h4 className="text-white font-modesfa z-20 typo-display capitalize text-3xl xl:text-5xl">
            Rooms
            <span className="typo-display capitalize text-3xl xl:text-5xl">
              &
            </span>
            Suites
          </h4>

          <div className="w-[80%] p-8 grid grid-cols-2 xl:grid-cols-5 justify-items-center xl:items-center items-start gap-4 xl:gap-2">
            <div className="text-white text-center col-span-2 md:col-span-1">
              <h4 className="typo-body">Price</h4>
              <p className="typo-menu-2">90,000/per night</p>
            </div>
            <div className="text-white text-center">
              <h4 className="typo-body">People</h4>
              <p className="typo-menu-2">3 max</p>
            </div>
            <div className="text-white text-center">
              <h4 className="typo-body">Bed</h4>
              <p className="typo-menu-2">King Bed</p>
            </div>
            <div className="text-white text-center">
              <h4 className="typo-body">Square Feet</h4>
              <p className="typo-menu-2">
                32 m<sup className="text-xs">2</sup>
              </p>
            </div>
            <div className="text-white text-center">
              <h4 className="typo-body">Type</h4>
              <p className="typo-menu-2">en suite</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col xl:flex-row justify-between items-center py-10 px-4 xl:px-0 xl:py-20 xl:my-20">
        <div className="flex-1 xl:px-20 self-stretch flex justify-center items-center">
          <img
            src={rooms}
            alt=""
            className="w-full xl:h-full h-[400px] object-cover max-w-[500px]"
          />
        </div>
        <div className="flex-1 text-start p-4 xl:px-0 self-stretch xl:self-auto">
          <h3 className="typo-section-title">Amenities {id}</h3>
          <p className="typo-menu-2">Our Executive Rooms feature</p>
          <div className="flex flex-col mt-10">
            <div className="flex items-center border-b py-4 gap-5">
              <div className="h-7 w-7 md:w-8 md:h-8 flex shrink-0 items-center">
                <img
                  src="https://www.kempinski.com/en/content/download/115/405?version=21&amp;inline=1"
                  className="h-full w-full object-cover object-center"
                  alt="Bathtub and separate shower"
                  loading="lazy"
                />
              </div>
              <p className="typo-body-2">Bathtub and separate shower</p>
            </div>
            <div className="flex items-center border-b py-4 gap-5">
              <div className="h-7 w-7 md:w-8 md:h-8 flex shrink-0 items-center">
                <img
                  src="https://www.kempinski.com/en/content/download/105/385?version=21&amp;inline=1"
                  className="h-full w-full object-cover object-center"
                  alt="Safe"
                  loading="lazy"
                />
              </div>
              <p className="typo-body-2">Safe</p>
            </div>
            <div className="flex items-center border-b py-4 gap-5">
              <div className="h-7 w-7 md:w-8 md:h-8 flex shrink-0 items-center">
                <img
                  src="https://www.kempinski.com/en/content/download/83/341?version=21&amp;inline=1"
                  className="h-full w-full object-cover object-center"
                  alt="Desk"
                  loading="lazy"
                />
              </div>
              <p className="typo-body-2">Desk</p>
            </div>
            <div className="flex items-center border-b py-4 gap-5">
              <div className="h-7 w-7 md:w-8 md:h-8 flex shrink-0 items-center">
                <img
                  src="https://www.kempinski.com/en/content/download/80/335?version=21&amp;inline=1"
                  className="h-full w-full object-cover object-center"
                  alt="Coffee and/or tea making facilities"
                  loading="lazy"
                />
              </div>
              <p className="typo-body-2">Coffee and/or tea making facilities</p>
            </div>
            <div className="flex items-center border-b py-4 gap-5">
              <div className="h-7 w-7 md:w-8 md:h-8 flex shrink-0 items-center">
                <img
                  src="https://www.kempinski.com/en/content/download/77/329?version=23&amp;inline=1"
                  className="h-full w-full object-cover object-center"
                  alt="Baby bed allowed"
                  loading="lazy"
                />
              </div>
              <p className="typo-body-2">Baby bed allowed</p>
            </div>
            <div className="flex items-center border-b py-4 gap-5">
              <div className="h-7 w-7 md:w-8 md:h-8 flex shrink-0 items-center">
                <img
                  src="https://www.kempinski.com/en/content/download/74/323?version=21&amp;inline=1"
                  className="h-full w-full object-cover object-center"
                  alt="Air conditioning"
                  loading="lazy"
                />
              </div>
              <p className="typo-body-2">Air conditioning</p>
            </div>
          </div>
        </div>
      </section>

      <GallerySliderSection></GallerySliderSection>

      <section className="mx-auto container flex justify-center items-center mb-10 xl:mb-40">
        <div
          className="flex items-center gap-6 cursor-pointer"
          onClick={() => navigate("/rooms")}
        >
          <div className="mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </div>
          <h4 className="font-modesfa z-20 typo-display capitalize text-3xl xl:text-5xl">
            Rooms
            <span className="typo-display capitalize text-3xl xl:text-5xl px-4">
              &
            </span>
            Suites
          </h4>
        </div>
      </section>
    </>
  );
};
export default RoomDetailPage;
