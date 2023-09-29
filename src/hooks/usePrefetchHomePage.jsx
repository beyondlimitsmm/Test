import { useQueries } from "@tanstack/react-query";
import { galleries } from "../api/gallery";
import {
  about,
  article,
  bar,
  feature,
  gallery,
  getInTouch,
  hero,
  room,
  service,
} from "../api/home";

const homePageQueries = [
  { queryKey: ["hero"], queryFn: hero },
  { queryKey: ["about"], queryFn: about },
  { queryKey: ["room"], queryFn: room },
  { queryKey: ["bar"], queryFn: bar },
  { queryKey: ["homeFeature"], queryFn: feature },
  { queryKey: ["homeService"], queryFn: service },
  { queryKey: ["homeGallery"], queryFn: gallery },
  { queryKey: ["galleries"], queryFn: galleries },
  { queryKey: ["homeArticle"], queryFn: article },
  { queryKey: ["getInTouch"], queryFn: getInTouch },
];

export default () => {
  useQueries({
    queries: homePageQueries,
  });
};
