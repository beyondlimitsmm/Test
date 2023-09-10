// import ArticleCard from "../components/ArticleCard";
// import BlogCard from "../components/BlogCard";
// import Divider from "../components/Divider";

import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
const posts = [
  {
    id: 1,
    title: "The Best Places to Visit in Yangon",
    href: `./articles`,
    description:
      "Yangon is a city of contrasts, with ancient temples and colonial architecture standing side-by-side with modern skyscrapers. Here are some of the best places to visit in Yangon:",
    imageUrl:
      "https://images.unsplash.com/photo-1612257999781-1a997105f94b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    date: "Sep 16, 2023",
    datetime: "2023-09-16",
  },
  {
    id: 2,
    title: "The Best Places to Visit in Yangon",
    href: "./articles",
    description:
      "Yangon is a city of contrasts, with ancient temples and colonial architecture standing side-by-side with modern skyscrapers. Here are some of the best places to visit in Yangon:",
    imageUrl:
      "https://images.unsplash.com/photo-1612257999781-1a997105f94b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 3,
    title: "The Best Places to Visit in Yangon",
    href: "./articles",
    description:
      "Yangon is a city of contrasts, with ancient temples and colonial architecture standing side-by-side with modern skyscrapers. Here are some of the best places to visit in Yangon:",
    imageUrl:
      "https://images.unsplash.com/photo-1612257999781-1a997105f94b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  // More posts...
];

export default function Articles() {
  return (
    <>
      <section className="-mt-20 w-screen min-h-screen xl:min-h-0 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <img
            src={
              "https://images.unsplash.com/photo-1612257999781-1a997105f94b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
            }
            alt=""
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        <div className="h-screen xl:h-[65vh] xl:py-48 flex flex-col justify-center items-center">
          <h4 className="text-white z-20 typo-display capitalize text-5xl mb-6 xl:mb-0">
            Articles for You
          </h4>
          <p className="typo-body-2 text-white max-w-[560px] mx-4 xl:mx-0 mt-2 md:mt-6 text-center">
            Lorem ipsum dolor sit amet consectetur. Congue felis nunc dictum
            urna non suscipit convallis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime, similique.
          </p>
        </div>
      </section>

      <div className="bg-white container mx-auto px-4 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post) => (
                <ArticleCard post={post} key={post.id} />
              ))}
            </div>
            <div className="py-12">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const ArticleCard = ({ post }) => {
  return (
    <article
      key={post.id}
      className="relative isolate flex flex-col gap-8 lg:flex-row"
    >
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <img
          src={post.imageUrl}
          alt=""
          className="absolute inset-0 h-full w-full rounded-md bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={post.datetime} className="text-gray-500">
            {post.date}
          </time>
        </div>
        <div className="group relative max-w-xl">
          <h3 className="typo-menu-2 mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link to={`${post.id}`}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <p className="typo-body-2 mt-5 text-sm leading-6 text-gray-600">
            {post.description}
          </p>
        </div>
      </div>
    </article>
  );
};
