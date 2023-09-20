import { useState } from "react";
import { Link } from "react-router-dom";
import Rooms from "../../assets/images/rooms.png";
import { LinkToContactUs } from "../../components/LinkToContactUs";
import { handleScrollDownClick } from "../../utils";
import { useRooms } from "../../hooks/RoomsContext";
import { useSuites } from "../../hooks/SuitesContext";
import config from "../../config";
import { useQuery } from "@tanstack/react-query";
import { getRoomTypes } from "../../api/roomsAndSuites.js";
import Spinner from "../../assets/images/spinner.svg";
import "react-lazy-load-image-component/src/effects/blur.css";
import ProgressiveImage from "react-progressive-graceful-image";
import RoomPlaceHolder from "../../assets/images/RoomPlaceHolder.jpg";

export const RoomTypePage = () => {
  const [selectedMenu, setSelectedMenu] = useState("rooms");
  const { data, isLoading, error } = useQuery(["room-types"], getRoomTypes);

  const RoomsData = useRooms();
  const SuitesData = useSuites();

  if (isLoading)
    return (
      <div className="min-h-screen grid place-items-center">
        <img src={Spinner} alt="" />
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  const query = data?.data.attributes;

  // const roomTypes = query.map(roomType => ({
  //   heroText: roomType.attributes.heroHeader,
  //   description: roomType.attributes.description,
  //   category: roomType.attributes.category,
  //   backgroundImage: roomType.attributes.backgroundImage.data.attributes.url,
  //   contactText: roomType.attributes.contactText
  // }))

  const roomTypes = {
    heroHeader: query.heroHeader,
    description: query.description,
    category: query.category,
    backgroundImage: query.backgroundImage.data.attributes.url,
    contactText: query.contactText,
  };

  function selectRoomType(selectedItem) {
    handleScrollDownClick("roomTypeMenu");
    setSelectedMenu(selectedItem);
  }

  return (
    <div>
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
            {/* <img
              src={`${config.BASE_IMAGE_URL}${roomTypes.backgroundImage}`}
              alt=""
              className=" block"
            /> */}
          </div>
          <div className="min-h-screen xl:min-h-[600px] xl:py-48 flex flex-col justify-center items-center">
            <h4 className="text-white z-20 typo-display capitalize text-5xl mb-6 xl:mb-0 text-center max-w-lg">
              {roomTypes.heroHeader}
            </h4>
            <p className="typo-body-2 text-white max-w-[560px] mx-4 xl:mx-0 mt-2 md:mt-6 text-center">
              {roomTypes.description}
            </p>
          </div>
        </section>
        <section
          id="roomTypeMenu"
          className="max-h-max relative mb-16 scroll-m-20"
        >
          <div className="w-full border-b border-black/40">
            <nav className="flex justify-between md:px-20 w-full relative">
              <div></div>
              <ul className="">
                <li className="relative inline-block text-center mx-4 md:mx-7 xl:mx-9 first:ml-4 last:mr-4">
                  <button
                    id="rooms"
                    type="button"
                    className={`py-4 text-black/75 transition hover:text-hoverPale ${
                      selectedMenu === "rooms" && "!text-hoverPale"
                    }`}
                    onClick={() => selectRoomType("rooms")}
                  >
                    <h6 className="typo-display">Rooms</h6>
                  </button>
                </li>
                <li className="relative inline-block text-center mx-4 md:mx-7 xl:mx-9 first:ml-4 last:mr-4">
                  <button
                    id="suites"
                    type="button"
                    className={`py-4 text-black/75 transition hover:text-hoverPale ${
                      selectedMenu === "suites" && "!text-hoverPale"
                    }`}
                    onClick={() => selectRoomType("suites")}
                  >
                    <h6 className="typo-display">Suites</h6>
                  </button>
                </li>
              </ul>
              <div></div>
            </nav>
          </div>
          <div
            id="rt-card-container"
            className="mt-10 flex justify-center items-center gap-8 flex-col xl:flex-row flex-wrap"
          >
            {selectedMenu === "rooms"
              ? RoomsData.map((roomCard, index) => {
                  return (
                    <RoomCard
                      id={roomCard.id}
                      key={index}
                      imageSrc={roomCard.featuredImage}
                      title={roomCard.title}
                      description={roomCard.description}
                      viewDetailsLink={roomCard.viewDetailsLink}
                      reserveRoomLink={roomCard.reserveRoomLink}
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
                    />
                  );
                })}
          </div>
        </section>

        <LinkToContactUs contactText={roomTypes.contactText}></LinkToContactUs>
      </div>
    </div>
  );
};

export const RoomCard = ({
  id,
  imageSrc,
  title,
  description,
  viewDetailsLink,
  reserveRoomLink,
}) => {
  return (
    <div className="card-container w-[80%] xl:w-[500px] relative">
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
        <h6 className="typo-menu-2">{title}</h6>
        <p className="typo-body-2 mt-2 mb-8">{description}</p>
        <div className="flex justify-between items-center gap-10">
          <Link
            to={`${viewDetailsLink}/${id}`}
            className="flex items-center gap-1"
          >
            <div className="mb-1">View Details</div>
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
          <div
            onClick={() => {
              console.log(reserveRoomLink);
            }}
            className="bg-primary text-white p-4"
          >
            Reserve Room
          </div>
        </div>
      </div>
    </div>
  );
};
