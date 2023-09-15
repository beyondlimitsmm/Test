import base from "./base";

export const header = async () =>
  await base("/pool-header?fields=*&populate=*");

export const gallery = async () =>
  await base("/pool-gallery?fields=*&populate[poolCards][populate][0]=image");
