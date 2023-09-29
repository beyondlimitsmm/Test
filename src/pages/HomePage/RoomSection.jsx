/* eslint-disable no-undef */

import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

import RoomsDoor from "../../assets/images/rooms-door.svg";
import RoomsBg from "../../assets/images/rooms.png";
import { OutlineButton } from "../../components/OutlineButton";
import { room } from "../../api/home";
import { createAssetsUrl, parseCmsData } from "../../libs/functions";
import Error from "../../components/Error";

export const RoomSection = () => {
  const roomSectionRef = useRef();
  const { data, error } = useQuery({ queryKey: ["room"], queryFn: room });
  const cmsData = parseCmsData(data);

  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      gsap.to("#home-rooms", {
        scrollTrigger: {
          trigger: "#home-rooms",
          start: "0% 50%",
          end: "90% bottom",
          scrub: 1,
          // markers: true,
        },
        width: "80vw",
      });

      gsap.to("#home-rooms-image", {
        scrollTrigger: {
          trigger: "#home-rooms-image",
          start: "50% 90%",
          // end: "50% 90%",
          scrub: true,
          // markers: true,
        },
        backgroundPosition: "50% -125px",
      });
    }
  }, []);

  if (error) return <Error />;

  return (
    <section id="roomSection" ref={roomSectionRef}>
      {/* Desktop */}
      <div className="hidden xl:flex w-screen mb-20 overflow-hidden z-0 relative justify-center items-center">
        <div
          className="w-screen h-[calc(100vh-120px)] overflow-hidden relative hidden xl:block"
          id="home-rooms"
        >
          <div
            id="home-rooms-image"
            className="w-full h-full bg-no-repeat bg-cover bg-fixed"
            style={{
              backgroundImage: `url(${createAssetsUrl(cmsData?.image)})`,
              backgroundPosition: "50% 125px",
            }}
          >
            <div className="p-10 bg-white/90 w-[300px] xl:w-[500px] h-max absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <div className="flex flex-col gap-3 2xl:gap-6 items-center">
                <img
                  src={createAssetsUrl(cmsData?.icon)}
                  alt="Rooms"
                  width="60"
                  height="60"
                  className="w-[60px] h-[60px]"
                />
                <h4 className="typo-title capitalize typo-text-black font-modesfa">
                  {cmsData?.title}
                </h4>
                <p className="typo-body-2 text-center max-w-[450px] typo-text-black">
                  {cmsData?.description}
                </p>
              </div>
              <div className="mt-8 flex justify-center items-center">
                <OutlineButton
                  routeTo={cmsData?.button?.link}
                  text={cmsData?.button?.name}
                ></OutlineButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Section */}
      <div className="flex xl:hidden w-screen h-[70vh] mb-10 overflow-hidden z-0 relative justify-center items-center">
        <div
          className="w-full h-full bg-no-repeat bg-cover bg-fixed"
          style={{
            backgroundImage: `url('${RoomsBg}')`,
          }}
        >
          <div className="px-6 py-10 xl:p-10 bg-white/90 w-[350px] xl:w-[500px] h-max absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="flex flex-col gap-3 2xl:gap-6 items-center">
              <img
                src={RoomsDoor}
                alt="Rooms"
                width="60"
                height="60"
                className="w-[60px] h-[60px]"
              />
              <h4 className="typo-title capitalize typo-text-black font-modesfa">
                Rooms
              </h4>
              <p className="typo-body-2 text-center max-w-[450px] typo-text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo amet rerum ex quibusdam, nisi debitis aliquid eaque
                animi iure assumenda?
              </p>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <OutlineButton
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
