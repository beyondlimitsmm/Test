import { useNavigate, useParams } from "react-router-dom";
import rooms from "../../assets/images/more-rooms.png";
import { GallerySliderSection } from "../../components/GallerySliderSection";
import { useSuites } from "../../hooks/SuitesContext";
import config from "../../config";
import { RoomSlider } from "../../components/RoomSlider";
import RoomPlaceHolder from "../../assets/images/RoomPlaceHolder.jpg";
import ProgressiveImage from "react-progressive-graceful-image";
import NotFound from "../NotFound";
import { useEffect, useState } from "react";

const SuiteDetailPage = () => {
  const suites = useSuites();
  const navigate = useNavigate();
  const [gridLength, setGridLength] = useState(5);

  const { id } = useParams();
  const suite = suites.find((suite) => suite.id == id);

  useEffect(() => {
    console.log("suite", suite);
    setGridLength(suite?.suiteDetails.length);

    if (!suite) {
      navigate("/404");
    }
  }, [suite, navigate]);

  if (!suite) {
    return <NotFound />;
  }

  return (
    <>
      <section className="-mt-20 w-screen min-h-screen xl:min-h-0 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <ProgressiveImage
            src={`${config.BASE_IMAGE_URL}${suite.backgroundImage}`}
            placeholder={RoomPlaceHolder}
          >
            {(src, loading) => (
              <img
                src={src}
                alt=""
                className={`w-full h-full object-cover ${
                  loading ? "loading" : "heroloaded"
                } `}
              />
            )}
          </ProgressiveImage>
          {/* <img
            src={`${config.BASE_IMAGE_URL}${suite.backgroundImage}`}
            alt=""
            className="w-full h-full object-cover brightness-50"
          /> */}
        </div>

        <div className="min-h-screen xl:min-h-[600px] xl:py-48 flex flex-col justify-center gap-8 items-center">
          <h4 className="text-white font-modesfa z-20 typo-display capitalize !text-3xl xl:!text-5xl">
            {suite.title}
          </h4>

          <div
            className={`w-[80%] p-8 grid grid-cols-2 xl:grid-cols-${suite.suiteDetails.length} justify-items-center xl:items-center items-start gap-4 xl:gap-2`}
          >
            {suite.suiteDetails.map((suiteDetail, index) => (
              <div
                key={suiteDetail.id}
                className={`text-white text-center ${
                  index === 0 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <h4 className="typo-body">{suiteDetail.type}</h4>
                <p className="typo-menu-2">{suiteDetail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col xl:flex-row justify-between items-center py-10 px-4 xl:px-0 xl:py-20 xl:my-20">
        <div className="flex-1 xl:px-20 self-stretch flex justify-center items-center">
          <ProgressiveImage
            src={suite.featuredImage}
            placeholder={RoomPlaceHolder}
          >
            {(src, loading) => (
              <img
                src={src}
                alt=""
                className={`w-full xl:h-full h-[400px] object-cover max-w-[500px] ${
                  loading ? "loading" : "loaded"
                }}`}
              />
            )}
          </ProgressiveImage>
        </div>
        <div className="flex-1 text-start p-4 xl:px-0 self-stretch xl:self-auto">
          <h3 className="typo-section-title">{suite.featuredHeader}</h3>
          <p className="typo-menu-2">{suite.featuredText}</p>
          <div className="flex flex-col mt-10">
            {suite.suiteFeatures.map((suiteFeature, index) => (
              <div
                key={index}
                className="flex items-center border-b py-4 gap-5"
              >
                <div className="h-7 w-7 md:w-8 md:h-8 flex shrink-0 items-center">
                  <img
                    src={suiteFeature.iconImage}
                    className="h-full w-full object-cover object-center"
                    alt={suiteFeature.description}
                    loading="lazy"
                  />
                </div>
                <p className="typo-body-2">{suiteFeature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoomSlider imageUrls={suite.galleryImages}></RoomSlider>

      <section className="mx-auto container flex justify-center items-center mb-10 xl:mb-40">
        <div
          className="flex items-center gap-6 cursor-pointer"
          onClick={() => navigate("/room-types")}
        >
          <div className="mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </div>
          <h4 className="font-modesfa z-20 typo-display capitalize !text-3xl xl:!text-5xl">
            Rooms
            <span className="typo-display capitalize !text-3xl xl:!text-5xl px-4">
              &
            </span>
            Suites
          </h4>
        </div>
      </section>
    </>
  );
};
export default SuiteDetailPage;
