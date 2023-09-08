import config from "../config";

export const hero = () =>
  fetch(
    config.BASE_API_URL + "/home-heroes/1?fields=title&populate[video]=*"
  ).then((res) => res.json());

export const about = () =>
  fetch(
    config.BASE_API_URL +
      "/home-abouts/1?fields=*&populate[logo]=*&populate[contactInfo][populate][location]=*&populate[button]=*"
  ).then((res) => res.json());

export const room = () =>
  fetch(
    config.BASE_API_URL +
      "/home-rooms/1?fields=*&populate[0]=button&populate[1]=image"
  ).then((res) => res.json());

export const barAndRestaurants = () =>
  fetch(
    config.BASE_API_URL + "/home-bar-restaurants/?populate=*&fields=*"
  ).then((res) => res.json());

export const ourFeatures = () =>
  fetch(config.BASE_API_URL + "/home-our-features?fields=*&populate=*").then(
    (res) => res.json()
  );

export const ourGalleryHead = () =>
  fetch(config.BASE_API_URL + "/home-gallery-heads/1?fields=*&populate=*").then(
    (res) => res.json()
  );

export const ourGalleries = () =>
  fetch(
    config.BASE_API_URL + "/home-galleries?fields=*&populate[1]=image"
  ).then((res) => res.json());

export const article = () =>
  fetch(config.BASE_API_URL + "/home-articles/1?fields=*&populate=*").then(
    (res) => res.json()
  );

export const getInTouch = () =>
  fetch(
    config.BASE_API_URL +
      "/home-getintouches/1?populate[openClose]=*&populate[contactInfo][populate][location]=*"
  ).then((res) => res.json());

export const sendMessage = (obj) =>
  fetch(config.BASE_API_URL + "/messages", {
    method: "POST",
    "content-type": "application/json",
    accept: "application/json",
    body: JSON.parse(obj),
  });
