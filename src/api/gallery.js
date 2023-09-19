import base from "./base";

// export const galleryCategories = async () =>
//   await base("/gallery-categories/?fields=title");

export const galleries = async (name) =>
  await base(`/galleries?populate[galleries][populate][0]=image`);
