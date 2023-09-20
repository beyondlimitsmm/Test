import { useNavigate, useParams } from "react-router-dom";
import rooms from "../../assets/images/more-rooms.png";
// import { GallerySliderSection } from "../../components/GallerySliderSection";
import { useRooms } from "../../hooks/RoomsContext";
import config from "../../config";
import { RoomSlider } from "../../components/RoomSlider";
import ProgressiveImage from "react-progressive-graceful-image";
import RoomPlaceHolder from "../../assets/images/RoomPlaceHolder.jpg";

const RoomDetailPage = () => {
  const roomData = useRooms();
  const navigate = useNavigate();
  const { id } = useParams();
  const room = roomData.find((room) => room.id == id);

  return (
    <>
      <section className="-mt-20 w-screen min-h-screen xl:min-h-0 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <ProgressiveImage
            src={`${config.BASE_IMAGE_URL}${room.backgroundImage}`}
            placeholder={RoomPlaceHolder}
          >
            {(src, loading) => (
              <img
                src={src}
                alt=""
                className={`w-full h-full object-cover ${
                  loading ? " loading" : " heroloaded"
                } `}
              />
            )}
          </ProgressiveImage>
          {/* <img
            src={`${config.BASE_IMAGE_URL}${room.backgroundImage}`}
            alt=""
            className="w-full h-full object-cover brightness-50"
          /> */}
        </div>

        <div className="min-h-screen xl:min-h-[600px] xl:py-48 flex flex-col justify-center gap-8 items-center">
          <h4 className="text-white text-center font-modesfa z-20 typo-display capitalize !text-3xl xl:!text-5xl">
            {room.title}
          </h4>

          <div className="w-[80%] p-8 grid grid-cols-2 xl:grid-cols-5 justify-items-center xl:items-center items-start gap-4 xl:gap-2">
            {room.roomDetails.map((roomDetail, index) => (
              <div
                key={roomDetail.id}
                className={`text-white text-center ${
                  index === 0 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <h4 className="typo-body">{roomDetail.type}</h4>
                <p className="typo-menu-2">{roomDetail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col xl:flex-row justify-between items-center py-10 px-4 xl:px-0 xl:py-20 xl:my-20">
        <div className="flex-1 xl:px-20 self-stretch flex justify-center items-center">
          <ProgressiveImage
            src={`${config.BASE_IMAGE_URL}${room.featuredImage}`}
            placeholder={RoomPlaceHolder}
          >
            {(src, loading) => (
              <img
                src={src}
                alt=""
                className={`w-full xl:h-full h-[400px] object-cover max-w-[500px] ${
                  loading ? "loading" : " loaded"
                }`}
              />
            )}
          </ProgressiveImage>
        </div>
        <div className="flex-1 text-start p-4 xl:px-0 self-stretch xl:self-auto">
          <h3 className="typo-section-title">{room.featuredHeader}</h3>
          <p className="typo-menu-2">{room.featuredText}</p>
          <div className="flex flex-col mt-10">
            {room?.roomFeatures.map((roomFeature) => (
              <div
                key={roomFeature.id}
                className="flex items-center border-b py-4 gap-5"
              >
                <div className="h-7 w-7 md:w-8 md:h-8 flex shrink-0 items-center">
                  <img
                    src={roomFeature.iconImage}
                    className="h-full w-full object-cover object-center"
                    alt={roomFeature.description}
                    loading="lazy"
                  />
                </div>
                <p className="typo-body-2">{roomFeature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoomSlider imageUrls={room.galleryImages}></RoomSlider>

      <section className="mx-auto container flex justify-center items-center mb-10 xl:mb-40">
        <div
          className="flex items-center gap-6 cursor-pointer"
          onClick={() => navigate("/room-types")}
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
          <h4 className="font-modesfa z-20 typo-display capitalize !text-3xl xl:!text-5xl">
            Rooms
            <span className="typo-display capitalize !text-3xl xl:!text-5xl px-4">
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
