import { useQuery } from "@tanstack/react-query";
import { AiOutlineWifi } from "react-icons/ai";
import { BiAtom, BiLoader, BiShapeSquare } from "react-icons/bi";
import { BsClock, BsDatabaseAdd } from "react-icons/bs";
import { PiAlignBottomDuotone } from "react-icons/pi";
import { RiBusFill } from "react-icons/ri";
import { service } from "../../api/home";
import { parseCmsData } from "../../libs/functions";
import { useCallback, useEffect, useState } from "react";
import Error from "../../components/Error";

export const ServiceSection = () => {
  const { data,error } = useQuery(["homeService"], service);
  if(error) return <Error />
  const [services, setServices] = useState([]);

  const cmsData = parseCmsData(data);

  const createServices = useCallback(() => {
    if (!cmsData) return;

    let _services = [];
    for (let i = 0; i < Math.ceil(cmsData?.serviceNames?.length / 3); i++) {
      _services.push(cmsData?.serviceNames?.slice(i * 3, i * 3 + 3));
    }

    setServices(_services);
  }, [cmsData]);

  useEffect(() => {
    createServices();
  }, [createServices]);

  return (
    <section className="bg-[#F8F9FA] xl:py-14 py-10 px-4 xl:px-0">
      <div className="container mx-auto flex justify-between flex-col xl:flex-row gap-4 xl:gap-0">
        <h4 className="xl:typo-menu typo-section-title font-walbaum">
          {cmsData?.title}
        </h4>

        <div className="w-full xl:w-max grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 xl:gap-8 gap-0">
          {services?.map((data, i) => (
            <div key={i} className="col-span-1">
              {data?.map((dt) => (
                <div
                  key={dt?.id}
                  className="typo-body flex items-center gap-3 mb-2 xl:mb-0"
                >
                  <BsClock />
                  <span className="pb-1"> {dt?.name}</span>
                </div>
              ))}
              {/* <div className="typo-body flex items-center gap-3 mb-2 xl:mb-0">
              <BiShapeSquare />
              <span className="pb-1"> All day air conditioning</span>
            </div>
            <div className="typo-body flex items-center gap-3 mb-2 xl:mb-0">
              <BiAtom />
              <span className="pb-1"> In-room dining service</span>
            </div> */}
            </div>
          ))}
          {/* <div className="col-span-1">
            <div className="typo-body flex items-center gap-3 mb-2 xl:mb-0">
              <PiAlignBottomDuotone />
              <span className="pb-1"> Refreshment Pool</span>
            </div>
            <div className="typo-body flex items-center gap-3 mb-2 xl:mb-0">
              <RiBusFill />
              <span className="pb-1"> Voyage Bar</span>
            </div>
            <div className="typo-body flex items-center gap-3 mb-2 xl:mb-0">
              <BsClock />
              <span className="pb-1"> Restaurant</span>
            </div>
          </div>
          <div className="col-span-1">
            <div className="typo-body flex items-center gap-3 mb-2 xl:mb-0">
              <AiOutlineWifi />
              <span className="pb-1"> High speed WiFi</span>
            </div>
            <div className="typo-body flex items-center gap-3 mb-2 xl:mb-0">
              <BiLoader />
              <span className="pb-1"> Events Festivals Banquet</span>
            </div>
            <div className="typo-body flex items-center gap-3 mb-2 xl:mb-0">
              <BsDatabaseAdd></BsDatabaseAdd>
              <span className="pb-1"> 24-hr monitored CCTV</span>
            </div>
          </div>
          <div className="col-span-1">
            <div className="typo-body flex items-center gap-3 mb-2 xl:mb-0">
              <PiAlignBottomDuotone />
              <span className="pb-1"> Laundry</span>
            </div>
            <div className="typo-body flex items-center gap-3 mb-2 xl:mb-0">
              <BiShapeSquare />
              <span className="pb-1"> Airport Pick-up</span>
            </div>
            <div className="typo-body flex items-center gap-3 mb-2 xl:mb-0">
              <BiLoader />
              <span className="pb-1"> Security Guard for 24 hrs</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
