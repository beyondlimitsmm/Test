import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getArticlePage, getArticles } from "../../api/articles";
import ArticleCard from "../../components/ArticleCard";
import Pagination from "../../components/Pagination";

import Loading from "../../components/Loading";
import { createAssetsUrl, parseCmsData } from "../../libs/functions";
import Error from "../../components/Error";
import ArticleBg from "../../assets/images/yangon.jpeg";
import ProgressiveImage from "react-progressive-graceful-image";
import ReactMarkdown from "react-markdown";

export default function Articles() {
  const { isLoading, error, data } = useQuery(["articles"], getArticles);
  const {
    data: articlePageData,
    isLoading: loadingArticlePage,
    error: ArticlePageError,
  } = useQuery(["article-page"], getArticlePage);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  if (isLoading || loadingArticlePage) return <Loading />;
  if (error || ArticlePageError) return <Error />;

  const cmsArticlePageData = parseCmsData(articlePageData);

  const query = data?.data;

  const posts = query.map((post) => {
    return {
      id: post.id,
      title: post.attributes.title,
      href: `./articles/${post.id}`,
      description: post.attributes.description,
      imageUrl: post.attributes?.imageUrl?.data?.attributes.url,
      date: post.attributes.createdAt,
      datetime: post.attributes.createdAt,
      content: post.attributes.content,
    };
  });

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);
  };
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="-mt-20 w-screen min-h-screen xl:min-h-0 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <ProgressiveImage
            src={createAssetsUrl(cmsArticlePageData?.backgroundImage)}
            placeholder={ArticleBg}
          >
            {(src, loading) => (
              <img
                src={src}
                alt=""
                className={`w-full h-full object-cover brightness-50 ${
                  loading ? "loading" : "heroloaded"
                }`}
              />
            )}
          </ProgressiveImage>
        </div>
        <div className="h-screen xl:h-[65vh] xl:py-48 flex flex-col justify-center items-center">
          <h4 className="text-white z-20 typo-display capitalize text-5xl mb-6 xl:mb-0">
            {cmsArticlePageData?.header}
          </h4>
          <ReactMarkdown className="typo-body-2 text-white max-w-[560px] mx-4 xl:mx-0 mt-2 md:mt-6 text-center">
            {cmsArticlePageData?.description}
          </ReactMarkdown>
        </div>
      </section>

      <div className="bg-white container mx-auto px-4 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="my-16 space-y-20 lg:mt-20 lg:space-y-20">
              {currentPosts.map((post) => (
                <ArticleCard post={post} key={post.id} />
              ))}
            </div>
            {posts.length > postsPerPage && (
              <div className="py-12">
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={posts.length}
                  currentPage={currentPage}
                  paginate={paginate}
                  previousPage={previousPage}
                  nextPage={nextPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
