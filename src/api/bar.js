import base from "./base";

export const header = async () => await base("bar-header?populate=*");

export const feature = async () =>
  await base("bar-feature?fields=*&populate=*");

export const gallery = async () =>
  await base("bar-gallery?fields=*&populate[barCards][populate][0]=image");
