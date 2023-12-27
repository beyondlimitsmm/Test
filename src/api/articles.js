import base from "./base";

export const getArticles = async () =>
  await base("articles?populate=*&sort=updatedAt:desc");

export const getArticlePage = async () =>
  await base(`article-page?populate=*`);
