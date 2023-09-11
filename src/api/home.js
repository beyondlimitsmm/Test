import config from "../config";

export const hero = () =>
  fetch(config.BASE_API_URL + "/home-hero?fields=title&populate=*").then(
    (res) => res.json()
  );

export const about = () =>
  fetch(
    config.BASE_API_URL +
      "/home-about?fields=*&populate[logo]=*&populate[contactInfo][populate][location]=*&populate[button]=*"
  ).then((res) => res.json());

export const room = () =>
  fetch(
    config.BASE_API_URL +
      "/home-room?fields=*&populate[0]=button&populate[1]=image"
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
  fetch(config.BASE_API_URL + "/home-gallery-head?fields=*&populate=*").then(
    (res) => res.json()
  );

export const ourGalleries = () =>
  fetch(
    config.BASE_API_URL + "/home-galleries?fields=*&populate[1]=image"
  ).then((res) => res.json());

export const article = () =>
  fetch(config.BASE_API_URL + "/home-article?fields=*&populate=*").then((res) =>
    res.json()
  );

export const getInTouch = () =>
  fetch(
    config.BASE_API_URL +
      "/home-getintouch?populate[openClose]=*&populate[contactInfo][populate][location]=*"
  ).then((res) => res.json());

export const footerSocials = () =>
  fetch(
    config.BASE_API_URL +
      "/footer-social?populate[socials]=*&populate[contactInfo][populate][location]=*"
  ).then((res) => res.json());

export const payments = () =>
  fetch(config.BASE_API_URL + "/payments/?populate=*&fields[0]=title").then(
    (res) => res.json()
  );
