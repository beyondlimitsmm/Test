import base from "./base";

export const csrf = async () => await base("csrf");

export const hero = async () => await base("home-hero?fields=title&populate=*");

export const about = async () =>
  await base(
    "home-about?fields=*&populate[logo]=*&populate[contactInfo][populate][location]=*&populate[button]=*"
  );

export const bookNow = async () =>
  await base("book-now?fields=*&populate[logo]=*&populate[icon]=*");

export const room = async () =>
  await base(
    "home-room?fields=*&populate[0]=button&populate[1]=image&populate[2]=icon"
  );

export const gallery = async () =>
  await base(
    "home-gallery?fields=*&populate[galleryCards][populate][0]=image&populate[button]=*"
  );

export const service = async () =>
  await base("home-service?populate[serviceNames][populate][0]=icon");

export const feature = async () =>
  await base(
    "home-feature?fields=*&populate[featureCards][populate][0]=mainImage&populate[featureCards][populate][1]=subImage&populate[featureCards][populate][2]=button&populate[featureCards][populate][3]=icon"
  );

export const bar = async () =>
  await base(
    "home-restaurant/?populate[logo]=*&populate[defaultImage]=*&populate[restaurantCards][populate][0]=image&populate[restaurantCards][populate][1]=facilities&fields=*"
  );

export const article = async () =>
  await base("home-article?fields=*&populate=*");

export const getInTouch = async () =>
  await base(
    "home-getintouch?populate[openClose]=*&populate[contactInfo][populate][location]=*"
  );

export const footer = async () =>
  await base(
    "footer?populate[logo]=*&populate[socials]=*&populate[footerLinks]=*&populate[payments][populate][0]=image&populate[contactInfo][populate][0]=location"
  );

export const sidebar = async () =>
  await base(
    "sidebar?populate[navLinks]=*&populate[ourHighlights]=*&populate[socials]=*&populate[contactInfo][populate][0]=location"
  );

export const navbar = async () =>
  await base(
    "navbar?populate[logo]=*&populate[button]=*&populate[phone_button][populate][0]=icon&populate[email_button][populate][0]=icon"
  );

export const notfound = async () =>
  await base("not-found?populate[logo]=*&populate[buttons][populate][0]=icon");

export const navbarLogo = async () => await base("navbar?populate[logo]=*");
