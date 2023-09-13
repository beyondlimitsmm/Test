import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import Rooms from "../assets/images/rooms.png";
import { getSuites } from "../api/roomsAndSuites.js";
import config from "../config";

const SuitesContext = createContext();

const SuitesData = [
  {
    id: 1,
    imageSrc: Rooms,
    title: "Lorem ipsum dolor sit amet",
    price: "90,000/per night",
    people: "3 max",
    bed: "King Bed",
    squareFeet: "32 m²",
    type: "en suite",
    featuredImage: Rooms,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iusto. Quas nisi perspiciatis molestias totam?",
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
    galleryImages: [
      "https://swiperjs.com/demos/images/nature-1.jpg",
      "https://swiperjs.com/demos/images/nature-2.jpg",
      "https://swiperjs.com/demos/images/nature-3.jpg",
      "https://swiperjs.com/demos/images/nature-4.jpg",
      "https://swiperjs.com/demos/images/nature-5.jpg",
      "https://swiperjs.com/demos/images/nature-6.jpg",
      "https://swiperjs.com/demos/images/nature-7.jpg",
      "https://swiperjs.com/demos/images/nature-8.jpg",
      "https://swiperjs.com/demos/images/nature-9.jpg",
      "https://swiperjs.com/demos/images/nature-10.jpg",
    ],
    viewDetailsLink: `./rooms`,
    reserveRoomLink: "#",
  },
];

const SuitesProvider = ({ children }) => {
  const { data, error, isLoading } = useQuery(["suites"], getSuites);

  console.log("suites", data);

  if (!data) return null;

  const query = data?.data;
  console.log("query", query);

  const suites = query.map((suite) => ({
    id: suite.id,
    title: suite.attributes.title,
    price: suite.attributes.price,
    people: suite.attributes.people,
    bed: suite.attributes.bed,
    squareFeet: suite.attributes.squareFeet,
    type: suite.attributes.type,
    description: suite.attributes.description,
    featuredImage:
      config.BASE_IMAGE_URL +
      suite.attributes.featuredImage.data.attributes.url,
    galleryImages: suite.attributes.galleryImages.data.map(
      (galleryImage) => config.BASE_IMAGE_URL + galleryImage.attributes.url
    ),
    imageUrl: suite.attributes.imageUrl?.data.attributes.url,
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
    viewDetailsLink: `./suites`,
    reserveRoomLink: "#",
  }));

  console.log("suites", suites);

  // if (!data) return null;
  return (
    <SuitesContext.Provider value={suites}>{children}</SuitesContext.Provider>
  );
};

const useSuites = () => {
  const suites = useContext(SuitesContext);

  if (!suites) {
    throw new Error("useSuites must be used within a SuiteProvider");
  }

  return suites;
};

export { SuitesProvider, useSuites };
