import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";

import Rectangle10 from "../../assets/images/Rectangle10.png";
import RestaurantColor from "../../assets/images/restaurant-color.svg";
import { OutlineButton } from "../../components/OutlineButton";
import { feature } from "../../api/home";
import { createAssetsUrl, parseCmsData } from "../../libs/functions";
import Error from "../../components/Error";

export const FeaturesSection = () => {
  const { data, error } = useQuery(["homeFeature"], feature);
  if (error) return <Error />;
  const cmsData = parseCmsData(data);

  return (
    <section id="features" className="container mx-auto overflow-hidden">
      {cmsData?.featureCards?.map((data, index) => {
        const isLeft = !(index % 2);

        return (
          <div
            key={data?.id}
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="800"
            className={`flex xl:py-20 py-10 justify-center flex-col ${
              isLeft ? "xl:flex-row" : "xl:flex-row-reverse"
            } `}
          >
            <div
              className={`relative mb-[80px] xl:mb-0 mx-4 xl:mx-0 ${
                isLeft ? "xl:mr-[250px]" : "xl:ml-[250px]"
              }`}
            >
              <img
                src={createAssetsUrl(data?.mainImage)}
                alt=""
                className="h-[300px] w-full xl:h-[650px] xl:w-[420px] object-cover"
              />

              <div
                data-aos={isLeft ? "fade-down" : "fade-right"}
                data-aos-offset="100"
                data-aos-duration="500"
                className={`h-44 w-[300px] absolute xl:h-64 xl:w-[440px]  xl:top-1/2 xl:-translate-y-1/3 -bottom-12 right-0 xl:-right-48 ${
                  isLeft ? "right-0 xl:-right-48" : "left-0 xl:-left-48"
                }`}
              >
                <img
                  src={createAssetsUrl(data?.subImage)}
                  alt=""
                  className={`h-full w-full object-cover border-[12px] border-white shadow-lg ${
                    isLeft && "rotate-[-3deg]"
                  }`}
                  style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                />
              </div>
            </div>

            <div className="z-20 w-full xl:w-[400px] bg-white px-10 pb-10 flex flex-col justify-center items-center transition-opacity duration-200">
              <img
                src={createAssetsUrl(data.icon)}
                alt=""
                className="w-20 h-20 mb-2"
              />
              <h6 className="typo-title capitalize typo-text-black font-modesfa">
                {data?.title}
              </h6>
              <p className="py-6 typo-body-2 text-center typo-text-black">
                {data?.description}
              </p>
              <OutlineButton
                routeTo={data?.button?.link}
                text={data?.button?.name}
              ></OutlineButton>
            </div>
          </div>
        );
      })}

      {/* <div
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="800"
        className="flex xl:py-20 py-10 justify-center flex-col xl:flex-row-reverse"
      >
        <div className="relative xl:ml-[250px] mb-[60px] xl:mb-0 mx-4 xl:mx-0">
          <img
            src={Rectangle10}
            alt=""
            className="h-[300px] xl:max-w-xl w-full xl:h-[650px] xl:w-auto object-cover"
          />

          <img
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-duration="550"
            src={Rectangle10}
            alt=""
            className="h-44 w-[300px] absolute xl:h-64 xl:w-[440px] left-4 -bottom-12 object-cover border-[12px] border-white xl:-left-48 xl:top-1/2 xl:-translate-y-1/3"
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          />
        </div>

        <div className="z-20 w-full xl:w-[400px] bg-white px-10 pb-10 flex flex-col justify-center items-center transition-opacity duration-200">
          <img src={RestaurantColor} alt="" className="w-24 h-24" />
          <h6 className="typo-title capitalize typo-text-black font-modesfa">
            Meeting Room
          </h6>
          <p className="py-6 typo-body-2 text-center typo-text-black">
            Lorem ipsum dolor sit amet consectetur. Congue felis nunc dictum
            urna non suscipit convallis. A vulputate nunc commodo urna
          </p>
          <OutlineButton
            routeTo="/meeting-room"
            text="Let's Explore"
          ></OutlineButton>
        </div>
      </div> */}
    </section>
  );
};
