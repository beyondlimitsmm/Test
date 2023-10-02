import { useQuery } from "@tanstack/react-query";

import ArticleIcon from "../../assets/images/articles-icon.svg";
import ArticleBg from "../../assets/images/articles.png";
import { OutlineButton } from "../../components/OutlineButton";
import { article } from "../../api/home";
import { createAssetsUrl, parseCmsData } from "../../libs/functions";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

export const Articles = () => {
  const { error, data, isLoading } = useQuery({
    queryKey: ["homeArticle"],
    queryFn: article,
  });
  if (isLoading) return <Loading />;
  if (error) return <Error />;
  const cmsData = parseCmsData(data);

  return (
    <section
      id="articles-for-you"
      className="w-screen overflow-hidden z-0 relative flex justify-center items-center text-white anchor-article"
    >
      <div className="w-screen h-[calc(100vh-80px)] overflow-hidden relative">
        <div
          className="w-full h-full bg-no-repeat bg-cover bg-fixed"
          style={{
            backgroundImage: `url('${createAssetsUrl(cmsData?.image)}')`,
            filter: "brightness(0.5)",
          }}
        ></div>
        <div className="h-full p-10 w-[400px] xl:w-[600px] absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <div
            className="h-full flex justify-center items-center flex-col"
            // data-aos="fade-up"
            // data-aos-offset="100"
            // data-aos-delay="25"
            // data-aos-duration="500"
          >
            <div className="flex flex-col gap-6 items-center">
              <img
                src={createAssetsUrl(cmsData?.icon)}
                alt="Articles"
                width="60"
                height="60"
                className="w-[60px] h-[60px]"
              />
              <h4 className="typo-title capitalize">{cmsData?.title}</h4>
              <p className="typo-body-2 text-center max-w-[450px]">
                {cmsData?.description}
              </p>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <OutlineButton
                styles="border-white !text-white hover:border-hoverPale transition-[border]"
                routeTo={cmsData?.button?.link}
                text={cmsData?.button?.name}
              ></OutlineButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
