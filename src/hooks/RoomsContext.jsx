import { createContext, useContext } from "react";

import { getRooms } from "../api/roomsAndSuites.js";
import { useQuery } from "@tanstack/react-query";
import config from "../config";
import Loading from "../components/Loading.jsx";

const RoomsContext = createContext();

const RoomsProvider = ({ children }) => {
  const { isLoading, error, data } = useQuery(["rooms"], getRooms);

  if (isLoading) return <Loading />;

  if (error) return <div>Error: {error.message}</div>;

  if (!data) return null;

  const query = data?.data;

  const rooms = query.map((room) => ({
    id: room.id,
    title: room.attributes.title,
    featuredImage: room.attributes.featuredImage.data.attributes.url,
    galleryImages: room.attributes.galleryImages.data.map(
      (galleryImage) => config.BASE_IMAGE_URL + galleryImage.attributes.url
    ),
    backgroundImage: room.attributes.backgroundImage.data.attributes.url,
    featuredHeader: room.attributes?.featuredHeader,
    featuredText: room.attributes?.featuredText,
    roomDetails: room.attributes?.roomDetails.map((roomDetail) => ({
      id: roomDetail.id,
      type: roomDetail.type,
      value: roomDetail.value,
    })),
    roomFeatures: room.attributes?.roomFeatures.map((roomFeature) => ({
      id: roomFeature.id,
      description: roomFeature.description,
      iconImage:
        config.BASE_IMAGE_URL + roomFeature.iconImage?.data?.attributes.url,
    })),
    viewDetailsLink: `./rooms`,
    reserveRoomLink: "#",
  }));

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
