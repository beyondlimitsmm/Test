import { createContext, useContext } from "react";
import Rooms from "../assets/images/rooms.png";
import { getRooms } from "../api/roomsAndSuites.js";
import { useQuery } from "@tanstack/react-query";
import config from "../config";
import Spinner from "../assets/images/spinner.svg";

const RoomsContext = createContext();

// const RoomsData = [
//   {
//     id: 1,
//     imageSrc: Rooms,
//     title: "Lorem ipsum dolor sit amet",
//     price: "90,000/per night",
//     people: "3 max",
//     bed: "King Bed",
//     squareFeet: "32 m²",
//     type: "en suite",
//     featuredImage: Rooms,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iusto. Quas nisi perspiciatis molestias totam?",
//     amenities: [
//       {
//         image:
//           "https://www.kempinski.com/en/content/download/115/405?version=21&amp;inline=1",
//         description: "Bathtub and separate shower",
//       },
//       {
//         image:
//           "https://www.kempinski.com/en/content/download/105/385?version=21&amp;inline=1",
//         description: "Safe",
//       },
//       {
//         image:
//           "https://www.kempinski.com/en/content/download/83/341?version=21&amp;inline=1",
//         description: "Desk",
//       },
//       {
//         image:
//           "https://www.kempinski.com/en/content/download/80/335?version=21&amp;inline=1",
//         description: "Coffee and/or tea making facilities",
//       },
//       {
//         image:
//           "https://www.kempinski.com/en/content/download/77/329?version=23&amp;inline=1",
//         description: "Baby bed allowed",
//       },
//       {
//         image:
//           "https://www.kempinski.com/en/content/download/74/323?version=21&amp;inline=1",
//         description: "Air conditioning",
//       },
//     ],
//     galleryImages: [
//       "https://swiperjs.com/demos/images/nature-1.jpg",
//       "https://swiperjs.com/demos/images/nature-2.jpg",
//       "https://swiperjs.com/demos/images/nature-3.jpg",
//       "https://swiperjs.com/demos/images/nature-4.jpg",
//       "https://swiperjs.com/demos/images/nature-5.jpg",
//       "https://swiperjs.com/demos/images/nature-6.jpg",
//       "https://swiperjs.com/demos/images/nature-7.jpg",
//       "https://swiperjs.com/demos/images/nature-8.jpg",
//       "https://swiperjs.com/demos/images/nature-9.jpg",
//       "https://swiperjs.com/demos/images/nature-10.jpg",
//     ],
//     viewDetailsLink: `./rooms`,
//     reserveRoomLink: "#",
//   },
// ];

// const rooms = getRooms().then((data) => console.log(data));

// console.log(rooms);

const RoomsProvider = ({ children }) => {
  const { isLoading, error, data } = useQuery(["rooms"], getRooms);

  if (isLoading)
    return (
        <div className="min-h-screen grid place-items-center">
          <img src={Spinner} alt="" />
        </div>
    );

  if (error) return <div>Error: {error.message}</div>

  if (!data) return null;

  const query = data?.data;

  console.log(query)

  const rooms = query.map((room) => ({
    id: room.id,
    title: room.attributes.title,
    price: room.attributes.price,
    people: room.attributes.people,
    bed: room.attributes.bed,
    squareFeet: room.attributes.squareFeet,
    type: room.attributes.type,
    description: room.attributes.description,
    featuredImage: room.attributes.featuredImage.data.attributes.url,
    galleryImages: room.attributes.galleryImages.data.map(
      (galleryImage) => config.BASE_IMAGE_URL + galleryImage.attributes.url
    ),
    backgroundImage: room.attributes.backgroundImage.data.attributes.url,
    amenities: [
      {
        image:
          "https://www.kempinski.com/en/content/download/115/405?version=21&amp;inline=1",
        description: "Bathtub and separate shower",
      },
      {
        image:
          "https://www.kempinski.com/en/content/download/105/385?version=21&amp;inline=1",
        description: "Safe",
      },
      {
        image:
          "https://www.kempinski.com/en/content/download/83/341?version=21&amp;inline=1",
        description: "Desk",
      },
      {
        image:
          "https://www.kempinski.com/en/content/download/80/335?version=21&amp;inline=1",
        description: "Coffee and/or tea making facilities",
      },
      {
        image:
          "https://www.kempinski.com/en/content/download/77/329?version=23&amp;inline=1",
        description: "Baby bed allowed",
      },
      {
        image:
          "https://www.kempinski.com/en/content/download/74/323?version=21&amp;inline=1",
        description: "Air conditioning",
      },
    ],
    featuredHeader: room.attributes?.featuredHeader,
    featuredText: room.attributes?.featuredText,
    features: room.attributes?.features?.amenities.map(feature => {
      return {
        image: feature.image,
        description: feature.description,
      }
    }),
    viewDetailsLink: `./rooms`,
    reserveRoomLink: "#",
  }));

  console.log("rooms", rooms);

  return (
    <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
  );
};

const useRooms = () => {
  const rooms = useContext(RoomsContext);

  if (!rooms) {
    throw new Error("useRooms must be used within a RoomsProvider");
  }

  return rooms;
};

export { RoomsProvider, useRooms };
