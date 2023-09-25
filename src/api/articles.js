import base from "./base";

export const getArticles = async () =>
  await base("/articles?populate=*&sort=updatedAt:desc");
