import { useQuery } from "@tanstack/react-query";
import room from "../../assets/images/RoomPlaceHolder.jpg";
import { about, facility, header } from "../../api/meetingRoom";
import Error from "../../components/Error";
import { createAssetsUrl, parseCmsData } from "../../libs/functions";
import ProgressiveImage from "react-progressive-graceful-image";
import config from "../../config";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ReactMarkdown from "react-markdown";

const MeetingRoom = () => {
  const {
    data: headData,
    error,
    isLoading: loadingHeader,
  } = useQuery(["meetingRoomHeader"], header);
  const {
    data: aboutData,
    error: aboutError,
    isLoading: loadingAbout,
  } = useQuery(["meetingRoomAbout"], about);
  const {
    data: facilityData,
    error: facilityError,
    isLoading: loadingFacility,
  } = useQuery(["meetingRoomFacilities"], facility);

  if (loadingHeader || loadingAbout || loadingFacility) return <Loading />;
  if (error || aboutError || facilityError) return <Error />;

  const cmsHeadData = parseCmsData(headData);
  const cmsAboutData = parseCmsData(aboutData);
  const cmsFacilityData = parseCmsData(facilityData);

  return (
    <>
      <section className="-mt-20 w-screen min-h-screen xl:min-h-0 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <ProgressiveImage
            src={createAssetsUrl(cmsHeadData?.image)}
            placeholder={room}
          >
            {(src, loading) => (
              <img
                src={src}
                alt=""
                className={`w-full h-full object-cover -z-10 brightness-75 ${
                  loading ? "loading" : "heroloaded"
                }`}
              />
            )}
          </ProgressiveImage>
        </div>
        <div className="h-screen xl:h-[75vh] xl:py-48 flex flex-col justify-center items-center">
          <h4 className="text-white z-40 typo-display capitalize text-5xl mb-6 xl:mb-0">
            {cmsHeadData?.title}
          </h4>
          <ReactMarkdown className="typo-body-2 text-white max-w-[560px] mx-4 xl:mx-0 mt-2 md:mt-6 text-center">
            {cmsHeadData?.description}
          </ReactMarkdown>
        </div>
      </section>

      <section className="py-20 bg-whiteGray">
        <div className="container mx-auto flex justify-center flex-col gap-10 xl:gap-0 xl:flex-row">
          <div className="flex-1 p-8 xl:p-0 xl:max-w-2xl flex flex-col gap-8">
            <h4 className="text-5xl my-4 transition-all duration-500 font-walbaum">
              {cmsAboutData?.title}
            </h4>
            <div className="flex-col flex gap-4">
              {cmsAboutData?.descriptions?.map((data) => (
                <ReactMarkdown
                  key={data?.id}
                  className="leading-relaxed typo-body-2 transition-all duration-500"
                >
                  {data?.description}
                </ReactMarkdown>
              ))}
            </div>

            <div>
              {cmsAboutData?.facilities
                ?.slice(0, 4)
                .map(({ label, value }, index) => (
                  <div
                    key={index}
                    className="border-b py-4 flex justify-between"
                  >
                    <p>{label}</p>
                    <p>{value}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex-1 xl:max-w-lg py-16 px-12 h-max bg-white xl:ml-20 flex flex-col gap-8 xl:gap-16">
            <h4 className="header flex items-center gap-4 typo-body-2 font-walbaum">
              <span className="w-10 h-px bg-primary inline-block"></span>
              {cmsFacilityData?.title}
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 opacity-70">
              {cmsFacilityData?.facilityNames?.slice(0, 8).map((data) => {
                return (
                  <div key={data?.id} className="flex gap-4 items-center">
                    <div className="min-w-max">
                      <img
                        src={`${config.BASE_IMAGE_URL}${data?.icon?.data?.attributes?.url}`}
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <span>{data?.name}</span>
                  </div>
                );
              })}
            </div>
            <a
              href={`tel:${cmsFacilityData?.button?.phone}`}
              className="border-button w-full flex justify-center items-center"
            >
              {cmsFacilityData?.button.label}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default MeetingRoom;
