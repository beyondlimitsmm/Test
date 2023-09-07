import { Link } from "react-router-dom";

import { useState } from "react";
import Rooms from "../../assets/images/rooms.png";
import { handleScrollDownClick } from "../../utils";

const RoomsData = [
  {
    imageSrc: Rooms,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iusto. Quas nisi perspiciatis molestias totam?",
    viewDetailsLink: "./room-details",
    reserveRoomLink: "#",
  },

  {
    imageSrc: Rooms,
    title: "Lorem ipsum dolor 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iusto. Quas nisi perspiciatis molestias totam?",
    viewDetailsLink: "./room-details",
    reserveRoomLink: "#",
  },
];

const SuitesData = [
  {
    imageSrc: Rooms,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iusto. Quas nisi perspiciatis molestias totam?",
    viewDetailsLink: "./room-details",
    reserveRoomLink: "#",
  },
];

export const RoomTypePage = () => {
  const [selectedMenu, setSelectedMenu] = useState("rooms");

  function selectRoomType(selectedItem) {
    handleScrollDownClick("roomTypeMenu");
    setSelectedMenu(selectedItem);
  }

  console.log(selectedMenu);

  return (
    <div>
      <div>
        <section className="-mt-20 w-screen min-h-screen xl:min-h-0 relative">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <img
              src={Rooms}
              alt=""
              className="w-full h-full object-cover brightness-75"
            />
          </div>
          <div className="min-h-screen xl:min-h-[600px] xl:py-48 flex flex-col justify-center items-center">
            <h4 className="text-white z-20 typo-display capitalize text-5xl mb-6 xl:mb-0">
              Rooms & Suites
            </h4>
            <p className="typo-body-2 text-white max-w-[560px] mx-4 xl:mx-0 mt-2 md:mt-6 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur quaerat praesentium at cum eos? Dolore in sapiente
              totam dolores nobis.
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
                    <h6 className="typo-display text-3xl">Rooms</h6>
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
                    <h6 className="typo-display text-3xl">Suites</h6>
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
                      key={index}
                      imageSrc={roomCard.imageSrc}
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
                      key={index}
                      imageSrc={roomCard.imageSrc}
                      title={roomCard.title}
                      description={roomCard.description}
                      viewDetailsLink={roomCard.viewDetailsLink}
                      reserveRoomLink={roomCard.reserveRoomLink}
                    />
                  );
                })}
          </div>
        </section>
        {/*  Contact US  */}
        <section className="bg-[#3A1E13] w-screen h-[50vh] my-12">
          <div className="container mx-auto text-white flex justify-center items-center h-full">
            <div className="max-w-xs flex flex-col justify-center gap-10">
              <h4 className="text-4xl">
                If you have any questions feel free to contact us!
              </h4>
              <Link className="w-max" to="">
                <button
                  className="border-button !text-white w-max"
                  id="contact-us-btn"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export const RoomCard = ({
  imageSrc,
  title,
  description,
  viewDetailsLink,
  reserveRoomLink,
}) => {
  return (
    <div className="card-container w-[80%] xl:w-[500px] relative">
      <div className="w-full h-[300px] relative overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h6 className="typo-menu-2">{title}</h6>
        <p className="typo-body-2 mt-2 mb-8">{description}</p>
        <div className="flex justify-between items-center gap-10">
          <a href={viewDetailsLink} className="flex items-center gap-1">
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
          </a>
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
