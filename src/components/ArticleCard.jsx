import { Link } from "react-router-dom";
import config from "../config";
import { format } from "date-fns";
import Yangon from "../assets/images/yangon.jpeg";
import ProgressiveImage from "react-progressive-graceful-image";
import ReactMarkdown from "react-markdown";

const ArticleCard = ({ post }) => {
  return (
    <article
      key={post.id}
      className="relative isolate flex flex-col gap-8 lg:flex-row"
    >
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        {post.imageUrl ? (
          <ProgressiveImage
            src={`${config.BASE_IMAGE_URL}${post.imageUrl}`}
            placeholder={Yangon}
          >
            {(src, loading) => (
              <img
                className={`absolute inset-0 h-full w-full rounded-md bg-gray-50 object-cover ${
                  loading ? " loading" : " loaded"
                }`}
                src={src}
                alt="sea beach"
              />
            )}
          </ProgressiveImage>
        ) : (
          <img
            src={Yangon}
            alt=""
            className="absolute inset-0 h-full w-full rounded-md bg-gray-50 object-cover"
          />
        )}

        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={post.datetime} className="text-gray-500">
            {format(new Date(post.date), "MMMM d, yyyy")}
          </time>
        </div>
        <div className="group relative max-w-xl">
          <h3 className="typo-menu-2 mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link to={`${post.id}`}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <ReactMarkdown className="typo-body-2 mt-5 text-sm leading-6 text-gray-600">
            {post.description}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
