import base from "./base";

export const header = async () => await base("restaurant-header?populate=*");

export const about = async () => await base("restaurant-about?populate=*");

export const facility = async () =>
  await base(
    "restaurant-facility?populate[facilityNames][populate]=*&populate[button][populate]=*"
  );

export const gallery = async () =>
  await base("restaurant-gallery?populate[galleryCards][populate][0]=image");
