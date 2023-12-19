import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LinkToContactUs } from "../../components/LinkToContactUs";
import { handleScrollDownClick } from "../../utils";
import { useRooms } from "../../hooks/RoomsContext";
import { useSuites } from "../../hooks/SuitesContext";
import config from "../../config";
import { useQuery } from "@tanstack/react-query";
import { getRoomTypes } from "../../api/roomsAndSuites.js";
import ProgressiveImage from "react-progressive-graceful-image";
import RoomPlaceHolder from "../../assets/images/RoomPlaceHolder.jpg";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { NavBarContext } from "../../hooks/NavBarContext";
import ReactMarkdown from "react-markdown";

export const RoomTypePage = () => {
  const [selectedMenu, setSelectedMenu] = useState("rooms");
  const { data, isLoading, error } = useQuery(["room-types"], getRoomTypes);

  const RoomsData = useRooms();
  const SuitesData = useSuites();

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  const query = data?.data.attributes;

  const roomTypes = {
    heroHeader: query.heroHeader,
    description: query.description,
    backgroundImage: query.backgroundImage.data.attributes.url,
    linkText: query.linkToDetailText,
    buttonText: query.buttonText,
    roomName: query.roomName,
    suiteName: query.suiteName,
  };

  function selectRoomType(selectedItem) {
    handleScrollDownClick("roomTypeMenu");
    setSelectedMenu(selectedItem);
  }

  return (
    <div className="">
      <div>
        <section className="-mt-20 w-screen min-h-screen xl:min-h-0 relative">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <ProgressiveImage
              src={`${config.BASE_IMAGE_URL}${roomTypes.backgroundImage}`}
              placeholder={RoomPlaceHolder}
            >
              {(src, loading) => (
                <img
                  className={`w-full h-full object-cover brightness-75 ${
                    loading ? " loading" : "heroloaded"
                  }`}
                  src={src}
                  alt="sea beach"
                  width="700"
                  height="465"
                />
              )}
            </ProgressiveImage>
          </div>
          <div className="min-h-screen xl:min-h-[600px] xl:py-48 flex flex-col justify-center items-center">
            <h4 className="text-white z-20 typo-display capitalize text-5xl mb-6 xl:mb-0 text-center max-w-lg">
              {roomTypes.heroHeader}
            </h4>
            <ReactMarkdown className="typo-body-2 text-white max-w-[560px] mx-4 xl:mx-0 mt-2 md:mt-6 text-center">
              {roomTypes.description}
            </ReactMarkdown>
          </div>
        </section>
        <section id="roomTypeMenu" className="max-h-max relative  scroll-m-20">
          <div className="bg-[#F8F9FA]">
            <div className="w-full ">
              <div className="mx-4 md:mx-20">
                {" "}
                {/* Add left and right margins here */}
                <nav className="flex justify-between w-full relative border-b border-hoverPale">
                  <div></div>
                  <ul className="flex space-x-4 md:space-x-7 xl:space-x-9">
                    <li>
                      <button
                        id="rooms"
                        type="button"
                        className={`py-4 text-black/75 transition hover:text-hoverPale ${
                          selectedMenu === "rooms" && "!text-hoverPale"
                        }`}
                        onClick={() => selectRoomType("rooms")}
                      >
                        <h6 className="typo-display">{roomTypes?.roomName}</h6>
                      </button>
                    </li>
                    <li>
                      <button
                        id="suites"
                        type="button"
                        className={`py-4 text-black/75 transition hover:text-hoverPale ${
                          selectedMenu === "suites" && "!text-hoverPale"
                        }`}
                        onClick={() => selectRoomType("suites")}
                      >
                        <h6 className="typo-display">{roomTypes?.suiteName}</h6>
                      </button>
                    </li>
                  </ul>
                  <div></div>
                </nav>
              </div>
            </div>
            <div
              id="rt-card-container"
              className="py-10 flex justify-center items-center gap-16 md:gap-12 flex-col xl:flex-row flex-wrap "
            >
              {selectedMenu === "rooms"
                ? RoomsData.map((roomCard, index) => {
                    return (
                      <RoomCard
                        id={roomCard.id}
                        key={index}
                        imageSrc={roomCard.backgroundImage}
                        title={roomCard.title}
                        description={roomCard.description}
                        viewDetailsLink={roomCard.viewDetailsLink}
                        reserveRoomLink={roomCard.reserveRoomLink}
                        linkText={roomTypes.linkText}
                        roomFeatures={roomCard.roomFeatures}
                        buttonText={roomTypes.buttonText}
                      />
                    );
                  })
                : SuitesData.map((roomCard, index) => {
                    return (
                      <RoomCard
                        id={roomCard.id}
                        key={index}
                        imageSrc={roomCard.backgroundImage}
                        title={roomCard.title}
                        description={roomCard.description}
                        viewDetailsLink={roomCard.viewDetailsLink}
                        reserveRoomLink={roomCard.reserveRoomLink}
                        linkText={roomTypes.linkText}
                        roomFeatures={roomCard.suiteFeatures}
                        buttonText={roomTypes.buttonText}
                      />
                    );
                  })}
            </div>
          </div>
        </section>

        <LinkToContactUs />
      </div>
    </div>
  );
};

export const RoomCard = ({
  id,
  imageSrc,
  title,
  viewDetailsLink,
  reserveRoomLink,
  roomFeatures,
  linkText,
  buttonText,
}) => {
  const { togglePopUp, setRoomType } = useContext(NavBarContext);

  const onReserveNowHandler = () => {
    togglePopUp();
    setRoomType(title);
  };

  return (
    <div className="card-container w-[80%] xl:w-[500px] h-full sm:h-full bg-white">
      <div className="w-full h-[300px] relative overflow-hidden">
        <ProgressiveImage
          src={`${config.BASE_IMAGE_URL}${imageSrc}`}
          placeholder={RoomPlaceHolder}
        >
          {(src, loading) => (
            <img
              className={`w-full h-full object-cover brightness-75 image${
                loading ? " loading" : "loaded"
              }`}
              src={src}
              alt="sea beach"
              width="700"
              height="465"
            />
          )}
        </ProgressiveImage>
        {/* <LazyLoadImage
          src={`${config.BASE_IMAGE_URL}${imageSrc}`}
          alt={title}
          placeholderSrc={Rooms}
          effect="blur"
          className="w-full h-full object-cover"
          style={{ width: "100%", height: "100%" }}
        /> */}
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h6 className="typo-room-card-title mt-2 max-w-sm">{title}</h6>
        {/* <p className="typo-body-2 mt-2 mb-8">{truncatedDescription}</p> */}
        <div className="grid grid-cols-4 place-content-evenly">
          {roomFeatures.slice(0, 4).map((roomFeature) => (
            <div
              key={roomFeature.id}
              className="flex flex-col items-center justify-between my-8"
            >
              <img
                src={roomFeature.iconImage}
                className="h-7 w-7 object-cover object-center"
                alt={roomFeature.description}
                loading="lazy"
              />
              <p>
                <ReactMarkdown className="typo-body-2 text-sx">
                  {roomFeature.description.split(" ")[0]}
                </ReactMarkdown>
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center gap-10 pb-6">
          <Link
            to={`${viewDetailsLink}/${id}`}
            className="flex items-center gap-1"
          >
            <div className="mb-1">{linkText}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
          <button
            onClick={onReserveNowHandler}
            className="bg-primary text-white p-4"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
