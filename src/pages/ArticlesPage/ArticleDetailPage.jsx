import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../../api/articles";
import sharedSvg from "../../assets/images/share.svg";
import config from "../../config";

const ArticleDetailPage = () => {
  const { id } = useParams();
  const { error, isLoading, data } = useQuery(["articles"], getArticles);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  const query = data?.data;

  const postDetail = query.filter((post) => post.id == id);

  const post = postDetail.map((post) => {
    return {
      id: post.id,
      title: post.attributes.title,
      description: post.attributes.description,
      imageUrl: post.attributes.imageUrl.data.attributes.url,
      date: post.attributes.createdAt,
      datetime: post.attributes.createdAt,
      content: post.attributes.content,
    };
  });

  const interestingArticles = query
    .filter((article) => article.id !== id)
    .slice(0, 3);

  return (
    <div className="container mx-auto mb-[120px]">
      <h2 className="mt-4 mb-6 text-center">
        <Link to="/">Home</Link> &gt;{" "}
        <Link to="/articles"> Articles for you</Link> &gt; <Link> Detail</Link>
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute bottom-7 right-7 z-10">
              <img src={sharedSvg} alt="Share" />
            </div>

            <img
              src={`${config.BASE_IMAGE_URL}${post[0].imageUrl}`}
              alt=""
              className="w-full object-contain mb-4"
            />
            <div className="overlay absolute inset-0"></div>
          </div>

          <h6 className="font-Lato text-xl font-medium leading-[150%] my-8 mx-4 prose lg:prose-2xl">
            {post[0].title}
          </h6>

          <div className="flex flex-col gap-6 justify-between mx-4 prose lg:prose-2xl">
            <ReactMarkdown className="line-break font-Lato text-lg font-normal leading-[150%]">
              {post[0].content}
            </ReactMarkdown>
          </div>
        </div>

        <div className="container my-6 mx-auto max-w-[400px]">
          <h4 className="font-Lato text-3xl font-normal leading-3 mb-6">
            Interesting Articles
          </h4>
          <div className="flex flex-col gap-6">
            {interestingArticles.map((article) => (
              <div key={article.id}>
                <Link to={`/articles/${article.id}`}>
                  <div className="h-[120px] flex items-center">
                    <img
                      src={`${config.BASE_IMAGE_URL}${article.attributes.imageUrl.data.attributes.url}`}
                      alt="PlaceHolder"
                      className="w-[120px]"
                    />
                    <div className="p-4">
                      <p className="font-Lato text-lg font-normal leading-[150%]">
                        {article.attributes.title}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticleDetailPage;
