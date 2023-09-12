import base from "./base";

export const hero = async () =>
  await base("/home-hero?fields=title&populate=*");

export const about = async () =>
  await base(
    "/home-abouts?fields=*&populate[logo]=*&populate[contactInfo][populate][location]=*&populate[button]=*"
  );

export const room = async () =>
  await base("/home-room?fields=*&populate[0]=button&populate[1]=image");

export const gallery = async () =>
  await base(
    "/home-gallery?fields=*&populate[galleryCards][populate][0]=image&populate[button]=*"
  );

export const service = async () => await base("/home-service?populate=*");

export const feature = async () =>
  await base(
    "/home-feature?fields=*&populate[featureCards][populate][0]=mainImage&populate[featureCards][populate][1]=subImage&populate[featureCards][populate][2]=button"
  );

export const bar = async () =>
  await base(
    "/home-restaurant/?populate[restaurantCards][populate][0]=image&fields=*"
  );

export const article = async () =>
  await base("/home-article?fields=*&populate=*");

export const getInTouch = async () =>
  await base(
    "/home-getintouch?populate[openClose]=*&populate[contactInfo][populate][location]=*"
  );

export const footerSocials = () =>
  fetch(
    config.BASE_API_URL +
      "/footer-social?populate[socials]=*&populate[contactInfo][populate][location]=*"
  ).then((res) => res.json());

export const payments = () =>
  fetch(config.BASE_API_URL + "/payments/?populate=*&fields[0]=title").then(
    (res) => res.json()
  );
