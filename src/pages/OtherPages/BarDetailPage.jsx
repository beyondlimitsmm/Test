import Voyage1 from "../../assets/images/voyage1.png";
import ArticleIcon from "../../assets/images/articles-icon.svg";
import FeatureImage from "../../components/FeatureImage";

const BarDetailPage = () => {
  return (
    <>
      <section className="h-screen w-screen -mt-20 relative overflow-hidden z-10 flex justify-center items-center">
        <div className="absolute w-screen h-screen brightness-50  bg-bar-details bg-no-repeat bg-cover"></div>

        <div className="text-white z-20 typo-display mb-10 flex flex-col items-center">
          <img src={Voyage1} alt="" />
          <h2 className="typo-title mb-8 text-center">
            Serving you our best until the end of time
          </h2>

          <button className="border-button  text-base ">
            <span className="text-white"> Reserve Now </span>
          </button>
        </div>
      </section>

      <section className="py-10 xl:py-20 container mx-auto overflow-hidden w-screen relative flex justify-center items-center text-white">
        <div className="w-screen h-[450px] overflow-hidden relative">
          <div className="w-full h-full bg-no-repeat bg-cover bg-fixed bg-center bg-foodAndDrink"></div>

          <FeatureImage
            icon={ArticleIcon}
            title={"Food & Drinks"}
            description={
              "Lorem ipsum dolor sit amet consectetur. Congue felis nunc dictum urna non suscipit convallis. A vulputate nunc commodo urna nibh aenean facilisi sapien."
            }
            detail={"See Menu"}
          />
        </div>
      </section>

      <section className="mx-auto container xl:py-10 py-0 px-4">
        <h4 className="typo-title">Let’s take a look</h4>
      </section>
    </>
  );
};
export default BarDetailPage;
