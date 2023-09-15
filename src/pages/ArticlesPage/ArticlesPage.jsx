import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getArticles } from "../../api/articles";
import ArticleCard from "../../components/ArticleCard";
import Pagination from "../../components/Pagination";
import Spinner from "../../assets/images/spinner.svg";

const ErrorPage = ({ message }) => {
  return (
    <div className="container mx-auto">
      <h2>Error</h2>
      <p>{message}</p>
    </div>
  );
};

export default function Articles() {
  const { isLoading, error, data } = useQuery(["articles"], getArticles);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  if (isLoading)
    return (
      <div className="min-h-screen grid place-items-center">
        <img src={Spinner} alt="" />
      </div>
    );
  if (error) return <ErrorPage message={error.message} />;

  const query = data?.data;

  const posts = query.map((post) => {
    return {
      id: post.id,
      title: post.attributes.title,
      href: `./articles/${post.id}`,
      description: post.attributes.description,
      imageUrl: post.attributes?.imageUrl.data.attributes.url,
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
  const nextPage = () => setCurrentPage(currentPage + 1);
  const previousPage = () => setCurrentPage(currentPage - 1);

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
