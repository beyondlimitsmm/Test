import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../../api/articles";
import sharedSvg from "../../assets/images/share.svg";
import config from "../../config";
import MoreArticles from "../../components/MoreArticles";
// import "../../styles/ArticleDetailPage.css";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const ArticleDetailPage = () => {
  const { id } = useParams();
  const { error, isLoading, data } = useQuery(["articles"], getArticles);

  // useEffect(() => {
  //   const markdownContainer = document.querySelector(".center-image");
  //   if (markdownContainer) {
  //     const imagesInsideP = markdownContainer.querySelectorAll("p > img");
  //     imagesInsideP.forEach((img) => {
  //       const parentP = img.parentNode;
  //       if (parentP.tagName.toLowerCase() === "p") {
  //         parentP.classList.add("center-p");
  //       }
  //     });
  //   }
  // }, []);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  const query = data?.data;

  const postDetail = query.filter((post) => post.id == id);
  console.log(postDetail);
  const post = postDetail.map((post) => {
    return {
      id: post.id,
      title: post.attributes.title,
      description: post.attributes.description,
      imageUrl: post?.attributes?.imageUrl?.data?.attributes.url,
      date: post.attributes.updatedAt,
      datetime: post.attributes.createdAt,
      content: post.attributes.content,
    };
  });

  const interestingArticles = query
    .filter((article) => article.id !== id)
    .slice(0, 3);

  return (
    <div className="container max-w-6xl mx-auto mb-[120px] md:mt-20">
      <h2 className="mt-4 mb-6 text-center font-Jost">
        <Link to="/">Home</Link> &gt;{" "}
        <Link to="/articles"> Articles for you</Link> &gt; <Link> Detail</Link>
      </h2>

      <div className="flex flex-col gap-4">
        <div className="flex-1">
          <div className="relative">
            {/* <div className="absolute bottom-7 right-7 z-10">
              <img src={sharedSvg} alt="Share" />
            </div> */}
            {post[0].imageUrl ? (
              <img
                src={`${config.BASE_IMAGE_URL}${post[0].imageUrl}`}
                alt=""
                className="w-full object-contain mb-4"
              />
            ) : (
              <img
                src={`https://images.unsplash.com/photo-1612257999781-1a997105f94b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80`}
                alt=""
                className="absolute inset-0 h-full w-full rounded-md bg-gray-50 object-cover"
              />
            )}

            <div className="overlay absolute inset-0"></div>
          </div>

          <h6 className="font-Jost text-xl font-medium leading-[150%] my-8 mx-4 prose lg:prose-2xl">
            {post[0].title}
          </h6>

          <div className="flex flex-col gap-6 justify-between mx-4 prose max-w-none">
            <ReactMarkdown className="center-image line-break font-Jost text-lg font-normal leading-[150%]">
              {post[0].content}
            </ReactMarkdown>
          </div>

          <div className="underline mx-4 font-Jost">
            <Link to={"/articles"}> Back to articles </Link>
          </div>
        </div>

        <div className="container my-6 ">
          {/* <h4 className="font-Jost text-3xl font-normal leading-3 mb-6">
            Interesting Articles
          </h4> */}
          {/* <div className="flex flex-col gap-6">
            {interestingArticles.map((article) => (
              <div key={article.id}>
                <Link to={`/articles/${article.id}`}>
                  <div className="bg-cover h-48 flex items-center">
                    <img
                      src={`${config.BASE_IMAGE_URL}${article.attributes.imageUrl.data.attributes.url}`}
                      alt="PlaceHolder"
                      className="w-full h-full bg-no-repeat object-cover"
                      style={{ width: "120px", height: "120px" }}
                    />
                    <div className="p-4">
                      <p className="font-Jost text-lg font-normal leading-[150%]">
                        {article.attributes.title}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div> */}
          {/* {interestingArticles.map((article) => ( */}
          {/* // console.log(article) */}
          <MoreArticles
            // key={article.id}
            articles={interestingArticles}
            // imageUrl={`${config.BASE_IMAGE_URL}${article.attributes?.imageUrl?.data?.attributes.url}`}
            // title={article.attributes.title}
            // date={article.attributes.updatedAt}
          />
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};
export default ArticleDetailPage;
