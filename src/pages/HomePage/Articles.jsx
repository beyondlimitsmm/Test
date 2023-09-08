import ArticleIcon from "../../assets/images/articles-icon.svg";
import ArticleBg from "../../assets/images/articles.png";
import { OutlineButton } from "../../components/OutlineButton";

export const Articles = () => {
  return (
    <section
      id="articles-for-you"
      className="w-screen overflow-hidden z-0 relative flex justify-center items-center text-white anchor-article"
    >
      <div className="w-screen h-[calc(100vh-80px)] overflow-hidden relative">
        <div
          className="w-full h-full bg-no-repeat bg-cover bg-fixed"
          style={{
            backgroundImage: `url('${ArticleBg}')`,
            filter: "brightness(0.5)",
          }}
        ></div>
        <div className="h-full p-10 w-[400px] xl:w-[600px] absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <div
            className="h-full flex justify-center items-center flex-col"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="25"
            data-aos-duration="500"
          >
            <div className="flex flex-col gap-6 items-center">
              <img
                src={ArticleIcon}
                alt="Articles"
                width="60"
                height="60"
                className="w-[60px] h-[60px]"
              />
              <h4 className="typo-title capitalize">Articles for You</h4>
              <p className="typo-body-2 text-center max-w-[450px]">
                Lorem ipsum dolor sit amet consectetur. Congue felis nunc dictum
                urna non suscipit convallis. A vulputate nunc commodo urna nibh
                aenean facilisi sapien. Non quis semper amet.
              </p>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <OutlineButton
                styles="border-white !text-white hover:border-hoverPale transition-[border]"
                routeTo="./articles"
                text="Let's Explore"
              ></OutlineButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
